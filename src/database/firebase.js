import firebase from 'firebase'
import admin from "firebase-admin";
import serviceAccount from '../../config/firebase.json'

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://scratchlist-bafaa-default-rtdb.firebaseio.com"
});

export const db = admin.firestore();


