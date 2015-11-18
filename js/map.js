ymaps.ready(mapInit);

var map;
function mapInit() {
    map = new ymaps.Map ("map", {
        center: [55.31868300979306, 42.170031664062506],
        zoom: 12
    });

    map.events.add('click', function (e) {
       var coords = e.get('coords');

        document.getElementById('lat').innerText = coords[0];
        document.getElementById('long').innerText = coords[1];

        myPlacemark = new ymaps.Placemark(coords, {
            balloonContent: coordsAsString(coords)
        });

        map.geoObjects.add(myPlacemark);
    });

    map.events.add('boundschange', function () {
        fillMapParams();
    });

    function fillMapParams() {
        var zoom = map.getZoom();
        var bounds = map.getBounds();
        var center = map.getCenter();

        document.getElementById('zoom').innerText = zoom;
        document.getElementById('center').innerText = coordsAsString(center);
        document.getElementById('bound_top').innerText = coordsAsString(bounds[0]);
        document.getElementById('bound_bottom').innerText = coordsAsString(bounds[1]);
    }

    fillMapParams();

    function coordsAsString(coords) {
        return coords[0] + ',' + coords[1];
    }
}