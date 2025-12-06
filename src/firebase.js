import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZniUvAr4JQO-AApWDwVJ4lqTz4Fozd4k",
  authDomain: "learnova-a793c.firebaseapp.com",
  projectId: "learnova-a793c",
  storageBucket: "learnova-a793c.firebasestorage.app",
  messagingSenderId: "746486056360",
  appId: "1:746486056360:web:6a04aad62fe8d4076e499d",
  measurementId: "G-D1E21BVFGT"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
