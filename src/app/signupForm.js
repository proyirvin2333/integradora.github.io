import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js"
import { auth } from './firebase.js'
import { showMessage } from "./showMessage.js"
const signupForm = document.querySelector('#signup-form')

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const email = signupForm['signup-email'].value,
        password = signupForm['signup-password'].value;

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
        const signUpModal = document.querySelector('#SignUpModal')
        const modal = bootstrap.Modal.getInstance(signUpModal)
        modal.hide()
        showMessage("Bienvenido" + userCredentials.user.email)
    } catch (error) {
        if (error.code === 'auth/invalid-email') {
            showMessage("Correo invalido, revisa bien la información", "error")
        } else if (error.code === 'auth/email-already-in-use') {
            showMessage('El correo ya esta en uso', "error")
        } else if (error.code === 'auth/weak-password') {
            showMessage('La contraseña es muy corta', "error")
        } else if (error.code) {
            showMessage('Algo salio mal :(', "error")
        }
    }
})