import { signOut } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { showMessage } from "./showMessage.js";
import { auth } from "./firebase.js";

const logOut = document.querySelector('#logOut');

logOut.addEventListener('click', async () => {
    await signOut(auth);

    // Muestra el mensaje de cierre de sesión
    showMessage("Sesión cerrada");

    // Inicia un contador de 2 segundos antes de redirigir
    setTimeout(() => {
        window.location.href = "index.html";
    }, 2000);
});
