import { useEffect, useState } from "react";

const TestimonialsSection = () => {
  // INTERNAL STATE
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0);

  const ROTATION_TIME = 5000;

  // Updated for FinliGen (based on the copy you shared)
  const tabs = [
    { icon: "🧾", label: "White‑label CPA outsourcing" },
    { icon: "🛡️", label: "CA‑reviewed output & quality control" },
    { icon: "⚡", label: "Fast turnaround in busy season" },
  ];

  /**
   * NOTE:
   * The quotes below are taken from your provided draft content.
   * Before production publish: replace placeholder attributions (e.g., "Jennifer M., CPA")
   * with real names/firm names + consent.
   */
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

  // ANIMATIONS
  const animationStyles = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes scaleIn {
      from { opacity: 0; transform: scale(0.95); }
      to { opacity: 1; transform: scale(1); }
    }
  `;

  // AUTO ROTATION
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, ROTATION_TIME / 100);

    const rotationTimer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % testimonials.length);
      setProgress(0);
    }, ROTATION_TIME);

    return () => {
      clearInterval(progressInterval);
      clearInterval(rotationTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // MANUAL TAB CHANGE
  const handleTabClick = (index) => {
    setActiveTab(index);
    setProgress(0);
  };

  return (
    <>
      <style>{animationStyles}</style>

      <section className="px-8 max-w-[1400px] mx-auto py-32">
        {/* Heading */}
        <h2 className="text-5xl font-light text-center mb-16 leading-tight">
          What CPA firms say
          <br />
          <span className="text-gray-400">after the first year with FinliGen</span>
        </h2>

        {/* Main Card */}
        <div className="bg-gray-100 rounded-3xl p-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div
            key={activeTab}
            style={{ animation: "fadeIn 0.6s ease-out" }}
          >
            <h3 className="text-2xl font-semibold mb-6">{current.company}</h3>

            <p className="text-gray-700 leading-relaxed mb-8">{current.text}</p>

            <button className="px-6 py-3 bg-[#7ecfc0] text-white rounded-full hover:bg-[#6dbdab] transition-all hover:scale-105 hover:shadow-lg">
              Start a free 2‑week trial engagement
            </button>

            <div className="mt-12">
              <p className="font-semibold">
                {current.author}{" "}
                <span className="text-gray-500 font-normal">– {current.role}</span>
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            key={`img-${activeTab}`}
            className="rounded-2xl overflow-hidden h-[400px]"
            style={{ animation: "scaleIn 0.6s ease-out" }}
          >
            <img
              src={current.img}
              alt={current.company}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* TABS */}
        <div className="flex justify-center gap-12 mt-12 flex-wrap">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => handleTabClick(i)}
              className={`flex items-center gap-2 pb-3 transition-all relative ${
                activeTab === i ? "text-gray-900" : "text-gray-400"
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>

              {/* Background Line */}
              <span className="absolute bottom-0 left-0 h-0.5 w-full bg-gray-300" />

              {/* Progress Line */}
              <span
                className="absolute bottom-0 left-0 h-0.5 bg-[#7ecfc0]"
                style={{
                  width: activeTab === i ? `${progress}%` : "0%",
                  transition: activeTab === i ? "width 50ms linear" : "none",
                }}
              />
            </button>
          ))}
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;