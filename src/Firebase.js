// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwHLi3eKuTKj8cmMOURwXJjD-0I55SerA",
  authDomain: "myntrav2-36900.firebaseapp.com",
  projectId: "myntrav2-36900",
  storageBucket: "myntrav2-36900.appspot.com",
  messagingSenderId: "1094239799498",
  appId: "1:1094239799498:web:7628c28580d460ae20cc33",
  measurementId: "G-LE4DJT9069"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;