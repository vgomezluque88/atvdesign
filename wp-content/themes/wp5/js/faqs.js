(function ($) {

    $(document).ready(function () {

        $(".section__faq .cont__question h3").on("click", function () {
            if ($(this).hasClass("active")) {
                $(this).removeClass("active");
                $(this)
                    .siblings(".cont__content")
                    .slideUp(300);
            } else {
                $(".section__faq .cont__question h3").removeClass("active");
                $(this).addClass("active");
                $(".cont__content").slideUp(300);
                $(this)
                    .siblings(".cont__content")
                    .slideDown(300);
            }
        });

    });

}(jQuery));