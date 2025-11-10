// Função para carregar o mapa
function initMap() {
    const location = { lat: -23.550520, lng: -46.633308 }; // Coordenadas de São Paulo (ajuste conforme necessário)
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: location
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

// Carregar o mapa quando a página for carregada
window.onload = initMap;
