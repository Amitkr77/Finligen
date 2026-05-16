"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AiOutlineLineChart,
  AiOutlineCheckCircle,
  AiOutlineArrowRight,
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineGlobal,
  AiOutlineStar,
  AiOutlineTeam,
  AiOutlineClockCircle,
  AiOutlineSafety,
  AiOutlineRise,
  AiOutlineFileText,
  AiOutlineDollar,
  AiOutlineBank,
} from "react-icons/ai";
import {
  TbStack,
  TbNorthStar,
  TbArrowUpRight,
  TbCheck,
  TbChevronDown,
  TbChevronUp,
} from "react-icons/tb";
import { LuShieldHalf } from "react-icons/lu";
import { TiSpannerOutline } from "react-icons/ti";
import { IoCubeOutline } from "react-icons/io5";
import {
  HiOutlineDocumentText,
  HiOutlineLightBulb,
  HiOutlineChartBar,
} from "react-icons/hi";
import { BsArrowRight, BsPlay } from "react-icons/bs";
import { FiCheck, FiArrowUpRight } from "react-icons/fi";

// ─── Animation Variants ─────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const slideRight = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 },
};

const slideLeft = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

// ─── Services Data ───────────────────────────────────────────────
const services = [
  {
    icon: <AiOutlineLineChart size={30} />,
    badge: "Most Popular",
    title: "US Tax & Sales Tax Compliance",
    shortDesc:
      "Nexus analysis, multi-state registration, monthly filings, and IRS return preparation — every state, every deadline.",
    fullDesc:
      "Our comprehensive US tax compliance service covers everything from initial nexus analysis to ongoing multi-state sales tax filings. We handle state registrations across all 50 states, prepare and file monthly/quarterly sales tax returns, and manage your federal IRS obligations. Whether you're a SaaS company with customers in multiple states or an e-commerce brand shipping nationwide, we ensure you're always compliant — no penalties, no surprises.",
    features: [
      "Nexus Analysis & Determination",
      "All 50-State Registration",
      "Monthly/Quarterly Filings",
      "IRS Return Preparation",
      "Penalty Abatement Support",
      "Audit Defense & Representation",
    ],
    benefits: [
      "Zero missed deadlines",
      "Reduced tax liability",
      "Full multi-state coverage",
      "Real-time compliance dashboard",
    ],
    link: "/services/us-tax-sales-tax-compliance",
    color: "#7ecfc0",
  },
  {
    icon: <TbStack size={30} />,
    badge: null,
    title: "CPA Firm Outsourcing",
    shortDesc:
      "CA-reviewed bookkeeping, workpaper prep, and tax return drafts delivered white-label to your US CPA firm.",
    fullDesc:
      "We serve as your dedicated offshore team — handling bookkeeping, workpaper preparation, and tax return drafts under your CPA firm's brand. Every deliverable is reviewed by a qualified Chartered Accountant before it reaches you. Our white-label model means your clients never know about us — they just see faster turnarounds and cleaner work from your firm.",
    features: [
      "QuickBooks / Xero Bookkeeping",
      "Account Finalization",
      "Tax Return Drafts (1040, 1120, 1065)",
      "White-Label Delivery",
      "Workpaper Preparation",
      "Year-End Close Support",
    ],
    benefits: [
      "60% cost savings vs US staff",
      "CA-reviewed quality",
      "Scalable capacity",
      "Your brand, our work",
    ],
    link: "/services/cpa-firm-outsourcing",
    color: "#dff5b7",
  },
  {
    icon: <LuShieldHalf size={30} />,
    badge: null,
    title: "US LLC Setup & Advisory",
    shortDesc:
      "LLC or C-Corp formation, EIN registration, operating agreements, and first-year compliance for non-US founders.",
    fullDesc:
      "Starting a US business from India? We handle the entire process — from choosing the right entity type (LLC vs C-Corp) and the best state for incorporation, to filing formation documents, obtaining your EIN, drafting operating agreements, and setting up your first-year compliance calendar. We also connect you with US banking partners and payment processors.",
    features: [
      "LLC / C-Corp Formation",
      "EIN Application & ITIN Support",
      "Operating Agreement Drafting",
      "First-Year Compliance Calendar",
      "Registered Agent Service",
      "US Bank Account Assistance",
    ],
    benefits: [
      "Incorporated in 5-7 days",
      "100% remote process",
      "Ongoing compliance support",
      "Banking & payment setup help",
    ],
    link: "/services/us-llc-setup-advisory",
    color: "#a8d8ea",
  },
  {
    icon: <TbNorthStar size={30} />,
    badge: null,
    title: "Offshore Bookkeeping",
    shortDesc:
      "Daily transaction recording, bank reconciliation, and monthly MIS reports — books clean and closed by the 15th.",
    fullDesc:
      "Our offshore bookkeeping service ensures your financial records are always accurate, up-to-date, and audit-ready. We handle daily transaction recording, categorization, bank and credit card reconciliation, vendor bill management, and monthly MIS reporting. Your books are closed by the 15th of every month — guaranteed.",
    features: [
      "Daily Transaction Recording",
      "Bank & CC Reconciliation",
      "Monthly MIS Reports",
      "Accounts Payable Management",
      "Accounts Receivable Tracking",
      "Books Closed by 15th",
    ],
    benefits: [
      "99.5% accuracy rate",
      "Dedicated bookkeeper assigned",
      "Any accounting software",
      "Monthly financial insights",
    ],
    link: "/services",
    color: "#f0c27f",
  },
  {
    icon: <TiSpannerOutline size={30} />,
    badge: null,
    title: "Virtual CFO Services",
    shortDesc:
      "Strategic financial oversight, cash flow planning, investor-ready reporting, and board-level advisory — without the full-time cost.",
    fullDesc:
      "Get the strategic financial leadership your business needs without hiring a full-time CFO. Our Virtual CFO service includes cash flow forecasting, budget vs actuals analysis, investor-ready financial reporting, KPI dashboards, fundraising support, and board-level financial advisory. Perfect for startups and growing businesses that need CFO-level insights at a fraction of the cost.",
    features: [
      "Cash Flow Forecasting",
      "Budget vs Actuals Analysis",
      "Investor-Ready Reporting",
      "KPI Dashboards",
      "Fundraising Support",
      "Board Meeting Preparation",
    ],
    benefits: [
      "80% less than full-time CFO",
      "Strategic growth insights",
      "Investor confidence",
      "Data-driven decisions",
    ],
    link: "/services",
    color: "#c3b1e1",
  },
  {
    icon: <IoCubeOutline size={30} />,
    badge: null,
    title: "Cross-Border Tax Advisory",
    shortDesc:
      "FEMA compliance, transfer pricing, DTAA planning, and India–US tax structuring for founders and growing companies.",
    fullDesc:
      "Operating between India and the US creates complex tax obligations. Our cross-border advisory covers FEMA compliance for outward/inward remittances, transfer pricing documentation, DTAA benefit optimization, and India-US entity structuring. Whether you're an Indian founder with a US subsidiary or a US company with Indian operations, we ensure both-side compliance.",
    features: [
      "FEMA Compliance & Reporting",
      "Transfer Pricing Documentation",
      "DTAA Benefit Optimization",
      "India–US Entity Structuring",
      "Foreign Tax Credit Planning",
      "Repatriation Strategy",
    ],
    benefits: [
      "Dual-country expertise",
      "Minimized double taxation",
      "Regulatory peace of mind",
      "Optimized fund flow",
    ],
    link: "/services",
    color: "#ff9a9e",
  },
];

// ─── Process Steps ───────────────────────────────────────────────
const processSteps = [
  {
    step: "01",
    title: "Discovery Call",
    desc: "30-minute free consultation to understand your business, current pain points, and compliance needs.",
    icon: <AiOutlinePhone size={24} />,
  },
  {
    step: "02",
    title: "Custom Proposal",
    desc: "Within 48 hours, you receive a detailed scope document with fixed monthly pricing — no hidden fees.",
    icon: <HiOutlineDocumentText size={24} />,
  },
  {
    step: "03",
    title: "Onboarding",
    desc: "We set up systems access, assign your dedicated team, and create your compliance calendar.",
    icon: <AiOutlineTeam size={24} />,
  },
  {
    step: "04",
    title: "Ongoing Delivery",
    desc: "Regular deliverables, monthly review calls, and a real-time dashboard to track everything.",
    icon: <AiOutlineRise size={24} />,
  },
];

// ─── Stats ───────────────────────────────────────────────────────
const stats = [
  { number: "200+", label: "Active Clients", icon: <AiOutlineTeam size={22} /> },
  { number: "50", label: "States Covered", icon: <AiOutlineGlobal size={22} /> },
  { number: "99.5%", label: "Accuracy Rate", icon: <AiOutlineStar size={22} /> },
  { number: "15th", label: "Books Closed By", icon: <AiOutlineClockCircle size={22} /> },
];

// ─── FAQs ────────────────────────────────────────────────────────
const faqs = [
  {
    q: "How quickly can you start working on our accounts?",
    a: "We typically onboard new clients within 3-5 business days. After the discovery call and proposal approval, we set up system access and assign your dedicated team immediately.",
  },
  {
    q: "Do you work with specific accounting software?",
    a: "Yes — we're proficient in QuickBooks Online, Xero, FreshBooks, Wave, Zoho Books, and most major accounting platforms. If you use a different tool, we'll adapt.",
  },
  {
    q: "What if we need services across both India and the US?",
    a: "That's our specialty. Our cross-border advisory is designed specifically for businesses operating in both countries. We handle compliance on both sides.",
  },
  {
    q: "How do you ensure data security?",
    a: "We use encrypted file sharing, role-based access controls, NDA-protected teams, and SOC 2 compliant infrastructure. Your data never leaves secure channels.",
  },
  {
    q: "Can you work as a white-label partner for our CPA firm?",
    a: "Absolutely. Our CPA Firm Outsourcing service is designed exactly for this. Your clients will never know about us — we deliver everything under your brand.",
  },
  {
    q: "What are your pricing models?",
    a: "We offer fixed monthly pricing based on scope — no hourly billing, no surprises. You'll know exactly what you pay before we start.",
  },
];

// ─── Testimonials ────────────────────────────────────────────────
const testimonials = [
  {
    name: "Rajesh Patel",
    role: "Founder, TechBridge Solutions",
    text: "FinanSure handled our entire US LLC setup and ongoing tax compliance. We went from zero US presence to fully operational in under 2 weeks. Incredible team.",
    rating: 5,
  },
  {
    name: "Sarah Mitchell",
    role: "Managing Partner, Mitchell & Co. CPA",
    text: "We've been outsourcing our bookkeeping and tax prep to FinanSure for 2 years now. The quality is consistently excellent, and our capacity has tripled without adding staff.",
    rating: 5,
  },
  {
    name: "Amit Sharma",
    role: "CEO, CrossFlow Commerce",
    text: "The cross-border tax advisory saved us over $180K in the first year alone. Their dual India-US expertise is genuinely rare and invaluable.",
    rating: 5,
  },
];

// ═══════════════════════════════════════════════════════════════════
//  MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeService, setActiveService] = useState(0);

  return (
    <main className="bg-[#06363c] min-h-screen overflow-hidden">

      {/* ═══════════════════════════════════════════════════════════
          SECTION 1 — HERO
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#7ecfc0]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#dff5b7]/8 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7ecfc0]/5 rounded-full blur-3xl" />
        </div>

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 text-[#7ecfc0] text-[11px] sm:text-[13px]
                           tracking-[0.18em] font-semibold uppercase
                           border border-[#7ecfc0]/30 rounded-full px-5 py-2
                           bg-white/5 backdrop-blur-sm">
              <span className="w-2 h-2 bg-[#7ecfc0] rounded-full animate-pulse" />
              OUR SERVICES
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-white text-[32px] sm:text-[44px] md:text-[58px] lg:text-[68px]
                       font-bold leading-[1.08] tracking-tight"
          >
            Every Service Your
            <br />
            <span className="text-[#7ecfc0]">Finance Function</span> Needs.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-5 sm:mt-7 text-[#b5c7c8] text-[15px] sm:text-[18px] md:text-[20px]
                       leading-[1.7] max-w-2xl mx-auto"
          >
            From daily bookkeeping to complex cross-border compliance —
            one trusted partner for businesses operating between
            <span className="text-white font-medium"> India</span> and the
            <span className="text-white font-medium"> United States</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="/contact"
              className="bg-[#dff5b7] hover:bg-[#cef0a0] text-[#052f35]
                         px-8 py-4 rounded-xl text-[15px] sm:text-[16px]
                         font-semibold transition-all duration-300
                         flex items-center gap-2 shadow-lg shadow-[#dff5b7]/20"
            >
              Book Free Consultation
              <AiOutlineArrowRight size={18} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="#services-grid"
              className="border border-white/20 hover:border-white/50 text-white
                         px-8 py-4 rounded-xl text-[15px] sm:text-[16px]
                         font-medium transition-all duration-300
                         flex items-center gap-2"
            >
              Explore Services
              <TbChevronDown size={18} />
            </motion.a>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="mt-14 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-[#7ecfc0]">{stat.icon}</span>
                  <span className="text-white text-[28px] sm:text-[36px] font-bold">
                    {stat.number}
                  </span>
                </div>
                <p className="text-[#b5c7c8] text-[12px] sm:text-[14px] tracking-wide uppercase">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-3 bg-white/50 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2 — SERVICES CARDS GRID
      ═══════════════════════════════════════════════════════════ */}
      <section id="services-grid" className="w-full py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          >
            <span className="inline-block text-[#7ecfc0] text-[11px] sm:text-[13px]
                           tracking-[0.18em] font-semibold uppercase mb-4
                           border border-[#7ecfc0]/30 rounded-full px-4 py-1.5
                           bg-white/5">
              WHAT WE OFFER
            </span>
            <h2 className="text-white text-[28px] sm:text-[38px] md:text-[48px]
                         font-bold leading-[1.12] tracking-tight">
              Comprehensive Financial
              <br />
              Services Suite
            </h2>
            <p className="mt-4 text-[#b5c7c8] text-[15px] sm:text-[17px] leading-7 max-w-2xl mx-auto">
              Six core service lines designed to cover every financial need
              of businesses operating across India and the United States.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6"
          >
            {services.map((card, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative rounded-2xl p-6 sm:p-7
                           min-h-[320px] sm:min-h-[350px]
                           transition-all duration-300 flex flex-col justify-between
                           bg-[#11464d] hover:bg-[#15525a]
                           border border-white/5 hover:border-white/15
                           cursor-pointer"
                onClick={() => setActiveService(i)}
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                               transition-opacity duration-500 pointer-events-none"
                     style={{
                       background: `radial-gradient(circle at 50% 0%, ${card.color}10, transparent 70%)`,
                     }}
                />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center
                                     bg-white/10 text-white group-hover:scale-110
                                     transition-transform duration-300"
                           style={{ boxShadow: `0 0 20px ${card.color}15` }}>
                        {card.icon}
                      </div>

                      {card.badge && (
                        <span className="text-[10px] font-semibold tracking-widest uppercase
                                       bg-[#dff5b7]/15 text-[#dff5b7] px-3 py-1 rounded-full
                                       border border-[#dff5b7]/20">
                          {card.badge}
                        </span>
                      )}
                    </div>

                    <motion.a
                      href={card.link}
                      whileHover={{ x: 3, y: -3 }}
                      className="w-10 h-10 rounded-xl flex items-center justify-center
                                bg-white/5 group-hover:bg-white/15
                                transition-all duration-300 text-white"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FiArrowUpRight size={18} />
                    </motion.a>
                  </div>

                  <h3 className="text-[20px] sm:text-[22px] leading-tight font-semibold mb-3 text-white
                               group-hover:text-[#dff5b7] transition-colors duration-300">
                    {card.title}
                  </h3>

                  <p className="text-[13px] sm:text-[14px] leading-[1.8] text-[#b5c7c8]">
                    {card.shortDesc}
                  </p>
                </div>

                <div className="relative z-10">
                  <div className="my-4 h-[1px] bg-white/10" />

                  <div className="flex flex-wrap gap-2">
                    {card.features.slice(0, 4).map((f, fi) => (
                      <span
                        key={fi}
                        className="text-[11px] sm:text-[12px] font-medium px-3 py-1.5
                                 rounded-full border border-white/10 text-[#b5c7c8] bg-white/5
                                 group-hover:border-white/20 transition-colors duration-300"
                      >
                        ✓ {f}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 3 — DETAILED SERVICE EXPLORER
      ═══════════════════════════════════════════════════════════ */}
      <section className="w-full py-16 sm:py-24 bg-[#052f35]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          >
            <span className="inline-block text-[#7ecfc0] text-[11px] sm:text-[13px]
                           tracking-[0.18em] font-semibold uppercase mb-4
                           border border-[#7ecfc0]/30 rounded-full px-4 py-1.5
                           bg-white/5">
              DEEP DIVE
            </span>
            <h2 className="text-white text-[28px] sm:text-[38px] md:text-[48px]
                         font-bold leading-[1.12] tracking-tight">
              Explore Each Service
              <br />
              In Detail
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
            {/* Service Tabs — Left */}
            <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 sm:gap-3
                          overflow-x-auto lg:overflow-visible pb-4 lg:pb-0
                          scrollbar-hide">
              {services.map((s, i) => (
                <motion.button
                  key={i}
                  whileHover={{ x: 4 }}
                  onClick={() => setActiveService(i)}
                  className={`flex items-center gap-3 px-4 sm:px-5 py-3 sm:py-4 rounded-xl
                            text-left transition-all duration-300 whitespace-nowrap
                            lg:whitespace-normal min-w-fit lg:min-w-0
                            ${activeService === i
                              ? "bg-[#11464d] border border-[#7ecfc0]/30 text-white"
                              : "bg-transparent border border-transparent text-[#b5c7c8] hover:bg-white/5"
                            }`}
                >
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0
                                ${activeService === i ? "bg-[#7ecfc0]/20 text-[#7ecfc0]" : "bg-white/10 text-[#b5c7c8]"}`}>
                    {s.icon}
                  </div>
                  <span className="text-[13px] sm:text-[14px] font-medium">{s.title}</span>
                </motion.button>
              ))}
            </div>

            {/* Service Detail — Right */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4 }}
                  className="bg-[#11464d] rounded-2xl p-6 sm:p-8 lg:p-10
                            border border-white/10"
                >
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center
                                   bg-[#7ecfc0]/15 text-[#7ecfc0]">
                      {services[activeService].icon}
                    </div>
                    <div>
                      <h3 className="text-white text-[22px] sm:text-[28px] font-bold">
                        {services[activeService].title}
                      </h3>
                      {services[activeService].badge && (
                        <span className="text-[10px] font-semibold tracking-widest uppercase
                                       bg-[#dff5b7]/15 text-[#dff5b7] px-3 py-1 rounded-full mt-2 inline-block">
                          {services[activeService].badge}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Full Description */}
                  <p className="text-[#b5c7c8] text-[14px] sm:text-[16px] leading-[1.8] mb-8">
                    {services[activeService].fullDesc}
                  </p>

                  {/* Features & Benefits Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                    {/* Features */}
                    <div>
                      <h4 className="text-white text-[16px] sm:text-[18px] font-semibold mb-4
                                   flex items-center gap-2">
                        <HiOutlineLightBulb className="text-[#7ecfc0]" size={20} />
                        What's Included
                      </h4>
                      <ul className="space-y-3">
                        {services[activeService].features.map((f, fi) => (
                          <motion.li
                            key={fi}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: fi * 0.08 }}
                            className="flex items-start gap-3 text-[#c0d0d1] text-[13px] sm:text-[14px]"
                          >
                            <AiOutlineCheckCircle className="text-[#7ecfc0] mt-0.5 flex-shrink-0" size={16} />
                            {f}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h4 className="text-white text-[16px] sm:text-[18px] font-semibold mb-4
                                   flex items-center gap-2">
                        <HiOutlineChartBar className="text-[#dff5b7]" size={20} />
                        Key Benefits
                      </h4>
                      <ul className="space-y-3">
                        {services[activeService].benefits.map((b, bi) => (
                          <motion.li
                            key={bi}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: bi * 0.08 + 0.3 }}
                            className="flex items-start gap-3"
                          >
                            <div className="w-6 h-6 rounded-full bg-[#dff5b7]/15 flex items-center
                                         justify-center flex-shrink-0 mt-0.5">
                              <FiCheck className="text-[#dff5b7]" size={12} />
                            </div>
                            <span className="text-[#c0d0d1] text-[13px] sm:text-[14px]">{b}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3">
                    <motion.a
                      whileHover={{ scale: 1.04, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      href={services[activeService].link}
                      className="bg-[#dff5b7] hover:bg-[#cef0a0] text-[#052f35]
                               px-6 py-3 rounded-xl text-[14px] sm:text-[15px]
                               font-semibold transition-all duration-300
                               flex items-center justify-center gap-2"
                    >
                      Learn More
                      <AiOutlineArrowRight size={16} />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.04, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      href="/contact"
                      className="border border-white/20 hover:border-white/50 text-white
                               px-6 py-3 rounded-xl text-[14px] sm:text-[15px]
                               font-medium transition-all duration-300
                               flex items-center justify-center gap-2"
                    >
                      Get Quote
                    </motion.a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4 — HOW WE WORK (PROCESS)
      ═══════════════════════════════════════════════════════════ */}
      <section className="w-full py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          >
            <span className="inline-block text-[#7ecfc0] text-[11px] sm:text-[13px]
                           tracking-[0.18em] font-semibold uppercase mb-4
                           border border-[#7ecfc0]/30 rounded-full px-4 py-1.5
                           bg-white/5">
              OUR PROCESS
            </span>
            <h2 className="text-white text-[28px] sm:text-[38px] md:text-[48px]
                         font-bold leading-[1.12] tracking-tight">
              How We Work
            </h2>
            <p className="mt-4 text-[#b5c7c8] text-[15px] sm:text-[17px] leading-7 max-w-2xl mx-auto">
              A simple, transparent four-step process from first call to ongoing delivery.
              No complexity, no surprises.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
          >
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="relative group bg-[#11464d] rounded-2xl p-6 sm:p-7
                          border border-white/5 hover:border-[#7ecfc0]/30
                          transition-all duration-300"
              >
                {/* Step Number */}
                <div className="text-[48px] sm:text-[56px] font-black text-white/5
                              group-hover:text-[#7ecfc0]/10 transition-colors duration-300
                              absolute top-4 right-5">
                  {step.step}
                </div>

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-[#7ecfc0]/15 text-[#7ecfc0]
                                flex items-center justify-center mb-5
                                group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>

                  <h3 className="text-white text-[18px] sm:text-[20px] font-semibold mb-3">
                    {step.title}
                  </h3>

                  <p className="text-[#b5c7c8] text-[13px] sm:text-[14px] leading-[1.8]">
                    {step.desc}
                  </p>
                </div>

                {/* Connector Line */}
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[2px]
                                bg-[#7ecfc0]/20" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 5 — WHY CHOOSE US
      ═══════════════════════════════════════════════════════════ */}
      <section className="w-full py-16 sm:py-24 bg-[#052f35]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block text-[#7ecfc0] text-[11px] sm:text-[13px]
                             tracking-[0.18em] font-semibold uppercase mb-4
                             border border-[#7ecfc0]/30 rounded-full px-4 py-1.5
                             bg-white/5">
                WHY US
              </span>

              <h2 className="text-white text-[28px] sm:text-[38px] md:text-[46px]
                           font-bold leading-[1.12] tracking-tight mb-6">
                Built for India–US
                <br />
                Business Corridors
              </h2>

              <p className="text-[#b5c7c8] text-[15px] sm:text-[17px] leading-[1.8] mb-8">
                We're not a generic outsourcing firm. Our team specializes exclusively
                in the India–US business corridor, combining deep expertise in both
                countries' tax systems, regulations, and business practices.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: <AiOutlineSafety size={20} />,
                    title: "Dual-Country Expertise",
                    desc: "CAs and CPAs who understand both Indian and US tax systems.",
                  },
                  {
                    icon: <AiOutlineClockCircle size={20} />,
                    title: "Timezone-Aligned Delivery",
                    desc: "Work happens while you sleep — deliverables ready when you start your day.",
                  },
                  {
                    icon: <AiOutlineDollar size={20} />,
                    title: "Fixed Monthly Pricing",
                    desc: "No hourly billing surprises. Know exactly what you pay, every month.",
                  },
                  {
                    icon: <AiOutlineTeam size={20} />,
                    title: "Dedicated Team Model",
                    desc: "Same people work on your account every month — consistency you can rely on.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl
                              hover:bg-white/5 transition-colors duration-300"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#7ecfc0]/15 text-[#7ecfc0]
                                  flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-white text-[15px] sm:text-[16px] font-semibold mb-1">
                        {item.title}
                      </h4>
                      <p className="text-[#b5c7c8] text-[13px] sm:text-[14px] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right — Visual Card Stack */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#7ecfc0]/10 to-[#dff5b7]/5
                              rounded-3xl blur-2xl" />

                <div className="relative bg-[#11464d] rounded-2xl p-6 sm:p-8 border border-white/10">
                  {/* Mini Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {[
                      { label: "Client Retention", value: "96%", color: "#7ecfc0" },
                      { label: "Avg Response Time", value: "<2hrs", color: "#dff5b7" },
                      { label: "Tax Savings", value: "$2.4M+", color: "#a8d8ea" },
                      { label: "Team Members", value: "45+", color: "#f0c27f" },
                    ].map((s, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="bg-white/5 rounded-xl p-4 text-center
                                 border border-white/5 hover:border-white/15
                                 transition-colors duration-300"
                      >
                        <div className="text-[22px] sm:text-[26px] font-bold mb-1"
                             style={{ color: s.color }}>
                          {s.value}
                        </div>
                        <div className="text-[#b5c7c8] text-[11px] sm:text-[12px] uppercase tracking-wider">
                          {s.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Trust Badges */}
                  <div className="flex flex-wrap gap-3 justify-center">
                    {["SOC 2 Compliant", "NDA Protected", "CA Reviewed", "ISO 27001"].map((badge, i) => (
                      <span
                        key={i}
                        className="text-[10px] sm:text-[11px] font-medium px-3 py-1.5
                                 rounded-full border border-[#7ecfc0]/20 text-[#7ecfc0]
                                 bg-[#7ecfc0]/5"
                      >
                        ✓ {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 6 — TESTIMONIALS
      ═══════════════════════════════════════════════════════════ */}
      <section className="w-full py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          >
            <span className="inline-block text-[#7ecfc0] text-[11px] sm:text-[13px]
                           tracking-[0.18em] font-semibold uppercase mb-4
                           border border-[#7ecfc0]/30 rounded-full px-4 py-1.5
                           bg-white/5">
              CLIENT STORIES
            </span>
            <h2 className="text-white text-[28px] sm:text-[38px] md:text-[48px]
                         font-bold leading-[1.12] tracking-tight">
              Trusted by Growing
              <br />
              Businesses
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="bg-[#11464d] rounded-2xl p-6 sm:p-7
                          border border-white/5 hover:border-[#7ecfc0]/20
                          transition-all duration-300"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, si) => (
                    <AiOutlineStar key={si} className="text-[#dff5b7]" size={16} />
                  ))}
                </div>

                <p className="text-[#c0d0d1] text-[14px] sm:text-[15px] leading-[1.8] mb-6 italic">
                  "{t.text}"
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className="w-10 h-10 rounded-full bg-[#7ecfc0]/20 text-[#7ecfc0]
                                flex items-center justify-center text-[16px] font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white text-[14px] font-semibold">{t.name}</p>
                    <p className="text-[#b5c7c8] text-[12px]">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 7 — FAQ
      ═══════════════════════════════════════════════════════════ */}
      <section className="w-full py-16 sm:py-24 bg-[#052f35]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16"
          >
            <span className="inline-block text-[#7ecfc0] text-[11px] sm:text-[13px]
                           tracking-[0.18em] font-semibold uppercase mb-4
                           border border-[#7ecfc0]/30 rounded-full px-4 py-1.5
                           bg-white/5">
              FAQ
            </span>
            <h2 className="text-white text-[28px] sm:text-[38px] md:text-[48px]
                         font-bold leading-[1.12] tracking-tight">
              Common Questions
            </h2>
          </motion.div>

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.08 }}
                className="bg-[#11464d] rounded-xl border border-white/5
                          hover:border-white/15 transition-colors duration-300
                          overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 sm:p-6
                            text-left"
                >
                  <span className="text-white text-[14px] sm:text-[16px] font-medium pr-4">
                    {faq.q}
                  </span>
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/10
                                flex items-center justify-center text-white
                                transition-transform duration-300"
                       style={{ transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)" }}>
                    <TbChevronDown size={18} />
                  </div>
                </button>

                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                        <div className="h-[1px] bg-white/10 mb-4" />
                        <p className="text-[#b5c7c8] text-[13px] sm:text-[15px] leading-[1.8]">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 8 — FINAL CTA
      ═══════════════════════════════════════════════════════════ */}
      <section className="w-full py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden"
          >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#11464d] to-[#0a3a40]" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#7ecfc0]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#dff5b7]/8 rounded-full blur-3xl" />

            <div className="relative z-10 p-8 sm:p-12 lg:p-16 text-center">
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2 }}
                className="inline-block text-[#7ecfc0] text-[11px] sm:text-[13px]
                         tracking-[0.18em] font-semibold uppercase mb-4
                         border border-[#7ecfc0]/30 rounded-full px-4 py-1.5
                         bg-white/5"
              >
                GET STARTED
              </motion.span>

              <h2 className="text-white text-[28px] sm:text-[38px] md:text-[48px]
                           font-bold leading-[1.12] tracking-tight mb-5">
                Ready to Simplify Your
                <br />
                Finance Operations?
              </h2>

              <p className="text-[#b5c7c8] text-[15px] sm:text-[18px] leading-[1.7]
                          max-w-2xl mx-auto mb-8 sm:mb-10">
                Book a free 30-minute consultation with our team. We'll understand your
                needs and recommend the right service package — no obligation, no pressure.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  href="/contact"
                  className="bg-[#dff5b7] hover:bg-[#cef0a0] text-[#052f35]
                           px-8 sm:px-10 py-4 rounded-xl text-[15px] sm:text-[17px]
                           font-bold transition-all duration-300
                           flex items-center gap-2 shadow-xl shadow-[#dff5b7]/20"
                >
                  Book Free Consultation
                  <AiOutlineArrowRight size={20} />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  href="mailto:hello@finansure.com"
                  className="border border-white/20 hover:border-white/50 text-white
                           px-8 sm:px-10 py-4 rounded-xl text-[15px] sm:text-[17px]
                           font-medium transition-all duration-300
                           flex items-center gap-2"
                >
                  <AiOutlineMail size={20} />
                  Email Us
                </motion.a>
              </div>

              {/* Bottom Info */}
              <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center
                            justify-center gap-4 sm:gap-8 text-[#b5c7c8] text-[13px] sm:text-[14px]">
                <span className="flex items-center gap-2">
                  <AiOutlineCheckCircle className="text-[#7ecfc0]" size={16} />
                  No commitment required
                </span>
                <span className="flex items-center gap-2">
                  <AiOutlineCheckCircle className="text-[#7ecfc0]" size={16} />
                  Response within 24 hours
                </span>
                <span className="flex items-center gap-2">
                  <AiOutlineCheckCircle className="text-[#7ecfc0]" size={16} />
                  100% confidential
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}