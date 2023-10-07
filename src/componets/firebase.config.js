// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADmfpYrcFEm6vjQkm3Lt1IrmZ_8B_4hFo",
  authDomain: "social-events-3507f.firebaseapp.com",
  projectId: "social-events-3507f",
  storageBucket: "social-events-3507f.appspot.com",
  messagingSenderId: "1042801562220",
  appId: "1:1042801562220:web:fd893bbdf0929eb604be49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth=getAuth(app);

 export default auth;