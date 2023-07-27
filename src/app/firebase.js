//FIREBASE CODE
//Aquí se importan las funciones que necesites del SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js"
import { getAuth } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
// TODO: Añade más productos de SDKs Firebase de este link
// https://firebase.google.com/docs/web/setup#available-libraries


// Configuración de tu app web
const firebaseConfig = {
    apiKey: "AIzaSyCAtaXindRcNryuD1adhR9kyk6Ig-YRuts",
    authDomain: "integradora-575dc.firebaseapp.com",
    projectId: "integradora-575dc",
    storageBucket: "integradora-575dc.appspot.com",
    messagingSenderId: "798595370650",
    appId: "1:798595370650:web:6758b33ba68fe349941923"
};

// Inicializa Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
