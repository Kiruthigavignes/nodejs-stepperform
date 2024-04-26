// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHQM5D0M8QjGm0EVjDaVVtFOyvE3YgM4k",
  authDomain: "node-stepperform.firebaseapp.com",
  projectId: "node-stepperform",
  storageBucket: "node-stepperform.appspot.com",
  messagingSenderId: "852791346450",
  appId: "1:852791346450:web:34a6a71d816524d7f25fcb",
  measurementId: "G-ZTBCSNLVYC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);