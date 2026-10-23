import { NextResponse } from 'next/server';
import { cloudinary } from 'Uti/cloudinary';
import { fs } from 'Uti/firebase-admin';
import getIdFromToken from 'Uti/get-id-from-token';
import getMedia from 'Uti/get-media';

function calcTotalBytes(arr) {
    return arr.reduce((sum, i) => sum + (i.size || i.bytes), 0)
}
async function setQuota(uid) {
    let { files } = await getMedia(uid);
    let used = calcTotalBytes(files);

    await fs.runTransaction(async tx => tx.update(
        fs.collection('quota').doc(uid), { used }
    ))
}
export async function POST(req) {

    try {
        let res = await getIdFromToken(req.headers.get('authorization'));
        if (!res.ok) return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        let { uid } = res;
        let { files } = await req.json();

        let rejected = 0;
        
        for (let { id, type } of files) {
            if (!id.startsWith(`users/${uid}/`)) {
                rejected++;
                continue;
            }

            try {
                await cloudinary.uploader.destroy(id, { resource_type: type });
            }
            catch (err) {
                if (err.http_code == 404) continue;
                rejected++;
            }
        }

        await setQuota(uid);

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