import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "bin-shabeeran.firebaseapp.com",
  projectId: "bin-shabeeran",
  storageBucket: "bin-shabeeran.appspot.com",
  messagingSenderId: "362287716455",
  appId: "1:362287716455:web:4fd3b2312a614ef4a65cc2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);