import { getDocs, collection } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { setUpInfantiles } from "./app/postListInfantilesADM.js";
import { setUpGraduacion } from "./app/postListGraduacionADM.js";
import { setUpPost } from "./app/postListADM.js";
import { loginCheck } from "./app/loginCheck.js";
import { setUpXV } from "./app/postListXVADM.js"
import { auth, db } from './app/firebase.js';
import './app/promocionesForm.js';
import './app/productosForm.js';
import './app/loginCheck.js';
import './app/signupForm.js';
import './app/logOut.js';

onAuthStateChanged(auth, async (user) => {
    if (user) {
        const querySnapshot = await getDocs(collection(db, 'boda'))
        setUpPost(querySnapshot.docs)
        const pasteles_infantiles = await getDocs(collection(db, 'infantiles'))
        setUpInfantiles(pasteles_infantiles.docs)
        const pastelesXV = await getDocs(collection(db, 'XV'))
        setUpXV(pastelesXV.docs)
        const pastelesGraduacion = await getDocs(collection(db, 'Graduacion'))
        setUpGraduacion(pastelesGraduacion.docs)
    } else {
        setUpPost([])
    }
    loginCheck(user)
})
