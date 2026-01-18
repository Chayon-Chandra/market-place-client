// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAihK9IUyUP6GcK9n3JNGzymupu5BBf0RE",
  authDomain: "market-place-47e5c.firebaseapp.com",
  projectId: "market-place-47e5c",
  storageBucket: "market-place-47e5c.firebasestorage.app",
  messagingSenderId: "327566675323",
  appId: "1:327566675323:web:f1ddff29d39013894241de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);