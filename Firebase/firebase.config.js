// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiZz_DrxPKDP7CROi5cdEAJflOZ-uEgSI",
  authDomain: "the-news-client-server.firebaseapp.com",
  projectId: "the-news-client-server",
  storageBucket: "the-news-client-server.appspot.com",
  messagingSenderId: "192878762744",
  appId: "1:192878762744:web:38f1bf35bb5c5da4ccb90d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;