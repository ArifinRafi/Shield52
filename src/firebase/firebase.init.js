// Import the functions you need from the SDKs you need
import {FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider} from 'firebase/auth'
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAmvYvr3WGQuBscRdnSeYpiWxgkDiiLBbc",
  authDomain: "shield52.firebaseapp.com",
  projectId: "shield52",
  storageBucket: "shield52.appspot.com",
  messagingSenderId: "426965724891",
  appId: "1:426965724891:web:c34a39af015ab040f266fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const provider2 = new GithubAuthProvider();
const providerFacebook = new FacebookAuthProvider();
export {auth, provider, provider2, providerFacebook};