import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDFJrzbq5gdHXPQYScZQZ1tsz_uBILom9w",
  authDomain: "auth-a10-a87d5.firebaseapp.com",
  projectId: "auth-a10-a87d5",
  storageBucket: "auth-a10-a87d5.firebasestorage.app",
  messagingSenderId: "928202135529",
  appId: "1:928202135529:web:d8556f172eb0d604c05d78",
  measurementId: "G-7BQ2Q1CZYW"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

