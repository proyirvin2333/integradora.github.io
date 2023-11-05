import { generar_Promocion } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const promocionesForm = document.querySelector('#promociones-form');
const promocionesPriceInput = promocionesForm.querySelector('#promociones-price');

promocionesPriceInput.addEventListener('input', formatCurrencyInput);

function formatCurrencyInput() {
    const price = parseFloat(promocionesPriceInput.value.replace(/[^0-9.]+/g, ''));
    if (!isNaN(price)) {
        promocionesPriceInput.value = formatCurrency(price);
    }
}

function formatCurrency(amount) {
    return '$' + new Intl.NumberFormat('en-US').format(amount);
}

promocionesForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const title = promocionesForm['promociones-title'].value;
    const content = promocionesForm['promociones-content'].value;
    const price = parseFloat(promocionesPriceInput.value.replace(/[^0-9.]+/g, ''));

    try {
        if (title === '') {
            throw new Error("El título no puede estar vacío, completa el campo por favor");
        } else if (content === '') {
            throw new Error("La descripción no puede estar vacía, completa el campo por favor");
        } else if (isNaN(price) || price <= 0) {
            throw new Error("El precio no puede estar vacío o no es válido, completa el campo por favor");
        }

        // Llamar a la función de generación de promoción con el precio formateado
        await generar_Promocion(title, content, price);

        showMessage("Promoción agregada correctamente");
        promocionesForm.reset();
    } catch (error) {
        showMessage(error.message, "error");
    }
});
