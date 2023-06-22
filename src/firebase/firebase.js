// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDRYLhOrl-DqM0F_OYs0mWNG_D_Fdk9tOM",
  authDomain: "news-app-5a4e8.firebaseapp.com",
  projectId: "news-app-5a4e8",
  storageBucket: "news-app-5a4e8.appspot.com",
  messagingSenderId: "499467762132",
  appId: "1:499467762132:web:d4dc2d1aff5de4fb35be41",
 // databaseURL: "https://news-app-5a4e8-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//export const database = getDatabase(app);
export const db = getFirestore(app);

export const auth = getAuth(app)
export default app;