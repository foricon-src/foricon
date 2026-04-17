import { db } from "Uti/firebase-admin"
import { FieldValue } from "firebase/firestore"
import getOS from "Com/get-os"

export async function POST(req) {
    let token = req.headers.get('authorization')?.split('Bearer ')[1];
    let { uid } = await admin.auth().verifyIdToken(token);
    console.log(`Received history update request for account ${uid}`)
    await db.doc(`users/${uid}/private/default`).update({
        loginHistory: FieldValue.arrayUnion({
            os: getOS(req),
            date: getUTC(),
        }),
    })
}