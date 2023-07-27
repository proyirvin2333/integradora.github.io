//import { getDocs, collection } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { loginCheck } from "./app/loginCheck.js";
//import { setUpPost } from "./app/postList.js";
import { auth, db } from './app/firebase.js';
import './app/loginCheck.js';
import './app/signupForm.js';
import './app/logOut.js';

onAuthStateChanged(auth, async (user) => {
    console.log(user)
})
