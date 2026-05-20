import { useState } from "react";

const statCards = [
  {
    id: 1,
    label: "FASTER COMPLIANCE",
    value: "100%",
    description: "Complete US tax filings within 48 hours of documentation",
    icon: "⚡",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80",
    stats: "500+",
    statsLabel: "Businesses Served",
  },
  {
    id: 2,
    label: "ZERO PENALTIES",
    value: "$0",
    description: "No IRS penalty notices on FinliGen-managed filings",
    icon: "🛡️",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=80",
    stats: "15+",
    statsLabel: "Years Cross-Border Expertise",
  },
  {
    id: 3,
    label: "BOOKS CLOSED",
    value: "15th",
    description: "Monthly financial close guaranteed by the 15th, every month",
    icon: "📊",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80",
    stats: "48hrs",
    statsLabel: "Average Response Time",
  },
  {
    id: 4,
    label: "DUAL EXPERTISE",
    value: "2",
    description: "CA-led team fluent in both Indian and US compliance standards",
    icon: "🌐",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80",
    stats: "4",
    statsLabel: "Offices Across India",
  },
  {
    id: 5,
    label: "FULL COVERAGE",
    value: "50+",
    description:
      "All US states covered for sales tax, IRS, and cross-border compliance",
    icon: "🗺️",
    image:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=900&q=80",
    stats: "40+",
    statsLabel: "Countries Supported",
  },
];

const ImpactSection = () => {
  const [activeId, setActiveId] = useState(1);

  const handleKeyDown = (e, id) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setActiveId(id);
    }
  };

  return (
    <section className="w-full bg-[#fafafa] py-14 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Badge */}
        <div className="flex items-center justify-center gap-2 mb-4 sm:mb-5">
          <div className="w-2 h-2 rounded-full bg-[#7ecfc0] animate-pulse" />
          <span className="text-[#7ecfc0] text-[10px] sm:text-xs font-bold tracking-[0.28em] uppercase">
            Why FinliGen
          </span>
        </div>

        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-black text-gray-900 leading-tight">
            Compliance Made Certain.
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Growth Made Possible.
          </h2>
        </div>

        {/* Cards */}
        <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 lg:h-[560px] xl:h-[620px]">
          {statCards.map((card) => {
            const isActive = activeId === card.id;

            return (
              <div
                key={card.id}
                role="button"
                tabIndex={0}
                aria-pressed={isActive}
                onClick={() => setActiveId(card.id)}
                onKeyDown={(e) => handleKeyDown(e, card.id)}
                className={`
                  relative w-full overflow-hidden rounded-[22px] sm:rounded-[28px]
                  cursor-pointer border transition-all duration-500 ease-in-out
                  ${isActive
                    ? "h-[380px] sm:h-[430px] md:h-[480px] lg:h-auto lg:flex-[4] border-[#7ecfc0] shadow-2xl"
                    : "h-[84px] sm:h-[96px] md:h-[110px] lg:h-auto lg:flex-1 border-gray-200"}
                `}
              >
                {/* Background */}
                <div className="absolute inset-0">
                  <img
                    src={card.image}
                    alt={card.label}
                    className={`
                      w-full h-full object-cover transition-all duration-700
                      ${isActive ? "scale-100" : "scale-110 grayscale"}
                    `}
                    loading="lazy"
                  />
                </div>

                {/* Overlay */}
                <div
                  className={`
                    absolute inset-0 transition-all duration-700
                    ${
                      isActive
                        ? "bg-gradient-to-t from-black/90 via-black/55 to-black/15"
                        : "bg-black/50"
                    }
                  `}
                />

                {/* Top Active Line */}
                <div
                  className={`
                    absolute top-0 left-0 h-1 bg-gradient-to-r
                    from-[#7ecfc0] to-[#6dbdab] transition-all duration-700 z-20
                    ${isActive ? "w-full" : "w-0"}
                  `}
                />

                {/* Collapsed View - Mobile/Tablet */}
                {!isActive && (
                  <div className="absolute inset-0 z-10 flex items-center gap-4 px-4 sm:px-5 lg:hidden">
                    <div className="text-3xl sm:text-4xl shrink-0">{card.icon}</div>
                    <p className="text-white text-xs sm:text-sm font-bold tracking-[0.18em] uppercase">
                      {card.label}
                    </p>
                  </div>
                )}

                {/* Collapsed View - Desktop */}
                {!isActive && (
                  <div className="absolute inset-0 z-10 hidden lg:flex flex-col items-center justify-center gap-5">
                    <div className="text-4xl xl:text-5xl">{card.icon}</div>

                    <p
                      className="text-[11px] font-bold tracking-[0.25em] uppercase text-gray-300"
                      style={{
                        writingMode: "vertical-rl",
                        textOrientation: "mixed",
                        transform: "rotate(180deg)",
                      }}
                    >
                      {card.label}
                    </p>
                  </div>
                )}

                {/* Expanded View */}
                <div
                  className={`
                    absolute inset-0 z-20 flex flex-col justify-between
                    p-4 sm:p-5 md:p-6 lg:p-7 transition-all duration-500
                    ${
                      isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8 pointer-events-none"
                    }
                  `}
                >
                  {/* Top */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-2 bg-white/15 backdrop-blur-xl border border-white/20 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white flex items-center justify-center text-gray-900 text-sm font-bold">
                        ✓
                      </div>
                      <span className="text-white text-xs sm:text-sm font-semibold">
                        Verified
                      </span>
                    </div>

                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-2xl sm:text-3xl md:text-4xl shadow-lg shrink-0">
                      {card.icon}
                    </div>
                  </div>

                  {/* Bottom */}
                  <div className="mt-auto">
                    <p className="text-[#7ecfc0] text-[10px] sm:text-[11px] tracking-[0.28em] font-bold uppercase mb-2 sm:mb-3">
                      {card.label}
                    </p>

                    <h3 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black text-white leading-none mb-3 sm:mb-4">
                      {card.value}
                    </h3>

                    <p className="text-white/85 text-sm sm:text-base leading-relaxed max-w-xl mb-5 sm:mb-6">
                      {card.description}
                    </p>

                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                      <div>
                        <h4 className="text-3xl sm:text-4xl font-black text-white leading-none">
                          {card.stats}
                        </h4>

                        <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-white/60 mt-2">
                          {card.statsLabel}
                        </p>
                      </div>

                      <button className="group self-start sm:self-auto w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/15 backdrop-blur-lg border border-white/20 flex items-center justify-center hover:bg-[#7ecfc0] transition-all duration-300 hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 sm:w-6 sm:h-6 text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7 17L17 7M7 7h10v10"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;