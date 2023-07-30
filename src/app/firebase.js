//FIREBASE CODE
//Aquí se importan las funciones que necesites del SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getFirestore, collection, addDoc, deleteDoc, doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js"
import { getAuth } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
// TODO: Añade más productos de SDKs Firebase de este link
// https://firebase.google.com/docs/web/setup#available-libraries


// Configuración de tu app web
const firebaseConfig = {
    apiKey: "AIzaSyBaIb3fy_Qiz8J6AHsI_2DqkXuPGGankXA",
    authDomain: "integradora-88d57.firebaseapp.com",
    projectId: "integradora-88d57",
    storageBucket: "integradora-88d57.appspot.com",
    messagingSenderId: "294040645287",
    appId: "1:294040645287:web:1168367e518db0a82b3582"
};

// Inicializa Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
export const generar_infantil = (title, content) => addDoc(collection(db, 'infantiles'), {title,content});
export const generar_boda = (title, content) => addDoc(collection(db, 'boda'), {title,content});
export const generar_Graduacion = (title, content) => addDoc(collection(db, 'Graduacion'), {title,content});
export const generar_XV = (title, content) => addDoc(collection(db, 'XV'), {title,content});
export const eliminar_boda = (id) => deleteDoc(doc(db, 'boda', id))
export const eliminar_infantil = (id) => deleteDoc(doc(db, 'infantiles', id))
export const eliminar_XV = (id) => deleteDoc(doc(db, 'XV', id))
export const eliminar_graduacion = (id) => deleteDoc(doc(db, 'Graduacion', id))
export const editar_XV = (id) =>  getDoc(doc(db, 'XV', id));
export const ActualizarXV = (id, newFields) => updateDoc(doc(db, 'XV', id), newFields)