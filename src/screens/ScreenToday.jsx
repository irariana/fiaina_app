import { STATS_CONFIG } from "../constants";
import { fmtDate, dayTitle } from "../utils";

export default function ScreenToday({
  st, screen, setScreen, todayD, todayStr, activeArc, arcPct,
  streak, streakDots, toggleRite, deleteRite, openJournal, Ic
}) {
  return (
    <div className={`screen ${screen === "today" ? "active" : ""}`}>
      <div className="scroll">

        <div className="today-hero">
          <div className="today-chapter">{activeArc ? activeArc.title : "Codex"}</div>
          <div className="today-title">{dayTitle(todayStr)}</div>
          <div className="today-date">{fmtDate(todayStr)}</div>
        </div>

        <div className="streak-strip">
          <div style={{ flex: 1 }}>
            <div className="streak-num">🔥 {streak}</div>
            <div className="streak-sub">jours de suite</div>
          </div>
          <div style={{ display: "flex", gap: 5 }}>
            {streakDots.map((d, i) => (
              <div key={i} className={`spip ${d.isToday ? "now" : d.done ? "on" : "off"}`} />
            ))}
          </div>
        </div>

        <div className="info-box">
          <p>Coche tes rites chaque jour. Chaque complétion fait monter une stat et accumule des points vers ta récompense d'arc.</p>
        </div>

        <div className="sdiv" style={{ paddingRight: 8 }}>
          <span className="sdiv-txt">Rites du jour</span>
          <button
            style={{ border:"none", background:"transparent", cursor:"pointer", padding:"4px 6px", marginLeft:2, display:"flex", alignItems:"center", gap:4 }}
            onClick={() => setScreen("riteLibrary")}
            title="Bibliothèque de rites"
          >
            {Ic.book}
          </button>
          <button
            style={{ border:"none", background:"transparent", cursor:"pointer", padding:"4px 6px" }}
            onClick={() => setScreen("newRite")}
            title="Créer un rite"
          >
            {Ic.plus}
          </button>
        </div>

        {st.rites.map(r => {
          const done = todayD.completed.includes(r.id);
          const sc = STATS_CONFIG.find(s => s.key === r.stat);
          return (
            <div key={r.id} className="rite" onClick={() => toggleRite(r)}>
              <div className="rite-emoji">{r.emoji || sc?.emoji}</div>
              <div className={`rite-check ${done ? "done" : ""}`} />
              <div className="rite-body">
                <div className={`rite-name ${done ? "done" : ""}`}>{r.name}</div>
                <div className="rite-meta" style={{ color: sc?.color }}>
                  {sc?.emoji} {sc?.label}{r.desc ? ` · ${r.desc}` : ""}
                </div>
              </div>
              <div className="rite-pts">+{r.pts}</div>
              <button className="rite-del" onClick={e => deleteRite(r.id, e)} title="Supprimer ce rite">
                {Ic.trash}
              </button>
            </div>
          );
        })}

        {st.rites.length === 0 && (
          <div style={{ padding: "20px", textAlign: "center" }}>
            <div className="serif" style={{ fontStyle: "italic", fontSize: 15, color: "var(--ink3)" }}>
              Aucun rite pour l'instant.
            </div>
            <div
              style={{ marginTop: 10, cursor: "pointer", color: "var(--gold)", fontFamily: "'IBM Plex Mono', monospace", fontSize: 10, letterSpacing: ".1em" }}
              onClick={() => setScreen("riteLibrary")}
            >
              → Parcourir la bibliothèque
            </div>
          </div>
        )}

        <div className="sdiv"><span className="sdiv-txt">Entrée du jour</span></div>
        <div className="jcard" onClick={openJournal}>
          <div className="jcard-top">
            <div className="jcard-lbl">Journal</div>
            <div className="jm-row">
              {["✍️","📷","🎙️","✏️"].map((e,i) => <div key={i} className="jm-dot">{e}</div>)}
            </div>
          </div>
          <div className="jpreview">
            {todayD.journalText
              ? todayD.journalText.slice(0, 90) + (todayD.journalText.length > 90 ? "…" : "")
              : "Qu'est-ce qui s'est passé aujourd'hui ?"}
          </div>
        </div>

        {activeArc ? (
          <div className="arc-card">
            <img className="arc-card-img" src={activeArc.rewardImg} alt="" onError={e => { e.target.style.display = "none"; }} />
            <div className="arc-card-body">
              <div className="arc-eyebrow">⚔️ Arc en cours</div>
              <div className="arc-title-txt">"{activeArc.title}"</div>
              <div className="prog-row" style={{ marginBottom: 4 }}>
                <span className="mono" style={{ fontSize: 9, color: "#5a4028" }}>{activeArc.pts} / {activeArc.target} pts</span>
                <span className="mono" style={{ fontSize: 9, color: "var(--goldl)" }}>{arcPct}%</span>
              </div>
              <div className="prog-track"><div className="prog-fill" style={{ width: arcPct + "%" }} /></div>
              <div className="arc-rwd-row">
                <div className="arc-rwd-img">
                  <img src={activeArc.rewardImg} alt="" onError={e => { e.target.style.display = "none"; }} />
                </div>
                <div className="arc-rwd-name">{activeArc.reward}</div>
              </div>
            </div>
          </div>
        ) : (
          <div className="no-arc" onClick={() => setScreen("newArc")}>
            <div className="eyebrow" style={{ fontSize: 9 }}>Aucun arc en cours</div>
            <p>Commencer un arc →</p>
          </div>
        )}

      </div>
      {/* Nav injected by parent */}
    </div>
  );
}
