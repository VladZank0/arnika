const hero_slider = new Swiper ('.hero__slider', {
    pagination: {
      el: '.hero__slider-pagination',
      clickable: true,
      type: 'bullets',
      bullets: true,
    },
    speed: 0,
    dynamicBullets: true,
    navigation: {
      nextEl: '.hero__slider-button_next',
      prevEl: '.hero__slider-button_prev',
    },

})
let currentSlide = hero_slider.realIndex + 1;
document.querySelector('.hero__slider-counter').innerHTML = `
  <span class="pagination-counter__current">
    ${currentSlide < 10 ? '0' + currentSlide : currentSlide}
  </span> 
  / 
  <span class="pagination-counter__total">
    ${hero_slider.slides.length < 10 ? '0' + hero_slider.slides.length : hero_slider.slides.length}
  </span>`;
hero_slider.on("slideChange", function () {
    currentSlide = this.activeIndex + 1;
    document.querySelector('.hero__slider-counter').innerHTML = `
    <span class="pagination-counter__current">
    ${currentSlide < 10 ? '0' + currentSlide : currentSlide}
    </span> 
    / 
    <span class="pagination-counter__total">
    ${this.slides.length < 10 ? '0' + this.slides.length : this.slides.length}
    </span> `;
});



let directions_slider;
function directions_slider_init () {
	if (!directions_slider) {
		directions_slider = new Swiper ('.directions-block__slider', {
      spaceBetween: 20,
      slidesPerView: 2,
      slidesPerColumnFill: 'columns',
      slidesPerColumn: 2,
      dynamicBullets: true,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        570: {
          slidesPerView: 2,
        }
      },
      pagination: {
        el: '.directions-block__slider-pagination',
        clickable: true,
        type: 'bullets',
        bullets: true,
      },
      dynamicBullets: true,
      navigation: {
        nextEl: '.directions-block__slider-button_next',
        prevEl: '.directions-block__slider-button_prev',
      },
  
    })
  }
}
function directions_slider_destroy () {
	if (directions_slider) {
		directions_slider.destroy();
		directions_slider = null;
	}
}
if(document.querySelector('.directions-block__slider')){
  let windowWidth = window.innerWidth;
  if (windowWidth <= 700) {
    directions_slider_init();
  } else {
    directions_slider_destroy();
  }
  window.addEventListener('resize', ()=>{
    windowWidth = window.innerWidth;
    if (windowWidth <= 700) {
      directions_slider_init();
    } else {
      directions_slider_destroy();
    }
  })
  
}


const team_slider = new Swiper ('.team-block__slider', {
  watchOverflow: true,
  slidesPerView: "auto",
  centeredSlidesBounds:true,
  observer: true,
  observeParents: true,
  loop:false,
  slidesOffsetAfter:false,
  speed: 500,
  pagination: {
    el: '.team-block__slider-pagination',
    clickable: true,
    type: 'bullets',
    bullets: true,
  },
  dynamicBullets: true,
  navigation: {
    nextEl: '.team-block__slider-button_next',
    prevEl: '.team-block__slider-button_prev',
  },
  0: {
    spaceBetween: 32,
  },
  1400: {
    spaceBetween: 28,
  },
  spaceBetween: 28,

})


const service_slider = new Swiper ('.service-block__slider', {

  pagination: {
    el: '.service-block__slider-pagination',
    clickable: true,
    type: 'bullets',
    bullets: true,
  },
  speed: 500,
  dynamicBullets: true,
  navigation: {
    nextEl: '.service-block__slider-button_next',
    prevEl: '.service-block__slider-button_prev',
  },
  spaceBetween: 10,
  slidesPerView: 1,
  watchOverflow: true,
  slidesPerView: "auto",
  centeredSlidesBounds:true,
  observer: true,
  observeParents: true,
  loop:false,
  slidesOffsetAfter:false,

})
let service_current_slide = service_slider.realIndex + 1;
document.querySelector('.service-block__slider-counter').innerHTML = `
  <span class="pagination-counter__current">
    ${service_current_slide < 10 ? '0' + service_current_slide : service_current_slide}
  </span> 
  / 
  <span class="pagination-counter__total">
    ${service_slider.slides.length < 10 ? '0' + service_slider.slides.length : service_slider.slides.length}
  </span>`;
service_slider.on("slideChange", function () {
  service_current_slide = this.activeIndex + 1;
  document.querySelector('.service-block__slider-counter').innerHTML = `
  <span class="pagination-counter__current">
  ${service_current_slide < 10 ? '0' + service_current_slide : service_current_slide}
  </span> 
  / 
  <span class="pagination-counter__total">
  ${this.slides.length < 10 ? '0' + this.slides.length : this.slides.length}
  </span> `;
});

const blog_block_slider = new Swiper ('.blog-block__slider', {
  watchOverflow: true,
  slidesPerView: 'auto',
  centeredSlidesBounds:true,
  observer: true,
  observeParents: true,
  loop:false,
  slidesOffsetAfter:false,
  speed: 500,
  pagination: {
    el: '.blog-block__slider-pagination',
    clickable: true,
    type: 'bullets',
    bullets: true,
  },
  dynamicBullets: true,
  navigation: {
    nextEl: '.blog-block__slider-button_next',
    prevEl: '.blog-block__slider-button_prev',
  },
  spaceBetween: 20,
  0: {
    spaceBetween: 20,
  },
  1100:{
    spaceBetween: 32,
  },
  1400: {
    spaceBetween: 28,
  },
  

})