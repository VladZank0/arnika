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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzbGlkZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGhlcm9fc2xpZGVyID0gbmV3IFN3aXBlciAoJy5oZXJvX19zbGlkZXInLCB7XHJcbiAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgIGVsOiAnLmhlcm9fX3NsaWRlci1wYWdpbmF0aW9uJyxcclxuICAgICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gICAgICB0eXBlOiAnYnVsbGV0cycsXHJcbiAgICAgIGJ1bGxldHM6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgc3BlZWQ6IDAsXHJcbiAgICBkeW5hbWljQnVsbGV0czogdHJ1ZSxcclxuICAgIG5hdmlnYXRpb246IHtcclxuICAgICAgbmV4dEVsOiAnLmhlcm9fX3NsaWRlci1idXR0b25fbmV4dCcsXHJcbiAgICAgIHByZXZFbDogJy5oZXJvX19zbGlkZXItYnV0dG9uX3ByZXYnLFxyXG4gICAgfSxcclxuXHJcbn0pXHJcbmxldCBjdXJyZW50U2xpZGUgPSBoZXJvX3NsaWRlci5yZWFsSW5kZXggKyAxO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyb19fc2xpZGVyLWNvdW50ZXInKS5pbm5lckhUTUwgPSBgXHJcbiAgPHNwYW4gY2xhc3M9XCJwYWdpbmF0aW9uLWNvdW50ZXJfX2N1cnJlbnRcIj5cclxuICAgICR7Y3VycmVudFNsaWRlIDwgMTAgPyAnMCcgKyBjdXJyZW50U2xpZGUgOiBjdXJyZW50U2xpZGV9XHJcbiAgPC9zcGFuPiBcclxuICAvIFxyXG4gIDxzcGFuIGNsYXNzPVwicGFnaW5hdGlvbi1jb3VudGVyX190b3RhbFwiPlxyXG4gICAgJHtoZXJvX3NsaWRlci5zbGlkZXMubGVuZ3RoIDwgMTAgPyAnMCcgKyBoZXJvX3NsaWRlci5zbGlkZXMubGVuZ3RoIDogaGVyb19zbGlkZXIuc2xpZGVzLmxlbmd0aH1cclxuICA8L3NwYW4+YDtcclxuaGVyb19zbGlkZXIub24oXCJzbGlkZUNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjdXJyZW50U2xpZGUgPSB0aGlzLmFjdGl2ZUluZGV4ICsgMTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvX19zbGlkZXItY291bnRlcicpLmlubmVySFRNTCA9IGBcclxuICAgIDxzcGFuIGNsYXNzPVwicGFnaW5hdGlvbi1jb3VudGVyX19jdXJyZW50XCI+XHJcbiAgICAke2N1cnJlbnRTbGlkZSA8IDEwID8gJzAnICsgY3VycmVudFNsaWRlIDogY3VycmVudFNsaWRlfVxyXG4gICAgPC9zcGFuPiBcclxuICAgIC8gXHJcbiAgICA8c3BhbiBjbGFzcz1cInBhZ2luYXRpb24tY291bnRlcl9fdG90YWxcIj5cclxuICAgICR7dGhpcy5zbGlkZXMubGVuZ3RoIDwgMTAgPyAnMCcgKyB0aGlzLnNsaWRlcy5sZW5ndGggOiB0aGlzLnNsaWRlcy5sZW5ndGh9XHJcbiAgICA8L3NwYW4+IGA7XHJcbn0pO1xyXG5cclxuXHJcblxyXG5sZXQgZGlyZWN0aW9uc19zbGlkZXI7XHJcbmZ1bmN0aW9uIGRpcmVjdGlvbnNfc2xpZGVyX2luaXQgKCkge1xyXG5cdGlmICghZGlyZWN0aW9uc19zbGlkZXIpIHtcclxuXHRcdGRpcmVjdGlvbnNfc2xpZGVyID0gbmV3IFN3aXBlciAoJy5kaXJlY3Rpb25zLWJsb2NrX19zbGlkZXInLCB7XHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgIHNsaWRlc1BlckNvbHVtbkZpbGw6ICdjb2x1bW5zJyxcclxuICAgICAgc2xpZGVzUGVyQ29sdW1uOiAyLFxyXG4gICAgICBkeW5hbWljQnVsbGV0czogdHJ1ZSxcclxuICAgICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgICAwOiB7XHJcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgNTcwOiB7XHJcbiAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgIGVsOiAnLmRpcmVjdGlvbnMtYmxvY2tfX3NsaWRlci1wYWdpbmF0aW9uJyxcclxuICAgICAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICAgICAgdHlwZTogJ2J1bGxldHMnLFxyXG4gICAgICAgIGJ1bGxldHM6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIGR5bmFtaWNCdWxsZXRzOiB0cnVlLFxyXG4gICAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgICAgbmV4dEVsOiAnLmRpcmVjdGlvbnMtYmxvY2tfX3NsaWRlci1idXR0b25fbmV4dCcsXHJcbiAgICAgICAgcHJldkVsOiAnLmRpcmVjdGlvbnMtYmxvY2tfX3NsaWRlci1idXR0b25fcHJldicsXHJcbiAgICAgIH0sXHJcbiAgXHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBkaXJlY3Rpb25zX3NsaWRlcl9kZXN0cm95ICgpIHtcclxuXHRpZiAoZGlyZWN0aW9uc19zbGlkZXIpIHtcclxuXHRcdGRpcmVjdGlvbnNfc2xpZGVyLmRlc3Ryb3koKTtcclxuXHRcdGRpcmVjdGlvbnNfc2xpZGVyID0gbnVsbDtcclxuXHR9XHJcbn1cclxuaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpcmVjdGlvbnMtYmxvY2tfX3NsaWRlcicpKXtcclxuICBsZXQgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICBpZiAod2luZG93V2lkdGggPD0gNzAwKSB7XHJcbiAgICBkaXJlY3Rpb25zX3NsaWRlcl9pbml0KCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRpcmVjdGlvbnNfc2xpZGVyX2Rlc3Ryb3koKTtcclxuICB9XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpPT57XHJcbiAgICB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgaWYgKHdpbmRvd1dpZHRoIDw9IDcwMCkge1xyXG4gICAgICBkaXJlY3Rpb25zX3NsaWRlcl9pbml0KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkaXJlY3Rpb25zX3NsaWRlcl9kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgfSlcclxuICBcclxufVxyXG5cclxuXHJcbmNvbnN0IHRlYW1fc2xpZGVyID0gbmV3IFN3aXBlciAoJy50ZWFtLWJsb2NrX19zbGlkZXInLCB7XHJcbiAgd2F0Y2hPdmVyZmxvdzogdHJ1ZSxcclxuICBzbGlkZXNQZXJWaWV3OiBcImF1dG9cIixcclxuICBjZW50ZXJlZFNsaWRlc0JvdW5kczp0cnVlLFxyXG4gIG9ic2VydmVyOiB0cnVlLFxyXG4gIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxyXG4gIGxvb3A6ZmFsc2UsXHJcbiAgc2xpZGVzT2Zmc2V0QWZ0ZXI6ZmFsc2UsXHJcbiAgc3BlZWQ6IDUwMCxcclxuICBwYWdpbmF0aW9uOiB7XHJcbiAgICBlbDogJy50ZWFtLWJsb2NrX19zbGlkZXItcGFnaW5hdGlvbicsXHJcbiAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICB0eXBlOiAnYnVsbGV0cycsXHJcbiAgICBidWxsZXRzOiB0cnVlLFxyXG4gIH0sXHJcbiAgZHluYW1pY0J1bGxldHM6IHRydWUsXHJcbiAgbmF2aWdhdGlvbjoge1xyXG4gICAgbmV4dEVsOiAnLnRlYW0tYmxvY2tfX3NsaWRlci1idXR0b25fbmV4dCcsXHJcbiAgICBwcmV2RWw6ICcudGVhbS1ibG9ja19fc2xpZGVyLWJ1dHRvbl9wcmV2JyxcclxuICB9LFxyXG4gIDA6IHtcclxuICAgIHNwYWNlQmV0d2VlbjogMzIsXHJcbiAgfSxcclxuICAxNDAwOiB7XHJcbiAgICBzcGFjZUJldHdlZW46IDI4LFxyXG4gIH0sXHJcbiAgc3BhY2VCZXR3ZWVuOiAyOCxcclxuXHJcbn0pXHJcblxyXG5cclxuY29uc3Qgc2VydmljZV9zbGlkZXIgPSBuZXcgU3dpcGVyICgnLnNlcnZpY2UtYmxvY2tfX3NsaWRlcicsIHtcclxuXHJcbiAgcGFnaW5hdGlvbjoge1xyXG4gICAgZWw6ICcuc2VydmljZS1ibG9ja19fc2xpZGVyLXBhZ2luYXRpb24nLFxyXG4gICAgY2xpY2thYmxlOiB0cnVlLFxyXG4gICAgdHlwZTogJ2J1bGxldHMnLFxyXG4gICAgYnVsbGV0czogdHJ1ZSxcclxuICB9LFxyXG4gIHNwZWVkOiA1MDAsXHJcbiAgZHluYW1pY0J1bGxldHM6IHRydWUsXHJcbiAgbmF2aWdhdGlvbjoge1xyXG4gICAgbmV4dEVsOiAnLnNlcnZpY2UtYmxvY2tfX3NsaWRlci1idXR0b25fbmV4dCcsXHJcbiAgICBwcmV2RWw6ICcuc2VydmljZS1ibG9ja19fc2xpZGVyLWJ1dHRvbl9wcmV2JyxcclxuICB9LFxyXG4gIHNwYWNlQmV0d2VlbjogMTAsXHJcbiAgc2xpZGVzUGVyVmlldzogMSxcclxuICB3YXRjaE92ZXJmbG93OiB0cnVlLFxyXG4gIHNsaWRlc1BlclZpZXc6IFwiYXV0b1wiLFxyXG4gIGNlbnRlcmVkU2xpZGVzQm91bmRzOnRydWUsXHJcbiAgb2JzZXJ2ZXI6IHRydWUsXHJcbiAgb2JzZXJ2ZVBhcmVudHM6IHRydWUsXHJcbiAgbG9vcDpmYWxzZSxcclxuICBzbGlkZXNPZmZzZXRBZnRlcjpmYWxzZSxcclxuXHJcbn0pXHJcbmxldCBzZXJ2aWNlX2N1cnJlbnRfc2xpZGUgPSBzZXJ2aWNlX3NsaWRlci5yZWFsSW5kZXggKyAxO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VydmljZS1ibG9ja19fc2xpZGVyLWNvdW50ZXInKS5pbm5lckhUTUwgPSBgXHJcbiAgPHNwYW4gY2xhc3M9XCJwYWdpbmF0aW9uLWNvdW50ZXJfX2N1cnJlbnRcIj5cclxuICAgICR7c2VydmljZV9jdXJyZW50X3NsaWRlIDwgMTAgPyAnMCcgKyBzZXJ2aWNlX2N1cnJlbnRfc2xpZGUgOiBzZXJ2aWNlX2N1cnJlbnRfc2xpZGV9XHJcbiAgPC9zcGFuPiBcclxuICAvIFxyXG4gIDxzcGFuIGNsYXNzPVwicGFnaW5hdGlvbi1jb3VudGVyX190b3RhbFwiPlxyXG4gICAgJHtzZXJ2aWNlX3NsaWRlci5zbGlkZXMubGVuZ3RoIDwgMTAgPyAnMCcgKyBzZXJ2aWNlX3NsaWRlci5zbGlkZXMubGVuZ3RoIDogc2VydmljZV9zbGlkZXIuc2xpZGVzLmxlbmd0aH1cclxuICA8L3NwYW4+YDtcclxuc2VydmljZV9zbGlkZXIub24oXCJzbGlkZUNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgc2VydmljZV9jdXJyZW50X3NsaWRlID0gdGhpcy5hY3RpdmVJbmRleCArIDE7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlcnZpY2UtYmxvY2tfX3NsaWRlci1jb3VudGVyJykuaW5uZXJIVE1MID0gYFxyXG4gIDxzcGFuIGNsYXNzPVwicGFnaW5hdGlvbi1jb3VudGVyX19jdXJyZW50XCI+XHJcbiAgJHtzZXJ2aWNlX2N1cnJlbnRfc2xpZGUgPCAxMCA/ICcwJyArIHNlcnZpY2VfY3VycmVudF9zbGlkZSA6IHNlcnZpY2VfY3VycmVudF9zbGlkZX1cclxuICA8L3NwYW4+IFxyXG4gIC8gXHJcbiAgPHNwYW4gY2xhc3M9XCJwYWdpbmF0aW9uLWNvdW50ZXJfX3RvdGFsXCI+XHJcbiAgJHt0aGlzLnNsaWRlcy5sZW5ndGggPCAxMCA/ICcwJyArIHRoaXMuc2xpZGVzLmxlbmd0aCA6IHRoaXMuc2xpZGVzLmxlbmd0aH1cclxuICA8L3NwYW4+IGA7XHJcbn0pO1xyXG5cclxuY29uc3QgYmxvZ19ibG9ja19zbGlkZXIgPSBuZXcgU3dpcGVyICgnLmJsb2ctYmxvY2tfX3NsaWRlcicsIHtcclxuICB3YXRjaE92ZXJmbG93OiB0cnVlLFxyXG4gIHNsaWRlc1BlclZpZXc6ICdhdXRvJyxcclxuICBjZW50ZXJlZFNsaWRlc0JvdW5kczp0cnVlLFxyXG4gIG9ic2VydmVyOiB0cnVlLFxyXG4gIG9ic2VydmVQYXJlbnRzOiB0cnVlLFxyXG4gIGxvb3A6ZmFsc2UsXHJcbiAgc2xpZGVzT2Zmc2V0QWZ0ZXI6ZmFsc2UsXHJcbiAgc3BlZWQ6IDUwMCxcclxuICBwYWdpbmF0aW9uOiB7XHJcbiAgICBlbDogJy5ibG9nLWJsb2NrX19zbGlkZXItcGFnaW5hdGlvbicsXHJcbiAgICBjbGlja2FibGU6IHRydWUsXHJcbiAgICB0eXBlOiAnYnVsbGV0cycsXHJcbiAgICBidWxsZXRzOiB0cnVlLFxyXG4gIH0sXHJcbiAgZHluYW1pY0J1bGxldHM6IHRydWUsXHJcbiAgbmF2aWdhdGlvbjoge1xyXG4gICAgbmV4dEVsOiAnLmJsb2ctYmxvY2tfX3NsaWRlci1idXR0b25fbmV4dCcsXHJcbiAgICBwcmV2RWw6ICcuYmxvZy1ibG9ja19fc2xpZGVyLWJ1dHRvbl9wcmV2JyxcclxuICB9LFxyXG4gIHNwYWNlQmV0d2VlbjogMjAsXHJcbiAgMDoge1xyXG4gICAgc3BhY2VCZXR3ZWVuOiAyMCxcclxuICB9LFxyXG4gIDExMDA6e1xyXG4gICAgc3BhY2VCZXR3ZWVuOiAzMixcclxuICB9LFxyXG4gIDE0MDA6IHtcclxuICAgIHNwYWNlQmV0d2VlbjogMjgsXHJcbiAgfSxcclxuICBcclxuXHJcbn0pIl0sImZpbGUiOiJzbGlkZXJzLmpzIn0=