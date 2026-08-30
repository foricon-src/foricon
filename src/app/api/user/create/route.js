import { admin, fs } from "Uti/firebase-admin";
import getUserData from "Com/user-data";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        let token = req.headers.get('authorization')?.split('Bearer ')[1];
        let { uid, name, email } = await admin.auth().verifyIdToken(token);
    
        let ref = fs.doc(`users/${uid}`);
        let snap = await ref.get();
    
        if (!snap.exists) await ref.set(getUserData(name, email, uid));
        return new NextResponse(null, { status: 204 })
    }
    catch (err) {
        console.error(err);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 })
    }
}