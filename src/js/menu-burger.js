const btn = document.querySelector('.menu-burger');
const menu = document.querySelector('.menu');
// const menuList = document.querySelector('.menu__list');
const html = document.querySelector('html');


btn.addEventListener('click', () => {
  btn.classList.toggle('active');
  menu.classList.toggle('active');
  // menuList.classList.toggle('active');
  html.classList.toggle('off-scroll');
});

// const listItems = menuList.querySelectorAll('.menu__list-item');
// listItems.forEach((el) => {
//   el.addEventListener('click', () => {
//     html.classList.remove('off-scroll');
//     menu.classList.remove('active');
//     btn.classList.remove('active');
//     // menuList.classList.remove('active');
//   });
// });