import { fmtDate } from "../utils";

export default function ScreenArcs({ screen, setScreen, st, activeArc, arcPct, todayStr }) {
  return (
    <div className={`screen ${screen === "arcs" ? "active" : ""}`}>
      <div className="scroll">

        <div className="today-hero">
          <div className="today-date" style={{ marginBottom: 2 }}>Tes chapitres</div>
          <div className="today-title">L'histoire</div>
        </div>

        <div className="info-box">
          <p>Un arc = un objectif, une vraie récompense. Tu la mérites seulement si tu atteins le seuil de points.</p>
        </div>

        {activeArc ? (
          <div className="arc-hero">
            <img className="arc-hero-img" src={activeArc.rewardImg} alt="" onError={e => { e.target.style.display = "none"; }} />
            <div className="arc-hero-body">
              <div className="arc-live">
                <div className="arc-dot" />
                <span className="mono" style={{ fontSize:8, letterSpacing:".15em", color:"var(--gold)", textTransform:"uppercase" }}>En cours</span>
              </div>
              <div className="arc-h-name">"{activeArc.title}"</div>
              <div className="arc-rwd2">
                <div className="arc-rwd2-img">
                  <img src={activeArc.rewardImg} alt="" onError={e => { e.target.style.display = "none"; }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div className="arc-rwd2-ey">Récompense</div>
                  <div className="arc-rwd2-n">{activeArc.reward}</div>
                </div>
                <div className="arc-pct">{arcPct}%</div>
              </div>
              <div className="prog-track"><div className="prog-fill" style={{ width: arcPct + "%" }} /></div>
              <div className="prog-row" style={{ marginTop: 4 }}>
                <span className="mono" style={{ fontSize:9, color:"#5a4028" }}>{activeArc.pts} / {activeArc.target} pts</span>
              </div>
              {activeArc.won && (
                <div style={{ marginTop:12, padding:"10px 12px", background:"#1a3a1022", borderRadius:8 }}>
                  <span className="serif" style={{ fontStyle:"italic", fontSize:15, color:"#4a9a4a" }}>🏆 Arc complété — récompense méritée.</span>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div style={{ margin:"0 20px 14px", padding:20, background:"var(--cream)", border:"1px solid var(--line)", borderRadius:12, textAlign:"center" }}>
            <div className="display" style={{ fontStyle:"italic", fontSize:16, color:"var(--ink3)", marginBottom:4 }}>Aucun arc en cours</div>
            <div className="serif" style={{ fontStyle:"italic", fontSize:14, color:"var(--ink3)" }}>Lance un chapitre pour te donner un enjeu</div>
          </div>
        )}

        <div className="new-arc-strip" onClick={() => setScreen("newArc")}>
          <div className="eyebrow" style={{ fontSize: 9 }}>⚔️ Nouveau chapitre</div>
          <p>Commencer un arc narratif</p>
        </div>

        {st.arcs.filter(a => a.id !== st.currentArc || a.won || a.lost).length > 0 && (
          <>
            <div className="past-lbl">Chapitres passés</div>
            {st.arcs.filter(a => a.id !== st.currentArc || a.won || a.lost).map(a => (
              <div key={a.id} className="past-row">
                <div className="past-thumb">
                  <img src={a.rewardImg} alt="" onError={e => { e.target.style.display = "none"; }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div className="past-title">"{a.title}"</div>
                  <div className="past-dates">{fmtDate(a.startDate)} · {a.target} pts</div>
                </div>
                <div className="past-status" style={{ color: a.won ? "var(--gold)" : "var(--ink3)" }}>
                  {a.won ? "✓ Gagné" : "✗ Incomplet"}<br />
                  <span style={{ fontSize: 9 }}>{a.pts}/{a.target}</span>
                </div>
              </div>
            ))}
          </>
        )}

      </div>
    </div>
  );
}
