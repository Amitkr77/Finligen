import { useEffect, useState } from "react";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        /* ── Entry animations ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(50px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        /* ── Continuous float ── */
        @keyframes floatY {
          0%,100% { transform: translateY(0px); }
          50%     { transform: translateY(-9px); }
        }
        @keyframes floatCard {
          0%,100% { transform: translateX(-50%) translateY(0px); }
          50%     { transform: translateX(-50%) translateY(-7px); }
        }
        @keyframes badgeFloat {
          0%,100% { transform: translateY(0px) rotate(2deg); }
          50%     { transform: translateY(-9px) rotate(2deg); }
        }
        @keyframes arrowFloat {
          0%,100% { transform: translateY(0px); opacity:0.6; }
          50%     { transform: translateY(-4px); opacity:1; }
        }

        /* ── Box sequence ── */
        @keyframes boxRise {
          0%   { opacity:0; transform: translateX(-50%) translateY(100px) scale(0.92); }
          60%  { opacity:1; transform: translateX(-50%) translateY(-6px) scale(1.01); }
          80%  { transform: translateX(-50%) translateY(3px) scale(0.99); }
          100% { opacity:1; transform: translateX(-50%) translateY(0px) scale(1); }
        }
@keyframes lidLeftOpen {
  0% {
    transform: rotate(150deg);
  }

  100% {
    transform: rotate(-12deg) translate(-8px, -4px);
  }
}

@keyframes lidRightOpen {
  0% {
    transform: rotate(50deg);
  }

  100% {
    transform: rotate(12deg) translate(8px, -4px);
  }
}
 @keyframes lidFrontOpen {
  0% {
    transform: perspective(1000px) rotateX(0deg);
  }

  100% {
    transform:
      perspective(1000px)
      rotateX(-28deg)
      rotateY(18deg)
      translate(18px, -10px);
  }
}

@keyframes lidBackOpen {
  0% {
    transform: perspective(1000px) rotateX(0deg);
  }

  100% {
    transform:
      perspective(1000px)
      rotateX(128deg)
      translateY(90px);
  }
}

        /* ── Cards rise from box ── */
        @keyframes cardRise {
          0%   { opacity:0; transform: translateX(-50%) translateY(70px) scale(0.88); }
          55%  { opacity:1; transform: translateX(-50%) translateY(-10px) scale(1.02); }
          75%  { transform: translateX(-50%) translateY(4px) scale(0.99); }
          100% { opacity:1; transform: translateX(-50%) translateY(0px) scale(1); }
        }
        @keyframes restockRise {
          0%   { opacity:0; transform: translateX(-50%) translateY(50px) scale(0.88); }
          55%  { opacity:1; transform: translateX(-50%) translateY(-8px) scale(1.02); }
          75%  { transform: translateX(-50%) translateY(3px) scale(0.99); }
          100% { opacity:1; transform: translateX(-50%) translateY(0px) scale(1); }
        }
        @keyframes badgeEntry {
          0%   { opacity:0; transform: scale(0.5) rotate(-10deg); }
          60%  { opacity:1; transform: scale(1.1) rotate(3deg); }
          80%  { transform: scale(0.96) rotate(1deg); }
          100% { opacity:1; transform: scale(1) rotate(2deg); }
        }
        @keyframes arrowEntry {
          0%   { opacity:0; transform: scale(0.7); }
          100% { opacity:0.7; transform: scale(1); }
        }

        /* ── Inner glow ── */
        @keyframes innerGlow {
          0%,100% { opacity:0.25; rx: 52; }
          50%     { opacity:0.65; rx: 58; }
        }

        /* ── Pulse button ── */
        @keyframes btnPulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(249,115,22,0.45); }
          50%     { box-shadow: 0 0 0 10px rgba(249,115,22,0); }
        }

        /* ── Store row continuous float ── */
        @keyframes storeFloat {
          0%,100% { transform: translateX(-50%) translateY(0px); }
          50%     { transform: translateX(-50%) translateY(-7px); }
        }
      `}</style>

      <section className="min-h-screen bg-white relative overflow-hidden flex flex-col">
        {/* Background grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='44' height='44' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 44 0 L 0 0 0 44' fill='none' stroke='%23efefef' stroke-width='1'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Main content */}
        <div className="flex-1 flex items-center">
          <div className="max-w-7xl mx-auto px-8 w-full pt-20">
            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-0">

              {/* ════════════════════
                  LEFT  CONTENT
                 ════════════════════ */}
              <div className="flex-1 max-w-[480px]">

                {/* Badge */}
                <div
                  style={{
                    opacity: 0,
                    animation: visible
                      ? "fadeUp 0.65s cubic-bezier(0.22,1,0.36,1) 0.05s forwards"
                      : "none",
                  }}
                >
                  <div className="inline-flex items-center gap-2 bg-gray-900 text-white text-xs font-medium px-3 py-1.5 rounded-full mb-7">
                    <span className="bg-orange-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold tracking-wide">
                      + New
                    </span>
                    <span className="text-gray-300">Custom Commission Plans</span>
                    <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* Headline — each line staggers */}
                {["Transform Your", "B2B Business", "with AI"].map((line, i) => (
                  <div
                    key={line}
                    style={{
                      overflow: "hidden",
                      opacity: 0,
                      animation: visible
                        ? `fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) ${0.15 + i * 0.1}s forwards`
                        : "none",
                    }}
                  >
                    <h1 className="text-[52px] lg:text-[62px] font-black text-gray-900 leading-[1.08] tracking-tight">
                      {line}
                    </h1>
                  </div>
                ))}

                {/* Subtext */}
                <p
                  className="text-gray-400 text-[15px] leading-relaxed mt-5 mb-9 max-w-[320px]"
                  style={{
                    opacity: 0,
                    animation: visible
                      ? "fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.48s forwards"
                      : "none",
                  }}
                >
                  Automatically create product listings, optimize SEO, and
                  manage multi-store operations. All in one smart platform.
                </p>

                {/* CTA */}
                <div
                  className="flex items-center gap-5"
                  style={{
                    opacity: 0,
                    animation: visible
                      ? "fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 0.6s forwards"
                      : "none",
                  }}
                >
                  <button
                    className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-7 py-3.5 rounded-full text-sm transition-all duration-200 hover:scale-105 active:scale-95"
                    style={{ animation: "btnPulse 2.8s ease-in-out 2s infinite" }}
                  >
                    Try for Free
                  </button>
                  <button className="group flex items-center gap-1.5 text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors duration-200">
                    <span>See Demo</span>
                    <svg
                      className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* ════════════════════
                  RIGHT ILLUSTRATION
                 ════════════════════ */}
              <div
                className="flex-1 flex justify-center lg:justify-end items-center"
                style={{
                  minHeight: 750,
                  opacity: 0,
                  animation: visible
                    ? "fadeInRight 1s cubic-bezier(0.22,1,0.36,1) 0.2s forwards"
                    : "none",
                }}
              >
                <BoxIllustration />
              </div>

            </div>
          </div>
        </div>

        {/* ════════════════════
            BOTTOM  LOGOS
           ════════════════════ */}
        <div
          className="border-t border-gray-100 py-5"
          style={{
            opacity: 0,
            animation: visible
              ? "fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) 1.1s forwards"
              : "none",
          }}
        >
          <div className="max-w-7xl mx-auto px-8 flex flex-col sm:flex-row items-center gap-6">
            <div className="min-w-max">
              <p className="text-sm font-bold text-gray-800">Companies we empower</p>
              <p className="text-xs text-gray-400 mt-0.5">Empowering the next generation of B2B leaders</p>
            </div>
            <div className="h-px w-px bg-gray-200 hidden sm:block self-stretch mx-2" />
            <div className="flex items-center gap-10 flex-wrap justify-center">
              {[
                { name: "Logique",  El: LogiqueSVG },
                { name: "Iconic",   El: IconicSVG },
                { name: "Grapho",   El: GraphoSVG },
                { name: "Grapherz", El: GrapherzSVG },
              ].map(({ name, El }, i) => (
                <div
                  key={name}
                  className="flex items-center gap-2 text-gray-400 hover:text-gray-700 transition-all duration-300 cursor-pointer hover:scale-105 select-none"
                  style={{
                    opacity: 0,
                    animation: visible
                      ? `fadeUp 0.55s cubic-bezier(0.22,1,0.36,1) ${1.25 + i * 0.1}s forwards`
                      : "none",
                  }}
                >
                  <El />
                  <span className="text-sm font-bold tracking-wide">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ══════════════════════════════════════════════════
   BOX ILLUSTRATION
   Sequence:
     0.0s → box rises  (smooth bounce)
     1.0s → left lid opens
     1.15s→ right lid opens
     1.9s → Active-Stores card rises from box centre
     2.2s → Restock card rises from box centre
     2.0s → Bravix badge pops in (top-right)
     2.5s → dashed arrow fades in
     2.8s → all continuous floats begin
   ══════════════════════════════════════════════════ */
function BoxIllustration() {
  const [storeIdx, setStoreIdx] = useState(0);
  const stores = ["Elmwood", "Harborline Supply"];

  useEffect(() => {
    const t = setInterval(() => setStoreIdx(i => (i + 1) % stores.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative" style={{ width: 520, height: 750 }}>

      {/* ── soft radial bg ── */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 400, height: 400,
          top: 120, left: 60,
          background: "radial-gradient(circle at 40% 40%, #f3f4f6 0%, #ffffff 65%)",
        }}
      />

      {/* ── decorative grid squares ── */}
      <div className="absolute pointer-events-none" style={{ top: 50, left: 40, opacity: 0.22 }}>
        <GridBoxes />
      </div>

      {/* ══════════════
          3-D  OPEN BOX
         ══════════════ */}
      <div
        className="absolute"
        style={{
          bottom: 28,
          left: "50%",
          width: 310,
          opacity: 0,
          animation: "boxRise 1s cubic-bezier(0.22,1,0.36,1) 0.1s forwards",
        }}
      >
        <BoxSVG />
      </div>

      {/* ══════════════════════════════════════
          ACTIVE STORES CARD  — rises from box
         ══════════════════════════════════════ */}
      <div
        className="absolute bg-white rounded-2xl border border-gray-100/80 p-5"
        style={{
          top: 16,
          left: "50%",
          width: 236,
          opacity: 0,
          boxShadow: "0 24px 64px rgba(0,0,0,0.11), 0 4px 16px rgba(0,0,0,0.06)",
          animation:
            "cardRise 0.9s cubic-bezier(0.22,1,0.36,1) 1.9s forwards, floatCard 5s ease-in-out 2.9s infinite",
        }}
      >
        {/* header */}
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
            <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
          </div>
          <span className="text-sm font-bold text-gray-800">Active Stores</span>
        </div>

        {/* count */}
        <div className="text-[42px] font-black text-gray-900 leading-none mb-4">12</div>

        <div className="h-px bg-gray-100 mb-3" />

        <p className="text-[11px] text-gray-400 mb-2 font-medium uppercase tracking-wider">
          Choose your store
        </p>

        {/* store rows */}
        <div className="space-y-1">
          {stores.map((store, i) => {
            const active = storeIdx === i;
            return (
              <div
                key={store}
                className="flex items-center gap-2.5 px-2.5 py-2 rounded-xl transition-all duration-500"
                style={{
                  background: active ? "#fff7ed" : "transparent",
                  transform: active ? "scale(1.02)" : "scale(1)",
                }}
              >
                <div
                  className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center transition-all duration-500"
                  style={{
                    background: active ? "#fb923c" : "#f0f0f0",
                    boxShadow: active ? "0 2px 8px rgba(251,146,60,0.45)" : "none",
                  }}
                >
                  {active ? (
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  ) : (
                    <div className="w-2 h-2 rounded-full bg-gray-300" />
                  )}
                </div>
                <span
                  className="text-sm font-semibold transition-colors duration-400"
                  style={{ color: active ? "#ea580c" : "#b0b0b0" }}
                >
                  {store}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* ══════════════════════
          BRAVIX BADGE  top-right
         ══════════════════════ */}
      <div
        className="absolute rounded-[18px] flex items-center justify-center"
        style={{
          width: 66, height: 66,
          top: 68, right: 18,
          background: "linear-gradient(145deg,#fb923c,#ea580c)",
          boxShadow: "0 14px 36px rgba(234,88,12,0.42), 0 4px 12px rgba(234,88,12,0.28)",
          opacity: 0,
          animation:
            "badgeEntry 0.7s cubic-bezier(0.34,1.56,0.64,1) 2.05s forwards, badgeFloat 4.5s ease-in-out 2.9s infinite",
        }}
      >
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <path d="M8 6h10.5C22.09 6 25 8.91 25 12.5S22.09 19 18.5 19H8V6Z" fill="white"/>
          <path d="M8 19h11C22.87 19 26 22.13 26 26s-3.13 7-7 7H8V19Z" fill="white" opacity="0.82"/>
        </svg>
      </div>

      {/* curved dashed arrow */}
      <svg
        className="absolute pointer-events-none"
        style={{
          top: 136, right: 34,
          opacity: 0,
          animation:
            "arrowEntry 0.5s ease 2.55s forwards, arrowFloat 3.2s ease-in-out 3.1s infinite",
        }}
        width="54" height="62" viewBox="0 0 54 62" fill="none"
      >
        <path
          d="M44 6 C52 22, 40 48, 10 56"
          stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round"
          strokeDasharray="5 4" fill="none"
        />
        <path
          d="M6 49 L11 57 L18 52"
          stroke="#cbd5e1" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round" fill="none"
        />
      </svg>


    </div>
  );
}

/* ═══════════════════════════════════
   IMPROVED 3-D OPEN BOX SVG
   ═══════════════════════════════════ */

function BoxSVG() {
  return (
    <svg
      width="420"
      height="420"
      viewBox="0 0 420 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        overflow: "visible",
      }}
    >
      <defs>
        {/* ───────── gradients ───────── */}
        <linearGradient id="gLeft" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#cfd4da" />
          <stop offset="100%" stopColor="#bfc5cc" />
        </linearGradient>

        <linearGradient id="gRight" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e3e6ea" />
          <stop offset="100%" stopColor="#d4d8dd" />
        </linearGradient>

        <linearGradient id="gTop" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="100%" stopColor="#e5e7eb" />
        </linearGradient>

        <linearGradient id="gInner" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d9dde2" />
          <stop offset="100%" stopColor="#bfc5cd" />
        </linearGradient>

        <linearGradient id="gLidL" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#e6eaee" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>

        <linearGradient id="gLidR" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#d9dde2" />
          <stop offset="100%" stopColor="#f3f4f6" />
        </linearGradient>

        {/* ───────── shadow ───────── */}
        <filter id="boxShadow" x="-30%" y="-30%" width="160%" height="180%">
          <feDropShadow
            dx="0"
            dy="24"
            stdDeviation="24"
            floodColor="#00000018"
          />
        </filter>
      </defs>

      {/* ───────── FLOOR SHADOW ───────── */}
      <ellipse
        cx="210"
        cy="365"
        rx="125"
        ry="18"
        fill="#00000010"
        style={{
          filter: "blur(10px)",
        }}
      />

      {/* ───────── MAIN BOX ───────── */}
      <g
        filter="url(#boxShadow)"
        style={{
          animation: "floatY 5s ease-in-out 2.5s infinite",
        }}
      >
        {/* LEFT FACE */}
        <path
          d="
            M 42 170
            L 210 220
            L 210 340
            L 42 290
            Z
          "
          fill="url(#gLeft)"
        />

        {/* RIGHT FACE */}
        <path
          d="
            M 210 220
            L 378 170
            L 378 290
            L 210 340
            Z
          "
          fill="url(#gRight)"
        />

        {/* TOP OPENING */}
        <path
          d="
            M 42 170
            L 210 120
            L 378 170
            L 210 220
            Z
          "
          fill="url(#gTop)"
        />

        {/* INNER HOLE */}
        <path
          d="
            M 92 182
            L 210 218
            L 328 182
            L 210 146
            Z
          "
          fill="url(#gInner)"
          opacity="0.8"
        />

        {/* CENTER TAPE */}
        <path
          d="
            M 198 220
            L 210 224
            L 210 340
            L 198 336
            Z
          "
          fill="#d8dbe0"
          opacity="0.95"
        />

        <path
          d="
            M 210 224
            L 222 220
            L 222 336
            L 210 340
            Z
          "
          fill="#d8dbe0"
          opacity="0.95"
        />

        {/* EDGE LIGHTS */}
        <path
          d="
            M 42 170
            L 42 290
            L 48 294
            L 48 174
            Z
          "
          fill="white"
          opacity="0.18"
        />

        <path
          d="
            M 378 170
            L 378 290
            L 372 294
            L 372 174
            Z
          "
          fill="white"
          opacity="0.1"
        />

        <path
          d="
            M 42 290
            L 210 340
            L 378 290
            L 372 294
            L 210 346
            L 48 294
            Z
          "
          fill="white"
          opacity="0.1"
        />
      </g>

      {/* ───────────────── FRONT LID ───────────────── */}
      <g
        style={{
          transformOrigin: "210px 170px",
          transformBox: "fill-box",
          animation:
            "lidFrontOpen 1.3s cubic-bezier(0.22,1,0.36,1) 1s forwards",
        }}
      >
        <path
          d="
            M 42 170
            L 210 120
            L 210 42
            L 42 92
            Z
          "
          fill="url(#gLidL)"
          stroke="#d6d9de"
          strokeWidth="1"
        />

        {/* tape */}
        <path
          d="
            M 196 120
            L 210 116
            L 210 42
            L 196 46
            Z
          "
          fill="#fff"
          opacity="0.7"
        />

        {/* edge */}
        <path
          d="
            M 42 170
            L 48 172
            L 48 96
            L 42 92
            Z
          "
          fill="white"
          opacity="0.35"
        />
      </g>

      {/* ───────────────── BACK LID ───────────────── */}
      <g
        style={{
          transformOrigin: "210px 170px",
          transformBox: "fill-box",
          animation:
            "lidBackOpen 1.3s cubic-bezier(0.22,1,0.36,1) 1.1s forwards",
        }}
      >
        <path
          d="
            M 378 170
            L 210 120
            L 210 42
            L 378 92
            Z
          "
          fill="url(#gLidR)"
          stroke="#d6d9de"
          strokeWidth="1"
        />

        <path
          d="
            M 210 116
            L 224 120
            L 224 46
            L 210 42
            Z
          "
          fill="#e5e7eb"
          opacity="0.7"
        />

        <path
          d="
            M 378 170
            L 372 172
            L 372 96
            L 378 92
            Z
          "
          fill="white"
          opacity="0.25"
        />
      </g>

      {/* ───────── INNER GLOW ───────── */}
      <ellipse
        cx="210"
        cy="176"
        rx="62"
        ry="24"
        fill="#fff7ed"
        opacity="0"
      >
        <animate
          attributeName="opacity"
          values="0;0;0.45;0.18;0.45"
          dur="3s"
          begin="2s"
          repeatCount="indefinite"
        />

        <animate
          attributeName="rx"
          values="62;62;72;62;72"
          dur="3s"
          begin="2s"
          repeatCount="indefinite"
        />
      </ellipse>
    </svg>
  );
}

/* ── Decorative background squares ── */
function GridBoxes() {
  const rects = [
    [0,   0,  58, 58], [76,  0,  58, 58], [152, 0,  58, 58], [228, 0,  58, 58],
    [0,  76,  58, 58],                     [228, 76, 58, 58],
    [0,  152, 58, 58],                     [228,152, 58, 58],
    [0,  228, 58, 58], [76, 228, 58, 58],  [228,228, 58, 58],
  ];
  return (
    <svg width="310" height="310" viewBox="0 0 310 310" fill="none">
      {rects.map(([x,y,w,h],i) => (
        <rect key={i} x={x} y={y} width={w} height={h} rx="10"
          fill="none" stroke="#d1d5db" strokeWidth="1.5"/>
      ))}
    </svg>
  );
}

/* ── Brand logos ── */
function LogiqueSVG() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <path d="M3 10C3 6.13 6.13 3 10 3c3.87 0 7 3.13 7 7" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round"/>
      <path d="M10 17V10M7 14l3 3 3-3" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function IconicSVG() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="7" stroke="#9ca3af" strokeWidth="2"/>
      <path d="M10 7v3l3 2" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function GraphoSVG() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="7" stroke="#9ca3af" strokeWidth="2"/>
      <path d="M7 10c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3V10" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
function GrapherzSVG() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <path d="M3 15l5-6 4 3 5-6" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="17" cy="6" r="1.8" fill="#9ca3af"/>
    </svg>
  );
}