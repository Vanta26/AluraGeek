const iconSearch = document.querySelector('.icon-search');
const menuNav = document.querySelector('.header-container');
const menuNavResponsive = document.querySelector('.nav-responsive');
const buttonBack = document.querySelector('.nav-responsive__button');

function showNav() {
    menuNav.style.display = 'none';
    menuNavResponsive.style.display = 'flex';
}

iconSearch.addEventListener('click', showNav);

function hiddeNav() {
    menuNav.style.display = 'flex';
    menuNavResponsive.style.display = 'none';
}

buttonBack.addEventListener('click', hiddeNav);