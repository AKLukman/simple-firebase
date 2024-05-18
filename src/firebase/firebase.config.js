// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-e0VAjMCVjwzmhcakKwSXDtqkBUPEHX0",
  authDomain: "simple-firebase-c29a9.firebaseapp.com",
  projectId: "simple-firebase-c29a9",
  storageBucket: "simple-firebase-c29a9.appspot.com",
  messagingSenderId: "298784381422",
  appId: "1:298784381422:web:acd3592576b8da612196ff",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
