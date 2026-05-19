"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
  useInView,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
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
import { FiCheck, FiExternalLink, FiArrowUpRight } from "react-icons/fi";

/* ─── Magnetic Button Hook ──────────────────────────────────────── */
function useMagneticEffect(strength = 0.3) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * strength);
    y.set((e.clientY - centerY) * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { ref, x, y, handleMouseMove, handleMouseLeave };
}

/* ─── Particle Field Component ──────────────────────────────────── */
function ParticleField({ count = 25, color = "#06363c" }) {
  const particles = useRef(
    Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 8,
      opacity: Math.random() * 0.4 + 0.1,
    }))
  ).current;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ x: `${p.x}vw`, y: `${p.y}vh`, opacity: 0 }}
          animate={{
            y: [`${p.y}vh`, `${p.y - 30}vh`, `${p.y}vh`],
            x: [`${p.x}vw`, `${p.x + (Math.random() - 0.5) * 10}vw`, `${p.x}vw`],
            opacity: [0, p.opacity, 0],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            width: p.size,
            height: p.size,
            borderRadius: "50%",
            background: color,
          }}
        />
      ))}
    </div>
  );
}

/* ─── Animated Counter ─────────────────────────────────────────── */
function AnimatedCounter({ value, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const numericValue = parseInt(value.replace(/\D/g, ""), 10);
    if (isNaN(numericValue)) {
      setCount(value);
      return;
    }
    let start = 0;
    const duration = 1800;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * numericValue));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(numericValue);
    };
    requestAnimationFrame(step);
  }, [isInView, value]);

  const display =
    typeof count === "number"
      ? count + (value.includes("+") ? "+" : "")
      : value;
  return <span ref={ref}>{display}</span>;
}

/* ─── Typewriter Component ──────────────────────────────────────── */
function Typewriter({ texts, speed = 80, pause = 2000 }) {
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const target = texts[textIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < target.length) {
            setCurrentText(target.slice(0, charIndex + 1));
            setCharIndex((c) => c + 1);
          } else {
            setTimeout(() => setIsDeleting(true), pause);
          }
        } else {
          if (charIndex > 0) {
            setCurrentText(target.slice(0, charIndex - 1));
            setCharIndex((c) => c - 1);
          } else {
            setIsDeleting(false);
            setTextIndex((t) => (t + 1) % texts.length);
          }
        }
      },
      isDeleting ? speed / 2 : speed
    );
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts, speed, pause]);

  return (
    <span>
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity }}
        style={{ borderRight: "2px solid #06363c", marginLeft: "2px" }}
      />
    </span>
  );
}

/* ─── Glowing Border Card ───────────────────────────────────────── */
function GlowCard({ children, style, glowColor = "#06363c" }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ position: "relative", borderRadius: "24px", ...style }}
    >
      {isHovered && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "24px",
            background: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, ${glowColor}15, transparent 70%)`,
            pointerEvents: "none",
            zIndex: 1,
          }}
        />
      )}
      {children}
    </div>
  );
}

/* ─── Marquee Ticker ─────────────────────────────────────────────── */
function MarqueeTicker({ items }) {
  const doubled = [...items, ...items];
  return (
    <div
      style={{
        overflow: "hidden",
        background: "#06363c",
        padding: "14px 0",
        position: "relative",
      }}
    >
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        style={{ display: "flex", gap: "48px", width: "max-content" }}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              flexShrink: 0,
            }}
          >
            <span style={{ color: "#7ecfc0", fontSize: "13px" }}>◆</span>
            <span
              style={{
                color: "#fff",
                fontSize: "13px",
                fontWeight: 500,
                letterSpacing: "0.06em",
                whiteSpace: "nowrap",
              }}
            >
              {item}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

/* ─── Floating Label ─────────────────────────────────────────────── */
function FloatingBadge({ children, style, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.05, y: -3 }}
      style={{
        position: "absolute",
        background: "#fff",
        borderRadius: "14px",
        padding: "10px 16px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
        border: "1px solid rgba(6,54,60,0.08)",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        cursor: "default",
        ...style,
      }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Progress Bar ───────────────────────────────────────────────── */
function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "3px",
        background: "linear-gradient(90deg, #06363c, #7ecfc0, #dff5b7)",
        scaleX,
        transformOrigin: "left",
        zIndex: 9999,
      }}
    />
  );
}

/* ─── Number Reveal ──────────────────────────────────────────────── */
function NumberReveal({ children, delay = 0 }) {
  return (
    <div style={{ overflow: "hidden" }}>
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/* ─── Text Reveal Word by Word ───────────────────────────────────── */
function WordReveal({ text, style, delay = 0 }) {
  const words = text.split(" ");
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.3em", ...style }}>
      {words.map((word, i) => (
        <div key={i} style={{ overflow: "hidden" }}>
          <motion.span
            initial={{ y: "110%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: delay + i * 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ display: "inline-block" }}
          >
            {word}
          </motion.span>
        </div>
      ))}
    </div>
  );
}

/* ─── 3D Tilt Card ───────────────────────────────────────────────── */
function TiltCard({ children, style }) {
  const ref = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [shine, setShine] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setRotateX((y - 0.5) * -14);
    setRotateY((x - 0.5) * 14);
    setShine({ x: x * 100, y: y * 100 });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setShine({ x: 50, y: 50 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX, rotateY }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
        position: "relative",
        overflow: "hidden",
        ...style,
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at ${shine.x}% ${shine.y}%, rgba(255,255,255,0.15) 0%, transparent 60%)`,
          pointerEvents: "none",
          zIndex: 2,
          borderRadius: "inherit",
          transition: "background 0.1s",
        }}
      />
      {children}
    </motion.div>
  );
}

/* ─── Animation Variants ──────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};
const slideRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ─── Data ───────────────────────────────────────────────────── */
const tickerItems = [
  "US Sales Tax Compliance",
  "IRS Penalty Abatement",
  "FEMA ODI-APR Reporting",
  "QuickBooks ProAdvisor",
  "Cross-Border Tax Advisory",
  "CA-Reviewed Deliverables",
  "50+ Finance Professionals",
  "500+ Businesses Served",
  "Multi-State Nexus Analysis",
  "Transfer Pricing Advisory",
];

const stats = [
  {
    number: "500+",
    label: "Businesses Served",
    icon: <AiOutlineTeam size={20} />,
  },
  {
    number: "50+",
    label: "Team Members",
    icon: <AiOutlineGlobal size={20} />,
  },
  {
    number: "0",
    label: "IRS Penalties",
    subtitle: "Under our management",
    icon: <HiOutlineShieldCheck size={20} />,
  },
  {
    number: "4",
    label: "Office Locations",
    icon: <TbBuildingBank size={20} />,
  },
];

const differentiators = [
  {
    icon: <AiOutlineGlobal size={26} />,
    number: "01",
    title: "Dual-side expertise, single point of contact",
    desc: "Your Indian CA handles your GST returns. Your US firm handles your IRS filings. Neither talks to the other. FinliGen does both — which means we catch the conflicts and the opportunities that fall through the gap between them.",
    accent: "#06363c",
    light: "#e8f4f3",
  },
  {
    icon: <HiOutlineShieldCheck size={26} />,
    number: "02",
    title: "A delivery model with no single points of failure",
    desc: "50+ professionals. Four offices. Redundant review teams. When your previous accountant went on leave and your books weren't ready for your board meeting — that doesn't happen with FinliGen. Ever.",
    accent: "#1a5c3a",
    light: "#eaf5ee",
  },
  {
    icon: <TbCertificate size={26} />,
    number: "03",
    title: "CA review. Not intern review. CA review.",
    desc: "Every bookkeeping file, tax return, and compliance report is signed off by a qualified Chartered Accountant — not passed through a quality-check checklist by a junior associate. The accountability stops with someone who has credentials on the line.",
    accent: "#2a4a7f",
    light: "#eaf0fb",
  },
];

const team = [
  {
    initials: "AK",
    name: "CA Amit Kumar",
    title: "Founder & Managing Partner",
    credentials: "Chartered Accountant, ICAI",
    bio: "Amit has spent 15 years doing one thing: making sure businesses operating across the US–India corridor don't get ambushed by compliance they didn't see coming. He personally oversees every complex cross-border engagement — IRS structuring, multi-state nexus analysis, FEMA-ODI compliance, and inbound US investment advisory.",
    specializes: [
      "IRS penalty abatement",
      "Economic nexus analysis",
      "FEMA ODI/APR",
      "US–India treaty positions",
      "Transfer pricing advisory",
    ],
    linkedin: "#",
    color: "#06363c",
  },
  {
    initials: "SS",
    name: "Sumit Singh",
    title: "Head of Operations",
    credentials: "MBA, Operations & Finance",
    bio: "Sumit built the internal systems that let FinliGen run 50+ active client engagements simultaneously without a single missed filing deadline. He's the reason a CPA partner in Chicago can send files at 9pm and find a completed deliverable in their inbox by morning.",
    testimonial:
      "Sumit's team turned around our entire Q4 backlog in 11 days. We'd been sitting on it for three weeks before we called FinliGen.",
    testimonialAuthor: "CPA Partner, Illinois",
    linkedin: "#",
    color: "#1a5c3a",
  },
  {
    initials: "NS",
    name: "Naveen Singh",
    title: "Head of Accounting",
    credentials: "MBA · US GAAP Specialist",
    bio: "Naveen leads the team responsible for the quality of everything that goes out under FinliGen's name. He came from financial reporting at a multinational, which means he's fluent in both Indian Ind-AS standards and US GAAP — a combination that's rarer than it sounds.",
    oversees: [
      "QuickBooks bookkeeping",
      "Management accounts",
      "US GAAP reporting",
      "Account finalization for CPA outsourcing clients",
    ],
    linkedin: "#",
    color: "#2a4a7f",
  },
  {
    initials: "RS",
    name: "Rahul Singh",
    title: "Head of Taxation",
    credentials: "Direct & Indirect Tax Expert",
    bio: "Rahul manages the tax practice — both the US-side filings and the Indian direct and indirect tax work for cross-border clients. His job is to ensure clients are optimized, not just compliant. He finds the legal positions that reduce tax exposure.",
    specializes: [
      "US state income tax",
      "GST compliance & optimization",
      "Advance tax planning",
      "Treaty-based filing positions",
    ],
    linkedin: "#",
    color: "#7a4f1a",
  },
];

const credentials = [
  {
    title: "ICAI Registered",
    subtitle: "CA firm registration",
    detail: "[Reg. No.]",
    icon: <TbCertificate size={22} />,
  },
  {
    title: "QuickBooks ProAdvisor",
    subtitle: "Certified partner",
    detail: "All editions",
    icon: <HiOutlineDocumentText size={22} />,
  },
  {
    title: "US Tax Enrolled",
    subtitle: "IRS-recognized",
    detail: "tax practice",
    icon: <AiOutlineSafety size={22} />,
  },
  {
    title: "4 Offices",
    subtitle: "Delhi · Noida",
    detail: "Gurgaon · Jaipur",
    icon: <TbBuildingBank size={22} />,
  },
];

const storyItems = [
  {
    year: "2009",
    icon: <HiOutlineLightBulb size={22} />,
    title: "The Problem Revealed",
    color: "#06363c",
    content: (
      <>
        <p
          style={{
            color: "#6b7280",
            fontSize: "16px",
            lineHeight: "1.85",
            marginBottom: "16px",
          }}
        >
          In 2009, CA Amit Kumar was advising an Indian technology company that
          had been selling software to US customers for three years. They had
          revenue. They had customers. What they didn't have was a US sales tax
          registration in a single state.
        </p>
        <p
          style={{
            color: "#6b7280",
            fontSize: "16px",
            lineHeight: "1.85",
            marginBottom: "16px",
          }}
        >
          When the nexus analysis came back, the liability was in six figures.
          The company survived it — but only barely, and only because Amit
          caught it before the state revenue department did.
        </p>
        <p
          style={{ color: "#6b7280", fontSize: "16px", lineHeight: "1.85" }}
        >
          That case wasn't unusual. In the years that followed, Amit saw the
          same pattern repeat across dozens of businesses: Indian founders and
          US CPA firms managing clients with cross-border operations, all of
          them carrying compliance risk they didn't know they had. The problem
          wasn't negligence.{" "}
          <strong style={{ color: "#0a0a0a", fontWeight: 600 }}>
            It was that no single firm had the expertise to see both sides
            clearly.
          </strong>
        </p>
      </>
    ),
  },
  {
    year: "2012",
    icon: <AiOutlineTrophy size={22} />,
    title: "The Founding Decision",
    color: "#1a5c3a",
    content: (
      <p style={{ color: "#6b7280", fontSize: "16px", lineHeight: "1.85" }}>
        FinliGen was founded to close that gap. Not as a generalist accounting
        firm that handles the occasional international client — but as a{" "}
        <strong style={{ color: "#0a0a0a", fontWeight: 600 }}>
          specialist practice built entirely around the US–India compliance
          corridor
        </strong>
        . We only work on problems we understand deeply. Which is why we only
        do this.
      </p>
    ),
  },
  {
    year: "Today",
    icon: <AiOutlineGlobal size={22} />,
    title: "What We've Built",
    color: "#2a4a7f",
    content: (
      <>
        <p
          style={{
            color: "#6b7280",
            fontSize: "16px",
            lineHeight: "1.85",
            marginBottom: "20px",
          }}
        >
          Today, FinliGen is a team of 50+ finance and compliance professionals
          operating across four offices in India. We manage US sales tax
          compliance across all 50 states. We handle IRS filings,
          FEMA-ODI-APR reporting, QuickBooks-native bookkeeping, and back-office
          support for US CPA firms operating at scale.
        </p>
        <div
          style={{
            background: "#f0faf8",
            borderRadius: "14px",
            padding: "20px 24px",
            border: "1px solid #c5e8e3",
          }}
        >
          <p
            style={{
              color: "#0a0a0a",
              fontSize: "15px",
              fontWeight: 600,
              marginBottom: "12px",
            }}
          >
            Every file — every single one — is reviewed by a qualified
            Chartered Accountant before it leaves our office.
          </p>
          {[
            "ICAI-registered",
            "QuickBooks ProAdvisor certified",
            "500+ businesses managed without a single IRS penalty notice",
          ].map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "10px",
                marginTop: "10px",
              }}
            >
              <div
                style={{
                  width: "18px",
                  height: "18px",
                  borderRadius: "50%",
                  background: "#06363c",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  marginTop: "2px",
                }}
              >
                <FiCheck size={11} color="#fff" />
              </div>
              <span
                style={{
                  color: "#4b5563",
                  fontSize: "15px",
                  lineHeight: "1.6",
                }}
              >
                {item}
              </span>
            </div>
          ))}
        </div>
      </>
    ),
  },
];

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════ */
export default function AboutPage() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, -80]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0.4]);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isCursorHovered, setIsCursorHovered] = useState(false);

  const cursorX = useSpring(useMotionValue(0), { stiffness: 120, damping: 20 });
  const cursorY = useSpring(useMotionValue(0), { stiffness: 120, damping: 20 });

  useEffect(() => {
    document.title = "About Us — FinliGen | Cross-Border Compliance Experts";

    const moveCursor = (e) => {
      cursorX.set(e.clientX - 20);
      cursorY.set(e.clientY - 20);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <main
      style={{ background: "#ffffff", minHeight: "100vh", overflowX: "hidden" }}
    >
      {/* ─── Scroll Progress Bar ─── */}
      <ScrollProgressBar />

      {/* ─── Custom Cursor ─── */}
      {/* <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          position: "fixed",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          border: "1.5px solid rgba(6,54,60,0.4)",
          pointerEvents: "none",
          zIndex: 9998,
          mixBlendMode: "difference",
        }}
      /> */}

      {/* ═══════════ SECTION 1 — HERO ═══════════ */}
      <section
        style={{
          position: "relative",
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* Parallax BG */}
        <motion.div
          style={{
            y: heroY,
            opacity: heroOpacity,
            position: "absolute",
            inset: 0,
            zIndex: 0,
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.92) 50%, rgba(240,250,248,0.95) 100%)",
            }}
          />
          {/* Grid pattern */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0.04,
              backgroundImage:
                "linear-gradient(rgba(6,54,60,1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,54,60,1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </motion.div>

        {/* Particle Field */}
        <ParticleField count={20} color="#06363c" />

        {/* Decorative orbs */}
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: "10%",
            right: "-5%",
            width: "500px",
            height: "500px",
            background:
              "radial-gradient(circle, #7ecfc040 0%, transparent 70%)",
            borderRadius: "50%",
            zIndex: 1,
          }}
        />
        <motion.div
          animate={{ scale: [1.15, 1, 1.15], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            bottom: "5%",
            left: "-10%",
            width: "600px",
            height: "600px",
            background:
              "radial-gradient(circle, #06363c20 0%, transparent 70%)",
            borderRadius: "50%",
            zIndex: 1,
          }}
        />

        {/* Floating Badges */}
        <FloatingBadge
          delay={1.8}
          style={{ top: "22%", left: "6%", zIndex: 3 }}
        >
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#1a5c3a",
            }}
          />
          <span
            style={{ fontSize: "12px", fontWeight: 600, color: "#1a5c3a" }}
          >
            ICAI Certified
          </span>
        </FloatingBadge>

        <FloatingBadge
          delay={2.1}
          style={{ top: "30%", right: "5%", zIndex: 3 }}
        >
          <HiOutlineShieldCheck size={16} color="#2a4a7f" />
          <span
            style={{ fontSize: "12px", fontWeight: 600, color: "#2a4a7f" }}
          >
            0 IRS Penalties
          </span>
        </FloatingBadge>

        <FloatingBadge
          delay={2.4}
          style={{ bottom: "28%", left: "4%", zIndex: 3 }}
        >
          <AiOutlineTeam size={16} color="#06363c" />
          <span
            style={{ fontSize: "12px", fontWeight: 600, color: "#06363c" }}
          >
            500+ Businesses
          </span>
        </FloatingBadge>

        {/* Hero Content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1100px",
            width: "100%",
            margin: "0 auto",
            padding: "80px 24px",
            textAlign: "center",
          }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ marginBottom: "32px" }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "11px",
                letterSpacing: "0.18em",
                fontWeight: 700,
                textTransform: "uppercase",
                color: "#06363c",
                border: "1.5px solid rgba(6,54,60,0.25)",
                borderRadius: "100px",
                padding: "8px 20px",
                background: "rgba(255,255,255,0.9)",
                backdropFilter: "blur(8px)",
              }}
            >
              <motion.span
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "#06363c",
                  display: "inline-block",
                }}
              />
              About FinliGen
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontSize: "clamp(36px, 6vw, 72px)",
              fontWeight: 800,
              lineHeight: 1.07,
              letterSpacing: "-0.03em",
              color: "#0a0a0a",
              margin: "0 0 24px",
            }}
          >
            Most firms know one side
            <br />
            of the border.{" "}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              style={{
                color: "#06363c",
                position: "relative",
                display: "inline-block",
              }}
            >
              We were built
              to know both.
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  delay: 1.3,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  position: "absolute",
                  bottom: "6px",
                  left: 0,
                  right: 0,
                  height: "12px",
                  background: "#7ecfc030",
                  borderRadius: "4px",
                  zIndex: -1,
                  transformOrigin: "left",
                }}
              />
            </motion.span>
          </motion.h1>

          {/* Typewriter sub line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            style={{
              fontSize: "18px",
              fontWeight: 600,
              color: "#06363c",
              marginBottom: "12px",
              minHeight: "28px",
            }}
          >
            <Typewriter
              texts={[
                "US Sales Tax. IRS Filings. FEMA Compliance.",
                "Indian CA Expertise. US Tax Authority.",
                "500+ Businesses. Zero Penalties.",
                "Cross-Border Done Right.",
              ]}
              speed={60}
              pause={2200}
            />
          </motion.div>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            style={{
              fontSize: "clamp(16px, 2vw, 20px)",
              color: "#6b7280",
              lineHeight: 1.75,
              maxWidth: "680px",
              margin: "0 auto 56px",
            }}
          >
            FinliGen exists because cross-border compliance is genuinely hard —
            and most generalist accounting firms are not equipped to handle it.
            Every client gets the combined depth of{" "}
            <span style={{ color: "#0a0a0a", fontWeight: 600 }}>
              Indian CA expertise
            </span>{" "}
            and{" "}
            <span style={{ color: "#0a0a0a", fontWeight: 600 }}>
              US tax authority
            </span>
            , under one roof.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "16px",
            }}
          >
            {stats.map((stat, i) => (
              <TiltCard key={i}>
                <motion.div
                  variants={fadeUp}
                  whileHover={{
                    y: -8,
                    boxShadow: "0 20px 40px rgba(6,54,60,0.12)",
                  }}
                  style={{
                    background: "rgba(255,255,255,0.75)",
                    backdropFilter: "blur(12px)",
                    borderRadius: "20px",
                    padding: "24px 16px",
                    border: "1px solid rgba(6,54,60,0.1)",
                    textAlign: "center",
                    transition: "box-shadow 0.3s",
                    cursor: "default",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      marginBottom: "6px",
                    }}
                  >
                    <motion.span
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                      style={{ color: "#06363c" }}
                    >
                      {stat.icon}
                    </motion.span>
                    <span
                      style={{
                        fontSize: "clamp(28px, 4vw, 44px)",
                        fontWeight: 800,
                        color: "#0a0a0a",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      <AnimatedCounter value={stat.number} />
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#6b7280",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      margin: 0,
                    }}
                  >
                    {stat.label}
                  </p>
                  {stat.subtitle && (
                    <p style={{ fontSize: "11px", color: "#9ca3af", marginTop: "4px" }}>
                      {stat.subtitle}
                    </p>
                  )}
                </motion.div>
              </TiltCard>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2 }}
            style={{ marginTop: "60px" }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              style={{
                width: "28px",
                height: "46px",
                border: "2px solid rgba(6,54,60,0.25)",
                borderRadius: "14px",
                margin: "0 auto",
                display: "flex",
                justifyContent: "center",
                paddingTop: "8px",
              }}
            >
              <motion.div
                animate={{ y: [0, 14, 0], opacity: [1, 0, 1] }}
                transition={{ duration: 2.2, repeat: Infinity }}
                style={{
                  width: "5px",
                  height: "10px",
                  background: "#06363c",
                  borderRadius: "3px",
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Marquee Ticker ─── */}
      <MarqueeTicker items={tickerItems} />

      {/* ═══════════ SECTION 2 — STORY ═══════════ */}
      <section style={{ background: "#f8fafb", padding: "100px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            style={{ textAlign: "center", marginBottom: "64px" }}
          >
            <motion.span
              variants={scaleIn}
              style={{
                display: "inline-block",
                fontSize: "11px",
                letterSpacing: "0.18em",
                fontWeight: 700,
                textTransform: "uppercase",
                color: "#06363c",
                border: "1.5px solid rgba(6,54,60,0.2)",
                borderRadius: "100px",
                padding: "7px 18px",
                background: "rgba(6,54,60,0.05)",
                marginBottom: "20px",
              }}
            >
              The FinliGen Story
            </motion.span>
            <motion.h2
              variants={fadeUp}
              style={{
                fontSize: "clamp(30px, 4vw, 52px)",
                fontWeight: 800,
                color: "#0a0a0a",
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              How We Started
            </motion.h2>
          </motion.div>

          {/* Timeline */}
          <div style={{ position: "relative" }}>
            {/* Vertical animated line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: "absolute",
                left: "39px",
                top: "0",
                bottom: "0",
                width: "2px",
                background:
                  "linear-gradient(to bottom, #06363c, #1a5c3a, #2a4a7f)",
                transformOrigin: "top",
                opacity: 0.2,
              }}
            />

            {/* Animated pulse on timeline */}
            <motion.div
              animate={{ y: ["0%", "100%"], opacity: [0, 1, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute",
                left: "35px",
                top: "0",
                width: "10px",
                height: "40px",
                background:
                  "linear-gradient(to bottom, transparent, #06363c60, transparent)",
                borderRadius: "4px",
                zIndex: 2,
              }}
            />

            <div
              style={{ display: "flex", flexDirection: "column", gap: "32px" }}
            >
              {storyItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={i % 2 === 0 ? slideLeft : slideRight}
                  style={{ display: "flex", gap: "24px" }}
                >
                  {/* Icon + year */}
                  <div
                    style={{
                      flexShrink: 0,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      animate={{
                        boxShadow: [
                          `0 8px 24px ${item.color}40`,
                          `0 12px 36px ${item.color}70`,
                          `0 8px 24px ${item.color}40`,
                        ],
                      }}
                      transition={{ duration: 3, repeat: Infinity, delay: i }}
                      style={{
                        width: "56px",
                        height: "56px",
                        borderRadius: "16px",
                        background: item.color,
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "20px",
                        flexShrink: 0,
                      }}
                    >
                      {item.icon}
                    </motion.div>
                    <div
                      style={{
                        fontSize: "11px",
                        fontWeight: 700,
                        color: item.color,
                        marginTop: "8px",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {item.year}
                    </div>
                  </div>

                  {/* Card */}
                  <GlowCard
                    glowColor={item.color}
                    style={{ flex: 1 }}
                  >
                    <motion.div
                      whileHover={{
                        y: -4,
                        boxShadow: "0 24px 48px rgba(0,0,0,0.1)",
                      }}
                      style={{
                        flex: 1,
                        background: "#fff",
                        borderRadius: "20px",
                        padding: "28px 32px",
                        border: "1px solid #e5e7eb",
                        boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
                        transition: "all 0.3s ease",
                      }}
                    >
                      {/* Animated accent line */}
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        style={{
                          height: "3px",
                          background: `linear-gradient(90deg, ${item.color}, transparent)`,
                          borderRadius: "2px",
                          marginBottom: "20px",
                          transformOrigin: "left",
                        }}
                      />
                      <h3
                        style={{
                          fontSize: "22px",
                          fontWeight: 700,
                          color: "#0a0a0a",
                          marginBottom: "16px",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {item.title}
                      </h3>
                      {item.content}
                    </motion.div>
                  </GlowCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ SECTION 3 — DIFFERENTIATORS ═══════════ */}
      <section style={{ background: "#fff", padding: "100px 24px" }}>
        <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            style={{ textAlign: "center", marginBottom: "64px" }}
          >
            <motion.span
              variants={scaleIn}
              style={{
                display: "inline-block",
                fontSize: "11px",
                letterSpacing: "0.18em",
                fontWeight: 700,
                textTransform: "uppercase",
                color: "#06363c",
                border: "1.5px solid rgba(6,54,60,0.2)",
                borderRadius: "100px",
                padding: "7px 18px",
                background: "rgba(6,54,60,0.05)",
                marginBottom: "20px",
              }}
            >
              Why FinliGen
            </motion.span>
            <motion.h2
              variants={fadeUp}
              style={{
                fontSize: "clamp(30px, 4vw, 52px)",
                fontWeight: 800,
                color: "#0a0a0a",
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              Three things no generalist firm
              <br />
              can offer you.
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
            }}
          >
            {differentiators.map((item, i) => (
              <TiltCard key={i}>
                <GlowCard glowColor={item.accent}>
                  <motion.div
                    variants={fadeUp}
                    whileHover={{
                      y: -12,
                      boxShadow: `0 32px 64px ${item.accent}20`,
                    }}
                    style={{
                      background: "#fff",
                      borderRadius: "24px",
                      padding: "36px 32px",
                      border: "1px solid #e5e7eb",
                      cursor: "default",
                      transition: "all 0.35s ease",
                      position: "relative",
                      overflow: "hidden",
                      height: "100%",
                    }}
                  >
                    {/* Animated background gradient on hover */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: `linear-gradient(135deg, ${item.light}80, transparent)`,
                        borderRadius: "24px",
                        transition: "opacity 0.3s",
                      }}
                    />

                    {/* Number watermark */}
                    <motion.div
                      animate={{ opacity: [0.04, 0.08, 0.04] }}
                      transition={{ duration: 4, repeat: Infinity, delay: i }}
                      style={{
                        position: "absolute",
                        top: "-10px",
                        right: "20px",
                        fontSize: "80px",
                        fontWeight: 900,
                        color: item.accent,
                        lineHeight: 1,
                        userSelect: "none",
                        letterSpacing: "-0.04em",
                      }}
                    >
                      {item.number}
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 8 }}
                      animate={{
                        y: [0, -4, 0],
                      }}
                      transition={{
                        y: { duration: 3, repeat: Infinity, delay: i * 0.7 },
                      }}
                      style={{
                        width: "52px",
                        height: "52px",
                        borderRadius: "14px",
                        background: item.light,
                        color: item.accent,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "20px",
                        position: "relative",
                        zIndex: 1,
                      }}
                    >
                      {item.icon}
                    </motion.div>

                    <div
                      style={{
                        fontSize: "11px",
                        fontWeight: 700,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color: item.accent,
                        marginBottom: "12px",
                        position: "relative",
                        zIndex: 1,
                      }}
                    >
                      {item.number}
                    </div>

                    <h3
                      style={{
                        fontSize: "19px",
                        fontWeight: 700,
                        color: "#0a0a0a",
                        lineHeight: 1.35,
                        marginBottom: "16px",
                        letterSpacing: "-0.01em",
                        position: "relative",
                        zIndex: 1,
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      style={{
                        fontSize: "15px",
                        color: "#6b7280",
                        lineHeight: 1.8,
                        margin: 0,
                        position: "relative",
                        zIndex: 1,
                      }}
                    >
                      {item.desc}
                    </p>

                    {/* Bottom animated line */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, delay: 0.3 + i * 0.15 }}
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: "3px",
                        background: `linear-gradient(90deg, ${item.accent}, transparent)`,
                        transformOrigin: "left",
                        borderRadius: "0 0 24px 24px",
                      }}
                    />
                  </motion.div>
                </GlowCard>
              </TiltCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════ SECTION 4 — TEAM ═══════════ */}
      <section style={{ background: "#f8fafb", padding: "100px 24px" }}>
        <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            style={{ textAlign: "center", marginBottom: "64px" }}
          >
            <motion.span
              variants={scaleIn}
              style={{
                display: "inline-block",
                fontSize: "11px",
                letterSpacing: "0.18em",
                fontWeight: 700,
                textTransform: "uppercase",
                color: "#06363c",
                border: "1.5px solid rgba(6,54,60,0.2)",
                borderRadius: "100px",
                padding: "7px 18px",
                background: "rgba(6,54,60,0.05)",
                marginBottom: "20px",
              }}
            >
              Leadership Team
            </motion.span>
            <motion.h2
              variants={fadeUp}
              style={{
                fontSize: "clamp(30px, 4vw, 52px)",
                fontWeight: 800,
                color: "#0a0a0a",
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                margin: "0 0 16px",
              }}
            >
              The people whose names
              <br />
              are on the work.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              style={{
                fontSize: "17px",
                color: "#6b7280",
                maxWidth: "580px",
                margin: "0 auto",
                lineHeight: 1.75,
              }}
            >
              When you work with FinliGen, you know who reviewed your file — a
              person with credentials and accountability for every deliverable.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={stagger}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "24px",
            }}
          >
            {team.map((member, i) => (
              <TiltCard key={i}>
                <GlowCard glowColor={member.color}>
                  <motion.div
                    variants={fadeUp}
                    whileHover={{
                      y: -8,
                      boxShadow: "0 32px 60px rgba(0,0,0,0.1)",
                    }}
                    style={{
                      background: "#fff",
                      borderRadius: "24px",
                      padding: "32px",
                      border: "1px solid #e5e7eb",
                      transition: "all 0.35s ease",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    {/* Top color bar */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "4px",
                        background: `linear-gradient(90deg, ${member.color}, ${member.color}50)`,
                        transformOrigin: "left",
                      }}
                    />

                    {/* Header */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "16px",
                        marginBottom: "20px",
                        paddingTop: "8px",
                      }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.08, rotate: 4 }}
                        animate={{
                          boxShadow: [
                            `0 8px 24px ${member.color}50`,
                            `0 12px 36px ${member.color}80`,
                            `0 8px 24px ${member.color}50`,
                          ],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.4,
                        }}
                        style={{
                          width: "64px",
                          height: "64px",
                          borderRadius: "18px",
                          background: member.color,
                          color: "#fff",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "20px",
                          fontWeight: 800,
                          flexShrink: 0,
                        }}
                      >
                        {member.initials}
                      </motion.div>
                      <div style={{ flex: 1 }}>
                        <h3
                          style={{
                            fontSize: "20px",
                            fontWeight: 700,
                            color: "#0a0a0a",
                            margin: "0 0 4px",
                            letterSpacing: "-0.01em",
                          }}
                        >
                          {member.name}
                        </h3>
                        <p
                          style={{
                            fontSize: "14px",
                            fontWeight: 600,
                            color: "#06363c",
                            margin: "0 0 4px",
                          }}
                        >
                          {member.title}
                        </p>
                        <p
                          style={{
                            fontSize: "13px",
                            color: "#9ca3af",
                            margin: 0,
                          }}
                        >
                          {member.credentials}
                        </p>
                      </div>
                      <motion.a
                        href={member.linkedin}
                        whileHover={{
                          scale: 1.15,
                          background: "#0077b5",
                          color: "#fff",
                        }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                          width: "38px",
                          height: "38px",
                          borderRadius: "10px",
                          background: "#f3f4f6",
                          color: "#6b7280",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          textDecoration: "none",
                          transition: "all 0.2s",
                          flexShrink: 0,
                        }}
                      >
                        <AiOutlineLinkedin size={18} />
                      </motion.a>
                    </div>

                    {/* Divider */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                      style={{
                        height: "1px",
                        background: "#f3f4f6",
                        marginBottom: "20px",
                        transformOrigin: "left",
                      }}
                    />

                    <p
                      style={{
                        fontSize: "15px",
                        color: "#6b7280",
                        lineHeight: 1.8,
                        marginBottom: "20px",
                      }}
                    >
                      {member.bio}
                    </p>

                    {member.specializes && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{
                          background: "#f8fafb",
                          borderRadius: "14px",
                          padding: "18px 20px",
                          border: "1px solid #f0f0f0",
                        }}
                      >
                        <p
                          style={{
                            fontSize: "12px",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            color: "#0a0a0a",
                            marginBottom: "12px",
                          }}
                        >
                          Specializes in
                        </p>
                        <div
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "8px",
                          }}
                        >
                          {member.specializes.map((s, idx) => (
                            <motion.span
                              key={idx}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.07 }}
                              whileHover={{
                                y: -2,
                                background: "#e8f4f3",
                                borderColor: "#06363c40",
                              }}
                              style={{
                                fontSize: "12px",
                                fontWeight: 500,
                                padding: "5px 12px",
                                borderRadius: "100px",
                                background: "#fff",
                                border: "1px solid #e5e7eb",
                                color: "#4b5563",
                                cursor: "default",
                                transition: "all 0.2s",
                              }}
                            >
                              {s}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {member.oversees && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{
                          background: "#f8fafb",
                          borderRadius: "14px",
                          padding: "18px 20px",
                          border: "1px solid #f0f0f0",
                        }}
                      >
                        <p
                          style={{
                            fontSize: "12px",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            color: "#0a0a0a",
                            marginBottom: "12px",
                          }}
                        >
                          Oversees
                        </p>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "8px",
                          }}
                        >
                          {member.oversees.map((o, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.08 }}
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                              }}
                            >
                              <motion.div
                                animate={{ scale: [1, 1.4, 1] }}
                                transition={{
                                  duration: 2.5,
                                  repeat: Infinity,
                                  delay: idx * 0.3,
                                }}
                                style={{
                                  width: "6px",
                                  height: "6px",
                                  borderRadius: "50%",
                                  background: "#06363c",
                                  flexShrink: 0,
                                }}
                              />
                              <span
                                style={{ fontSize: "14px", color: "#6b7280" }}
                              >
                                {o}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {member.testimonial && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                          marginTop: "16px",
                          background: "#f8fafb",
                          borderLeft: `3px solid ${member.color}`,
                          borderRadius: "0 12px 12px 0",
                          padding: "16px 20px",
                          position: "relative",
                          overflow: "hidden",
                        }}
                      >
                        {/* Quote mark */}
                        <div
                          style={{
                            position: "absolute",
                            top: "8px",
                            right: "16px",
                            fontSize: "48px",
                            color: `${member.color}15`,
                            fontFamily: "Georgia, serif",
                            lineHeight: 1,
                            fontWeight: 900,
                          }}
                        >
                          "
                        </div>
                        <p
                          style={{
                            fontSize: "14px",
                            color: "#4b5563",
                            fontStyle: "italic",
                            lineHeight: 1.7,
                            marginBottom: "8px",
                          }}
                        >
                          "{member.testimonial}"
                        </p>
                        <p
                          style={{
                            fontSize: "12px",
                            fontWeight: 600,
                            color: "#9ca3af",
                            margin: 0,
                          }}
                        >
                          — {member.testimonialAuthor}
                        </p>
                      </motion.div>
                    )}
                  </motion.div>
                </GlowCard>
              </TiltCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════ SECTION 5 — CREDENTIALS ═══════════ */}
      <section style={{ background: "#fff", padding: "100px 24px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
            style={{ textAlign: "center", marginBottom: "64px" }}
          >
            <motion.span
              variants={scaleIn}
              style={{
                display: "inline-block",
                fontSize: "11px",
                letterSpacing: "0.18em",
                fontWeight: 700,
                textTransform: "uppercase",
                color: "#06363c",
                border: "1.5px solid rgba(6,54,60,0.2)",
                borderRadius: "100px",
                padding: "7px 18px",
                background: "rgba(6,54,60,0.05)",
                marginBottom: "20px",
              }}
            >
              Credentials & Certifications
            </motion.span>
            <motion.h2
              variants={fadeUp}
              style={{
                fontSize: "clamp(30px, 4vw, 52px)",
                fontWeight: 800,
                color: "#0a0a0a",
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              Verified. Certified. Accountable.
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "20px",
            }}
          >
            {credentials.map((cred, i) => (
              <TiltCard key={i}>
                <motion.div
                  variants={fadeUp}
                  whileHover={{
                    y: -10,
                    boxShadow: "0 24px 48px rgba(6,54,60,0.12)",
                  }}
                  style={{
                    background: "#f8fafb",
                    borderRadius: "20px",
                    padding: "28px 20px",
                    textAlign: "center",
                    border: "1px solid #e5e7eb",
                    transition: "all 0.35s ease",
                    cursor: "default",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Animated background ring */}
                  <motion.div
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.05, 0.12, 0.05],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 0.6,
                    }}
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                      border: "2px solid #06363c",
                    }}
                  />

                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.15 }}
                    transition={{ duration: 0.7 }}
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "14px",
                      background: "rgba(6,54,60,0.08)",
                      color: "#06363c",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 16px",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    {cred.icon}
                  </motion.div>
                  <h3
                    style={{
                      fontSize: "16px",
                      fontWeight: 700,
                      color: "#0a0a0a",
                      marginBottom: "6px",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    {cred.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#6b7280",
                      marginBottom: "4px",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    {cred.subtitle}
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#9ca3af",
                      margin: 0,
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    {cred.detail}
                  </p>
                </motion.div>
              </TiltCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════ SECTION 6 — CTA ═══════════ */}
      <section style={{ background: "#f8fafb", padding: "80px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: "relative",
              borderRadius: "32px",
              overflow: "hidden",
              background:
                "linear-gradient(135deg, #052f35 0%, #06363c 50%, #0a4a52 100%)",
              padding: "72px 48px",
            }}
          >
            {/* Decorative elements */}
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.3, 0.15] }}
              transition={{ duration: 8, repeat: Infinity }}
              style={{
                position: "absolute",
                top: "-60px",
                right: "-60px",
                width: "300px",
                height: "300px",
                background: "#7ecfc0",
                borderRadius: "50%",
                opacity: 0.1,
              }}
            />
            <motion.div
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 11, repeat: Infinity }}
              style={{
                position: "absolute",
                bottom: "-80px",
                left: "-40px",
                width: "360px",
                height: "360px",
                background: "#dff5b7",
                borderRadius: "50%",
                opacity: 0.08,
              }}
            />

            {/* Rotating ring decoration */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              style={{
                position: "absolute",
                top: "50%",
                right: "60px",
                transform: "translateY(-50%)",
                width: "180px",
                height: "180px",
                borderRadius: "50%",
                border: "1px dashed rgba(255,255,255,0.12)",
                zIndex: 0,
              }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{
                position: "absolute",
                top: "50%",
                right: "80px",
                transform: "translateY(-50%)",
                width: "130px",
                height: "130px",
                borderRadius: "50%",
                border: "1px dashed rgba(126,207,192,0.2)",
                zIndex: 0,
              }}
            />

            {/* Dots pattern */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                opacity: 0.04,
                backgroundImage:
                  "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />

            {/* Particle Field in CTA */}
            <ParticleField count={12} color="#7ecfc0" />

            <div
              style={{ position: "relative", zIndex: 1, textAlign: "center" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                style={{ marginBottom: "16px" }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "11px",
                    letterSpacing: "0.15em",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    color: "#7ecfc0",
                    border: "1px solid rgba(126,207,192,0.3)",
                    borderRadius: "100px",
                    padding: "6px 16px",
                  }}
                >
                  <motion.span
                    animate={{ scale: [1, 1.4, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "#7ecfc0",
                      display: "inline-block",
                    }}
                  />
                  Free Consultation
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                style={{
                  fontSize: "clamp(28px, 4vw, 52px)",
                  fontWeight: 800,
                  color: "#fff",
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                  marginBottom: "20px",
                }}
              >
                Ready to work with a team
                <br />
                that knows both sides?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                style={{
                  fontSize: "17px",
                  color: "#a8c8c6",
                  lineHeight: 1.7,
                  maxWidth: "520px",
                  margin: "0 auto 40px",
                }}
              >
                Book a free 30-minute consultation. We'll understand your
                cross-border compliance needs and show you exactly how we can
                help.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "16px",
                  flexWrap: "wrap",
                }}
              >
                <motion.a
                  href="/contact"
                  whileHover={{
                    scale: 1.06,
                    y: -4,
                    boxShadow: "0 24px 48px rgba(223,245,183,0.35)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    background: "#dff5b7",
                    color: "#052f35",
                    padding: "16px 36px",
                    borderRadius: "14px",
                    fontSize: "16px",
                    fontWeight: 700,
                    textDecoration: "none",
                    transition: "all 0.3s",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Button shimmer */}
                  <motion.div
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      repeatDelay: 1.5,
                    }}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "50%",
                      height: "100%",
                      background:
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
                      skewX: "-20deg",
                    }}
                  />
                  <span style={{ position: "relative", zIndex: 1 }}>
                    Schedule a Call
                  </span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                    style={{ position: "relative", zIndex: 1 }}
                  >
                    <AiOutlineArrowRight size={20} />
                  </motion.span>
                </motion.a>

                <motion.a
                  href="/services"
                  whileHover={{
                    scale: 1.04,
                    y: -3,
                    borderColor: "rgba(255,255,255,0.6)",
                    background: "rgba(255,255,255,0.05)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    border: "1.5px solid rgba(255,255,255,0.2)",
                    color: "#fff",
                    padding: "16px 32px",
                    borderRadius: "14px",
                    fontSize: "16px",
                    fontWeight: 500,
                    textDecoration: "none",
                    transition: "all 0.3s",
                  }}
                >
                  View Services
                  <FiExternalLink size={17} />
                </motion.a>
              </motion.div>

              {/* Trust signal */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                style={{
                  marginTop: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "24px",
                  flexWrap: "wrap",
                }}
              >
                {[
                  "500+ businesses served",
                  "0 IRS penalties",
                  "ICAI registered",
                ].map((trust, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                    style={{ display: "flex", alignItems: "center", gap: "8px" }}
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.4,
                      }}
                      style={{
                        width: "18px",
                        height: "18px",
                        borderRadius: "50%",
                        background: "rgba(126,207,192,0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <FiCheck size={11} color="#7ecfc0" />
                    </motion.div>
                    <span
                      style={{
                        fontSize: "13px",
                        color: "#7ecfc0",
                        fontWeight: 500,
                      }}
                    >
                      {trust}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}