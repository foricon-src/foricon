import admin from 'firebase-admin';

export function getAdmin() {
    let obj = {
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    }
    console.log(obj)
    admin.initializeApp({
        credential: admin.credential.cert(obj)
    })
    return admin;
}
export function getDb() {
    return getAdmin().firestore();
}