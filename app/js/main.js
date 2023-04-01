
// const swiperContainer = document.querySelector('.swiper-container');
// const swiperWrapper = swiperContainer.querySelector('.swiper-wrapper');
// const swiperSlides = swiperWrapper.querySelectorAll('.swiper-slide');
// const swiperPrevButton = swiperContainer.querySelector('.swiper-button-prev');
// const swiperNextButton = swiperContainer.querySelector('.swiper-button-next');
// let currentSlide = 0;

// swiperSlides[currentSlide].classList.add('swiper-slide-active');

// swiperPrevButton.addEventListener('click', () => {
//   swiperSlides[currentSlide].classList.remove('swiper-slide-active');
//   currentSlide--;
//   if (currentSlide < 0) {
//     currentSlide = swiperSlides.length - 1;
//   }
//   swiperSlides[currentSlide].classList.add('swiper-slide-active');
// });

// swiperNextButton.addEventListener('click', () => {
//   swiperSlides[currentSlide].classList.remove('swiper-slide-active');
//   currentSlide++;
//   if (currentSlide >= swiperSlides.length) {
//     currentSlide = 0;
//   }
//   swiperSlides[currentSlide].classList.add('swiper-slide-active');
// });


$(function () {
  const headerHeight = $('.header__box').outerHeight();

  $(".scroll").on("click", function (event) {
    event.preventDefault();

    const scrollAnchor = $(this).attr('href');

    let scrollPoint = $(scrollAnchor).offset().top - headerHeight;

    $('body,html').animate({
      scrollTop: scrollPoint
    }, 500);

    return false;
  });
});

const tabBtn = document.querySelectorAll('.tab-btn');
const tabsItems = document.querySelectorAll('.tab-item');
const closeTabBtns = document.querySelectorAll('.close-tab-btn');

tabBtn.forEach(onTabClick)

function onTabClick(item) {
  item.addEventListener("click", function () {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);


    if (currentBtn.classList.contains("active")) {
      currentBtn.classList.remove("active");
      currentTab.classList.remove("active");
    } else {
      tabBtn.forEach(function (item) {
        item.classList.remove("active");
      });
      tabsItems.forEach(function (item) {
        item.classList.remove("active");
      });

      currentBtn.classList.add("active");
      currentTab.classList.add("active");
    }

    closeTabBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const activeTabBtn = document.querySelector('.tab-btn.active');
        const activeTab = document.querySelector('.tab-item.active');

        if (activeTabBtn !== null && activeTab !== null) {
          activeTabBtn.classList.remove('active');
          activeTab.classList.remove('active');
        }
      });
    });

  });
}


let form = document.getElementById('form');
let client = document.getElementById('client');
let mail = document.getElementById('mail');
let link = document.getElementById('link');
let question = document.getElementById('question');
let success = document.getElementById('success');
let danger = document.getElementById('danger');
let close = document.getElementById('close');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  function checkInputs() {
    let mailValue = mail.value.trim();
    let clientValue = client.value.trim();
    let linkValue = link.value.trim();
    let questionValue = question.value.trim();

    if (mailValue === '' || clientValue === '' || linkValue === '' || questionValue === '') {
      danger.style.display = 'block';
    } else {
      setTimeout(() => {
        mailValue = '';
        clientValue = '';
        linkValue = '';
        questionValue = '';
      }, 2000);
      danger.style.display = 'none';
      success.classList.add('popup-form__fixed--active');
    }
    if (success.classList.contains('popup-form__fixed--active')) {
      close.addEventListener("click", function () {
        success.classList.remove('popup-form__fixed--active')
      });
    }

  }
  checkInputs();
});
