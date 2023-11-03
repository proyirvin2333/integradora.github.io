import { eliminar_infantil } from "./firebase.js";
import { editar_infantil } from './firebase.js';
import { ActualizarInfantiles } from "./firebase.js";
const postList_infantil = document.querySelector('.posts_infantiles')
const productoForm = document.querySelector('#producto-form')
let id = ''

export const setUpInfantiles = (data) => {
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
        postList_infantil.innerHTML = html

        const btnDelete = postList_infantil.querySelectorAll('.delete')
        btnDelete.forEach(btn => {
            btn.addEventListener('click', ({ target: { dataset } }) => {
                eliminar_infantil(dataset.id)
            })
        })

        const btnEdit = postList_infantil.querySelectorAll('.edit')
        btnEdit.forEach(btn => {
            btn.addEventListener('click', async (e) => {
                const doc = await editar_infantil(e.target.dataset.id)
                const editar = doc.data(),
                    title = productoForm['producto-title'],
                    content = productoForm['producto-content'],
                    price = productoForm['producto-price'];

                title.value = editar.title
                content.value = editar.content
                price.value = editar.price
                id = doc.id;

                productoForm.addEventListener('submit', async (e) => {
                    e.preventDefault()
                    ActualizarInfantiles(id, {title: title.value, content:  content.value, price: price.value})
                    const actualizarModal = document.querySelector('#editar')
                    const modal = bootstrap.Modal.getInstance(actualizarModal)
                    modal.hide()
                })
            })
        })
    } else {
        postList_infantil.innerHTML = '<h1>No existen productos o no ha iniciado sesión</h1>'
    }
}