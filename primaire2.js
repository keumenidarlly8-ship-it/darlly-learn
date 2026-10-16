// Primaire (suite) : Éducation physique, Éducation artistique, Informatique, Hygiène et santé.
// À charger APRÈS primaire.js.
(function () {
  var L = [
    ["SIL", "Éducation physique", "Courir, sauter, lancer", "Je cours, je saute et je lance une balle. Je m'échauffe avant l'effort et je respecte les règles du jeu."],
    ["SIL", "Éducation artistique", "Les couleurs", "Les couleurs primaires sont le rouge, le jaune et le bleu. Rouge + jaune = orange. Bleu + jaune = vert. Rouge + bleu = violet."],
    ["SIL", "Informatique", "Découvrir l'ordinateur", "Un ordinateur a un écran, un clavier et une souris. Je l'allume et je l'éteins correctement, avec l'aide de mon maître."],
    ["SIL", "Hygiène et santé", "Se laver les mains", "Je me lave les mains avec de l'eau propre et du savon avant de manger et après être allé aux toilettes."],

    ["CP", "Éducation physique", "Les jeux collectifs", "Dans un jeu collectif, on joue en équipe, on respecte les règles et on accepte de gagner comme de perdre."],
    ["CP", "Éducation artistique", "Le dessin et les lignes", "Il existe des lignes droites, courbes et brisées. Je dessine mon animal préféré avec ces lignes."],
    ["CP", "Informatique", "Le clavier et la souris", "Le clavier sert à écrire les lettres et les chiffres. Avec la souris, un clic gauche sélectionne et un double-clic ouvre."],
    ["CP", "Hygiène et santé", "Les dents", "Je brosse mes dents matin et soir. Je mange moins de sucreries pour éviter les caries."],

    ["CE1", "Éducation physique", "L'athlétisme", "L'athlétisme comprend la course de vitesse, le saut en longueur et le lancer. On s'échauffe avant de commencer."],
    ["CE1", "Éducation artistique", "Les formes", "Le cercle, le carré, le triangle et le rectangle sont des formes. Je compose un dessin en les assemblant."],
    ["CE1", "Informatique", "Écrire un texte", "Avec un traitement de texte, j'écris des mots et des phrases. Je mets une majuscule au début et j'enregistre mon travail."],
    ["CE1", "Hygiène et santé", "Se protéger du paludisme", "Le paludisme est transmis par les moustiques. Je dors sous une moustiquaire et je vide les eaux stagnantes autour de la maison."],

    ["CE2", "Éducation physique", "Les règles du football", "Une équipe de football compte 11 joueurs sur le terrain. On marque en envoyant le ballon dans le but adverse. Le fair-play est essentiel."],
    ["CE2", "Éducation artistique", "Le chant et le rythme", "Le rythme se marque avec les mains ou avec un tambour. Je chante en groupe en respectant la mélodie et le tempo."],
    ["CE2", "Informatique", "Dessiner et enregistrer", "Avec un logiciel de dessin, j'utilise le crayon, le pinceau et la gomme. J'enregistre mon dessin dans un dossier."],
    ["CE2", "Hygiène et santé", "L'alimentation équilibrée", "Pour bien grandir, je mange des céréales, des légumes, des fruits et des aliments riches en protéines. Je bois de l'eau propre."],

    ["CM1", "Éducation physique", "Le volley-ball", "Une équipe de volley-ball compte 6 joueurs. La balle passe par-dessus le filet, avec trois touches au maximum par équipe."],
    ["CM1", "Éducation artistique", "Couleurs chaudes et froides", "Le rouge, l'orange et le jaune sont des couleurs chaudes. Le bleu, le vert et le violet sont des couleurs froides."],
    ["CM1", "Informatique", "Internet en sécurité", "Je ne donne jamais mon mot de passe ni mon adresse. Si un site me gêne, j'en parle à un adulte."],
    ["CM1", "Hygiène et santé", "Les vaccins", "Les vaccins protègent contre certaines maladies. Le carnet de vaccination garde la trace des vaccins reçus."],

    ["CM2", "Éducation physique", "Le sport et la santé", "Les enfants doivent bouger au moins 60 minutes par jour. Le sport renforce le coeur, les muscles et le moral."],
    ["CM2", "Éducation artistique", "Les arts traditionnels du Cameroun", "Les masques, la sculpture sur bois, les tambours et les danses font partie du patrimoine culturel du Cameroun."],
    ["CM2", "Informatique", "Les logiciels", "Un traitement de texte sert à écrire, un tableur à calculer, un navigateur à consulter Internet. Je choisis le bon outil pour chaque tâche."],
    ["CM2", "Hygiène et santé", "Les maladies transmissibles", "Le paludisme, le choléra et d'autres maladies se transmettent. On les prévient avec de l'eau propre, le lavage des mains et la vaccination."]
  ];

  function slug(cl, m) {
    return 'auto_primaire_' + (cl + '' + m).toLowerCase().replace(/[^a-z0-9]+/g, '');
  }

  L.forEach(function (l) {
    var id = slug(l[0], l[1]);
    var c = database.find(function (x) { return x.id === id; });
    if (!c) {
      c = { id: id, level: 'primaire', class: l[0], subject: l[1], source: 'Darlly learn' };
      database.push(c);
    }
    c.title = l[2];
    c.content = '<h3>' + l[2] + '</h3><p>' + l[3] + '</p>';
    c.pret = true;
  });

  if (typeof filterLevel === 'function') filterLevel(niveauActuel);
})();