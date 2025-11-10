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

// Menu responsivo
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("nav-menu");

    toggle.addEventListener("click", () => {
        menu.classList.toggle("active");
        toggle.classList.toggle("open");
    });
});

window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("scrolled", window.scrollY > 50);
});

