const postList_promociones = document.querySelector('.posts_promociones')
export const setUpPromociones = (data) => {
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
                <button type="button" class="btn btn-danger">Eliminar</button>
                <button type="button" class="btn btn-success">Actualizar</button>
            </article>
            `
            html += article
        });
        postList_promociones.innerHTML = html
    } else {
        postList_promociones.innerHTML = '<h1>No haz iniciado sesión</h1>'
    }
}