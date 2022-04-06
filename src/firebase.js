// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBuJ2PzHo96PbRRfy4wlKTGxVNKrOG6vr8",
  authDomain: "oct-7ce34.firebaseapp.com",
  projectId: "oct-7ce34",
  storageBucket: "oct-7ce34.appspot.com",
  messagingSenderId: "390196838115",
  appId: "1:390196838115:web:397b5cef02a07f6f6d0fd6",
  measurementId: "G-33ZJDZ2B8G",
};
// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
