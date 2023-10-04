//* Creating effect when clicking on hamburger [menu] button */
const menu_btn = document.querySelector('.menu_tablet_hamburger');

menu_btn.addEventListener('click', function () {
   menu_btn.classList.toggle('is-active');
});