// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCrglKRgVBS7eUuWZk5Mf70xSD0NY4y2JA",
  authDomain: "portfolio-1bb7b.firebaseapp.com",
  projectId: "portfolio-1bb7b",
  storageBucket: "portfolio-1bb7b.appspot.com",
  messagingSenderId: "1040148364440",
  appId: "1:1040148364440:web:b41ead4881a486483ba4ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export {app};