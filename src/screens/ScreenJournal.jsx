import { useRef } from "react";
import { MOODS } from "../constants";
import { fmtDate, dayTitle } from "../utils";

export default function ScreenJournal({
  screen, setScreen, todayStr,
  jMode, setJMode, jText, setJText, jMood, setJMood,
  drawPaths, setDrawPaths, curPath, setCurPath,
  drawing, setDrawing, dColor, setDColor, dTool, setDTool,
  saveJournal, Ic
}) {
  const svgRef = useRef(null);

  const pt = (e, el) => {
    const r = el.getBoundingClientRect();
    const t = e.touches?.[0] ?? e;
    return {
      x: +((t.clientX - r.left) / r.width * 300).toFixed(1),
      y: +((t.clientY - r.top) / r.height * 160).toFixed(1)
    };
  };
  const dStart = e => {
    e.preventDefault();
    if (!svgRef.current) return;
    setDrawing(true);
    setCurPath({ color: dColor, tool: dTool, pts: [pt(e, svgRef.current)] });
  };
  const dMove = e => {
    e.preventDefault();
    if (!drawing || !curPath) return;
    setCurPath(c => ({ ...c, pts: [...c.pts, pt(e, svgRef.current)] }));
  };
  const dEnd = e => {
    e.preventDefault();
    if (!drawing || !curPath) return;
    setDrawing(false);
    setDrawPaths(ps => [...ps, curPath]);
    setCurPath(null);
  };
  const pathD = pts => {
    if (!pts || pts.length < 2) return "";
    return `M${pts[0].x} ${pts[0].y}` + pts.slice(1).map(p => ` L${p.x} ${p.y}`).join("");
  };

  return (
    <div className={`screen ${screen === "journal" ? "active" : ""}`}>
      <div className="scroll">
        <div className="jhead">
          <div className="back-btn" onClick={() => setScreen("today")}>{Ic.back}</div>
          <div className="eyebrow">{fmtDate(todayStr)}</div>
        </div>

        <div className="jtitle">"{dayTitle(todayStr)}"</div>

        <div className="info-box" style={{ margin: "12px 20px" }}>
          <p>Écris, dessine, enregistre — chaque mode capture ta journée différemment.</p>
        </div>

        <div className="mtabs">
          {[
            { id: "text",  e: "✍️", l: "Texte" },
            { id: "photo", e: "📷", l: "Photo" },
            { id: "voice", e: "🎙️", l: "Vocal" },
            { id: "draw",  e: "✏️", l: "Dessin" },
          ].map(t => (
            <div key={t.id} className={`mtab ${jMode === t.id ? "on" : ""}`} onClick={() => setJMode(t.id)}>
              <span className="mtab-emoji">{t.e}</span><span>{t.l}</span>
            </div>
          ))}
        </div>

        {jMode === "text" && (
          <>
            <div className="txt-wrap">
              <textarea
                className="txt-area"
                rows={7}
                placeholder="Ce qui s'est passé, ce que tu ressens, ce qui compte…"
                value={jText}
                onChange={e => setJText(e.target.value)}
              />
            </div>
            <div className="sdiv"><span className="sdiv-txt">Humeur</span></div>
            <div className="mood-row">
              {MOODS.map((m, i) => (
                <button key={i} className={`mood-btn ${jMood === i ? "sel" : ""}`} onClick={() => setJMood(i)}>{m}</button>
              ))}
            </div>
          </>
        )}

        {jMode === "photo" && (
          <div style={{ margin:"0 20px 14px", background:"var(--cream)", border:"1px dashed var(--line)", borderRadius:10, height:160, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:8, cursor:"pointer" }}>
            <span style={{ fontSize: 32 }}>📷</span>
            <div className="eyebrow" style={{ fontSize: 9 }}>Ajouter une photo</div>
            <div className="serif" style={{ fontStyle:"italic", fontSize:13, color:"var(--ink3)", textAlign:"center", padding:"0 24px" }}>
              Disponible dans la version mobile native.
            </div>
          </div>
        )}

        {jMode === "voice" && (
          <div className="voice-wrap">
            <div className="wv">
              {[20,50,35,70,90,60,80,45,65,40,75,55,30,60].map((h,i) => (
                <div key={i} className="wb" style={{ height:h+"%", background: i>5&&i<9?"var(--red)":"var(--line)" }} />
              ))}
            </div>
            <div className="vctrls">
              <div style={{ width:34,height:34,borderRadius:"50%",background:"var(--paper2)",border:"1px solid var(--line)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,cursor:"pointer" }}>▶</div>
              <div style={{ width:50,height:50,borderRadius:"50%",background:"var(--red)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,cursor:"pointer",boxShadow:"0 4px 12px rgba(139,46,26,.3)" }}>⏸</div>
              <div className="mono" style={{ fontSize:12,color:"var(--ink3)" }}>0:00</div>
            </div>
            <div className="vnote">Enregistrement vocal disponible en version mobile</div>
          </div>
        )}

        {jMode === "draw" && (
          <div className="draw-wrap">
            <div
              className="draw-cnv"
              ref={svgRef}
              onMouseDown={dStart} onMouseMove={dMove} onMouseUp={dEnd} onMouseLeave={dEnd}
              onTouchStart={dStart} onTouchMove={dMove} onTouchEnd={dEnd}
            >
              <svg viewBox="0 0 300 160">
                {drawPaths.map((p, i) => (
                  <path key={i} d={pathD(p.pts)} fill="none"
                    stroke={p.tool === "erase" ? "var(--cream)" : p.color}
                    strokeWidth={p.tool === "erase" ? 18 : 2}
                    strokeLinecap="round" strokeLinejoin="round"
                  />
                ))}
                {curPath && (
                  <path d={pathD(curPath.pts)} fill="none"
                    stroke={curPath.tool === "erase" ? "var(--cream)" : curPath.color}
                    strokeWidth={curPath.tool === "erase" ? 18 : 2}
                    strokeLinecap="round" strokeLinejoin="round"
                  />
                )}
              </svg>
              {drawPaths.length === 0 && !drawing && <div className="draw-hint">Esquisse libre…</div>}
            </div>
            <div className="dbar">
              {[{id:"pen",l:"✏️"},{id:"brush",l:"🖌️"},{id:"erase",l:"⬜"}].map(t => (
                <div key={t.id} className={`dtool ${dTool===t.id?"on":""}`} onClick={() => setDTool(t.id)}>{t.l}</div>
              ))}
              <div style={{ width:1,height:18,background:"var(--line)",margin:"0 2px" }} />
              {["#1c1408","#8b2e1a","#b8841e","#2a4a6b","#4a2a6b","#2a5a3a"].map(c => (
                <div key={c} className={`dcolor ${dColor===c?"sel":""}`} style={{ background:c }} onClick={() => setDColor(c)} />
              ))}
              <button className="dclear" onClick={() => setDrawPaths([])}>Effacer</button>
            </div>
          </div>
        )}

        <button className="save-btn" onClick={saveJournal}>Sauvegarder →</button>
      </div>
    </div>
  );
}
