import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { showMessage } from "./showMessage.js";
import { auth } from './firebase.js';

const signInForm = document.querySelector('#signin-form');

signInForm.addEventListener('submit', async e => {
    e.preventDefault()

    const email = signInForm['signin-email'].value,
        password = signInForm['signin-password'].value;

    try {
        const credentials = await signInWithEmailAndPassword(auth, email, password)
        window.location.href = "vista_administrador.html";
        showMessage('Welcome')        
    } catch (error) {
        if (error.code === "auth/wrong-password") {
            showMessage('Wrong password', 'error')
        } else if (error.code == "auth/user-not-found") {
            showMessage('User not found', 'erro')
        } else {
            showMessage(error.message, 'error')
        }
    }
})