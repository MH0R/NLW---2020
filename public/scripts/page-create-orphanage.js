// create a map

const map = L.map('mapid').setView([-23.5346694,-46.4636076], 15)

//create and add titlelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

// create a icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
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
    document.querySelector('[name=lng]').value = lng;

    // remove icon
    marker && map.removeLayer(marker)

    //add icon layer
    marker = L.marker([lat, lng], {icon})
    .addTo(map)
})

// add photo field

function addPhotoField() {
    // pegar o container de fotos
    const container = document.querySelector('#images')
    // pegar o contaienr para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    // clonar ultima img adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true)
   
    // verificar se o campo esta vazio
    const input = newFieldContainer.children[0]
    
    if(input.value == '') {
       return alert("Por favor, insira um link antes de prosseguir.")
    }
    // clear field
    newFieldContainer.children[0].value=""
   
    // adicionar o clone ao container de img.
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length <= 1) {
        // limpar o valor do campo
        span.parentNode.children[0].value = ""
        return 
    }

    // deletar o campo
    span.parentNode.remove()
}


// Seleção do sim e não
function toggleSelect(event) {
    // retirar a classe active dos botões
    document.querySelectorAll('.button-select button')
    .forEach(function(button) {
        button.classList.remove('active')
    })
    // colocar a class .active no botão
    const button = event.currentTarget
    button.classList.add('active')
    
    //atualizar o input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')
    input.value = button.dataset.value
}

