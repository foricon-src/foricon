import { NextResponse } from 'next/server';
import getIdFromToken from 'Uti/get-id-from-token';
import getMedia from 'Uti/get-media';

export async function POST(req) {
    try {
        let res = await getIdFromToken(req.headers.get('authorization'));
        if (!res.ok) return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        let { uid } = res;
        let result = await getMedia(uid);
        return NextResponse.json({ usedBytes: result.used, files: result.files })
    }
    catch (err) {
        console.error(err);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 })
    }
}