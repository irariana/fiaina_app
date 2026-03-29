# Codex — Journal de Vie RPG

> *Un journal de vie. Des arcs narratifs. Un archétype qui émerge de tes actes.*
> Codex transforme ta progression personnelle en un RPG gratifiant et ancré dans le monde réel.

---

## 📖 Fonctionnement Fonctionnel (Le Jeu)

L'idée centrale de Codex est de rendre ta progression de vie aussi satisfaisante qu'un jeu vidéo, sans gamification vide de sens. 

- **Les Rites :** Ce sont tes habitudes (ex: Méditation, Sport, Écriture). Chaque rite coché te rapporte des points d'XP et améliore l'une de tes 5 statistiques majeures (Corps, Esprit, Ambition, Social, Création).
- **Les Arcs Narratifs :** Tu définis un grand "Chapitre" de ta vie avec un objectif de points. Une fois atteint, tu as le droit de te décerner la "récompense" que tu t'étais fixée (ex: "Un weekend à Lisbonne").
- **Les Archétypes :** Le jeu analyse secrètement tes 14 derniers jours. Si tu passes énormément de temps sur des rites physiques ("Corps"), tu deviendras le "Guerrier". Si c'est de l'Ambition, tu seras le "Bâtisseur". Ton archétype évolue avec toi et reflète ta vraie nature du moment.

---

## 💻 Architecture Technique

Codex est une **Progressive Web App (PWA) monopage (SPA)** construite pour fonctionner localement et hors-ligne. 

### Stack
- **Framework :** React 18 propulsé par Vite.JS.
- **Stockage :** `localStorage`. L'absence volontaire de base de données garantit une liberté et une confidentialité totales : tout est sauvegardé dans le navigateur. L'état global est manipulé via le hook `useState` dans `App.jsx`.
- **CSS :** Pur "CSS-in-JS". Le fichier `styles.js` contient la totalité du thème, géré par des variables CSS (`--paper`, `--ink`, `--gold`). 
- **PWA :** Grâce au module `vite-plugin-pwa`, l'application s'installe sur smartphone et ordinateur exactement comme une application native.

### Structure des dossiers
```text
.
├── public/                 # Contient les icônes de la PWA manifest
├── src/
│   ├── screens/            # Les composants des différentes pages
│   ├── App.jsx             # Cœur de l'application (Main Layout + Routing + LocalStorage)
│   ├── constants.js        # Données du jeu (Titres, Rites de base, Images, Archétypes)
│   ├── icons.jsx           # Set d'icônes SVG dessinés en pur code
│   ├── styles.js           # La feuille de style principale sous forme de litéral
│   ├── utils.js            # Algorithmes de calcul des archétypes et calcul du fuseau horaire
│   └── main.jsx            # Point d'entrée React
├── package.json            # Dépendances (Vite, React)
└── vite.config.js          # Configuration Vite et du générateur PWA (Service Workers)
```

---
