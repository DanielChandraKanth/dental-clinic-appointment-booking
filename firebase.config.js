// Import the functions you need from the SDKs you need
import { initializeApp } from "https:/www.gstatic.com/firebase.js/9.8.1/firebase-app.js";
import { getFirestore ,collection,getDoc,doc,setDoc,updateDoc,addDoc,getDocs } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-firestore.js";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword ,signOut,onAuthStateChanged,updateProfile} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJyLv5kTB8lo513HUces42-nvAnvhX1RY",
  authDomain: "appointment-39139.firebaseapp.com",
  projectId: "appointment-39139",
  storageBucket: "appointment-39139.appspot.com",
  messagingSenderId: "217441693252",
  appId: "1:217441693252:web:068e0f2f443b3b7f72d611"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)

export { db,auth,createUserWithEmailAndPassword,signInWithEmailAndPassword,doc,setDoc,signOut,onAuthStateChanged,updateProfile}