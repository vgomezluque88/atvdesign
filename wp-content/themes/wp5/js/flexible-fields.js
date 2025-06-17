(function ($) {
  $(document).ready(function () {
    //Section hero image video
    $(".section__hero-image-video .cont__link-video span").on(
      "click",
      function (ev) {
        var iframe_src = $(this)
          .parent()
          .parent()
          .parent()
          .find("iframe")[0].src;
        var id_embed = iframe_src.split("/embed/").pop().split("?")[0];
        $(this).parent().parent().parent().find("iframe")[0].src +=
          "?autoplay=1&loop=1&playlist=" + id_embed;
        $(this)
          .parent()
          .parent()
          .parent()
          .find(".cont--video--iframe")
          .fadeIn();
        $(this)
          .parent()
          .parent()
          .parent()
          .find(".cont--video--iframe")
          .addClass("active");
        $("body").addClass("video-open");

        ev.preventDefault();
      }
    );

    $(".section__hero-image-video .close-video .icn-close").on(
      "click",
      function (ev) {
        var iframe_src = $(this).parent().parent().find("iframe")[0].src;
        $(this).parent().parent().find("iframe")[0].src = iframe_src.substring(
          0,
          iframe_src.indexOf("?")
        );
        $(this).parent().parent().fadeOut();
        $(this).parent().parent().removeClass("active");
        $("body").removeClass("video-open");

        ev.preventDefault();
      }
    );

    //PLAY VIDEO
    $('#play-video').on('click', function (ev) {
      var iframe_src = $(this).closest('.cont--media-inner').find('iframe')[0].src;
      var id_embed = iframe_src.split('/embed/').pop().split('?')[0];
      $(this).closest('.cont--media-inner').find('iframe')[0].src += "?autoplay=1&loop=1&playlist=" + id_embed;
      $(this).closest('.cont--media-inner').find(".cont--video--iframe").fadeIn();
      $(this).closest('.cont--media-inner').find(".cont--video--iframe").addClass('active');
      $(this).closest('.cont--media-inner').find(".button--play").css('display', 'none');
      $(this).closest('.cont--media-inner').find(".cont--video--image img").addClass('video-play');

      ev.preventDefault();
    });


    $(".section__hero-image-video .cont__info .cont__link-video span").click(
      function () {
        //console.log("Click video");
        ga("send", "event", "UX", "click", "ver video");
      }
    );
    //END ---- Section hero image video

    const galeria = document.querySelector(".galeria-logos");
    if (galeria) {
      galeria.innerHTML += galeria.innerHTML; // Duplica imágenes para efecto infinito
    }
    const proyectos = document.querySelectorAll('.proyecto');
    console.log("color");

    proyectos.forEach(proyecto => {
      const color = proyecto.getAttribute('data-hover-color');
      console.log(color);
      proyecto.addEventListener('mouseenter', () => {
        proyecto.style.setProperty('--hover-color', color);
        proyecto.classList.add('hover-activo');
      });

      proyecto.addEventListener('mouseleave', () => {
        proyecto.classList.remove('hover-activo');
      });
    });


  });
})(jQuery);
