// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
    getFirestore,
    // collection, 
    // getDocs,
    // onSnapshot,
    // addDoc, deleteDoc, doc,
    // query, where,
    // orderBy, serverTimestamp,
    // getDoc, updateDoc
} from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7qwVSCsfgQ1Exj971nPTEj3AmlCWwpzM",
  authDomain: "project-planner-katerina-shche.firebaseapp.com",
  projectId: "project-planner-katerina-shche",
  storageBucket: "project-planner-katerina-shche.appspot.com",
  messagingSenderId: "340523613692",
  appId: "1:340523613692:web:34c057a1786d6db5b08679"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// init servises
const projectFirestore = getFirestore(app);

export { projectFirestore }