import firebase from 'firebase'
import admin from "firebase-admin";
import serviceAccount from '../../config/firebase.json'

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.FIREBASE_DB_URL
});

export const db = admin.firestore();


