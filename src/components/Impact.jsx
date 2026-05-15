import React, { useState } from "react";

const statCards = [
  {
    id: 1,
    label: "FASTER LISTING",
    value: "3x",
    description: "List your products 3x faster with our automated tools",
    icon: "⚡",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80",
    stats: "100+",
    statsLabel: "Products Listed Daily",
  },
  {
    id: 2,
    label: "SEARCH VISIBILITY",
    value: "85%",
    description: "Boost your search visibility by up to 85% organically",
    icon: "🔍",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80",
    stats: "250K+",
    statsLabel: "Monthly Impressions",
  },
  {
    id: 3,
    label: "BOOSTED SALES",
    value: "2x",
    description: "Double your sales with our smart recommendation engine",
    icon: "📈",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=900&q=80",
    stats: "500+",
    statsLabel: "Active Merchants",
  },
  {
    id: 4,
    label: "FEWER INQUIRIES",
    value: "60%",
    description: "Reduce support inquiries by 60% with better listings",
    icon: "💬",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&q=80",
    stats: "24/7",
    statsLabel: "Support Available",
  },
  {
    id: 5,
    label: "GLOBAL REACH",
    value: "40+",
    description: "Expand to 40+ countries with our localization engine",
    icon: "🌍",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&q=80",
    stats: "1M+",
    statsLabel: "Users Worldwide",
  },
];

const ImpactSection = () => {
  const [activeId, setActiveId] = useState(1);

  return (
    <section className="w-full min-h-screen bg-[#fafafa] py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Badge */}
        <div className="flex items-center justify-center gap-2 mb-5">
          <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
          <span className="text-orange-500 text-xs font-bold tracking-[0.3em] uppercase">
            Impact
          </span>
        </div>

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
            B2B Made Simple.
            <br />
            Growth Made Inevitable.
          </h2>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-4 h-auto md:h-[560px]">
          {statCards.map((card) => {
            const isActive = activeId === card.id;

            return (
              <div
                key={card.id}
                onClick={() => setActiveId(card.id)}
                className={`
                  relative overflow-hidden rounded-[28px] cursor-pointer
                  transition-all duration-700 ease-in-out border
                  ${
                    isActive
                      ? "flex-[4] border-orange-400 shadow-2xl"
                      : "flex-1 border-gray-200"
                  }
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
                  />
                </div>

                {/* Overlay */}
                <div
                  className={`
                    absolute inset-0 transition-all duration-700
                    ${
                      isActive
                        ? "bg-gradient-to-t from-black/90 via-black/50 to-black/10"
                        : "bg-white/90"
                    }
                  `}
                />

                {/* Top Line */}
                <div
                  className={`
                    absolute top-0 left-0 h-1 bg-gradient-to-r
                    from-orange-400 to-orange-600 transition-all duration-700
                    ${isActive ? "w-full" : "w-0"}
                  `}
                />

                {/* Collapsed View */}
                {!isActive && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 z-10">
                    <div className="text-4xl">{card.icon}</div>

                    <p
                      className="text-[11px] font-bold tracking-[0.25em] uppercase text-gray-400"
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
                    absolute inset-0 z-20 transition-all duration-700
                    ${
                      isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10 pointer-events-none"
                    }
                  `}
                >
                  {/* Top */}
                  <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                    {/* Badge */}
                    <div className="flex items-center gap-2 bg-white/15 backdrop-blur-xl border border-white/20 px-4 py-2 rounded-full">
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                        ✨
                      </div>

                      <span className="text-white text-sm font-semibold">
                        Premium
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-4xl shadow-lg">
                      {card.icon}
                    </div>
                  </div>

                  {/* Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-7">
                    <p className="text-orange-400 text-[11px] tracking-[0.3em] font-bold uppercase mb-3">
                      {card.label}
                    </p>

                    <h3 className="text-6xl md:text-7xl font-black text-white leading-none mb-4">
                      {card.value}
                    </h3>

                    <p className="text-white/85 text-sm md:text-base leading-relaxed max-w-md mb-7">
                      {card.description}
                    </p>

                    <div className="flex items-end justify-between">
                      <div>
                        <h4 className="text-4xl font-black text-white leading-none">
                          {card.stats}
                        </h4>

                        <p className="text-[11px] uppercase tracking-[0.2em] text-white/60 mt-2">
                          {card.statsLabel}
                        </p>
                      </div>

                      {/* Button */}
                      <button className="group w-14 h-14 rounded-full bg-white/15 backdrop-blur-lg border border-white/20 flex items-center justify-center hover:bg-orange-500 transition-all duration-300 hover:scale-110">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
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