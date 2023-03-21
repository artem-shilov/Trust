const item = document.querySelector('.dropdown');
const categories = document.querySelector('.categories');

item.addEventListener('click',()=>{
categories.classList.toggle('active')
})