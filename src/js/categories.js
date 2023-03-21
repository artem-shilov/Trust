const item = document.querySelector('.clickable');
const categories = document.querySelector('.categories');

item.addEventListener('click',()=>{
categories.classList.toggle('active')
})