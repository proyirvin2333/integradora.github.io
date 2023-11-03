import { generar_Promocion } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const promocionesForm = document.querySelector('#promociones-form')

promocionesForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const title = promocionesForm['promociones-title'].value;
    const content = promocionesForm['promociones-content'].value;
    const price = parseFloat(promocionesForm['promociones-price'].value);

    try {
        if (title === '') {
            throw new Error("El título no puede estar vacío, completa el campo por favor");
        } else if (content === '') {
            throw new Error("La descripción no puede estar vacía, completa el campo por favor");
        } else if (price === 0) {
            throw new Error("El precio no puede estar vacío, completa el campo por favor");
        }

        await generar_Promocion(title, content, price);
        showMessage("Producto agregado correctamente");
        promocionesForm.reset();
    } catch (error) {
        showMessage(error.message, "error");
    }
});
