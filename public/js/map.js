const lat = -23.9510924
const lng = -46.3310366

const options = {
    dragging: false,
    touchZoom:true,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: true
}

const map = L.map('mapid', options).setView([lat,lng], 16);
const marker = L.marker([lat, lng]).addTo(map);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

marker.bindPopup('<b>Hospital São Lucas</b><br><a class="target" href="https://www.google.com/maps/dir//Hospital+S%C3%A3o+Lucas+-+Av.+Ana+Costa,+168+-+Vila+Matias,+Santos+-+SP,+11060-905/@-23.9511608,-46.3335123,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x94ce03722aa349b9:0xec464790287a2267!2m2!1d-46.3313236!2d-23.9511608" target="_blank">Av. Ana Costa 168</a>').openPopup();

