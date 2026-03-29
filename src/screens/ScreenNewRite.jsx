import { STATS_CONFIG } from "../constants";

export default function ScreenNewRite({ screen, setScreen, newRite, setNewRite, doAddRite }) {
  const EMOJIS = ["🏃","📚","⚡","📞","✍️","🌅","🧘","💪","🎯","🥗","💤","🎨","🤝","🎵","🏊","📝","🌿","🚴","🥊","📷","🖊️","🍽️","🎬","💻","⭐","🌟","🔥","✨","🚀","🌈"];
  const sc = STATS_CONFIG.find(s => s.key === newRite.stat);

  return (
    <div className={`screen ${screen === "newRite" ? "active" : ""}`}>
      <div className="scroll">
        <div className="form-wrap">

          <div>
            <div className="form-h">Nouveau rite</div>
            <div className="form-sub">Une habitude à ancrer dans ton quotidien.</div>
          </div>

          <div>
            <label className="form-lbl">Nom du rite</label>
            <input
              className="form-in"
              placeholder="Ex : Méditer 10 minutes"
              value={newRite.name}
              onChange={e => setNewRite(n => ({ ...n, name: e.target.value }))}
              autoFocus
            />
          </div>

          <div>
            <label className="form-lbl">Description courte (optionnel)</label>
            <input
              className="form-in"
              placeholder="Ex : Yeux fermés, pas de musique"
              value={newRite.desc}
              onChange={e => setNewRite(n => ({ ...n, desc: e.target.value }))}
            />
          </div>

          <div>
            <label className="form-lbl">Emoji</label>
            <div style={{ display:"flex", gap:8, flexWrap:"wrap" }}>
              {EMOJIS.map(e => (
                <div
                  key={e}
                  onClick={() => setNewRite(n => ({ ...n, emoji: e }))}
                  style={{
                    width:36, height:36, borderRadius:8,
                    background: newRite.emoji === e ? "var(--ink)" : "var(--paper2)",
                    border:"1px solid var(--line)",
                    display:"flex", alignItems:"center", justifyContent:"center",
                    fontSize:18, cursor:"pointer", transition:"all .15s"
                  }}
                >
                  {e}
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="form-lbl">Attribut lié</label>
            <select className="form-sel" value={newRite.stat} onChange={e => setNewRite(n => ({ ...n, stat: e.target.value }))}>
              {STATS_CONFIG.map(s => <option key={s.key} value={s.key}>{s.emoji} {s.label}</option>)}
            </select>
          </div>

          <div>
            <label className="form-lbl">Points</label>
            <select className="form-sel" value={newRite.pts} onChange={e => setNewRite(n => ({ ...n, pts: +e.target.value }))}>
              <option value={10}>+10 — Petit effort quotidien</option>
              <option value={15}>+15 — Effort léger</option>
              <option value={20}>+20 — Effort régulier</option>
              <option value={25}>+25 — Effort solide</option>
              <option value={30}>+30 — Effort significatif</option>
              <option value={35}>+35 — Effort important</option>
              <option value={50}>+50 — Grand effort</option>
              <option value={75}>+75 — Exploit</option>
            </select>
          </div>

          <div style={{ background:"var(--cream)", border:"1px solid var(--line)", borderRadius:10, padding:"12px 14px" }}>
            <div className="eyebrow" style={{ fontSize:8, marginBottom:8 }}>Aperçu</div>
            <div style={{ display:"flex", alignItems:"center", gap:12 }}>
              <span style={{ fontSize:20 }}>{newRite.emoji}</span>
              <div style={{ flex:1 }}>
                <div className="rite-name">{newRite.name || "Nom du rite…"}</div>
                <div className="rite-meta" style={{ color: sc?.color }}>
                  {sc?.label}{newRite.desc ? ` · ${newRite.desc}` : ""}
                </div>
              </div>
              <div className="rite-pts">+{newRite.pts}</div>
            </div>
          </div>

          <button className="form-btn" onClick={doAddRite}>✅ Ajouter le rite</button>
          <button className="form-cancel" onClick={() => setScreen("today")}>Annuler</button>

        </div>
      </div>
    </div>
  );
}
