import { STATS_CONFIG } from "../constants";

export default function ScreenStats({ screen, st, activeArch, archRes, level, xpPct, heatmap, hc, xpForLevel }) {
  return (
    <div className={`screen ${screen === "stats" ? "active" : ""}`}>
      <div className="scroll">

        {activeArch ? (
          <div className="arch-banner">
            <img
              src={activeArch.image}
              alt={activeArch.name}
              onError={e => { e.target.style.background = activeArch.palette; e.target.style.height = "170px"; }}
            />
            <div className="arch-banner-txt">
              <div className="arch-banner-sub">Ton archétype</div>
              <div className="arch-banner-name">{activeArch.emoji} {activeArch.name}</div>
              <div className="arch-banner-latin">{activeArch.latin}</div>
            </div>
          </div>
        ) : (
          <div className="arch-none-banner">
            <div className="eyebrow" style={{ fontSize: 9, marginBottom: 8 }}>Archétype</div>
            <div className="display" style={{ fontStyle:"italic", fontSize:20, color:"var(--ink3)", marginBottom:6 }}>Pas encore révélé</div>
            <div className="serif" style={{ fontStyle:"italic", fontSize:14, color:"var(--ink3)" }}>Continue tes rites. Il apparaîtra.</div>
          </div>
        )}

        <div className="char-row">
          <div className="char-name">{st.profile.name}</div>
          <div>
            <div className="char-lvl-n">{level}</div>
            <div className="char-lvl-l">Niveau</div>
          </div>
        </div>

        <div className="xp-wrap">
          <div className="xp-track"><div className="xp-fill" style={{ width: xpPct + "%" }} /></div>
          <div className="xp-row">
            <span>{st.xp} XP</span>
            <span>Prochain niveau : {xpForLevel(level + 1)} XP</span>
          </div>
        </div>

        <div className="info-box">
          <p>Chaque rite coché fait monter la stat liée et te donne de l'XP. Plus tu es régulier, plus tes stats progressent.</p>
        </div>

        <div className="sdiv"><span className="sdiv-txt">Attributs</span></div>
        <div className="stat-list">
          {STATS_CONFIG.map(sc => (
            <div key={sc.key} className="stat-row">
              <div className="stat-emoji">{sc.emoji}</div>
              <div className="stat-lbl">{sc.label}</div>
              <div className="stat-bar">
                <div className="stat-fill" style={{ width: st.stats[sc.key] + "%", background: sc.color }} />
              </div>
              <div className="stat-val" style={{ color: sc.color }}>{st.stats[sc.key]}</div>
            </div>
          ))}
        </div>

        <div className="hm-wrap">
          <div className="hm-title">28 derniers jours</div>
          <div className="hm-grid">
            {heatmap.map((d, i) => (
              <div key={i} className={`hm-cell ${hc(d.count, d.isToday)}`}>{d.day}</div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
