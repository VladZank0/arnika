const hero_slider = new Swiper ('.hero__slider', {
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets',
      bullets: true,
    },
    dynamicBullets: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

})
let currentSlide = hero_slider.realIndex + 1;
document.querySelector('.hero__slider-counter').innerHTML = `
  <span class="hero__slider-counter-current">
    ${currentSlide < 10 ? '0' + currentSlide : currentSlide}
  </span> 
  / 
  <span class="hero__slider-counter-total">
    ${hero_slider.slides.length < 10 ? '0' + hero_slider.slides.length : hero_slider.slides.length}
  </span>`;
hero_slider.on("slideChange", function () {
    currentSlide = this.activeIndex + 1;
    document.querySelector('.hero__slider-counter').innerHTML = `
    <span class="hero__slider-counter-current">
    ${currentSlide < 10 ? '0' + currentSlide : currentSlide}
    </span> 
    / 
    <span class="hero__slider-counter-total">
    ${this.slides.length < 10 ? '0' + this.slides.length : this.slides.length}
    </span> `;
});

