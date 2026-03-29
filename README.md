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

## 🚀 Developpement en local

Si vous modifiez le code, vous pouvez tester sur votre ordinateur (ou votre réseau Wi-Fi de maison) avec ces commandes standard :

```bash
# 1. Si ce n'est pas déjà fait, installer les dépendances
npm install

# 2. Démarrer le serveur de développement (accessible sur le réseau local via Wi-Fi)
npm run dev
```

> **Note :** Pendant le développement local (en HTTP), les fonctionnalités "PWA / Ajouter à l'écran d'accueil" de Chrome sur téléphone portable peuvent être instables ou capricieuses en raison des normes de sécurité Web. Hébergez l'application sur internet pour débloquer la vraie application native.

---

## 🌍 Comment Héberger l'application gratuitement (Mise en ligne)

Puisque Codex ne possède pas de back-end (pas de serveur de base de données), c'est ce qu'on appelle un **Front-End Statique**. 
Il existe de nombreuses plateformes qui hébergent cela **100% gratuitement** et avec un support PWA en HTTPS (obligatoire pour l'installation sur mobile). 

Les deux meilleures méthodes sont **Vercel** ou **Netlify**. Voici comment faire en quelques clics :

### Méthode 1 : Vercel (Le plus rapide)
1. Créez un compte gratuit sur [Vercel](https://vercel.com/).
2. Vous pouvez soit lier votre compte GitHub (et importer votre dépôt git si vous en avez un), soit utiliser la **Vercel CLI**.
3. Si vous n'utilisez pas Git, installez l'outil de ligne de commande : `npm install -g vercel`
4. Roulez cette commande dans votre terminal :
   `vercel`
5. Suivez les instructions. Vercel détectera tout seul que c'est un projet Vite. Il va construire et mettre en ligne votre app sur une URL sécurisée (du style `codex-votre-nom.vercel.app`).
6. Si vous faites des changements plus tard, tapez `vercel --prod` pour mettre à jour le site.

### Méthode 2 : Netlify (Fonctionnement similaire, Glisser-déposer)
1. Construisez d'abord les fichiers prêts pour le web en tapant dans votre terminal : `npm run build`
2. Cela va générer un dossier caché nommé `/dist` dans votre projet. Ce dossier contient l'application minifiée et prête !
3. Allez sur le site de [Netlify](https://www.netlify.com/), créez un compte gratuit.
4. Allez dans la section *"Sites"* et utilisez la fonction **"Drag & Drop"** (Glisser-Déposer). Dépôsez votre dossier `/dist` directement dans la fenêtre du site web.
5. Netlify déploiera instantanément le site et vous fournira un lien HTTPS.

**Une fois sur votre téléphone :** Visitez votre nouvelle adresse Vercel ou Netlify, et votre téléphone vous proposera spontanément "D'installer l'Application" grâce au PWA. Le tour est joué !
