import { ARCHETYPES, DEFAULT_RITES, DAY_TITLES } from "./constants";

/**
 * Retourne la date locale sous forme d'une chaîne YYYY-MM-DD.
 * Utile pour s'assurer que minuit correspond bien au bon jour local.
 */
export const getLocalDateStr = (d = new Date()) => {
  const pad = n => n.toString().padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
};

// Récupère la date du jour sous forme de string (clé du dictionnaire `days`)
export const today = () => getLocalDateStr(new Date());

// Formate l'affichage de la date en texte francais (e.g. "lundi 29 mars")
export const fmtDate = iso => new Date(iso + "T12:00:00").toLocaleDateString("fr-FR", {
  weekday: "long", day: "numeric", month: "long"
});

// Choisi un titre narratif pseud-aléatoire basé sur le jour du mois.
export const dayTitle = d => DAY_TITLES[new Date(d).getDate() % DAY_TITLES.length];

/**
 * Calcule l'archétype dominant du joueur basé sur ses actions des 14 derniers jours.
 * Regarde quel attribut a concentré le plus d'énergie.
 */
export function computeArchetype(days, rites) {
  const last14 = Array.from({ length: 14 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - i);
    return getLocalDateStr(d);
  });
  const sp = { corps: 0, esprit: 0, ambition: 0, social: 0, creation: 0 };
  let tot = 0;
  last14.forEach(k => {
    const dd = days[k];
    if (!dd?.completed) return;
    dd.completed.forEach(rid => {
      const r = rites.find(r => r.id === rid);
      if (r && sp[r.stat] !== undefined) { sp[r.stat] += r.pts; tot += r.pts; }
    });
  });
  if (!tot) return { archetype: null, ratios: Object.fromEntries(Object.keys(sp).map(k => [k, 0])), total: 0 };
  const ratios = Object.fromEntries(Object.entries(sp).map(([k, v]) => [k, v / tot]));
  let best = null, bestR = 0;
  ARCHETYPES.forEach(a => {
    if (ratios[a.dominantStat] >= a.threshold && ratios[a.dominantStat] > bestR) { best = a; bestR = ratios[a.dominantStat]; }
  });
  return { archetype: best, ratios, total: tot };
}

export const xpForLevel = l => l * l * 100;
export const computeLevel = xp => { let l = 1; while (xp >= xpForLevel(l + 1)) l++; return l; };

export const initState = () => ({
  profile: { name: "" },
  stats:   { corps: 40, esprit: 40, ambition: 40, social: 40, creation: 40 },
  xp: 0, rites: DEFAULT_RITES, days: {}, arcs: [], currentArc: null, setup: false,
});

// Icons are in src/icons.jsx (JSX required)
