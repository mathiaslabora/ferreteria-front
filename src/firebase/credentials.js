// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCH8zNSVEbGDpHztDsTGvUEtZBvtgj10vo",
  authDomain: "ferreteria-raul.firebaseapp.com",
  projectId: "ferreteria-raul",
  storageBucket: "ferreteria-raul.appspot.com",
  messagingSenderId: "223053533307",
  appId: "1:223053533307:web:94f99823d8933dac8f92de"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
