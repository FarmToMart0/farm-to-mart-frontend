
import { initializeApp } from "firebase/app";

import {getAuth,GoogleAuthProvider,signInWithPopup} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAXKV7aG3le-Jl-IF_i0eQ5Pv6qQKYBHIg",
  authDomain: "farm2mart-37dee.firebaseapp.com",
  projectId: "farm2mart-37dee",
  storageBucket: "farm2mart-37dee.appspot.com",
  messagingSenderId: "518617730486",
  appId: "1:518617730486:web:5f8801ddf92db93d2e0517",
  measurementId: "G-XESC3C2N4E"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signUpWithGoogle =()=>{
    signInWithPopup(auth,provider).then((result) =>{
        console.log(result)
    } 
    ).catch((error) =>{
        console.log(error);
    } )
}