import firebase from 'firebase';
import 'firebase/firestore';

/* 
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
*/

const firebaseConfig = {
  apiKey: "AIzaSyBB0q7qeymqmM-99sk7NZPq3218Ylfgrho",
  authDomain: "electron-chat-1f179.firebaseapp.com",
  projectId: "electron-chat-1f179",
  storageBucket: "electron-chat-1f179.appspot.com",
  messagingSenderId: "790853219275",
  appId: "1:790853219275:web:9da28ea79c326218cefc4e",
  measurementId: "G-E79NSWX1Q7"
};

const db = firebase.initializeApp(firebaseConfig).firestore();
export default db;

firebase.analytics();
