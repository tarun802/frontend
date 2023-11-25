

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMGwgsRRRcmqiMH7ZNgOYjd9IqVrFLexw",
  authDomain: "blahblah-868c1.firebaseapp.com",
  projectId: "blahblah-868c1",
  storageBucket: "blahblah-868c1.appspot.com",
  messagingSenderId: "925202000446",
  appId: "1:925202000446:web:49e4bacd35b3575e903f6f",
  measurementId: "G-LTR5FCVPBR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

