"use client";

import React, { useState, useEffect, useCallback } from "react";
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
  AiOutlineDollar,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";
import { TbStack, TbNorthStar, TbChevronDown } from "react-icons/tb";
import { LuShieldHalf } from "react-icons/lu";
import { TiSpannerOutline } from "react-icons/ti";
import { IoCubeOutline } from "react-icons/io5";
import {
  HiOutlineDocumentText,
  HiOutlineLightBulb,
  HiOutlineChartBar,
} from "react-icons/hi";
import { FiCheck, FiArrowUpRight } from "react-icons/fi";

/* ─── Animation Variants ──────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

/* ─── Services Data ───────────────────────────────────────────── */
const services = [
  {
    icon: <AiOutlineLineChart size={28} />,
    badge: "Most Popular",
    title: "US Tax & Sales Tax Compliance",
    headline:
      "Stop Losing Sleep Over US Sales Tax. We've Got Every State Covered.",
    shortDesc:
      "Nexus analysis, multi-state registration, monthly filings, and IRS return preparation — every state, every deadline.",
    fullDesc:
      "US sales tax is the #1 compliance risk for foreign-owned businesses and ecommerce brands. With 45 states levying sales tax — each with different nexus rules, rates, and filing schedules — the margin for error is razor thin. FinliGen's dedicated sales tax practice handles nexus analysis, registration in required states, monthly or quarterly return preparation, and amendment filing. We also manage your IRS income tax returns and work directly with your US CPA on account finalization.",
    features: [
      "Nexus Analysis",
      "Sales Tax Registration (all 50 states)",
      "Monthly/Quarterly Return Filing",
      "IRS Return Preparation",
      "QuickBooks Bookkeeping",
      "CPA Account Finalization",
    ],
    benefits: [
      "Zero missed deadlines",
      "Reduced tax liability",
      "Full multi-state coverage",
      "Real-time compliance dashboard",
    ],
    link: "/services/us-tax-sales-tax-compliance",
    color: "#06363c",
    accent: "#7ecfc0",
  },
  {
    icon: <TbStack size={28} />,
    badge: null,
    title: "CPA Firm Outsourcing",
    headline:
      "Your CPA Firm's Invisible Back-Office. Deadline-Driven. CA-Reviewed.",
    shortDesc:
      "CA-reviewed bookkeeping, workpaper prep, and tax return drafts delivered white-label to your US CPA firm.",
    fullDesc:
      "Busy season doesn't have to break your practice. FinliGen works as an extension of your US CPA firm — delivering client-ready bookkeeping, account finalization, workpaper preparation, and tax return drafts, all at offshore cost structures without offshore quality risk.",
    features: [
      "Client Bookkeeping (QuickBooks / Xero)",
      "Account Finalization & Workpapers",
      "Tax Return Drafts",
      "Payroll Reconciliation",
      "White-Label Delivery",
      "Dedicated Team Model",
    ],
    benefits: [
      "60% cost savings vs US staff",
      "CA-reviewed quality",
      "Scalable capacity",
      "Your brand, our work",
    ],
    link: "/services/cpa-firm-outsourcing",
    color: "#1a5c3a",
    accent: "#dff5b7",
  },
  {
    icon: <LuShieldHalf size={28} />,
    badge: null,
    title: "US LLC Setup & Advisory",
    headline: "Your US Business Entity. Set Up Right from Day One.",
    shortDesc:
      "LLC or C-Corp formation, EIN registration, operating agreements, and first-year compliance for non-US founders.",
    fullDesc:
      "Thousands of international founders are entering the US market every year — and most get the legal and compliance setup wrong. FinliGen guides you through LLC or C-Corp formation in your optimal state, EIN application, registered agent setup, operating agreement drafting, and the first-year compliance calendar.",
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
    color: "#2a4a7f",
    accent: "#a8d8ea",
  },
  {
    icon: <TbNorthStar size={28} />,
    badge: null,
    title: "Offshore Bookkeeping",
    headline: "Books Clean. Closed by the 15th. Every Month.",
    shortDesc:
      "Daily transaction recording, bank reconciliation, and monthly MIS reports — books clean and closed by the 15th.",
    fullDesc:
      "Our offshore bookkeeping service ensures your financial records are always accurate, up-to-date, and audit-ready. We handle daily transaction recording, categorization, bank and credit card reconciliation, vendor bill management, and monthly MIS reporting.",
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
    color: "#7a4f1a",
    accent: "#f0c27f",
  },
  {
    icon: <TiSpannerOutline size={28} />,
    badge: null,
    title: "Virtual CFO Services",
    headline: "CFO-Level Financial Strategy. Without the Full-Time Price Tag.",
    shortDesc:
      "Strategic financial oversight, cash flow planning, investor-ready reporting, and board-level advisory.",
    fullDesc:
      "Get the strategic financial leadership your business needs without hiring a full-time CFO. Our Virtual CFO service includes cash flow forecasting, budget vs actuals analysis, investor-ready financial reporting, KPI dashboards, fundraising support, and board-level financial advisory.",
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
    color: "#4a3080",
    accent: "#c3b1e1",
  },
  {
    icon: <IoCubeOutline size={28} />,
    badge: null,
    title: "Cross-Border Tax Advisory",
    headline: "India–US Tax Structuring That Actually Saves You Money.",
    shortDesc:
      "FEMA compliance, transfer pricing, DTAA planning, and India–US tax structuring for founders and growing companies.",
    fullDesc:
      "Operating between India and the US creates complex tax obligations. Our cross-border advisory covers FEMA compliance for outward/inward remittances, transfer pricing documentation, DTAA benefit optimization, and India-US entity structuring.",
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
    color: "#7a2040",
    accent: "#ff9a9e",
  },
];

/* ─── Process Steps ───────────────────────────────────────────── */
const processSteps = [
  {
    step: "01",
    title: "Discovery Call",
    desc: "30-minute free consultation to understand your business, current pain points, and compliance needs.",
    icon: <AiOutlinePhone size={22} />,
  },
  {
    step: "02",
    title: "Custom Proposal",
    desc: "Within 48 hours, you receive a detailed scope document with fixed monthly pricing — no hidden fees.",
    icon: <HiOutlineDocumentText size={22} />,
  },
  {
    step: "03",
    title: "Onboarding",
    desc: "We set up systems access, assign your dedicated team, and create your compliance calendar.",
    icon: <AiOutlineTeam size={22} />,
  },
  {
    step: "04",
    title: "Ongoing Delivery",
    desc: "Regular deliverables, monthly review calls, and a real-time dashboard to track everything.",
    icon: <AiOutlineRise size={22} />,
  },
];

/* ─── Stats ───────────────────────────────────────────────────── */
const stats = [
  {
    number: "200+",
    label: "Active Clients",
    icon: <AiOutlineTeam size={20} />,
  },
  {
    number: "50",
    label: "States Covered",
    icon: <AiOutlineGlobal size={20} />,
  },
  {
    number: "99.5%",
    label: "Accuracy Rate",
    icon: <AiOutlineStar size={20} />,
  },
  {
    number: "15th",
    label: "Books Closed By",
    icon: <AiOutlineClockCircle size={20} />,
  },
];

/* ─── FAQs ────────────────────────────────────────────────────── */
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

/* ─── Testimonials ────────────────────────────────────────────── */
const testimonials = [
  {
    name: "Rajesh Patel",
    role: "Founder, TechBridge Solutions",
    text: "FinliGen handled our entire US LLC setup and ongoing tax compliance. We went from zero US presence to fully operational in under 2 weeks.",
    rating: 5,
  },
  {
    name: "Sarah Mitchell",
    role: "Managing Partner, Mitchell & Co. CPA",
    text: "We've been outsourcing our bookkeeping and tax prep to FinliGen for 2 years now. The quality is consistently excellent, and our capacity has tripled.",
    rating: 5,
  },
  {
    name: "Amit Sharma",
    role: "CEO, CrossFlow Commerce",
    text: "The cross-border tax advisory saved us over $180K in the first year alone. Their dual India-US expertise is genuinely rare and invaluable.",
    rating: 5,
  },
];

/* ─── Auto-slide config ───────────────────────────────────────── */
const AUTO_SLIDE_MS = 6000;

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════ */
export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState(null);
  const [activeService, setActiveService] = useState(0);
  const [progress, setProgress] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  React.useEffect(() => {
    document.title = "Accounting & Compliance Services — FinliGen";
  }, []);

  /* ── Auto-slide for mobile ── */
  useEffect(() => {
    if (isPaused) return;

    setProgress(0);
    const start = Date.now();

    const tick = setInterval(() => {
      const elapsed = Date.now() - start;
      setProgress(Math.min((elapsed / AUTO_SLIDE_MS) * 100, 100));
    }, 50);

    const timer = setTimeout(() => {
      setDirection(1);
      setActiveService((p) => (p + 1) % services.length);
    }, AUTO_SLIDE_MS);

    return () => {
      clearInterval(tick);
      clearTimeout(timer);
    };
  }, [activeService, isPaused]);

  const goTo = useCallback(
    (i) => {
      setDirection(i > activeService ? 1 : -1);
      setActiveService(i);
      setProgress(0);
    },
    [activeService]
  );

  const goNext = useCallback(() => {
    setDirection(1);
    setActiveService((p) => (p + 1) % services.length);
    setProgress(0);
  }, []);

  const goPrev = useCallback(() => {
    setDirection(-1);
    setActiveService((p) => (p - 1 + services.length) % services.length);
    setProgress(0);
  }, []);

  /* slide animation */
  const slideVar = {
    enter: (d) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d) => ({ x: d > 0 ? -60 : 60, opacity: 0 }),
  };

  const current = services[activeService];

  return (
    <main className="bg-white min-h-screen overflow-x-hidden">
      {/* ═══════════════════════════════════════════════════════════
          SECTION 1 — HERO
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative w-full min-h-[70vh] sm:min-h-[75vh] lg:min-h-[88vh] flex items-center justify-center overflow-hidden bg-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
            {/* LEFT — Content */}
            <div className="relative z-10 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-5 sm:mb-6"
              >
                <span className="inline-flex items-center gap-2 text-[#06363c] text-[10px] sm:text-[12px] tracking-[0.18em] font-semibold uppercase border border-[#06363c]/30 rounded-full px-4 sm:px-5 py-1.5 sm:py-2 bg-[#06363c]/5">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#06363c] rounded-full animate-pulse" />
                  OUR SERVICES
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-[#0a0a0a] text-[26px] sm:text-[36px] md:text-[44px] lg:text-[52px] xl:text-[60px] font-bold leading-[1.1] tracking-tight"
              >
                Every Service Your
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                Finance Function Needs.{" "}
                <span className="text-[#06363c]">
                  <br className="hidden md:block" />
                  One Trusted Partner.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="mt-4 sm:mt-6 text-[#6b7280] text-[13px] sm:text-[16px] md:text-[18px] leading-[1.7] max-w-2xl mx-auto lg:mx-0"
              >
                From daily bookkeeping to complex cross-border compliance —
                FinliGen provides end-to-end financial services for businesses
                operating between{" "}
                <span className="text-[#0a0a0a] font-medium">India</span> and
                the{" "}
                <span className="text-[#0a0a0a] font-medium">
                  United States
                </span>
                .
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="mt-6 sm:mt-8 lg:mt-10 flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-3 sm:gap-4"
              >
                <motion.a
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  href="/contact"
                  className="w-full sm:w-auto bg-[#06363c] hover:bg-[#052f35] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-[13px] sm:text-[15px] font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#06363c]/20"
                >
                  Book Free Consultation
                  <AiOutlineArrowRight size={16} />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  href="#services-grid"
                  className="w-full sm:w-auto border border-[#06363c]/20 hover:border-[#06363c]/50 text-[#06363c] px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-[13px] sm:text-[15px] font-medium transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Explore Services
                  <TbChevronDown size={16} />
                </motion.a>
              </motion.div>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="mt-8 sm:mt-12 lg:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
              >
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    transition={{ duration: 0.5 }}
                    className="text-center lg:text-left"
                  >
                    <div className="flex items-center justify-center lg:justify-start gap-1.5 sm:gap-2 mb-1">
                      <span className="text-[#06363c]">{stat.icon}</span>
                      <span className="text-[#0a0a0a] text-[22px] sm:text-[28px] lg:text-[34px] font-bold">
                        {stat.number}
                      </span>
                    </div>
                    <p className="text-[#6b7280] text-[10px] sm:text-[12px] tracking-wide uppercase">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative order-first lg:order-last"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#06363c]/5 to-[#7ecfc0]/5 rounded-3xl blur-3xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200/50">
                <img
                  src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80"
                  alt="Financial Services Team"
                  className="w-full h-[220px] sm:h-[300px] md:h-[360px] lg:h-[420px] xl:h-[480px] object-cover"
                  loading="eager"
                />
                <div className="absolute bottom-3 sm:bottom-5 left-3 sm:left-5 right-3 sm:right-auto bg-white/95 backdrop-blur-sm rounded-xl p-3 sm:p-4 shadow-lg">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#06363c] text-white flex items-center justify-center shrink-0">
                      <AiOutlineCheckCircle size={18} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[#0a0a0a] text-[12px] sm:text-[14px] font-bold truncate">
                        Trusted by 200+ Businesses
                      </p>
                      <p className="text-[#6b7280] text-[10px] sm:text-[12px] truncate">
                        Across India & United States
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-3 -right-3 w-16 h-16 sm:w-20 sm:h-20 bg-[#7ecfc0]/20 rounded-full blur-2xl"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-20 h-20 sm:w-24 sm:h-24 bg-[#dff5b7]/20 rounded-full blur-2xl"
              />
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-[#06363c]/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-3 bg-[#06363c]/50 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 2 — SERVICES CARDS GRID
      ═══════════════════════════════════════════════════════════ */}
      <section
        id="services-grid"
        className="w-full py-12 sm:py-16 lg:py-24 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-16"
          >
            <span className="inline-block text-[#06363c] text-[10px] sm:text-[12px] tracking-[0.18em] font-semibold uppercase mb-3 sm:mb-4 border border-[#06363c]/20 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 bg-[#06363c]/5">
              WHAT WE OFFER
            </span>
            <h2 className="text-[#0a0a0a] text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-[1.12] tracking-tight">
              Comprehensive Financial
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              Services Suite
            </h2>
            <p className="mt-3 sm:mt-4 text-[#6b7280] text-[13px] sm:text-[15px] md:text-[17px] leading-7 max-w-2xl mx-auto px-2">
              Six core service lines designed to cover every financial need of
              businesses operating across India and the United States.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.05 }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 lg:gap-6"
          >
            {services.map((card, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="group relative rounded-2xl p-5 sm:p-6 lg:p-7 transition-all duration-300 flex flex-col justify-between bg-white hover:bg-white border border-gray-200/80 hover:border-[#06363c]/20 cursor-pointer hover:shadow-xl hover:shadow-gray-200/50"
                onClick={() => setActiveService(i)}
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 0%,${card.accent}15,transparent 70%)`,
                  }}
                />
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4 sm:mb-5 gap-2">
                    <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                      <div
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shrink-0"
                        style={{
                          backgroundColor: `${card.accent}20`,
                          color: card.color,
                        }}
                      >
                        {card.icon}
                      </div>
                      {card.badge && (
                        <span className="text-[9px] sm:text-[10px] font-semibold tracking-widest uppercase px-2.5 sm:px-3 py-1 rounded-full bg-[#06363c] text-white">
                          {card.badge}
                        </span>
                      )}
                    </div>
                    <motion.a
                      href={card.link}
                      whileHover={{ x: 3, y: -3 }}
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center bg-gray-100 group-hover:bg-[#06363c] group-hover:text-white text-gray-500 transition-all duration-300 shrink-0"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FiArrowUpRight size={16} />
                    </motion.a>
                  </div>
                  <h3 className="text-[17px] sm:text-[20px] lg:text-[22px] leading-tight font-semibold mb-2 sm:mb-3 text-[#0a0a0a] group-hover:text-[#06363c] transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-[12px] sm:text-[13px] lg:text-[14px] leading-[1.8] text-[#6b7280]">
                    {card.shortDesc}
                  </p>
                </div>
                <div className="relative z-10">
                  <div className="my-3 sm:my-4 h-[1px] bg-gray-200" />
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {card.features.slice(0, 3).map((f, fi) => (
                      <span
                        key={fi}
                        className="text-[10px] sm:text-[11px] lg:text-[12px] font-medium px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-gray-200 text-[#4b5563] bg-gray-50 group-hover:border-[#06363c]/20 group-hover:bg-[#06363c]/5 transition-colors duration-300"
                      >
                        ✓ {f}
                      </span>
                    ))}
                    {card.features.length > 3 && (
                      <span className="text-[10px] sm:text-[11px] font-medium px-2.5 py-1 rounded-full border border-gray-200 text-[#6b7280] bg-gray-50">
                        +{card.features.length - 3} more
                      </span>
                    )}
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
      <section className="w-full py-12 sm:py-16 lg:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-16"
          >
            <span className="inline-block text-[#7ecfc0] text-[10px] sm:text-[12px] tracking-[0.18em] font-semibold uppercase mb-3 sm:mb-4 border border-[#7ecfc0]/30 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 bg-[#7ecfc0]/5">
              DEEP DIVE
            </span>
            <h2 className="text-[#06363c] text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-[1.12] tracking-tight">
              Explore Each Service
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              In Detail
            </h2>
          </motion.div>

          {/* ── DESKTOP: side-tabs + detail panel (lg+) ── */}
          <div className="hidden lg:grid lg:grid-cols-12 gap-8">
            {/* Side Tabs */}
            <div className="lg:col-span-4 flex flex-col gap-2">
              {services.map((s, i) => (
                <motion.button
                  key={i}
                  whileHover={{ x: 4 }}
                  onClick={() => goTo(i)}
                  className={`flex items-center gap-3 px-5 py-4 rounded-xl text-left transition-all duration-300 ${
                    activeService === i
                      ? "bg-[#06363c]/8 border border-[#7ecfc0]/30 text-[#06363c] shadow-md"
                      : "bg-transparent border border-gray-100 text-gray-400 hover:bg-gray-50 hover:text-gray-600"
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      activeService === i
                        ? "bg-[#7ecfc0]/20 text-[#06363c]"
                        : "bg-gray-100 text-gray-400"
                    }`}
                  >
                    {s.icon}
                  </div>
                  <span className="text-[14px] font-medium">{s.title}</span>
                </motion.button>
              ))}
            </div>

            {/* Detail Panel */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35 }}
                  className="bg-gray-50 rounded-2xl p-5 sm:p-7 lg:p-9 border border-gray-200"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
                    <div
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: `${current.accent}20`,
                        color: current.color,
                      }}
                    >
                      {current.icon}
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-[#06363c] text-[20px] sm:text-[24px] lg:text-[28px] font-bold leading-tight">
                        {current.title}
                      </h3>
                      {current.badge && (
                        <span className="text-[10px] font-semibold tracking-widest uppercase bg-[#7ecfc0]/20 text-[#06363c] px-3 py-1 rounded-full mt-1.5 inline-block">
                          {current.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  <h4 className="text-[#06363c] text-[15px] sm:text-[18px] lg:text-[20px] font-semibold mb-3 sm:mb-4 leading-snug">
                    {current.headline}
                  </h4>

                  <p className="text-gray-600 text-[13px] sm:text-[14px] lg:text-[15px] leading-[1.8] mb-6 sm:mb-8">
                    {current.fullDesc}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7">
                    <div>
                      <h4 className="text-[#06363c] text-[14px] sm:text-[16px] lg:text-[18px] font-semibold mb-3 sm:mb-4 flex items-center gap-2">
                        <HiOutlineLightBulb
                          className="text-[#7ecfc0]"
                          size={18}
                        />
                        What's Included
                      </h4>
                      <ul className="space-y-2.5 sm:space-y-3">
                        {current.features.map((f, fi) => (
                          <motion.li
                            key={fi}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: fi * 0.06 }}
                            className="flex items-start gap-2.5 text-gray-600 text-[12px] sm:text-[13px] lg:text-[14px]"
                          >
                            <AiOutlineCheckCircle
                              className="text-[#7ecfc0] mt-0.5 flex-shrink-0"
                              size={15}
                            />
                            {f}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-[#06363c] text-[14px] sm:text-[16px] lg:text-[18px] font-semibold mb-3 sm:mb-4 flex items-center gap-2">
                        <HiOutlineChartBar
                          className="text-[#7ecfc0]"
                          size={18}
                        />
                        Key Benefits
                      </h4>
                      <ul className="space-y-2.5 sm:space-y-3">
                        {current.benefits.map((b, bi) => (
                          <motion.li
                            key={bi}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: bi * 0.06 + 0.25 }}
                            className="flex items-start gap-2.5"
                          >
                            <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#06363c]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <FiCheck className="text-[#06363c]" size={11} />
                            </div>
                            <span className="text-gray-600 text-[12px] sm:text-[13px] lg:text-[14px]">
                              {b}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-gray-200 flex flex-col sm:flex-row gap-3">
                    <motion.a
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      href={current.link}
                      className="w-full sm:w-auto bg-[#06363c] hover:bg-[#052f35] text-white px-5 sm:px-6 py-3 rounded-xl text-[13px] sm:text-[14px] font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      Learn More
                      <AiOutlineArrowRight size={15} />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.97 }}
                      href="/contact"
                      className="w-full sm:w-auto border border-[#06363c]/20 hover:border-[#06363c]/50 text-[#06363c] px-5 sm:px-6 py-3 rounded-xl text-[13px] sm:text-[14px] font-medium transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      Get Quote
                    </motion.a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* ── MOBILE / TABLET: auto-slide carousel (<lg) ── */}
          <div className="lg:hidden">
            {/* Slide Card — NO relative, NO arrows inside */}
            <div
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setTimeout(() => setIsPaused(false), 2000)}
            >
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={activeService}
                  custom={direction}
                  variants={slideVar}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden"
                >
                  {/* Color accent bar */}
                  <div
                    className="h-1"
                    style={{ backgroundColor: current.accent }}
                  />

                  <div className="p-4 sm:p-6">
                    {/* Header */}
                    <div className="flex items-start gap-3 mb-4">
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                        style={{
                          backgroundColor: `${current.accent}20`,
                          color: current.color,
                        }}
                      >
                        {React.cloneElement(current.icon, { size: 22 })}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-[#06363c] text-[17px] sm:text-[20px] font-bold leading-tight">
                            {current.title}
                          </h3>
                          <span className="text-gray-400 text-[11px] font-medium shrink-0 mt-0.5">
                            {activeService + 1}/{services.length}
                          </span>
                        </div>
                        {current.badge && (
                          <span className="text-[9px] font-semibold tracking-widest uppercase bg-[#06363c] text-white px-2 py-0.5 rounded-full mt-1.5 inline-block">
                            {current.badge}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Headline */}
                    <h4
                      className="text-[14px] sm:text-[16px] font-semibold mb-3 leading-snug"
                      style={{ color: current.color }}
                    >
                      {current.headline}
                    </h4>

                    {/* Short description */}
                    <p className="text-gray-600 text-[12px] sm:text-[14px] leading-[1.7] mb-5">
                      {current.shortDesc}
                    </p>

                    {/* Features */}
                    <div className="mb-4">
                      <h5 className="text-[12px] sm:text-[13px] font-semibold text-[#06363c] mb-2 flex items-center gap-1.5">
                        <HiOutlineLightBulb
                          className="text-[#7ecfc0]"
                          size={14}
                        />
                        What's Included
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        {current.features.map((f, fi) => (
                          <div
                            key={fi}
                            className="flex items-center gap-2 text-gray-600 text-[11px] sm:text-[12px] py-0.5"
                          >
                            <AiOutlineCheckCircle
                              className="flex-shrink-0"
                              style={{ color: current.accent }}
                              size={13}
                            />
                            <span className="truncate">{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="mb-5">
                      <h5 className="text-[12px] sm:text-[13px] font-semibold text-[#06363c] mb-2 flex items-center gap-1.5">
                        <HiOutlineChartBar
                          className="text-[#7ecfc0]"
                          size={14}
                        />
                        Key Benefits
                      </h5>
                      <div className="flex flex-wrap gap-1.5">
                        {current.benefits.map((b, bi) => (
                          <span
                            key={bi}
                            className="text-[10px] sm:text-[11px] font-medium px-2.5 py-1 rounded-full border"
                            style={{
                              borderColor: `${current.accent}40`,
                              backgroundColor: `${current.accent}10`,
                              color: current.color,
                            }}
                          >
                            ✓ {b}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex gap-2.5">
                      <a
                        href={current.link}
                        className="flex-1 bg-[#06363c] text-white py-2.5 rounded-xl text-[12px] sm:text-[13px] font-semibold flex items-center justify-center gap-1.5"
                      >
                        Learn More
                        <AiOutlineArrowRight size={13} />
                      </a>
                      <a
                        href="/contact"
                        className="flex-1 border border-[#06363c]/20 text-[#06363c] py-2.5 rounded-xl text-[12px] sm:text-[13px] font-medium flex items-center justify-center"
                      >
                        Get Quote
                      </a>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ── Niche: Prev Arrow — Dots — Next Arrow — Label ── */}
            <div className="mt-5 flex flex-col items-center gap-3">
              {/* Row: Arrow + Dots + Arrow */}
              <div className="flex items-center gap-3">
                {/* Prev */}
                <button
                  onClick={goPrev}
                  aria-label="Previous service"
                  className="w-9 h-9 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-[#06363c] hover:bg-[#06363c] hover:text-white hover:border-[#06363c] transition-all duration-200 active:scale-90"
                >
                  <AiOutlineLeft size={14} />
                </button>

                {/* Dots */}
                <div className="flex items-center gap-1.5">
                  {services.map((s, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      aria-label={s.title}
                      className="p-0.5"
                    >
                      <div
                        className={`rounded-full transition-all duration-300 overflow-hidden ${
                          activeService === i ? "w-8 h-2.5" : "w-2.5 h-2.5"
                        }`}
                        style={{
                          backgroundColor:
                            activeService === i ? current.accent : "#d1d5db",
                        }}
                      >
                        {activeService === i && (
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: `${progress}%`,
                              backgroundColor: current.color,
                              opacity: 0.35,
                            }}
                          />
                        )}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Next */}
                <button
                  onClick={goNext}
                  aria-label="Next service"
                  className="w-9 h-9 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-[#06363c] hover:bg-[#06363c] hover:text-white hover:border-[#06363c] transition-all duration-200 active:scale-90"
                >
                  <AiOutlineRight size={14} />
                </button>
              </div>

              {/* Active Label */}
              <motion.p
                key={activeService}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-[11px] sm:text-[12px] font-medium text-gray-500 flex items-center gap-1.5"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ backgroundColor: current.accent }}
                />
                {current.title}
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 4 — HOW WE WORK
      ═══════════════════════════════════════════════════════════ */}
      <section className="w-full py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-16"
          >
            <span className="inline-block text-[#06363c] text-[10px] sm:text-[12px] tracking-[0.18em] font-semibold uppercase mb-3 sm:mb-4 border border-[#06363c]/20 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 bg-[#06363c]/5">
              OUR PROCESS
            </span>
            <h2 className="text-[#0a0a0a] text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-[1.12] tracking-tight">
              How We Work
            </h2>
            <p className="mt-3 sm:mt-4 text-[#6b7280] text-[13px] sm:text-[15px] md:text-[17px] leading-7 max-w-2xl mx-auto">
              A simple, transparent four-step process from first call to ongoing
              delivery.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.05 }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6"
          >
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="relative group bg-white rounded-2xl p-5 sm:p-6 lg:p-7 border border-gray-200 hover:border-[#06363c]/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-[40px] sm:text-[48px] lg:text-[56px] font-black text-gray-100 group-hover:text-[#06363c]/10 transition-colors duration-300 absolute top-3 sm:top-4 right-4 sm:right-5 leading-none">
                  {step.step}
                </div>
                <div className="relative z-10">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#06363c]/10 text-[#06363c] flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-[#06363c] group-hover:text-white group-hover:scale-110 transition-all duration-300">
                    {step.icon}
                  </div>
                  <h3 className="text-[#0a0a0a] text-[16px] sm:text-[18px] lg:text-[20px] font-semibold mb-2 sm:mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[#6b7280] text-[12px] sm:text-[13px] lg:text-[14px] leading-[1.8]">
                    {step.desc}
                  </p>
                </div>
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[2px] bg-[#06363c]/15" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 5 — WHY CHOOSE US
      ═══════════════════════════════════════════════════════════ */}
      <section className="w-full py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block text-[#06363c] text-[10px] sm:text-[12px] tracking-[0.18em] font-semibold uppercase mb-3 sm:mb-4 border border-[#06363c]/20 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 bg-[#06363c]/5">
                WHY FINLIGEN
              </span>
              <h2 className="text-[#0a0a0a] text-[24px] sm:text-[32px] md:text-[38px] lg:text-[46px] font-bold leading-[1.12] tracking-tight mb-4 sm:mb-6">
                Built for India–US
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                Business Corridors
              </h2>
              <p className="text-[#6b7280] text-[13px] sm:text-[15px] md:text-[17px] leading-[1.8] mb-6 sm:mb-8">
                We're not a generic outsourcing firm. Our team specializes
                exclusively in the India–US business corridor, combining deep
                expertise in both countries' tax systems, regulations, and
                business practices.
              </p>
              <div className="space-y-3 sm:space-y-4">
                {[
                  {
                    icon: <AiOutlineSafety size={18} />,
                    title: "Dual-Country Expertise",
                    desc: "CAs and CPAs who understand both Indian and US tax systems.",
                  },
                  {
                    icon: <AiOutlineClockCircle size={18} />,
                    title: "Timezone-Aligned Delivery",
                    desc: "Work happens while you sleep — deliverables ready when you start.",
                  },
                  {
                    icon: <AiOutlineDollar size={18} />,
                    title: "Fixed Monthly Pricing",
                    desc: "No hourly billing surprises. Know exactly what you pay.",
                  },
                  {
                    icon: <AiOutlineTeam size={18} />,
                    title: "Dedicated Team Model",
                    desc: "Same people on your account every month — consistency you can rely on.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300 border border-transparent hover:border-gray-200"
                  >
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#06363c]/10 text-[#06363c] flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-[#0a0a0a] text-[14px] sm:text-[15px] lg:text-[16px] font-semibold mb-0.5 sm:mb-1">
                        {item.title}
                      </h4>
                      <p className="text-[#6b7280] text-[12px] sm:text-[13px] lg:text-[14px] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#06363c]/5 to-[#7ecfc0]/5 rounded-3xl blur-2xl" />
              <div className="relative bg-gray-50 rounded-2xl p-5 sm:p-7 lg:p-8 border border-gray-200 shadow-xl">
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-5 sm:mb-6">
                  {[
                    {
                      label: "Client Retention",
                      value: "96%",
                      color: "#06363c",
                    },
                    {
                      label: "Avg Response Time",
                      value: "<2hrs",
                      color: "#1a5c3a",
                    },
                    {
                      label: "Tax Savings",
                      value: "$2.4M+",
                      color: "#2a4a7f",
                    },
                    {
                      label: "Team Members",
                      value: "45+",
                      color: "#7a4f1a",
                    },
                  ].map((s, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: false }}
                      transition={{ delay: 0.3 + i * 0.08 }}
                      className="bg-white rounded-xl p-3 sm:p-4 text-center border border-gray-100 hover:border-gray-300 hover:shadow-md transition-all duration-300"
                    >
                      <div
                        className="text-[20px] sm:text-[24px] lg:text-[26px] font-bold mb-1"
                        style={{ color: s.color }}
                      >
                        {s.value}
                      </div>
                      <div className="text-[#6b7280] text-[9px] sm:text-[11px] lg:text-[12px] uppercase tracking-wider">
                        {s.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                  {[
                    "SOC 2 Compliant",
                    "NDA Protected",
                    "CA Reviewed",
                    "ISO 27001",
                  ].map((badge, i) => (
                    <span
                      key={i}
                      className="text-[9px] sm:text-[10px] lg:text-[11px] font-medium px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-[#06363c]/15 text-[#06363c] bg-[#06363c]/5"
                    >
                      ✓ {badge}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SECTION 6 — TESTIMONIALS
      ═══════════════════════════════════════════════════════════ */}
      <section className="w-full py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-16"
          >
            <span className="inline-block text-[#06363c] text-[10px] sm:text-[12px] tracking-[0.18em] font-semibold uppercase mb-3 sm:mb-4 border border-[#06363c]/20 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 bg-[#06363c]/5">
              CLIENT STORIES
            </span>
            <h2 className="text-[#0a0a0a] text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-[1.12] tracking-tight">
              Trusted by Growing
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              Businesses
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.05 }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-5 sm:p-6 lg:p-7 border border-gray-200 hover:border-[#06363c]/20 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 mb-3 sm:mb-4">
                    {Array.from({ length: t.rating }).map((_, si) => (
                      <AiOutlineStar
                        key={si}
                        className="text-[#f0c27f]"
                        size={14}
                      />
                    ))}
                  </div>
                  <p className="text-[#4b5563] text-[13px] sm:text-[14px] lg:text-[15px] leading-[1.8] mb-5 sm:mb-6 italic">
                    "{t.text}"
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-3 sm:pt-4 border-t border-gray-200">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#06363c] text-white flex items-center justify-center text-[14px] sm:text-[16px] font-bold shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <p className="text-[#0a0a0a] text-[13px] sm:text-[14px] font-semibold truncate">
                      {t.name}
                    </p>
                    <p className="text-[#6b7280] text-[11px] sm:text-[12px] truncate">
                      {t.role}
                    </p>
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
      <section className="w-full py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="text-center mb-10 sm:mb-14 lg:mb-16"
          >
            <span className="inline-block text-[#06363c] text-[10px] sm:text-[12px] tracking-[0.18em] font-semibold uppercase mb-3 sm:mb-4 border border-[#06363c]/20 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 bg-[#06363c]/5">
              FAQ
            </span>
            <h2 className="text-[#0a0a0a] text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-[1.12] tracking-tight">
              Common Questions
            </h2>
          </motion.div>

          <div className="space-y-2.5 sm:space-y-3 lg:space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.06 }}
                className="bg-gray-50 rounded-xl border border-gray-200 hover:border-[#06363c]/20 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 lg:p-6 text-left gap-3 min-h-[56px]"
                >
                  <span className="text-[#0a0a0a] text-[13px] sm:text-[14px] lg:text-[16px] font-medium pr-2 leading-snug">
                    {faq.q}
                  </span>
                  <div
                    className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gray-200 flex items-center justify-center text-[#06363c] transition-transform duration-300"
                    style={{
                      transform:
                        openFaq === i ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    <TbChevronDown size={16} />
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
                      <div className="px-4 sm:px-5 lg:px-6 pb-4 sm:pb-5 lg:pb-6 pt-0">
                        <div className="h-[1px] bg-gray-200 mb-3 sm:mb-4" />
                        <p className="text-[#6b7280] text-[12px] sm:text-[13px] lg:text-[15px] leading-[1.8]">
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
      <section className="w-full py-12 sm:py-16 lg:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl sm:rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#06363c] to-[#052f35]" />
            <div className="absolute top-0 right-0 w-40 sm:w-60 lg:w-80 h-40 sm:h-60 lg:h-80 bg-[#7ecfc0]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 sm:w-48 lg:w-60 h-32 sm:h-48 lg:h-60 bg-[#dff5b7]/8 rounded-full blur-3xl" />

            <div className="relative z-10 p-6 sm:p-10 lg:p-14 xl:p-16 text-center">
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: 0.2 }}
                className="inline-block text-[#7ecfc0] text-[10px] sm:text-[12px] tracking-[0.18em] font-semibold uppercase mb-3 sm:mb-4 border border-[#7ecfc0]/30 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 bg-white/5"
              >
                GET STARTED
              </motion.span>

              <h2 className="text-white text-[22px] sm:text-[30px] md:text-[38px] lg:text-[46px] font-bold leading-[1.12] tracking-tight mb-4 sm:mb-5">
                Ready to Simplify Your
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                Finance Operations?
              </h2>

              <p className="text-[#b5c7c8] text-[13px] sm:text-[15px] md:text-[17px] leading-[1.7] max-w-2xl mx-auto mb-6 sm:mb-8 lg:mb-10 px-2">
                Book a free 30-minute consultation with our team. We'll
                understand your needs and recommend the right service package —
                no obligation, no pressure.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <motion.a
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  href="/contact"
                  className="w-full sm:w-auto bg-[#dff5b7] hover:bg-[#cef0a0] text-[#052f35] px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-xl text-[13px] sm:text-[15px] lg:text-[17px] font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-xl shadow-[#dff5b7]/20"
                >
                  Book Free Consultation
                  <AiOutlineArrowRight size={18} />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  href="mailto:hello@finligen.com"
                  className="w-full sm:w-auto border border-white/20 hover:border-white/50 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-xl text-[13px] sm:text-[15px] lg:text-[17px] font-medium transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <AiOutlineMail size={18} />
                  Email Us
                </motion.a>
              </div>

              <div className="mt-6 sm:mt-8 lg:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 lg:gap-8 text-[#b5c7c8] text-[11px] sm:text-[13px] lg:text-[14px]">
                <span className="flex items-center gap-1.5 sm:gap-2">
                  <AiOutlineCheckCircle className="text-[#7ecfc0]" size={14} />
                  No commitment required
                </span>
                <span className="flex items-center gap-1.5 sm:gap-2">
                  <AiOutlineCheckCircle className="text-[#7ecfc0]" size={14} />
                  Response within 24 hours
                </span>
                <span className="flex items-center gap-1.5 sm:gap-2">
                  <AiOutlineCheckCircle className="text-[#7ecfc0]" size={14} />
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