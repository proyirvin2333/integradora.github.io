import { eliminar_XV } from "./firebase.js";
import { editar_XV } from './firebase.js';
import { ActualizarXV } from "./firebase.js";
const postListXV = document.querySelector('.postsXV')
const productoForm = document.querySelector('#producto-form')
let id = ''

export const setUpXV = (data) => {
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
        postListXV.innerHTML = html

        const btnDelete = postListXV.querySelectorAll('.delete')
        btnDelete.forEach(btn => {
            btn.addEventListener('click', ({ target: { dataset } }) => {
                eliminar_XV(dataset.id)
            })
        })

        const btnEdit = postListXV.querySelectorAll('.edit')
        btnEdit.forEach(btn => {
            btn.addEventListener('click', async (e) => {
                const doc = await editar_XV(e.target.dataset.id)
                const editar = doc.data(),
                    title = productoForm['producto-title'],
                    content = productoForm['producto-content'];

                title.value = editar.title
                content.value = editar.content
                id = doc.id;

                productoForm.addEventListener('submit', async (e) => {
                    e.preventDefault()
                    ActualizarXV(id, { title: title.value, content: content.value })
                    const actualizarModal = document.querySelector('#editar')
                    const modal = bootstrap.Modal.getInstance(actualizarModal)
                    modal.hide()
                })
            })
        })
    } else {
        postListXV.innerHTML = '<h1>No existen productos o no ha iniciado sesión</h1>'
    }
}