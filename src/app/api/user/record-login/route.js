import { admin, fs } from 'Uti/firebase-admin'
import { FieldValue } from 'firebase-admin/firestore';
import getOS from 'Com/get-os';
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        let token = req.headers.get('authorization')?.split('Bearer ')[1];
        let { uid } = await admin.auth().verifyIdToken(token);
        
        console.log(`Received history update request for account ${uid}`)
        
        await fs.doc(`users/${uid}/private/default`).update({
            loginHistory: FieldValue.arrayUnion({
                os: getOS(req),
                date: Date.now(),
            }),
        })
        return new NextResponse(null, { status: 204 })
    }
    catch (err) {
        console.error(err);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 })
    }
}