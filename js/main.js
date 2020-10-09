$(document).ready(function () {

  // mobile munu code 
//  $(".hamberger").click(function () {
//         $(".mobile-nav").addClass("open");
//         $(".mobile-nav").removeClass("fade");
//     });
//     $(".times").click(function () {
//       $(".mobile-nav").removeClass("open");
//       $(".mobile-nav").addClass("fade");
//     });

/* ========= Hero Background Slider ===========  */

  $('.slider-active').owlCarousel({
    loop:true,
    nav:true,
    navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


/* ========= What Clients Slider ===========  */
  $('.client-slider-active').owlCarousel({
    loop:true,
    nav:true,
    navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})



})
