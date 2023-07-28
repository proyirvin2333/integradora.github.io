const postListXV = document.querySelector('.postsXV')
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
            </article>
            `
            html += article
        });
        postListXV.innerHTML = html
    } else {
        postListXV.innerHTML = '<h1>No haz iniciado sesión</h1>'
    }
}