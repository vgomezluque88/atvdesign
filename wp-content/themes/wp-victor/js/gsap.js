// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function (event) {


    //wait until images, links, fonts, stylesheets, and js is loaded
    window.addEventListener("load", function (e) {

        // Esto es una animación mia que hice con JS
        typeWriterEffect(".cont__cv-text h3");
        typeWriterEffect(".cont__cv-text h4");

        const svgPath = document.querySelectorAll('path');

        const svgText = anime({
            targets: svgPath,
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 7000,
            delay: function(el, i) { return i * 250 },
            direction: 'alternate',
            loop: true
          });
    }, false);

});