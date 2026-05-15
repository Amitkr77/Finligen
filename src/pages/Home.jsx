import { motion } from "framer-motion";
import { useEffect } from "react";
import gsap from "gsap";

import ImpactSection from "../components/Impact";
import TestimonialsSection from "../components/TestimonialsSection";
import { TiSpannerOutline } from "react-icons/ti";
import { IoCubeOutline } from "react-icons/io5";
import { LuShieldHalf } from "react-icons/lu";
import { AiOutlineLineChart } from "react-icons/ai";
import { TbStack, TbNorthStar } from "react-icons/tb";
import { BsGlobe } from "react-icons/bs";
import {
  ArrowUpRight,
  ShieldCheck,
  BarChart3,
  BadgeCheck,
  Star,
  MoreVertical,
} from "lucide-react";


const Home = () => {
    useEffect(() => {
    gsap.to("#pin-windmill-svg", {
        rotate: 360,
        duration: 8,
        repeat: -1,
        ease: "linear",
    });
}, []);
  return (
    <div className="w-full bg-[#f5f5f3]">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-[#f5f5f3] pt-2 pb-12">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">

                {/* Floating Icons */}
                <div className="hidden lg:block">

                {/* Left Icons */}
                <div className="absolute left-[200px] top-[130px]">
                    <div className="w-14 h-14 rounded-full border border-[#0d3d43] flex items-center justify-center bg-white shadow-sm">
                    <ArrowUpRight
                        size={24}
                        className="text-[#0d3d43]"
                    />
                    </div>
                </div>

                <div className="absolute left-[260px] top-[90px]">
                    <div className="w-12 h-12 rounded-full bg-[#0d3d43] flex items-center justify-center shadow-sm">
                    <ShieldCheck
                        size={18}
                        className="text-white"
                    />
                    </div>
                </div>

                <div className="absolute left-[260px] top-[175px]">
                    <div className="w-11 h-11 rounded-full bg-[#dff5b7] flex items-center justify-center shadow-sm">
                    <BadgeCheck
                        size={17}
                        className="text-[#0d3d43]"
                    />
                    </div>
                </div>

                {/* Right Icons */}
                <div className="absolute right-[180px] top-[65px]">
                    <div className="w-11 h-11 rounded-full bg-[#dff5b7] flex items-center justify-center shadow-sm">
                    <BarChart3
                        size={17}
                        className="text-[#0d3d43]"
                    />
                    </div>
                </div>

                {/* <div className="absolute right-[260px] top-[155px]">
                    <div className="w-14 h-14 rounded-full border border-[#0d3d43] flex items-center justify-center bg-white shadow-sm">
                    <div className="flex flex-col gap-[3px]">
                        <div className="w-5 h-[2px] bg-[#0d3d43] rounded-full"></div>
                        <div className="w-5 h-[2px] bg-[#0d3d43] rounded-full"></div>
                        <div className="w-5 h-[2px] bg-[#0d3d43] rounded-full"></div>
                    </div>
                    </div>
                </div> */}
                </div>
                {/* Floating Analytics Icon */}
                    {/* <div className="absolute right-[180px] top-[35px]">
                    <div className="w-11 h-11 rounded-full bg-[#dff5b7] flex items-center justify-center shadow-sm">
                        <BarChart3
                        size={17}
                        className="text-[#0d3d43]"
                        />
                    </div>
                    </div> */}

                    {/* GSAP Rotating Windmill */}
                    <div
                    id="pin-windmill-wrap"
                    className="absolute right-[260px] top-[155px]"
                    >
                    <div
                        id="pin-windmill"
                        className="flex items-center justify-center"
                    >

                        <div
                        id="pin-windmill-svg"
                        className="w-16 h-16 rounded-full border border-[#0d3d43] bg-white shadow-sm flex items-center justify-center"
                        >

                        {/* Windmill Lines */}
                        <div className="relative w-7 h-7">
                            <TbNorthStar
                            size={28}
                            className="text-[#0d3d43]"
                            />
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
                className="mt-1 text-[18px] text-[#5b5b5b] leading-8 max-w-3xl mx-auto"
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
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4"
                >
                    <button className="bg-[#0d3d43] hover:bg-[#092d33] text-white px-10 py-4 rounded-full text-[16px] font-medium transition-all duration-300 shadow-sm">
                    Get Started
                    </button>

                    <button className="bg-white border border-[#e5e5e5] hover:border-[#cfcfcf] text-[#1b1b1b] px-10 py-4 rounded-full text-[16px] font-medium transition-all duration-300 shadow-sm">
                    Try Demo
                    </button>
                </motion.div>

                {/* Ratings */}
                <div className="mt-3 flex flex-col items-center">

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

                    <p className="mt-1 text-[#6b6b6b] text-[15px]">
                    from 80+{" "}
                    <span className="underline text-[#171717]">
                        reviews
                    </span>
                    </p>
                </div>
                </div>

                {/* Bottom Cards */}
                <div className="-mt-20 hidden xl:flex justify-center items-end gap-6">

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
                    className="w-[250px] h-[380px] rounded-[28px] overflow-hidden shadow-sm"
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
                    className="w-[210px] h-[280px] bg-[#0d3d43] rounded-[28px] p-8 flex flex-col justify-center shadow-sm"
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
                    className="w-[220px] h-[230px] bg-white rounded-[28px] p-6 shadow-sm border border-[#ededed] relative"
                >
                    <div className="flex items-center justify-between">

                    <div className="-mt-2 w-11 h-11 rounded-xl bg-[#dff5b7] flex items-center justify-center">
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

                    <p className="mt-4 text-[#707070] text-[16px]">
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
                    className="w-[210px] h-[280px] bg-[#dff5b7] rounded-[28px] p-8 flex flex-col justify-center shadow-sm"
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
                    className="relative overflow-hidden w-[250px] h-[380px] bg-[#0d3d43] rounded-[28px] p-9 flex flex-col justify-end shadow-sm"
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

        {/* Services Section */}
        <section className="w-full bg-[#06363c] py-10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">

                {/* Heading */}
                <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                variants={{
                hidden: {
                    opacity: 0,
                    x: -120,
                },
                visible: {
                    opacity: 1,
                    x: 0,
                },
                }}
                transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
                }}
                className="text-center max-w-3xl mx-auto"
                >

                <h2 className="text-white text-[34px] md:text-[46px] font-semibold leading-[1.15] tracking-tight">
                    Efficient and Integrated
                    <br />
                    Manufacturing Services
                </h2>

                <p className="mt-5 text-[#b5c7c8] text-[17px] leading-7">
                    Simplify operations with our efficient,
                    quality-focused services.
                </p>
                </motion.div>

                {/* Cards Grid */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.15 }}
                    variants={{
                        hidden: {},
                        visible: {
                        transition: {
                            staggerChildren: 0.15,
                        },
                        },
                    }}
                    className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
                    >

                    {/* CARD 1 */}
                    <motion.div
                        variants={{
                            hidden: {
                            opacity: 0,
                            clipPath: "inset(0 100% 0 0)",
                            },
                            visible: {
                            opacity: 1,
                            clipPath: "inset(0 0% 0 0)",
                            },
                        }}
                        transition={{
                            duration: 0.3,
                            ease: [0.77, 0, 0.175, 1],
                        }}
                        whileHover={{
                            y: -8,
                            scale: 1.02,
                        }}
                        className="group relative bg-[#11464d] hover:bg-[#15525a] rounded-sm p-4 min-h-[250px] transition-all duration-100"
                        >

                        <div className="flex items-start justify-between">

                        <div className="text-white text-[34px]">
                            <TbNorthStar size={34} />
                            
                        </div>

                        <motion.div
                            whileHover={{
                            x: 3,
                            y: -3,
                            }}
                            transition={{ duration: 0.25 }}
                            className="text-white text-[22px] transition-all duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]"
                        >
                            ↗
                        </motion.div>
                        </div>

                        <div className="mt-10">

                        <h3 className="text-white text-[24px] leading-tight font-medium">
                            Production and Assembly
                        </h3>

                        <p className="mt-5 text-[#c0d0d1] text-[16px] leading-7">
                            Details on production processes, assembly,
                            capacity, and product types.
                        </p>
                        </div>
                    </motion.div>

                    {/* CARD 2 */}
                    <motion.div
                        variants={{
                            hidden: {
                            opacity: 0,
                            clipPath: "inset(0 100% 0 0)",
                            },
                            visible: {
                            opacity: 1,
                            clipPath: "inset(0 0% 0 0)",
                            },
                        }}
                        transition={{
                            duration: 0.3,
                            ease: [0.77, 0, 0.175, 1],
                        }}
                        whileHover={{
                            y: -8,
                            scale: 1.02,
                        }}
                        className="group relative bg-[#11464d] hover:bg-[#15525a] rounded-sm p-4 min-h-[250px] transition-all duration-100"
                        >

                        <div className="flex items-start justify-between">

                        <div className="text-white text-[34px]">
                            <TbStack size={34} />
                        </div>

                        <motion.div
                            whileHover={{
                            x: 3,
                            y: -3,
                            }}
                            transition={{ duration: 0.25 }}
                            className="text-white text-[22px] transition-all duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]"
                        >
                            ↗
                        </motion.div>
                        </div>

                        <div className="mt-10">

                        <h3 className="text-white text-[24px] leading-tight font-medium">
                            Custom Manufacturing
                        </h3>

                        <p className="mt-5 text-[#c0d0d1] text-[16px] leading-7">
                            Custom product creation with design and
                            customization options.
                        </p>
                        </div>
                    </motion.div>

                    {/* CARD 3 */}
                    <motion.div
                        variants={{
                            hidden: {
                            opacity: 0,
                            clipPath: "inset(0 100% 0 0)",
                            },
                            visible: {
                            opacity: 1,
                            clipPath: "inset(0 0% 0 0)",
                            },
                        }}
                        transition={{
                            duration: 0.3,
                            ease: [0.77, 0, 0.175, 1],
                        }}
                        whileHover={{
                            y: -8,
                            scale: 1.02,
                        }}
                        className="group relative bg-[#11464d] hover:bg-[#15525a] rounded-sm p-4 min-h-[250px] transition-all duration-100"
                        >

                        <div className="flex items-start justify-between">

                        <div className="text-white text-[34px]">
                            <TiSpannerOutline size={34} />
                        </div>

                        <motion.div
                            whileHover={{
                            x: 3,
                            y: -3,
                            }}
                            transition={{ duration: 0.25 }}
                            className="text-white text-[22px] transition-all duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]"
                        >
                            ↗
                        </motion.div>
                        </div>

                        <div className="mt-10">

                        <h3 className="text-white text-[24px] leading-tight font-medium">
                            Quality Control
                        </h3>

                        <p className="mt-5 text-[#c0d0d1] text-[16px] leading-7">
                            Procedures and systems in place to ensure
                            high product quality.
                        </p>
                        </div>
                    </motion.div>

                    {/* CARD 4 */}
                    <motion.div
                        variants={{
                            hidden: {
                            opacity: 0,
                            clipPath: "inset(0 100% 0 0)",
                            },
                            visible: {
                            opacity: 1,
                            clipPath: "inset(0 0% 0 0)",
                            },
                        }}
                        transition={{
                            duration: 0.3,
                            ease: [0.77, 0, 0.175, 1],
                        }}
                        whileHover={{
                            y: -8,
                            scale: 1.02,
                        }}
                        className="group relative bg-[#11464d] hover:bg-[#15525a] rounded-sm p-4 min-h-[250px] transition-all duration-100"
                        >

                        <div className="flex items-start justify-between">

                        <div className="text-white text-[34px]">
                            <LuShieldHalf size={34} />
                        </div>

                        <motion.div
                            whileHover={{
                            x: 3,
                            y: -3,
                            }}
                            transition={{ duration: 0.25 }}
                            className="text-white text-[22px] transition-all duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]"
                        >
                            ↗
                        </motion.div>
                        </div>

                        <div className="mt-10">

                        <h3 className="text-white text-[24px] leading-tight font-medium">
                            Technology and Innovation
                        </h3>

                        <p className="mt-5 text-[#c0d0d1] text-[16px] leading-7">
                            Details on the latest manufacturing
                            technologies and ongoing innovations.
                        </p>
                        </div>
                    </motion.div>

                    {/* CARD 5 */}
                    <motion.div
                        variants={{
                        hidden: {
                            opacity: 0,
                            clipPath: "inset(0 100% 0 0)",
                        },
                        visible: {
                            opacity: 1,
                            clipPath: "inset(0 0% 0 0)",
                        },
                        }}
                        transition={{
                        duration: 0.3,
                        ease: [0.22, 1, 0.36, 1],
                        }}
                        whileHover={{
                        y: -8,
                        scale: 1.02,
                        }}
                        className="group relative bg-[#11464d] hover:bg-[#15525a] rounded-sm p-4 min-h-[250px] transition-all duration-100"
                    >

                        <div className="flex items-start justify-between">

                        <div className="text-white text-[34px]">
                            <IoCubeOutline size={34} />
                        </div>

                        <motion.div
                            whileHover={{
                            x: 3,
                            y: -3,
                            }}
                            transition={{ duration: 0.25 }}
                            className="text-white text-[22px] transition-all duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]"
                        >
                            ↗
                        </motion.div>
                        </div>

                        <div className="mt-10">

                        <h3 className="text-white text-[24px] leading-tight font-medium">
                            Packaging and Logistics
                        </h3>

                        <p className="mt-5 text-[#c0d0d1] text-[16px] leading-7">
                            Packaging and logistics for shipping to
                            customers and distributors.
                        </p>
                        </div>
                    </motion.div>

                    {/* CARD 6 */}
                    <motion.div
                        variants={{
                            hidden: {
                            opacity: 0,
                            clipPath: "inset(0 100% 0 0)",
                            },
                            visible: {
                            opacity: 1,
                            clipPath: "inset(0 0% 0 0)",
                            },
                        }}
                        transition={{
                            duration: 0.3,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        whileHover={{
                            y: -8,
                            scale: 1.02,
                        }}
                        className="group relative bg-[#11464d] hover:bg-[#15525a] rounded-sm p-4 min-h-[250px] transition-all duration-100"
                        >

                        <div className="flex items-start justify-between">

                        <div className="text-white text-[34px]">
                            <AiOutlineLineChart size={34} />
                        </div>

                        <motion.div
                            whileHover={{
                            x: 3,
                            y: -3,
                            }}
                            transition={{ duration: 0.3 }}
                            className="text-white text-[22px] transition-all duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]"
                        >
                            ↗
                        </motion.div>
                        </div>

                        <div className="mt-10">

                        <h3 className="text-white text-[24px] leading-tight font-medium">
                            Consulting Market Research
                        </h3>

                        <p className="mt-5 text-[#c0d0d1] text-[16px] leading-7">
                            Services to help companies understand
                            market needs and provide strategic advice.
                        </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full bg-[#f5f5f3] py-10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-16">
                    {/* LEFT SIDE */}
                    <motion.div
                        initial={{
                        opacity: 0,
                        x: -100,
                        }}
                        whileInView={{
                        opacity: 1,
                        x: 0,
                        }}
                        viewport={{ once: false, amount: 0.2 }}
                        transition={{
                        duration: 1,
                        ease: "easeOut",
                        }}
                        className="relative flex justify-center xl:justify-start"
                    >

                        {/* Main Dashboard Card */}
                        <div className="relative w-full max-w-[560px] min-h-[500px] bg-[#efefed] rounded-[38px] p-10 overflow-hidden">

                        {/* Top Stats */}
                        <div className="bg-[#f8f8f7] rounded-[28px] p-8 shadow-sm">

                            <div className="flex items-center justify-between">

                            <div>
                                <p className="text-[#8d8d8d] text-[18px] font-medium">
                                Total Projects
                                </p>

                                <div className="flex items-center gap-4 mt-4">

                                <h3 className="text-[#111] text-[42px] font-semibold leading-none">
                                    1475
                                </h3>

                                <div className="flex items-center gap-2 text-[#43c581] text-[18px] font-medium">
                                    ↗ 34%
                                </div>
                                </div>
                            </div>
                            </div>

                            {/* Progress Items */}
                            <div className="mt-12 space-y-7">

                            {/* Item */}
                            <div>

                                <div className="flex items-center justify-between text-[15px] text-[#7a7a7a] mb-2">
                                <span>Finished</span>
                                <span className="text-[#171717] font-medium">
                                    10%
                                </span>
                                </div>

                                <div className="w-full h-4 rounded-full bg-[#ececeb] overflow-hidden">
                                <div className="w-[40%] h-full bg-[#dde2df] rounded-full"></div>
                                </div>
                            </div>

                            {/* Item */}
                            <div>

                                <div className="flex items-center justify-between text-[15px] text-[#7a7a7a] mb-2">
                                <span>In Progress</span>
                                <span className="text-[#171717] font-medium">
                                    13%
                                </span>
                                </div>

                                <div className="w-full h-4 rounded-full bg-[#ececeb] overflow-hidden">
                                <div className="w-[55%] h-full bg-[#dde2df] rounded-full"></div>
                                </div>
                            </div>

                            {/* Item */}
                            <div>

                                <div className="flex items-center justify-between text-[15px] text-[#7a7a7a] mb-2">
                                <span>Rejected</span>
                                <span className="text-[#171717] font-medium">
                                    11%
                                </span>
                                </div>

                                <div className="w-full h-4 rounded-full bg-[#ececeb] overflow-hidden">
                                <div className="w-[48%] h-full bg-[#dde2df] rounded-full"></div>
                                </div>
                            </div>
                            </div>

                            {/* Divider */}
                            <div className="mt-10 h-[1px] bg-[#e4e4e2]"></div>

                            {/* Bar Chart */}
                            <div className="mt-10 flex items-end gap-5 h-[120px]">

                            <div className="w-10 h-[95px] bg-[#052f35] rounded-t-md"></div>

                            <div className="w-10 h-[72px] bg-[#2ac497] rounded-t-md"></div>

                            <div className="w-10 h-[52px] bg-[#052f35] rounded-t-md"></div>

                            <div className="w-10 h-[82px] bg-[#2ac497] rounded-t-md"></div>
                            </div>
                        </div>

                        {/* Floating Analytics Card */}
                        <motion.div
                            initial={{
                            opacity: 0,
                            scale: 0.85,
                            y: 40,
                            }}
                            whileInView={{
                            opacity: 1,
                            scale: 1,
                            y: 0,
                            }}
                            viewport={{ once: false }}
                            transition={{
                            duration: 0.2,
                            delay: 0.5,
                            ease: "easeOut",
                            }}
                            whileHover={{
                            y: -6,
                            }}
                            className="absolute bottom-8 right-8 w-[280px] bg-white rounded-[28px] p-7 shadow-xl"
                        >

                            {/* Top */}
                            <div className="flex items-start justify-between">

                            <div className="w-12 h-12 rounded-xl bg-[#dff5b7] flex items-center justify-center text-[#052f35] text-[24px]">
                                ⌘
                            </div>

                            <div className="text-[#8b8b8b] text-[24px]">
                                ⋮
                            </div>
                            </div>

                            <div className="mt-7">

                            <div className="flex items-center gap-3">

                                <p className="text-[#5f5f5f] text-[18px]">
                                Total Projects
                                </p>

                                <div className="flex items-center gap-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#052f35]"></div>

                                <span className="text-[#052f35] text-[14px] font-medium">
                                    8%
                                </span>
                                </div>
                            </div>

                            <h3 className="mt-5 text-[#171717] text-[54px] leading-none font-semibold">
                                1951+
                            </h3>

                            <p className="mt-5 text-[#8a8a8a] text-[16px]">
                                Increase of{" "}
                                <span className="text-[#42c07d] font-medium">
                                126
                                </span>{" "}
                                this month
                            </p>
                            </div>
                        </motion.div>
                        </div>
                    </motion.div>

                {/* RIGHT SIDE */}
                <div>
                    {/* Heading */}
                    <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{
                        duration: 0.9,
                        ease: "easeOut",
                    }}
                    >

                    <h2 className="text-[#111] text-[36px] md:text-[46px] leading-[1.1] font-semibold tracking-tight">
                        Key Benefits of Our System for
                        Your Business Efficiency
                    </h2>

                    <p className="mt-2 text-[#777] text-[18px] leading-8 max-w-[560px]">
                        Our systems boost productivity, cut costs,
                        and drive business growth.
                    </p>
                    </motion.div>

                    {/* Benefits */}
                    <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    variants={{
                        hidden: {},
                        visible: {
                        transition: {
                            staggerChildren: 0.18,
                        },
                        },
                    }}
                    className="mt-8 space-y-12"
                    >

                    {/* Benefit Item */}
                    {[
                        {
                        title: "Boosting Quality with Tech",
                        desc: "With advanced technology, we help you achieve top product quality. Discover how we can enhance your standards.",
                        },
                        {
                        title: "Optimization Production Process",
                        desc: "Boost factory efficiency and productivity with our innovative solutions. See how the latest technology can maximize your output.",
                        },
                        {
                        title: "AI-Driven Production",
                        desc: "Leverage the power of AI to transform your manufacturing processes, achieving faster and more effective results.",
                        },
                    ].map((item, index) => (
                        <motion.div
                        key={index}
                        variants={{
                            hidden: {
                            opacity: 0,
                            x: 60,
                            },
                            visible: {
                            opacity: 1,
                            x: 0,
                            },
                        }}
                        transition={{
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        whileHover={{
                            x: 6,
                        }}
                        className="flex gap-5"
                        >

                        {/* Icon */}
                        <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-[#052f35] text-white flex items-center justify-center text-[14px]">
                            ✔
                        </div>

                        {/* Text */}
                        <div>

                            <h3 className="text-[#171717] text-[20px] font-semibold leading-tight">
                            {item.title}
                            </h3>

                            <p className="mt-1 text-[#6e6e6e] text-[14px] font-normal leading-4 max-w-[620px]">
                            {item.desc}
                            </p>
                        </div>
                        </motion.div>
                    ))}
                    </motion.div>
                </div>
                </div>
            </div>
        </section>
            <ImpactSection />
            <TestimonialsSection />
        {/* Values Section */}
        <section className="w-full bg-[#f5f5f3] py-10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">

                {/* Top Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                {/* Left Heading */}
                <motion.div
                    initial={{
                    opacity: 0,
                    x: -120,
                    }}
                    whileInView={{
                    opacity: 1,
                    x: 0,
                    }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{
                    duration: 1,
                    ease: "easeOut",
                    }}
                >

                    <p className="text-[#3f655b] text-[13px] tracking-[0.18em] font-semibold uppercase">
                    VALUES
                    </p>

                    <h2 className="mt-5 text-[#050816] text-[52px] md:text-[72px] leading-[1.02] tracking-[-0.05em] font-semibold">
                    Make your
                    <br />
                    business,
                    <span className="font-bold"> Future-ready</span>
                    </h2>
                </motion.div>

                {/* Right Paragraph */}
                <motion.div
                    initial={{
                    opacity: 0,
                    x: 80,
                    }}
                    whileInView={{
                    opacity: 1,
                    x: 0,
                    }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{
                    duration: 1,
                    delay: 0.2,
                    ease: "easeOut",
                    }}
                    className="lg:pt-20"
                >

                    <p className="max-w-[520px] text-[#5f6368] text-[24px] leading-[1.7] font-normal">
                    Manages modern manufacturing operations with
                    efficient technology-enabled systems and scalable
                    production workflows.
                    </p>
                </motion.div>
                </div>

                {/* Cards */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                    variants={{
                        hidden: {},
                        visible: {
                        transition: {
                            staggerChildren: 0.18,
                        },
                        },
                    }}
                    className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
                >
                    {/* Card 1 */}
                    <motion.div
                        variants={{
                        hidden: {
                            opacity: 0,
                            y: 120,
                        },
                        visible: {
                            opacity: 1,
                            y: 0,
                        },
                        }}
                        transition={{
                        duration: 0.3,
                        ease: "easeOut",
                        }}
                        whileHover={{
                        y: -10,
                        }}
                        className="group border border-[#e6e6e4] bg-white p-6 min-h-[200px] flex flex-col justify-between transition-all duration-500"
                    >
                        <div>
                        {/* Icon */}
                        <div className="relative w-12 h-12">
                            {/* Top Left */}
                            <div className="absolute top-0 left-0 w-6 h-6 border border-[#111] rounded-full"></div>
                            {/* Top Right */}
                            <div className="absolute top-0 right-0 w-6 h-6 border border-[#111] rounded-full"></div>
                            {/* Bottom Left */}
                            <div className="absolute bottom-0 left-0 w-6 h-6 border border-[#111] rounded-full"></div>
                            {/* Bottom Right */}
                            <div className="absolute bottom-0 right-0 w-6 h-6 border border-[#111] rounded-full"></div>
                        </div>
                            <h3 className="mt-8 text-[#111] text-[28px] leading-tight font-semibold">
                                Smart Manufacturing
                            </h3>
                            <p className="mt-6 text-[#666] text-[14px] leading-[1.8]">
                                Advanced production systems designed for
                                efficiency, automation, and scalable operations.
                            </p>
                        </div>
                        {/* Arrow */}
                        <div className="mt-6">
                            <div className="w-16 h-16 rounded-full text-[34px] border border-[#dcdcdc] flex items-center justify-center transition-all duration-100 group-hover:bg-[#0d3d43] group-hover:text-white">
                                ↗
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div
                        variants={{
                        hidden: {
                            opacity: 0,
                            y: 120,
                        },
                        visible: {
                            opacity: 1,
                            y: 0,
                        },
                        }}
                        transition={{
                        duration: 0.3,
                        ease: "easeOut",
                        }}
                        whileHover={{
                        y: -10,
                        }}
                        className="group border border-[#e6e6e4] bg-white p-6 min-h-[200px] flex flex-col justify-between transition-all duration-500"
                    >
                        <div>
                        {/* Icon */}
                        <div className="w-10 h-10 flex items-center justify-center">
                            <div className="relative w-10 h-10 rotate-45">
                                <div className="absolute inset-0 border border-[#111] rounded-[10px]"></div>
                                <div className="absolute top-2 left-2 w-10 h-10 border border-[#111] rounded-[10px]"></div>
                            </div>
                        </div>
                            <h3 className="mt-8 text-[#111] text-[28px] leading-tight font-semibold">
                                Process Optimization
                            </h3>
                            <p className="mt-6 text-[#666] text-[14px] leading-[1.8]">
                                Intelligent factory systems helping businesses
                                streamline operations and reduce production costs.
                            </p>
                        </div>
                        {/* Arrow */}
                        <div className="mt-8">
                            <div className="w-16 h-16 rounded-full text-[34px] border border-[#dcdcdc] flex items-center justify-center transition-all duration-100 group-hover:bg-[#0d3d43] group-hover:text-white">
                                ↗
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div
                        variants={{
                        hidden: {
                            opacity: 0,
                            y: 120,
                        },
                        visible: {
                            opacity: 1,
                            y: 0,
                        },
                        }}
                        transition={{
                        duration: 0.3,
                        ease: "easeOut",
                        }}
                        whileHover={{
                        y: -10,
                        }}
                        className="group bg-[#e9e7da] p-6 min-h-[200px] rounded-tr-[140px] flex flex-col justify-between transition-all duration-500"
                    >
                        <div>
                        {/* Icon */}
                        <div className="w-20 h-20 rounded-full border border-[#3f655b] flex items-center justify-center">
                            <div className="relative">
                                <div className="w-10 h-10 border border-[#3f655b] rounded-full"></div>
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 border border-[#3f655b] rounded-full"></div>
                            </div>
                        </div>

                            <h3 className="mt-8 text-[#173c37] text-[28px] leading-tight font-semibold">
                                AI-Powered Production
                            </h3>

                            <p className="mt-6 text-[#4d5b57] text-[14px] leading-[1.8]">
                                Smart automation solutions leveraging AI to
                                improve manufacturing quality and productivity.
                            </p>
                        </div>

                        {/* Arrow */}
                        <div className="mt-8">
                            <div className="w-16 h-16 rounded-full text-[34px] border border-[#dcdcdc] flex items-center justify-center transition-all duration-300 group-hover:bg-[#0d3d43] group-hover:text-white">
                                ↗
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>

        {/* About Us Section */}
        <section className="w-full bg-[#f5f5f3] py-12 overflow-hidden">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

            {/* Heading */}
            <div className="text-center max-w-4xl mx-auto">

            <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{
                duration: 0.8,
                ease: "easeOut",
                }}
                className="text-[#3f655b] text-[13px] font-semibold tracking-[0.18em] uppercase"
            >
                ABOUT US
            </motion.p>

            <motion.h2
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{
                duration: 0.3,
                delay: 0.1,
                ease: "easeOut",
                }}
                className="mt-3 text-[#050816] text-[34px] md:text-[52px] leading-[1.03] tracking-[-0.05em] font-semibold"
            >
                One platform for all your
                <br />
                manufacturing needs
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{
                duration: 0.3,
                delay: 0.2,
                ease: "easeOut",
                }}
                className="mt-4 text-[#666] text-[14px] leading-[1.7] max-w-[700px] mx-auto"
            >
                Remove operational friction and streamline your
                manufacturing workflow with smart automation.
            </motion.p>
            </div>

            {/* Cards */}
            <div className="mt-8 grid grid-cols-1 xl:grid-cols-[380px_1fr] gap-5 items-stretch">

            {/* LEFT CARD */}
            <motion.div
                initial={{
                opacity: 0,
                y: 120,
                }}
                whileInView={{
                opacity: 1,
                y: 0,
                }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                duration: 0.3,
                ease: "easeOut",
                }}
                whileHover={{
                y: -10,
                }}
                className="bg-[#0d3d43] min-h-[520px] p-5 relative overflow-hidden"
            >

                <h3 className="text-white text-[36px] leading-[1.05] font-semibold">
                Grow production
                <br />
                faster
                </h3>

                {/* Chart */}
                <div className="absolute bottom-0 left-0 w-full px-10 pb-10">

                {/* Price */}
                <div className="flex justify-left mb-6">

                    <p className="text-white text-[28px] font-medium">
                    $12,000
                    </p>
                </div>

                {/* Arrow 
                <div className="flex justify-center">

                    <div className="relative w-[90px] h-[180px]">

                    {/* Arrow Shaft 
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-7 h-[145px] bg-white"></div>

                    {/* Arrow Head 
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[50px] border-r-[50px] border-b-[65px] border-l-transparent border-r-transparent border-b-white"></div>
                    </div>
                </div>*/}

                {/* Bars */}
                <div className="mt-8 flex items-end justify-between h-[180px]">

                    <div className="w-8 h-[40px] bg-white/15"></div>

                    <div className="w-8 h-[70px] bg-white/15"></div>

                    <div className="w-8 h-[115px] bg-white/15"></div>

                    {/* CENTER ACTIVE BAR + ARROW */}
                    <div className="relative flex justify-center w-8 h-[220px]">

                        {/* Active Bar */}
                        <div className="absolute bottom-0 w-full h-full bg-white"></div>

                        {/* Arrow */}
                        <div className="absolute -top-[165px] left-1/2 -translate-x-1/2">

                            <div className="relative w-[90px] h-[180px]">

                                {/* Shaft */}
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[145px] bg-white"></div>

                                {/* Head */}
                                <div
                                className="
                                    absolute top-0 left-1/2 -translate-x-1/2
                                    w-0 h-0
                                    border-l-[50px]
                                    border-r-[50px]
                                    border-b-[65px]
                                    border-l-transparent
                                    border-r-transparent
                                    border-b-white
                                "
                                ></div>

                            </div>
                        </div>
                    </div>

                    <div className="w-8 h-[120px] bg-white/15"></div>

                    <div className="w-8 h-[155px] bg-white/15"></div>
                </div>
                </div>
            </motion.div>

            {/* RIGHT CARD */}
            <motion.div
                initial={{
                opacity: 0,
                y: 120,
                }}
                whileInView={{
                opacity: 1,
                y: 0,
                }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                duration: 0.3,
                delay: 0.15,
                ease: "easeOut",
                }}
                whileHover={{
                y: -10,
                }}
                className="relative bg-[#0d3d43]/30 min-h-[520px] overflow-hidden p-10 rounded-bl-[140px]"
            >

                <h3 className="text-[#173c37] text-[60px] leading-[1.05] font-semibold max-w-[650px]">
                Connect across the
                global manufacturing network
                </h3>

                {/* Globe Rings */}
                <div className="absolute inset-0 flex items-center justify-center">

                <div className="relative w-[600px] h-[600px] rounded-full border border-[#dce3df]">

                    <div className="absolute inset-[70px] rounded-full border border-[#dce3df]"></div>

                    <div className="absolute inset-[140px] rounded-full border border-[#dce3df]"></div>

                    <div className="absolute inset-[210px] rounded-full border border-[#dce3df]"></div>

                    {/* Globe */}
                   <BsGlobe size={68} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-black" />
                </div>
                </div>

                {/* Floating Card 1 */}
                <motion.div
                animate={{
                    y: [0, -10, 0],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute left-[80px] top-[240px] bg-white shadow-sm p-5 w-[220px]"
                >

                <img
                    src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop"
                    alt=""
                    className="w-full h-[100px] object-cover"
                />

                <h4 className="mt-4 text-[#111] text-[32px] font-semibold">
                    $25,000
                </h4>

                <p className="text-[#666] text-[16px]">
                    Manufacturing Process
                </p>

                {/* Avatars */}
                <div className="flex items-center mt-5">

                    <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt=""
                    className="w-10 h-10 rounded-full border-2 border-white"
                    />

                    <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt=""
                    className="w-10 h-10 rounded-full border-2 border-white -ml-3"
                    />
                </div>
                </motion.div>

                {/* Floating Card 2 */}
                <motion.div
                animate={{
                    y: [0, -12, 0],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute right-[90px] top-[180px] bg-[#0d3d43] text-white p-6 w-[220px]"
                >

                <h4 className="text-[38px] font-semibold">
                    $40,000
                </h4>

                <p className="mt-1 text-white/80 text-[15px]">
                    Production Completed
                </p>

                {/* Bubble */}
                <div className="absolute -bottom-4 left-8 w-0 h-0 border-l-[16px] border-r-[16px] border-t-[18px] border-l-transparent border-r-transparent border-t-[#0d3d43]"></div>
                </motion.div>

                {/* Profile */}
                <img
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt=""
                className="absolute right-[270px] top-[310px] w-16 h-16 rounded-full border-4 border-white"
                />

                {/* Flags */}
                <div className="absolute right-[90px] bottom-[80px] flex items-center">

                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white">
                    <img
                    src="https://flagcdn.com/w80/us.png"
                    alt=""
                    className="w-full h-full object-cover"
                    />
                </div>

                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white -ml-2">
                    <img
                    src="https://flagcdn.com/w80/de.png"
                    alt=""
                    className="w-full h-full object-cover"
                    />
                </div>

                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white -ml-2">
                    <img
                    src="https://flagcdn.com/w80/ng.png"
                    alt=""
                    className="w-full h-full object-cover"
                    />
                </div>
                </div>
            </motion.div>
            </div>
        </div>
        </section>
    </div>
  );
};

export default Home;