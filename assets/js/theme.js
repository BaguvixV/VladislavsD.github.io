//* Select required elements from the DOM */
const menu_btn = document.querySelector('.menu_tablet_hamburger');
const menu_modal = document.querySelector('.menu_tablet_navigation');

const body = document.querySelector("body");


menu_btn.addEventListener('click', function () {
   //* Activates class is-active over menu_tablet_hamburger and sets CSS parametrs to look like "X" to close menu */
   menu_btn.classList.toggle('is-active');
   //* Activate[to open] menu navigation */
   menu_modal.classList.toggle('is-active');
});


//* (UNFINISHED) Alternative [2.] way [down below]: */

//* Set code for disable scroll bar neavigation bar is opened */
const showModal = function (e) {
   menu_modal.classList.toggle("hidden");

   if (!menu_modal.classList.contains("hidden")) {
         // Disable scroll
         body.style.overflow = "hidden";
   } else {
         // Enable scroll
         body.style.overflow = "auto";
   }
};


//* (UNFINISHED) Alternative [2.] way [down below]: */

// const showDialog = () => {
//    document.getElementsByClassName('menu_tablet_navigation').classList.add('is-active')
//    const body = document.body;
//    const scrollY = body.style.top;
//    body.style.position = 'fixed';
// };
// const closeDialog = () => {
//    const body = document.body;
//    const scrollY = body.style.top;
//    body.style.position = '';
//    body.style.top = '';
//    window.scrollTo(0, parseInt(scrollY || '0') * -1);
//    document.getElementsByClassName('menu_tablet_navigation').classList.remove('is-active');
// }
// window.addEventListener('scroll', () => {
//    document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
// });