import path from 'node:path';
import { NextResponse } from 'next/server';
import { cloudinary } from 'Uti/cloudinary';
import { fs } from 'Uti/firebase-admin';
import getIdFromToken from 'Uti/get-id-from-token';
import getMedia from 'Uti/get-media';

let max = 100 * 1024 * 1024;

function calcTotalBytes(arr) {
    return arr.reduce((sum, i) => sum + (i.size || i.bytes), 0)
}
async function setQuota(prev, uid) {
    let used;

    while (true) {
        let { files } = await getMedia(uid);
        let calculated = calcTotalBytes(files);
        
        if (calculated != prev) {
            used = calculated;
            break;
        }
    }

    await fs.runTransaction(async tx => tx.update(
        fs.collection('quota').doc(uid), { used }
    ))
}

export async function POST(req) {
    let uid, failed = [];
    
    try {
        let res = await getIdFromToken(req.headers.get('authorization'));
        if (!res.ok) return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        uid = res.uid;
        
        let formData = await req.formData();
        let files = formData.getAll('files');

        if (files.some(i => !(i instanceof File)))
            return NextResponse.json({ message: 'Invalid files' }, { status: 400 });

        let totalBytes = calcTotalBytes(files);

        if (totalBytes > 4 * 1024 * 1024)
            return NextResponse.json({ message: 'Content too large' }, { status: 413 });

        let prev = calcTotalBytes((await getMedia(uid)).files);
        
        let quotaRef = fs.collection('quota').doc(uid);
        
        await fs.runTransaction(async t => {
            let doc = await t.get(quotaRef);
            let used = doc.get('used');
            
            if (used + totalBytes > max) throw new Error('QUOTA_EXCEEDED');
            
            t.update(quotaRef, { used: used + totalBytes });
        })
        
        for (let file of files)
            try {
                let buffer = Buffer.from(await file.arrayBuffer());
                let resourceType = file.type.startsWith('image/') ? 'image' : 'video';

                let filename = path.parse(file.name).name;
                
                await new Promise((resolve, reject) => 
                    cloudinary.uploader.upload_stream(
                        {
                            folder: `users/${uid}`,
                            public_id: filename,
                            resource_type: resourceType,
                        },
                        (err, res) => {
                            if (err) return reject(err);
                            return resolve(res)
                        }
                    ).end(buffer)
                )
            }
            catch (err) {
                failed.push(file);
            }

        await setQuota(prev, uid);
        
        return NextResponse.json({
            message: failed.length
                ? 'Some files encountered errors and have not been uploaded'
                : 'All files have been uploaded successfully',
            failed,
        }, { status: 200 });
    }
    catch (err) {
        let { message } = err;
        console.error(err);

        try {
            await setQuota(uid);
        }
        catch (error) {
            console.error(error);
        }
        finally {
            return NextResponse.json(
                { message: message == 'QUOTA_EXCEEDED' ? 'Quota exceeded' : 'Internal server error' },
                { status: message == 'QUOTA_EXCEEDED' ? 413 : 500 }
            )
        }
    }
}