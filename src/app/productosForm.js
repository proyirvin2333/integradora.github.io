import { generar_infantil } from "./firebase.js"
import { generar_boda } from "./firebase.js"
import { generar_Graduacion } from "./firebase.js"
import { generar_XV } from "./firebase.js"
//import { showMessage } from "./showMessage.js"
const productosForm = document.querySelector('#productos-form')

productosForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const collection = productosForm['productos-collection'].value,
        title = productosForm['productos-title'].value,
        content = productosForm['productos-content'].value;

    try {
        if (collection === 'infantiles') {
            generar_infantil(title, content)

        } else if (collection === 'boda') {
            generar_boda(title, content)
        } else if (collection === 'Graduacion') {
            generar_Graduacion(title, content)
        } else if (collection === 'XV') {
            generar_XV(title, content)
        }
    } catch (error) {
        console.log(error)
        /*if (error.code === 'auth/invalid-email') {
            showMessage("Invalid email ", "error")
        } else if (error.code === 'auth/email-already-in-use') {
            showMessage('Email already in use', "error")
        } else if (error.code === 'auth/weak-password') {
            showMessage('Password is too weak', "error")
        } else if (error.code) {
            showMessage('Something went wrong', "error")
        }*/
    }
})