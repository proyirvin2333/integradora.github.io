import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { auth } from './firebase.js';
import { showMessage } from "./showMessage.js";

const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    // Validación del correo electrónico
    if (!isValidEmail(email)) {
        showMessage("Correo inválido, revisa bien la información", "error");
        return;
    }

    // Validación de la contraseña
    if (!isValidPassword(password)) {
        showMessage('La contraseña es muy corta, debe tener al menos 6 caracteres', "error");
        return;
    }

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
        const signUpModal = document.querySelector('#SignUpModal');
        const modal = bootstrap.Modal.getInstance(signUpModal);
        modal.hide();
        showMessage("Bienvenido " + userCredentials.user.email);
    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            showMessage('El correo ya está en uso', "error");
        } else {
            showMessage('Algo salió mal :(', "error");
        }
    }
});

// Función para validar el correo electrónico
function isValidEmail(email) {
    // Utiliza una expresión regular para validar el formato del correo
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}

// Función para validar la contraseña
function isValidPassword(password) {
    // Verifica que la contraseña tenga al menos 6 caracteres
    return password.length >= 6;
}
