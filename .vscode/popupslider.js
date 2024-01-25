



var popups = document.querySelectorAll('.collection-cms-item');
popups.forEach(function(popup) {
  var swiperContainer = popup.querySelector('.is-collection-gallery'); 
  var nextArrow = popup.querySelector('.cg-next');
  var prevArrow = popup.querySelector('.cg-prev');
  
  
  var thumbSwiper = new Swiper(swiperContainer, {
    loop: true,
    spaceBetween: 0,
    initialSlide: 0,
    slidesPerView: "auto",  
    freeMode: false,
    navigation: {
      nextEl: nextArrow,
      prevEl: prevArrow,
    },
  });
var closeBtn = popup.querySelector('.close-wrapper');
closeBtn.addEventListener('click', function () {
  // Reset the Swiper when the close button is clicked
  thumbSwiper.slideTo(0, 2, false);
  console.log("sdfsd");
//    setTimeout(function(){
//      // to make sure the swiper-wrapper is shown after the animation of $.mobile.changePage()
 
   
//  }, 100);
});
});
// https://stackoverflow.com/questions/41855877/css-how-to-have-swiper-slider-arrows-outside-of-slider-that-takes-up-12-column