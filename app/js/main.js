/////////////////BLOG PAGE swiper/////////////////////
const InfoSwiper = new Swiper('.swiper-info', {
  direction: 'horizontal',
  spaceBetween: 33,
  slidesPerView: 3,
  loop: false,
  freeMode: true,

  navigation: {
    nextEl: '.blog-info__arrow-next',
    prevEl: '.blog-info__arrow-prev',
  },

  breakpoints: {
    360: {
      slidesPerView: 1.5,
      centeredSlides: true,
      initialSlide: 1,
      spaceBetween: 20,
    },
    380: {
      slidesPerView: 1.8,
      spaceBetween: 20,
      centeredSlides: true,
      initialSlide: 1,
    },
    460: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    500: {
      slidesPerView: 2.3,
      spaceBetween: 30,
    },
    560: {
      slidesPerView: 2.2,
      spaceBetween: 30,
    },
    660: {
      slidesPerView: 2.5,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 60,
    },
    800: {
      slidesPerView: 2.2,
      spaceBetween: 60,
    },
    900: {
      slidesPerView: 2.5,
      spaceBetween: 60,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
    1200: {
      slidesPerView: 3,
    }
  }
});

const InstSwiper = new Swiper('.swiper-inst', {
  direction: 'horizontal',
  spaceBetween: 33,
  slidesPerView: 3,
  loop: false,
  freeMode: true,

  navigation: {
    nextEl: '.blog-inst__arrow-next',
    prevEl: '.blog-inst__arrow-prev',
  },

  breakpoints: {
    360: {
      slidesPerView: 1.5,
      centeredSlides: true,
      initialSlide: 1,
      spaceBetween: 20,
    },
    380: {
      slidesPerView: 1.8,
      spaceBetween: 20,
      centeredSlides: true,
      initialSlide: 1,
    },
    460: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    500: {
      slidesPerView: 2.3,
      spaceBetween: 30,
    },
    560: {
      slidesPerView: 2.2,
      spaceBetween: 30,
    },
    660: {
      slidesPerView: 2.5,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 60,
    },
    800: {
      slidesPerView: 2.2,
      spaceBetween: 60,
    },
    900: {
      slidesPerView: 2.5,
      spaceBetween: 60,
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
    1200: {
      slidesPerView: 3,
    }
  }
});
////////////////////////////////////////////////////////////////////////


///////////////////////////HOME PAGE reviews swiper///////////////////////////////////////
const swiperContainer = document.querySelector('.reviews__swiper');
if (swiperContainer) {
  const swiperWrapper = swiperContainer.querySelector('.swiper-wrapper');
  const swiperSlides = swiperWrapper.querySelectorAll('.swiper-slide');
  const swiperPrevButton = swiperContainer.querySelector('.swiper-button-prev');
  const swiperNextButton = swiperContainer.querySelector('.swiper-button-next');
  let currentSlide = 0;

  swiperSlides[currentSlide].classList.add('swiper-slide-active');

  swiperPrevButton.addEventListener('click', () => {
    swiperSlides[currentSlide].classList.remove('swiper-slide-active');
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = swiperSlides.length - 1;
    }
    swiperSlides[currentSlide].classList.add('swiper-slide-active');
  });

  swiperNextButton.addEventListener('click', () => {
    swiperSlides[currentSlide].classList.remove('swiper-slide-active');
    currentSlide++;
    if (currentSlide >= swiperSlides.length) {
      currentSlide = 0;
    }
    swiperSlides[currentSlide].classList.add('swiper-slide-active');
  });
}
////////////////////////////////////////////////////////////////////////////////////////////


///////////////////////////HOME PAGE HEADER Effect FIXED ////////////////////////////////////
const menuFixed = document.querySelector('.header__box');
const heroPadding = document.querySelector('.hero');

window.addEventListener('scroll', function () {
  const scrollTop = document.documentElement.scrollTop;
  menuFixed.classList.toggle('sticky', scrollTop >= 100);
  menuFixed.classList.toggle('animation', scrollTop >= 200);
  menuFixed.classList.toggle('opacity', scrollTop >= 350);
});
////////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////HOME PAGE HEADER Effect SCROLL////////////////////
$(function () {
  const headerHeight = $('.header__box').outerHeight();

  $(".scroll").on("click", function (event) {
    event.preventDefault();

    const scrollAnchor = $(this).attr('href');

    let scrollPoint = $(scrollAnchor).offset().top - headerHeight;

    if (scrollAnchor === '#contact') {
      scrollPoint = scrollPoint - 50;
    }

    if (scrollAnchor === '#faq') {
      scrollPoint = scrollPoint - -100;
    }

    $('body,html').animate({
      scrollTop: scrollPoint
    }, 500);

    return false;
  });
});
////////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////SCRIPT for TABS EFFECT////////////////////////////////////////////////
const tabBtn = document.querySelectorAll('.tab-btn');
const tabsItems = document.querySelectorAll('.tab-item');
const closeTabBtns = document.querySelectorAll('.close-tab-btn');

tabBtn.forEach(onTabClick);

function onTabClick(item) {
  item.addEventListener('click', function () {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute('data-tab');
    let currentTab = document.querySelector(tabId);

    if (currentBtn.classList.contains('active')) {
      currentBtn.classList.remove('active');
      currentTab.classList.remove('active');

      if (!currentTab.classList.contains('lock-body')) {
        document.body.classList.remove('lock');
      }
    } else {
      tabBtn.forEach(function (item) {
        item.classList.remove('active');
      });
      tabsItems.forEach(function (item) {
        item.classList.remove('active');
      });

      currentBtn.classList.add('active');
      currentTab.classList.add('active');

      if (currentTab.classList.contains('lock-body')) {
        document.body.classList.add('lock');
      }
    }

    closeTabBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const activeTabBtn = document.querySelector('.tab-btn.active');
        const activeTab = document.querySelector('.tab-item.active');

        if (activeTabBtn !== null && activeTab !== null) {
          activeTabBtn.classList.remove('active');
          activeTab.classList.remove('active');

          if (!document.querySelector('.tab-item.lock-body.active')) {
            document.body.classList.remove('lock');
          }
        }
      });
    });
  });
}
//////////////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////CAREERS PAGE Tab-two OPEN////////////////////////////
let openTab = document.querySelector('.careers-tabs__item:nth-child(2)>.careers-tabs__head>.careers-tabs__btn');
if (openTab !== null) {
  openTab.click();
}
/////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////PORTFOLIO PAGE SHOW MORE ////////////////////////////
$(document).ready(function () {
  $(".portfolio__list-item").slice(0, 6).show();
  $("#loadMore").on("click", function (e) {
    e.preventDefault();
    $(".portfolio__list-item:hidden").slice(0, 3).slideDown();
    if ($(".portfolio__list-item:hidden").length == 0) {
      $("#loadMore").text("No Content").addClass("noContent");
    }
  });
})
/////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////FORM CHECK//////////////////////////////////////////////
let client = document.getElementById('client');
let mail = document.getElementById('mail');
let link = document.getElementById('link');
let question = document.getElementById('question');
let success = document.getElementById('success');
let danger = document.getElementById('danger');
let close = document.getElementById('close');
let form = document.getElementById('form');
if (form) {
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
}
//////////////////////////////////////////////////////////////////////////////////////////////


