document.addEventListener("DOMContentLoaded", () => {
  const selectedCarte = JSON.parse(localStorage.getItem("selectedCarte"));

  if (selectedCarte) {
    document.getElementById("carte-nom").textContent = selectedCarte.nom;
    document.getElementById("carte-acteur").textContent = `Acteur : ${selectedCarte.acteur}`;
    document.getElementById("carte-maison").textContent = `Maison : ${selectedCarte.maison}`;
    document.getElementById("carte-rarete").textContent = `Rareté : ${selectedCarte.rarete}`;
    document.getElementById("carte-description").textContent = `Description : ${selectedCarte.description}`;
    
    document.getElementById("carte-image").src = selectedCarte.image || "";
  }
});










