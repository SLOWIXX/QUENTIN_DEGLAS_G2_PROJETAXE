document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const cartesContainer = document.getElementById('cartes-container');

    searchButton.addEventListener('click', function() {
        const searchTerm = searchInput.value.toLowerCase();
        const cartes = cartesContainer.getElementsByClassName('carte');

        Array.from(cartes).forEach(function(carte) {
            const carteNom = carte.querySelector('.carte-nom').textContent.toLowerCase();
            if (carteNom.includes(searchTerm)) {
                carte.style.display = 'block';
            } else {
                carte.style.display = 'none';
            }
        });
    });
});