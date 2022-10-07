const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 400,
    spaceBetween: 100,
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        direction: 'vertical'
      },
});

// Button events
/*nextEl.addEventListener('click', e => {
    nextSlide();
});

prevEl.addEventListener('click', e => {
    prevSlide();
});*/

