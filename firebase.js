// Import the functions you need from the SDKs you need
import { initializeApp, getApp,getApps } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
//   "AIzaSyBFB00c62dNBGibEAeEpwMQoun_tHY_D_4",
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//    "insta-v4-14649.firebaseapp.com",
  projectId: process.env.FIREBASE_PROJECT_ID,
//   "insta-v4-14649",
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
//   "insta-v4-14649.appspot.com",
  messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID,
//   "863404275151",
  appId:  process.env.FIREBASE_APP_ID
//   "1:863404275151:web:1088a1f34688eb50918eba"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage()

export {app,db,storage}
