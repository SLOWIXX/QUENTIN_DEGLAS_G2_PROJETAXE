document.getElementById("maison-select").addEventListener("change", function () {
    const sectionId = this.value; 
    if (sectionId) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
  });
  