// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUKOEmj1SQrAQ7v9s6gIvCzeeUxV4aB-I",
  authDomain: "facebookclone-5c613.firebaseapp.com",
  projectId: "facebookclone-5c613",
  storageBucket: "facebookclone-5c613.appspot.com",
  messagingSenderId: "992062807559",
  appId: "1:992062807559:web:d2d9a672f062a52d2014a2",
  measurementId: "G-VG3ZC94PHR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth =  getAuth();