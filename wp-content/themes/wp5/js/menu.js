(function ($) {

    $(document).ready(function () {
        $('#header-wrapper .cont--menu__open input').change(function () {
            var selector = '.main-navigation';

            if (this.checked) {
                $('body').addClass('menu-open');
                $(selector).addClass('show');
            } else {
                $('body').removeClass('menu-open');
                $(selector).removeClass('show');
            }
        });


    });

}(jQuery));