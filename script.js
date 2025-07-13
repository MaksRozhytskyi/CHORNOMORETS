$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        dots: true,
        items: 1
    });
});

(function() {
    var burger = document.querySelector('.mobile-menu-container .burger-container'); // Target burger inside mobile menu
    var mobileMenu = document.querySelector('.mobile-menu-container'); // Target the mobile menu container

    if (burger && mobileMenu) { // Check if elements exist
        burger.onclick = function() {
            mobileMenu.classList.toggle('menu-opened');
        }
    }
})();