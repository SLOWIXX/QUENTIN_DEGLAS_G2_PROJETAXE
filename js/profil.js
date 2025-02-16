document.addEventListener('DOMContentLoaded', function() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (currentUser) {
        document.getElementById('username-profil').textContent = currentUser.pseudo;
        document.getElementById('email-profil').textContent = currentUser.email;
    } else {
        console.log('Aucun utilisateur connecté.');
    }

    afficherCartesPossedees();
});

function afficherCartesPossedees() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser || !currentUser.cartes) {
        console.log("Aucune carte possédée");
        return;
    }

    const cartesPossedees = currentUser.cartes;
    const cartesFavoris = cartesData.filter(carte => currentUser.favoris.includes(carte.id));
    const cartesAffichees = cartesData.filter(carte => cartesPossedees.includes(carte.id));

    const favorisContainer = document.getElementById("cartes-favoris-container");
    const debloqueesContainer = document.getElementById("cartes-debloquees-container");

    favorisContainer.innerHTML = ""; 
    debloqueesContainer.innerHTML = ""; 

    cartesFavoris.forEach(carte => {
        const carteElement = document.createElement("div");
        carteElement.classList.add("cartes");

        const imageSrc = carte.image ? carte.image : "./img/FOND.avif";
        carteElement.innerHTML = `
            <img src="${imageSrc}" alt="Carte de ${carte.nom}" class="image" />
            <div class="contenu-cartes">
                <h2 class="nom">${carte.nom}</h2>
                <ul class="info">
                    <li>Acteur : ${carte.acteur}</li>
                    <li>Maison : ${carte.maison}</li>
                    <li>Rareté : ${carte.rarete}</li>
                </ul>
                <div class="favoris">
                    <button class="favoris-button" title="Ajouter aux favoris">❤️</button>
                </div>
            </div>
        `;

        carteElement.querySelector(".favoris-button").addEventListener("click", (event) => {
            event.stopPropagation(); 
            const currentUser = JSON.parse(localStorage.getItem("currentUser"));
            if (currentUser) {
                if (!currentUser.favoris) {
                    currentUser.favoris = [];
                }
                if (!currentUser.favoris.includes(carte.id)) {
                    currentUser.favoris.push(carte.id);
                } else {
                    currentUser.favoris = currentUser.favoris.filter(id => id !== carte.id);
                }
                localStorage.setItem("currentUser", JSON.stringify(currentUser));
                afficherCartesPossedees(); 
            } else {
                console.log("Aucun utilisateur connecté.");
            }
        });

        carteElement.addEventListener("click", () => {
            const carteData = JSON.stringify(carte);
            localStorage.setItem("selectedCarte", carteData);
            window.location.href = "cartes.html";
        });

        favorisContainer.appendChild(carteElement);
    });

    // Afficher les cartes débloquées
    cartesAffichees.forEach(carte => {
        const carteElement = document.createElement("div");
        carteElement.classList.add("cartes");

        const imageSrc = carte.image ? carte.image : "./img/FOND.avif";
        carteElement.innerHTML = `
            <img src="${imageSrc}" alt="Carte de ${carte.nom}" class="image" />
            <div class="contenu-cartes">
                <h2 class="nom">${carte.nom}</h2>
                <ul class="info">
                    <li>Acteur : ${carte.acteur}</li>
                    <li>Maison : ${carte.maison}</li>
                    <li>Rareté : ${carte.rarete}</li>
                </ul>
                <div class="favoris">
                    <button class="favoris-button" title="Ajouter aux favoris">❤️</button>
                </div>
            </div>
        `;

        carteElement.querySelector(".favoris-button").addEventListener("click", (event) => {
            event.stopPropagation(); 
            const currentUser = JSON.parse(localStorage.getItem("currentUser"));
            if (currentUser) {
                if (!currentUser.favoris) {
                    currentUser.favoris = [];
                }
                if (!currentUser.favoris.includes(carte.id)) {
                    currentUser.favoris.push(carte.id);
                } else {
                    currentUser.favoris = currentUser.favoris.filter(id => id !== carte.id);
                }
                localStorage.setItem("currentUser", JSON.stringify(currentUser));
                afficherCartesPossedees();
            } else {
                console.log("Aucun utilisateur connecté.");
            }
        });

        carteElement.addEventListener("click", () => {
            const carteData = JSON.stringify(carte);
            localStorage.setItem("selectedCarte", carteData);
            window.location.href = "cartes.html";
        });

        debloqueesContainer.appendChild(carteElement);
    });
}
