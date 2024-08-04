// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTo4e8ME7xaF-XsGudHhS_YLLZ9gd3zWA",
  authDomain: "inventory-management-f5b4a.firebaseapp.com",
  projectId: "inventory-management-f5b4a",
  storageBucket: "inventory-management-f5b4a.appspot.com",
  messagingSenderId: "193668303369",
  appId: "1:193668303369:web:4f42cd16952db92a7d86d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export {firestore}