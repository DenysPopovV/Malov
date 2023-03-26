const tabBtn = document.querySelectorAll('.tab-btn');
const tabsItems = document.querySelectorAll('.tab-item');

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


tabBtn.forEach(onTabClick)

function onTabClick(item) {
    item.addEventListener("click", function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab")
        let currentTab = document.querySelector(tabId)


        if (!currentBtn.classList.contains('active')) {
            tabBtn.forEach(function (item) {
                item.classList.remove('active')
            });
            tabsItems.forEach(function (item) {
                item.classList.remove('active')
            });

            currentBtn.classList.add('active')
            currentTab.classList.add('active')
        }
        currentBtn.addEventListener('click', () => {
            currentBtn.classList.toggle('active');
            currentTab.classList.toggle('active');
        });


    });




}

