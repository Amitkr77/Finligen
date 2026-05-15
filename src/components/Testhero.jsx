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
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(50px); }
          to   { opacity: 1; transform: translateX(0); }
        }
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
        @keyframes boxRise {
          0%   { opacity:0; transform: translateX(-50%) translateY(100px) scale(0.92); }
          60%  { opacity:1; transform: translateX(-50%) translateY(-6px) scale(1.01); }
          80%  { transform: translateX(-50%) translateY(3px) scale(0.99); }
          100% { opacity:1; transform: translateX(-50%) translateY(0px) scale(1); }
        }

        /* FRONT flap: hinges at TOP edge (y=220), folds DOWN over front face initially, then swings FORWARD/UP */
        @keyframes flapFrontOpen {
          0%   { transform: perspective(800px) rotateX(0deg); }
          50%  { transform: perspective(800px) rotateX(105deg); }
          70%  { transform: perspective(800px) rotateX(88deg); }
          85%  { transform: perspective(800px) rotateX(96deg); }
          100% { transform: perspective(800px) rotateX(92deg); }
        }

        /* BACK flap: hinges at TOP edge (y=120), folds DOWN over back face initially, then swings BACKWARD/UP */
        @keyframes flapBackOpen {
          0%   { transform: perspective(800px) rotateX(0deg); }
          50%  { transform: perspective(800px) rotateX(-105deg); }
          70%  { transform: perspective(800px) rotateX(-88deg); }
          85%  { transform: perspective(800px) rotateX(-96deg); }
          100% { transform: perspective(800px) rotateX(-92deg); }
        }

        /* RIGHT flap: hinges at LEFT edge (x=338), folds LEFT over top initially, then swings RIGHT/outward */
        @keyframes flapRightOpen {
          0%   { transform: perspective(800px) rotateY(0deg); }
          50%  { transform: perspective(800px) rotateY(105deg); }
          70%  { transform: perspective(800px) rotateY(88deg); }
          85%  { transform: perspective(800px) rotateY(96deg); }
          100% { transform: perspective(800px) rotateY(92deg); }
        }

        /* LEFT flap: hinges at RIGHT edge (x=82), folds RIGHT over top initially, then swings LEFT/outward */
        @keyframes flapLeftOpen {
          0%   { transform: perspective(800px) rotateY(0deg); }
          50%  { transform: perspective(800px) rotateY(-105deg); }
          70%  { transform: perspective(800px) rotateY(-88deg); }
          85%  { transform: perspective(800px) rotateY(-96deg); }
          100% { transform: perspective(800px) rotateY(-92deg); }
        }

        @keyframes sparkleRise {
          0%   { opacity: 0; transform: translateY(0) scale(0); }
          20%  { opacity: 1; transform: translateY(-10px) scale(1); }
          100% { opacity: 0; transform: translateY(-60px) scale(0.3); }
        }
        @keyframes sparkleRise2 {
          0%   { opacity: 0; transform: translateY(0) scale(0); }
          25%  { opacity: 1; transform: translateY(-15px) scale(1.2); }
          100% { opacity: 0; transform: translateY(-70px) scale(0.2); }
        }
        @keyframes sparkleRise3 {
          0%   { opacity: 0; transform: translateY(0) scale(0); }
          15%  { opacity: 1; transform: translateY(-8px) scale(0.9); }
          100% { opacity: 0; transform: translateY(-55px) scale(0.1); }
        }

        @keyframes cardRise {
          0%   { opacity:0; transform: translateX(-50%) translateY(70px) scale(0.88); }
          55%  { opacity:1; transform: translateX(-50%) translateY(-10px) scale(1.02); }
          75%  { transform: translateX(-50%) translateY(4px) scale(0.99); }
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
        @keyframes btnPulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(249,115,22,0.45); }
          50%     { box-shadow: 0 0 0 10px rgba(249,115,22,0); }
        }

        @keyframes boxFloat {
          0%,100% { transform: translateY(0px); }
          50%     { transform: translateY(-8px); }
        }

        @keyframes shadowBreathe {
          0%,100% { transform: scale(1); opacity: 0.07; }
          50%     { transform: scale(0.92); opacity: 0.04; }
        }

        @keyframes glowPulse {
          0%,100% { opacity: 0; }
          50%     { opacity: 0.5; }
        }
      `}</style>

      <section className="min-h-screen bg-white relative overflow-hidden flex flex-col">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='44' height='44' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 44 0 L 0 0 0 44' fill='none' stroke='%23efefef' stroke-width='1'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="flex-1 flex items-center">
          <div className="max-w-7xl mx-auto px-8 w-full pt-20">
            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-0">

              <div className="flex-1 max-w-[480px]">
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
                { name: "Logique", El: LogiqueSVG },
                { name: "Iconic", El: IconicSVG },
                { name: "Grapho", El: GraphoSVG },
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

function BoxIllustration() {
  const [storeIdx, setStoreIdx] = useState(0);
  const stores = ["Elmwood", "Harborline Supply"];

  useEffect(() => {
    const t = setInterval(() => setStoreIdx(i => (i + 1) % stores.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative" style={{ width: 520, height: 750 }}>

      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 400, height: 400,
          top: 120, left: 60,
          background: "radial-gradient(circle at 40% 40%, #f3f4f6 0%, #ffffff 65%)",
        }}
      />

      <div className="absolute pointer-events-none" style={{ top: 50, left: 40, opacity: 0.22 }}>
        <GridBoxes />
      </div>

      {/* ═══ BOX ═══ */}
      <div
        className="absolute"
        style={{
          bottom: 28,
          left: "50%",
          width: 330,
          opacity: 0,
          animation: "boxRise 1s cubic-bezier(0.22,1,0.36,1) 0.1s forwards",
        }}
      >
        <BoxSVG />
      </div>

      {/* ═══ ACTIVE STORES CARD ═══ */}
      <div
        className="absolute bg-white rounded-2xl border border-gray-100/80 p-5"
        style={{
          top: 150,
          left: "60%",
          width: 236,
          opacity: 0,
          boxShadow: "0 24px 64px rgba(0,0,0,0.11), 0 4px 16px rgba(0,0,0,0.06)",
          animation:
            "cardRise 0.9s cubic-bezier(0.22,1,0.36,1) 4.5s forwards, floatCard 5s ease-in-out 5.5s infinite",
          zIndex: 5,
        }}
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-sm flex-shrink-0">
            <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="text-sm font-bold text-gray-800">Active Stores</span>
        </div>

        <div className="text-[42px] font-black text-gray-900 leading-none mb-4">12</div>

        <div className="h-px bg-gray-100 mb-3" />

        <p className="text-[11px] text-gray-400 mb-2 font-medium uppercase tracking-wider">
          Choose your store
        </p>

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
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
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

      {/* ═══ SPARKLES (Now on top with higher z-index) ═══ */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: 28,
          left: "50%",
          width: 330,
          zIndex: 10,
        }}
      >
        <SparklesSVG />
      </div>

      {/* ═══ BRAVIX BADGE ═══ */}
      <div
        className="absolute rounded-[18px] flex items-center justify-center"
        style={{
          width: 66, height: 66,
          top: 132, right: 18,
          background: "linear-gradient(145deg,#fb923c,#ea580c)",
          boxShadow: "0 14px 36px rgba(234,88,12,0.42), 0 4px 12px rgba(234,88,12,0.28)",
          opacity: 0,
          animation:
            "badgeEntry 0.7s cubic-bezier(0.34,1.56,0.64,1) 5.0s forwards, badgeFloat 4.5s ease-in-out 5.8s infinite",
          zIndex: 15,
        }}
      >
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <path d="M8 6h10.5C22.09 6 25 8.91 25 12.5S22.09 19 18.5 19H8V6Z" fill="white" />
          <path d="M8 19h11C22.87 19 26 22.13 26 26s-3.13 7-7 7H8V19Z" fill="white" opacity="0.82" />
        </svg>
      </div>

      {/* ═══ ARROW ═══ */}
      <svg
        className="absolute pointer-events-none"
        style={{
          top: 200, right: 34,
          opacity: 0,
          animation:
            "arrowEntry 0.5s ease 5.3s forwards, arrowFloat 3.2s ease-in-out 5.8s infinite",
          zIndex: 15,
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

function SparklesSVG() {
  const SPARKLE_START = 3.2;
  const FLOAT_START = "4.0s";

  return (
    <svg
      width="420"
      height="420"
      viewBox="0 0 420 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: "visible" }}
    >
      <g style={{ animation: `boxFloat 5s ease-in-out ${FLOAT_START} infinite` }}>
        {/* ═══ SPARKLES (circles) ═══ */}
        {[
          { cx: 180, cy: 160, delay: `${SPARKLE_START}s`, dur: "2.2s", anim: "sparkleRise", r: 2.5, color: "#fb923c" },
          { cx: 240, cy: 155, delay: `${SPARKLE_START + 0.2}s`, dur: "2.5s", anim: "sparkleRise2", r: 2, color: "#fbbf24" },
          { cx: 200, cy: 150, delay: `${SPARKLE_START + 0.4}s`, dur: "2.8s", anim: "sparkleRise3", r: 3, color: "#f97316" },
          { cx: 225, cy: 165, delay: `${SPARKLE_START + 0.6}s`, dur: "2.3s", anim: "sparkleRise", r: 1.8, color: "#fdba74" },
          { cx: 195, cy: 170, delay: `${SPARKLE_START + 0.3}s`, dur: "2.6s", anim: "sparkleRise2", r: 2.2, color: "#fed7aa" },
          { cx: 215, cy: 148, delay: `${SPARKLE_START + 0.5}s`, dur: "2.4s", anim: "sparkleRise3", r: 2.8, color: "#fb923c" },
          { cx: 170, cy: 158, delay: `${SPARKLE_START + 0.7}s`, dur: "2.7s", anim: "sparkleRise", r: 1.5, color: "#fbbf24" },
          { cx: 250, cy: 162, delay: `${SPARKLE_START + 0.1}s`, dur: "2.1s", anim: "sparkleRise2", r: 2.3, color: "#f97316" },
        ].map((s, i) => (
          <circle
            key={i} cx={s.cx} cy={s.cy} r={s.r}
            fill={s.color} opacity="0"
            style={{ animation: `${s.anim} ${s.dur} ease-out ${s.delay} infinite` }}
          />
        ))}

        {/* ═══ STAR SPARKLES ═══ */}
        {[
  { x: 200, y: 5, delay: `${SPARKLE_START + 0.05}s`, size: 7 },
  { x: 240, y: 10, delay: `${SPARKLE_START + 0.15}s`, size: 6 },
  { x: 220, y: 8, delay: `${SPARKLE_START + 0.25}s`, size: 8 },
].map((star, i) => (
  <g
    key={`star-${i}`}
    style={{
      animation: `sparkleRise 1.2s linear ${star.delay} infinite`,
      opacity: 0
    }}
  >
    <path
      d={`M ${star.x} ${star.y - star.size} L ${star.x + star.size * 0.3} ${star.y - star.size * 0.3} L ${star.x + star.size} ${star.y} L ${star.x + star.size * 0.3} ${star.y + star.size * 0.3} L ${star.x} ${star.y + star.size} L ${star.x - star.size * 0.3} ${star.y + star.size * 0.3} L ${star.x - star.size} ${star.y} L ${star.x - star.size * 0.3} ${star.y - star.size * 0.3} Z`}
      fill="#fbbf24"
      opacity="0.9"
    />
  </g>
))}
      </g>
    </svg>
  );
}

function BoxSVG() {
  const FLAP_FRONT_START = "1.2s";
  const FLAP_RIGHT_START = "1.9s";
  const FLAP_BACK_START  = "2.5s";
  const FLAP_LEFT_START  = "3.1s";
  const FLOAT_START      = "4.0s";

  return (
    <svg
      width="420"
      height="420"
      viewBox="0 0 420 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: "visible" }}
    >
      <defs>
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
        <linearGradient id="gFlapBack" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#e8ecf0" />
          <stop offset="100%" stopColor="#f8fafc" />
        </linearGradient>
        <linearGradient id="gFlapFront" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#eef0f3" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>
        <linearGradient id="gFlapLeft" x1="1" y1="0" x2="0" y2="0">
          <stop offset="0%" stopColor="#e0e4e8" />
          <stop offset="100%" stopColor="#f3f4f6" />
        </linearGradient>
        <linearGradient id="gFlapRight" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#dce0e5" />
          <stop offset="100%" stopColor="#eef1f4" />
        </linearGradient>
        <linearGradient id="gGlow" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#ffedd5" />
          <stop offset="100%" stopColor="#fed7aa" />
        </linearGradient>
        <filter id="boxShadow" x="-30%" y="-30%" width="160%" height="180%">
          <feDropShadow dx="0" dy="24" stdDeviation="24" floodColor="#00000018" />
        </filter>
      </defs>

      {/* Ground shadow */}
      <ellipse
        cx="210" cy="365" rx="125" ry="18"
        fill="#00000010"
        style={{ filter: "blur(10px)", animation: `shadowBreathe 5s ease-in-out ${FLOAT_START} infinite` }}
      />

      {/* ═══ BOX BODY (always visible) ═══ */}
      <g filter="url(#boxShadow)" style={{ animation: `boxFloat 5s ease-in-out ${FLOAT_START} infinite` }}>
        {/* Left face */}
        <path d="M 42 170 L 210 220 L 210 340 L 42 290 Z" fill="url(#gLeft)" />
        {/* Right face */}
        <path d="M 210 220 L 378 170 L 378 290 L 210 340 Z" fill="url(#gRight)" />
        {/* Top face (visible rim) */}
        <path d="M 42 170 L 210 120 L 378 170 L 210 220 Z" fill="url(#gTop)" />
        {/* Inner darker diamond */}
        <path d="M 82 176 L 210 216 L 338 176 L 210 136 Z" fill="url(#gInner)" opacity="0.85" />
        {/* Center crease lines */}
        <path d="M 198 220 L 210 224 L 210 340 L 198 336 Z" fill="#d8dbe0" opacity="0.95" />
        <path d="M 210 224 L 222 220 L 222 336 L 210 340 Z" fill="#d8dbe0" opacity="0.95" />
        {/* Edge highlights */}
        <path d="M 42 170 L 42 290 L 48 294 L 48 174 Z" fill="white" opacity="0.18" />
        <path d="M 378 170 L 378 290 L 372 294 L 372 174 Z" fill="white" opacity="0.1" />
        <path d="M 42 290 L 210 340 L 378 290 L 372 294 L 210 346 L 48 294 Z" fill="white" opacity="0.1" />

        {/* Orange glow inside box (appears after flaps open) */}
        <ellipse cx="210" cy="176" rx="62" ry="22" fill="url(#gGlow)" opacity="0">
          <animate attributeName="opacity" values="0;0;0.5;0.2;0.5" dur="3s" begin="3.5s" repeatCount="indefinite" />
          <animate attributeName="rx" values="62;62;74;62;74" dur="3s" begin="3.5s" repeatCount="indefinite" />
        </ellipse>
      </g>

      {/*
        ═══ CLOSED LID (covers the top) ═══
        This is the "closed" top surface that sits flat, then gets hidden when flaps open.
        We fade it out when the first flap starts opening.
      */}
      <g style={{ animation: `boxFloat 5s ease-in-out ${FLOAT_START} infinite` }}>
        <path
          d="M 42 170 L 210 120 L 378 170 L 210 220 Z"
          fill="url(#gTop)"
          stroke="#d6d9de" strokeWidth="0.5"
          opacity="1"
        >
          <animate
            attributeName="opacity"
            values="1;0"
            dur="0.4s"
            begin={FLAP_FRONT_START}
            fill="freeze"
          />
        </path>
        {/* Center crease on closed lid */}
        <line x1="210" y1="120" x2="210" y2="220" stroke="#d0d4d9" strokeWidth="1.2" opacity="0.6">
          <animate attributeName="opacity" values="0.6;0" dur="0.4s" begin={FLAP_FRONT_START} fill="freeze" />
        </line>
        {/* Horizontal crease on closed lid */}
        <line x1="42" y1="170" x2="378" y2="170" stroke="#d0d4d9" strokeWidth="0.8" opacity="0.4">
          <animate attributeName="opacity" values="0.4;0" dur="0.4s" begin={FLAP_FRONT_START} fill="freeze" />
        </line>
      </g>

      {/* ═══ FLAP 1: FRONT — hinge at top edge (the line from (82,176) to (338,176) mapped to screen) ═══ */}
      <g style={{
        transformOrigin: "210px 220px",
        animation: `flapFrontOpen 1.0s cubic-bezier(0.22,1,0.36,1) ${FLAP_FRONT_START} forwards`,
      }}>
        <g style={{ animation: `boxFloat 5s ease-in-out ${FLOAT_START} infinite` }}>
          <path d="M 82 176 L 210 220 L 338 176 L 210 256 Z" fill="url(#gFlapFront)" stroke="#d6d9de" strokeWidth="0.8" />
          <path d="M 200 220 L 210 224 L 210 256 L 200 252 Z" fill="#fff" opacity="0.6" />
          <path d="M 210 224 L 220 220 L 220 252 L 210 256 Z" fill="#eee" opacity="0.45" />
        </g>
      </g>

      {/* ═══ FLAP 2: RIGHT — hinge at left edge of right flap area ═══ */}
      <g style={{
        transformOrigin: "338px 176px",
        animation: `flapRightOpen 1.0s cubic-bezier(0.22,1,0.36,1) ${FLAP_RIGHT_START} forwards`,
      }}>
        <g style={{ animation: `boxFloat 5s ease-in-out ${FLOAT_START} infinite` }}>
          <path d="M 210 136 L 338 176 L 338 136 L 210 96 Z" fill="url(#gFlapRight)" stroke="#d6d9de" strokeWidth="0.8" />
          <path d="M 336 176 L 338 176 L 338 136 L 336 137 Z" fill="white" opacity="0.25" />
        </g>
      </g>

      {/* ═══ FLAP 3: BACK — hinge at back edge ═══ */}
      <g style={{
        transformOrigin: "210px 120px",
        animation: `flapBackOpen 1.0s cubic-bezier(0.22,1,0.36,1) ${FLAP_BACK_START} forwards`,
      }}>
        <g style={{ animation: `boxFloat 5s ease-in-out ${FLOAT_START} infinite` }}>
          <path d="M 82 136 L 210 86 L 338 136 L 210 120 Z" fill="url(#gFlapBack)" stroke="#d6d9de" strokeWidth="0.8" />
          <path d="M 200 120 L 210 116 L 210 86 L 200 90 Z" fill="#fff" opacity="0.5" />
          <path d="M 210 116 L 220 120 L 220 90 L 210 86 Z" fill="#eee" opacity="0.4" />
          <path d="M 82 136 L 88 134 L 210 88 L 210 86 Z" fill="white" opacity="0.2" />
        </g>
      </g>

      {/* ═══ FLAP 4: LEFT — hinge at right edge of left flap area ═══ */}
      <g style={{
        transformOrigin: "82px 176px",
        animation: `flapLeftOpen 1.0s cubic-bezier(0.22,1,0.36,1) ${FLAP_LEFT_START} forwards`,
      }}>
        <g style={{ animation: `boxFloat 5s ease-in-out ${FLOAT_START} infinite` }}>
          <path d="M 82 176 L 210 136 L 210 96 L 82 136 Z" fill="url(#gFlapLeft)" stroke="#d6d9de" strokeWidth="0.8" />
          <path d="M 82 176 L 84 174 L 84 137 L 82 136 Z" fill="white" opacity="0.3" />
        </g>
      </g>
    </svg>
  );
}

function GridBoxes() {
  const rects = [
    [0, 0, 58, 58], [76, 0, 58, 58], [152, 0, 58, 58], [228, 0, 58, 58],
    [0, 76, 58, 58], [228, 76, 58, 58],
    [0, 152, 58, 58], [228, 152, 58, 58],
    [0, 228, 58, 58], [76, 228, 58, 58], [228, 228, 58, 58],
  ];
  return (
    <svg width="310" height="310" viewBox="0 0 310 310" fill="none">
      {rects.map(([x, y, w, h], i) => (
        <rect key={i} x={x} y={y} width={w} height={h} rx="10"
          fill="none" stroke="#d1d5db" strokeWidth="1.5" />
      ))}
    </svg>
  );
}

function LogiqueSVG() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <path d="M3 10C3 6.13 6.13 3 10 3c3.87 0 7 3.13 7 7" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" />
      <path d="M10 17V10M7 14l3 3 3-3" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconicSVG() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="7" stroke="#9ca3af" strokeWidth="2" />
      <path d="M10 7v3l3 2" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function GraphoSVG() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="7" stroke="#9ca3af" strokeWidth="2" />
      <path d="M7 10c0-1.66 1.34-3 3-3s3 1.34 3 3-1.34 3-3 3V10" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
function GrapherzSVG() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
      <path d="M3 15l5-6 4 3 5-6" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="17" cy="6" r="1.8" fill="#9ca3af" />
    </svg>
  );
}