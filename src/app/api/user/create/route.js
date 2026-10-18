import { adAuth, fs } from 'Uti/firebase-admin';
import getUserData from 'Com/user-data';
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        let token = req.headers.get('authorization')?.split('Bearer ')[1];
        let { uid } = await adAuth.verifyIdToken(token);
    
        let ref = fs.doc(`users/${uid}`);
        let snap = await ref.get();

        await adAuth.updateUser(uid, {
            photoURL: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjDdMEaj-b8vWZiL6TYKH5XENGyNr-QZZ2BxFdkV-SfNNBPhTOFmuzjxyOJOQvw0e96x40y1UJbHVIjgidnz4CAX0x9wKX5kS7uGJ4ptYhTDRigXfcxiTGK3DBLPR2CEw9eFvGwUqeNRavCIIaJXzveJ7b0UZxGxkOQDmrtAmIp09P6br6tc0tVaqzOS08/s1600/male-01.png',
        })
    
        if (!snap.exists) await ref.set(getUserData());

        fs.doc(`quota/${uid}`).set({ used: 0 })

        return new NextResponse(null, { status: 204 })
    }
    catch (err) {
        console.error(err);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 })
    }
}