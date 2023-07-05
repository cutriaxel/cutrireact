import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAuth, GoogleAuthProvider  } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyDM270CvyBq6m4HtPalFlejL755125eGsA",
  authDomain: "cutritech.firebaseapp.com",
  projectId: "cutritech",
  storageBucket: "cutritech.appspot.com",
  messagingSenderId: "271819536982",
  appId: "1:271819536982:web:cc86f5d25f49d4f96fd9f7"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
