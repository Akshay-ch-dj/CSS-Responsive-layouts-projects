const navButton = document.querySelector('.nav-toggle');
const navbar = document.querySelector('.nav');

navButton.addEventListener('click', () => {
    navbar.classList.toggle('nav--visible');
})