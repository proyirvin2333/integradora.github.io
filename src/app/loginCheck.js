const loggedOutLinks = document.querySelectorAll('.logged-out'),
    loggedInLinks = document.querySelectorAll('.logged-in');
export const loginCheck = user => {
    if (user) {
        loggedOutLinks.forEach(link=>link.style.display = 'none')
        loggedInLinks.forEach(link=>link.style.display = 'block')
    } else {
        loggedOutLinks.forEach(link=>link.style.display = 'block')
        loggedInLinks.forEach(link=>link.style.display = 'none')
    }
}