import { db } from "Uti/firebase-admin"
import { FieldValue } from "firebase/firestore"
import getOS from "Com/get-os"

export async function POST(req) {
    await db.doc(`users/${uid}/private/default`).update({
        loginHistory: FieldValue.arrayUnion({
            os: getOS(req),
            date: getUTC(),
        }),
    })
}