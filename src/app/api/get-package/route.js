import { admin, fs } from 'Uti/firebase-admin';
import { getFile } from 'Uti/cloudinary';

export async function GET(req) {
    try {
        let { searchParams } = req.nextUrl;
        let uid = searchParams.get('uid');
        let origin = req.headers.get('origin') || req.headers.get('referer');
        
        if (!uid) return Response.json({ message: 'Missing UID' }, { status: 400 });
        
        let userDoc = await fs.collection('users').doc(uid).get();
        if (!userDoc.exists) return Response.json({ message: 'User not found' }, { status: 404 });
        let user = userDoc.data();
        
        if (!origin || !user.settings.allowedDomains.some(d => origin.includes(d)))
            return Response.json({ message: 'Domain not allowed' }, { status: 403 });
        
        let plansSnap = await admin.database().ref('plans').once('value');
        if (!plansSnap.exists()) return Response.json({ message: 'Plans config missing' }, { status: 500 });
        let plans = plansSnap.val();
        
        let { plan, pageview: { start, count }, settings } = user;
        let now = Date.now();
        
        if (now >= start) {
            let days30 = 30 * 24 * 60 * 60 * 100;
            let checkpoint = now - days30;
            let latestStart = start;
            while (checkpoint >= latestStart) latestStart += days30;
            
            await fs.doc(`users/${uid}`).update({
                pageview: { count: 1, start: Date.now() },
            })
        }
        else {
            if (count >= plans[plan].pageviews) return Response.json({ message: 'Plan limit exceeded' }, { status: 403 });
            await fs.doc(`users/${uid}`).update({
                'pageview.count': ++count,
            })
        }
        
        let result = { settings, fonts: {}, cssBaseUrl: process.env.FORICON_CSS_BASE_URL };
        
        settings.versions.includes('b1') && (result.fonts.b1 = getFile('systemAssets/font.ttf', true));
        settings.versions.includes('b2') && (result.fonts.b2 = getFile('systemAssets/fontb2.ttf', true));
        settings.versions.includes('b2w2') && (result.fonts.b2w2 = getFile('systemAssets/fontb2.woff2', true));
        
        return Response.json(result);
    }
    catch (err) {
        console.error(err);
        return Response.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}