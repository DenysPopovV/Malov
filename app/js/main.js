
    const swiperContainer = document.querySelector('.swiper-container');
    const swiperWrapper = swiperContainer.querySelector('.swiper-wrapper');
    const swiperSlides = swiperWrapper.querySelectorAll('.swiper-slide');
    const swiperPrevButton = swiperContainer.querySelector('.swiper-button-prev');
    const swiperNextButton = swiperContainer.querySelector('.swiper-button-next');
    let currentSlide = 0;
    
    // встановлюємо активним перший слайд
    swiperSlides[currentSlide].classList.add('swiper-slide-active');
    
    // обробник кнопки "назад"
    swiperPrevButton.addEventListener('click', () => {
      swiperSlides[currentSlide].classList.remove('swiper-slide-active');
      currentSlide--;
      if (currentSlide < 0) {
        currentSlide = swiperSlides.length - 1;
      }
      swiperSlides[currentSlide].classList.add('swiper-slide-active');
    });
    
    // обробник кнопки "вперед"
    swiperNextButton.addEventListener('click', () => {
      swiperSlides[currentSlide].classList.remove('swiper-slide-active');
      currentSlide++;
      if (currentSlide >= swiperSlides.length) {
        currentSlide = 0;
      }
      swiperSlides[currentSlide].classList.add('swiper-slide-active');
    });
    
    // автоматична зміна слайдів
    // setInterval(() => {
    //   swiperSlides[currentSlide].classList.remove('swiper-slide-active');
    //   currentSlide++;
    //   if (currentSlide >= swiperSlides.length) {
    //     currentSlide = 0;
    //   }
    //   swiperSlides[currentSlide].classList.add('swiper-slide-active');
    // }, 5000);
    
    



    const tabBtn = document.querySelectorAll('.tab-btn');
    const tabsItems = document.querySelectorAll('.tab-item');

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
        });
    }





