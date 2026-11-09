import { NextResponse } from 'next/server';
import { adAuth } from 'Uti/firebase-admin';

export async function GET(_, { params: { type, value }}) {
    if (!type || !value)
        return NextResponse.json({ message: 'Missing parameter' }, { status: 400 });
    try {
        let user = await adAuth[type == 'uid' ? 'getUser' : 'getUserByEmail'](value);
        return NextResponse.json({
            name: user.displayName,
            email: {
                address: user.email,
                verified: user.emailVerified
            },
            avatar: user.photoURL,
            joined: user.metadata.creationTime,
        })
    }
    catch (err) {
        console.error(err);

        if (err.code === 'auth/user-not-found')
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        if (err.code === 'auth/invalid-uid')
            return NextResponse.json({ message: 'Invalid user ID' }, { status: 400 })

        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}