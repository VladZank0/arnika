ymaps.ready(init);
function init(){
  let map = new ymaps.Map("map", {
    center: [56.007483,92.839807],
    zoom: 16.5
    });
    map.geoObjects.add(myplacemark = new ymaps.Placemark([56.007483,92.839807], {
      iconCaptionMaxWidth: '100',
      iconLayout: 'default#image',
      // Своё изображение иконки метки.
      iconImageHref: '../images/main-page/map_placemark.svg',
      // Размеры метки.
      iconImageSize: [30, 42],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-5, -38]
    }));
    map.controls.remove('geolocationControl'); 
    map.controls.remove('searchControl'); 
    map.controls.remove('trafficControl'); 
    map.controls.remove('typeSelector'); 
    map.controls.remove('fullscreenControl'); 
    map.controls.remove('zoomControl'); 
    map.controls.remove('rulerControl'); 
    map.behaviors.disable(['scrollZoom']);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYXBzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbInltYXBzLnJlYWR5KGluaXQpO1xyXG5mdW5jdGlvbiBpbml0KCl7XHJcbiAgbGV0IG1hcCA9IG5ldyB5bWFwcy5NYXAoXCJtYXBcIiwge1xyXG4gICAgY2VudGVyOiBbNTYuMDA3NDgzLDkyLjgzOTgwN10sXHJcbiAgICB6b29tOiAxNi41XHJcbiAgICB9KTtcclxuICAgIG1hcC5nZW9PYmplY3RzLmFkZChteXBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoWzU2LjAwNzQ4Myw5Mi44Mzk4MDddLCB7XHJcbiAgICAgIGljb25DYXB0aW9uTWF4V2lkdGg6ICcxMDAnLFxyXG4gICAgICBpY29uTGF5b3V0OiAnZGVmYXVsdCNpbWFnZScsXHJcbiAgICAgIC8vINCh0LLQvtGRINC40LfQvtCx0YDQsNC20LXQvdC40LUg0LjQutC+0L3QutC4INC80LXRgtC60LguXHJcbiAgICAgIGljb25JbWFnZUhyZWY6ICcuLi9pbWFnZXMvbWFpbi1wYWdlL21hcF9wbGFjZW1hcmsuc3ZnJyxcclxuICAgICAgLy8g0KDQsNC30LzQtdGA0Ysg0LzQtdGC0LrQuC5cclxuICAgICAgaWNvbkltYWdlU2l6ZTogWzMwLCA0Ml0sXHJcbiAgICAgIC8vINCh0LzQtdGJ0LXQvdC40LUg0LvQtdCy0L7Qs9C+INCy0LXRgNGF0L3QtdCz0L4g0YPQs9C70LAg0LjQutC+0L3QutC4INC+0YLQvdC+0YHQuNGC0LXQu9GM0L3QvlxyXG4gICAgICAvLyDQtdGRIFwi0L3QvtC20LrQuFwiICjRgtC+0YfQutC4INC/0YDQuNCy0Y/Qt9C60LgpLlxyXG4gICAgICBpY29uSW1hZ2VPZmZzZXQ6IFstNSwgLTM4XVxyXG4gICAgfSkpO1xyXG4gICAgbWFwLmNvbnRyb2xzLnJlbW92ZSgnZ2VvbG9jYXRpb25Db250cm9sJyk7IFxyXG4gICAgbWFwLmNvbnRyb2xzLnJlbW92ZSgnc2VhcmNoQ29udHJvbCcpOyBcclxuICAgIG1hcC5jb250cm9scy5yZW1vdmUoJ3RyYWZmaWNDb250cm9sJyk7IFxyXG4gICAgbWFwLmNvbnRyb2xzLnJlbW92ZSgndHlwZVNlbGVjdG9yJyk7IFxyXG4gICAgbWFwLmNvbnRyb2xzLnJlbW92ZSgnZnVsbHNjcmVlbkNvbnRyb2wnKTsgXHJcbiAgICBtYXAuY29udHJvbHMucmVtb3ZlKCd6b29tQ29udHJvbCcpOyBcclxuICAgIG1hcC5jb250cm9scy5yZW1vdmUoJ3J1bGVyQ29udHJvbCcpOyBcclxuICAgIG1hcC5iZWhhdmlvcnMuZGlzYWJsZShbJ3Njcm9sbFpvb20nXSk7XHJcbn1cclxuIl0sImZpbGUiOiJtYXBzLmpzIn0=
