"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AiOutlineCheckCircle,
  AiOutlineArrowRight,
  AiOutlineTeam,
  AiOutlineSafety,
  AiOutlineGlobal,
  AiOutlineTrophy,
  AiOutlineLinkedin,
} from "react-icons/ai";
import {
  HiOutlineShieldCheck,
  HiOutlineLightBulb,
  HiOutlineDocumentText,
} from "react-icons/hi";
import { TbCertificate, TbBuildingBank } from "react-icons/tb";
import { FiCheck, FiExternalLink } from "react-icons/fi";

/* ─── Enhanced Animation Variants ──────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1]
    }
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  },
};

const staggerContainer = {
  hidden: {},
  visible: { 
    transition: { 
      staggerChildren: 0.15,
      delayChildren: 0.2
    } 
  },
};

const floatingAnimation = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

/* ─── Stats Data ──────────────────────────────────────────────── */
const stats = [
  {
    number: "500+",
    label: "Businesses Served",
    icon: <AiOutlineTeam size={24} />,
  },
  {
    number: "50+",
    label: "Team Members",
    icon: <AiOutlineGlobal size={24} />,
  },
  {
    number: "0",
    label: "IRS Penalties",
    subtitle: "(Under our management)",
    icon: <HiOutlineShieldCheck size={24} />,
  },
  {
    number: "4",
    label: "Office Locations",
    icon: <TbBuildingBank size={24} />,
  },
];

/* ─── Differentiators ─────────────────────────────────────────── */
const differentiators = [
  {
    icon: <AiOutlineGlobal size={28} />,
    title: "Dual-side expertise, single point of contact",
    desc: "Your Indian CA handles your GST returns. Your US firm handles your IRS filings. Neither talks to the other. FinliGen does both — which means we catch the conflicts and the opportunities that fall through the gap between them.",
    color: "#06363c",
    accent: "#7ecfc0",
  },
  {
    icon: <HiOutlineShieldCheck size={28} />,
    title: "A delivery model with no single points of failure",
    desc: "50+ professionals. Four offices. Redundant review teams. When your previous accountant went on leave and your books weren't ready for your board meeting — that doesn't happen with FinliGen. Ever.",
    color: "#1a5c3a",
    accent: "#dff5b7",
  },
  {
    icon: <TbCertificate size={28} />,
    title: "CA review. Not intern review. CA review.",
    desc: "Every bookkeeping file, tax return, and compliance report is signed off by a qualified Chartered Accountant — not passed through a quality-check checklist by a junior associate. The accountability stops with someone who has credentials on the line.",
    color: "#2a4a7f",
    accent: "#a8d8ea",
  },
];

/* ─── Team Members ────────────────────────────────────────────── */
const team = [
  {
    initials: "AK",
    name: "CA Amit Kumar",
    title: "Founder & Managing Partner",
    credentials: "Chartered Accountant, ICAI",
    bio: "Amit has spent 15 years doing one thing: making sure businesses operating across the US–India corridor don't get ambushed by compliance they didn't see coming. He personally oversees every complex cross-border engagement — IRS structuring, multi-state nexus analysis, FEMA-ODI compliance, and inbound US investment advisory. When clients have a problem the internet can't solve, Amit's number is the one they call.",
    specializes: [
      "IRS penalty abatement",
      "Economic nexus analysis",
      "FEMA ODI/APR",
      "US–India treaty positions",
      "Transfer pricing advisory",
    ],
    linkedin: "#",
    color: "#06363c",
    accent: "#7ecfc0",
  },
  {
    initials: "SS",
    name: "Sumit Singh",
    title: "Head of Operations",
    credentials: "MBA, Operations & Finance",
    bio: "Sumit built the internal systems that let FinliGen run 50+ active client engagements simultaneously without a single missed filing deadline. He's the reason a CPA partner in Chicago can send files at 9pm and find a completed deliverable in their inbox by morning. His background is in high-throughput financial operations — he thinks in SLAs, not intentions.",
    testimonial:
      "Sumit's team turned around our entire Q4 backlog in 11 days. We'd been sitting on it for three weeks before we called FinliGen.",
    testimonialAuthor: "CPA Partner, Illinois",
    linkedin: "#",
    color: "#1a5c3a",
    accent: "#dff5b7",
  },
  {
    initials: "NS",
    name: "Naveen Singh",
    title: "Head of Accounting",
    credentials: "MBA · US GAAP Specialist",
    bio: "Naveen leads the team responsible for the quality of everything that goes out under FinliGen's name. He came from financial reporting at a multinational, which means he's fluent in both Indian Ind-AS standards and US GAAP — a combination that's rarer than it sounds. CPA firm partners who work with Naveen's team stop double-checking the work after the first month. That's deliberate.",
    oversees: [
      "QuickBooks bookkeeping",
      "Management accounts",
      "US GAAP reporting",
      "Account finalization for CPA outsourcing clients",
    ],
    linkedin: "#",
    color: "#2a4a7f",
    accent: "#a8d8ea",
  },
  {
    initials: "RS",
    name: "Rahul Singh",
    title: "Head of Taxation",
    credentials: "Direct & Indirect Tax Expert",
    bio: "Rahul manages the tax practice — both the US-side filings and the Indian direct and indirect tax work for cross-border clients. His job is to ensure clients are optimized, not just compliant. He finds the legal positions that reduce tax exposure. He identifies the filing elections that generalist firms miss. He's the person in the room who actually reads the revenue notices before they become problems.",
    specializes: [
      "US state income tax",
      "GST compliance & optimization",
      "Advance tax planning",
      "Treaty-based filing positions",
    ],
    linkedin: "#",
    color: "#7a4f1a",
    accent: "#f0c27f",
  },
];

/* ─── Credentials ─────────────────────────────────────────────── */
const credentials = [
  {
    title: "ICAI Registered",
    subtitle: "CA firm registration",
    detail: "[Insert Reg. No.]",
    icon: <TbCertificate size={24} />,
  },
  {
    title: "QuickBooks ProAdvisor",
    subtitle: "Certified partner",
    detail: "All editions",
    icon: <HiOutlineDocumentText size={24} />,
  },
  {
    title: "US Tax Enrolled",
    subtitle: "IRS-recognized",
    detail: "tax practice",
    icon: <AiOutlineSafety size={24} />,
  },
  {
    title: "4 Offices",
    subtitle: "Delhi · Noida",
    detail: "Gurgaon · Jaipur",
    icon: <TbBuildingBank size={24} />,
  },
];

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════ */
export default function AboutPage() {
  const [activeTeamMember, setActiveTeamMember] = useState(null);

  React.useEffect(() => {
    document.title = "About Us — FinliGen | Cross-Border Compliance Experts";
  }, []);

  return (
    <main className="bg-white min-h-screen overflow-hidden">
      {/* ═══════════════════════════════════════════════════════════
          SECTION 1 — HERO WITH BACKGROUND IMAGE
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80')",
            }}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/90 to-white/85" />
            
            {/* Pattern Overlay */}
            <div 
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: "linear-gradient(rgba(6,54,60,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,54,60,0.1) 1px, transparent 1px)",
                backgroundSize: "50px 50px"
              }}
            />
          </div>

          {/* Animated Gradient Blobs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 right-20 w-96 h-96 bg-[#7ecfc0]/20 rounded-full blur-3xl"
          />
          
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-[#06363c]/10 rounded-full blur-3xl"
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <motion.span 
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 text-[#06363c] text-[11px] sm:text-[13px] tracking-[0.18em] font-semibold uppercase border border-[#06363c]/30 rounded-full px-5 py-2 bg-white/80 backdrop-blur-sm shadow-lg"
            >
              <motion.span 
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.5, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-2 h-2 bg-[#06363c] rounded-full" 
              />
              ABOUT FINLIGEN
            </motion.span>
          </motion.div>

          {/* Headline with Character Animation */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-[#0a0a0a] text-[32px] sm:text-[44px] md:text-[56px] lg:text-[68px] font-bold leading-[1.08] tracking-tight"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Most firms know one side
              <br />
              of the border.{" "}
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-[#06363c] relative inline-block"
            >
              We were built to know both.
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute bottom-2 left-0 h-3 bg-[#7ecfc0]/20 -z-10"
              />
            </motion.span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-6 sm:mt-8 text-[#6b7280] text-[16px] sm:text-[19px] md:text-[21px] leading-[1.7] max-w-4xl mx-auto"
          >
            FinliGen exists because cross-border compliance is genuinely hard —
            and most generalist accounting firms are not equipped to handle it.
            We are. Every client we take on gets the combined depth of{" "}
            <motion.span 
              whileHover={{ color: "#06363c" }}
              className="text-[#0a0a0a] font-medium cursor-default"
            >
              Indian CA expertise
            </motion.span>{" "}
            and{" "}
            <motion.span 
              whileHover={{ color: "#06363c" }}
              className="text-[#0a0a0a] font-medium cursor-default"
            >
              US tax authority
            </motion.span>
            , under one roof.
          </motion.p>

          {/* Stats Grid with Enhanced Animation */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ 
                  y: -8, 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
                className="text-center bg-white/60 backdrop-blur-sm rounded-2xl p-5 border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <motion.div 
                  className="flex items-center justify-center gap-2 mb-2"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-[#06363c]">{stat.icon}</span>
                  <motion.span 
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 + (i * 0.1), duration: 0.5 }}
                    className="text-[#0a0a0a] text-[32px] sm:text-[40px] font-bold"
                  >
                    {stat.number}
                  </motion.span>
                </motion.div>
                <p className="text-[#6b7280] text-[13px] sm:text-[15px] font-medium uppercase tracking-wide">
                  {stat.label}
                </p>
                {stat.subtitle && (
                  <p className="text-[#9ca3af] text-[11px] sm:text-[12px] mt-1">
                    {stat.subtitle}
                  </p>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="mt-16 sm:mt-20"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-6 h-10 border-2 border-[#06363c]/30 rounded-full mx-auto flex justify-center pt-2"
            >
              <div className="w-1.5 h-3 bg-[#06363c]/50 rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2 — THE STORY (Gray BG)
      ═══════════════════════════════════════════════════════════ */}
      <section className="w-full py-16 sm:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.span 
              variants={scaleIn}
              className="inline-block text-[#06363c] text-[11px] sm:text-[13px] tracking-[0.18em] font-semibold uppercase mb-4 border border-[#06363c]/20 rounded-full px-4 py-1.5 bg-[#06363c]/5"
            >
              THE FINLIGEN STORY
            </motion.span>
            <motion.h2 
              variants={fadeUp}
              className="text-[#0a0a0a] text-[28px] sm:text-[38px] md:text-[48px] font-bold leading-[1.12] tracking-tight"
            >
              How We Started
            </motion.h2>
          </motion.div>

          {/* Story Timeline */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="space-y-8 sm:space-y-12"
          >
            {/* Part 1 - Problem */}
            <motion.div 
              variants={slideInLeft}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-gray-200 shadow-sm"
            >
              <div className="flex items-start gap-4 mb-4">
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 rounded-xl bg-[#06363c]/10 text-[#06363c] flex items-center justify-center flex-shrink-0"
                >
                  <HiOutlineLightBulb size={24} />
                </motion.div>
                <div>
                  <h3 className="text-[#0a0a0a] text-[20px] sm:text-[24px] font-bold mb-2">
                    2009 — The Problem Revealed
                  </h3>
                  <p className="text-[#6b7280] text-[15px] sm:text-[17px] leading-[1.8]">
                    In 2009, CA Amit Kumar was advising an Indian technology
                    company that had been selling software to US customers for
                    three years. They had revenue. They had customers. What they
                    didn't have was a US sales tax registration in a single
                    state.
                  </p>
                </div>
              </div>

              <p className="text-[#6b7280] text-[15px] sm:text-[17px] leading-[1.8] mb-4">
                When the nexus analysis came back, the liability was in six
                figures. The company survived it — but only barely, and only
                because Amit caught it before the state revenue department did.
              </p>

              <p className="text-[#6b7280] text-[15px] sm:text-[17px] leading-[1.8]">
                That case wasn't unusual. In the years that followed, Amit saw
                the same pattern repeat across dozens of businesses: Indian
                founders and US CPA firms managing clients with cross-border
                operations, all of them carrying compliance risk they didn't
                know they had. The problem wasn't negligence.{" "}
                <span className="text-[#0a0a0a] font-medium">
                  It was that no single firm had the expertise to see both sides
                  clearly.
                </span>
              </p>
            </motion.div>

            {/* Part 2 - Decision */}
            <motion.div 
              variants={slideInRight}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-gray-200 shadow-sm"
            >
              <div className="flex items-start gap-4 mb-4">
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 rounded-xl bg-[#1a5c3a]/10 text-[#1a5c3a] flex items-center justify-center flex-shrink-0"
                >
                  <AiOutlineTrophy size={24} />
                </motion.div>
                <div>
                  <h3 className="text-[#0a0a0a] text-[20px] sm:text-[24px] font-bold mb-2">
                    The Founding Decision
                  </h3>
                  <p className="text-[#6b7280] text-[15px] sm:text-[17px] leading-[1.8]">
                    FinliGen was founded to close that gap. Not as a generalist
                    accounting firm that handles the occasional international
                    client — but as a{" "}
                    <span className="text-[#0a0a0a] font-medium">
                      specialist practice built entirely around the US–India
                      compliance corridor
                    </span>
                    . We only work on problems we understand deeply. Which is why
                    we only do this.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Part 3 - Today */}
            <motion.div 
              variants={slideInLeft}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-gray-200 shadow-sm"
            >
              <div className="flex items-start gap-4 mb-4">
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 rounded-xl bg-[#2a4a7f]/10 text-[#2a4a7f] flex items-center justify-center flex-shrink-0"
                >
                  <AiOutlineGlobal size={24} />
                </motion.div>
                <div>
                  <h3 className="text-[#0a0a0a] text-[20px] sm:text-[24px] font-bold mb-2">
                    What We've Built
                  </h3>
                  <p className="text-[#6b7280] text-[15px] sm:text-[17px] leading-[1.8]">
                    Today, FinliGen is a team of 50+ finance and compliance
                    professionals operating across four offices in India. We
                    manage US sales tax compliance across all 50 states. We
                    handle IRS filings, FEMA-ODI-APR reporting, QuickBooks-native
                    bookkeeping, and back-office support for US CPA firms
                    operating at scale.
                  </p>
                </div>
              </div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-[#06363c]/5 rounded-xl p-5 sm:p-6 mt-6 border border-[#06363c]/10"
              >
                <p className="text-[#0a0a0a] text-[15px] sm:text-[17px] leading-[1.8] font-medium mb-3">
                  Every file — every single one — is reviewed by a qualified
                  Chartered Accountant before it leaves our office.
                </p>
                <ul className="space-y-2">
                  {[
                    "ICAI-registered",
                    "QuickBooks ProAdvisor certified",
                    "500+ businesses managed without a single IRS penalty notice issued to a client under our management"
                  ].map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start gap-3 text-[#6b7280] text-[14px] sm:text-[16px]"
                    >
                      <FiCheck className="text-[#06363c] mt-1 flex-shrink-0" size={16} />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <p className="text-[#0a0a0a] text-[15px] sm:text-[17px] leading-[1.8] font-medium mt-6">
                That's not a marketing line. It's a record we protect with every
                engagement we take on.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3 — DIFFERENTIATORS (White BG)
      ═══════════════════════════════════════════════════════════ */}
      <section className="w-full py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.span 
              variants={scaleIn}
              className="inline-block text-[#06363c] text-[11px] sm:text-[13px] tracking-[0.18em] font-semibold uppercase mb-4 border border-[#06363c]/20 rounded-full px-4 py-1.5 bg-[#06363c]/5"
            >
              WHY FINLIGEN
            </motion.span>
            <motion.h2 
              variants={fadeUp}
              className="text-[#0a0a0a] text-[28px] sm:text-[38px] md:text-[48px] font-bold leading-[1.12] tracking-tight"
            >
              Three things no generalist
              <br />
              firm can offer you.
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
          >
            {differentiators.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ 
                  y: -12,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
                }}
                transition={{ duration: 0.3 }}
                className="group bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200 hover:border-[#06363c]/20 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    backgroundColor: `${item.accent}20`,
                    color: item.color,
                  }}
                >
                  {item.icon}
                </motion.div>

                <h3 className="text-[#0a0a0a] text-[18px] sm:text-[22px] font-bold leading-tight mb-4 group-hover:text-[#06363c] transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-[#6b7280] text-[14px] sm:text-[16px] leading-[1.8]">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          REST OF SECTIONS CONTINUE...
          (Team, Credentials, CTA sections remain the same with enhanced animations)
      ═══════════════════════════════════════════════════════════ */}
      
      {/* Team Section - Enhanced */}
      <section className="w-full py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.span 
              variants={scaleIn}
              className="inline-block text-[#06363c] text-[11px] sm:text-[13px] tracking-[0.18em] font-semibold uppercase mb-4 border border-[#06363c]/20 rounded-full px-4 py-1.5 bg-[#06363c]/5"
            >
              LEADERSHIP TEAM
            </motion.span>
            <motion.h2 
              variants={fadeUp}
              className="text-[#0a0a0a] text-[28px] sm:text-[38px] md:text-[48px] font-bold leading-[1.12] tracking-tight mb-4"
            >
              The people whose names
              <br />
              are on the work.
            </motion.h2>
            <motion.p 
              variants={fadeUp}
              className="text-[#6b7280] text-[15px] sm:text-[18px] leading-[1.7] max-w-3xl mx-auto"
            >
              When you work with FinliGen, you know who reviewed your file. Not
              a department. A person — with a name, credentials, and
              accountability for every deliverable that leaves this office.
            </motion.p>
          </motion.div>

          {/* Team Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
          >
            {team.map((member, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
                }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-5">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 rounded-xl flex items-center justify-center text-[24px] font-bold text-white flex-shrink-0"
                    style={{ backgroundColor: member.color }}
                  >
                    {member.initials}
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-[#0a0a0a] text-[20px] sm:text-[24px] font-bold">
                      {member.name}
                    </h3>
                    <p className="text-[#06363c] text-[14px] sm:text-[16px] font-semibold mb-1">
                      {member.title}
                    </p>
                    <p className="text-[#6b7280] text-[13px] sm:text-[14px]">
                      {member.credentials}
                    </p>
                  </div>
                  <motion.a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-[#0077b5] hover:text-white text-gray-600 flex items-center justify-center transition-all duration-300"
                  >
                    <AiOutlineLinkedin size={20} />
                  </motion.a>
                </div>

                {/* Bio */}
                <p className="text-[#6b7280] text-[14px] sm:text-[16px] leading-[1.8] mb-5">
                  {member.bio}
                </p>

                {/* Specializes / Oversees */}
                {member.specializes && (
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-50 rounded-xl p-4 border border-gray-100"
                  >
                    <p className="text-[#0a0a0a] text-[13px] sm:text-[14px] font-semibold mb-3">
                      Specializes in:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {member.specializes.map((item, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.05 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="text-[11px] sm:text-[12px] font-medium px-3 py-1.5 rounded-full bg-white border border-gray-200 text-[#4b5563] cursor-default"
                        >
                          {item}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                )}

                {member.oversees && (
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-50 rounded-xl p-4 border border-gray-100"
                  >
                    <p className="text-[#0a0a0a] text-[13px] sm:text-[14px] font-semibold mb-3">
                      Oversees:
                    </p>
                    <ul className="space-y-2">
                      {member.oversees.map((item, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start gap-2 text-[#6b7280] text-[13px] sm:text-[14px]"
                        >
                          <FiCheck
                            className="text-[#06363c] mt-0.5 flex-shrink-0"
                            size={14}
                          />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}

                {/* Testimonial */}
                {member.testimonial && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="mt-5 bg-gray-50 rounded-xl p-4 border-l-4 border-[#06363c]"
                  >
                    <p className="text-[#4b5563] text-[13px] sm:text-[15px] leading-[1.7] italic mb-2">
                      "{member.testimonial}"
                    </p>
                    <p className="text-[#6b7280] text-[12px] sm:text-[13px] font-medium">
                      — {member.testimonialAuthor}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="w-full py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
            className="text-center mb-12 sm:mb-16"
          >
            <motion.span 
              variants={scaleIn}
              className="inline-block text-[#06363c] text-[11px] sm:text-[13px] tracking-[0.18em] font-semibold uppercase mb-4 border border-[#06363c]/20 rounded-full px-4 py-1.5 bg-[#06363c]/5"
            >
              CREDENTIALS & CERTIFICATIONS
            </motion.span>
            <motion.h2 
              variants={fadeUp}
              className="text-[#0a0a0a] text-[28px] sm:text-[38px] md:text-[48px] font-bold leading-[1.12] tracking-tight"
            >
              Verified. Certified. Accountable.
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
          >
            {credentials.map((cred, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
                transition={{ duration: 0.3 }}
                className="bg-gray-50 rounded-2xl p-6 text-center border border-gray-200 hover:border-[#06363c]/20 hover:shadow-lg transition-all duration-300"
              >
                <motion.div 
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 rounded-xl bg-[#06363c]/10 text-[#06363c] flex items-center justify-center mx-auto mb-4"
                >
                  {cred.icon}
                </motion.div>
                <h3 className="text-[#0a0a0a] text-[16px] sm:text-[18px] font-bold mb-1">
                  {cred.title}
                </h3>
                <p className="text-[#6b7280] text-[13px] sm:text-[14px] mb-1">
                  {cred.subtitle}
                </p>
                <p className="text-[#9ca3af] text-[12px] sm:text-[13px]">
                  {cred.detail}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Action Notice */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-12 bg-amber-50 border border-amber-200 rounded-xl p-6 sm:p-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0">
                <HiOutlineDocumentText size={20} />
              </div>
              <div>
                <p className="text-[#92400e] text-[14px] sm:text-[16px] leading-[1.7] font-medium">
                  <strong>Action Required Before Launch:</strong> Add ICAI
                  registration number, Amit Kumar's LinkedIn URL, and a direct
                  link to the QuickBooks ProAdvisor certification page. These
                  three signals alone can increase E-E-A-T score significantly.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full py-16 sm:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden"
          >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#06363c] to-[#052f35]" />
            
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-0 right-0 w-80 h-80 bg-[#7ecfc0]/10 rounded-full blur-3xl"
            />
            
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute bottom-0 left-0 w-60 h-60 bg-[#dff5b7]/8 rounded-full blur-3xl"
            />

            <div className="relative z-10 p-8 sm:p-12 lg:p-16 text-center">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-white text-[28px] sm:text-[38px] md:text-[48px] font-bold leading-[1.12] tracking-tight mb-5"
              >
                Ready to work with a team
                <br />
                that knows both sides?
              </motion.h2>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-[#b5c7c8] text-[15px] sm:text-[18px] leading-[1.7] max-w-2xl mx-auto mb-8 sm:mb-10"
              >
                Book a free 30-minute consultation. We'll understand your
                cross-border compliance needs and show you exactly how we can
                help.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <motion.a
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  href="/contact"
                  className="bg-[#dff5b7] hover:bg-[#cef0a0] text-[#052f35] px-8 sm:px-10 py-4 rounded-xl text-[15px] sm:text-[17px] font-bold transition-all duration-300 flex items-center gap-2 shadow-xl shadow-[#dff5b7]/20"
                >
                  Schedule a Call
                  <AiOutlineArrowRight size={20} />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  href="/services"
                  className="border border-white/20 hover:border-white/50 text-white px-8 sm:px-10 py-4 rounded-xl text-[15px] sm:text-[17px] font-medium transition-all duration-300 flex items-center gap-2"
                >
                  View Services
                  <FiExternalLink size={18} />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}