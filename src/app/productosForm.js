import { generar_Graduacion } from "./firebase.js";
import { generar_infantil } from "./firebase.js";
import { showMessage } from "./showMessage.js";
import { generar_boda } from "./firebase.js";
import { generar_XV } from "./firebase.js";

const productosForm = document.querySelector('#productos-form');
const productosPriceInput = productosForm.querySelector('#productos-price');

productosPriceInput.addEventListener('input', formatCurrencyInput);

function formatCurrencyInput() {
    const price = parseFloat(productosPriceInput.value.replace(/[^0-9.]+/g, ''));
    if (!isNaN(price)) {
        productosPriceInput.value = formatCurrency(price);
    }
}

function formatCurrency(amount) {
    return '$' + new Intl.NumberFormat('en-US').format(amount);
}

productosForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const collection = productosForm['productos-collection'].value;
    const title = productosForm['productos-title'].value;
    const content = productosForm['productos-content'].value;
    const price = parseFloat(productosPriceInput.value.replace(/[^0-9.]+/g, ''));

    try {
        if (collection === '') {
            throw new Error('La colección del producto no puede estar vacía, selecciona una para continuar');
        }
        if (title.trim() === '') {
            throw new Error('El título no puede estar vacío, completa el campo por favor');
        }
        if (content.trim() === '') {
            throw new Error('La descripción no puede estar vacía, completa el campo por favor');
        }
        if (isNaN(price) || price <= 0) {
            throw new Error('El precio no es válido, debe ser un número mayor que cero');
        }

        if (collection === 'infantiles') {
            await generar_infantil(title, content, price);
        } else if (collection === 'boda') {
            await generar_boda(title, content, price);
        } else if (collection === 'Graduacion') {
            await generar_Graduacion(title, content, price);
        } else if (collection === 'XV') {
            await generar_XV(title, content, price);
        }

        showMessage('Producto agregado correctamente');
        productosForm.reset();
    } catch (error) {
        showMessage(error.message, 'error');
    }
});
