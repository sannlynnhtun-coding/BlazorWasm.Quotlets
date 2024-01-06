/* -----------------------------------------------
					Js Main
--------------------------------------------------
    Template Name: NoonPost. - Personal Blog HTML Template
--------------------------------------------------

Table of Content

	. Preloader
    . Navigation
    . Search
    . Back-top
    . theiaStickySidebar
    . Masonry
    . Slider style 1
    . Slider style 2
    . Slider style 3
    . Slider style 4
    . Slider style 5
    . Slider style 6
    
----------------------------------- */


(function ($) {
    "use strict";

    /* -----------------------------------
            Preloader
    ----------------------------------- */
    $('.loading').delay(500).fadeOut(500);


    /* -----------------------------------
            Navigation
    ----------------------------------- */

    $('.navbar-toggler').on('click', function () {
        $('.navbar-collapse').collapse('show');
    });
 


    /* -----------------------------------
           Search
    ----------------------------------- */
    $('.search-icon').on('click', function () {
        $('.search').addClass('search-open');
    });
    $('.close').on('click', function () {
        $('.search').removeClass('search-open');
    });


    /* -----------------------------------
           Back-top
    ----------------------------------- */
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 250) {
            $('.back-top').fadeIn(300);
        } else {
            $('.back-top').fadeOut(300);
        }
    });

    $('.back-top').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 300);
        return false;
    });

    /* -----------------------------------
       theiaStickySidebar
    -----------------------------------*/

    jQuery('.side-content,.side-sidebar').theiaStickySidebar({
        additionalMarginTop: 0
      });

     /* -----------------------------------
           Masonry
    ----------------------------------- */
    $(window).on("load resize", function () {
        resizeEvent();
    });

    function resizeEvent() {
        // Masonry
        $(".masonry-items").masonry({
            itemSelector: ".masonry-item",
            columnWidth: ".masonry-item",
        });
    }

    /* -----------------------------------
          slider style 1
    -----------------------------------*/
    var swiper = new Swiper(".slider-style1", {
        spaceBetween: 0,
        centeredSlides: true,
      /* autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },*/
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });
   

    /* -----------------------------------
          slider-style2
    -----------------------------------*/
    var swiperr = new Swiper(".slider-style2 .swiper-bottom", {
        spaceBetween: 0,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
          autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
     
      });

      var swiper2 = new Swiper(".slider-style2 .swiper-top", {
        spaceBetween: 0,
         autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: swiperr,
        },
    
      });

  /* -----------------------------------
      slider-style3
    -----------------------------------*/
      var swiper = new Swiper(".slider-style3", {
        slidesPerView: 3,
         spaceBetween: 30,
        loop: true,
       /* autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },*/
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          1050: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1350: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1800: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });


/* -----------------------------------
      slider-style4
-----------------------------------*/
      var swiper = new Swiper(".slider-style4", {
        slidesPerView: 4,
        centeredSlides: false,
        slidesPerGroupSkip:1,
        spaceBetween: 1,
        grabCursor: true,    
        keyboard: {
          enabled: true,
        },
       
        breakpoints: {
          0: {
            slidesPerView: 1,
           
          },
          769: {
            slidesPerView: 2,
         
          },
         
          1000: {
            slidesPerView: 3,
          
          },
          1400: {
            slidesPerView: 4,
          
          },
        },
        scrollbar: {
          el: ".swiper-scrollbar",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

  /* -----------------------------------
        slider-style5
  -----------------------------------*/
    var swiper = new Swiper(".slider-style5", {
        slidesPerView: 1,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });



/* -----------------------------------
      slider-style6
-----------------------------------*/
    var swiper = new Swiper(".slider-style6", {
        slidesPerView: 4,
        spaceBetween: 30,
        freeMode: true,
        loop: true,
        /*autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },*/
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          1050: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1350: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1400: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

/* -----------------------------------
        resize event
-----------------------------------*/
    resizeEvent();

})(jQuery);


