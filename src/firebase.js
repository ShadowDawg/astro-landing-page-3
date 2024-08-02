// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Replace these with your Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyB4jDtie9KKGZ7XzOfAdfoxWMH4-3Fimbk",
    authDomain: "astro-app1.firebaseapp.com",
    databaseURL: "https://astro-app1-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "astro-app1",
    storageBucket: "astro-app1.appspot.com",
    messagingSenderId: "189041618462",
    appId: "1:189041618462:web:4ad050e79f38e7e07bc80f",
    measurementId: "G-M1QF8HEYNS"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
