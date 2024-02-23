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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzbGlkZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGhlcm9fc2xpZGVyID0gbmV3IFN3aXBlciAoJy5oZXJvX19zbGlkZXInLCB7XHJcbiAgICBcclxuICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgZWw6ICcuc3dpcGVyLXBhZ2luYXRpb24nLFxyXG4gICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICAgIHR5cGU6ICdidWxsZXRzJyxcclxuICAgICAgYnVsbGV0czogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBkeW5hbWljQnVsbGV0czogdHJ1ZSxcclxuICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gICAgfSxcclxuXHJcbn0pXHJcbmxldCBjdXJyZW50U2xpZGUgPSBoZXJvX3NsaWRlci5yZWFsSW5kZXggKyAxO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyb19fc2xpZGVyLWNvdW50ZXInKS5pbm5lckhUTUwgPSBgXHJcbiAgPHNwYW4gY2xhc3M9XCJoZXJvX19zbGlkZXItY291bnRlci1jdXJyZW50XCI+XHJcbiAgICAke2N1cnJlbnRTbGlkZSA8IDEwID8gJzAnICsgY3VycmVudFNsaWRlIDogY3VycmVudFNsaWRlfVxyXG4gIDwvc3Bhbj4gXHJcbiAgLyBcclxuICA8c3BhbiBjbGFzcz1cImhlcm9fX3NsaWRlci1jb3VudGVyLXRvdGFsXCI+XHJcbiAgICAke2hlcm9fc2xpZGVyLnNsaWRlcy5sZW5ndGggPCAxMCA/ICcwJyArIGhlcm9fc2xpZGVyLnNsaWRlcy5sZW5ndGggOiBoZXJvX3NsaWRlci5zbGlkZXMubGVuZ3RofVxyXG4gIDwvc3Bhbj5gO1xyXG5oZXJvX3NsaWRlci5vbihcInNsaWRlQ2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgIGN1cnJlbnRTbGlkZSA9IHRoaXMuYWN0aXZlSW5kZXggKyAxO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm9fX3NsaWRlci1jb3VudGVyJykuaW5uZXJIVE1MID0gYFxyXG4gICAgPHNwYW4gY2xhc3M9XCJoZXJvX19zbGlkZXItY291bnRlci1jdXJyZW50XCI+XHJcbiAgICAke2N1cnJlbnRTbGlkZSA8IDEwID8gJzAnICsgY3VycmVudFNsaWRlIDogY3VycmVudFNsaWRlfVxyXG4gICAgPC9zcGFuPiBcclxuICAgIC8gXHJcbiAgICA8c3BhbiBjbGFzcz1cImhlcm9fX3NsaWRlci1jb3VudGVyLXRvdGFsXCI+XHJcbiAgICAke3RoaXMuc2xpZGVzLmxlbmd0aCA8IDEwID8gJzAnICsgdGhpcy5zbGlkZXMubGVuZ3RoIDogdGhpcy5zbGlkZXMubGVuZ3RofVxyXG4gICAgPC9zcGFuPiBgO1xyXG59KTtcclxuXHJcbiJdLCJmaWxlIjoic2xpZGVycy5qcyJ9
