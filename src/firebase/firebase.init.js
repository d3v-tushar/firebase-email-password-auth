// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLMBxqeyFC4H-6-VNVB8GVBqEygjaHiok",
  authDomain: "email-password-auth-ab4ea.firebaseapp.com",
  projectId: "email-password-auth-ab4ea",
  storageBucket: "email-password-auth-ab4ea.appspot.com",
  messagingSenderId: "452283145449",
  appId: "1:452283145449:web:ce083be4af0b49cefd6478"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;