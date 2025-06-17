/*
    Archivo para gestionar la carga de posts por ajax mediante un overlay.
    También gestiona añadir la url en el history del navegador para un correcto funcionamiento del los botones de atras y avanzar.

    Requiere jQuery
    Requiere endpoint ajax: wp-content/themes/{THEME_NAME}/inc/ajax-load.php
    
    Los enlaces tienen que tener dos atributos custom, href y una class:

    Atributos custom: 
        post-id - Id del post
        post-type - Tipo de post

    Class:
        ajax-load


    Opciones globales:

    disable_mobile: desactivar ajax en móvil
    ajax_handler: nombre del handler definido en archivo php wp-content/themes/{THEME_NAME}/inc/ajax-load.php

*/

(function ($) {


  const disable_mobile = false;
  const ajax_handler = 'get_ajax_posts';

  //EVENTOS
  /**
   * Evento: Capturar el click del ajax load de los enlaces con la clase ajax-load
   *
   */
  $('body').on('click', 'a.ajax-load', function (e) {


    if (disable_mobile && checkIfMobile()) {
      return false;
    }

    e.preventDefault();
    loadElement($(this));

  });

  $('body').on('click', '.cont__ingredient .cont__inner a', function (e) {
    e.preventDefault();
    loadElement($(this), true, 'ingredients');
  });


  /**
   * Evento: Cerrar el overlay
   *
   */
  $('body').on('click', '.close-product', function (event) {
    closePost();
  });

  /**
   * Get If mobile
   *
   *
   * @return bolean
   */

  function checkIfMobile() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      return true;
    } else {
      return false;
    }

  }

  $(document).ready(function () {
    if ($("article.type-product")[0]) {
      scrollGallery();
      popupProduct();
    }
  });

  $(window).resize(function () {
    scrollGallery();
  });


  //Product image fixed on scroll
  function scrollGallery() {
    if ($(window).width() > 768 && $('article.type-product .wrapper--left-right .right .cont--right-inner')[0]) {
      $product_right = $('article.type-product .wrapper--left-right .right .cont--right-inner');
      $product_right_height = $product_right.height();

      $product_right.css('left', '');
      $product_right.css('width', '');

      $product_left = $('article.type-product .wrapper--left-right .left');
      $product_left_height = $product_left.height();

      if ($('.single-product-ajax')[0]) {
        $scroll = $('.single-product-ajax');
        //$product_left_top = parseInt($('.single-product-ajax').css('padding-top'));
        $product_left_top = parseInt($('.single-product-ajax').css('padding-top')) + parseInt($('.single-product-ajax .entry-content').css('padding-top'));
      } else {
        $scroll = $(window);
        if ($product_left) {
          $product_left_top = $product_left.offset().top;
        }
      }


      if ($product_left_height > $product_right_height) {

        $scroll.scroll(function (event) {
          $product_right_left = $product_right.offset().left;
          $product_right_width = $product_right.width();
          $product_right_height = $product_right.height();

          $product_right.css('left', $product_right_left);
          $product_right.css('width', $product_right_width);

          $product_right_up = $product_left_top + $product_left_height - $product_right_height - 50;

          if ($(this).scrollTop() >= ($product_left_top - 50)) {
            $product_right.addClass('product_right-fixed');
          } else {
            $product_right.removeClass('product_right-fixed');
            $product_right.css('left', '');
            $product_right.css('width', '');
          }

          if ($(this).scrollTop() >= $product_right_up) {
            $product_right.css('top', ($(this).scrollTop() - ($product_right_up + 50)) * -1);
          } else {
            $product_right.css('top', '50px');
          }
        });
      }
    }
  }

  //Funcion para cerrar el popup de producto
  function popupProduct() {
    $('.popup-product .close-popup-product').click(function (event) {
      $('.popup-product').css('display', 'none');
    });
  }


  /**
   * Cargar post por ajax
   * @param jQuery $element - Elemento jquery
   * @param boolean push - Saber si se tiene que añadir url en la historia del navegador para que funcione el atrás y avanzar del navegador
   *
   * @return string
   */

  function loadElement($element, push, type) {
    //console.log($element);
    var push = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true,
      id = $element.attr('post-id'), //Post id definido en el atributo del elemento
      href = $element.attr('href'); //Url del enlace definido en el atributo del elemento

    var data = false;
    if (!id) {
      data = {
        'action': 'get_ajax_' + type,
      }
    } else if (id.length) {
      data = {
        'action': 'get_ajax_' + type,
        'id': id
      }
    }

    let timeStart = Date.now();
    let successDelay = 600;

    $.ajax({
      // you can also use $.post here
      url: ajax_custom.ajaxurl,
      // AJAX handler
      data: data,
      type: 'POST',
      beforeSend: function beforeSend(xhr) {
        $('body').append('<div class="single-content-ajax single-' + type + ' single-' + type + '-ajax single-' + type + '-loading single-' + type + '-animating"><div class="close-product"></div><div class="wrapper container"></div><div class="loader-holder"><div class="loader"><div class="loader__figure"></div></div></div></div>');
        setTimeout(function () {
          $('.single-' + type + '-ajax').removeClass('single-' + type + '-loading');
        }, 30);
      },
      success: function success(data) {
        if (data) {
          /*if (Date.now() - timeStart < successDelay) {
            setTimeout(function () {
              loadContent(data, href, push);
            }, successDelay - (Date.now() - timeStart));
          } else {
            */
          loadContent(data, href, push);
          //}

          setTimeout(function () {
            popupProduct();
          }, 500);

          setTimeout(function () {
            scrollGallery();
          }, 700);
        }

      },
      error: function error(jqXHR, textStatus, errorThrown) {}
    });

  }


  function loadContent(data, href, push) {
    $('.single-content-ajax .loader-holder').remove();
    $fotter = '<div class="wrapper" id="footer-wrapper"><div class="container" id="content" tabindex="-1"><footer id="colophon" class="site-footer"></footer></div></div>';
    $('.single-content-ajax .wrapper').append(data + $fotter);
    $('body').addClass('product-open');
    $('#wrapper-navbar .navbar-toggler').addClass('active close-product');
    $('.single-content-ajax').removeClass('single-product-animating');
    var state = window.history.state;
    var title = '';

    if (push) {
      if (!state) {
        state = {
          'uid': 1
        };
      } else {
        state.uid = state.uid + 1;
      }

      history.pushState(state, title, href);
    }
  }


  function closePost() {
    var push = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    $('.single-content-ajax').addClass('single-product-loading');
    $('.single-content-ajax').addClass('single-product-animating');
    $('body').removeClass('product-open');
    $('#wrapper-navbar .navbar-toggler').removeClass('active close-product');

    if (push) {
      history.go(-1);
    }

    setTimeout(function () {
      $('.single-content-ajax').remove();
    }, 500);
  }

}(jQuery));