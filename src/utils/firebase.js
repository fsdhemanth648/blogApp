// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE,
    authDomain: "blog-app-787e7.firebaseapp.com",
    projectId: "blog-app-787e7",
    storageBucket: "blog-app-787e7.appspot.com",
    messagingSenderId: "118509774507",
    appId: "1:118509774507:web:71fcea6d71a641591b79ee"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);