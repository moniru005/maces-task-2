// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1x0NNRFKao8KKsHiJRJgOJ_s9owqA10Y",
  authDomain: "maces-task-2.firebaseapp.com",
  projectId: "maces-task-2",
  storageBucket: "maces-task-2.appspot.com",
  messagingSenderId: "343095764970",
  appId: "1:343095764970:web:f14654888bdd3f66c07493"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export default auth;