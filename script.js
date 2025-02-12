// Initialize the map and set the starting view
var map = L.map('map').setView([-25.9, 28.2], 7); // Adjusted zoom for better view

// Load OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Custom heart-shaped marker icon
var heartIcon = L.icon({
    iconUrl: 'heart.png', // Make sure this file is in your project folder
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
});

// Array of special places with photos
var places = [
    { name: "First Date 💕", lat: -25.7849, lng: 28.2755, note: "KOI, Menlyn Maine, Pretoria - Our first date!", image: "koi.jpg" },
    { name: "Became BF & GF ❤️", lat: -25.7764, lng: 28.2208, note: "Jan Cilliers Park, Groenkloof - Where we made it official!", image: "jancilliers.jpg" },
    { name: "First Date as BF & GF 🎨", lat: -26.1405, lng: 28.0348, note: "Circa Art Gallery, Johannesburg - Our first date as a couple!", image: "circa.jpg" },
    { name: "First Kiss 💋", lat: -26.1076, lng: 28.0573, note: "Gautrain Station, Sandton - The moment everything changed!", image: "gautrain.jpg" },
    { name: "First Valentine's Day 💘", lat: -25.7694, lng: 28.2531, note: "Fireroom, Hazelwood - Our romantic Valentine's date!", image: "fireroom.jpg" },
    { name: "First Anniversary 🎉", lat: -25.7764, lng: 28.2208, note: "Jan Cilliers Park, Groenkloof - Celebrating our first year together!", image: "anniversary.jpg" },
    { name: "First Trip Together ✈️", lat: -33.9249, lng: 18.4241, note: "Cape Town, South Africa - Our first big trip!", image: "capetown.jpg" }
];

// Add markers with heart icons & photos
places.forEach(function (place) {
    var marker = L.marker([place.lat, place.lng], { icon: heartIcon }).addTo(map);
    marker.bindPopup(`
        <b>${place.name}</b><br>
        ${place.note}<br>
        <img src="${place.image}" width="150px" style="border-radius:10px; box-shadow: 2px 2px 10px rgba(0,0,0,0.2);">
    `);
});
