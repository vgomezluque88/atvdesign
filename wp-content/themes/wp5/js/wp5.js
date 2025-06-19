(function ($) {

  $(document).ready(function () {
    const url = window.location.origin;
    if (url == "https://wp5.emfasi.es") {
      $('a[post-type="post"]').click(function (event) {
        const id = $(this).attr("post-id");

        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          'event': 'click_to_blog_post', // Este es el nombre del evento, puedes cambiarlo
          'id_post': id, // ID del formulario
        });
      });
    }

    //Forms
    document.addEventListener('wpcf7mailsent', function (event) {
      jQuery(event.detail.apiResponse.into + ' form *:not(.wpcf7-response-output)').hide();
    }, false);


    var click_out_overlay = false;

    var owl_hero_image = $(".section__hero-image .cont__banners");
    var owl_last_post = $(".section__last-articles .cont__posts");

    owl_hero_image.owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      autoplay: false,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      mouseDrag: true,
      touchDrag: true,
      items: 1,
      autoHeight: true,
      animateOut: 'fadeOut',
      responsive: {
        768: {
          items: 1,
        },
      },
    });

    owl_last_post.owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      autoplay: false,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      mouseDrag: true,
      touchDrag: true,
      items: 1,
      autoHeight: true,
      responsive: {
        768: {
          items: 3,
          loop: false,
          mouseDrag: false,
          margin: 40,
        },
        1279: {
          loop: false,
          mouseDrag: false,
          items: 4,
          margin: 40,
        },
        1600: {
          loop: false,
          mouseDrag: false,
          items: 4,
          margin: 107,
        }
      },
    });

    //accesibilitat
    setTimeout(() => {
      //Go through each carousel on the page
      $('.owl-carousel').each(function () {
        //Find each set of dots in this carousel
        $(this).find('.owl-dot').each(function (index) {
          //Add one to index so it starts from 1
          $(this).attr('aria-label', index + 1);
        });
      });
    }, 500);

    setTimeout(() => {
      //Go through each carousel on the page
      $('.owl-carousel').each(function () {
        //Find each set of dots in this carousel
        $(this).find('.owl-nav button').each(function (index) {
          //Add one to index so it starts from 1
          $(this).attr('aria-label', index + 1);
        });
      });
    }, 500);


    //eliminar etiqueta Span que pone por defecto Contact Form 7
    /*$(".cont--input").each(function (index) {
      var input_html = $(this).find(".wpcf7-form-control-wrap").html();
      $(this).prepend(input_html);
      $(this).find(".wpcf7-form-control-wrap").empty();
    });*/
    $(".cont--input-checkbox").each(function (index) {
      var input_html = $(this).find(".wpcf7-list-item").html();
      $(this).prepend(input_html);
      $(this).find(".wpcf7-form-control").empty();
    });

    if ($('.section__overlay_information')[0]) {
      $('body').addClass('header-fixed');
    }


    $('.section__overlay_information .overlay__info .cont__text .link__arrow, .tax-cat_product .page-header .cont__inner .cont__text .link__arrow').click(function (e) {
      e.preventDefault();
      $(this).parent().parent().parent().find('.cont__overlay').addClass('show');
      $('body').addClass('show-overlay');
    });

    $('.cont__overlay .cont__close').click(function () {
      $(this).parent().parent().parent().removeClass('show');
      $('body').removeClass('show-overlay');
    });

    $('.cont__overlay .cont__overlay_close').click(function () {
      $(this).parent().removeClass('show');
      $('body').removeClass('show-overlay');
      click_out_overlay = false;
    });

    $(document).keydown(function (event) {
      if (event.keyCode == 27) {
        // Se ha pulsado la tecla ESC
        if ($('body').hasClass('show-overlay')) {
          $('.cont__overlay.show').removeClass('show');
          $('body').removeClass('show-overlay');
          click_out_overlay = false;
        }
        // Aquí puedes realizar las acciones que desees al detectar la pulsación de ESC
      }
    });

    $(document).on('click', function (event) {
      console.log(click_out_overlay);
      if (!$(event.target).closest('.cont__overlay').length && $('body').hasClass('show-overlay')) {

        if (click_out_overlay == true) {
          $('.cont__overlay').removeClass('show');
          $('body').removeClass('show-overlay');
          click_out_overlay = false;
        } else {
          click_out_overlay = true;
        }
      }
    });

    if ($('body.tax-cat_faq')[0]) {
      $('#header-wrapper header.site-header .site-branding').addClass('logo-fixed');
    }

    $(window).scroll(function (event) {
      var scroll = $(window).scrollTop();
      if (scroll > 0) {
        $('#header-wrapper header.site-header .site-branding').addClass('logo-up');
      } else {
        $('#header-wrapper header.site-header .site-branding').removeClass('logo-up');
      }
    });

    $(document).on('click', '.section_cta_promotional .cta__fixed-button', function (event) {
      $(this).parent().find(".cta__fixed-overlay").addClass('show');
      $('body').addClass('overlay-open');
    });

    $(document).on('click', '.section_cta_promotional .close-info-overlay', function (event) {
      $(this).parent().removeClass('show');
      $('body').removeClass('overlay-open');
    });

    $(document).keyup(function (e) {
      if (e.keyCode == 27) {
        $('.cta__fixed-overlay').removeClass('show');
        $('body').removeClass('overlay-open');
      }
    });

    if (window.location.hash) {
      var hash = window.location.hash.substr(1);
      setTimeout(() => {
        $(document).scrollTop(0);
      }, 0);
      setTimeout(() => {
        $('html,body').animate({
          scrollTop: $("#" + hash).offset().top - 150
        }, 'slow');
      }, 500);
    }

    // recomendador, esta función hace que una vez cargada la url con el www.xxxxxx.com/es/#parametro el #parametro desaparezca
    // de esta manera podemos llamar la url tantas veces como necesitemos desde la misma página, si por lo contrario mantemos el 
    // #parametros solo podremos llamar a la url 1 vez. 
    // fuente → https://www.finsweet.com/hacks/16/
    setTimeout(() => {
      // uses HTML5 history API to manipulate the location bar
      history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search);
    }, 5); // 5 millisecond timeout in this case


    if ($('.section_cta_fixed')[0]) {
      setTimeout(() => {
        $('.section_cta_fixed').addClass('show');
      }, 2000); // 5 millisecond timeout in this case

      $(window).scroll(function (event) {
        var height_body = $("body").height();
        var height_25 = height_body * 0.20;

        if ($(window).scrollTop() > height_25) {
          $('.section_cta_fixed').addClass('show-mobile');
        } else {
          $('.section_cta_fixed').removeClass('show-mobile');
        }
      });
    }
    gsap.to("h1", {
      duration: 2, // Duración de la animación en segundos
      opacity: 1,    // Opacidad final
      y: 0,          // Posición final en el eje Y
      ease: "power3.out" // Tipo de "easing" para un movimiento más natural
    });

    gsap.to("h2", {
      duration: 2,
      opacity: 1,
      y: 0,
      ease: "power3.out",
      delay: 0.5 // Retrasa el inicio de esta animación 0.5 segundos
    });
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section__text-slider",
        start: "100%",
        end: "0%",
        scrub: true,
      }
    });
    console.log(tl);


    gsap.from(".section__text-slider_1", {
      x: "-100vw",
      scrollTrigger: {
        trigger: ".section__text-slider",
        start: "top bottom", // empieza cuando el final de section-work toca el bottom del viewport
        end: "bottom bottom",
        scrub: true,
      }
    });

    gsap.from(".section__text-slider_2", {
      x: "100vw",
      scrollTrigger: {
        trigger: ".section__text-slider",
        start: "top bottom",
        end: "bottom bottom",
        scrub: true,
      }
    });
  });

}(jQuery));

