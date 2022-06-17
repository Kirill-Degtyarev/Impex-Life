"use strict";

let myMap;
let placemark;
let center = [55.72157757581068, 37.57541606085202];
function init() {
    myMap = new ymaps.Map("ymap", {
        center: center,
        zoom: 17,
    });
    placemark = new ymaps.Placemark([55.72157757581068, 37.57541606085202], {}, {});
    myMap.geoObjects.add(placemark);

    myMap.controls.remove("geolocationControl");
    myMap.controls.remove("searchControl");
    myMap.controls.remove("trafficControl");
    myMap.controls.remove("typeSelector");
    myMap.controls.remove("fullscreenControl");
    // myMap.controls.remove("zoomControl");
    myMap.controls.remove("rulerControl");
    // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
}

ymaps.ready(init);

let officeItem = document.querySelectorAll(".office-item");

officeItem.forEach((el) => {
    el.addEventListener("click", (e) => {
        const self = e.currentTarget;
        const addres = self.querySelector(".office-item__addres");
        const officeCoordX = +addres.dataset.coordx;
        const officeCoordY = +addres.dataset.coordy;
        officeItem.forEach((el) => {
            el.classList.remove("active-office");
        });
        el.classList.add("active-office");
        setCenter(officeCoordX, officeCoordY);
    });
});

function setCenter(x, y) {
    let coords = [x, y];
    if (coords != center) {
        myMap.setCenter(coords);
    }
    placemark = new ymaps.Placemark([x, y], {}, {});
    myMap.geoObjects.add(placemark);
}
