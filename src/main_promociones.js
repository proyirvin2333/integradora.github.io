import { getDocs, collection } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
import { setUpPromociones } from "./app/postListPromociones.js"
import { auth, db } from './app/firebase.js';
import './app/signinForm.js';

onAuthStateChanged(auth, async () => {
        const Promociones = await getDocs(collection(db, 'Promociones'))
        setUpPromociones(Promociones.docs)
})