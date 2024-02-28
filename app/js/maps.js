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
