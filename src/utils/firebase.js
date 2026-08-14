// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRrejB9SRdcT8W7Kf-b3vZyv2Rtjg3psU",
  authDomain: "netflix-gpt-d8cfb.firebaseapp.com",
  projectId: "netflix-gpt-d8cfb",
  storageBucket: "netflix-gpt-d8cfb.firebasestorage.app",
  messagingSenderId: "976349458792",
  appId: "1:976349458792:web:8056fc04fb209bca7c26dd",
  measurementId: "G-9QK7Z14L55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {auth};