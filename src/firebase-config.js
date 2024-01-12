// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCO8o58RgIoL5tH0nRdL2kbPxiN7gWOHFA",
  authDomain: "simple-chatapp-cde95.firebaseapp.com",
  projectId: "simple-chatapp-cde95",
  storageBucket: "simple-chatapp-cde95.appspot.com",
  messagingSenderId: "1017243982882",
  appId: "1:1017243982882:web:38ae0d11488eecbd8c3e7b",
  measurementId: "G-HCPBWNW2ZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);