import { eliminar_boda } from "./firebase.js";
import { editar_boda } from './firebase.js';
import { ActualizarBoda } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const postList_boda = document.querySelector('.posts_boda');
const productoForm = document.querySelector('#producto-form');
let id = '';

function formatCurrency(amount) {
    return '$' + amount.toLocaleString('en-US');
}

export const setUpPost = (data) => {
    if (data.length) {
        let html = '';
        data.forEach(doc => {
            const pasteles = doc.data();
            const article = `
            <article class="about__icons">
                <img src="images/boda/1.jpg" class="about__icon" alt="">
                <h3 class="about__title">${pasteles.title}</h3>
                <p class="about__paragrah">${pasteles.content}</p>
                <p class="about__paragrah">Precio: ${formatCurrency(pasteles.price)}</p>
                <label>
                    <button class="btn btn-danger delete" data-id="${doc.id}">Eliminar</button>
                    <button class="btn btn-success edit" data-id="${doc.id}"
                    data-bs-toggle="modal" data-bs-target="#editar">Actualizar</button>
                </label>
            </article>
            `;
            html += article;
        });
        postList_boda.innerHTML = html;

        const btnDelete = postList_boda.querySelectorAll('.delete');
        btnDelete.forEach(btn => {
            btn.addEventListener('click', async ({ target: { dataset } }) => {
                try {
                    await eliminar_boda(dataset.id);
                    showMessage("Producto eliminado correctamente, recargue para visualizar los cambios");
                } catch (error) {
                    showMessage(error.message, "error");
                }
            });
        });

        const btnEdit = postList_boda.querySelectorAll('.edit');
        btnEdit.forEach(btn => {
            btn.addEventListener('click', async (e) => {
                const doc = await editar_boda(e.target.dataset.id);
                const editar = doc.data();
                const title = productoForm['producto-title'];
                const content = productoForm['producto-content'];
                const price = productoForm['producto-price'];

                title.value = editar.title;
                content.value = editar.content;
                price.value = formatCurrency(editar.price);
                id = doc.id;

                productoForm.addEventListener('submit', async (e) => {
                    e.preventDefault();
                    try {
                        validateFields(title.value, content.value, price.value);
                        await ActualizarBoda(id, { title: title.value, content: content.value, price: parseFloat(price.value.replace(/[^0-9.]+/g, '')) });
                        showMessage("Producto actualizado, recargue para visualizar los cambios");
                        const actualizarModal = document.querySelector('#editar');
                        const modal = bootstrap.Modal.getInstance(actualizarModal);
                        modal.hide();
                    } catch (error) {
                        showMessage(error.message, "error");
                    }
                });

                // Agregar evento 'input' para formatear automáticamente el precio
                price.addEventListener('input', (e) => {
                    e.target.value = formatCurrency(parseFloat(e.target.value.replace(/[^0-9.]+/g, '')));
                });
            });
        });
    } else {
        postList_boda.innerHTML = '<h1>No existen productos o no ha iniciado sesión</h1>';
    }
};

function validateFields(title, content, price) {
    const formattedPrice = parseFloat(price.replace(/[^0-9.]+/g, ''));
    if (title.trim() === '') {
        throw new Error('El título no puede estar vacío, completa el campo por favor');
    }
    if (content.trim() === '') {
        throw new Error('La descripción no puede estar vacía, completa el campo por favor');
    }
    if (isNaN(formattedPrice) || formattedPrice <= 0) {
        throw new Error('El precio no es válido, debe ser un número mayor que cero');
    }
}
