import { useEffect, useRef, useState } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=Inter:wght@400;500;600;700&display=swap');

  .hero-root *, .hero-root *::before, .hero-root *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .hero-root {
    --green: #f97316;
    --green-dark: #ea580c;
    --black: #0f0f0f;
    --gray-soft: #9ca3af;
    --white: #ffffff;
    --font-display: 'Syne', sans-serif;
    --font-body: 'Inter', sans-serif;
    font-family: var(--font-body);
    -webkit-font-smoothing: antialiased;
  }

  /* HERO */
  .hero-section {
    position: relative;
    min-height: 100svh;
    background: var(--white);
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .hero-grid-bg {
    position: absolute;
    inset: 0;
    pointer-events: none;
    background-image: url("data:image/svg+xml,%3Csvg width='44' height='44' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 44 0 L 0 0 0 44' fill='none' stroke='%23efefef' stroke-width='1'/%3E%3C/svg%3E");
    z-index: 0;
  }

  .hero-body {
    flex: 1;
    display: flex;
    align-items: center;
    position: relative;
    z-index: 1;
  }

  .hero-inner {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 100px 40px 80px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 350px;
  }

  /* COPY */
  .hero-copy { max-width: 520px; }

  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: var(--black);
    color: var(--white);
    font-size: 11px;
    font-weight: 500;
    padding: 6px 14px;
    border-radius: 999px;
    margin-bottom: 32px;
  }

  .hero-badge-new {
    background: var(--green);
    color: var(--white);
    font-size: 10px;
    font-weight: 700;
    padding: 2px 7px;
    border-radius: 999px;
    letter-spacing: 0.04em;
  }

  .hero-headline {
    font-family: var(--font-display);
    font-size: clamp(40px, 5.5vw, 68px);
    font-weight: 900;
    color: var(--black);
    line-height: 1.04;
    letter-spacing: -0.03em;
  }

  .hero-subtitle {
    color: var(--gray-soft);
    font-size: clamp(14px, 1.5vw, 16px);
    line-height: 1.65;
    margin: 22px 0 38px;
    max-width: 380px;
  }

  .hero-cta-row {
    display: flex;
    align-items: center;
    gap: 22px;
    flex-wrap: wrap;
  }

  .hero-btn-primary {
    background: var(--green);
    color: var(--white);
    border: none;
    border-radius: 999px;
    padding: 14px 30px;
    font-family: var(--font-body);
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s, transform 0.15s;
    white-space: nowrap;
    animation: heroBtnPulse 2.8s ease-in-out 2.5s infinite;
  }
  .hero-btn-primary:hover { background: var(--green-dark); transform: scale(1.04); }
  .hero-btn-primary:active { transform: scale(0.97); }

  .hero-btn-ghost {
    background: none;
    border: none;
    color: #555;
    font-family: var(--font-body);
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 5px;
    transition: color 0.2s;
    white-space: nowrap;
  }
  .hero-btn-ghost:hover { color: var(--black); }
  .hero-btn-ghost:hover .ghost-arrow { transform: translateX(3px); }
  .ghost-arrow { transition: transform 0.2s; }

  /* VISUAL */
  .hero-visual {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 520px;
  }

  .box-area {
    position: relative;
    width: 100%;
    max-width: 460px;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    perspective: 950px;
  }

  .box-floor-shadow {
    position: absolute;
    width: 55%; height: 14%;
    bottom: 5%;
    border-radius: 50%;
    background: radial-gradient(ellipse at center, rgba(0,0,0,0.16), transparent 70%);
    filter: blur(10px);
    animation: heroShadowBreathe 5s ease-in-out 4.5s infinite;
  }

  /* 3D BOX */
  .box-scene {
    width: 200px; height: 200px;
    position: relative;
    transform-style: preserve-3d;
    transform: rotateX(-18deg) rotateY(-38deg);
    animation: heroFloatBox 5.4s ease-in-out 4.2s infinite;
  }

  .box-base {
    width: 160px; height: 160px;
    position: absolute;
    left: 20px; top: 40px;
    transform-style: preserve-3d;
  }

  .box-panel {
    position: absolute;
    width: 160px; height: 160px;
    border: 1.5px solid rgba(60,30,10,0.38);
    backface-visibility: visible;
  }

  .box-front  { background: linear-gradient(160deg,#eef1f4,#D0D4D9); transform: translateZ(80px); }

.box-back   { background: linear-gradient(160deg,#dfe4e8,#bfc5cc); transform: rotateY(180deg) translateZ(80px); }

.box-right  { background: linear-gradient(160deg,#e6eaee,#c7ccd2); transform: rotateY(90deg) translateZ(80px); }

.box-left   { background: linear-gradient(160deg,#f1f3f5,#d0d4d9); transform: rotateY(-90deg) translateZ(80px); }

.box-bottom { background: linear-gradient(160deg,#b8bec5,#9fa6ae); transform: rotateX(-90deg) translateZ(80px); }
  .box-inside {
    position: absolute;
    width: 150px; height: 150px;
    left: 5px; top: 5px;
    transform: rotateX(90deg) translateZ(1px);
    background: radial-gradient(circle at 50% 50%, rgba(255,196,87,0.42), rgba(40,18,6,0.85) 62%);
    border-radius: 6px;
  }

  /* FLAPS */
  .box-flap {
    position: absolute;
    width: 160px; height: 80px;
    border: 1.5px solid rgba(60,30,10,0.38);
    transform-style: preserve-3d;
    transform-origin: center bottom;
  }
  .box-flap::after {
    content: "";
    position: absolute;
    inset: 7px;
    border-radius: 7px;
    border: 1px dashed rgba(255,235,200,0.2);
  }

.flap-front-c {
  left:20px;
  top:40px;
  background:linear-gradient(145deg,#eef1f4,#D0D4D9);
  transform: translateZ(80px) translateY(-80px) rotateX(0deg);
}

.flap-right-c {
  left:20px;
  top:40px;
  background:linear-gradient(145deg,#dde2e7,#bcc3ca);
  transform: rotateY(90deg) translateZ(80px) translateY(-80px) rotateX(0deg);
}

.flap-back-c {
  left:20px;
  top:40px;
  background:linear-gradient(145deg,#d6dbe0,#b2b9c1);
  transform: rotateY(180deg) translateZ(80px) translateY(-80px) rotateX(0deg);
}

.flap-left-c {
  left:20px;
  top:40px;
  background:linear-gradient(145deg,#edf1f4,#cfd4d9);
  transform: rotateY(-90deg) translateZ(80px) translateY(-80px) rotateX(0deg);
}
  .flap-front-c.flap-open { animation: heroOpenFront 1.1s cubic-bezier(0.22,1,0.36,1) forwards; }
  .flap-right-c.flap-open { animation: heroOpenRight 1.1s cubic-bezier(0.22,1,0.36,1) 0.38s forwards; }
  .flap-back-c.flap-open  { animation: heroOpenBack  1.1s cubic-bezier(0.22,1,0.36,1) 0.76s forwards; }
  .flap-left-c.flap-open  { animation: heroOpenLeft  1.1s cubic-bezier(0.22,1,0.36,1) 1.14s forwards; }

  @keyframes heroOpenFront {
    0%   { transform: translateZ(80px) translateY(-80px) rotateX(0deg); }
    60%  { transform: translateZ(80px) translateY(-80px) rotateX(-124deg); }
    80%  { transform: translateZ(80px) translateY(-80px) rotateX(-112deg); }
    100% { transform: translateZ(80px) translateY(-80px) rotateX(-118deg); }
  }
  @keyframes heroOpenRight {
    0%   { transform: rotateY(90deg) translateZ(80px) translateY(-80px) rotateX(0deg); }
    60%  { transform: rotateY(90deg) translateZ(80px) translateY(-80px) rotateX(-124deg); }
    80%  { transform: rotateY(90deg) translateZ(80px) translateY(-80px) rotateX(-112deg); }
    100% { transform: rotateY(90deg) translateZ(80px) translateY(-80px) rotateX(-118deg); }
  }
  @keyframes heroOpenBack {
    0%   { transform: rotateY(180deg) translateZ(80px) translateY(-80px) rotateX(0deg); }
    60%  { transform: rotateY(180deg) translateZ(80px) translateY(-80px) rotateX(-124deg); }
    80%  { transform: rotateY(180deg) translateZ(80px) translateY(-80px) rotateX(-112deg); }
    100% { transform: rotateY(180deg) translateZ(80px) translateY(-80px) rotateX(-118deg); }
  }
  @keyframes heroOpenLeft {
    0%   { transform: rotateY(-90deg) translateZ(80px) translateY(-80px) rotateX(0deg); }
    60%  { transform: rotateY(-90deg) translateZ(80px) translateY(-80px) rotateX(-124deg); }
    80%  { transform: rotateY(-90deg) translateZ(80px) translateY(-80px) rotateX(-112deg); }
    100% { transform: rotateY(-90deg) translateZ(80px) translateY(-80px) rotateX(-118deg); }
  }

  /* SPARKS */
  .box-spark {
    position: absolute;
    border-radius: 50%;
    background: #f8f8f7;
    box-shadow: 0 0 14px #cbcaca;
    opacity: 0;
    pointer-events: none;
  }
  .box-spark.spark-active { animation: heroSparkOnce 1.6s ease-out forwards; }

  @keyframes heroSparkOnce {
    0%   { opacity:0; transform:translateY(0) scale(0.5); }
    30%  { opacity:1; transform:translateY(-28px) scale(1); }
    100% { opacity:0; transform:translateY(-52px) scale(0.3); }
  }

  /* STORE CARD */
  .store-card {
    position: absolute;
    background: var(--white);
    border-radius: 18px;
    border: 1px solid rgba(0,0,0,0.07);
    box-shadow: 0 20px 60px rgba(233, 233, 233, 0.11), 0 4px 14px rgba(0,0,0,0.06);
    padding: 16px;
    opacity: 0;
    transform: translateY(16px) scale(0.96);
    transition: opacity 0.6s cubic-bezier(0.22,1,0.36,1), transform 0.6s cubic-bezier(0.22,1,0.36,1);
    z-index: 10;
    top: -60px;
    right: 15;
    width: clamp(160px, 22vw, 220px);
  }
  .store-card.card-visible {
    opacity: 1;
    transform: translateY(0) scale(1);
    animation: heroCardFloat 5s ease-in-out 0.6s infinite;
  }

  .sc-header { display:flex; align-items:center; gap:8px; margin-bottom:8px; }
  .sc-dot { width:22px; height:22px; background:#3b82f6; border-radius:50%; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
  .sc-label { font-size:13px; font-weight:700; color:var(--black); }
  .sc-num { font-family:var(--font-display); font-size:36px; font-weight:900; color:var(--black); line-height:1; margin-bottom:12px; }
  .sc-divider { height:1px; background:#f0f0f0; margin-bottom:10px; }
  .sc-sub { font-size:10px; color:var(--gray-soft); font-weight:600; letter-spacing:0.08em; text-transform:uppercase; margin-bottom:8px; }

  .sc-store-item { display:flex; align-items:center; gap:10px; padding:7px 9px; border-radius:11px; margin-bottom:3px; transition:background 0.4s; }
  .sc-store-item.sc-active { background:#fff7ed; }
  .sc-icon { width:20px; height:20px; border-radius:50%; display:flex; align-items:center; justify-content:center; flex-shrink:0; transition:background 0.4s, box-shadow 0.4s; }
  .sc-icon.sc-active { background:#fb923c; box-shadow:0 2px 8px rgba(251,146,60,0.4); }
  .sc-icon.sc-inactive { background:#f0f0f0; }
  .sc-name { font-size:12px; font-weight:600; transition:color 0.4s; }
  .sc-name.sc-active { color:#ea580c; }
  .sc-name.sc-inactive { color:#b0b0b0; }

  /* FOOTER */
  .hero-footer {
    border-top: 1px solid #f0f0f0;
    padding: 20px 0;
    position: relative;
    z-index: 1;
  }

  .hero-footer-inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 40px;
    display: flex;
    align-items: center;
    gap: 24px;
    flex-wrap: wrap;
  }

  .footer-label-wrap { min-width: max-content; }
  .footer-label-wrap p:first-child { font-size:13px; font-weight:700; color:var(--black); }
  .footer-label-wrap p:last-child { font-size:11px; color:var(--gray-soft); margin-top:2px; }
  .footer-vdivider { width:1px; height:28px; background:#e5e7eb; flex-shrink:0; }
  .footer-logos { display:flex; align-items:center; gap:28px; flex-wrap:wrap; }
  .footer-logo-item {
    display:flex; align-items:center; gap:6px;
    color:var(--gray-soft); cursor:pointer;
    font-size:13px; font-weight:700;
    transition:color 0.2s, transform 0.2s;
    white-space:nowrap;
    border:none; background:none;
  }
  .footer-logo-item:hover { color:#374151; transform:scale(1.05); }

  /* ENTRY ANIMATIONS */
  .anim-fade-up   { opacity:0; animation: heroFadeUp   0.7s cubic-bezier(0.22,1,0.36,1) both; }
  .anim-fade-right{ opacity:0; animation: heroFadeRight 0.9s cubic-bezier(0.22,1,0.36,1) both; }

  @keyframes heroFadeUp {
    from { opacity:0; transform:translateY(22px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes heroFadeRight {
    from { opacity:0; transform:translateX(36px); }
    to   { opacity:1; transform:translateX(0); }
  }
  @keyframes heroBtnPulse {
    0%,100% { box-shadow:0 0 0 0 rgba(239, 237, 235, 0.42); }
    50%     { box-shadow:0 0 0 10px rgba(249,115,22,0); }
  }
  @keyframes heroFloatBox {
    0%,100% { transform: rotateX(-18deg) rotateY(-38deg) translateY(0); }
    50%     { transform: rotateX(-15deg) rotateY(-31deg) translateY(-11px); }
  }
  @keyframes heroShadowBreathe {
    0%,100% { opacity:0.7; transform:scale(1); }
    50%     { opacity:0.4; transform:scale(0.9); }
  }
  @keyframes heroCardFloat {
    0%,100% { transform:translateY(0); }
    50%     { transform:translateY(-8px); }
  }

  /* ══════════════════════════════
     RESPONSIVE
  ══════════════════════════════ */

  /* Tablet landscape */
  @media (max-width: 1100px) {
    .hero-inner { padding: 90px 32px 36px; gap: 24px; }
  }

  /* Tablet portrait — stack */
  @media (max-width: 900px) {
    .hero-inner {
      grid-template-columns: 1fr;
      padding: 90px 28px 32px;
      text-align: center;
      gap: 0;
    }
    .hero-copy { max-width: 100%; }
    .hero-badge { margin: 0 auto 28px; }
    .hero-subtitle { margin: 18px auto 32px; max-width: 480px; }
    .hero-cta-row { justify-content: center; }
    .hero-visual { min-height: 420px; margin-top: 16px; }
    .box-area { height: 420px; max-width: 100%; }
    .store-card { top: 24px; right: calc(50% - 270px); width: 180px; }
    .hero-footer-inner { padding: 0 28px; gap: 16px; }
    .footer-vdivider { display: none; }
    .footer-label-wrap { width: 100%; text-align: center; }
    .footer-logos { justify-content: center; gap: 20px; }
  }

  /* Mobile large */
  @media (max-width: 768px) {
    .hero-inner { padding: 80px 20px 28px; }
    .box-area { height: 380px; }
    .box-scene { transform: scale(0.88) rotateX(-18deg) rotateY(-38deg) !important; animation: heroFloatBox768 5.4s ease-in-out 4.2s infinite !important; }
    @keyframes heroFloatBox768 {
      0%,100% { transform: scale(0.88) rotateX(-18deg) rotateY(-38deg) translateY(0); }
      50%     { transform: scale(0.88) rotateX(-15deg) rotateY(-31deg) translateY(-10px); }
    }
    .store-card { right: calc(50% - 240px); top: 16px; width: 168px; padding: 13px; }
    .sc-num { font-size: 30px; }
    .hero-footer-inner { padding: 0 20px; }
    .footer-logos { gap: 16px; }
    .footer-logo-item { font-size: 12px; }
  }

  /* Mobile */
  @media (max-width: 600px) {
    .hero-inner { padding: 72px 18px 24px; }
    .hero-badge { font-size: 10px; padding: 5px 11px; margin-bottom: 22px; }
    .hero-subtitle { font-size: 14px; }
    .hero-cta-row { gap: 16px; }
    .hero-btn-primary { padding: 13px 24px; font-size: 13px; }
    .box-area { height: 340px; }
    .box-scene { transform: scale(0.78) rotateX(-18deg) rotateY(-38deg) !important; animation: heroFloatBox600 5.4s ease-in-out 4.2s infinite !important; }
    @keyframes heroFloatBox600 {
      0%,100% { transform: scale(0.78) rotateX(-18deg) rotateY(-38deg) translateY(0); }
      50%     { transform: scale(0.78) rotateX(-15deg) rotateY(-31deg) translateY(-9px); }
    }
    .store-card { right: calc(50% - 210px); top: 10px; width: 152px; padding: 11px; border-radius: 12px; }
    .sc-num { font-size: 26px; margin-bottom: 10px; }
    .sc-label { font-size: 11px; }
    .sc-name { font-size: 11px; }
    .sc-store-item { padding: 5px 7px; }
    .hero-footer-inner { flex-direction: column; align-items: center; gap: 12px; padding: 0 18px; }
    .footer-logos { gap: 14px; }
  }

  /* Small mobile */
  @media (max-width: 420px) {
    .hero-inner { padding: 68px 16px 20px; }
    .box-area { height: 300px; }
    .box-scene { transform: scale(0.68) rotateX(-18deg) rotateY(-38deg) !important; animation: heroFloatBox420 5.4s ease-in-out 4.2s infinite !important; }
    @keyframes heroFloatBox420 {
      0%,100% { transform: scale(0.68) rotateX(-18deg) rotateY(-38deg) translateY(0); }
      50%     { transform: scale(0.68) rotateX(-15deg) rotateY(-31deg) translateY(-8px); }
    }
    .store-card { right: calc(50% - 180px); top: 5px; width: 138px; padding: 10px; border-radius: 11px; }
    .sc-dot { width:18px; height:18px; }
    .sc-num { font-size: 22px; }
    .sc-icon { width:17px; height:17px; }
    .footer-logos { gap: 12px; }
    .footer-logo-item { font-size: 11px; }
    .footer-logo-item svg { width:13px; height:13px; }
  }

  @media (prefers-reduced-motion: reduce) {
    .hero-root *, .hero-root *::before, .hero-root *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;

const CHECK_SVG = (
  <svg width="10" height="10" fill="white" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const STORES = ["Elmwood", "Harborline Supply"];

const logos = [
  {
    name: "Logique",
    icon: (
      <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
        <path
          d="M3 10C3 6.13 6.13 3 10 3c3.87 0 7 3.13 7 7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M10 17V10M7 14l3 3 3-3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Iconic",
    icon: (
      <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="2" />
        <path
          d="M10 7v3l3 2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    name: "Grapho",
    icon: (
      <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="2" />
        <path
          d="M7 10c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3V10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    name: "Grapherz",
    icon: (
      <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
        <path
          d="M3 15l5-6 4 3 5-6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="17" cy="6" r="1.8" fill="currentColor" />
      </svg>
    ),
  },
];

function StoreCard({ visible }) {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    if (!visible) return;
    const t = setInterval(
      () => setActiveIdx((i) => (i + 1) % STORES.length),
      2600,
    );
    return () => clearInterval(t);
  }, [visible]);

  return (
    <div className={`store-card ${visible ? "card-visible" : ""}`}>
      <div className="sc-header">
        <div className="sc-dot">
          <svg width="11" height="11" fill="white" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <span className="sc-label">Active Stores</span>
      </div>
      <div className="sc-num">12</div>
      <div className="sc-divider" />
      <p className="sc-sub">Choose your store</p>
      {STORES.map((store, i) => {
        const active = i === activeIdx;
        return (
          <div
            key={store}
            className={`sc-store-item ${active ? "sc-active" : ""}`}
          >
            <div className={`sc-icon ${active ? "sc-active" : "sc-inactive"}`}>
              {active ? (
                CHECK_SVG
              ) : (
                <div
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    background: "#ccc",
                  }}
                />
              )}
            </div>
            <span className={`sc-name ${active ? "sc-active" : "sc-inactive"}`}>
              {store}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function Box3D() {
  const [flapsOpen, setFlapsOpen] = useState(false);
  const [sparksActive, setSparksActive] = useState(false);
  const [cardVisible, setCardVisible] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setFlapsOpen(true), 300);
    const t2 = setTimeout(() => setSparksActive(true), 300 + 1440 + 900);
    const t3 = setTimeout(() => setCardVisible(true), 300 + 1440 + 900 + 550);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  const sparks = [
    { style: { width: 8, height: 8, left: "44%", top: "40%" }, delay: 0 },
    { style: { width: 6, height: 6, left: "56%", top: "33%" }, delay: 130 },
    { style: { width: 10, height: 10, left: "50%", top: "27%" }, delay: 260 },
    { style: { width: 5, height: 5, left: "62%", top: "44%" }, delay: 390 },
  ];

  return (
    <div className="box-area">
      <div className="box-floor-shadow" />

      <div className="box-scene">
        <div className="box-base">
          <div className="box-panel box-front" />
          <div className="box-panel box-back" />
          <div className="box-panel box-right" />
          <div className="box-panel box-left" />
          <div className="box-panel box-bottom" />
          <div className="box-inside" />
        </div>
        <div
          className={`box-flap flap-front-c ${flapsOpen ? "flap-open" : ""}`}
        />
        <div
          className={`box-flap flap-right-c ${flapsOpen ? "flap-open" : ""}`}
        />
        <div
          className={`box-flap flap-back-c  ${flapsOpen ? "flap-open" : ""}`}
        />
        <div
          className={`box-flap flap-left-c  ${flapsOpen ? "flap-open" : ""}`}
        />
      </div>

      {sparks.map((s, i) => (
        <SparkParticle
          key={i}
          style={s.style}
          delay={s.delay}
          active={sparksActive}
        />
      ))}

      <StoreCard visible={cardVisible} />
    </div>
  );
}

function SparkParticle({ style, delay, active }) {
  const [fired, setFired] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!active || fired) return;
    timerRef.current = setTimeout(() => setFired(true), delay);
    return () => clearTimeout(timerRef.current);
  }, [active]);

  return (
    <div className={`box-spark ${fired ? "spark-active" : ""}`} style={style} />
  );
}

export default function Hero() {
  return (
    <div className="hero-root">
      <style>{styles}</style>

      <section className="hero-section">
        <div className="hero-grid-bg" />

        {/* BODY */}
        <div className="hero-body">
          <div className="hero-inner">
            {/* COPY */}
            <div className="hero-copy">
              <div
                className="hero-badge anim-fade-up"
                style={{ animationDelay: "0.1s" }}
              >
                <span className="hero-badge-new">+ New</span>
                <span style={{ color: "#9ca3af" }}>
                  Custom Commission Plans
                </span>
                <span style={{ color: "#555" }}>›</span>
              </div>

              <h1
                className="hero-headline anim-fade-up"
                style={{ animationDelay: "0.2s" }}
              >
                Transform Your
                <br />
                B2B Business
                <br />
                with AI
              </h1>

              <p
                className="hero-subtitle anim-fade-up"
                style={{ animationDelay: "0.38s" }}
              >
                Automatically create product listings, optimize SEO, and manage
                multi-store operations. All in one smart platform.
              </p>

              <div
                className="hero-cta-row anim-fade-up"
                style={{ animationDelay: "0.52s" }}
              >
                <button className="hero-btn-primary">Try for Free</button>
                <button className="hero-btn-ghost">
                  See Demo
                  <svg
                    className="ghost-arrow"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>

            {/* VISUAL */}
            <div
              className="hero-visual anim-fade-right"
              style={{ animationDelay: "0.15s" }}
            >
              <Box3D />
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div
          className="hero-footer anim-fade-up"
          style={{ animationDelay: "1s" }}
        >
          <div className="hero-footer-inner">
            <div className="footer-label-wrap">
              <p>Companies we empower</p>
              <p>Empowering the next generation of B2B leaders</p>
            </div>
            <div className="footer-vdivider" />
            <div className="footer-logos">
              {logos.map(({ name, icon }) => (
                <button key={name} className="footer-logo-item">
                  {icon}
                  {name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
