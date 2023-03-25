$(function () {
    const swiper = new Swiper('.swiper', {

        
        slidesPerView: 1,
        mousewheel: true,
        spaceBetween: 35,
        centeredSlides: true,


        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-prev',
            prevEl: '.swiper-button-next',
        },

        // And if we need scrollbar

    });
});