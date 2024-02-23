const background = document.querySelector('.main-menu-background');
const page_background = document.querySelector('.main-menu-page-background');
const dropdown_btns = document.querySelectorAll('.main-menu__dropdown-button');
const main_menu_tabs = document.querySelectorAll('.main-menu__dropdown-submenu-tab');
const burger_btn = document.querySelector('.burger-btn');
const burger_menu = document.querySelector('.burger-menu');

// Десктопное меню
let submenu = null;

function clear_dropdowns(){
    document.querySelectorAll('.main-menu__dropdown-submenu_active').forEach(e=>{
        e.classList.remove('main-menu__dropdown-submenu_active');
    })
    document.querySelectorAll('.main-menu__dropdown-button_active').forEach(e=>{
        e.classList.remove('main-menu__dropdown-button_active');
    })

}
    // Подстройка бэкграунда под меню
function handleResize(inner_content) {
    document.querySelector('.main-menu-background').style.height = inner_content.offsetHeight + 'px';
}
let resizeHandler = () => {
    handleResize(submenu);
};
    // Закрытие меню по клику вне блока
let out_block_click_handle = (e) => {
    if(!e.target.closest('.main-menu__list-item') && !e.target.closest('.main-menu-background')){
        clear_dropdowns();
        document.querySelector('.main-menu-background').style.height = 0 + 'px';
        page_background.classList.remove('main-menu-page-background_active');
        window.removeEventListener('resize', resizeHandler);
    }
}
if(!window.matchMedia('(max-width: 1100px)').matches){
    window.addEventListener('click', out_block_click_handle);
}else{
    window.removeEventListener('click', out_block_click_handle);
}
    //Обработка кнопок меню
dropdown_btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let parent = btn.closest('li');
        submenu = parent.querySelector('.main-menu__dropdown-submenu');
        
        if(!e.currentTarget.classList.contains('main-menu__dropdown-button_active')){
            clear_dropdowns();
            window.removeEventListener('resize', resizeHandler);
            if(window.matchMedia('(max-width: 1100px)').matches){
                submenu.scrollIntoView({ block: "start", behavior: "smooth" });
            }
        }
        page_background.classList.add('main-menu-page-background_active');
        if (!submenu.classList.contains('main-menu__dropdown-submenu_active')){
            submenu.classList.add('main-menu__dropdown-submenu_active');
            e.currentTarget.classList.add('main-menu__dropdown-button_active');
            handleResize(submenu);
            window.addEventListener('resize', resizeHandler);
        }else{
            submenu.classList.remove('main-menu__dropdown-submenu_active');
            e.currentTarget.classList.remove('main-menu__dropdown-button_active');
            window.removeEventListener('resize', resizeHandler);
            document.querySelector('.main-menu-background').style.height = 0 + 'px';
            page_background.classList.remove('main-menu-page-background_active');
        }
    })
})
    // Однократное закрытие менюшек при ресайзе с моба на десктоп
// let close_mobile_dropdowns = function () {
//     if(window.matchMedia('(min-width: 1100px)').matches){
//         clear_dropdowns();
//         document.querySelector('.main-menu-background').style.height = 0 + 'px';
//         window.removeEventListener('resize', close_mobile_dropdowns, false);
//         window.removeEventListener('resize', resizeHandler);
//         page_background.classList.remove('main-menu-page-background_active');
//     }
// };
// window.addEventListener("resize",  close_mobile_dropdowns, false);

    //  Обработка подпуктов в меню


    main_menu_tabs.forEach(e => {
    e.addEventListener('click', () => {
        main_menu_tabs.forEach(e=>{
            e.classList.remove('main-menu__dropdown-submenu-tab_active');
        })
        document.querySelectorAll('.main-menu__dropdown-submenu-content').forEach(e=>{
            e.classList.remove('main-menu__dropdown-submenu-content_active');
        })
        let tab_content = document.querySelector(e.getAttribute('data-content'));
        e.classList.add('main-menu__dropdown-submenu-tab_active');
        tab_content.classList.add('main-menu__dropdown-submenu-content_active');
        handleResize(tab_content.closest('.main-menu__dropdown-submenu'));
        window.addEventListener('resize', handleResize(tab_content.closest('.main-menu__dropdown-submenu')));
    })
})

// Мобильное меню

burger_btn.addEventListener('click', () => {
    burger_btn.classList.toggle('burger-btn_active');
    burger_menu.classList.toggle('burger-menu_active');
    if(!burger_menu.classList.contains('burger-menu_active')){
        clear_dropdowns();
    }
})

// Показать еще
let tab_boxes = document.querySelectorAll('.main-menu__dropdown-submenu-list_mega-box');
let tabs = document.querySelectorAll('.main-menu__dropdown-submenu-mobile-button');

function show_more(){
    if(window.matchMedia('(max-width: 700px)').matches){

        tab_boxes.forEach(box => {
            let all_li = box.querySelectorAll('li');
            all_li.forEach((li, li_index) => {
                
                if(li_index > 5 && li_index != all_li.length - 1){
                    li.style.display = "none";
                }
                
            })
        })


        
        // var countD = 10;
        // btn.addEventListener("click", function() {
        //     var box=document.getElementsByClassName('box');
        //     countD += 10;
        //     if (countD <= box.length){
        //         for(let i=0;i<countD;i++){
        //              box[i].style.display = "block";
        //         }
        //     }

        // })   
    }else{
        tab_boxes.forEach(box => {
            let all_li = box.querySelectorAll('li');
            all_li.forEach((li) => {
                li.style.display = "flex";
            })
        })
    }
}
window.addEventListener('load', ()=>{
    show_more();
})
window.addEventListener('resize', ()=>{
    show_more();
})

// Обработка вложенных аккордионов в пункте меню
let btns = document.querySelectorAll('.main-menu__dropdown-submenu-mobile-button');
btns.forEach((e)=>{
    e.addEventListener('click', (event)=>{
        let content =  event.target.nextElementSibling;
        
        if(content.style.minHeight){
            event.target.classList.remove('main-menu__dropdown-submenu-mobile-button_active');
            content.style.minHeight = null;
            content.style.height = 0;  
        }else{
            event.target.classList.add('main-menu__dropdown-submenu-mobile-button_active');
            content.style.minHeight = content.scrollHeight + "px";  
            content.style.height = 'unset';  
            e.classList.add('main-menu__dropdown-submenu-mobile-button_active');
        }   
    })
})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLW1lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYmFja2dyb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLW1lbnUtYmFja2dyb3VuZCcpO1xyXG5jb25zdCBwYWdlX2JhY2tncm91bmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1tZW51LXBhZ2UtYmFja2dyb3VuZCcpO1xyXG5jb25zdCBkcm9wZG93bl9idG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1haW4tbWVudV9fZHJvcGRvd24tYnV0dG9uJyk7XHJcbmNvbnN0IG1haW5fbWVudV90YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1haW4tbWVudV9fZHJvcGRvd24tc3VibWVudS10YWInKTtcclxuY29uc3QgYnVyZ2VyX2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXJnZXItYnRuJyk7XHJcbmNvbnN0IGJ1cmdlcl9tZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1cmdlci1tZW51Jyk7XHJcblxyXG4vLyDQlNC10YHQutGC0L7Qv9C90L7QtSDQvNC10L3RjlxyXG5sZXQgc3VibWVudSA9IG51bGw7XHJcblxyXG5mdW5jdGlvbiBjbGVhcl9kcm9wZG93bnMoKXtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYWluLW1lbnVfX2Ryb3Bkb3duLXN1Ym1lbnVfYWN0aXZlJykuZm9yRWFjaChlPT57XHJcbiAgICAgICAgZS5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLW1lbnVfX2Ryb3Bkb3duLXN1Ym1lbnVfYWN0aXZlJyk7XHJcbiAgICB9KVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1haW4tbWVudV9fZHJvcGRvd24tYnV0dG9uX2FjdGl2ZScpLmZvckVhY2goZT0+e1xyXG4gICAgICAgIGUuY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1tZW51X19kcm9wZG93bi1idXR0b25fYWN0aXZlJyk7XHJcbiAgICB9KVxyXG5cclxufVxyXG4gICAgLy8g0J/QvtC00YHRgtGA0L7QudC60LAg0LHRjdC60LPRgNCw0YPQvdC00LAg0L/QvtC0INC80LXQvdGOXHJcbmZ1bmN0aW9uIGhhbmRsZVJlc2l6ZShpbm5lcl9jb250ZW50KSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1tZW51LWJhY2tncm91bmQnKS5zdHlsZS5oZWlnaHQgPSBpbm5lcl9jb250ZW50Lm9mZnNldEhlaWdodCArICdweCc7XHJcbn1cclxubGV0IHJlc2l6ZUhhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICBoYW5kbGVSZXNpemUoc3VibWVudSk7XHJcbn07XHJcbiAgICAvLyDQl9Cw0LrRgNGL0YLQuNC1INC80LXQvdGOINC/0L4g0LrQu9C40LrRgyDQstC90LUg0LHQu9C+0LrQsFxyXG5sZXQgb3V0X2Jsb2NrX2NsaWNrX2hhbmRsZSA9IChlKSA9PiB7XHJcbiAgICBpZighZS50YXJnZXQuY2xvc2VzdCgnLm1haW4tbWVudV9fbGlzdC1pdGVtJykgJiYgIWUudGFyZ2V0LmNsb3Nlc3QoJy5tYWluLW1lbnUtYmFja2dyb3VuZCcpKXtcclxuICAgICAgICBjbGVhcl9kcm9wZG93bnMoKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1tZW51LWJhY2tncm91bmQnKS5zdHlsZS5oZWlnaHQgPSAwICsgJ3B4JztcclxuICAgICAgICBwYWdlX2JhY2tncm91bmQuY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1tZW51LXBhZ2UtYmFja2dyb3VuZF9hY3RpdmUnKTtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplSGFuZGxlcik7XHJcbiAgICB9XHJcbn1cclxuaWYoIXdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiAxMTAwcHgpJykubWF0Y2hlcyl7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvdXRfYmxvY2tfY2xpY2tfaGFuZGxlKTtcclxufWVsc2V7XHJcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvdXRfYmxvY2tfY2xpY2tfaGFuZGxlKTtcclxufVxyXG4gICAgLy/QntCx0YDQsNCx0L7RgtC60LAg0LrQvdC+0L/QvtC6INC80LXQvdGOXHJcbmRyb3Bkb3duX2J0bnMuZm9yRWFjaChidG4gPT4ge1xyXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBsZXQgcGFyZW50ID0gYnRuLmNsb3Nlc3QoJ2xpJyk7XHJcbiAgICAgICAgc3VibWVudSA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1tZW51X19kcm9wZG93bi1zdWJtZW51Jyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoIWUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ21haW4tbWVudV9fZHJvcGRvd24tYnV0dG9uX2FjdGl2ZScpKXtcclxuICAgICAgICAgICAgY2xlYXJfZHJvcGRvd25zKCk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVIYW5kbGVyKTtcclxuICAgICAgICAgICAgaWYod2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDExMDBweCknKS5tYXRjaGVzKXtcclxuICAgICAgICAgICAgICAgIHN1Ym1lbnUuc2Nyb2xsSW50b1ZpZXcoeyBibG9jazogXCJzdGFydFwiLCBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBwYWdlX2JhY2tncm91bmQuY2xhc3NMaXN0LmFkZCgnbWFpbi1tZW51LXBhZ2UtYmFja2dyb3VuZF9hY3RpdmUnKTtcclxuICAgICAgICBpZiAoIXN1Ym1lbnUuY2xhc3NMaXN0LmNvbnRhaW5zKCdtYWluLW1lbnVfX2Ryb3Bkb3duLXN1Ym1lbnVfYWN0aXZlJykpe1xyXG4gICAgICAgICAgICBzdWJtZW51LmNsYXNzTGlzdC5hZGQoJ21haW4tbWVudV9fZHJvcGRvd24tc3VibWVudV9hY3RpdmUnKTtcclxuICAgICAgICAgICAgZS5jdXJyZW50VGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ21haW4tbWVudV9fZHJvcGRvd24tYnV0dG9uX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBoYW5kbGVSZXNpemUoc3VibWVudSk7XHJcbiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVIYW5kbGVyKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgc3VibWVudS5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLW1lbnVfX2Ryb3Bkb3duLXN1Ym1lbnVfYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGUuY3VycmVudFRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdtYWluLW1lbnVfX2Ryb3Bkb3duLWJ1dHRvbl9hY3RpdmUnKTtcclxuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUhhbmRsZXIpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1tZW51LWJhY2tncm91bmQnKS5zdHlsZS5oZWlnaHQgPSAwICsgJ3B4JztcclxuICAgICAgICAgICAgcGFnZV9iYWNrZ3JvdW5kLmNsYXNzTGlzdC5yZW1vdmUoJ21haW4tbWVudS1wYWdlLWJhY2tncm91bmRfYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSlcclxuICAgIC8vINCe0LTQvdC+0LrRgNCw0YLQvdC+0LUg0LfQsNC60YDRi9GC0LjQtSDQvNC10L3RjtGI0LXQuiDQv9GA0Lgg0YDQtdGB0LDQudC30LUg0YEg0LzQvtCx0LAg0L3QsCDQtNC10YHQutGC0L7Qv1xyXG4vLyBsZXQgY2xvc2VfbW9iaWxlX2Ryb3Bkb3ducyA9IGZ1bmN0aW9uICgpIHtcclxuLy8gICAgIGlmKHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiAxMTAwcHgpJykubWF0Y2hlcyl7XHJcbi8vICAgICAgICAgY2xlYXJfZHJvcGRvd25zKCk7XHJcbi8vICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tbWVudS1iYWNrZ3JvdW5kJykuc3R5bGUuaGVpZ2h0ID0gMCArICdweCc7XHJcbi8vICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGNsb3NlX21vYmlsZV9kcm9wZG93bnMsIGZhbHNlKTtcclxuLy8gICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgcmVzaXplSGFuZGxlcik7XHJcbi8vICAgICAgICAgcGFnZV9iYWNrZ3JvdW5kLmNsYXNzTGlzdC5yZW1vdmUoJ21haW4tbWVudS1wYWdlLWJhY2tncm91bmRfYWN0aXZlJyk7XHJcbi8vICAgICB9XHJcbi8vIH07XHJcbi8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICBjbG9zZV9tb2JpbGVfZHJvcGRvd25zLCBmYWxzZSk7XHJcblxyXG4gICAgLy8gINCe0LHRgNCw0LHQvtGC0LrQsCDQv9C+0LTQv9GD0LrRgtC+0LIg0LIg0LzQtdC90Y5cclxuXHJcblxyXG4gICAgbWFpbl9tZW51X3RhYnMuZm9yRWFjaChlID0+IHtcclxuICAgIGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbWFpbl9tZW51X3RhYnMuZm9yRWFjaChlPT57XHJcbiAgICAgICAgICAgIGUuY2xhc3NMaXN0LnJlbW92ZSgnbWFpbi1tZW51X19kcm9wZG93bi1zdWJtZW51LXRhYl9hY3RpdmUnKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYWluLW1lbnVfX2Ryb3Bkb3duLXN1Ym1lbnUtY29udGVudCcpLmZvckVhY2goZT0+e1xyXG4gICAgICAgICAgICBlLmNsYXNzTGlzdC5yZW1vdmUoJ21haW4tbWVudV9fZHJvcGRvd24tc3VibWVudS1jb250ZW50X2FjdGl2ZScpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbGV0IHRhYl9jb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlLmdldEF0dHJpYnV0ZSgnZGF0YS1jb250ZW50JykpO1xyXG4gICAgICAgIGUuY2xhc3NMaXN0LmFkZCgnbWFpbi1tZW51X19kcm9wZG93bi1zdWJtZW51LXRhYl9hY3RpdmUnKTtcclxuICAgICAgICB0YWJfY29udGVudC5jbGFzc0xpc3QuYWRkKCdtYWluLW1lbnVfX2Ryb3Bkb3duLXN1Ym1lbnUtY29udGVudF9hY3RpdmUnKTtcclxuICAgICAgICBoYW5kbGVSZXNpemUodGFiX2NvbnRlbnQuY2xvc2VzdCgnLm1haW4tbWVudV9fZHJvcGRvd24tc3VibWVudScpKTtcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKHRhYl9jb250ZW50LmNsb3Nlc3QoJy5tYWluLW1lbnVfX2Ryb3Bkb3duLXN1Ym1lbnUnKSkpO1xyXG4gICAgfSlcclxufSlcclxuXHJcbi8vINCc0L7QsdC40LvRjNC90L7QtSDQvNC10L3RjlxyXG5cclxuYnVyZ2VyX2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGJ1cmdlcl9idG4uY2xhc3NMaXN0LnRvZ2dsZSgnYnVyZ2VyLWJ0bl9hY3RpdmUnKTtcclxuICAgIGJ1cmdlcl9tZW51LmNsYXNzTGlzdC50b2dnbGUoJ2J1cmdlci1tZW51X2FjdGl2ZScpO1xyXG4gICAgaWYoIWJ1cmdlcl9tZW51LmNsYXNzTGlzdC5jb250YWlucygnYnVyZ2VyLW1lbnVfYWN0aXZlJykpe1xyXG4gICAgICAgIGNsZWFyX2Ryb3Bkb3ducygpO1xyXG4gICAgfVxyXG59KVxyXG5cclxuLy8g0J/QvtC60LDQt9Cw0YLRjCDQtdGJ0LVcclxubGV0IHRhYl9ib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYWluLW1lbnVfX2Ryb3Bkb3duLXN1Ym1lbnUtbGlzdF9tZWdhLWJveCcpO1xyXG5sZXQgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tYWluLW1lbnVfX2Ryb3Bkb3duLXN1Ym1lbnUtbW9iaWxlLWJ1dHRvbicpO1xyXG5cclxuZnVuY3Rpb24gc2hvd19tb3JlKCl7XHJcbiAgICBpZih3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogNzAwcHgpJykubWF0Y2hlcyl7XHJcblxyXG4gICAgICAgIHRhYl9ib3hlcy5mb3JFYWNoKGJveCA9PiB7XHJcbiAgICAgICAgICAgIGxldCBhbGxfbGkgPSBib3gucXVlcnlTZWxlY3RvckFsbCgnbGknKTtcclxuICAgICAgICAgICAgYWxsX2xpLmZvckVhY2goKGxpLCBsaV9pbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZihsaV9pbmRleCA+IDUgJiYgbGlfaW5kZXggIT0gYWxsX2xpLmxlbmd0aCAtIDEpe1xyXG4gICAgICAgICAgICAgICAgICAgIGxpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcblxyXG5cclxuICAgICAgICBcclxuICAgICAgICAvLyB2YXIgY291bnREID0gMTA7XHJcbiAgICAgICAgLy8gYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyAgICAgdmFyIGJveD1kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdib3gnKTtcclxuICAgICAgICAvLyAgICAgY291bnREICs9IDEwO1xyXG4gICAgICAgIC8vICAgICBpZiAoY291bnREIDw9IGJveC5sZW5ndGgpe1xyXG4gICAgICAgIC8vICAgICAgICAgZm9yKGxldCBpPTA7aTxjb3VudEQ7aSsrKXtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgYm94W2ldLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgIH1cclxuXHJcbiAgICAgICAgLy8gfSkgICBcclxuICAgIH1lbHNle1xyXG4gICAgICAgIHRhYl9ib3hlcy5mb3JFYWNoKGJveCA9PiB7XHJcbiAgICAgICAgICAgIGxldCBhbGxfbGkgPSBib3gucXVlcnlTZWxlY3RvckFsbCgnbGknKTtcclxuICAgICAgICAgICAgYWxsX2xpLmZvckVhY2goKGxpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsaS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufVxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpPT57XHJcbiAgICBzaG93X21vcmUoKTtcclxufSlcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpPT57XHJcbiAgICBzaG93X21vcmUoKTtcclxufSlcclxuXHJcbi8vINCe0LHRgNCw0LHQvtGC0LrQsCDQstC70L7QttC10L3QvdGL0YUg0LDQutC60L7RgNC00LjQvtC90L7QsiDQsiDQv9GD0L3QutGC0LUg0LzQtdC90Y5cclxubGV0IGJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWFpbi1tZW51X19kcm9wZG93bi1zdWJtZW51LW1vYmlsZS1idXR0b24nKTtcclxuYnRucy5mb3JFYWNoKChlKT0+e1xyXG4gICAgZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCk9PntcclxuICAgICAgICBsZXQgY29udGVudCA9ICBldmVudC50YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGNvbnRlbnQuc3R5bGUubWluSGVpZ2h0KXtcclxuICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ21haW4tbWVudV9fZHJvcGRvd24tc3VibWVudS1tb2JpbGUtYnV0dG9uX2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBjb250ZW50LnN0eWxlLm1pbkhlaWdodCA9IG51bGw7XHJcbiAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gMDsgIFxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBldmVudC50YXJnZXQuY2xhc3NMaXN0LmFkZCgnbWFpbi1tZW51X19kcm9wZG93bi1zdWJtZW51LW1vYmlsZS1idXR0b25fYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGNvbnRlbnQuc3R5bGUubWluSGVpZ2h0ID0gY29udGVudC5zY3JvbGxIZWlnaHQgKyBcInB4XCI7ICBcclxuICAgICAgICAgICAgY29udGVudC5zdHlsZS5oZWlnaHQgPSAndW5zZXQnOyAgXHJcbiAgICAgICAgICAgIGUuY2xhc3NMaXN0LmFkZCgnbWFpbi1tZW51X19kcm9wZG93bi1zdWJtZW51LW1vYmlsZS1idXR0b25fYWN0aXZlJyk7XHJcbiAgICAgICAgfSAgIFxyXG4gICAgfSlcclxufSkiXSwiZmlsZSI6Im1haW4tbWVudS5qcyJ9