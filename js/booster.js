const boosterBouton = document.getElementById("booster-btn");
const boosterStatus = document.getElementById("booster-status");
const boosterCartesContainer = document.getElementById("booster-cartesContainer");

function peutOuvrirBooster() {
    const derniereOuverture = localStorage.getItem("derniereOuverture");
    if (!derniereOuverture) {
        return true;
    }
    const maintenant = new Date().getTime();
    const difference = maintenant - parseInt(derniereOuverture, 10);
    const heures24 = 24 * 60 * 60 * 1000; 
    return difference >= heures24;
}




function enregistrerOuverture() {
    localStorage.setItem("derniereOuverture", new Date().getTime());
    boosterStatus.innerText = "Prochain booster disponible dans 24h.";
}

function tirerCartes() {
    let cartesTirees = [];
    let cartesIndicesTirees = new Set(); 

    let currentUser = JSON.parse(localStorage.getItem("currentUser")) || {};
    let cartesDebloquees = currentUser.cartes || [];

    while (cartesTirees.length < 5) {
        let carte = tirerCarteAleatoire(cartesDebloquees); 
        
        if (!cartesIndicesTirees.has(carte.id)) {
            cartesIndicesTirees.add(carte.id);
            cartesTirees.push(carte);
        }
    }

    return cartesTirees;
}


function tirerCarteAleatoire(cartesDebloquees) {
    let cartesFiltrees = cartesData.filter(carte => !cartesDebloquees.includes(carte.id));
    return cartesFiltrees[Math.floor(Math.random() * cartesFiltrees.length)];
}


function ajouterCartesALaCollection(cartesTirees) {
    let currentUser = JSON.parse(localStorage.getItem("currentUser")) || {};
    if (!currentUser.email) {
        console.error("Utilisateur non connecté.");
        return;
    }

    let userEmail = currentUser.email;
    let cartesId = cartesTirees.map(c => c.id);

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let user = users.find(u => u.email === userEmail);

    if (!user) {
        console.error("Utilisateur non trouvé.");
        return;
    }

    user.cartes = user.cartes ? user.cartes.concat(cartesId) : cartesId;

    currentUser.cartes = user.cartes;
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    localStorage.setItem("users", JSON.stringify(users));
}



function afficherCartes(cartesTirees) {
    boosterCartesContainer.innerHTML = "";
    cartesTirees.forEach(carte => {
        let carteElement = document.createElement("div");
        carteElement.classList.add("booster-carte");

        const imageSrc = carte.image ? carte.image : "./img/FOND.avif";
        carteElement.innerHTML = `
            <img src="${imageSrc}" alt="Carte de ${carte.nom}" class="image" />
            <div class="contenu-cartes">
                <h2 class="nom">${carte.nom}</h2>
                <ul class="info">
                    <li>Acteur : ${carte.acteur}</li>
                    <li>Maison : ${carte.maison}</li>
                    <li>Rareté : ${carte.rarete}</li> <!-- Rareté affichée ici -->
                </ul>
                <div class="favoris">
                    <button class="booster-favoris-button" title="Ajouter aux favoris">❤️</button>
                </div>
            </div>
        `;
        boosterCartesContainer.appendChild(carteElement);
    });
}


boosterBouton.addEventListener("click", function () {
    if (peutOuvrirBooster()) {
        let cartesGagnees = tirerCartes(); 
        ajouterCartesALaCollection(cartesGagnees); 
        enregistrerOuverture(); 
        afficherCartes(cartesGagnees); 
    } else {
        boosterStatus.innerText = "Vous devez attendre 24h avant d'ouvrir un autre booster.";
    }
});

if (!peutOuvrirBooster()) {
    boosterStatus.innerText = "Prochain booster disponible dans 24h.";
} else {
    boosterStatus.innerText = "Un booster est disponible !";
}
