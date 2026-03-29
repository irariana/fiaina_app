import { IMG } from "../constants";

export default function ScreenSetup({ setupName, setSetupName, doSetup }) {
  return (
    <div className="setup">
      <img
        className="setup-img"
        src={IMG.setup}
        alt="Paysage montagneux"
        onError={e => {
          e.target.style.display = "none";
          e.target.parentElement.style.background = "linear-gradient(180deg, #3a2010 0%, #1c1408 100%)";
          e.target.parentElement.style.height = "260px";
        }}
      />
      <div className="setup-body">
        <div className="setup-logo">Co<span>dex</span></div>
        <div className="setup-tag">
          Ton journal de vie.<br />
          Tes arcs. Ton archétype, révélé par tes actes.
        </div>
        <label className="setup-lbl">Ton prénom</label>
        <input
          className="setup-in"
          placeholder="Comment tu t'appelles ?"
          value={setupName}
          onChange={e => setSetupName(e.target.value)}
          onKeyDown={e => e.key === "Enter" && doSetup()}
          autoFocus
        />
        <div className="setup-note">
          Ton archétype ne se choisit pas. Il émerge de ce que tu fais chaque jour.
        </div>
        <button className="setup-btn" onClick={doSetup}>
          Ouvrir le Codex →
        </button>
      </div>
    </div>
  );
}
