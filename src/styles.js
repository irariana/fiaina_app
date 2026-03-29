/**
 * 🎨 SYSTEME DE DESIGN - STYLES GLOBAUX
 * L'application utilise une approche de "CSS in JS" basique par injection dynamique.
 * Les variables CSS (--paper, --ink, etc.) contrôlent l'entièreté de l'ambiance visuelle du carnet.
 */
export const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Crimson+Pro:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=IBM+Plex+Mono:wght@300;400;500;600&display=swap');

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; -webkit-tap-highlight-color: transparent; -webkit-touch-callout: none; -webkit-user-select: none; user-select: none; }
input, textarea { -webkit-user-select: auto; user-select: auto; }

:root {
  --paper:  #f5ede0; --paper2: #ede3d0; --paper3: #e2d6c2; --cream:  #faf6ef;
  --ink:    #1c1408; --ink2:   #3a2e1e; --ink3:   #6a5a42; --line:   #d8cbb5;
  --red:    #8b1a0e; --redl:   #c0392b; --gold:   #b8841e; --goldl:  #d4a93a;
}

body { font-family: 'Crimson Pro', serif; background: var(--paper); color: var(--ink); max-width: 430px; margin: 0 auto; min-height: 100vh; overflow-x: hidden; overscroll-behavior-y: none; }

.screen { display: none; flex-direction: column; min-height: 100vh; }
.screen.active { display: flex; }
.scroll { flex: 1; overflow-y: auto; padding-bottom: 90px; -webkit-overflow-scrolling: touch; }

.nav { position: fixed; bottom: 0; left: 50%; transform: translateX(-50%); width: 100%; max-width: 430px; background: var(--cream); border-top: 1px solid var(--line); display: flex; justify-content: space-around; align-items: flex-end; padding: 10px 4px 20px; z-index: 300; }
.nb { display: flex; flex-direction: column; align-items: center; gap: 3px; cursor: pointer; border: none; background: transparent; padding: 4px 8px; }
.nb svg { width: 21px; height: 21px; stroke: var(--ink3); stroke-width: 1.5; fill: none; transition: stroke .15s; }
.nb.active svg { stroke: var(--red); }
.nb span { font-family: 'IBM Plex Mono', monospace; font-size: 7.5px; letter-spacing: .1em; text-transform: uppercase; color: var(--ink3); }
.nb.active span { color: var(--red); }

.toast { position: fixed; top: 18px; left: 50%; transform: translateX(-50%); background: var(--ink); color: var(--goldl); font-family: 'IBM Plex Mono', monospace; font-size: 11px; letter-spacing: .05em; padding: 9px 18px; border-radius: 20px; z-index: 999; animation: tfade .2s ease; pointer-events: none; white-space: nowrap; box-shadow: 0 8px 24px rgba(0,0,0,.3); }
@keyframes tfade { from { opacity: 0; transform: translateX(-50%) translateY(-8px); } to { opacity: 1; transform: translateX(-50%) translateY(0); } }

.eyebrow { font-family: 'IBM Plex Mono', monospace; font-size: 9px; letter-spacing: .22em; color: var(--ink3); text-transform: uppercase; }
.display { font-family: 'Playfair Display', serif; }
.serif   { font-family: 'Crimson Pro', serif; }
.mono    { font-family: 'IBM Plex Mono', monospace; }

.sdiv { display: flex; align-items: center; gap: 12px; padding: 14px 20px 10px; }
.sdiv::before, .sdiv::after { content: ''; flex: 1; height: 1px; background: var(--line); }
.sdiv-txt { font-family: 'Playfair Display', serif; font-size: 12px; font-style: italic; color: var(--ink3); white-space: nowrap; }

.info-box { margin: 0 20px 14px; background: var(--cream); border-left: 2px solid var(--gold); border-radius: 0 8px 8px 0; padding: 12px 14px; }
.info-box p { font-family: 'Crimson Pro', serif; font-style: italic; font-size: 15px; color: var(--ink3); line-height: 1.55; }

.setup { min-height: 100vh; display: flex; flex-direction: column; background: var(--paper); }
.setup-img { width: 100%; height: 260px; object-fit: cover; display: block; background: linear-gradient(180deg, #3a2010 0%, #1c1408 100%); }
.setup-body { flex: 1; padding: 28px 24px 40px; }
.setup-logo { font-family: 'Playfair Display', serif; font-size: 42px; font-style: italic; color: var(--ink); letter-spacing: -.02em; margin-bottom: 8px; }
.setup-logo span { color: var(--red); }
.setup-tag { font-family: 'Crimson Pro', serif; font-style: italic; font-size: 17px; color: var(--ink3); line-height: 1.5; margin-bottom: 28px; }
.setup-lbl { font-family: 'IBM Plex Mono', monospace; font-size: 9px; letter-spacing: .2em; text-transform: uppercase; color: var(--ink3); display: block; margin-bottom: 8px; }
.setup-in { width: 100%; background: var(--cream); border: 1px solid var(--line); border-radius: 10px; padding: 13px 14px; font-family: 'Playfair Display', serif; font-size: 18px; color: var(--ink); outline: none; margin-bottom: 16px; }
.setup-in:focus { border-color: var(--gold); }
.setup-note { font-family: 'Crimson Pro', serif; font-style: italic; font-size: 14px; color: var(--ink3); margin-bottom: 24px; line-height: 1.5; }
.setup-btn { width: 100%; background: var(--ink); color: var(--goldl); border: none; border-radius: 12px; padding: 15px; font-family: 'Playfair Display', serif; font-style: italic; font-size: 17px; cursor: pointer; transition: opacity .15s; }
.setup-btn:hover { opacity: .88; }

.today-hero { padding: 20px 20px 0; }
.today-chapter { font-family: 'IBM Plex Mono', monospace; font-size: 9px; letter-spacing: .18em; color: var(--red); text-transform: uppercase; margin-bottom: 4px; }
.today-title { font-family: 'Playfair Display', serif; font-size: 30px; font-style: italic; color: var(--ink); line-height: 1.1; margin-bottom: 2px; }
.today-date { font-family: 'IBM Plex Mono', monospace; font-size: 10px; color: var(--ink3); letter-spacing: .08em; }

.streak-strip { margin: 14px 20px; background: var(--ink); border-radius: 12px; padding: 13px 16px; display: flex; align-items: center; gap: 16px; }
.streak-num { font-family: 'Playfair Display', serif; font-size: 28px; color: var(--goldl); line-height: 1; }
.streak-sub { font-family: 'IBM Plex Mono', monospace; font-size: 8px; color: #4a3820; letter-spacing: .12em; text-transform: uppercase; margin-top: 2px; }
.spip { width: 8px; height: 8px; border-radius: 50%; }
.spip.on { background: var(--goldl); }
.spip.now { background: var(--red); box-shadow: 0 0 5px rgba(139,46,26,.6); }
.spip.off { background: #2a2010; }

.rite { display: flex; align-items: center; gap: 12px; padding: 12px 20px; border-bottom: 1px solid var(--line); cursor: pointer; transition: background .12s; -webkit-user-select: none; user-select: none; }
.rite:active, .rite:hover { background: var(--paper2); }
.rite-emoji { font-size: 18px; width: 26px; text-align: center; flex-shrink: 0; }
.rite-check { width: 20px; height: 20px; border-radius: 5px; border: 1.5px solid var(--line); flex-shrink: 0; display: flex; align-items: center; justify-content: center; transition: all .18s; }
.rite-check.done { background: var(--ink); border-color: var(--ink); }
.rite-check.done::after { content: ''; width: 5px; height: 9px; border-right: 1.5px solid var(--goldl); border-bottom: 1.5px solid var(--goldl); transform: rotate(40deg) translateY(-1px); }
.rite-body { flex: 1; }
.rite-name { font-family: 'Crimson Pro', serif; font-size: 16px; color: var(--ink); line-height: 1.2; }
.rite-name.done { text-decoration: line-through; color: var(--ink3); }
.rite-meta { font-family: 'IBM Plex Mono', monospace; font-size: 9px; color: var(--ink3); margin-top: 2px; }
.rite-pts  { font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: var(--gold); }
.rite-del { opacity: 0; padding: 4px; border: none; background: transparent; cursor: pointer; color: var(--ink3); transition: opacity .15s; }
.rite:hover .rite-del { opacity: .5; }
.rite-del:hover { opacity: 1 !important; color: var(--red); }

.jcard { margin: 14px 20px; border: 1px solid var(--line); border-radius: 12px; overflow: hidden; cursor: pointer; transition: box-shadow .2s; background: var(--cream); }
.jcard:hover { box-shadow: 0 4px 16px rgba(28,20,8,.1); }
.jcard-top { display: flex; align-items: center; justify-content: space-between; padding: 12px 14px 8px; }
.jcard-lbl { font-family: 'Playfair Display', serif; font-style: italic; font-size: 13px; color: var(--ink3); }
.jm-row { display: flex; gap: 5px; }
.jm-dot { width: 24px; height: 24px; border-radius: 6px; background: var(--paper3); border: 1px solid var(--line); display: flex; align-items: center; justify-content: center; font-size: 11px; }
.jpreview { padding: 0 14px 12px; font-family: 'Crimson Pro', serif; font-style: italic; font-size: 15px; color: var(--ink3); line-height: 1.5; }

.arc-card { margin: 0 20px 14px; background: var(--ink); border-radius: 12px; padding: 0; overflow: hidden; }
.arc-card-img { width: 100%; height: 90px; object-fit: cover; opacity: .5; display: block; background: #3a2010; }
.arc-card-body { padding: 14px; }
.arc-eyebrow { font-family: 'IBM Plex Mono', monospace; font-size: 9px; letter-spacing: .18em; color: var(--gold); text-transform: uppercase; margin-bottom: 4px; }
.arc-title-txt { font-family: 'Playfair Display', serif; font-style: italic; font-size: 17px; color: var(--paper); margin-bottom: 10px; line-height: 1.2; }
.prog-track { height: 3px; background: #2a1c0e; border-radius: 2px; overflow: hidden; margin-bottom: 4px; }
.prog-fill { height: 100%; background: linear-gradient(90deg, var(--gold), var(--goldl)); border-radius: 2px; transition: width .5s ease; }
.prog-row { display: flex; justify-content: space-between; }
.arc-rwd-row { display: flex; align-items: center; gap: 8px; margin-top: 12px; padding: 8px 10px; background: #b8841e14; border-radius: 8px; border: 1px solid #b8841e22; }
.arc-rwd-img { width: 30px; height: 30px; border-radius: 6px; overflow: hidden; flex-shrink: 0; background: #3a2010; }
.arc-rwd-img img { width: 100%; height: 100%; object-fit: cover; }
.arc-rwd-name { font-family: 'Playfair Display', serif; font-style: italic; font-size: 14px; color: var(--goldl); }
.no-arc { margin: 0 20px 14px; padding: 16px; border: 1px dashed var(--line); border-radius: 12px; text-align: center; cursor: pointer; }
.no-arc:hover { background: var(--paper2); }
.no-arc p { font-family: 'Playfair Display', serif; font-style: italic; font-size: 15px; color: var(--ink3); margin-top: 5px; }

.jhead { padding: 14px 20px 0; display: flex; align-items: center; gap: 12px; }
.back-btn { width: 30px; height: 30px; border-radius: 8px; background: var(--paper2); border: 1px solid var(--line); display: flex; align-items: center; justify-content: center; cursor: pointer; flex-shrink: 0; }
.back-btn svg { width: 14px; height: 14px; stroke: var(--ink); stroke-width: 2; fill: none; }
.jtitle { font-family: 'Playfair Display', serif; font-style: italic; font-size: 26px; padding: 8px 20px 0; line-height: 1.2; }
.mtabs { display: flex; gap: 6px; padding: 12px 20px; overflow-x: auto; scrollbar-width: none; }
.mtabs::-webkit-scrollbar { display: none; }
.mtab { display: flex; align-items: center; gap: 5px; padding: 6px 11px; border-radius: 20px; border: 1px solid var(--line); background: var(--cream); cursor: pointer; white-space: nowrap; transition: all .15s; }
.mtab.on { background: var(--ink); border-color: var(--ink); }
.mtab-emoji { font-size: 13px; }
.mtab span { font-family: 'IBM Plex Mono', monospace; font-size: 8px; letter-spacing: .1em; text-transform: uppercase; color: var(--ink3); }
.mtab.on span { color: var(--paper3); }
.txt-wrap { margin: 0 20px 14px; }
.txt-area { width: 100%; background: var(--cream); border: 1px solid var(--line); border-radius: 10px; padding: 14px; font-family: 'Crimson Pro', serif; font-size: 17px; line-height: 1.7; color: var(--ink); resize: none; outline: none; min-height: 160px; background-image: repeating-linear-gradient(0deg, transparent, transparent 28px, var(--line) 28px, var(--line) 29px); background-attachment: local; }
.txt-area::placeholder { color: var(--ink3); font-style: italic; }
.txt-area:focus { border-color: var(--gold); }
.mood-row { display: flex; justify-content: center; padding: 4px 20px 14px; }
.mood-btn { flex: 1; padding: 10px 4px; border: none; background: transparent; cursor: pointer; text-align: center; font-size: 22px; opacity: .3; transition: all .2s; border-radius: 8px; }
.mood-btn.sel { opacity: 1; transform: scale(1.25); }
.voice-wrap { margin: 0 20px 14px; background: var(--cream); border: 1px solid var(--line); border-radius: 10px; padding: 20px; }
.wv { display: flex; align-items: center; justify-content: center; gap: 3px; height: 44px; margin-bottom: 14px; }
.wb { width: 3px; border-radius: 2px; }
.vctrls { display: flex; align-items: center; justify-content: center; gap: 12px; }
.vnote { font-family: 'Crimson Pro', serif; font-style: italic; font-size: 13px; color: var(--ink3); text-align: center; margin-top: 10px; }
.draw-wrap { margin: 0 20px 14px; }
.draw-cnv { background: var(--cream); border: 1px solid var(--line); border-radius: 10px; height: 170px; position: relative; overflow: hidden; touch-action: none; cursor: crosshair; }
.draw-cnv svg { position: absolute; inset: 0; width: 100%; height: 100%; }
.draw-hint { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; font-family: 'Playfair Display', serif; font-style: italic; font-size: 13px; color: var(--ink3); pointer-events: none; opacity: .5; }
.dbar { display: flex; gap: 6px; margin-top: 8px; align-items: center; }
.dtool { padding: 5px 9px; border-radius: 7px; border: 1px solid var(--line); cursor: pointer; font-size: 14px; transition: all .15s; }
.dtool.on { background: var(--ink); }
.dcolor { width: 22px; height: 22px; border-radius: 50%; cursor: pointer; border: 2px solid transparent; flex-shrink: 0; }
.dcolor.sel { border-color: var(--gold); transform: scale(1.15); }
.dclear { margin-left: auto; font-family: 'IBM Plex Mono', monospace; font-size: 9px; letter-spacing: .1em; color: var(--ink3); background: transparent; border: 1px solid var(--line); border-radius: 6px; padding: 4px 9px; cursor: pointer; }
.save-btn { display: block; margin: 0 20px 20px; width: calc(100% - 40px); background: var(--ink); color: var(--goldl); border: none; border-radius: 10px; padding: 14px; font-family: 'Playfair Display', serif; font-style: italic; font-size: 16px; cursor: pointer; transition: opacity .15s; }
.save-btn:hover { opacity: .88; }

.arch-banner { position: relative; height: 170px; overflow: hidden; }
.arch-banner img { width: 100%; height: 100%; object-fit: cover; display: block; background: #3a2010; }
.arch-banner::after { content: ''; position: absolute; inset: 0; background: linear-gradient(to top, rgba(28,20,8,.85) 0%, transparent 60%); }
.arch-banner-txt { position: absolute; bottom: 14px; left: 20px; z-index: 2; }
.arch-banner-sub { font-family: 'IBM Plex Mono', monospace; font-size: 8px; letter-spacing: .2em; color: var(--gold); text-transform: uppercase; margin-bottom: 3px; }
.arch-banner-name { font-family: 'Playfair Display', serif; font-size: 22px; color: var(--paper); font-style: italic; }
.arch-banner-latin { font-family: 'IBM Plex Mono', monospace; font-size: 10px; color: var(--ink3); letter-spacing: .1em; }
.arch-none-banner { padding: 24px 20px 12px; text-align: center; }
.char-row { display: flex; align-items: center; justify-content: space-between; padding: 14px 20px 6px; }
.char-name { font-family: 'Playfair Display', serif; font-size: 20px; font-style: italic; color: var(--ink); }
.char-lvl-n { font-family: 'Playfair Display', serif; font-size: 22px; color: var(--gold); text-align: center; line-height: 1; }
.char-lvl-l { font-family: 'IBM Plex Mono', monospace; font-size: 7px; letter-spacing: .1em; color: var(--ink3); text-align: center; text-transform: uppercase; }
.xp-wrap { padding: 0 20px 14px; }
.xp-track { height: 4px; background: var(--paper3); border-radius: 2px; overflow: hidden; margin-bottom: 5px; }
.xp-fill { height: 100%; background: linear-gradient(90deg, var(--gold), var(--goldl)); border-radius: 2px; transition: width .5s; }
.xp-row { display: flex; justify-content: space-between; font-family: 'IBM Plex Mono', monospace; font-size: 9px; color: var(--ink3); }
.stat-list { padding: 0 20px; }
.stat-row { display: flex; align-items: center; gap: 10px; margin-bottom: 11px; }
.stat-emoji { font-size: 16px; width: 22px; text-align: center; flex-shrink: 0; }
.stat-lbl { font-family: 'Crimson Pro', serif; font-size: 15px; color: var(--ink); width: 68px; flex-shrink: 0; }
.stat-bar { flex: 1; height: 5px; background: var(--paper3); border-radius: 3px; overflow: hidden; }
.stat-fill { height: 100%; border-radius: 3px; transition: width .6s ease; }
.stat-val { font-family: 'IBM Plex Mono', monospace; font-size: 11px; width: 26px; text-align: right; }
.hm-wrap { padding: 0 20px 20px; }
.hm-title { font-family: 'IBM Plex Mono', monospace; font-size: 9px; letter-spacing: .15em; color: var(--ink3); text-transform: uppercase; margin-bottom: 10px; }
.hm-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 4px; }
.hm-cell { aspect-ratio: 1; border-radius: 5px; display: flex; align-items: center; justify-content: center; font-family: 'IBM Plex Mono', monospace; font-size: 8px; color: var(--ink3); }
.hc0 { background: var(--paper3); } .hc1 { background: #d4a93a22; } .hc2 { background: #d4a93a55; color: var(--ink); } .hc3 { background: #d4a93a99; color: var(--ink); } .hc4 { background: var(--goldl); color: var(--ink); } .hct { background: var(--red); color: var(--paper); font-weight: 600; }

.arc-hero { margin: 14px 20px; background: var(--ink); border-radius: 14px; overflow: hidden; }
.arc-hero-img { width: 100%; height: 110px; object-fit: cover; opacity: .55; display: block; background: #3a2010; }
.arc-hero-body { padding: 14px; }
.arc-live { display: flex; align-items: center; gap: 6px; margin-bottom: 6px; }
.arc-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--redl); box-shadow: 0 0 6px rgba(192,57,43,.5); animation: pulse 2s ease-in-out infinite; }
@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: .4; } }
.arc-h-name { font-family: 'Playfair Display', serif; font-style: italic; font-size: 18px; color: var(--paper); margin-bottom: 12px; line-height: 1.2; }
.arc-rwd2 { display: flex; align-items: center; gap: 8px; margin-bottom: 10px; padding: 8px 10px; background: #b8841e14; border-radius: 8px; border: 1px solid #b8841e22; }
.arc-rwd2-img { width: 28px; height: 28px; border-radius: 6px; overflow: hidden; flex-shrink: 0; background: #3a2010; }
.arc-rwd2-img img { width: 100%; height: 100%; object-fit: cover; }
.arc-rwd2-ey { font-family: 'IBM Plex Mono', monospace; font-size: 7.5px; letter-spacing: .12em; color: var(--gold); text-transform: uppercase; }
.arc-rwd2-n  { font-family: 'Playfair Display', serif; font-style: italic; font-size: 14px; color: var(--goldl); }
.arc-pct { font-family: 'Playfair Display', serif; font-size: 18px; color: var(--goldl); margin-left: auto; }
.new-arc-strip { margin: 0 20px 14px; padding: 14px 16px; border: 1px solid var(--gold); border-radius: 12px; cursor: pointer; transition: background .15s; }
.new-arc-strip:hover { background: var(--paper2); }
.new-arc-strip p { font-family: 'Playfair Display', serif; font-style: italic; font-size: 15px; color: var(--ink3); margin-top: 5px; }
.past-lbl { font-family: 'IBM Plex Mono', monospace; font-size: 9px; letter-spacing: .2em; color: var(--ink3); text-transform: uppercase; padding: 0 20px 10px; }
.past-row { display: flex; align-items: center; gap: 12px; padding: 12px 20px; border-top: 1px solid var(--line); }
.past-thumb { width: 44px; height: 44px; border-radius: 8px; overflow: hidden; flex-shrink: 0; background: var(--paper3); }
.past-thumb img { width: 100%; height: 100%; object-fit: cover; }
.past-title { font-family: 'Crimson Pro', serif; font-size: 15px; color: var(--ink); line-height: 1.2; }
.past-dates { font-family: 'IBM Plex Mono', monospace; font-size: 9px; color: var(--ink3); margin-top: 2px; }
.past-status { font-family: 'IBM Plex Mono', monospace; font-size: 9px; text-align: right; line-height: 1.6; }

.arch-page-intro { padding: 20px 20px 0; }
.arch-intro-txt { font-family: 'Crimson Pro', serif; font-style: italic; font-size: 15px; color: var(--ink3); margin-top: 8px; line-height: 1.55; margin-bottom: 4px; }
.acard { margin: 0 20px 14px; border-radius: 14px; overflow: hidden; border: 1px solid var(--line); transition: transform .2s, box-shadow .2s; }
.acard:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(28,20,8,.12); }
.acard-active { border-color: var(--gold); box-shadow: 0 0 0 1px var(--gold); }
.acard-img { width: 100%; height: 80px; object-fit: cover; display: block; background: var(--paper3); }
.acard-overlay { background: var(--cream); padding: 14px; }
.active-badge { display: inline-flex; align-items: center; gap: 5px; background: #b8841e18; border: 1px solid var(--gold); border-radius: 20px; padding: 3px 8px; margin-bottom: 8px; }
.active-badge span { font-family: 'IBM Plex Mono', monospace; font-size: 8px; letter-spacing: .1em; color: var(--gold); text-transform: uppercase; }
.acard-lat { font-family: 'IBM Plex Mono', monospace; font-size: 8.5px; letter-spacing: .2em; color: var(--ink3); text-transform: uppercase; margin-bottom: 3px; }
.acard-name { font-family: 'Playfair Display', serif; font-size: 19px; font-style: italic; color: var(--ink); margin-bottom: 5px; }
.acard-desc { font-family: 'Crimson Pro', serif; font-style: italic; font-size: 15px; color: var(--ink2); line-height: 1.5; margin-bottom: 10px; }
.acard-cond-lbl { font-family: 'IBM Plex Mono', monospace; font-size: 8px; letter-spacing: .15em; color: var(--gold); text-transform: uppercase; margin-bottom: 3px; }
.acard-cond { font-family: 'Crimson Pro', serif; font-size: 13px; color: var(--ink3); margin-bottom: 5px; }
.acard-maintain { font-family: 'Crimson Pro', serif; font-style: italic; font-size: 13px; color: var(--ink3); margin-bottom: 10px; }
.acard-prog { display: flex; align-items: center; gap: 10px; }
.acard-bar { flex: 1; height: 3px; background: var(--paper3); border-radius: 2px; overflow: hidden; }
.acard-bar-fill { height: 100%; background: var(--gold); transition: width .5s; }
.acard-pct { font-family: 'IBM Plex Mono', monospace; font-size: 10px; color: var(--gold); }

.form-wrap { padding: 24px 20px; display: flex; flex-direction: column; gap: 18px; }
.form-h { font-family: 'Playfair Display', serif; font-style: italic; font-size: 26px; color: var(--ink); }
.form-sub { font-family: 'Crimson Pro', serif; font-style: italic; font-size: 15px; color: var(--ink3); margin-top: 4px; }
.form-lbl { font-family: 'IBM Plex Mono', monospace; font-size: 9px; letter-spacing: .18em; text-transform: uppercase; color: var(--ink3); display: block; margin-bottom: 7px; }
.form-in { width: 100%; background: var(--cream); border: 1px solid var(--line); border-radius: 10px; padding: 11px 13px; font-family: 'Crimson Pro', serif; font-size: 17px; color: var(--ink); outline: none; }
.form-in:focus { border-color: var(--gold); }
.form-sel { width: 100%; background: var(--cream); border: 1px solid var(--line); border-radius: 10px; padding: 11px 13px; font-family: 'Crimson Pro', serif; font-size: 15px; color: var(--ink); outline: none; cursor: pointer; }
.form-btn { background: var(--ink); color: var(--goldl); border: none; border-radius: 12px; padding: 14px; font-family: 'Playfair Display', serif; font-style: italic; font-size: 17px; cursor: pointer; transition: opacity .15s; }
.form-btn:hover { opacity: .88; }
.form-cancel { background: transparent; border: none; color: var(--ink3); font-family: 'IBM Plex Mono', monospace; font-size: 10px; letter-spacing: .1em; text-transform: uppercase; cursor: pointer; text-align: center; padding: 8px; }
.img-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
.img-thumb { aspect-ratio: 16/9; border-radius: 8px; overflow: hidden; border: 2px solid transparent; cursor: pointer; transition: border-color .15s; background: var(--paper3); }
.img-thumb.sel { border-color: var(--gold); }
.img-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }

.lib-tabs { display: flex; gap: 6px; padding: 0 20px 12px; overflow-x: auto; scrollbar-width: none; }
.lib-tabs::-webkit-scrollbar { display: none; }
.lib-tab { display: flex; align-items: center; gap: 4px; padding: 5px 11px; border-radius: 20px; border: 1px solid var(--line); background: var(--cream); cursor: pointer; white-space: nowrap; font-family: 'IBM Plex Mono', monospace; font-size: 9px; letter-spacing: .08em; text-transform: uppercase; color: var(--ink3); transition: all .15s; flex-shrink: 0; }
.lib-tab.on { background: var(--ink); border-color: var(--ink); color: var(--goldl); }
.lib-rite { display: flex; align-items: center; gap: 12px; padding: 11px 20px; border-bottom: 1px solid var(--line); }
.lib-rite-body { flex: 1; }
.lib-rite-name { font-family: 'Crimson Pro', serif; font-size: 16px; color: var(--ink); }
.lib-rite-meta { font-family: 'IBM Plex Mono', monospace; font-size: 9px; color: var(--ink3); margin-top: 2px; }
.lib-add-btn { padding: 5px 11px; background: transparent; border: 1px solid var(--gold); border-radius: 7px; font-family: 'IBM Plex Mono', monospace; font-size: 9px; letter-spacing: .08em; color: var(--gold); cursor: pointer; transition: all .15s; white-space: nowrap; }
.lib-add-btn:hover { background: var(--gold); color: var(--cream); }
.lib-add-btn.added { background: var(--ink); border-color: var(--ink); color: var(--goldl); pointer-events: none; }
.lib-custom-cta { margin: 16px 20px; padding: 16px; border: 1px dashed var(--gold); border-radius: 12px; cursor: pointer; text-align: center; transition: background .15s; }
.lib-custom-cta:hover { background: var(--paper2); }
.lib-custom-cta .form-h { font-size: 17px; }
`;
