// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFMudvDciY8Aq25BlvWNcDuSlRfjotsWk",
  authDomain: "omrhl-2d997.firebaseapp.com",
  projectId: "omrhl-2d997",
  storageBucket: "omrhl-2d997.appspot.com",
  messagingSenderId: "758703110390",
  appId: "1:758703110390:web:e5c30e17b5e92913e554d7",
  measurementId: "G-7GZ03EE0E3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);