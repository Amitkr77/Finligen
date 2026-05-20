import { useEffect, useState } from "react";

const TestimonialsSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0);
  const ROTATION_TIME = 5000;

  const tabs = [
    { icon: "🧾", label: "White‑label CPA outsourcing" },
    { icon: "🛡️", label: "CA‑reviewed output & quality control" },
    { icon: "⚡", label: "Fast turnaround in busy season" },
  ];

  const testimonials = [
    {
      company: "Boutique Tax Practice · Illinois",
      text: `"I was skeptical after a bad experience with another offshore firm. FinliGen did a two-week trial on one of our mid-size clients. The output was better than what my in-house staff was producing. We now outsource about 40% of our write-up work to them. That capacity let us take on six new clients this year we'd otherwise have turned away."`,
      author: "Jennifer M., CPA",
      role: "Managing Partner",
      img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
    },
    {
      company: "Tax & Advisory Firm · Texas",
      text: `"The CA review process is what sold us. When I send a file to FinliGen, I know a qualified accountant has looked at it before it comes back to me — not just a junior staff member running through a checklist. The error rate over 18 months has been essentially zero. For a firm our size, that matters."`,
      author: "Robert D., EA",
      role: "Principal",
      img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
    },
    {
      company: "US CPA Partner · Illinois",
      text: `"Sumit's team turned around our entire Q4 backlog in 11 days. We'd been sitting on it for three weeks before we called FinliGen."`,
      author: "CPA Partner",
      role: "Illinois",
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
    },
  ];

  const current = testimonials[activeTab];

  // Animations
  const animationStyles = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes scaleIn {
      from { opacity: 0; transform: scale(0.95); }
      to { opacity: 1; transform: scale(1); }
    }
    @keyframes labelFade {
      from { opacity: 0; transform: translateY(-5px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;

  // Auto rotation + progress bar
  useEffect(() => {
    setProgress(0);
    const startTime = Date.now();

    const progressInterval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const nextProgress = Math.min((elapsed / ROTATION_TIME) * 100, 100);
      setProgress(nextProgress);
    }, 50);

    const rotationTimer = setTimeout(() => {
      setActiveTab((prev) => (prev + 1) % testimonials.length);
    }, ROTATION_TIME);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(rotationTimer);
    };
  }, [activeTab, testimonials.length]);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  // Mobile label navigation handler
  const handleMobileLabelClick = () => {
    setActiveTab((prev) => (prev + 1) % testimonials.length);
  };

  // Keyboard support for mobile label
  const handleMobileKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleMobileLabelClick();
    }
  };

  return (
    <>
      <style>{animationStyles}</style>

      <section className="px-2 sm:px-2 lg:px-4 max-w-7xl mx-auto py-4 sm:py-10 lg:py-12 xl:py-12">
        {/* Heading */}
        <div className="text-center mb-6 sm:mb-6 lg:mb-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-light text-gray-900 leading-tight">
            What CPA firms say
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            <span className="text-gray-400">
              after the first year with FinliGen
            </span>
          </h2>
        </div>

        {/* Main Testimonial Card */}
        <div className="bg-gray-100 rounded-[24px] sm:rounded-[28px] lg:rounded-[32px]  grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* LEFT CONTENT */}
          <div
            key={activeTab}
            style={{ animation: "fadeIn 0.6s ease-out" }}
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-4 sm:mb-6 leading-snug">
              {current.company}
            </h3>

            <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
              {current.text}
            </p>

            <button className="w-full sm:w-auto px-5 sm:px-6 py-3 bg-[#7ecfc0] text-white rounded-full hover:bg-[#6dbdab] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
              Start a free 2-week trial engagement
            </button>

            <div className="mt-4 sm:mt-6 lg:mt-6 pt-4 sm:pt-6 border-t border-gray-200">
              <p className="text-sm sm:text-base font-semibold text-gray-900">
                {current.author}
                <span className="block sm:inline text-gray-500 font-normal sm:ml-2">
                  – {current.role}
                </span>
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            key={`img-${activeTab}`}
            className="rounded-2xl sm:rounded-3xl overflow-hidden h-[240px] sm:h-[300px] md:h-[360px] lg:h-[460px] xl:h-[520px]"
            style={{ animation: "scaleIn 0.6s ease-out" }}
          >
            <img
              src={current.img}
              alt={current.company}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* ==================== MOBILE SINGLE LABEL (Only visible on mobile) ==================== */}
        <div className="block sm:hidden mt-8">
          <button
            onClick={handleMobileLabelClick}
            onKeyDown={handleMobileKeyDown}
            className="w-full max-w-[90%] mx-auto flex flex-col items-center gap-3 py-4 px-2 rounded-2xl bg-white border border-gray-200 shadow-sm hover:border-[#7ecfc0] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#7ecfc0] focus:ring-offset-2"
            aria-label="Next testimonial"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">{tabs[activeTab].icon}</span>
              <span 
                key={activeTab} // Key change triggers re-render with animation
                className="text-sm font-medium text-gray-900 text-center animate-labelFade"
                style={{ animation: "labelFade 0.3s ease-out" }}
              >
                {tabs[activeTab].label}
              </span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="w-4 h-4 text-gray-400" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Progress Bar for Mobile */}
            <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
              <span
                className="block h-full bg-[#7ecfc0]"
                style={{
                  width: `${progress}%`,
                  transition: "width 50ms linear",
                }}
              />
            </div>
          </button>
        </div>

        {/* ==================== DESKTOP 3-TAB LAYOUT (Only visible on tablet & desktop) ==================== */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mt-8 sm:mt-10 lg:mt-12">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => handleTabClick(i)}
              className={`relative text-left rounded-2xl border bg-white px-4 sm:px-5 py-4 sm:py-5 pb-6 sm:pb-7 transition-all duration-300 ${
                activeTab === i
                  ? "border-[#7ecfc0] text-gray-900 shadow-sm"
                  : "border-gray-200 text-gray-400 hover:text-gray-700"
              }`}
            >
              <div className="flex items-start gap-3">
                <span className="text-xl sm:text-2xl shrink-0">{tab.icon}</span>
                <span className="text-sm sm:text-base font-medium leading-snug">
                  {tab.label}
                </span>
              </div>

              {/* Progress Line */}
              <div className="absolute left-4 right-4 bottom-3 h-0.5 bg-gray-200 rounded-full overflow-hidden">
                <span
                  className="block h-full bg-[#7ecfc0]"
                  style={{
                    width: activeTab === i ? `${progress}%` : "0%",
                    transition: activeTab === i ? "width 50ms linear" : "none",
                  }}
                />
              </div>
            </button>
          ))}
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;