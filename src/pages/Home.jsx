import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  ArrowUpRight,
  ShieldCheck,
  BarChart3,
  BadgeCheck,
  Star,
  MoreVertical,
} from "lucide-react";

const Home = () => {
  return (
    <div className="w-full bg-[#f5f5f3]">

      {/* Header */}
      <Header />
        <section className="relative overflow-hidden bg-[#f5f5f3] pt-10 pb-12">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">

                {/* Floating Icons */}
                <div className="hidden lg:block">

                {/* Left Icons */}
                <div className="absolute left-[200px] top-[240px]">
                    <div className="w-14 h-14 rounded-full border border-[#0d3d43] flex items-center justify-center bg-white shadow-sm">
                    <ArrowUpRight
                        size={24}
                        className="text-[#0d3d43]"
                    />
                    </div>
                </div>

                <div className="absolute left-[260px] top-[200px]">
                    <div className="w-12 h-12 rounded-full bg-[#0d3d43] flex items-center justify-center shadow-sm">
                    <ShieldCheck
                        size={18}
                        className="text-white"
                    />
                    </div>
                </div>

                <div className="absolute left-[260px] top-[285px]">
                    <div className="w-11 h-11 rounded-full bg-[#dff5b7] flex items-center justify-center shadow-sm">
                    <BadgeCheck
                        size={17}
                        className="text-[#0d3d43]"
                    />
                    </div>
                </div>

                {/* Right Icons */}
                <div className="absolute right-[180px] top-[135px]">
                    <div className="w-11 h-11 rounded-full bg-[#dff5b7] flex items-center justify-center shadow-sm">
                    <BarChart3
                        size={17}
                        className="text-[#0d3d43]"
                    />
                    </div>
                </div>

                <div className="absolute right-[260px] top-[245px]">
                    <div className="w-14 h-14 rounded-full border border-[#0d3d43] flex items-center justify-center bg-white shadow-sm">
                    <div className="flex flex-col gap-[3px]">
                        <div className="w-5 h-[2px] bg-[#0d3d43] rounded-full"></div>
                        <div className="w-5 h-[2px] bg-[#0d3d43] rounded-full"></div>
                        <div className="w-5 h-[2px] bg-[#0d3d43] rounded-full"></div>
                    </div>
                    </div>
                </div>
                </div>

                {/* Main Content */}
                <div className="text-center max-w-5xl mx-auto">

                {/* Heading */}
                <motion.h1
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 1,
                    ease: "easeOut",
                }}
                className="text-[34px] sm:text-[44px] md:text-[58px] leading-tight font-bold tracking-tight text-[#171717]"
                >
                    The Future of Manufacturing
                    <br />
                    with{" "}
                    <span className="text-[#0d3d43]">
                    Latest Technology
                    </span>
                </motion.h1>

                {/* Description */}
                <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 1,
                    delay: 0.3,
                }}
                className="mt-5 text-[18px] text-[#5b5b5b] leading-8 max-w-3xl mx-auto"
                >
                    Expert tech to elevate your manufacturing.
                    Let's take your business further.
                </motion.p>

                {/* Buttons */}
                <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 1,
                    delay: 0.5,
                }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-7"
                >
                    <button className="bg-[#0d3d43] hover:bg-[#092d33] text-white px-10 py-4 rounded-full text-[16px] font-medium transition-all duration-300 shadow-sm">
                    Get Started
                    </button>

                    <button className="bg-white border border-[#e5e5e5] hover:border-[#cfcfcf] text-[#1b1b1b] px-10 py-4 rounded-full text-[16px] font-medium transition-all duration-300 shadow-sm">
                    Try Demo
                    </button>
                </motion.div>

                {/* Ratings */}
                <div className="mt-5 flex flex-col items-center">

                    <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((item) => (
                        <Star
                        key={item}
                        size={18}
                        fill="#facc15"
                        className="text-[#facc15]"
                        />
                    ))}

                    <span className="ml-2 text-[#171717] font-medium text-[16px]">
                        5.0
                    </span>
                    </div>

                    <p className="mt-2 text-[#6b6b6b] text-[15px]">
                    from 80+{" "}
                    <span className="underline text-[#171717]">
                        reviews
                    </span>
                    </p>
                </div>
                </div>

                {/* Bottom Cards */}
                <div className="-mt-10 hidden xl:flex justify-center items-end gap-6">

                {/* Image Card - From Left */}
                <motion.div
                    initial={{ opacity: 0, x: -120 }}
                    animate={{
                    opacity: 1,
                    x: 0,
                    y: [0, -12, 0],
                    }}
                    transition={{
                    opacity: { duration: 1, delay: 0.2 },
                    x: { duration: 1, delay: 0.2, ease: "easeOut" },
                    y: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    },
                    }}
                    className="w-[250px] h-[420px] rounded-[28px] overflow-hidden shadow-sm"
                >
                    <img
                    src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1200&auto=format&fit=crop"
                    alt="Factory"
                    className="w-full h-full object-cover"
                    />
                </motion.div>

                {/* Card 1 - From Left */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{
                    opacity: 1,
                    x: 0,
                    y: [0, -12, 0],
                    }}
                    transition={{
                    opacity: { duration: 1, delay: 0.2 },
                    x: { duration: 1, delay: 0.2, ease: "easeOut" },
                    y: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    },
                    }}
                    className="w-[210px] h-[320px] bg-[#0d3d43] rounded-[28px] p-8 flex flex-col justify-center shadow-sm"
                >
                    <h2 className="text-white text-[52px] font-semibold leading-none">
                    100+
                    </h2>

                    <p className="mt-6 text-[#d4d4d4] text-[18px] leading-8">
                    Our Esteemed
                    <br />
                    Clients and
                    <br />
                    Partners
                    </p>
                </motion.div>

                {/* Center Card - From Bottom */}
                <motion.div
                    initial={{ opacity: 0, y: 120 }}
                    animate={{
                    opacity: 1,
                    x: 0,
                    y: [0, -12, 0],
                    }}
                    transition={{
                    opacity: { duration: 1, delay: 0.2 },
                    x: { duration: 1, delay: 0.2, ease: "easeOut" },
                    y: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    },
                    }}
                    className="w-[240px] h-[240px] bg-white rounded-[28px] p-8 shadow-sm border border-[#ededed] relative"
                >
                    <div className="flex items-center justify-between">

                    <div className="w-11 h-11 rounded-xl bg-[#dff5b7] flex items-center justify-center">
                        <BadgeCheck
                        size={20}
                        className="text-[#0d3d43]"
                        />
                    </div>

                    <MoreVertical
                        size={20}
                        className="text-[#8b8b8b]"
                    />
                    </div>

                    <p className="mt-7 text-[#707070] text-[16px]">
                    Total Projects
                    </p>

                    <div className="flex items-center gap-2 mt-1">
                    <div className="w-2 h-2 rounded-full bg-[#0d3d43]"></div>

                    <span className="text-[#0d3d43] text-[13px] font-medium">
                        8%
                    </span>
                    </div>

                    <h2 className="mt-2 text-[#171717] text-[44px] leading-none font-semibold">
                    1951+
                    </h2>

                    <p className="mt-2 text-[#8b8b8b] text-[14px] leading-6">
                    Increase of{" "}
                    <span className="text-[#77c255] font-medium">
                        126
                    </span>{" "}
                    this month
                    </p>
                </motion.div>

                {/* Card 3 - From Right */}
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{
                    opacity: 1,
                    x: 0,
                    y: [0, -12, 0],
                    }}
                    transition={{
                    opacity: { duration: 1, delay: 0.2 },
                    x: { duration: 1, delay: 0.2, ease: "easeOut" },
                    y: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    },
                    }}
                    className="w-[210px] h-[320px] bg-[#dff5b7] rounded-[28px] p-8 flex flex-col justify-center shadow-sm"
                >
                    <h2 className="text-[#171717] text-[52px] font-semibold leading-none">
                    6+
                    </h2>

                    <p className="mt-6 text-[#3d3d3d] text-[18px] leading-8">
                    Years of
                    <br />
                    Dedicated
                    <br />
                    Service
                    </p>
                </motion.div>

                {/* Last Card - From Right */}
                <motion.div
                    initial={{ opacity: 0, x: 120 }}
                    animate={{
                    opacity: 1,
                    x: 0,
                    y: [0, -12, 0],
                    }}
                    transition={{
                    opacity: { duration: 1, delay: 0.2 },
                    x: { duration: 1, delay: 0.2, ease: "easeOut" },
                    y: {
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    },
                    }}
                    className="relative overflow-hidden w-[250px] h-[420px] bg-[#0d3d43] rounded-[28px] p-9 flex flex-col justify-end shadow-sm"
                >
                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-700/30 to-transparent"></div>

                    <div className="relative z-10">

                    <div className="w-11 h-11 rounded-full border border-white/30 flex items-center justify-center mb-8">
                        <ShieldCheck
                        size={18}
                        className="text-white"
                        />
                    </div>

                    <h2 className="text-white text-[36px] leading-[1.25] font-medium">
                        Achieve Optimal
                        Efficiency and Boost
                        Productivity
                    </h2>
                    </div>
                </motion.div>
                </div>
            </div>
        </section>
    {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;