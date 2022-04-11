const ymaps = window.ymaps;

ymaps.ready(init);

function init() {
  const map = new ymaps.Map('map', {
    center: [59.938397, 30.323101],
    zoom: 16,
  });

  const myPlacemark = new ymaps.Placemark([59.937629, 30.322718], null, {
    iconLayout: 'default#image',
    iconImageHref: '../img/sprite/icon-map-mark.svg',
    iconImageSize: [18, 22],
    iconImageOffset: [-10, -24],
  });

  map.geoObjects.add(myPlacemark);

}
