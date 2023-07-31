import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { loginCheck } from "./app/loginCheck.js";
import { auth } from './app/firebase.js';
import './app/promocionesForm.js'
import './app/productosForm.js'
import './app/loginCheck.js';
import './app/signupForm.js';
import './app/logOut.js';

onAuthStateChanged(auth, async (user) => {
    loginCheck(user)
})
