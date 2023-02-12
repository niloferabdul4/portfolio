
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyA5MLMElgGkIm9OnV6F2tfVhi4OvfAvGZc",
  authDomain: "portfolio-74f66.firebaseapp.com",
  projectId: "portfolio-74f66",
  storageBucket: "portfolio-74f66.appspot.com",
  messagingSenderId: "495644489217",
  appId: "1:495644489217:web:09a062873fc7803e7f3200"
};

const app=initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db=getFirestore(app)

