import { ARC_IMAGES } from "../constants";

export default function ScreenNewArc({ screen, setScreen, newArc, setNewArc, doAddArc }) {
  return (
    <div className={`screen ${screen === "newArc" ? "active" : ""}`}>
      <div className="scroll">
        <div className="form-wrap">

          <div>
            <div className="form-h">Nouvel arc</div>
            <div className="form-sub">Définis le chapitre et la récompense que tu mériteras si tu le complètes.</div>
          </div>

          <div>
            <label className="form-lbl">Titre de l'arc</label>
            <input
              className="form-in"
              placeholder="Ex : L'Éveil du Bâtisseur"
              value={newArc.title}
              onChange={e => setNewArc(n => ({ ...n, title: e.target.value }))}
            />
          </div>

          <div>
            <label className="form-lbl">Ta récompense</label>
            <input
              className="form-in"
              placeholder="Ex : Weekend à Lisbonne"
              value={newArc.reward}
              onChange={e => setNewArc(n => ({ ...n, reward: e.target.value }))}
            />
          </div>

          <div>
            <label className="form-lbl">Ambiance visuelle</label>
            <div className="img-grid">
              {ARC_IMAGES.map((img, i) => (
                <div
                  key={i}
                  className={`img-thumb ${newArc.rewardImg === img ? "sel" : ""}`}
                  onClick={() => setNewArc(n => ({ ...n, rewardImg: img }))}
                >
                  <img
                    src={img}
                    alt={`Ambiance ${i + 1}`}
                    onError={e => { e.target.parentElement.style.background = "var(--paper3)"; }}
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="form-lbl">Objectif de points</label>
            <select
              className="form-sel"
              value={newArc.target}
              onChange={e => setNewArc(n => ({ ...n, target: +e.target.value }))}
            >
              <option value={200}>200 pts — Court (~1 semaine)</option>
              <option value={500}>500 pts — Moyen (~2 semaines)</option>
              <option value={750}>750 pts — Long (~3 semaines)</option>
              <option value={1000}>1000 pts — Épique (~1 mois)</option>
            </select>
          </div>

          <button className="form-btn" onClick={doAddArc}>⚔️ Lancer l'arc</button>
          <button className="form-cancel" onClick={() => setScreen("arcs")}>Annuler</button>

        </div>
      </div>
    </div>
  );
}
