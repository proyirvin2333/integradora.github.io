//FIREBASE CODE
//Aquí se importan las funciones que necesites del SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getFirestore, collection, addDoc, deleteDoc, doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js"
import { getAuth } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
// TODO: Añade más productos de SDKs Firebase de este link
// https://firebase.google.com/docs/web/setup#available-libraries


// Configuración de tu app web
const firebaseConfig = {
    apiKey: "AIzaSyCHJW2-EeyX3pd34BYp7jrel12mcrLDG4k",
    authDomain: "fantasy-bakery-app.firebaseapp.com",
    projectId: "fantasy-bakery-app",
    storageBucket: "fantasy-bakery-app.appspot.com",
    messagingSenderId: "81329645728",
    appId: "1:81329645728:web:4495944fed3441204141c5",
    measurementId: "G-Q5M4DLPNXF"
};

// Inicializa Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
//FUNCIONES PARA GENERAR NUEVOS PRODUCTOS
export const generar_infantil = (title, content, price) => addDoc(collection(db, 'infantiles'), { title, content, price });
export const generar_boda = (title, content, price) => addDoc(collection(db, 'boda'), { title, content, price });
export const generar_XV = (title, content, price) => addDoc(collection(db, 'XV'), { title, content, price });
export const generar_Graduacion = (title, content, price) => addDoc(collection(db, 'Graduacion'), { title, content, price });
export const generar_Promocion = (title, content, price) => addDoc(collection(db, 'promociones'), { title, content, price });
//FUNCIONES PARA ELIMINAR PRODUCTOS
export const eliminar_infantil = (id) => deleteDoc(doc(db, 'infantiles', id));
export const eliminar_boda = (id) => deleteDoc(doc(db, 'boda', id));
export const eliminar_graduacion = (id) => deleteDoc(doc(db, 'Graduacion', id));
export const eliminar_XV = (id) => deleteDoc(doc(db, 'XV', id));
export const eliminar_Promocion = (id) => deleteDoc(doc(db, 'promociones', id));
//FUNCIONES PARA EDITAR LOS VALORES DE LOS PRODUCTOS
export const editar_infantil = (id) => getDoc(doc(db, 'infantiles', id));
export const editar_boda = (id) => getDoc(doc(db, 'boda', id));
export const editar_XV = (id) => getDoc(doc(db, 'XV', id));
export const editar_graduacion = (id) => getDoc(doc(db, 'Graduacion', id));
export const editar_Promocion = (id) => getDoc(doc(db, 'promociones', id));
//FUNCIONES PARA GUARDAR LOS CAMBIOS DE LOS PRODUCTOS
export const ActualizarInfantiles = (id, newFields) => updateDoc(doc(db, 'infantiles', id), newFields);
export const ActualizarBoda = (id, newFields) => updateDoc(doc(db, 'boda', id), newFields);
export const ActualizarXV = (id, newFields) => updateDoc(doc(db, 'XV', id), newFields);
export const ActualizarGraduacion = (id, newFields) => updateDoc(doc(db, 'Graduacion', id), newFields);
export const ActualizarPromocion = (id, newFields) => updateDoc(doc(db, 'promociones', id), newFields);