// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCv6M5obZ5d8rKSYKdg_OZI4bq5swPpSBI",
    authDomain: "doctors-portal-708b4.firebaseapp.com",
    projectId: "doctors-portal-708b4",
    storageBucket: "doctors-portal-708b4.appspot.com",
    messagingSenderId: "1050611866373",
    appId: "1:1050611866373:web:2c4a8d5158f3c863aeb56c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;