// ─────────────────────────────────────────────
//  IMAGES — picsum.photos (stable, sans clé API)
//  Les seeds sont fixes → mêmes images à chaque rechargement
// ─────────────────────────────────────────────
/**
 * 🛠️ CONFIGURATIONS ET DONNÉES STATIQUES
 * Ce fichier contient toutes les données immuables du jeu :
 * Les archétypes, les rites par défaut, la bibliothèque complète, les titres narratifs et la palette d'images.
 */
export const IMG = {
  batisseur: "https://picsum.photos/seed/batisseur/600/400",
  sage:      "https://picsum.photos/seed/sage/600/400",
  guerrier:  "https://picsum.photos/seed/guerrier/600/400",
  passeur:   "https://picsum.photos/seed/passeur/600/400",
  artiste:   "https://picsum.photos/seed/artiste/600/400",
  setup:     "https://picsum.photos/seed/codexsetup/800/500",
  arc1:      "https://picsum.photos/seed/arc1/600/400",
  arc2:      "https://picsum.photos/seed/arc2/600/400",
  arc3:      "https://picsum.photos/seed/arc3/600/400",
  arc4:      "https://picsum.photos/seed/arc4/600/400",
  arc5:      "https://picsum.photos/seed/arc5/600/400",
  arc6:      "https://picsum.photos/seed/arc6/600/400",
};

export const ARC_IMAGES = [IMG.arc1, IMG.arc2, IMG.arc3, IMG.arc4, IMG.arc5, IMG.arc6];

// ─────────────────────────────────────────────
//  ARCHÉTYPES
// ─────────────────────────────────────────────
export const ARCHETYPES = [
  {
    id: "batisseur",
    name: "Le Bâtisseur",
    latin: "Aedificator",
    dominantStat: "ambition",
    threshold: 0.35,
    description: "Tu construis. Tu avances. Chaque jour de discipline est une pierre posée.",
    condition: "Ambition doit représenter au moins 35% de ton activité des 14 derniers jours.",
    maintain: "Reviens chaque semaine sur tes rites d'ambition. Sans ça, le titre s'estompe.",
    image: IMG.batisseur,
    palette: "#2c1810",
    emoji: "⚔️",
  },
  {
    id: "sage",
    name: "Le Sage",
    latin: "Sapiens",
    dominantStat: "esprit",
    threshold: 0.35,
    description: "Tu apprends. Tu lis. Tu penses. La connaissance est ton seul édifice.",
    condition: "Esprit doit représenter au moins 35% de ton activité des 14 derniers jours.",
    maintain: "L'esprit s'endort si on ne le nourrit plus. Continue de lire et d'apprendre.",
    image: IMG.sage,
    palette: "#0a1a2c",
    emoji: "📚",
  },
  {
    id: "guerrier",
    name: "Le Guerrier",
    latin: "Bellator",
    dominantStat: "corps",
    threshold: 0.35,
    description: "Tu bouges. Tu transpires. Le corps est le temple de la volonté.",
    condition: "Corps doit représenter au moins 35% de ton activité des 14 derniers jours.",
    maintain: "Un guerrier qui ne s'entraîne plus n'est plus un guerrier.",
    image: IMG.guerrier,
    palette: "#1a0808",
    emoji: "💪",
  },
  {
    id: "passeur",
    name: "Le Passeur",
    latin: "Transmissor",
    dominantStat: "social",
    threshold: 0.30,
    description: "Tu relies. Tu partages. Les liens que tu tisses changent les gens autour de toi.",
    condition: "Social doit représenter au moins 30% de ton activité des 14 derniers jours.",
    maintain: "Sans connexion régulière, l'archétype disparaît.",
    image: IMG.passeur,
    palette: "#0c1a10",
    emoji: "🤝",
  },
  {
    id: "artiste",
    name: "L'Artiste",
    latin: "Artifex",
    dominantStat: "creation",
    threshold: 0.30,
    description: "Tu crées. Tu laisses une trace. Chaque jour est une page de ton œuvre.",
    condition: "Création doit représenter au moins 30% de ton activité des 14 derniers jours.",
    maintain: "La créativité se perd sans pratique quotidienne.",
    image: IMG.artiste,
    palette: "#1a0a1a",
    emoji: "🎨",
  },
];

// ─────────────────────────────────────────────
//  STATISTIQUES
// ─────────────────────────────────────────────
export const STATS_CONFIG = [
  { key: "corps",    label: "Corps",    color: "#8b3a2a", emoji: "💪" },
  { key: "esprit",   label: "Esprit",   color: "#2a4a6b", emoji: "🧠" },
  { key: "ambition", label: "Ambition", color: "#7a5a18", emoji: "🔥" },
  { key: "social",   label: "Social",   color: "#2a5a3a", emoji: "🤝" },
  { key: "creation", label: "Création", color: "#4a2a6b", emoji: "✏️" },
];

// ─────────────────────────────────────────────
//  RITES PAR DÉFAUT
// ─────────────────────────────────────────────
export const DEFAULT_RITES = [
  { id:"r1", name:"Course du matin",       stat:"corps",    pts:35, desc:"30 min minimum",          emoji:"🏃", custom:false },
  { id:"r2", name:"Lecture",               stat:"esprit",   pts:20, desc:"20 pages",                emoji:"📚", custom:false },
  { id:"r3", name:"Travailler un projet",  stat:"ambition", pts:30, desc:"Session focus",           emoji:"⚡", custom:false },
  { id:"r4", name:"Appeler quelqu'un",     stat:"social",   pts:15, desc:"Vrai échange humain",     emoji:"📞", custom:false },
  { id:"r5", name:"Écrire dans le Codex",  stat:"creation", pts:25, desc:"Entrée du jour",          emoji:"✍️", custom:false },
  { id:"r6", name:"Réveil sans écran",     stat:"esprit",   pts:10, desc:"30 min sans téléphone",   emoji:"🌅", custom:false },
];

// ─────────────────────────────────────────────
//  BIBLIOTHÈQUE DE RITES
// ─────────────────────────────────────────────
export const RITES_LIBRARY = {
  corps: [
    { id:"lib_c1",  name:"Natation",              stat:"corps", pts:35, desc:"Séance complète",         emoji:"🏊" },
    { id:"lib_c2",  name:"Musculation",            stat:"corps", pts:35, desc:"Séance de force",         emoji:"💪" },
    { id:"lib_c3",  name:"Yoga / étirements",      stat:"corps", pts:20, desc:"20 min minimum",          emoji:"🧘" },
    { id:"lib_c4",  name:"Vélo",                   stat:"corps", pts:25, desc:"30 min minimum",          emoji:"🚴" },
    { id:"lib_c5",  name:"Manger sans sucre",       stat:"corps", pts:15, desc:"Toute la journée",       emoji:"🥗" },
    { id:"lib_c6",  name:"Dormir avant minuit",    stat:"corps", pts:15, desc:"Lights out à 23h59",      emoji:"💤" },
    { id:"lib_c7",  name:"Marche 30 min",           stat:"corps", pts:20, desc:"Dehors, pas sur tapis",  emoji:"🚶" },
    { id:"lib_c8",  name:"Boxe / arts martiaux",   stat:"corps", pts:40, desc:"Séance complète",         emoji:"🥊" },
    { id:"lib_c9",  name:"Douche froide",           stat:"corps", pts:15, desc:"2 min minimum",          emoji:"🚿" },
    { id:"lib_c10", name:"Randonnée",              stat:"corps", pts:40, desc:"En nature",               emoji:"🥾" },
    { id:"lib_c11", name:"Escalade",               stat:"corps", pts:40, desc:"Salle ou falaise",        emoji:"🧗" },
    { id:"lib_c12", name:"Sport collectif",        stat:"corps", pts:35, desc:"Match ou entraîn.",       emoji:"⚽" },
  ],
  esprit: [
    { id:"lib_e1",  name:"Méditation",             stat:"esprit", pts:20, desc:"10 min minimum",         emoji:"🧘" },
    { id:"lib_e2",  name:"Journaling",             stat:"esprit", pts:15, desc:"5 min libre",            emoji:"📝" },
    { id:"lib_e3",  name:"Podcast éducatif",       stat:"esprit", pts:15, desc:"Un épisode complet",     emoji:"🎧" },
    { id:"lib_e4",  name:"Temps sans écran",       stat:"esprit", pts:20, desc:"1 heure minimum",        emoji:"🌿" },
    { id:"lib_e5",  name:"Apprendre une langue",   stat:"esprit", pts:25, desc:"Session Duolingo/Anki",  emoji:"🌍" },
    { id:"lib_e6",  name:"Pas de réseaux sociaux", stat:"esprit", pts:20, desc:"Toute la journée",       emoji:"🔇" },
    { id:"lib_e7",  name:"Écouter de la musique",  stat:"esprit", pts:10, desc:"En pleine conscience",   emoji:"🎵" },
    { id:"lib_e8",  name:"Revoir ses notes",       stat:"esprit", pts:15, desc:"10 min de révision",     emoji:"🗒️" },
    { id:"lib_e9",  name:"Résoudre un problème",   stat:"esprit", pts:25, desc:"Math, puzzle, code…",    emoji:"🧩" },
    { id:"lib_e10", name:"Pas d'alcool",           stat:"esprit", pts:20, desc:"Toute la journée",       emoji:"🚫" },
    { id:"lib_e11", name:"Lecture de philosophie", stat:"esprit", pts:25, desc:"20 pages min.",          emoji:"🏛️" },
    { id:"lib_e12", name:"Regarder un documentaire",stat:"esprit",pts:15, desc:"1 doc sur un vrai sujet",emoji:"🎬" },
  ],
  ambition: [
    { id:"lib_a1",  name:"Session deep work",      stat:"ambition", pts:50, desc:"2 heures focus absolu",   emoji:"🎯" },
    { id:"lib_a2",  name:"Planifier sa semaine",   stat:"ambition", pts:20, desc:"Planning complet",        emoji:"📋" },
    { id:"lib_a3",  name:"Envoyer un email clé",   stat:"ambition", pts:15, desc:"Un mail qui compte",      emoji:"💌" },
    { id:"lib_a4",  name:"Regarder ses finances",  stat:"ambition", pts:15, desc:"Budget, épargne",         emoji:"📈" },
    { id:"lib_a5",  name:"Side project",           stat:"ambition", pts:35, desc:"1 heure sur un projet perso",emoji:"🛠️" },
    { id:"lib_a6",  name:"Lire sur son domaine",   stat:"ambition", pts:20, desc:"Article, livre pro",      emoji:"🔬" },
    { id:"lib_a7",  name:"Refuser une distraction",stat:"ambition", pts:15, desc:"Dire non à qqch d'inutile",emoji:"✋" },
    { id:"lib_a8",  name:"Prendre une décision",   stat:"ambition", pts:20, desc:"Une vraie, pas reportée", emoji:"⚖️" },
    { id:"lib_a9",  name:"Terminer une tâche",     stat:"ambition", pts:25, desc:"Compléter ce qui trainait",emoji:"✅" },
    { id:"lib_a10", name:"Prospecter / contacter", stat:"ambition", pts:25, desc:"Démarche pro active",     emoji:"🤙" },
    { id:"lib_a11", name:"Créer un système",       stat:"ambition", pts:30, desc:"Process, template, outil",emoji:"⚙️" },
    { id:"lib_a12", name:"Formation en ligne",     stat:"ambition", pts:30, desc:"Module complet",          emoji:"💻" },
  ],
  social: [
    { id:"lib_s1",  name:"Rendre service",         stat:"social", pts:20, desc:"Sans rien attendre",       emoji:"🤝" },
    { id:"lib_s2",  name:"Repas avec des proches", stat:"social", pts:25, desc:"Présence pleine",          emoji:"🍽️" },
    { id:"lib_s3",  name:"Message à un ami perdu", stat:"social", pts:15, desc:"Quelqu'un qu'on oublie",   emoji:"💬" },
    { id:"lib_s4",  name:"Geste généreux",         stat:"social", pts:20, desc:"Concret et sincère",       emoji:"🎁" },
    { id:"lib_s5",  name:"Écouter vraiment",       stat:"social", pts:15, desc:"Sans interrompre",         emoji:"👂" },
    { id:"lib_s6",  name:"Faire un compliment",    stat:"social", pts:10, desc:"Sincère et précis",        emoji:"🌸" },
    { id:"lib_s7",  name:"Rejoindre un groupe",    stat:"social", pts:20, desc:"Club, asso, collectif",    emoji:"👥" },
    { id:"lib_s8",  name:"Rencontrer qq de nouveau",stat:"social", pts:25, desc:"Vraie rencontre",         emoji:"🙏" },
    { id:"lib_s9",  name:"Écrire une lettre",      stat:"social", pts:20, desc:"À la main, à quelqu'un",  emoji:"✉️" },
    { id:"lib_s10", name:"Dîner en famille",       stat:"social", pts:20, desc:"Repas sans écrans",        emoji:"🏠" },
    { id:"lib_s11", name:"Bénévolat",              stat:"social", pts:35, desc:"Pour les autres",          emoji:"❤️" },
    { id:"lib_s12", name:"Poser une vraie question",stat:"social", pts:15, desc:"Qui intéresse l'autre",   emoji:"🎤" },
  ],
  creation: [
    { id:"lib_cr1", name:"Dessiner",               stat:"creation", pts:25, desc:"Libre ou guidé",         emoji:"🎨" },
    { id:"lib_cr2", name:"Jouer d'un instrument",  stat:"creation", pts:25, desc:"20 min minimum",         emoji:"🎸" },
    { id:"lib_cr3", name:"Prendre des photos",     stat:"creation", pts:20, desc:"Avec intention",         emoji:"📷" },
    { id:"lib_cr4", name:"Écrire fiction/essai",   stat:"creation", pts:30, desc:"500 mots minimum",       emoji:"🖊️" },
    { id:"lib_cr5", name:"Monter une vidéo",       stat:"creation", pts:35, desc:"Même courte",            emoji:"🎬" },
    { id:"lib_cr6", name:"Chanter",                stat:"creation", pts:15, desc:"Seul ou en groupe",      emoji:"🎤" },
    { id:"lib_cr7", name:"Cuisiner un plat créatif",stat:"creation",pts:20, desc:"Une recette originale",  emoji:"👨‍🍳" },
    { id:"lib_cr8", name:"Coder un projet perso",  stat:"creation", pts:35, desc:"1 heure min.",           emoji:"💾" },
    { id:"lib_cr9", name:"Designer qq chose",      stat:"creation", pts:25, desc:"UI, affiche, logo",      emoji:"🖌️" },
    { id:"lib_cr10",name:"Écrire des paroles",     stat:"creation", pts:25, desc:"Chanson, poème, slam",   emoji:"🎶" },
    { id:"lib_cr11",name:"Scrapbooking",           stat:"creation", pts:20, desc:"Collage créatif",        emoji:"✂️" },
    { id:"lib_cr12",name:"Improviser",             stat:"creation", pts:20, desc:"Théâtre, musique, écrit",emoji:"🎭" },
  ],
};

// ─────────────────────────────────────────────
//  TITRES NARRATIFS & HUMEURS
// ─────────────────────────────────────────────
export const DAY_TITLES = [
  "Un matin de clarté",    "Le calme avant l'effort",  "La lumière dans la brume",
  "Un pas de plus",        "L'heure de vérité",        "Le silence fécond",
  "La page blanche",       "Le retour au centre",      "Entre deux feux",
  "La voie s'ouvre",       "Vers l'essentiel",         "Le souffle long",
  "Ce qui demeure",        "L'éveil tranquille",       "Le seuil du possible",
  "L'appel du large",      "La forge intérieure",      "Entre ciel et effort",
  "Ce que tu becomes",     "Le feu qui reste",         "L'aube des possibles",
];

export const MOODS = ["😔", "😐", "😊", "😄", "🤩"];
