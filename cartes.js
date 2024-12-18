// Exemple de "base de données" fictive pour les cartes
const cartes = [
    { id: 1, nom: "Harry Potter", maison: "Gryffondor", acteur: "Daniel Radcliffe", rarete: "Rare", image: "harry.jpg" },
    { id: 2, nom: "Hermione Granger", maison: "Gryffondor", acteur: "Emma Watson", rarete: "Commune", image: "hermione.jpg" },
    { id: 3, nom: "Drago Malefoy", maison: "Serpentard", acteur: "Tom Felton", rarete: "Rare", image: "drago.jpg" }
];

// Récupérer l'ID depuis l'URL
const params = new URLSearchParams(window.location.search);
const idCarte = params.get("id");

// Trouver la carte correspondante
const carte = cartes.find(c => c.id == idCarte);

// Mettre à jour les éléments HTML
if (carte) {
    document.getElementById("nomCarte").textContent = carte.nom;
    document.getElementById("imageCarte").src = carte.image;
    document.getElementById("maisonCarte").textContent = carte.maison;
    document.getElementById("acteurCarte").textContent = carte.acteur;
    document.getElementById("rareteCarte").textContent = carte.rarete;
} else {
    document.body.innerHTML = "<h1>Carte non trouvée</h1>";
}
