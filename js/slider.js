$(document).ready(function(){
  $('.slider__wrap').slick({
    prevArrow: $('.slick-prev'),
    nextArrow: $('.slick-next')
  });
});

document.querySelector("#slider-arrow-left").addEventListener("click", (e) => {
  e.preventDefault();
});

document.querySelector("#slider-arrow-right").addEventListener("click", (e) => {
  e.preventDefault();
});