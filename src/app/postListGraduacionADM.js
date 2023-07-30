import { eliminar_graduacion } from "./firebase.js";
const postListGraduacion = document.querySelector('.postsGraduacion')
export const setUpGraduacion = (data) => {
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
                    <button class="btn btn-success" data-id="${doc.id}">Actualizar</button>
                </label>
            </article>
            `
            html += article
        });
        postListGraduacion.innerHTML = html

        const btnDelete = postListGraduacion.querySelectorAll('.delete')
        btnDelete.forEach(btn => {
            btn.addEventListener('click', ({ target: { dataset } }) => {
                eliminar_graduacion(dataset.id)
            })
        })
    } else {
        postListGraduacion.innerHTML = '<h1>No haz iniciado sesión</h1>'
    }
}