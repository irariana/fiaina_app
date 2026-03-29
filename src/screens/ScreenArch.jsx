import { ARCHETYPES } from "../constants";

export default function ScreenArch({ screen, activeArch, archRes }) {
  return (
    <div className={`screen ${screen === "arch" ? "active" : ""}`}>
      <div className="scroll">

        <div className="arch-page-intro">
          <div className="today-date" style={{ marginBottom: 2 }}>Archétypes</div>
          <div className="today-title">Qui deviens-tu ?</div>
          <div className="arch-intro-txt">
            Ton archétype n'est pas choisi — il émerge de tes habitudes des 14 derniers jours.
            Continue les mêmes rites chaque semaine pour le garder.
          </div>
        </div>

        <div className="sdiv"><span className="sdiv-txt">Les 5 archétypes</span></div>

        {ARCHETYPES.map(a => {
          const isActive = activeArch?.id === a.id;
          const myRatio = archRes.ratios[a.dominantStat] || 0;
          const pct = Math.min(100, Math.round((myRatio / a.threshold) * 100));
          return (
            <div key={a.id} className={`acard ${isActive ? "acard-active" : ""}`}>
              <img
                className="acard-img"
                src={a.image}
                alt={a.name}
                onError={e => { e.target.style.background = a.palette; e.target.style.height = "60px"; }}
              />
              <div className="acard-overlay">
                {isActive && (
                  <div className="active-badge">
                    <div style={{ width:5, height:5, borderRadius:"50%", background:"var(--goldl)" }} />
                    <span>Ton archétype actuel</span>
                  </div>
                )}
                <div className="acard-lat">{a.latin}</div>
                <div className="acard-name">{a.emoji} {a.name}</div>
                <div className="acard-desc">{a.description}</div>
                <div className="acard-cond-lbl">Pour l'obtenir</div>
                <div className="acard-cond">{a.condition}</div>
                <div className="acard-maintain">{a.maintain}</div>
                <div className="acard-prog">
                  <div className="acard-bar"><div className="acard-bar-fill" style={{ width: pct + "%" }} /></div>
                  <div className="acard-pct">{pct}%</div>
                </div>
              </div>
            </div>
          );
        })}

        <div style={{ height: 20 }} />
      </div>
    </div>
  );
}
