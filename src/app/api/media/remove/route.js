import { NextResponse } from 'next/server';
import { cloudinary } from 'Uti/cloudinary';
import { admin, fs } from 'Uti/firebase-admin';

export async function POST(req) {

    try {
        let token = req.headers.get('authorization')?.split('Bearer ')[1];
        let { uid } = await admin.auth().verifyIdToken(token);
        let { files } = await req.json();

        let rejected = 0;
        let deletedBytes = 0;

        let quotaRef = fs.collection('quota').doc(uid);
        
        for (let { id, type } of files) {
            if (!id.startsWith(`users/${uid}/`)) {
                rejected++;
                continue;
            }

            try {
                let asset = await cloudinary.api.resource(id, { resource_type: type });
                let res = await cloudinary.uploader.destroy(id, { resource_type: type });
                res.result == 'ok' ? deletedBytes += asset.bytes : rejected++;
            }
            catch (err) {
                if (err.http_code == 404) continue;
                rejected++;
            }
        }

        deletedBytes > 0 && (await fs.runTransaction(async tx => {
            let doc = await tx.get(quotaRef);
            tx.update(quotaRef, {
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