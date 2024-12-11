
import { initializeApp } from "firebase/app";
import {getFireStore} from  'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAHnrx9UT2rxBO8CM64cWx9unbPk6aObdQ",
  authDomain: "house-marketplace-app-2dc2d.firebaseapp.com",
  projectId: "house-marketplace-app-2dc2d",
  storageBucket: "house-marketplace-app-2dc2d.firebasestorage.app",
  messagingSenderId: "230222793921",
  appId: "1:230222793921:web:a2d7549f32d998f5b59840"
};

const app = initializeApp(firebaseConfig);
export const db = getFireStore()
