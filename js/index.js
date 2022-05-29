const iconoMenu = document.querySelector('.header__nav__iconoMenu');
const menu = document.querySelector('.header__nav__menu')
iconoMenu.addEventListener('click', () => {
  menu.classList.toggle('--menuVisible');
});