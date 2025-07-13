$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        dots: true,
        items: 1
    });
});

(function() {
    var burger = document.querySelector('.mobile-menu-container .burger-container');
    var mobileMenu = document.querySelector('.mobile-menu-container');

    if (burger && mobileMenu) { 
        burger.onclick = function() {
            mobileMenu.classList.toggle('menu-opened');
        }
    }
})();