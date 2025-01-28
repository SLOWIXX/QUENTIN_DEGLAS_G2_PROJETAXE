document.addEventListener("DOMContentLoaded", () => {
  const selectedCarte = JSON.parse(localStorage.getItem("selectedCarte"));

  if (selectedCarte) {
    document.getElementById("carte-nom").textContent = selectedCarte.nom;
    document.getElementById("carte-acteur").textContent = `Acteur : ${selectedCarte.acteur}`;
    document.getElementById("carte-maison").textContent = `Maison : ${selectedCarte.maison}`;
    document.getElementById("carte-rarete").textContent = `Rareté : ${selectedCarte.rarete}`;
    document.getElementById("carte-description").textContent = `Description : ${selectedCarte.description}`;
    document.getElementById("carte-caracteristiques-force").textContent = `Force : ${selectedCarte.caracteristiques.force}`;
    document.getElementById("carte-caracteristiques-intelligence").textContent = `Intelligence : ${selectedCarte.caracteristiques.intelligence}`;
    document.getElementById("carte-caracteristiques-charisme").textContent = `Charisme : ${selectedCarte.caracteristiques.charisme}`;
    document.getElementById("carte-caracteristiques-magie").textContent = `Magie : ${selectedCarte.caracteristiques.magie}`;
    document.getElementById("carte-backgroundStory").textContent = `Petite info : ${selectedCarte.backgroundStory}`;
    document.getElementById("carte-image").src = selectedCarte.image || "";
  }
});










