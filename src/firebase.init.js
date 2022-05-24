// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxGybuMIX2pgMC4Xs4Pd3b4htSELpKSyc",
  authDomain: "laptopcams-warehouse.firebaseapp.com",
  projectId: "laptopcams-warehouse",
  storageBucket: "laptopcams-warehouse.appspot.com",
  messagingSenderId: "247541415269",
  appId: "1:247541415269:web:950b99d0c3e2acfb2cb58c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;