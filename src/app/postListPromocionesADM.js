import { eliminar_Promocion } from "./firebase.js";
import { editar_Promocion } from './firebase.js';
import { ActualizarPromocion } from "./firebase.js";
const postList_promociones = document.querySelector('.posts_promociones')
const promocionesForm = document.querySelector('#promocion-form')
let id = ''

export const setUpPromocionesADM = (data) => {
    if (data.length) {
        let html = ''
        data.forEach(doc => {
            const pasteles = doc.data()
            const article = `
            <article class="about__icons">
                <img src="images/boda/1.jpg" class="about__icon" alt="">
                <h3 class="about__title">${pasteles.title}</h3>
                <p class="about__paragrah">${pasteles.content}</p>
                <p class="about__paragrah"> Precio : $${pasteles.price}</p>
                <label>
                    <button class="btn btn-danger delete" data-id="${doc.id}">Eliminar</button>
                    <button class="btn btn-success edit" data-id="${doc.id}"
                    data-bs-toggle="modal" data-bs-target="#editar">Actualizar</button>
                </label>
            </article>
            `
            html += article
        });
        postList_promociones.innerHTML = html

        const btnDelete = postList_promociones.querySelectorAll('.delete')
        btnDelete.forEach(btn => {
            btn.addEventListener('click', ({ target: { dataset } }) => {
                eliminar_Promocion(dataset.id)
            })
        })

        const btnEdit = postList_promociones.querySelectorAll('.edit')
        btnEdit.forEach(btn => {
            btn.addEventListener('click', async (e) => {
                const doc = await editar_Promocion(e.target.dataset.id)
                const editar = doc.data(),
                    title = promocionesForm['promocion-title'],
                    content = promocionesForm['promocion-content'],
                    price = promocionesForm['promocion-price'];

                title.value = editar.title
                content.value = editar.content
                price.value = editar.price
                id = doc.id;

                promocionesForm.addEventListener('submit', async (e) => {
                    e.preventDefault()
                    ActualizarPromocion(id, { title: title.value, content: content.value, price: price.value})
                    const actualizarModal = document.querySelector('#editar')
                    const modal = bootstrap.Modal.getInstance(actualizarModal)
                    modal.hide()
                })
            })
        })
    } else {
        postList_promociones.innerHTML = '<h1>No existen productos o no ha iniciado sesión</h1>'
    }
}