// create a map

const map = L.map('mapid').setView([-23.5346694,-46.4636076], 15)

//create and add titlelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

// create a icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68,],
    iconAnchor: [29,68],
}) 


//create and add marker
/* 
L
.marker([-23.5346694,-46.4636076], {icon})
.addTo(map) */

// create and add marker

let marker;

map.on('click', (event) => {
    const lat = event.latlng.lat
    const lng = event.latlng.lng

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lat;

    // remove icon
    marker && map.removeLayer(marker)

    //add icon layer
    marker = L.marker([lat, lng], {icon})
    .addTo(map)
})