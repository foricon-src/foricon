'use client';

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';

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