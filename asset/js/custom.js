window.addEventListener('scroll',function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 0);
});
function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active');  
    menu.classList.toggle('active');  
}
$(document).ready(function() {
    $('.child').magnificPopup({type:'image'});
    $('.youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
      });
  });
  jQuery(document).ready(function($) {
    $('.count').counterUp({
        delay: 10,
        time: 1000
    });
    jQuery(".owl-carousel").owlCarousel({
      autoplay:true,
      items:4,
      margin: 20,
      autoplayTimeout: 1000,
      loop:true,
      autoplayHoverPause:true,
      responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:4,
        }
    }
    });
});
$(".play").modalVideo();