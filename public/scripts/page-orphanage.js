// create a map
const options = {
    draggin: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}
const map = L.map('mapid', options).setView([-23.5346694, -46.4636076], 15)

//create and add titlelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

// create a icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68,],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})


//create and add marker

L
    .marker([-23.5346694, -46.4636076], { icon })
    .addTo(map)

/* image galery */

function selectImage(event) {
    const button = event.currentTarget

    //remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach((button) => { button.classList.remove("active") })
    //selecionar a imagem clicada
    const image = button.children[0]
    imageContainer = document.querySelector(".orphanage-details > img")

    //Atualizar o container de imagem
    imageContainer.src = image.src
    //Adicionar a classe .active para este botao
    button.classList.add('active')

}