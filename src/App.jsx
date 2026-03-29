import { useState, useEffect, useCallback } from "react";
import { CSS } from "./styles";
import { STATS_CONFIG, ARC_IMAGES } from "./constants";
import { today, getLocalDateStr, computeArchetype, xpForLevel, computeLevel, initState } from "./utils";
import { Ic } from "./icons";

import ScreenSetup       from "./screens/ScreenSetup";
import ScreenToday       from "./screens/ScreenToday";
import ScreenJournal     from "./screens/ScreenJournal";
import ScreenStats       from "./screens/ScreenStats";
import ScreenArcs        from "./screens/ScreenArcs";
import ScreenArch        from "./screens/ScreenArch";
import ScreenRiteLibrary from "./screens/ScreenRiteLibrary";
import ScreenNewArc      from "./screens/ScreenNewArc";
import ScreenNewRite     from "./screens/ScreenNewRite";

/**
 * Composant principal de l'application Codex.
 * Il gère l'état global (sauvegardé dans le localStorage) et la navigation entre les différents écrans.
 */
export default function App() {
  // ── État principal ──
  // L'état 'st' contient toutes les données persistantes du joueur (profil, stats, XP, règles, historique).
  // Initialisation paresseuse (lazy init) depuis le localStorage pour garantir la persistance des données sans ralentir le rendu.
  const [st, setSt] = useState(() => {
    try {
      const saved = localStorage.getItem("cx4");
      if (saved) {
        const parsed = JSON.parse(saved);
        // Migration rétrocompatible pour les anciennes datas v3 -> v4
        if (parsed.rites) parsed.rites = parsed.rites.map(r => ({ ...r, custom: r.custom ?? true }));
        return parsed;
      }
    } catch (e) { console.error('Erreur lecture localStorage:', e) }
    return initState();
  });

  const [screen,    setScreen]    = useState("today");
  const [jMode,     setJMode]     = useState("text");
  const [jText,     setJText]     = useState("");
  const [jMood,     setJMood]     = useState(null);
  const [drawPaths, setDrawPaths] = useState([]);
  const [curPath,   setCurPath]   = useState(null);
  const [drawing,   setDrawing]   = useState(false);
  const [dColor,    setDColor]    = useState("#1c1408");
  const [dTool,     setDTool]     = useState("pen");
  const [newRite,   setNewRite]   = useState({ name:"", stat:"esprit", pts:20, emoji:"⭐", desc:"" });
  const [newArc,    setNewArc]    = useState({ title:"", reward:"", rewardImg:ARC_IMAGES[0], target:500 });
  const [setupName, setSetupName] = useState("");
  const [libCat,    setLibCat]    = useState("corps");
  const [toast,     setToast]     = useState(null);

  const todayStr = today();
  const todayD   = st.days[todayStr] || { completed: [] };

  useEffect(() => { try { localStorage.setItem("cx4", JSON.stringify(st)); } catch {} }, [st]);
  useEffect(() => { if (!st.setup) setScreen("setup"); }, []);

  const pop = useCallback(msg => { setToast(msg); setTimeout(() => setToast(null), 2200); }, []);

  // ── Calculs dérivés ──
  // Ces valeurs sont recalculées dynamiquement à chaque rendu basé à 100% sur l'état brut `st`.
  
  // Archétype: Analysé mathématiquement selon les 14 derniers jours d'activité
  const archRes    = computeArchetype(st.days, st.rites);
  const activeArch = archRes.archetype;
  
  // Arc actuel: Le chapitre thématique en cours du joueur
  const activeArc  = st.arcs.find(a => a.id === st.currentArc && !a.won && !a.lost);
  const arcPct     = activeArc ? Math.min(100, Math.round((activeArc.pts / activeArc.target) * 100)) : 0;
  
  // Progression de Niveau global (XP)
  const level      = computeLevel(st.xp);
  const xpPct      = Math.round(((st.xp - xpForLevel(level)) / (xpForLevel(level + 1) - xpForLevel(level))) * 100);

  const streak = (() => {
    let s = 0, d = new Date();
    while (true) {
      const k = getLocalDateStr(d);
      if (st.days[k]?.completed?.length > 0) { s++; d.setDate(d.getDate() - 1); } else break;
    }
    return s;
  })();

  const streakDots = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(); d.setDate(d.getDate() - (6 - i));
    const k = getLocalDateStr(d);
    return { isToday: k === todayStr, done: (st.days[k]?.completed?.length || 0) > 0 };
  });

  const heatmap = Array.from({ length: 28 }, (_, i) => {
    const d = new Date(); d.setDate(d.getDate() - (27 - i));
    const k = getLocalDateStr(d);
    return { day: d.getDate(), count: st.days[k]?.completed?.length || 0, isToday: k === todayStr };
  });
  const hc = (n, t) => t ? "hct" : n===0?"hc0":n===1?"hc1":n===2?"hc2":n<=4?"hc3":"hc4";

  // ── Actions ──
  const toggleRite = rite => {
    const done = todayD.completed.includes(rite.id);
    setSt(s => {
      const day = s.days[todayStr] || { completed: [] };
      const completed = done ? day.completed.filter(r => r !== rite.id) : [...day.completed, rite.id];
      const newStats = { ...s.stats, [rite.stat]: Math.min(100, Math.max(0, s.stats[rite.stat] + (done?-1:1))) };
      const newXp = Math.max(0, s.xp + (done ? -rite.pts : rite.pts));
      let newArcs = s.arcs.map(a => a.id===s.currentArc ? {...a,pts:Math.max(0,(a.pts||0)+(done?-rite.pts:rite.pts))} : a);
      newArcs = newArcs.map(a => {
        if (a.id===s.currentArc && !a.won && !a.lost && (a.pts||0)>=a.target) {
          setTimeout(() => pop("🏆 Arc complété — récompense méritée !"), 300);
          return { ...a, won: true };
        }
        return a;
      });
      return { ...s, days:{...s.days,[todayStr]:{...day,completed}}, stats:newStats, xp:newXp, arcs:newArcs };
    });
    if (!done) pop(`+${rite.pts} · ${STATS_CONFIG.find(s=>s.key===rite.stat)?.label}`);
  };

  const deleteRite = (riteId, e) => { e.stopPropagation(); setSt(s=>({...s,rites:s.rites.filter(r=>r.id!==riteId)})); pop("Rite supprimé"); };

  const openJournal = () => {
    const d = st.days[todayStr] || {};
    setJText(d.journalText || ""); setJMood(d.mood ?? null); setDrawPaths(d.drawing || []);
    setScreen("journal");
  };

  const saveJournal = () => {
    setSt(s => ({ ...s, days: { ...s.days, [todayStr]: { ...(s.days[todayStr]||{completed:[]}), journalText:jText, mood:jMood, drawing:drawPaths } } }));
    pop("📖 Entrée sauvegardée"); setScreen("today");
  };

  const doSetup = () => {
    if (!setupName.trim()) return;
    setSt(s => ({ ...s, profile:{ name:setupName }, setup:true })); setScreen("today");
  };

  const doAddRite = () => {
    if (!newRite.name.trim()) return;
    setSt(s => ({ ...s, rites:[...s.rites,{id:"r"+Date.now(),...newRite,custom:true}] }));
    setNewRite({ name:"", stat:"esprit", pts:20, emoji:"⭐", desc:"" }); pop("✅ Rite ajouté"); setScreen("today");
  };

  const addRiteFromLib = rite => {
    if (st.rites.some(r=>r.id===rite.id)) { pop("Déjà dans ta liste"); return; }
    setSt(s => ({ ...s, rites:[...s.rites,{...rite,custom:false}] })); pop(`✅ "${rite.name}" ajouté`);
  };

  const doAddArc = () => {
    if (!newArc.title.trim()||!newArc.reward.trim()) return;
    const arc = { id:"arc"+Date.now(), ...newArc, pts:0, won:false, lost:false, startDate:todayStr };
    setSt(s=>({...s,arcs:[...s.arcs,arc],currentArc:arc.id})); pop("⚔️ Arc lancé !"); setScreen("arcs");
  };

  // ── Nav ──
  const Nav = () => (
    <nav className="nav">
      {[
        { id:"today",   icon:Ic.today,   lbl:"Aujourd'hui" },
        { id:"journal", icon:Ic.journal, lbl:"Journal" },
        { id:"stats",   icon:Ic.stats,   lbl:"Stats" },
        { id:"arcs",    icon:Ic.arcs,    lbl:"Arcs" },
        { id:"arch",    icon:Ic.arch,    lbl:"Archétypes" },
      ].map(n => (
        <button key={n.id} className={`nb ${screen===n.id?"active":""}`} onClick={()=>setScreen(n.id)}>
          {n.icon}<span>{n.lbl}</span>
        </button>
      ))}
    </nav>
  );

  if (!st.setup) return (
    <div><style>{CSS}</style>
      <ScreenSetup setupName={setupName} setSetupName={setSetupName} doSetup={doSetup} />
    </div>
  );

  // Enrichir st avec les handlers de bibliothèque
  const stEnriched = { ...st, _libCat: libCat, _setLibCat: setLibCat };

  return (
    <div><style>{CSS}</style>
      {toast && <div className="toast">{toast}</div>}

      <ScreenToday
        st={st} screen={screen} setScreen={setScreen}
        todayD={todayD} todayStr={todayStr} activeArc={activeArc} arcPct={arcPct}
        streak={streak} streakDots={streakDots}
        toggleRite={toggleRite} deleteRite={deleteRite} openJournal={openJournal} Ic={Ic}
      />
      {screen === "today" && <Nav />}

      <ScreenJournal
        screen={screen} setScreen={setScreen} todayStr={todayStr}
        jMode={jMode} setJMode={setJMode} jText={jText} setJText={setJText}
        jMood={jMood} setJMood={setJMood} drawPaths={drawPaths} setDrawPaths={setDrawPaths}
        curPath={curPath} setCurPath={setCurPath} drawing={drawing} setDrawing={setDrawing}
        dColor={dColor} setDColor={setDColor} dTool={dTool} setDTool={setDTool}
        saveJournal={saveJournal} Ic={Ic}
      />

      <ScreenStats
        screen={screen} st={st} activeArch={activeArch} archRes={archRes}
        level={level} xpPct={xpPct} heatmap={heatmap} hc={hc} xpForLevel={xpForLevel}
      />
      {screen === "stats" && <Nav />}

      <ScreenArcs screen={screen} setScreen={setScreen} st={st} activeArc={activeArc} arcPct={arcPct} todayStr={todayStr} />
      {screen === "arcs" && <Nav />}

      <ScreenArch screen={screen} activeArch={activeArch} archRes={archRes} />
      {screen === "arch" && <Nav />}

      <ScreenRiteLibrary screen={screen} setScreen={setScreen} st={stEnriched} addRiteFromLib={addRiteFromLib} Ic={Ic} />

      <ScreenNewArc screen={screen} setScreen={setScreen} newArc={newArc} setNewArc={setNewArc} doAddArc={doAddArc} />

      <ScreenNewRite screen={screen} setScreen={setScreen} newRite={newRite} setNewRite={setNewRite} doAddRite={doAddRite} />
    </div>
  );
}
