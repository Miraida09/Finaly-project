// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFJrzbq5gdHXPQYScZQZ1tsz_uBILom9w",
  authDomain: "auth-a10-a87d5.firebaseapp.com",
  projectId: "auth-a10-a87d5",
  storageBucket: "auth-a10-a87d5.firebasestorage.app",
  messagingSenderId: "928202135529",
  appId: "1:928202135529:web:d8556f172eb0d604c05d78",
  measurementId: "G-7BQ2Q1CZYW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);