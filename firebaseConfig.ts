import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA5TNVZF9UGXq1F_LJreyq7Ht9ldK8vWxE",
  authDomain: "resume-craft-helper.firebaseapp.com",
  projectId: "resume-craft-helper",
  storageBucket: "resume-craft-helper.appspot.com",
  messagingSenderId: "428468103171",
  appId: "1:428468103171:web:8f31804d02f2f23fac4636",
  measurementId: "G-7GP2MKJWG3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export it
export const auth = getAuth(app);


