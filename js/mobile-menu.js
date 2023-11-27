const mobileMenu = document.querySelector('.mobile-menu');
const menuBtnOpen = document.querySelector('.menu-btn-open');
const menuBtnClose = document.querySelector('.menu-btn-close');

const togglemenu = () => mobileMenu.classList.toggle('is-open');

menuBtnOpen.addEventListener('click', togglemenu);
menuBtnClose.addEventListener('click', togglemenu);