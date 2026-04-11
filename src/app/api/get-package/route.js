import { admin, db } from 'Uti/firebase-admin';
import { getFile } from 'Uti/cloudinary';

export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const uid = searchParams.get('uid');
        let timezone = Number(searchParams.get('timezone'));
        const origin = req.headers.get('origin') || req.headers.get('referer');
        
        if (!uid) return Response.json('Missing UID', { status: 400 });
        if (Number.isNaN(timezone)) return Response.json('Timezone must be a number', { status: 400 });
        
        let userDoc = await db.collection('users').doc(uid).get();
        if (!userDoc.exists) return Response.json('User not found', { status: 404 });
        let user = userDoc.data();
        
        if (!origin || !user.settings.allowedDomains.some(d => origin.includes(d)))
            return Response.json('Domain not allowed', { status: 403 });
        
        let plansSnap = await admin.database().ref('plans').once('value');
        if (!plansSnap.exists()) return Response.json('Plans config missing', { status: 500 });
        let plans = plansSnap.val();
        
        let { plan, pageview: { start, count }, settings } = user;
        let now = new Date();
        now.setHours(now.getHours() + now.getTimezoneOffset() / 60);
        now.setHours(now.getHours() - timezone);
        
        let startDate = new Date(
            start.year,
            start.month,
            start.day,
            start.hours,
            start.minutes,
            start.seconds
        );
        startDate.setHours(startDate.getHours() + start.timezone);
        startDate.setHours(startDate.getHours() - timezone);
        startDate.setDate(startDate.getDate() + 30);
        
        if (now >= startDate) {
            let checkpoint = new Date(now);
            checkpoint.setDate(checkpoint.getDate() - 30);
            let latestStartDate = new Date(startDate);
            while (checkpoint >= latestStartDate)
                latestStartDate.setDate(latestStartDate.getDate() + 30);
            
            await db.doc(`users/${uid}`).update({
                pageview: {
                    count: 1,
                    start: {
                        day: latestStartDate.getDate(),
                        month: latestStartDate.getMonth(),
                        year: latestStartDate.getFullYear(),
                        hours: latestStartDate.getHours(),
                        minutes: latestStartDate.getMinutes(),
                        seconds: latestStartDate.getSeconds(),
                        timezone: start.timezone,
                    },
                },
            })
        }
        else {
            if (count >= plans[plan].pageviews) return Response.json('Plan limit exceeded', { status: 403 });
            await db.doc(`users/${uid}`).update({
                'pageview.count': ++count,
            })
        }
        
        let result = { settings, fonts: {} };
        
        settings.versions.includes('b1') && (result.fonts.b1 = getFile('systemAssets/font.ttf', true));
        settings.versions.includes('b2') && (result.fonts.b2 = getFile('systemAssets/fontb2.ttf', true));
        settings.versions.includes('b2w2') && (result.fonts.b2w2 = getFile('systemAssets/fontb2.woff2', true));
        
        return Response.json(result);
    }
    catch (err) {
        console.error(err);
        return Response.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}