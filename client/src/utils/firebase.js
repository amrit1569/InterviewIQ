
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
 authDomain: "ai-interviewagent.firebaseapp.com",
  projectId: "ai-interviewagent",
  storageBucket: "ai-interviewagent.firebasestorage.app",
  messagingSenderId: "693600115842",
  appId: "1:693600115842:web:e0a93c55a5e1fa84fe689b"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}