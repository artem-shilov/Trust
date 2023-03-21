const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar',
  },
  breakpoints: {
  650: {
    slidesPerView: 1.25,
    spaceBetween: 25,
  },
  640:{
    slidesPerView: 1,
  }
}
});
