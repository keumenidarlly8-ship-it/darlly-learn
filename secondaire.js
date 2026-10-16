// Secondaire : une leçon de base par classe et par matière (6e à Terminale).
// À charger APRÈS programme.js. Chaque leçon est un point de départ à enrichir.
(function () {
  var S = { FR: 'Français', MA: 'Mathématiques', EN: 'Anglais', HI: 'Histoire', GE: 'Géographie',
            EC: 'ECM', SV: 'SVT', PC: 'Physique-Chimie-Technologie', PH: 'Physique', CH: 'Chimie',
            IN: 'Informatique', PL: 'Philosophie' };
  var L = [
    ["6e", "FR", "Le groupe nominal", "Un groupe nominal contient un nom, son déterminant et souvent un adjectif : un grand arbre, la petite maison."],
    ["6e", "MA", "Comparer les nombres décimaux", "Pour comparer, on compare d'abord les parties entières, puis les dixièmes, puis les centièmes. Ainsi 3,5 > 3,45."],
    ["6e", "EN", "The present simple", "I play, you play, he plays. À la 3e personne du singulier, on ajoute -s : she works, he goes."],
    ["6e", "HI", "La Préhistoire", "Au Paléolithique, l'homme taille la pierre et vit de chasse et de cueillette. Au Néolithique, il pratique l'agriculture et l'élevage."],
    ["6e", "GE", "Les continents et les océans", "Les continents sont l'Afrique, l'Amérique, l'Antarctique, l'Asie, l'Europe et l'Océanie. Les océans sont l'Atlantique, le Pacifique, l'Indien et l'Arctique."],
    ["6e", "EC", "Les règles de vie en société", "Vivre ensemble suppose de respecter les règles, les autres et les biens communs. Le règlement intérieur de l'établissement en est un exemple."],
    ["6e", "SV", "Les caractéristiques du vivant", "Un être vivant naît, grandit, se nourrit, respire, se reproduit et meurt. Un caillou n'est pas vivant."],
    ["6e", "PC", "Les états de la matière", "La matière existe à l'état solide, liquide ou gazeux. La fusion, la solidification et l'ébullition sont des changements d'état."],
    ["6e", "IN", "Les composants d'un ordinateur", "L'unité centrale traite les données. Le clavier et la souris sont des périphériques d'entrée, l'écran et l'imprimante de sortie."],

    ["5e", "FR", "Les temps de l'indicatif", "Présent : il chante. Imparfait : il chantait. Futur : il chantera. Passé composé : il a chanté. Chaque temps situe l'action dans le temps."],
    ["5e", "MA", "Les nombres relatifs", "Un nombre relatif a un signe : +5 ou -3. On compare : -3 < 2. Addition : (-3) + (+5) = +2."],
    ["5e", "EN", "The past simple", "Verbes réguliers : played, worked. Verbes irréguliers : go - went, see - saw. Question : Did you go to school ?"],
    ["5e", "HI", "L'Égypte ancienne", "L'Égypte vit grâce au Nil. Le pharaon gouverne. Les Égyptiens écrivent avec des hiéroglyphes et construisent des pyramides."],
    ["5e", "GE", "Les grands climats", "Il existe des climats équatorial, tropical, désertique, tempéré et polaire. Le climat dépend surtout de la latitude."],
    ["5e", "EC", "Les droits de l'enfant", "La Convention internationale des droits de l'enfant (1989) garantit le droit à l'éducation, à la santé, à la protection et à l'expression."],
    ["5e", "SV", "La nutrition", "Les aliments contiennent des glucides, lipides et protides. Ils sont digérés puis absorbés dans le sang pour fournir de l'énergie."],
    ["5e", "PC", "Séparer un mélange", "On sépare un mélange par filtration (solide dans liquide), décantation (liquides non mélangés) ou évaporation (sel dans l'eau)."],
    ["5e", "IN", "Fichiers et dossiers", "Un fichier contient des données. Un dossier range des fichiers. On crée, renomme, copie, déplace et supprime avec l'explorateur."],

    ["4e", "FR", "Le discours rapporté", "Direct : Il dit : « Je viens. » Indirect : Il dit qu'il vient. Les pronoms et les temps changent au discours indirect."],
    ["4e", "MA", "Le théorème de Pythagore", "Dans un triangle rectangle, le carré de l'hypoténuse est égal à la somme des carrés des deux autres côtés : a² + b² = c²."],
    ["4e", "EN", "The present perfect", "On forme have/has + participe passé : I have finished. She has lived here since 2020. On parle d'un fait lié au présent."],
    ["4e", "HI", "Les grandes découvertes", "Christophe Colomb atteint l'Amérique en 1492. Vasco de Gama atteint l'Inde par la mer en 1498. Les routes maritimes transforment le commerce."],
    ["4e", "GE", "La population mondiale", "La population mondiale est inégalement répartie : très dense en Asie, plus faible dans les déserts et les régions polaires."],
    ["4e", "EC", "Citoyenneté et vote", "Le citoyen a des droits et des devoirs. Voter est un droit et un devoir civique, qui permet de choisir ses représentants."],
    ["4e", "SV", "La respiration", "Les poumons absorbent le dioxygène et rejettent le dioxyde de carbone. Les échanges gazeux se font dans les alvéoles pulmonaires."],
    ["4e", "PC", "Le courant électrique", "La loi d'Ohm relie la tension U, la résistance R et l'intensité I : U = R x I. U se mesure en volts, R en ohms, I en ampères."],
    ["4e", "IN", "Internet et les réseaux", "Un réseau relie des ordinateurs. Internet est un réseau mondial. Un navigateur permet d'accéder aux pages web."],

    ["3e", "FR", "Le texte argumentatif", "Un texte argumentatif défend une thèse avec des arguments illustrés par des exemples, reliés par des connecteurs logiques."],
    ["3e", "MA", "Les équations du premier degré", "Pour résoudre 2x + 3 = 11, on isole x : 2x = 8, donc x = 4. On fait la même opération des deux côtés."],
    ["3e", "EN", "Conditional type 1", "If it rains, I will stay at home. If + présent, puis will + verbe : on exprime une possibilité réelle."],
    ["3e", "HI", "La Première Guerre mondiale", "De 1914 à 1918, les Alliés affrontent les Empires centraux. La guerre se termine par l'armistice du 11 novembre 1918."],
    ["3e", "GE", "L'économie du Cameroun", "Le Cameroun produit du cacao, du café, du coton, du pétrole et du bois. L'agriculture emploie une grande partie de la population."],
    ["3e", "EC", "Les organisations internationales", "L'ONU maintient la paix. L'Union africaine favorise l'intégration et la coopération entre les États africains."],
    ["3e", "SV", "L'hérédité", "Les caractères héréditaires sont portés par les gènes, situés sur les chromosomes, eux-mêmes faits d'ADN. On reçoit la moitié de ses chromosomes de chaque parent."],
    ["3e", "PC", "Acides et bases", "Le pH mesure l'acidité : inférieur à 7, la solution est acide ; égal à 7, neutre ; supérieur à 7, basique."],
    ["3e", "IN", "Introduction à la programmation", "Un algorithme est une suite d'instructions. Un programme utilise des variables, des conditions (si... alors) et des boucles."],

    ["Seconde", "FR", "Les figures de style", "La comparaison relie deux éléments par un mot (comme). La métaphore les assimile sans outil. La personnification donne des traits humains à une chose."],
    ["Seconde", "MA", "Les fonctions affines", "Une fonction affine s'écrit f(x) = ax + b. Sa représentation est une droite de coefficient directeur a et d'ordonnée à l'origine b."],
    ["Seconde", "EN", "Reported speech", "He said : I am tired devient He said that he was tired. Les temps et les pronoms reculent d'un cran."],
    ["Seconde", "HI", "Les Lumières et la Révolution française", "Au XVIIIe siècle, les philosophes des Lumières défendent la liberté et la raison. En 1789, la Révolution française éclate."],
    ["Seconde", "GE", "La mondialisation", "La mondialisation est l'intensification des échanges de biens, de personnes, de capitaux et d'informations entre les pays."],
    ["Seconde", "EC", "Les droits de l'homme", "La Déclaration universelle des droits de l'homme a été adoptée par l'ONU en 1948. Elle affirme la dignité et l'égalité de tous."],
    ["Seconde", "SV", "La cellule", "La cellule est l'unité du vivant. Elle comprend une membrane, un cytoplasme et un noyau qui contient l'ADN."],
    ["Seconde", "PH", "Mouvement et vitesse", "La vitesse moyenne est v = d / t. Elle s'exprime en m/s ou en km/h. 1 m/s = 3,6 km/h."],
    ["Seconde", "CH", "La mole", "La quantité de matière n (en mol) se calcule par n = m / M, avec m la masse en grammes et M la masse molaire en g/mol."],
    ["Seconde", "IN", "Les bases de données", "Une base de données organise l'information en tables, avec des champs (colonnes) et des enregistrements (lignes)."],

    ["Première", "FR", "Le roman et le point de vue", "Le narrateur raconte l'histoire. La focalisation peut être zéro (omniscient), interne (un personnage) ou externe (observateur)."],
    ["Première", "MA", "Les suites numériques", "Suite arithmétique : u(n+1) = u(n) + r. Suite géométrique : u(n+1) = u(n) x q. Chacune a une raison, r ou q."],
    ["Première", "EN", "The passive voice", "On forme be + participe passé : The book was written by him. On met l'accent sur l'action ou sur ce qui la subit."],
    ["Première", "HI", "La colonisation de l'Afrique", "La conférence de Berlin (1884-1885) fixe les règles du partage de l'Afrique entre les puissances européennes."],
    ["Première", "GE", "Le développement durable", "Il concilie trois piliers : économique, social et environnemental, afin de répondre aux besoins présents sans compromettre ceux des générations futures."],
    ["Première", "EC", "La démocratie et les élections", "En démocratie, le pouvoir appartient au peuple. Les élections libres et transparentes permettent de choisir les dirigeants."],
    ["Première", "SV", "Mitose et méiose", "La mitose produit deux cellules identiques et sert à la croissance. La méiose produit les gamètes avec la moitié des chromosomes."],
    ["Première", "PH", "Les lois de Newton", "Principe d'inertie : sans force, un corps garde son mouvement. Deuxième loi : F = m x a, la force est égale à la masse multipliée par l'accélération."],
    ["Première", "CH", "Réactions acido-basiques", "Un acide cède un proton H+, une base le capte. La réaction entre un acide et une base forme un sel et de l'eau."],
    ["Première", "IN", "Boucles et tableaux", "Une boucle répète des instructions. Un tableau stocke plusieurs valeurs sous un même nom, accessibles par leur indice."],

    ["Terminale", "FR", "La dissertation littéraire", "Elle comprend une introduction (sujet, problématique, plan), un développement en parties argumentées et une conclusion."],
    ["Terminale", "MA", "Limites et dérivation", "La dérivée f'(x) donne la pente de la tangente à la courbe. Exemple : si f(x) = x², alors f'(x) = 2x."],
    ["Terminale", "EN", "Essay writing", "Un essai comprend une introduction, un développement avec des paragraphes d'arguments et une conclusion."],
    ["Terminale", "GE", "L'intégration régionale africaine", "La CEMAC en Afrique centrale, la CEDEAO en Afrique de l'Ouest et l'Union africaine favorisent le commerce et la coopération."],
    ["Terminale", "EC", "Patriotisme et développement", "Le patriotisme consiste à servir son pays. Lutter contre la corruption et payer ses impôts contribuent au développement."],
    ["Terminale", "SV", "L'immunité", "Le système immunitaire reconnaît et détruit les agents pathogènes. Un vaccin prépare l'organisme à se défendre."],
    ["Terminale", "PH", "Les ondes", "Une onde est caractérisée par sa longueur d'onde, sa fréquence et sa célérité : v = lambda x f."],
    ["Terminale", "CH", "Les alcanes", "Les alcanes sont des hydrocarbures saturés de formule CnH2n+2. Exemples : le méthane CH4, l'éthane C2H6."],
    ["Terminale", "PL", "Qu'est-ce que la philosophie ?", "La philosophie est un questionnement rationnel sur la vérité, la liberté, la justice et le sens de l'existence."],
    ["Terminale", "IN", "Le langage SQL", "SQL interroge une base de données : SELECT nom FROM eleves WHERE classe = 'Tle'. SELECT choisit les colonnes, WHERE filtre les lignes."]
  ];

  function slug(cl, m) {
    return 'auto_secondaire_' + (cl + '' + m).toLowerCase().replace(/[^a-z0-9]+/g, '');
  }

  L.forEach(function (l) {
    var matiere = S[l[1]];
    var id = slug(l[0], matiere);
    var c = database.find(function (x) { return x.id === id; });
    if (!c) {
      var reel = database.some(function (x) {
        return x.level === 'secondaire' &&
               String(x.subject).toLowerCase() === matiere.toLowerCase() &&
               String(x.class).indexOf(l[0]) !== -1;
      });
      if (reel) return;
      c = { id: id, level: 'secondaire', class: l[0], subject: matiere, source: 'Darlly learn' };
      database.push(c);
    }
    c.title = l[2];
    c.content = '<h3>' + l[2] + '</h3><p>' + l[3] + '</p>';
    c.pret = true;
  });

  if (typeof filterLevel === 'function') filterLevel(niveauActuel);
})();