// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth' 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVOwweBD2aOvyIcnOyzygEyHT2In5Lx1M",
  authDomain: "netfilx-51ff3.firebaseapp.com",
  projectId: "netfilx-51ff3",
  storageBucket: "netfilx-51ff3.appspot.com",
  messagingSenderId: "176422354896",
  appId: "1:176422354896:web:49615db371747db13e83d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();