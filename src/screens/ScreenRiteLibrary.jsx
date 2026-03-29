import { STATS_CONFIG, RITES_LIBRARY } from "../constants";

export default function ScreenRiteLibrary({ screen, setScreen, st, addRiteFromLib, Ic }) {
  const libCat = st._libCat || "corps";

  return (
    <div className={`screen ${screen === "riteLibrary" ? "active" : ""}`}>
      <div className="scroll">
        <div className="jhead">
          <div className="back-btn" onClick={() => setScreen("today")}>{Ic.back}</div>
          <div className="eyebrow">Bibliothèque</div>
        </div>

        <div style={{ padding: "8px 20px 0" }}>
          <div className="today-title" style={{ fontSize: 26 }}>Rites disponibles</div>
          <div className="today-date" style={{ marginTop: 4, marginBottom: 12 }}>
            Ajoute ceux qui correspondent à ta vie
          </div>
        </div>

        <div className="lib-tabs">
          {STATS_CONFIG.map(sc => (
            <div
              key={sc.key}
              className={`lib-tab ${libCat === sc.key ? "on" : ""}`}
              onClick={() => st._setLibCat(sc.key)}
            >
              {sc.emoji} {sc.label}
            </div>
          ))}
        </div>

        {(RITES_LIBRARY[libCat] || []).map(rite => {
          const added = st.rites.some(r => r.id === rite.id);
          const sc = STATS_CONFIG.find(s => s.key === rite.stat);
          return (
            <div key={rite.id} className="lib-rite">
              <div style={{ fontSize: 20, width: 28, textAlign: "center", flexShrink: 0 }}>{rite.emoji}</div>
              <div className="lib-rite-body">
                <div className="lib-rite-name">{rite.name}</div>
                <div className="lib-rite-meta" style={{ color: sc?.color }}>
                  {sc?.label} · {rite.desc} · +{rite.pts} pts
                </div>
              </div>
              <button
                className={`lib-add-btn ${added ? "added" : ""}`}
                onClick={() => !added && addRiteFromLib(rite)}
              >
                {added ? "✓ Ajouté" : "+ Ajouter"}
              </button>
            </div>
          );
        })}

        <div className="sdiv" style={{ marginTop: 8 }}><span className="sdiv-txt">Rite personnalisé</span></div>

        <div className="lib-custom-cta" onClick={() => setScreen("newRite")}>
          <div style={{ fontSize: 28, marginBottom: 8 }}>✨</div>
          <div className="form-h">Créer ton propre rite</div>
          <div className="form-sub" style={{ marginTop: 4 }}>
            Une habitude qui ne figure pas dans la liste ? Crée la toi-même.
          </div>
        </div>

        <div style={{ height: 30 }} />
      </div>
    </div>
  );
}
