import { admin } from './firebase-admin';

export default async function getIdFromToken(authorization) {
    try {
        let match = authorization?.match(/^Bearer\s+(\S+)$/i);
        if (!match) return { ok: false };
        let { uid } = await admin.auth().verifyIdToken(match[1]);
        return { ok: true, uid };
    }
    catch (err) {
        return { ok: false };
    }
}