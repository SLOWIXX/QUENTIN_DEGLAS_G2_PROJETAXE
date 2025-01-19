document.getElementById("maison-select").addEventListener("change", function () {
    const sectionId = this.value; // Récupère la valeur sélectionnée (par ex. "gryffondor")
    if (sectionId) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  });
  