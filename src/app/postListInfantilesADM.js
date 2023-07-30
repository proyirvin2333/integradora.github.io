import { eliminar_infantil } from "./firebase.js";
const postList_infantil = document.querySelector('.posts_infantiles')
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
                <p class="about__paragrah"> Precio ${pasteles.content}</p>
                <p class="about__paragrah"> Precio : $${pasteles.price}</p>
                <label>
                    <button class="btn btn-danger delete" data-id="${doc.id}">Eliminar</button>
                    <button class="btn btn-success">Actualizar</button>
                </label>
            </article>
            `
            html += article
        });
        postList_infantil.innerHTML = html

        const btnDelete = postList_infantil.querySelectorAll('.delete')
        btnDelete.forEach(btn => {
            btn.addEventListener('click', ({target: {dataset}}) => {
                eliminar_infantil(dataset.id)
            })
        })
    } else {
        postList_infantil.innerHTML = '<h1>No haz iniciado sesión</h1>'
    }
}