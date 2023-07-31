import { generar_Promocion } from "./firebase.js"
//import { showMessage } from "./showMessage.js"
const promocionesForm = document.querySelector('#promociones-form')


promocionesForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const title = promocionesForm['promociones-title'].value,
        content = promocionesForm['promociones-content'].value;

    try {
        generar_Promocion(title, content)
        promocionesForm.reset()
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