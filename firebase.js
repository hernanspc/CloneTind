import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBX-ZUUvyxmGKtj4STHqIezlEr4VIHBHeQ",
  authDomain: "tinercode-faf61.firebaseapp.com",
  projectId: "tinercode-faf61",
  storageBucket: "tinercode-faf61.appspot.com",
  messagingSenderId: "796198051959",
  appId: "1:796198051959:web:ae6f1e40b389c1f1566672",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const storage = getStorage();

export { auth, db, storage };
