import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js';
import { getDatabase } from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js';

const firebaseConfig = {
    apiKey: 'AIzaSyBHxOn0b3FRDBDQZxM-LFYr07GIOXO81sw',
    authDomain: 'foricon-database.firebaseapp.com',
    projectId: 'foricon-database',
    databaseURL: 'https://foricon-database-default-rtdb.asia-southeast1.firebasedatabase.app',
    storageBucket: 'foricon-database.appspot.com',
    messagingSenderId: '895804546140',
    appId: '1:895804546140:web:2e737ccdd006d4e8b7da99',
    measurementId: 'G-2620Z04T3Q',
}

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);
export const dbFirestore = getFirestore(app);
export const db = getDatabase(app);