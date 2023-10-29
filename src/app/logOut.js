import { signOut } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { showMessage } from "./showMessage.js"
import { auth } from "./firebase.js";

const logOut = document.querySelector('#logOut')

logOut.addEventListener('click', async () => {
    await signOut(auth)
    window.location.href = "/src/index.html";

    showMessage("LogOut")
})