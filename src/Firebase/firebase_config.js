
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8bVGxxdsQ_IBgLXBX_K-3mDK78Jz_f5M",
  authDomain: "addmission-5954a.firebaseapp.com",
  projectId: "addmission-5954a",
  storageBucket: "addmission-5954a.appspot.com",
  messagingSenderId: "131111323843",
  appId: "1:131111323843:web:d5e4acddbd0d7802b77a76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app