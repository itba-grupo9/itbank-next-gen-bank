// Variables
const iconoMenu = document.querySelector('.header__nav__iconoMenu');
const menu = document.querySelector('.header__nav__menu')
const descargarApp = document.querySelector('#menuDescargarApp');

// Funcion para cerrar el menu segun el elemento que se cliquee
const cerrarMenu = (elemento) => {
  elemento.addEventListener('click', () => {
    menu.classList.toggle('--menuVisible');
  });
}
cerrarMenu(iconoMenu);
cerrarMenu(descargarApp);