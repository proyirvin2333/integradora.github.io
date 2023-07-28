import { getDocs, collection } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { setUpInfantiles } from "./app/postListInfantiles.js"
import { setUpGraduacion } from "./app/postListGraduacion.js"
import { setUpPost } from "./app/postList.js";
import { setUpXV } from "./app/postListXV.js"
import { auth, db } from './app/firebase.js';
import './app/signinForm.js';

onAuthStateChanged(auth, async (e) => {
        const querySnapshot = await getDocs(collection(db, 'boda'))
        setUpPost(querySnapshot.docs)
        const pasteles_infantiles = await getDocs(collection(db, 'infantiles'))
        setUpInfantiles(pasteles_infantiles.docs)
        const pastelesXV = await getDocs(collection(db, 'XV'))
        setUpXV(pastelesXV.docs)
        const pastelesGraduacion = await getDocs(collection(db, 'Graduacion'))
        setUpGraduacion(pastelesGraduacion.docs)
})