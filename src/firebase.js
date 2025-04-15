// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCxywUNmP528yKvr8mCzj2F3xVuYIjafXQ",
    authDomain: "edupilot-2025.firebaseapp.com",
    projectId: "edupilot-2025",
    storageBucket: "edupilot-2025.firebasestorage.app",
    messagingSenderId: "536152074087",
    appId: "1:536152074087:web:36fb567811253a894371c2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider(); // ✅

export { auth, db,googleProvider  };
