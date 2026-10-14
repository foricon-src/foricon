import { NextResponse } from 'next/server';
import { cloudinary } from 'Uti/cloudinary';
import { admin, fs } from 'Uti/firebase-admin';

let max = 100 * 1024 * 1024;

export async function POST(req) {
    let uid, reservedBytes = 0, completedBytes = 0, failed = [];
    
    try {
        let token = req.headers.get('authorization').split('Bearer ')[1];
        uid = (await admin.auth().verifyIdToken(token)).uid;
        
        let formData = await req.formData();
        let files = formData.getAll('files');
        let totalBytes = files.reduce((sum, file) => sum + file.size, 0);
        
        let quotaRef = fs.collection('quota').doc(uid);
        
        await fs.runTransaction(async t => {
            let doc = await t.get(quotaRef);
            let used = doc.get('used');
            
            if (used + totalBytes > max) throw new Error('QUOTA_EXCEEDED');
            
            t.update(quotaRef, { used: used + totalBytes });
        })
        
        reservedBytes = totalBytes;
        
        for (let file of files)
            try {
                let buffer = Buffer.from(await file.arrayBuffer());
                let resourceType = file.type.startsWith('image/') ? 'image' : 'video';
                
                await new Promise((resolve, reject) => 
                    cloudinary.uploader.upload_stream(
                        {
                            folder: `users/${uid}`,
                            use_filename: true,
                            unique_filename: false,
                            resource_type: resourceType,
                        },
                        (err, res) => {
                            if (err) return reject(err);
                            return resolve(res)
                        }
                    ).end(buffer)
                )

                completedBytes += file.size;
            }
            catch (err) {
                failed.push(file);
            }
        
        return NextResponse.json({
            message: failed.length
                ? 'Some files encountered errors and have not been uploaded'
                : 'All files have been uploaded successfully',
            failed,
        }, { status: 200 });
    }
    catch (err) {
        let { message } = err;

        if (uid && reservedBytes)
            try {
                let quotaRef = fs.collection('quota').doc(uid);
                await fs.runTransaction(async (tx) => {
                    let doc = await tx.get(quotaRef);
                    
                    doc.exists && tx.update(quotaRef, {
                        used: Math.max(0, doc.get('used') - (reservedBytes - completedBytes)),
                    })
                })
            }
            catch (err) {
                console.error(err);
            }
        
        console.error(err);
        return NextResponse.json(
            { message: message == 'QUOTA_EXCEEDED' ? 'Quota exceeded' : 'Internal server error' },
            { status: message == 'QUOTA_EXCEEDED' ? 413 : 500 }
        )
    }
}