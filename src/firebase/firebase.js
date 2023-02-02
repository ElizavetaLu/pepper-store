import { getAuth, signInAnonymously } from "firebase/auth";
import firebase from 'firebase/compat/app';
import { initializeFirestore } from 'firebase/firestore';
import 'firebase/compat/firestore';


const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAUgOcoguB_SGLZBO5bbS4zDIm7jeFPV_k",
    authDomain: "online-store-5d372.firebaseapp.com",
    projectId: "online-store-5d372",
    storageBucket: "online-store-5d372.appspot.com",
    messagingSenderId: "1048087650518",
    appId: "1:1048087650518:web:4a2ec6384b0be1844d2977",
    measurementId: "G-BZVHRWGGMB"
})


export const firestore = firebase.firestore();
export const auth = getAuth();

initializeFirestore(firebaseConfig, {
    experimentalForceLongPolling: true,
})

signInAnonymously(auth)
    .then(() => {})
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
        console.log(errorMessage)
    });
