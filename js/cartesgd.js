// Données des cartes
const cartesData = [
  {
    id: 1,
    nom: "Harry Potter",
    acteur: "Daniel Radcliffe",
    rarete: "Légendaire",
    maison: "Gryffondor",
    image: "img/perso/1.png",
    description:
      "Le survivant de l'attaque de Voldemort, Harry est un jeune sorcier destiné à vaincre le Mage Noir.",
  },
  {
    id: 2,
    nom: "Hermione Granger",
    acteur: "Emma Watson",
    rarete: "Très Rare",
    maison: "Gryffondor",
    image: "img/perso/2.png",
    description:
      "L'une des sorcières les plus brillantes de sa génération, Hermione est une grande amie de Harry et Ron.",
  },
  {
    id: 3,
    nom: "Ron Weasley",
    acteur: "Rupert Grint",
    rarete: "Très Rare",
    maison: "Gryffondor",
    image: "img/perso/3.png",
    description:
      "Le fidèle ami de Harry, Ron est connu pour son courage malgré ses nombreuses peurs et ses mésaventures.",
  },
  {
    id: 4,
    nom: "Neville Longbottom",
    acteur: "Matthew Lewis",
    rarete: "Rare",
    maison: "Gryffondor",
    image: "img/perso/4.png",
    description:
      "Un élève souvent sous-estimé, Neville prouve sa bravoure et son courage à plusieurs reprises.",
  },
  {
    id: 5,
    nom: "Ginny Weasley",
    acteur: "Bonnie Wright",
    rarete: "Très Rare",
    maison: "Gryffondor",
    image: "img/perso/5.png",
    description:
      "La plus jeune des Weasley, Ginny est une sorcière talentueuse et une figure forte dans la résistance.",
  },
  {
    id: 6,
    nom: "Fred Weasley",
    acteur: "James Phelps",
    rarete: "Commune",
    maison: "Gryffondor",
    image: "img/perso/6.png",
    description:
      "L'un des jumeaux Weasley, Fred est connu pour son humour et sa bravoure dans la lutte contre le mal.",
  },
  {
    id: 7,
    nom: "George Weasley",
    acteur: "Oliver Phelps",
    rarete: "Commune",
    maison: "Gryffondor",
    image: "img/perso/7.png",
    description:
      "Le frère jumeau de Fred, George partage son esprit d'entreprise et son courage dans les moments difficiles.",
  },
  {
    id: 8,
    nom: "Seamus Finnigan",
    acteur: "Devon Murray",
    rarete: "Commune",
    maison: "Gryffondor",
    image: "img/perso/8.png",
    description:
      "Un jeune sorcier talentueux, bien qu'un peu maladroit, qui se distingue par son habileté en sortilèges.",
  },
  {
    id: 9,
    nom: "Draco Malfoy",
    acteur: "Tom Felton",
    rarete: "Légendaire",
    maison: "Serpentard",
    image: "img/perso/9.png",
    description:
      "Fils de Lucius Malfoy, Draco est l'ennemi juré de Harry et un fervent partisan des idéaux de sa famille.",
  },
  {
    id: 10,
    nom: "Pansy Parkinson",
    acteur: "Scarlett Byrne",
    rarete: "Commune",
    maison: "Serpentard",
    image: "img/perso/10.png",
    description:
      "Une élève vaniteuse et snob, souvent alliée à Draco Malfoy, elle méprise les élèves des autres maisons.",
  },
  {
    id: 11,
    nom: "Blaise Zabini",
    acteur: "Louis Cordice",
    rarete: "Commune",
    maison: "Serpentard",
    image: "img/perso/11.png",
    description:
      "Un élève taciturne et mystérieux, Blaise est connu pour sa beauté et sa loyauté envers les Malfoy.",
  },
  {
    id: 12,
    nom: "Gregory Goyle",
    acteur: "Josh Herdman",
    rarete: "Rare",
    maison: "Serpentard",
    image: "img/perso/12.png",
    description:
      "Un acolyte de Draco Malfoy, Goyle est souvent vu aux côtés de son ami et manque de finesse intellectuelle.",
  },
  {
    id: 13,
    nom: "Vincent Crabbe",
    acteur: "Jamie Waylett",
    rarete: "Rare",
    maison: "Serpentard",
    image: "img/perso/13.png",
    description:
      "Comme Goyle, Crabbe est l'un des amis fidèles de Draco Malfoy, connu pour sa force physique et son manque d'intelligence.",
  },
  {
    id: 14,
    nom: "Cedric Diggory",
    acteur: "Robert Pattinson",
    rarete: "Légendaire",
    maison: "Poufsouffle",
    image: "img/perso/14.png",
    description:
      "Un élève courageux et loyal, Cedric est un modèle de bienveillance et un champion de la coupe de feu.",
  },
  {
    id: 15,
    nom: "Nymphadora Tonks",
    acteur: "Natalie Tena",
    rarete: "Commune",
    maison: "Poufsouffle",
    image: "img/perso/15.png",
    description:
      "Membre de l'Ordre du Phénix, Tonks est une auror à l'esprit vif et à l'apparence changeante.",
  },
  {
    id: 16,
    nom: "Justin Finch-Fletchley",
    acteur: "Leo McKinstry",
    rarete: "Commune",
    maison: "Poufsouffle",
    image: "img/perso/16.png",
    description:
      "Un élève sympathique et curieux, Justin est souvent vu comme quelqu'un de réfléchi et d'aimable.",
  },
  {
    id: 17,
    nom: "Susan Bones",
    acteur: "Susie Amy",
    rarete: "Commune",
    maison: "Poufsouffle",
    image: "img/perso/17.png",
    description:
      "Une élève calme mais déterminée, Susan fait partie de l'Ordre du Phénix pendant la guerre contre Voldemort.",
  },
  {
    id: 18,
    nom: "Cho Chang",
    acteur: "Katie Leung",
    rarete: "Très Rare",
    maison: "Serdaigle",
    image: "img/perso/18.png",
    description:
      "Une sorcière talentueuse et membre de l'équipe de Quidditch de Serdaigle, elle a eu une relation avec Harry.",
  },
  {
    id: 19,
    nom: "Luna Lovegood",
    acteur: "Evanna Lynch",
    rarete: "Très Rare",
    maison: "Serdaigle",
    image: "img/perso/19.png",
    description:
      "Luna est une élève excentrique mais sage, connue pour sa loyauté et sa perspective unique.",
  },
  {
    id: 20,
    nom: "Padma Patil",
    acteur: "Afshan Azad",
    rarete: "Rare",
    maison: "Serdaigle",
    image: "img/perso/20.png",
    description:
      "Padma est une sorcière intelligente et la sœur jumelle de Parvati Patil.",
  },
  {
    id: 21,
    nom: "Lisa Turpin",
    acteur: "Gemma Jones",
    rarete: "Commune",
    maison: "Serdaigle",
    image: "img/perso/21.png",
    description:
      "Élève brillante et calme, Lisa est respectée pour son sérieux et son travail acharné.",
  },
  {
    id: 38,
    nom: "Albus Dumbledore",
    acteur: "Michael Gambon",
    rarete: "Légendaire",
    maison: "Professeurs",
    image: "img/perso/38.png",
    description:
      "Le directeur de Poudlard, connu pour sa sagesse et son rôle crucial dans la lutte contre Voldemort.",
  },
  {
    id: 39,
    nom: "Minerva McGonagall",
    acteur: "Maggie Smith",
    rarete: "Très Rare",
    maison: "Professeurs",
    image: "img/perso/39.png",
    description:
      "Une sorcière stricte mais juste, directrice adjointe de Poudlard et professeur de métamorphose.",
  },
  {
    id: 40,
    nom: "Severus Rogue",
    acteur: "Alan Rickman",
    rarete: "Très Rare",
    maison: "Professeurs",
    image: "img/perso/40.png",
    description:
      "Le maître des potions de Poudlard, dont la loyauté et les motivations restent un mystère.",
  },
  {
    id: 41,
    nom: "Remus Lupin",
    acteur: "David Thewlis",
    rarete: "Rare",
    maison: "Professeurs",
    image: "img/perso/41.png",
    description:
      "Un ancien professeur de Défense contre les forces du mal et l'un des amis proches de James Potter.",
  },
  {
    id: 42,
    nom: "Horace Slughorn",
    acteur: "Jim Broadbent",
    rarete: "Commune",
    maison: "Professeurs",
    image: "img/perso/42.png",
    description:
      "Ancien professeur de potions, connu pour son club de Slug et ses liens avec des sorciers influents.",
  },
  {
    id: 43,
    nom: "Sybill Trelawney",
    acteur: "Emma Thompson",
    rarete: "Commune",
    maison: "Professeurs",
    image: "img/perso/43.png",
    description:
      "Professeur de divination à Poudlard, célèbre pour ses prophéties énigmatiques et son style excentrique.",
  },
  {
    id: 44,
    nom: "Filius Flitwick",
    acteur: "Warwick Davis",
    rarete: "Commune",
    maison: "Professeurs",
    image: "img/perso/44.png",
    description:
      "Professeur de sortilèges et directeur de la maison Serdaigle, un sorcier talentueux au grand cœur.",
  },
  {
    id: 22,
    nom: "Voldemort",
    acteur: "Ralph Fiennes",
    rarete: "Légendaire",
    maison: "Mangemort",
    image: "img/perso/22.png",
    description:
      "Le plus puissant Mage Noir de tous les temps, responsable de nombreuses tragédies.",
  },
  {
    id: 23,
    nom: "Bellatrix Lestrange",
    acteur: "Helena Bonham Carter",
    rarete: "Légendaire",
    maison: "Mangemort",
    image: "img/perso/23.png",
    description:
      "Une sorcière cruelle et loyale servante de Voldemort, connue pour ses actes de violence.",
  },
  {
    id: 24,
    nom: "Fenrir Greyback",
    acteur: "Dave Legeno",
    rarete: "Rare",
    maison: "Mangemort",
    image: "img/perso/24.png",
    description: "Loup-garou brutal, connu pour attaquer les enfants.",
  },
  {
    id: 25,
    nom: "Dolores Ombrage",
    acteur: "Imelda Staunton",
    rarete: "Rare",
    maison: "Mangemort",
    image: "img/perso/25.png",
    description:
      "Une sorcière autoritaire et cruelle, ancienne sous-secrétaire du ministre de la Magie.",
  },
  {
    id: 26,
    nom: "Lucius Malfoy",
    acteur: "Jason Isaacs",
    rarete: "Très Rare",
    maison: "Mangemort",
    image: "img/perso/26.png",
    description: "Le père de Draco, un Mangemort influent et manipulateur.",
  },
  {
    id: 27,
    nom: "Peter Pettigrew",
    acteur: "Timothy Spall",
    rarete: "Rare",
    maison: "Mangemort",
    image: "img/perso/27.png",
    description:
      "Un ancien ami de James Potter, qui a trahi ses amis pour Voldemort.",
  },
  {
    id: 28,
    nom: "Barty Croupton Jr.",
    acteur: "David Tennant",
    rarete: "Rare",
    maison: "Mangemort",
    image: "img/perso/28.png",
    description:
      "Mangemort dévoué ayant infiltré Poudlard sous un déguisement.",
  },
  {
    id: 29,
    nom: "Quirinus Quirrell",
    acteur: "Ian Hart",
    rarete: "Commune",
    maison: "Mangemort",
    patronus: "",
    image: "img/perso/29.png",
    description:
      "Professeur possédé par Voldemort, cherchant la Pierre Philosophale.",
  },
  {
    id: 30,
    nom: "Dobby",
    acteur: "",
    rarete: "Rare",
    maison: "Alliés",
    image: "img/perso/30.png",
    description: "Un elfe de maison libre, courageux et dévoué à Harry Potter.",
  },
  {
    id: 31,
    nom: "Alastor Maugrey",
    acteur: "Brendan Gleeson",
    rarete: "Très rare",
    maison: "Alliés",
    image: "img/perso/31.png",
    description:
      "Auror réputé et professeur de défense contre les forces du mal à Poudlard.",
  },
  {
    id: 32,
    nom: "Fleur Delacour",
    acteur: "Clémence Poésy",
    rarete: "Rare",
    maison: "Alliés",
    image: "img/perso/32.png",
    description: "Championne de Beauxbâtons et épouse de Bill Weasley.",
  },
  {
    id: 33,
    nom: "Aberforth Dumbledore",
    acteur: "Ciarán Hinds",
    rarete: "Commune",
    maison: "Alliés",
    image: "img/perso/33.png",
    description: "Frère d'Albus, propriétaire de la Tête de Sanglier.",
  },
  {
    id: 34,
    nom: "Kingsley Shacklebolt",
    acteur: "George Harris",
    rarete: "Commune",
    maison: "Alliés",
    image: "img/perso/34.png",
    description: "Auror et membre influent de l'Ordre du Phénix.",
  },
  {
    id: 35,
    nom: "Sirius Black",
    acteur: "Gary Oldman",
    rarete: "Légendaire",
    maison: "Alliés",
    image: "img/perso/35.png",
    description:
      "Le parrain de Harry Potter, connu pour son courage et son passé tragique.",
  },
  {
    id: 36,
    nom: "Rubeus Hagrid",
    acteur: "Robbie Coltrane",
    rarete: "Très Rare",
    maison: "Alliés",
    image: "img/perso/36.png",
    description:
      "Le gardien des clés et des lieux à Poudlard, connu pour son amour des créatures magiques.",
  },
  {
    id: 37,
    nom: "Arthur Weasley",
    acteur: "Mark Williams",
    rarete: "Commune",
    maison: "Alliés",
    image: "img/perso/37.png",
    description:
      "Le patriarche de la famille Weasley, fasciné par les objets moldus.",
  },
];

const cartesContainer = document.getElementById("cartes-container");

function fetchData(data) {
  if (data.length < 1 || data == null || data == undefined) {
    console.log("Aucune donnée trouvée");
    return;
  }

  const maisonsData = data.reduce((acc, item) => {
    if (!acc[item.maison]) {
      acc[item.maison] = [];
    }
    acc[item.maison].push(item);
    return acc;
  }, {});

  Object.keys(maisonsData).forEach((maison) => {
    showHouse(maison, maisonsData[maison]);
  });
}

function showHouse(maison, maisonData) {
  let maisonDiv = document.createElement("div");
  maisonDiv.classList.add("maison");

  maisonDiv.innerHTML = `<h2 id="${maison.toLowerCase()}" class="titre-maison">${maison}</h2>`;

  const maisonCartesContainer = document.createElement("div");
  maisonCartesContainer.classList.add("cartes-container");

  maisonData.forEach((carte) => {
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

    carteElement.addEventListener("click", () => {
      const carteData = JSON.stringify(carte);
      localStorage.setItem("selectedCarte", carteData);
      window.location.href = "cartes.html";
    });

    maisonCartesContainer.appendChild(carteElement);
  });

  maisonDiv.id = maison.toLowerCase();

  maisonDiv.appendChild(maisonCartesContainer);

  cartesContainer.appendChild(maisonDiv);
}


fetchData(cartesData);

document.querySelectorAll(".titre-maison").forEach((titre) => {
  titre.addEventListener("click", () => {
    const maisonSelectionnee = titre.textContent.trim();

    document.querySelectorAll(".titre-maison").forEach((autreTitre) => {
      if (autreTitre.textContent.trim() !== maisonSelectionnee) {
        autreTitre.style.display = "none";
      }
    });

    document.querySelectorAll(".cartes-container").forEach((container) => {
      if (
        container.previousElementSibling.textContent.trim() ===
        maisonSelectionnee
      ) {
        container.querySelectorAll(".cartes").forEach((carte) => {
          carte.style.display = "block";
        });
      } else {
        container.querySelectorAll(".cartes").forEach((carte) => {
          carte.style.display = "none";
        });
      }
    });
  });
});

const resetButton = document.getElementById("resetButton");
const maisonTitles = document.querySelectorAll(".titre-maison");

maisonTitles.forEach((titre) => {
  titre.addEventListener("click", function () {
    const isMaisonIsolated = titre.style.display === "none";

    if (!isMaisonIsolated) {
      resetButton.style.display = "block";
    } else {
      resetButton.style.display = "none";
    }
  });
});




// carteElement.addEventListener("click", () => {
//   localStorage.setItem("carteSelectionnee", JSON.stringify(carte));
//   window.location.href = "cartes.html";
// });


