import React, { useEffect, useState } from "react";

const TestimonialsSection = () => {
  // INTERNAL STATE
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0);

  const ROTATION_TIME = 5000;

  const tabs = [
    { icon: "⚡", label: "Electric car charging station" },
    { icon: "☀", label: "Residential solar panels" },
    { icon: "🌀", label: "Wind power for industry" },
  ];

  const testimonials = [
    {
      company: "Medtronic",
      text: `"We have used services from Xurya for most of our stations, this is our strategic step to continue to increase the number of solar panel usage for our stations, we are very satisfied with the services from Xurya."`,
      author: "Jeniffer Kolobaly",
      role: "CTO EV Medtronic",
      img: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=800&q=80",
    },
    {
      company: "Headspace",
      text: `"Outstanding solar panel installations that have helped us achieve our sustainability goals. The team's expertise is unmatched in the industry."`,
      author: "Michael Chen",
      role: "Director of Operations",
      img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    },
    {
      company: "Trend Micro",
      text: `"Wind power solutions provided by Xurya have transformed our energy consumption. Reliable, efficient, and environmentally friendly."`,
      author: "Sarah Williams",
      role: "Head of Sustainability",
      img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80",
    },
  ];

  const current = testimonials[activeTab];

  // ANIMATIONS
  const animationStyles = `
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes scaleIn {
      from {
        opacity: 0;
        transform: scale(0.95);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
  `;

  // AUTO ROTATION
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 0;
        }

        return prev + 1;
      });
    }, ROTATION_TIME / 100);

    const rotationTimer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % testimonials.length);
      setProgress(0);
    }, ROTATION_TIME);

    return () => {
      clearInterval(progressInterval);
      clearInterval(rotationTimer);
    };
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
          See how we solve
          <br />
          problems,{" "}
          <span className="text-gray-400">
            right on target
          </span>
        </h2>

        {/* Main Card */}
        <div className="bg-gray-100 rounded-3xl p-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div
            key={activeTab}
            style={{
              animation: "fadeIn 0.6s ease-out",
            }}
          >
            <h3 className="text-2xl font-semibold mb-6">
              {current.company}
            </h3>

            <p className="text-gray-700 leading-relaxed mb-8">
              {current.text}
            </p>

            <button className="px-6 py-3 bg-emerald-400 text-white rounded-full hover:bg-emerald-500 transition-all hover:scale-105 hover:shadow-lg">
              View case study
            </button>

            <div className="mt-12">
              <p className="font-semibold">
                {current.author}{" "}
                <span className="text-gray-500 font-normal">
                  – {current.role}
                </span>
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            key={`img-${activeTab}`}
            className="rounded-2xl overflow-hidden h-[400px]"
            style={{
              animation: "scaleIn 0.6s ease-out",
            }}
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
                activeTab === i
                  ? "text-gray-900"
                  : "text-gray-400"
              }`}
            >
              <span>{tab.icon}</span>

              <span>{tab.label}</span>

              {/* Background Line */}
              <span className="absolute bottom-0 left-0 h-0.5 w-full bg-gray-300" />

              {/* Progress Line */}
              <span
                className="absolute bottom-0 left-0 h-0.5 bg-emerald-400"
                style={{
                  width:
                    activeTab === i
                      ? `${progress}%`
                      : "0%",
                  transition:
                    activeTab === i
                      ? "width 50ms linear"
                      : "none",
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