//* Creating effect when clicking on hamburger [menu] button */
const menu_btn = document.querySelector('.menu_tablet_hamburger');
const tablet_menu = document.querySelector('.menu_tablet_navigation');

menu_btn.addEventListener('click', function () {
   menu_btn.classList.toggle('is-active');
   tablet_menu.classList.toggle('is-active');
});