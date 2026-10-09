import { NextResponse } from 'next/server';
import { cloudinary } from 'Uti/cloudinary';
import { admin } from 'Uti/firebase-admin';

export async function POST(req) {
    try {
        let token = req.headers.get('authorization')?.split('Bearer ')[1];
        let { uid } = await admin.auth().verifyIdToken(token);
        let res = await cloudinary.search
            .expression(`folder:users/${uid}`)
            .with_field('context')
            .max_results(100)
            .execute();
        
        return NextResponse.json(res);
    }
    catch (err) {
        console.error(err);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 })
    }
}