import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
import { getStorage } from 'firebase/storage';

// Firebase configuration for myscola-5ec1f project
const firebaseConfig = {
  apiKey: 'AIzaSyBkMktbTfBNIdhtBwCC_cRBEavKeuTyCGA',
  authDomain: 'myschola-5ec1f.firebaseapp.com',
  projectId: 'myschola-5ec1f',
  // Use the Firebase Storage bucket name (not the hosting domain)
  // Check in Firebase Console → Storage for the exact bucket ID.
  storageBucket: 'myschola-5ec1f.appspot.com',
  messagingSenderId: '927860875256',
  appId: '1:927860875256:web:ce73f8eabd09cac6f3400d',
  measurementId: 'G-XTC703H7RN'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services used in the app
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
export const storage = getStorage(app);
