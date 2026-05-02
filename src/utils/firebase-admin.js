import admin from 'firebase-admin';
import 'dotenv/config'
admin.initializeApp({
    credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    }),
    databaseURL: 'https://foricon-database-default-rtdb.asia-southeast1.firebasedatabase.app',
})
const fs = admin.firestore();
const db = admin.database();
export { admin, fs, db };