import { initializeApp } from "firebase/app";
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, collection } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyA5TNVZF9UGXq1F_LJreyq7Ht9ldK8vWxE",
    authDomain: "resume-craft-helper.firebaseapp.com",
    projectId: "resume-craft-helper",
    storageBucket: "resume-craft-helper.appspot.com",
    messagingSenderId: "428468103171",
    appId: "1:428468103171:web:8f31804d02f2f23fac4636",
    measurementId: "G-7GP2MKJWG3"
  };

export const FIREBASE_APP = initializeApp(firebaseConfig)
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_FIRESTORE = getFirestore(FIREBASE_APP);
export const FIREBASE_STORAGE = getStorage(FIREBASE_APP);

