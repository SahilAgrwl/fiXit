
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithRedirect, getRedirectResult } from 'firebase/auth';



const firebaseConfig = {
  // Firebase configuration
  apiKey: "AIzaSyAWExnZDBbrfwfqME4tOtjOJcdaw3449HU",
  authDomain: "assignment-f40fe.firebaseapp.com",
  projectId: "assignment-f40fe",
  storageBucket: "assignment-f40fe.appspot.com",
  messagingSenderId: "1091578402547",
  appId: "1:1091578402547:web:5c5af641a0e688744bc986",
  measurementId: "G-8ZR988XWWW"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithRedirect, getRedirectResult };
