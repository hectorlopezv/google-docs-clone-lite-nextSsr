// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBw7Qi1HNWit7KTbaH1ok1dMyMinO893dQ",
  authDomain: "docs-lite-clone-next.firebaseapp.com",
  databaseURL: "https://docs-lite-clone-next-default-rtdb.firebaseio.com",
  projectId: "docs-lite-clone-next",
  storageBucket: "docs-lite-clone-next.appspot.com",
  messagingSenderId: "855319788444",
  appId: "1:855319788444:web:c50448de72613537746659",
  measurementId: "G-33VNSYJLZL",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();

export { app, db };
