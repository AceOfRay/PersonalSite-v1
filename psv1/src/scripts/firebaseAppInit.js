import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAl04M-6cuICshsJddODlGAcfb2ruyo99w",
  authDomain: "rays-website-29d7b.firebaseapp.com",
  projectId: "rays-website-29d7b",
  storageBucket: "rays-website-29d7b.appspot.com",
  messagingSenderId: "413250991817",
  appId: "1:413250991817:web:ecddb6e727fe2fabeebf18",
  measurementId: "G-THMY0FT1P8",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db}
