function initMap() {
    const location = { lat: -25.440936, lng: -49.233451 }; // Coordenadas da escola
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: location,
    });
    new google.maps.Marker({
        position: location,
        map: map,
        title: "Colégio Estadual Julio Mesquita",
    });
}

window.onload = initMap;
