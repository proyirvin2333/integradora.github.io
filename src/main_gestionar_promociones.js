import { getDocs, collection } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { setUpPromocionesADM } from "./app/postListPromocionesADM.js"
import { loginCheck } from "./app/loginCheck.js";
import { auth, db } from './app/firebase.js';
import './app/promocionesForm.js';
import './app/productosForm.js';
import './app/loginCheck.js';
import './app/signupForm.js';
import './app/logOut.js';

onAuthStateChanged(auth, async (user) => {
        if (user) {
                const Promociones = await getDocs(collection(db, 'promociones'))
                setUpPromocionesADM(Promociones.docs)
        } else {
                setUpPost([])
        }
        loginCheck(user)
})