
// code swiper
var swiper = new Swiper(".codeSwiper", {
  slidesPerView: "auto",
  spaceBetween: 16,
  loop: true,
  loopedSlides: 15,
  grabCursor: true,
  speed: 1500,
  autoplay: {
    delay: 0, //讓自動播放不延遲
    waitForTransition: false //不等待頁面transition 持續播放
  },




});

var swiper = new Swiper(".commentSwiper", {
  //cssMode: true,
  // Optional parameters
  effect: 'fade',
  direction: 'horizontal',
  loop:true,
  fadeEffect: {
  crossFade: true
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});



