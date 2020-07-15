(function() {
   let yaMap;

  const init = () => {
    yaMap = new ymaps.Map("map", {
      center: [55.753381, 37.604622],
      zoom: 14,
      controls: [],
    });

    const coords = [
      [55.758767, 37.582315],
      [55.740063, 37.583342],
      [55.750301, 37.610322],
      [55.755698, 37.619039]
    ];

    const yaCollection = new ymaps.GeoObjectCollection({}, {
      draggable: false,
      iconLayout: 'default#image',
      iconImageHref: './img/icons/marker.svg',
      iconImageSize: [46, 57],
      iconImageOffset: [-35, -52]
    });

    coords.forEach(coords => {
      yaCollection.add(new ymaps.Placemark(coords));
    });

    yaMap.geoObjects.add(yaCollection);

    yaMap.behaviors.disable('scrollZoom');
  };

  ymaps.ready(init);
})()