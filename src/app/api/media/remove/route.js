import { NextResponse } from 'next/server';
import { cloudinary } from 'Uti/cloudinary';
import { admin, fs } from 'Uti/firebase-admin';

export async function POST(req) {
    let { headers, body } = req;

    try {
        let token = headers.get('authorization')?.split('Bearer ')[1];
        let { uid } = await admin.auth().verifyIdToken(token);

        let rejected = 0;
        let deletedBytes = 0;

        let quotaRef = fs.collection('quote').doc(uid);

        for (let { id, type } of body.files) {
            if (!id.startsWith(`users/${uid}`)) {
                rejected++;
                continue;
            }

            try {
                let asset = await cloudinary.api.resource(id, { resource_type: type });
                let res = await cloudinary.uploader.destroy(id, { resource_type: type });
                res.result == 'ok' ? deletedBytes += asset.bytes : rejected++;
            }
            catch { rejected++ }
        }

        deletedBytes > 0 && (await db.runTransaction(async tx => {
            let doc = await tx.get(quotaRef);
            doc.exists && tx.update(quotaRef, {
                used: Math.max(0, doc.get('used') - deletedBytes),
            })
        }))

        return NextResponse.json({
            message: rejected
                ? 'Some files were rejected or could not be removed'
                : 'All corresponding files have been removed',
            rejectedCount: rejected,
        })
    }
    catch (err) {
        console.error(err);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}