// Primaire : une leçon de base par classe et par matière (SIL à CM2).
// À charger APRÈS programme.js. Chaque leçon est un point de départ à enrichir.
(function () {
  var L = [
    // ---------- SIL ----------
    ["SIL", "Français", "Les voyelles et les premières syllabes",
     "Les voyelles sont a, e, i, o, u, y. On les associe aux consonnes pour lire : ba, be, bi, bo, bu. Exemples : papa, bébé, lac, moto."],
    ["SIL", "Mathématiques", "Les nombres de 0 à 10",
     "Compter : 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. Chaque nombre correspond à une quantité : 3 mangues, 5 crayons. Je range les nombres du plus petit au plus grand."],
    ["SIL", "Anglais", "Greetings (les salutations)",
     "Hello ! Good morning. Good afternoon. Good evening. Goodbye. My name is ... (je m'appelle ...). How are you ? I am fine, thank you."],
    ["SIL", "Sciences", "Les cinq sens",
     "Je vois avec les yeux, j'entends avec les oreilles, je sens avec le nez, je goûte avec la langue, je touche avec la peau."],
    ["SIL", "Histoire", "Ma famille",
     "Ma famille, c'est mon père, ma mère, mes frères et mes soeurs. Mes grands-parents sont les parents de mes parents. Je dessine ma famille."],
    ["SIL", "Géographie", "Mon école et mon quartier",
     "Mon école a une cour, des salles de classe et un directeur. Mon quartier a des maisons, des routes et un marché. Je décris le chemin de la maison à l'école."],
    ["SIL", "ECM", "La politesse",
     "Je dis bonjour, merci, s'il te plaît et pardon. Je respecte mes camarades, mes parents et mon maître. Je range mes affaires."],
    // ---------- CP ----------
    ["CP", "Français", "Les syllabes et la phrase",
     "Un mot se découpe en syllabes : ca-ma-ra-de. Une phrase commence par une majuscule et finit par un point. Exemple : La lune brille."],
    ["CP", "Mathématiques", "Addition et soustraction jusqu'à 20",
     "Additionner, c'est ajouter : 7 + 5 = 12. Soustraire, c'est enlever : 15 - 6 = 9. Je vérifie avec mes doigts ou avec des cailloux."],
    ["CP", "Anglais", "Colours and numbers",
     "Colours : red, blue, green, yellow, black, white. Numbers : one, two, three, four, five, six, seven, eight, nine, ten."],
    ["CP", "Sciences", "Les animaux domestiques et sauvages",
     "Les animaux domestiques vivent près de l'homme : poule, chèvre, chien. Les animaux sauvages vivent dans la nature : lion, éléphant, singe."],
    ["CP", "Histoire", "Le temps qui passe",
     "Les jours de la semaine : lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche. Hier, aujourd'hui et demain ne sont pas le même jour."],
    ["CP", "Géographie", "Se repérer dans l'espace",
     "Devant, derrière, à droite, à gauche, au-dessus, en dessous. Je place des objets sur ma table et je dis où ils se trouvent."],
    ["CP", "ECM", "Le drapeau du Cameroun",
     "Le drapeau a trois bandes verticales : vert, rouge, jaune. Une étoile jaune se trouve au centre de la bande rouge. Je respecte mon drapeau."],
    // ---------- CE1 ----------
    ["CE1", "Français", "Le nom et l'article",
     "Un nom désigne une personne, un animal ou une chose. Il est précédé d'un article : le, la, les, un, une, des. Exemples : le livre, une maison, des enfants."],
    ["CE1", "Mathématiques", "Dizaines et unités",
     "Dans 47, il y a 4 dizaines et 7 unités : 47 = 40 + 7. Une dizaine = 10 unités. Je compare : 47 est plus petit que 52."],
    ["CE1", "Anglais", "The family and the body",
     "Family : father, mother, brother, sister, grandmother, grandfather. Body : head, arm, hand, leg, foot. This is my mother."],
    ["CE1", "Sciences", "Les parties d'une plante",
     "Une plante a des racines, une tige, des feuilles et des fleurs. Elle a besoin d'eau, d'air et de lumière pour grandir."],
    ["CE1", "Histoire", "Les générations",
     "Les grands-parents, les parents et les enfants sont trois générations. On apprend l'histoire de la famille en interrogeant les anciens."],
    ["CE1", "Géographie", "Les points cardinaux",
     "Les quatre points cardinaux sont le Nord, le Sud, l'Est et l'Ouest. Le soleil se lève à l'Est et se couche à l'Ouest."],
    ["CE1", "ECM", "Les droits et les devoirs de l'enfant",
     "J'ai le droit d'aller à l'école, d'être soigné et protégé. J'ai le devoir d'être poli, de respecter les règles et de travailler."],
    // ---------- CE2 ----------
    ["CE2", "Français", "Le verbe au présent (1er groupe)",
     "Le verbe exprime une action. Chanter : je chante, tu chantes, il chante, nous chantons, vous chantez, ils chantent. Les verbes en -er sont du 1er groupe."],
    ["CE2", "Mathématiques", "La multiplication",
     "Multiplier, c'est additionner plusieurs fois le même nombre : 4 + 4 + 4 = 3 x 4 = 12. J'apprends les tables de 2, 3, 4 et 5."],
    ["CE2", "Anglais", "The verb to be",
     "I am, you are, he is, she is, we are, they are. Examples : I am a pupil. She is my sister. We are friends."],
    ["CE2", "Sciences", "Les trois états de l'eau",
     "L'eau existe à l'état solide (glace), liquide (eau) et gazeux (vapeur). Chauffée, elle devient vapeur. Refroidie, elle devient glace."],
    ["CE2", "Histoire", "Les sources de l'histoire",
     "Pour connaître le passé, on utilise des objets anciens, des photos, des écrits et les récits des anciens. Ce sont des sources historiques."],
    ["CE2", "Géographie", "Le relief du Cameroun",
     "Le Cameroun a des plaines, des plateaux et des montagnes. Le mont Cameroun est un volcan actif situé près de la côte."],
    ["CE2", "ECM", "Les symboles de l'État",
     "Les symboles du Cameroun sont le drapeau, l'hymne national, les armoiries et la devise : Paix - Travail - Patrie."],
    // ---------- CM1 ----------
    ["CM1", "Français", "Les types de phrases",
     "Déclarative : Il pleut. Interrogative : Pleut-il ? Exclamative : Quelle belle journée ! Impérative : Ferme la porte. Chaque phrase finit par un signe de ponctuation."],
    ["CM1", "Mathématiques", "Les fractions simples",
     "Une fraction partage un tout en parts égales. 1/2 = une moitié, 1/4 = un quart, 3/4 = trois quarts. En haut le numérateur, en bas le dénominateur."],
    ["CM1", "Anglais", "Daily routine and time",
     "I wake up at six. I go to school at seven. I eat lunch at noon. It is half past two. What time is it ?"],
    ["CM1", "Sciences", "La digestion",
     "Les aliments passent par la bouche, l'oesophage, l'estomac puis l'intestin. Les nutriments passent dans le sang. Je mâche bien et je me lave les mains avant de manger."],
    ["CM1", "Histoire", "L'origine du nom Cameroun",
     "Vers 1472, des navigateurs portugais découvrent le fleuve Wouri et y voient beaucoup de crevettes. Ils l'appellent Rio dos Camarões, d'où vient le nom Cameroun."],
    ["CM1", "Géographie", "Les régions du Cameroun",
     "Le Cameroun a 10 régions : Adamaoua, Centre, Est, Extrême-Nord, Littoral, Nord, Nord-Ouest, Ouest, Sud, Sud-Ouest. La capitale est Yaoundé."],
    ["CM1", "ECM", "Le civisme",
     "Être civique, c'est respecter les biens publics, l'environnement et le code de la route. Je ne jette pas de déchets par terre."],
    // ---------- CM2 ----------
    ["CM2", "Français", "Le passé composé",
     "Passé composé = auxiliaire avoir ou être + participe passé. Exemples : j'ai mangé, tu as fini, elle est partie, nous sommes arrivés."],
    ["CM2", "Mathématiques", "Les nombres décimaux",
     "Un nombre décimal a une virgule : 3,5 ; 0,25. Après la virgule, on lit les dixièmes, centièmes. 3,5 est plus grand que 3,25."],
    ["CM2", "Anglais", "Simple past (regular verbs)",
     "On ajoute -ed au verbe pour parler du passé : I played football yesterday. She worked in the garden. They watched a film."],
    ["CM2", "Sciences", "Le circuit électrique",
     "Un circuit simple comprend une pile, des fils, une ampoule et un interrupteur. La lampe s'allume seulement si le circuit est fermé."],
    ["CM2", "Histoire", "L'indépendance du Cameroun",
     "Le 1er janvier 1960, le Cameroun français devient indépendant. Ahmadou Ahidjo est le premier président. Le 20 mai est la fête nationale."],
    ["CM2", "Géographie", "Les climats du Cameroun",
     "Au Sud, le climat est équatorial : chaud et pluvieux toute l'année. Au Nord, le climat est tropical puis sahélien : une longue saison sèche."],
    ["CM2", "ECM", "La Constitution et les institutions",
     "La Constitution est la loi suprême du pays. Les institutions sont le Président de la République, le Parlement (Assemblée nationale et Sénat) et la justice."]
  ];

  function slug(cl, m) {
    return 'auto_primaire_' + (cl + '' + m).toLowerCase().replace(/[^a-z0-9]+/g, '');
  }

  L.forEach(function (l) {
    var id = slug(l[0], l[1]);
    var c = database.find(function (x) { return x.id === id; });
    if (!c) {
      var reel = database.some(function (x) {
        return x.level === 'primaire' &&
               String(x.subject).toLowerCase() === l[1].toLowerCase() &&
               String(x.class).indexOf(l[0]) !== -1;
      });
      if (reel) return;
      c = { id: id, level: 'primaire', class: l[0], subject: l[1], source: 'Darlly learn' };
      database.push(c);
    }
    c.title = l[2];
    c.content = '<h3>' + l[2] + '</h3><p>' + l[3] + '</p>';
    c.pret = true;
  });

  if (typeof filterLevel === 'function') filterLevel(niveauActuel);
})();// Primaire : une leçon de base par classe et par matière (SIL à CM2).
// À charger APRÈS programme.js. Chaque leçon est un point de départ à enrichir.
(function () {
  var L = [
    // ---------- SIL ----------
    ["SIL", "Français", "Les voyelles et les premières syllabes",
     "Les voyelles sont a, e, i, o, u, y. On les associe aux consonnes pour lire : ba, be, bi, bo, bu. Exemples : papa, bébé, lac, moto."],
    ["SIL", "Mathématiques", "Les nombres de 0 à 10",
     "Compter : 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. Chaque nombre correspond à une quantité : 3 mangues, 5 crayons. Je range les nombres du plus petit au plus grand."],
    ["SIL", "Anglais", "Greetings (les salutations)",
     "Hello ! Good morning. Good afternoon. Good evening. Goodbye. My name is ... (je m'appelle ...). How are you ? I am fine, thank you."],
    ["SIL", "Sciences", "Les cinq sens",
     "Je vois avec les yeux, j'entends avec les oreilles, je sens avec le nez, je goûte avec la langue, je touche avec la peau."],
    ["SIL", "Histoire", "Ma famille",
     "Ma famille, c'est mon père, ma mère, mes frères et mes soeurs. Mes grands-parents sont les parents de mes parents. Je dessine ma famille."],
    ["SIL", "Géographie", "Mon école et mon quartier",
     "Mon école a une cour, des salles de classe et un directeur. Mon quartier a des maisons, des routes et un marché. Je décris le chemin de la maison à l'école."],
    ["SIL", "ECM", "La politesse",
     "Je dis bonjour, merci, s'il te plaît et pardon. Je respecte mes camarades, mes parents et mon maître. Je range mes affaires."],
    // ---------- CP ----------
    ["CP", "Français", "Les syllabes et la phrase",
     "Un mot se découpe en syllabes : ca-ma-ra-de. Une phrase commence par une majuscule et finit par un point. Exemple : La lune brille."],
    ["CP", "Mathématiques", "Addition et soustraction jusqu'à 20",
     "Additionner, c'est ajouter : 7 + 5 = 12. Soustraire, c'est enlever : 15 - 6 = 9. Je vérifie avec mes doigts ou avec des cailloux."],
    ["CP", "Anglais", "Colours and numbers",
     "Colours : red, blue, green, yellow, black, white. Numbers : one, two, three, four, five, six, seven, eight, nine, ten."],
    ["CP", "Sciences", "Les animaux domestiques et sauvages",
     "Les animaux domestiques vivent près de l'homme : poule, chèvre, chien. Les animaux sauvages vivent dans la nature : lion, éléphant, singe."],
    ["CP", "Histoire", "Le temps qui passe",
     "Les jours de la semaine : lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche. Hier, aujourd'hui et demain ne sont pas le même jour."],
    ["CP", "Géographie", "Se repérer dans l'espace",
     "Devant, derrière, à droite, à gauche, au-dessus, en dessous. Je place des objets sur ma table et je dis où ils se trouvent."],
    ["CP", "ECM", "Le drapeau du Cameroun",
     "Le drapeau a trois bandes verticales : vert, rouge, jaune. Une étoile jaune se trouve au centre de la bande rouge. Je respecte mon drapeau."],
    // ---------- CE1 ----------
    ["CE1", "Français", "Le nom et l'article",
     "Un nom désigne une personne, un animal ou une chose. Il est précédé d'un article : le, la, les, un, une, des. Exemples : le livre, une maison, des enfants."],
    ["CE1", "Mathématiques", "Dizaines et unités",
     "Dans 47, il y a 4 dizaines et 7 unités : 47 = 40 + 7. Une dizaine = 10 unités. Je compare : 47 est plus petit que 52."],
    ["CE1", "Anglais", "The family and the body",
     "Family : father, mother, brother, sister, grandmother, grandfather. Body : head, arm, hand, leg, foot. This is my mother."],
    ["CE1", "Sciences", "Les parties d'une plante",
     "Une plante a des racines, une tige, des feuilles et des fleurs. Elle a besoin d'eau, d'air et de lumière pour grandir."],
    ["CE1", "Histoire", "Les générations",
     "Les grands-parents, les parents et les enfants sont trois générations. On apprend l'histoire de la famille en interrogeant les anciens."],
    ["CE1", "Géographie", "Les points cardinaux",
     "Les quatre points cardinaux sont le Nord, le Sud, l'Est et l'Ouest. Le soleil se lève à l'Est et se couche à l'Ouest."],
    ["CE1", "ECM", "Les droits et les devoirs de l'enfant",
     "J'ai le droit d'aller à l'école, d'être soigné et protégé. J'ai le devoir d'être poli, de respecter les règles et de travailler."],
    // ---------- CE2 ----------
    ["CE2", "Français", "Le verbe au présent (1er groupe)",
     "Le verbe exprime une action. Chanter : je chante, tu chantes, il chante, nous chantons, vous chantez, ils chantent. Les verbes en -er sont du 1er groupe."],
    ["CE2", "Mathématiques", "La multiplication",
     "Multiplier, c'est additionner plusieurs fois le même nombre : 4 + 4 + 4 = 3 x 4 = 12. J'apprends les tables de 2, 3, 4 et 5."],
    ["CE2", "Anglais", "The verb to be",
     "I am, you are, he is, she is, we are, they are. Examples : I am a pupil. She is my sister. We are friends."],
    ["CE2", "Sciences", "Les trois états de l'eau",
     "L'eau existe à l'état solide (glace), liquide (eau) et gazeux (vapeur). Chauffée, elle devient vapeur. Refroidie, elle devient glace."],
    ["CE2", "Histoire", "Les sources de l'histoire",
     "Pour connaître le passé, on utilise des objets anciens, des photos, des écrits et les récits des anciens. Ce sont des sources historiques."],
    ["CE2", "Géographie", "Le relief du Cameroun",
     "Le Cameroun a des plaines, des plateaux et des montagnes. Le mont Cameroun est un volcan actif situé près de la côte."],
    ["CE2", "ECM", "Les symboles de l'État",
     "Les symboles du Cameroun sont le drapeau, l'hymne national, les armoiries et la devise : Paix - Travail - Patrie."],
    // ---------- CM1 ----------
    ["CM1", "Français", "Les types de phrases",
     "Déclarative : Il pleut. Interrogative : Pleut-il ? Exclamative : Quelle belle journée ! Impérative : Ferme la porte. Chaque phrase finit par un signe de ponctuation."],
    ["CM1", "Mathématiques", "Les fractions simples",
     "Une fraction partage un tout en parts égales. 1/2 = une moitié, 1/4 = un quart, 3/4 = trois quarts. En haut le numérateur, en bas le dénominateur."],
    ["CM1", "Anglais", "Daily routine and time",
     "I wake up at six. I go to school at seven. I eat lunch at noon. It is half past two. What time is it ?"],
    ["CM1", "Sciences", "La digestion",
     "Les aliments passent par la bouche, l'oesophage, l'estomac puis l'intestin. Les nutriments passent dans le sang. Je mâche bien et je me lave les mains avant de manger."],
    ["CM1", "Histoire", "L'origine du nom Cameroun",
     "Vers 1472, des navigateurs portugais découvrent le fleuve Wouri et y voient beaucoup de crevettes. Ils l'appellent Rio dos Camarões, d'où vient le nom Cameroun."],
    ["CM1", "Géographie", "Les régions du Cameroun",
     "Le Cameroun a 10 régions : Adamaoua, Centre, Est, Extrême-Nord, Littoral, Nord, Nord-Ouest, Ouest, Sud, Sud-Ouest. La capitale est Yaoundé."],
    ["CM1", "ECM", "Le civisme",
     "Être civique, c'est respecter les biens publics, l'environnement et le code de la route. Je ne jette pas de déchets par terre."],
    // ---------- CM2 ----------
    ["CM2", "Français", "Le passé composé",
     "Passé composé = auxiliaire avoir ou être + participe passé. Exemples : j'ai mangé, tu as fini, elle est partie, nous sommes arrivés."],
    ["CM2", "Mathématiques", "Les nombres décimaux",
     "Un nombre décimal a une virgule : 3,5 ; 0,25. Après la virgule, on lit les dixièmes, centièmes. 3,5 est plus grand que 3,25."],
    ["CM2", "Anglais", "Simple past (regular verbs)",
     "On ajoute -ed au verbe pour parler du passé : I played football yesterday. She worked in the garden. They watched a film."],
    ["CM2", "Sciences", "Le circuit électrique",
     "Un circuit simple comprend une pile, des fils, une ampoule et un interrupteur. La lampe s'allume seulement si le circuit est fermé."],
    ["CM2", "Histoire", "L'indépendance du Cameroun",
     "Le 1er janvier 1960, le Cameroun français devient indépendant. Ahmadou Ahidjo est le premier président. Le 20 mai est la fête nationale."],
    ["CM2", "Géographie", "Les climats du Cameroun",
     "Au Sud, le climat est équatorial : chaud et pluvieux toute l'année. Au Nord, le climat est tropical puis sahélien : une longue saison sèche."],
    ["CM2", "ECM", "La Constitution et les institutions",
     "La Constitution est la loi suprême du pays. Les institutions sont le Président de la République, le Parlement (Assemblée nationale et Sénat) et la justice."]
  ];

  function slug(cl, m) {
    return 'auto_primaire_' + (cl + '' + m).toLowerCase().replace(/[^a-z0-9]+/g, '');
  }

  L.forEach(function (l) {
    var id = slug(l[0], l[1]);
    var c = database.find(function (x) { return x.id === id; });
    if (!c) {
      var reel = database.some(function (x) {
        return x.level === 'primaire' &&
               String(x.subject).toLowerCase() === l[1].toLowerCase() &&
               String(x.class).indexOf(l[0]) !== -1;
      });
      if (reel) return;
      c = { id: id, level: 'primaire', class: l[0], subject: l[1], source: 'Darlly learn' };
      database.push(c);
    }
    c.title = l[2];
    c.content = '<h3>' + l[2] + '</h3><p>' + l[3] + '</p>';
    c.pret = true;
  });

  if (typeof filterLevel === 'function') filterLevel(niveauActuel);
})();