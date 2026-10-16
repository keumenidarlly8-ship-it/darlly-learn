// Université : programme type de Licence 1 à Master 2, par filière.
// À charger APRÈS programme.js. Programme indicatif : à adapter à votre université.
(function () {
  var N = ['Licence 1', 'Licence 2', 'Licence 3', 'Master 1', 'Master 2'];
  var F = [
    ['Informatique', [
      ['Algorithmique & Python', 'Mathématiques pour l\'informatique', 'Architecture des ordinateurs', 'Systèmes d\'exploitation', 'Anglais technique'],
      ['Structures de données', 'Programmation orientée objet', 'Bases de données', 'Réseaux', 'Probabilités et statistiques'],
      ['Génie logiciel', 'Programmation web', 'Systèmes d\'information', 'Sécurité informatique', 'Théorie des langages'],
      ['Intelligence artificielle', 'Cloud et virtualisation', 'Architecture logicielle', 'Recherche opérationnelle', 'Méthodologie de recherche'],
      ['Apprentissage automatique', 'Big Data', 'Cybersécurité avancée', 'Gestion de projet', 'Mémoire de master']]],
    ['Mathématiques', [
      ['Analyse 1', 'Algèbre 1', 'Géométrie', 'Logique et ensembles', 'Informatique pour les mathématiques'],
      ['Analyse 2', 'Algèbre linéaire', 'Probabilités', 'Topologie', 'Équations différentielles'],
      ['Analyse complexe', 'Algèbre générale', 'Statistiques', 'Analyse numérique', 'Intégration'],
      ['Analyse fonctionnelle', 'Géométrie différentielle', 'Théorie des probabilités', 'Optimisation', 'Algèbre commutative'],
      ['Équations aux dérivées partielles', 'Processus stochastiques', 'Modélisation mathématique', 'Séminaire', 'Mémoire de master']]],
    ['Physique', [
      ['Mécanique du point', 'Électricité', 'Thermodynamique', 'Mathématiques pour la physique', 'Optique'],
      ['Électromagnétisme', 'Mécanique analytique', 'Physique quantique 1', 'Physique statistique', 'Électronique'],
      ['Physique quantique 2', 'Physique du solide', 'Optique ondulatoire', 'Relativité restreinte', 'Travaux pratiques avancés'],
      ['Mécanique quantique avancée', 'Physique nucléaire', 'Physique des matériaux', 'Méthodes numériques', 'Électrodynamique'],
      ['Physique des particules', 'Énergies renouvelables', 'Instrumentation', 'Séminaire', 'Mémoire de master']]],
    ['Droit', [
      ['Introduction au droit', 'Droit constitutionnel', 'Droit civil des personnes', 'Histoire des institutions', 'Sociologie juridique'],
      ['Droit civil des obligations', 'Droit administratif', 'Droit pénal général', 'Droit des biens', 'Finances publiques'],
      ['Droit des affaires', 'Droit du travail', 'Procédure civile', 'Droit international public', 'Droit OHADA'],
      ['Droit des sociétés OHADA', 'Droit pénal des affaires', 'Contentieux administratif', 'Droit international privé', 'Méthodologie juridique'],
      ['Droit des contrats', 'Droit de l\'arbitrage', 'Droits de l\'homme', 'Droit fiscal', 'Mémoire de master']]],
    ['Économie-Gestion', [
      ['Microéconomie', 'Macroéconomie', 'Comptabilité générale', 'Mathématiques', 'Statistiques descriptives'],
      ['Économie monétaire', 'Comptabilité analytique', 'Marketing', 'Statistiques inférentielles', 'Droit des affaires'],
      ['Économétrie', 'Finance d\'entreprise', 'Économie du développement', 'Gestion des ressources humaines', 'Analyse financière'],
      ['Économie internationale', 'Gestion de projet', 'Audit', 'Méthodes quantitatives', 'Management stratégique'],
      ['Politiques économiques', 'Banque et finance', 'Évaluation de projets', 'Contrôle de gestion', 'Mémoire de master']]],
    ['Biologie', [
      ['Biologie cellulaire', 'Chimie générale', 'Botanique', 'Zoologie', 'Mathématiques et statistiques'],
      ['Biochimie', 'Génétique', 'Physiologie animale', 'Physiologie végétale', 'Microbiologie'],
      ['Biologie moléculaire', 'Immunologie', 'Écologie', 'Parasitologie', 'Biotechnologies'],
      ['Génie génétique', 'Bioinformatique', 'Virologie', 'Biologie de la conservation', 'Méthodologie de recherche'],
      ['Biologie du développement', 'Épidémiologie', 'Biodiversité tropicale', 'Séminaire', 'Mémoire de master']]]
  ];

  // Retire les anciennes fiches génériques créées par programme.js
  for (var i = database.length - 1; i >= 0; i--) {
    var d = database[i];
    if (d.level === 'universite' && d.pret === false && String(d.class).indexOf('Licence — ') === 0) {
      database.splice(i, 1);
    }
  }

  function existe(niveau, m) {
    return database.some(function (c) {
      return c.level === 'universite' &&
             String(c.subject).toLowerCase() === m.toLowerCase() &&
             String(c.class).indexOf(niveau) !== -1;
    });
  }

  F.forEach(function (f) {
    f[1].forEach(function (matieres, k) {
      matieres.forEach(function (m) {
        if (existe(N[k], m)) return;
        var classe = N[k] + ' — ' + f[0];
        var id = 'auto_universite_' + (classe + '' + m).toLowerCase().replace(/[^a-z0-9]+/g, '');
        if (database.some(function (c) { return c.id === id; })) return;
        database.push({
          id: id, level: 'universite', class: classe, subject: m, title: m,
          source: 'Darlly learn', pret: false,
          content: '<h3>Cours en préparation</h3><p>Ce cours sera bientôt disponible.</p>'
        });
      });
    });
  });

  if (typeof filterLevel === 'function') filterLevel(niveauActuel);
})();