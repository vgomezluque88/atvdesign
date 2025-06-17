(function ($) {
    $(document).ready(function () {
        // Inicializar owl carousel
        $('.owl-carousel').owlCarousel({
            loop: true,
            dots: false,
            autoplay: true,
            autoplayTimeout: 5000,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 4
                }
            }
        })
    });

    $(document).on("click", ".change-color .day", function () {
        $("body").removeClass("oscuro").addClass("luz");
        console.log("Modo luz activado");
    });

    $(document).on("click", ".change-color .night", function () {
        $("body").removeClass("luz").addClass("oscuro");
        console.log("Modo oscuro activado");
    });

})(jQuery);
