const cartesData = [
  {
    id: 1,
    nom: "Harry Potter",
    acteur: "Daniel Radcliffe",
    rarete: "Légendaire",
    maison: "Gryffondor",
    image: "img/perso/1.png",
    imagemaison: "img/maison/gryffondor.png",
    description:
      "Le survivant de l'attaque de Voldemort, Harry est un jeune sorcier destiné à vaincre le Mage Noir.",
    caracteristiques: {
      force: 85,
      intelligence: 90,
     charisme: 95,
      magie: 95
    },
    backgroundStory: "Né de Lily et James Potter, Harry a grandi chez les Dursley avant de découvrir son héritage magique. Choisi comme 'l'Élu', il a combattu Voldemort et ses forces obscures tout en affrontant ses propres doutes et responsabilités."
  },

  {
    id: 2,
    nom: "Hermione Granger",
    acteur: "Emma Watson",
    rarete: "Très Rare",
    maison: "Gryffondor",
    image: "img/perso/2.png",
    imagemaison: "img/maison/gryffondor.png",
    description:
      "L'une des sorcières les plus brillantes de sa génération, Hermione est une grande amie de Harry et Ron.",
      "caracteristiques": {
      force: 70,
      intelligence: 100,
      charisme: 80,
      magie: 90
    },
    backgroundStory: "Fille de deux dentistes moldus, Hermione a découvert le monde magique avec fascination. Elle s'est rapidement distinguée par son esprit vif et sa détermination à utiliser la magie pour aider ses amis et défendre les opprimés."
  },
  {
    id: 3,
    nom: "Ron Weasley",
    acteur: "Rupert Grint",
    rarete: "Très Rare",
    maison: "Gryffondor",
    image: "img/perso/3.png",
    imagemaison: "img/maison/gryffondor.png",
    description:
      "Le fidèle ami de Harry, Ron est connu pour son courage malgré ses nombreuses peurs et ses mésaventures.",
      caracteristiques: {
        force: 75,
        intelligence: 80,
        charisme: 85,
        magie: 80
      },
      backgroundStory: "Ron est issu d'une grande famille de sorciers. Bien qu'il vive souvent dans l'ombre de ses frères et sœurs, il prouve constamment son courage et son importance en tant que membre du trio."
    },
  
  {
    id: 4,
    nom: "Neville Longbottom",
    acteur: "Matthew Lewis",
    rarete: "Rare",
    maison: "Gryffondor",
    image: "img/perso/4.png",
    imagemaison: "img/maison/gryffondor.png",
    description:
      "Un élève souvent sous-estimé, Neville prouve sa bravoure et son courage à plusieurs reprises.",
      caracteristiques: {
        force: 75,
        intelligence: 80,
        charisme: 70,
        magie: 85
      },
      backgroundStory: "Né de parents Aurors torturés par les Mangemorts, Neville a grandi avec sa grand-mère. Sa transformation en un leader audacieux lors de la bataille de Poudlard symbolise son véritable potentiel."
    },
  {
    id: 5,
    nom: "Ginny Weasley",
    acteur: "Bonnie Wright",
    rarete: "Très Rare",
    maison: "Gryffondor",
    image: "img/perso/5.png",
    imagemaison: "img/maison/gryffondor.png",
    description:
      "La plus jeune des Weasley, Ginny est une sorcière talentueuse et une figure forte dans la résistance.",
      caracteristiques: {
        force: 80,
        intelligence: 85,
        charisme: 85,  
        magie: 90
      },
      backgroundStory: "Ginny a commencé sa vie à Poudlard marquée par sa possession par le journal de Voldemort. Cependant, elle s'est affirmée comme une sorcière redoutable, épousant finalement Harry Potter."
  },
  {
    id: 6,
    nom: "Fred Weasley",
    acteur: "James Phelps",
    rarete: "Commune",
    maison: "Gryffondor",
    image: "img/perso/6.png",
    imagemaison: "img/maison/gryffondor.png",
    description:
      "L'un des jumeaux Weasley, Fred est connu pour son humour et sa bravoure dans la lutte contre le mal.",
      caracteristiques: {
        force: 75,
        intelligence: 85,
        charisme: 90,
        magie: 80
      },
      backgroundStory: "Fred Weasley, avec son frère George, a fondé Weasley's Wizard Wheezes, une boutique de farces et attrapes. Son humour cachait un grand courage et un profond attachement à sa famille et ses amis, particulièrement dans la bataille contre Voldemort",
  },
  {
    id: 7,
    nom: "George Weasley",
    acteur: "Oliver Phelps",
    rarete: "Commune",
    maison: "Gryffondor",
    image: "img/perso/7.png",
    imagemaison: "img/maison/gryffondor.png",
    description:
      "Le frère jumeau de Fred, George partage son esprit d'entreprise et son courage dans les moments difficiles.",
      caracteristiques: {
        force: 75,
        intelligence: 85,
        charisme: 90,
        magie: 80
      },
      backgroundStory: "George Weasley est l'autre moitié du duo de choc des jumeaux Weasley. Malgré la perte tragique de Fred, George a poursuivi leur rêve commun et a montré une résilience remarquable face aux épreuves",
  },
  {
    id: 8,
    nom: "Seamus Finnigan",
    acteur: "Devon Murray",
    rarete: "Commune",
    maison: "Gryffondor",
    image: "img/perso/8.png",
    imagemaison: "img/maison/gryffondor.png",
    description:
      "Un jeune sorcier talentueux, bien qu'un peu maladroit, qui se distingue par son habileté en sortilèges.",
      caracteristiques: {
        force: 70,
        intelligence: 75,
        charisme: 80,
        magie: 85
      },
      backgroundStory: "Seamus est connu pour son enthousiasme parfois explosif, au sens propre comme au figuré. Malgré ses maladresses, il a prouvé sa valeur en tant que membre loyal de l'Armée de Dumbledore et lors de la bataille de Poudlard",
  },
   {
    id: 9,
    nom: "Draco Malfoy",
    acteur: "Tom Felton",
    rarete: "Légendaire",
    maison: "Serpentard",
    image: "img/perso/9.png",
    imagemaison: "img/maison/serpentard.png",
    description:
      "Fils de Lucius Malfoy, Draco est l'ennemi juré de Harry et un fervent partisan des idéaux de sa famille.",
      caracteristiques: {
        force: 75,
        intelligence: 85,
        charisme: 80,
        magie: 90
      },
      backgroundStory: "Né dans une famille de Sang-Pur, Draco a grandi avec des valeurs élitistes inculquées par ses parents. Bien qu'il montre souvent un comportement arrogant, il est tourmenté par les attentes placées sur lui et les choix qu'il doit faire."
  },
  {
    id: 10,
    nom: "Pansy Parkinson",
    acteur: "Scarlett Byrne",
    rarete: "Commune",
    maison: "Serpentard",
    image: "img/perso/10.png",
    imagemaison: "img/maison/serpentard.png",
    description: "Une élève vaniteuse et snob, souvent alliée à Draco Malfoy, elle méprise les élèves des autres maisons.",
    caracteristiques: {
      force: 60,
      intelligence: 70,
      charisme: 85,
      magie: 65
    },
    backgroundStory: "Pansy Parkinson a grandi dans une famille de Sang-Pur et a été élevée dans l'idée que la pureté du sang et les traditions de la famille Malfoy sont primordiales. Bien qu'elle semble très sûre d'elle, elle cache souvent ses insécurités derrière une façade de dédain. Elle cherche toujours à plaire aux figures d'autorité et à se maintenir dans les bonnes grâces des Malfoy."
  },  
  {
    id: 11,
    nom: "Blaise Zabini",
    acteur: "Louis Cordice",
    rarete: "Commune",
    maison: "Serpentard",
    image: "img/perso/11.png",
    imagemaison: "img/maison/serpentard.png",
    description:
      "Un élève taciturne et mystérieux, Blaise est connu pour sa beauté et sa loyauté envers les Malfoy.",
      caracteristiques: {
        force: 70,
        intelligence: 80,
        charisme: 85,
        magie: 75
      },
      backgroundStory: "Issu d'une famille noble, Blaise préfère rester en retrait mais agit souvent comme une voix de raison parmi ses camarades. Son individualisme cache une loyauté profonde envers ses proches."
  },
  {
    id: 12,
    nom: "Gregory Goyle",
    acteur: "Josh Herdman",
    rarete: "Rare",
    maison: "Serpentard",
    image: "img/perso/12.png",
    imagemaison: "img/maison/serpentard.png",
    description:
      "Un acolyte de Draco Malfoy, Goyle est souvent vu aux côtés de son ami et manque de finesse intellectuelle.",
    caracteristiques: {
      force: 85,
      intelligence: 60,
      charisme: 65,
      magie: 70
    },
    backgroundStory: "Gregory est loyal envers Draco et souvent utilisé comme muscle dans leurs escapades. Bien qu'il soit rarement le cerveau de l'opération, sa force brute en fait un allié redoutable."
  },
  {
    id: 13,
    nom: "Vincent Crabbe",
    acteur: "Jamie Waylett",
    rarete: "Rare",
    maison: "Serpentard",
    image: "img/perso/13.png",
    imagemaison: "img/maison/serpentard.png",
    description:
      "Comme Goyle, Crabbe est l'un des amis fidèles de Draco Malfoy, connu pour sa force physique et son manque d'intelligence.",
      caracteristiques: {
        force: 90,
        intelligence: 55,
        charisme: 60,
        magie: 75
      },
      backgroundStory: "Crabbe est connu pour ses tendances destructrices, utilisant souvent des sorts de feu puissants. Sa loyauté envers Draco est motivée autant par la peur que par l'amitié."
  },
  {
    id: 14,
    nom: "Cedric Diggory",
    acteur: "Robert Pattinson",
    rarete: "Légendaire",
    maison: "Poufsouffle",
    image: "img/perso/14.png",
    imagemaison: "img/maison/poufsouffle.png",
    description:
      "Un élève courageux et loyal, Cedric est un modèle de bienveillance et un champion de la coupe de feu.",
    caracteristiques: {
      force: 85,
      intelligence: 90,
      charisme: 95,
      magie: 80
    },
    backgroundStory: "Cedric était un sorcier modèle, respecté à Poudlard et tragiquement tué lors du tournoi des Trois Sorciers."
  },
  {
    id: 15,
    nom: "Nymphadora Tonks",
    acteur: "Natalie Tena",
    rarete: "Commune",
    maison: "Poufsouffle",
    image: "img/perso/15.png",
    imagemaison: "img/maison/poufsouffle.png",
    description:
      "Membre de l'Ordre du Phénix, Tonks est une auror à l'esprit vif et à l'apparence changeante.",
    caracteristiques: {
      force: 75,
      intelligence: 85,
      charisme: 80,
      magie: 90
    },
    backgroundStory: "Fille d'Andromeda Black, Tonks était une auror talentueuse qui s'est battue vaillamment contre les Mangemorts aux côtés de Remus Lupin, son mari."
  },
  {
    id: 16,
    nom: "Justin Finch-Fletchley",
    acteur: "Leo McKinstry",
    rarete: "Commune",
    maison: "Poufsouffle",
    image: "img/perso/16.png",
    imagemaison: "img/maison/poufsouffle.png",
    description:
      "Un élève sympathique et curieux, Justin est souvent vu comme quelqu'un de réfléchi et d'aimable.",
    caracteristiques: {
      force: 65,
      intelligence: 75,
      charisme: 70,
      magie: 70
    },
    backgroundStory: "Né dans une famille moldue, Justin a rejoint Poufsouffle où il a démontré son altruisme et sa loyauté envers ses amis."
  },
  {
    id: 17,
    nom: "Susan Bones",
    acteur: "Susie Amy",
    rarete: "Commune",
    maison: "Poufsouffle",
    image: "img/perso/17.png",
    imagemaison: "img/maison/poufsouffle.png",
    description:
      "Une élève calme mais déterminée, Susan fait partie de l'Ordre du Phénix pendant la guerre contre Voldemort.",
    caracteristiques: {
      force: 70,
      intelligence: 75,
      charisme: 70,
      magie: 80
    },
    backgroundStory: "Membre d'une famille marquée par les attaques des Mangemorts, Susan est connue pour sa résilience et son esprit combatif."
  },
  {
    id: 18,
    nom: "Cho Chang",
    acteur: "Katie Leung",
    rarete: "Très Rare",
    maison: "Serdaigle",
    image: "img/perso/18.png",
    imagemaison: "img/maison/serdaigle.png",
    description:
      "Une sorcière talentueuse et membre de l'équipe de Quidditch de Serdaigle, elle a eu une relation avec Harry.",
    caracteristiques: {
      force: 70,
      intelligence: 85,
      charisme: 90,
      magie: 75
    },
    backgroundStory: "Cho a perdu son premier amour, Cedric, lors du tournoi des Trois Sorciers. Malgré cela, elle a poursuivi ses études avec dignité et détermination."
  },
  {
    id: 19,
    nom: "Luna Lovegood",
    acteur: "Evanna Lynch",
    rarete: "Très Rare",
    maison: "Serdaigle",
    image: "img/perso/19.png",
    imagemaison: "img/maison/serdaigle.png",
    description:
      "Luna est une élève excentrique mais sage, connue pour sa loyauté et sa perspective unique.",
      caracteristiques: {
        force: 65,
        intelligence: 85,
        charisme: 90,
        magie: 80
      },
      backgroundStory: "Fille d'un rédacteur du Chicaneur, Luna a perdu sa mère jeune et a souvent été moquée par ses pairs. Cependant, elle reste fidèle à elle-même et devient une alliée précieuse dans la lutte contre Voldemort."
  },
  {
    id: 20,
    nom: "Padma Patil",
    acteur: "Afshan Azad",
    rarete: "Rare",
    maison: "Serdaigle",
    image: "img/perso/20.png",
    imagemaison: "img/maison/serdaigle.png",
    description: "Padma est une sorcière intelligente et la sœur jumelle de Parvati Patil.",
    caracteristiques: {
      force: 60,
      intelligence: 90,
      charisme: 80,
      magie: 85
    },
    backgroundStory: "Padma Patil, une élève de Serdaigle, est connue pour son intelligence et sa sagesse. Bien qu'elle partage une relation proche avec sa sœur jumelle Parvati, leurs personnalités sont assez différentes. Padma est plus sérieuse et réfléchie, consacrant beaucoup de son temps aux études et à la magie avancée. Elle a toujours voulu prouver qu'elle est capable par elle-même, sans se reposer sur la popularité de sa sœur."
  },
  {
    id: 21,
    nom: "Lisa Turpin",
    acteur: "Gemma Jones",
    rarete: "Commune",
    maison: "Serdaigle",
    image: "img/perso/21.png",
    imagemaison: "img/maison/serdaigle.png",
    description: "Élève brillante et calme, Lisa est respectée pour son sérieux et son travail acharné.",
    caracteristiques: {
      force: 65,
      intelligence: 85,
      charisme: 75,
      magie: 80
    },
    backgroundStory: "Lisa Turpin est une élève sérieuse et dévouée, souvent vue en train de réviser ou de travailler sur des projets magiques complexes. Bien qu'elle soit souvent discrète, sa compétence en magie et son sens du détail lui valent le respect de ses camarades. Elle a grandi dans une famille de sorciers, où l'accent a toujours été mis sur l'éducation et le travail acharné."
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
      caracteristiques: {
      force: 80,
      intelligence: 100,
      charisme: 90,
      magie: 100
    },
    backgroundStory: "Dumbledore est célèbre pour ses exploits magiques et sa lutte contre le Mage Noir Grindelwald. Il porte cependant un lourd passé personnel, marqué par la perte de sa sœur Ariana et des erreurs commises dans sa jeunesse."
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
      caracteristiques: {
      force: 80,
      intelligence: 95,
      charisme: 70,
      magie: 95
    },
    backgroundStory: "Ancien Mangemort, Rogue est révélé comme un agent double travaillant pour Dumbledore. Sa vie a été marquée par un amour profond pour Lily Potter, qui a motivé son sacrifice et sa rédemption."
  },
  {
    id: 41,
    nom: "Remus Lupin",
    acteur: "David Thewlis",
    rarete: "Rare",
    maison: "Professeurs",
    image: "img/perso/41.png",
    description: "Un ancien professeur de Défense contre les forces du mal et l'un des amis proches de James Potter.",
    caracteristiques: {
      force: 70,
      intelligence: 90,
      charisme: 85,
      magie: 80
    },
    backgroundStory: "Remus Lupin, un homme brillant et compatissant, a été professeur de Défense contre les forces du mal à Poudlard. Ancien membre de l'Ordre du Phénix et ami fidèle de James Potter, il cache un lourd secret : il est un loup-garou. Malgré sa condition, Lupin se consacre entièrement à l'enseignement et à la protection de ses élèves, prouvant que la magie ne réside pas seulement dans le pouvoir, mais aussi dans la maîtrise de soi."
  },
  {
    id: 42,
    nom: "Horace Slughorn",
    acteur: "Jim Broadbent",
    rarete: "Commune",
    maison: "Professeurs",
    image: "img/perso/42.png",
    description: "Ancien professeur de potions, connu pour son club de Slug et ses liens avec des sorciers influents.",
    caracteristiques: {
      force: 60,
      intelligence: 85,
      charisme: 90,
      magie: 80
    },
    backgroundStory: "Horace Slughorn, un homme charismatique et malin, a été professeur de potions à Poudlard avant sa retraite. Son club de Slug, qui réunit les étudiants les plus prometteurs, lui permet de nouer des liens avec des sorciers influents. Bien que Slughorn soit un homme de contact, il reste un excellent professeur qui connaît l'importance du talent et de la reconnaissance dans le monde magique."
  },
  {
    id: 43,
    nom: "Sybill Trelawney",
    acteur: "Emma Thompson",
    rarete: "Commune",
    maison: "Professeurs",
    image: "img/perso/43.png",
    description: "Professeur de divination à Poudlard, célèbre pour ses prophéties énigmatiques et son style excentrique.",
    caracteristiques: {
      force: 50,
      intelligence: 70,
      charisme: 80,
      magie: 75
    },
    backgroundStory: "Sybill Trelawney est une professeure excentrique, réputée pour ses prédictions mystérieuses et souvent inexactes. Bien que ses compétences en divination soient souvent remises en question, elle a parfois fait des prophéties qui se sont avérées être d'une importance capitale, notamment celle concernant Harry Potter. Trelawney est passionnée par son art et se considère comme une visionnaire, malgré le scepticisme des autres enseignants."
  },
  {
    id: 44,
    nom: "Filius Flitwick",
    acteur: "Warwick Davis",
    rarete: "Commune",
    maison: "Professeurs",
    image: "img/perso/44.png",
    description: "Professeur de sortilèges et directeur de la maison Serdaigle, un sorcier talentueux au grand cœur.",
    caracteristiques: {
      force: 55,
      intelligence: 90,
      charisme: 80,
      magie: 95
    },
    backgroundStory: "Filius Flitwick est un sorcier talentueux et un enseignant passionné qui dirige la maison Serdaigle à Poudlard. Spécialiste des sortilèges, Flitwick est l'un des professeurs les plus respectés de l'école. Malgré sa petite taille, il est un sorcier extrêmement puissant et possède un grand cœur, s'occupant de ses élèves avec bienveillance tout en exigeant excellence et discipline."
  },
  {
    id: 22,
    nom: "Voldemort",
    acteur: "Ralph Fiennes",
    rarete: "Légendaire",
    maison: "Mangemort",
    image: "img/perso/22.png",
    description: "Le plus puissant Mage Noir de tous les temps, responsable de nombreuses tragédies.",
    caracteristiques: {
      force: 100,
      intelligence: 95,
      charisme: 90,
      magie: 100
    },
    backgroundStory: "Tom Riddle, alias Voldemort, est le Mage Noir le plus redouté de tous les temps. Né dans des circonstances tragiques, il a été élevé dans un orphelinat sans amour, ce qui a contribué à sa soif de pouvoir et à son désir de pureté du sang. En poursuivant son rêve de domination totale, il a plongé le monde des sorciers dans une guerre sanglante, cherchant à tuer tous ceux qui s'opposent à lui. Même après sa chute, sa menace reste omniprésente."
  },
  {
    id: 23,
    nom: "Bellatrix Lestrange",
    acteur: "Helena Bonham Carter",
    rarete: "Légendaire",
    maison: "Mangemort",
    image: "img/perso/23.png",
    description: "Une sorcière cruelle et loyale servante de Voldemort, connue pour ses actes de violence.",
    caracteristiques: {
      force: 90,
      intelligence: 80,
      charisme: 85,
      magie: 95
    },
    backgroundStory: "Bellatrix Lestrange, l'une des plus fidèles et redoutées servantes de Voldemort, est une sorcière cruelle et instable. Fervente défenseure des idéaux de pureté du sang, elle est responsable de nombreuses atrocités et a une passion meurtrière pour la torture, en particulier envers les traîtres et les ennemis de son maître. Sa loyauté envers Voldemort est inébranlable, et elle est prête à tout sacrifier pour lui."
  },
  {
    id: 24,
    nom: "Fenrir Greyback",
    acteur: "Dave Legeno",
    rarete: "Rare",
    maison: "Mangemort",
    image: "img/perso/24.png",
    description: "Loup-garou brutal, connu pour attaquer les enfants.",
    caracteristiques: {
      force: 90,
      intelligence: 70,
      charisme: 60,
      magie: 80
    },
    backgroundStory: "Fenrir Greyback est un loup-garou redouté, connu pour sa brutalité et sa cruauté envers les innocents. Il est particulièrement reconnu pour attaquer des enfants, un acte qu'il considère comme une façon de propager sa malédiction et de transformer de jeunes sorciers en créatures comme lui. Un allié fidèle de Voldemort, Greyback fait régner la terreur dans le monde magique."
  },
  {
    id: 25,
    nom: "Dolores Ombrage",
    acteur: "Imelda Staunton",
    rarete: "Rare",
    maison: "Mangemort",
    image: "img/perso/25.png",
    description: "Une sorcière autoritaire et cruelle, ancienne sous-secrétaire du ministre de la Magie.",
    caracteristiques: {
      force: 60,
      intelligence: 85,
      charisme: 75,
      magie: 70
    },
    backgroundStory: "Dolores Ombrage est une sorcière cruelle et autoritaire, connue pour son approche stricte et intransigeante de l'autorité. Ancienne sous-secrétaire du ministre de la Magie, elle a été nommée directrice de Poudlard par le Ministère de la Magie. Sa tyrannie s'est intensifiée au fil du temps, notamment en persécutant ceux qui osaient défier ses règles injustes. Elle est profondément loyale au Ministère, bien qu'elle agisse souvent de manière impitoyable."
  },
  {
    id: 26,
    nom: "Lucius Malfoy",
    acteur: "Jason Isaacs",
    rarete: "Très Rare",
    maison: "Mangemort",
    image: "img/perso/26.png",
    description: "Le père de Draco, un Mangemort influent et manipulateur.",
    caracteristiques: {
      force: 80,
      intelligence: 90,
      charisme: 95,
      magie: 90
    },
    backgroundStory: "Lucius Malfoy est un sorcier puissant et influent, membre clé des Mangemorts et père de Draco Malfoy. Il utilise son statut de Sang-Pur pour manipuler et dominer les autres, tout en suivant aveuglément Voldemort dans sa quête de pureté du sang. Son charme et son intelligence le rendent particulièrement dangereux, car il sait comment jouer avec les peurs et les désirs des autres pour servir ses propres objectifs."
  },
  {
    id: 27,
    nom: "Peter Pettigrew",
    acteur: "Timothy Spall",
    rarete: "Rare",
    maison: "Mangemort",
    image: "img/perso/27.png",
    description: "Un ancien ami de James Potter, qui a trahi ses amis pour Voldemort.",
    caracteristiques: {
      force: 50,
      intelligence: 75,
      charisme: 60,
      magie: 65
    },
    backgroundStory: "Peter Pettigrew, surnommé 'Wormtail', est un ancien ami de James Potter et membre des Maraudeurs. Cependant, sa lâcheté et son désir de pouvoir l'ont conduit à trahir ses amis, James et Lily Potter, pour Voldemort. Cette trahison a conduit à la mort de ses amis et à la montée en puissance de Voldemort. Pettigrew est un personnage faible et manipulable, mais extrêmement dangereux en raison de son allégeance à la cause des Mangemorts."
  },
  {
    id: 28,
    nom: "Barty Croupton Jr.",
    acteur: "David Tennant",
    rarete: "Rare",
    maison: "Mangemort",
    image: "img/perso/28.png",
    description: "Mangemort dévoué ayant infiltré Poudlard sous un déguisement.",
    caracteristiques: {
      force: 75,
      intelligence: 85,
      charisme: 80,
      magie: 90
    },
    backgroundStory: "Barty Croupton Jr. est un Mangemort particulièrement dévoué et audacieux, qui a été emprisonné pour ses crimes avant de s'échapper grâce à la magie. Il a infiltré Poudlard sous le déguisement de son propre père et a joué un rôle clé dans le retour de Voldemort. Sa loyauté envers son maître est absolue, et il n'hésite pas à commettre des actes cruels pour prouver sa fidélité."
  },
  {
    id: 29,
    nom: "Quirinus Quirrell",
    acteur: "Ian Hart",
    rarete: "Commune",
    maison: "Mangemort",
    patronus: "",
    image: "img/perso/29.png",
    description: "Professeur possédé par Voldemort, cherchant la Pierre Philosophale.",
    caracteristiques: {
      force: 65,
      intelligence: 80,
      charisme: 70,
      magie: 85
    },
    backgroundStory: "Quirinus Quirrell est un ancien professeur de Défense contre les forces du mal à Poudlard. À première vue, il semble être un homme timide et mal à l'aise, mais il cache un secret terrible : il est possédé par Voldemort. Sous l'emprise du Mage Noir, Quirrell cherche à obtenir la Pierre Philosophale pour ressusciter son maître et restaurer son pouvoir. Sa loyauté envers Voldemort mène finalement à sa chute."
  },
  {
    id: 30,
    nom: "Dobby",
    acteur: "",
    rarete: "Rare",
    maison: "Alliés",
    image: "img/perso/30.png",
    description: "Un elfe de maison libre, courageux et dévoué à Harry Potter.",
    caracteristiques: {
      force: 70,
      intelligence: 85,
      charisme: 90,
      magie: 80
    },
    backgroundStory: "Dobby est un elfe de maison qui a été libéré de son ancien maître, les Malfoy, grâce à l'intervention de Harry Potter. Sa liberté a changé sa vie, et il a juré d'aider Harry à chaque fois qu'il le pouvait. Courageux et dévoué, Dobby est prêt à se sacrifier pour ses amis et lutte contre l'injustice."
  },
  {
    id: 31,
    nom: "Alastor Maugrey",
    acteur: "Brendan Gleeson",
    rarete: "Très rare",
    maison: "Alliés",
    image: "img/perso/31.png",
    description: "Auror réputé et professeur de défense contre les forces du mal à Poudlard.",
    caracteristiques: {
      force: 90,
      intelligence: 80,
      charisme: 85,
      magie: 95
    },
    backgroundStory: "Alastor Maugrey, surnommé 'Fol Oeil', est un ancien auror et membre de l'Ordre du Phénix. Il est reconnu pour sa vigilance extrême et ses méthodes peu orthodoxes. Maugrey est un combattant redoutable contre les forces obscures, et il devient professeur de défense contre les forces du mal à Poudlard, où il enseigne à Harry et à ses camarades l'importance de rester toujours sur leurs gardes."
  },
  {
    id: 32,
    nom: "Fleur Delacour",
    acteur: "Clémence Poésy",
    rarete: "Rare",
    maison: "Alliés",
    image: "img/perso/32.png",
    description: "Championne de Beauxbâtons et épouse de Bill Weasley.",
    caracteristiques: {
      force: 70,
      intelligence: 80,
      charisme: 90,
      magie: 85
    },
    backgroundStory: "Fleur Delacour est une sorcière talentueuse et la championne de Beauxbâtons lors du Tournoi des Trois Sorciers. Sa beauté et son charisme captivent tous ceux qui la rencontrent. Elle finit par épouser Bill Weasley, et malgré les épreuves, elle montre un courage inébranlable et un grand amour pour sa famille."
  },
  {
    id: 33,
    nom: "Aberforth Dumbledore",
    acteur: "Ciarán Hinds",
    rarete: "Commune",
    maison: "Alliés",
    image: "img/perso/33.png",
    description: "Frère d'Albus, propriétaire de la Tête de Sanglier.",
    caracteristiques: {
      force: 70,
      intelligence: 85,
      charisme: 60,
      magie: 75
    },
    backgroundStory: "Aberforth Dumbledore est le frère d'Albus Dumbledore. Il est propriétaire de l'auberge 'La Tête de Sanglier' et a toujours eu une relation tendue avec son frère en raison de conflits familiaux. Malgré son caractère souvent bourru et ses opinions divergentes, Aberforth se montre fidèle à la cause de l'Ordre du Phénix et aide Harry et ses amis dans leurs moments de besoin."
  },
  {
    id: 34,
    nom: "Kingsley Shacklebolt",
    acteur: "George Harris",
    rarete: "Commune",
    maison: "Alliés",
    image: "img/perso/34.png",
    description: "Auror et membre influent de l'Ordre du Phénix.",
    caracteristiques: {
      force: 80,
      intelligence: 85,
      charisme: 90,
      magie: 90
    },
    backgroundStory: "Kingsley Shacklebolt est un auror expérimenté et un membre respecté de l'Ordre du Phénix. Il se distingue par son calme, sa sagesse et son courage. Membre important du ministère de la Magie après la chute de Voldemort, il joue un rôle clé dans la reconstruction du monde magique après la guerre."
  },
  {
    id: 35,
    nom: "Sirius Black",
    acteur: "Gary Oldman",
    rarete: "Légendaire",
    maison: "Alliés",
    image: "img/perso/35.png",
    description: "Le parrain de Harry Potter, connu pour son courage et son passé tragique.",
    caracteristiques: {
      force: 85,
      intelligence: 80,
      charisme: 90,
      magie: 95
    },
    backgroundStory: "Sirius Black, le parrain de Harry Potter, est un membre des Maraudeurs et l'un des sorciers les plus courageux de sa génération. Accusé à tort du meurtre de plusieurs personnes, il passe de nombreuses années en prison avant de retrouver sa liberté. Sirius joue un rôle crucial dans la lutte contre Voldemort, mais sa vie est marquée par un passé tragique et la perte de ses proches."
  },
  {
    id: 36,
    nom: "Rubeus Hagrid",
    acteur: "Robbie Coltrane",
    rarete: "Très Rare",
    maison: "Alliés",
    image: "img/perso/36.png",
    description: "Le gardien des clés et des lieux à Poudlard, connu pour son amour des créatures magiques.",
    caracteristiques: {
      force: 90,
      intelligence: 80,
      charisme: 95,
      magie: 85
    },
    backgroundStory: "Rubeus Hagrid est le gardien des clés et des lieux à Poudlard, un poste qui lui permet de partager son amour pour les créatures magiques. Hagrid a été un ami loyal et protecteur pour Harry Potter, Ron et Hermione. Son cœur est immense, et bien qu'il soit parfois maladroit, il est toujours prêt à défendre ceux qu'il aime."
  },
  {
    id: 37,
    nom: "Arthur Weasley",
    acteur: "Mark Williams",
    rarete: "Commune",
    maison: "Alliés",
    image: "img/perso/37.png",
    description: "Le patriarche de la famille Weasley, fasciné par les objets moldus.",
    caracteristiques: {
      force: 60,
      intelligence: 90,
      charisme: 85,
      magie: 75
    },
    backgroundStory: "Arthur Weasley est le patriarche de la famille Weasley, un homme aimant et dévoué à sa famille. Passionné par les objets moldus, il travaille au ministère de la Magie, où il est responsable de la sécurité des objets enchantés. Son amour pour les moldus le met souvent en conflit avec les sorciers plus traditionnels, mais il reste un homme de principes, toujours prêt à aider ses amis."
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
  console.log(maisonData);

  if (!maisonData || maisonData.length === 0) {
    return;
  }

  let maisonDiv = document.createElement("div");
  maisonDiv.classList.add("maison");

  maisonDiv.innerHTML = `<h2 id="${maison.toLowerCase()}" class="titre-maison">${maison}</h2>`;

  const maisonCartesContainer = document.createElement("div");
  maisonCartesContainer.classList.add("cartes-container");

  let hasCards = false;

  maisonData.forEach((carte) => {
    if (!carte.nom) {
      return;
    }

    hasCards = true;

    const carteElement = document.createElement("div");
    carteElement.classList.add("cartes");

    const imageSrc = carte.image ? carte.image : "./img/FOND.avif";
    const imagemaisonSrc = carte.imagemaison ? carte.imagemaison : "./img/FOND.avif";
    const displayStyle = carte.imagemaison ? "block" : "none";  
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
        <img src="${imagemaisonSrc}" class="image-maison-led ${carte.imagemaison ? 'active' : ''}">


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
      } else {
        console.log("Aucun utilisateur connecté.");
      }
    });

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
    console.log(titre);
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

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const resetButton = document.getElementById("placement-reset-button");

  searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();

    const filteredData = cartesData.filter((carte) =>
      carte.nom.toLowerCase().includes(searchTerm)
    );

    const maisonsData = filteredData.reduce((acc, item) => {
      if (!acc[item.maison]) {
        acc[item.maison] = [];
      }
      acc[item.maison].push(item);
      return acc;
    }, {});

    cartesContainer.innerHTML = "";

    Object.keys(maisonsData).forEach((maison) => {
      showHouse(maison, maisonsData[maison]);
    });

    attachClickEvents();

    resetButton.style.display = searchTerm ? "block" : "none";
  });

  resetButton.addEventListener("click", function () {
    searchInput.value = "";

    cartesContainer.innerHTML = "";
    fetchData(cartesData); 

    attachClickEvents(); 
    resetButton.style.display = "none";
  });

  function attachClickEvents() {
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

        resetButton.style.display = "block";
      });
    });
  }

  attachClickEvents();
});

