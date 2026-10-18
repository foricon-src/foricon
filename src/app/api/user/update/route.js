import { adAuth, fs } from 'Uti/firebase-admin';
import getUserData from 'Com/user-data';
import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        let token = req.headers.get('authorization')?.split('Bearer ')[1];
        let { uid } = await adAuth.verifyIdToken(token);
        let { name, avatar } = await req.json();

        let obj = {};
        name && (obj.displayName = name);
        avatar && (obj.photoURL = avatar);

        await adAuth.updateUser(uid, obj);
        return new NextResponse(null, { status: 204 });
    }
    catch (err) {
        console.error(err);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}