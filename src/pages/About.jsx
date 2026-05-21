"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
  useInView,
  useMotionValue,
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
import { FiCheck, FiExternalLink, FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { BsStars } from "react-icons/bs";
import AboutSEO from "../seo/AboutSEO";

/* ═════════════════════════════════════════════════════════════════
   ░░░ DESIGN TOKENS & CONFIGURATION ░░░
   ═════════════════════════════════════════════════════════════════ */

const tokens = {
  primary: "#06363c",
  primaryLight: "#0a4a52",
  primaryDark: "#041f23",
  accent: "#7ecfc0",
  accentLight: "#b3e8df",
  accentDark: "#5ab8a8",
  lime: "#dff5b7",
  limeLight: "#edfad0",
  forest: "#1a5c3a",
  navy: "#2a4a7f",
  amber: "#7a4f1a",
  white: "#ffffff",
  off: "#f8fafb",
  text: "#0a0a0a",
  muted: "#6b7280",
  lighter: "#9ca3af",
  border: "#e5e7eb",
  borderLight: "#f0f0f0",
};

const ease = [0.22, 1, 0.36, 1];

/* ═════════════════════════════════════════════════════════════════
   ░░░ ANIMATION VARIANTS ░░░
   ═════════════════════════════════════════════════════════════════ */

const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.88 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease } },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease } },
  },
  slideRight: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease } },
  },
  stagger: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
  },
  staggerFast: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07 } },
  },
};

/* ═════════════════════════════════════════════════════════════════
   ░░░ REUSABLE COMPONENTS ░░░
   ═════════════════════════════════════════════════════════════════ */

/** Scroll Progress Bar */
function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "2px",
        background: `linear-gradient(90deg, ${tokens.primary}, ${tokens.accent}, ${tokens.lime})`,
        scaleX,
        transformOrigin: "left",
        zIndex: 9999,
      }}
    />
  );
}

/** Noise Texture Overlay */
function NoiseTexture({ opacity = 0.02 }) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        opacity,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "128px",
        pointerEvents: "none",
        zIndex: 0,
        mixBlendMode: "multiply",
      }}
    />
  );
}

/** Section Label */
function SectionLabel({ children, light = false }) {
  return (
    <motion.span
      variants={variants.scaleIn}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "7px",
        fontSize: "10px",
        letterSpacing: "0.2em",
        fontWeight: 700,
        textTransform: "uppercase",
        color: light ? tokens.accentLight : tokens.primary,
        border: `1px solid ${light ? "rgba(126,207,192,0.3)" : "rgba(6,54,60,0.18)"}`,
        borderRadius: "100px",
        padding: "6px 16px",
        background: light ? "rgba(126,207,192,0.08)" : "rgba(6,54,60,0.04)",
        backdropFilter: "blur(8px)",
      }}
    >
      <motion.span
        animate={{ scale: [1, 1.5, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        style={{
          width: "5px",
          height: "5px",
          borderRadius: "50%",
          background: light ? tokens.accent : tokens.primary,
          display: "inline-block",
          flexShrink: 0,
        }}
      />
      {children}
    </motion.span>
  );
}

/** Section Heading */
function SectionHeading({ children, center = true, light = false, size = "lg" }) {
  const sizes = {
    lg: "clamp(30px, 4vw, 56px)",
    md: "clamp(24px, 3vw, 40px)",
    sm: "clamp(20px, 2.5vw, 30px)",
  };
  return (
    <motion.h2
      variants={variants.fadeUp}
      style={{
        fontSize: sizes[size],
        fontWeight: 800,
        color: light ? tokens.white : tokens.text,
        letterSpacing: "-0.035em",
        lineHeight: 1.08,
        margin: 0,
        textAlign: center ? "center" : "left",
      }}
    >
      {children}
    </motion.h2>
  );
}

/** Animated Counter */
function AnimatedCounter({ value }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!isInView) return;
    const numeric = parseInt(value.replace(/\D/g, ""), 10);
    if (isNaN(numeric)) {
      setCount(value);
      return;
    }
    let start = 0;
    const duration = 1600;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(eased * numeric));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(numeric);
    };
    requestAnimationFrame(step);
  }, [isInView, value]);

  const display =
    typeof count === "number" ? count + (value.includes("+") ? "+" : "") : value;

  return <span ref={ref}>{display}</span>;
}

/** Typewriter Effect */
function Typewriter({ texts, speed = 75, pause = 2400 }) {
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const target = texts[textIndex];
    const timeout = setTimeout(() => {
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
    }, isDeleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts, speed, pause]);

  return (
    <span>
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.55, repeat: Infinity }}
        style={{
          display: "inline-block",
          width: "2px",
          height: "1em",
          background: tokens.primary,
          marginLeft: "3px",
          verticalAlign: "text-bottom",
          borderRadius: "1px",
        }}
      />
    </span>
  );
}

/** Marquee Ticker */
function Marquee({ items }) {
  const doubled = [...items, ...items];
  return (
    <div style={{ overflow: "hidden", background: tokens.primary, padding: "0" }}>
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          style={{ display: "flex", width: "max-content", padding: "13px 0" }}
        >
          {doubled.map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "0 32px",
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  color: tokens.accent,
                  fontSize: "7px",
                  opacity: 0.8,
                }}
              >
                ◆
              </span>
              <span
                style={{
                  color: "rgba(255,255,255,0.8)",
                  fontSize: "12px",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  whiteSpace: "nowrap",
                }}
              >
                {item}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

/** Particle Field */
function Particles({ count = 18, color = tokens.primary }) {
  const particles = useRef(
    Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 0.5,
      duration: Math.random() * 18 + 12,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.3 + 0.05,
    }))
  ).current;

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ x: `${p.x}vw`, y: `${p.y}vh`, opacity: 0 }}
          animate={{
            y: [`${p.y}vh`, `${p.y - 25}vh`, `${p.y}vh`],
            x: [
              `${p.x}vw`,
              `${p.x + (Math.random() - 0.5) * 8}vw`,
              `${p.x}vw`,
            ],
            opacity: [0, p.opacity, 0],
            scale: [0.5, 1.3, 0.5],
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

/** Floating Badge */
function FloatingBadge({ children, style, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
      transition={{
        opacity: { delay, duration: 0.5, ease },
        scale: { delay, duration: 0.5, ease },
        y: { delay: delay + 0.5, duration: 4, repeat: Infinity, ease: "easeInOut" },
      }}
      style={{
        position: "absolute",
        background: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(16px)",
        borderRadius: "14px",
        padding: "10px 16px",
        boxShadow: "0 4px 24px rgba(6,54,60,0.1), 0 1px 2px rgba(0,0,0,0.06)",
        border: "1px solid rgba(255,255,255,0.8)",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        ...style,
      }}
    >
      {children}
    </motion.div>
  );
}

/** Stat Card */
function StatCard({ stat, index, isMobile }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      variants={variants.fadeUp}
      onMouseEnter={() => (!isMobile ? setHovered(true) : null)}
      onMouseLeave={() => setHovered(false)}
      animate={{ y: hovered ? -8 : 0 }}
      transition={{ duration: 0.3, ease }}
      style={{
        background: hovered ? tokens.primary : "rgba(255,255,255,0.85)",
        backdropFilter: "blur(20px)",
        borderRadius: "20px",
        padding: isMobile ? "20px 14px" : "28px 20px",
        border: `1px solid ${hovered ? "transparent" : "rgba(6,54,60,0.08)"}`,
        textAlign: "center",
        cursor: "default",
        boxShadow: hovered
          ? `0 20px 60px rgba(6,54,60,0.2)`
          : "0 1px 3px rgba(0,0,0,0.04)",
        transition: "background 0.3s, border-color 0.3s, box-shadow 0.3s",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <NoiseTexture opacity={hovered ? 0.05 : 0.02} />
      <motion.div
        animate={{
          rotate: hovered ? 360 : 0,
          scale: hovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.6, ease }}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "36px",
          height: "36px",
          borderRadius: "10px",
          background: hovered
            ? "rgba(126,207,192,0.2)"
            : "rgba(6,54,60,0.07)",
          color: hovered ? tokens.accent : tokens.primary,
          marginBottom: "10px",
          fontSize: "18px",
        }}
      >
        {stat.icon}
      </motion.div>
      <div
        style={{
          fontSize: isMobile ? "28px" : "38px",
          fontWeight: 800,
          color: hovered ? tokens.white : tokens.text,
          letterSpacing: "-0.03em",
          lineHeight: 1,
          marginBottom: "6px",
          transition: "color 0.3s",
        }}
      >
        <AnimatedCounter value={stat.number} />
      </div>
      <div
        style={{
          fontSize: "11px",
          fontWeight: 600,
          color: hovered ? "rgba(255,255,255,0.7)" : tokens.muted,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          transition: "color 0.3s",
        }}
      >
        {stat.label}
      </div>
      {stat.subtitle && (
        <div
          style={{
            fontSize: "10px",
            color: hovered ? "rgba(255,255,255,0.5)" : tokens.lighter,
            marginTop: "3px",
            transition: "color 0.3s",
          }}
        >
          {stat.subtitle}
        </div>
      )}
    </motion.div>
  );
}

/** Story Card */
function StoryCard({ item, index, isMobile, isTablet }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.25 }}
      variants={index % 2 === 0 ? variants.slideLeft : variants.slideRight}
      style={{ position: "relative" }}
    >
      {/* Timeline Node */}
      <div
        style={{
          position: "absolute",
          left: isMobile ? "-42px" : "-56px",
          top: "24px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
          zIndex: 5,
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: false }}
          whileHover={!isMobile ? { scale: 1.12, rotate: 6 } : {}}
          animate={{
            y: [0, -4, 0],
            scale: isInView ? [1, 1.08, 1] : 1,
            boxShadow: isInView
              ? [
                  `0 6px 20px ${item.color}40`,
                  `0 12px 30px ${item.color}70`,
                  `0 6px 20px ${item.color}40`,
                ]
              : `0 4px 16px ${item.color}40`,
          }}
          transition={{
            y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 2, repeat: Infinity },
            boxShadow: { duration: 3, repeat: Infinity },
          }}
          style={{
            width: isMobile ? "32px" : "40px",
            height: isMobile ? "32px" : "40px",
            borderRadius: "12px",
            background: `linear-gradient(135deg, ${item.color}, ${item.color}dd)`,
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            fontSize: isMobile ? "14px" : "18px",
            position: "relative",
            overflow: "hidden",
            cursor: "default",
          }}
        >
          <motion.div
            animate={{ x: ["-120%", "120%"] }}
            transition={{ duration: 2.8, repeat: Infinity, repeatDelay: 1 }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "50%",
              height: "100%",
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)",
              transform: "skewX(-20deg)",
            }}
          />
          <motion.div
            animate={{ rotate: isInView ? [0, 4, -4, 0] : 0 }}
            transition={{ duration: 4, repeat: Infinity }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 2,
            }}
          >
            {item.icon}
          </motion.div>
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          animate={{ scale: isInView ? [1, 1.05, 1] : 1 }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{
            fontSize: "9px",
            fontWeight: 800,
            color: item.color,
            letterSpacing: "0.06em",
            background: "#fff",
            padding: "4px 8px",
            borderRadius: "8px",
            border: `1px solid ${item.color}25`,
            whiteSpace: "nowrap",
            boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
            backdropFilter: "blur(10px)",
          }}
        >
          {item.year}
        </motion.span>
      </div>

      {/* Card Content */}
      <motion.div
        animate={{ opacity: isInView ? 1 : 0.7 }}
        whileHover={
          !isMobile
            ? {
                y: -4,
                boxShadow: `0 20px 48px rgba(0,0,0,0.09)`,
              }
            : {}
        }
        style={{
          background: "#fff",
          borderRadius: "20px",
          padding: isMobile
            ? "20px 18px"
            : isTablet
            ? "24px"
            : "28px 32px",
          border: `1px solid ${isInView ? item.color + "20" : tokens.border}`,
          boxShadow: isInView
            ? `0 4px 24px ${item.color}12`
            : "0 2px 8px rgba(0,0,0,0.04)",
          transition: "border-color 0.4s, box-shadow 0.4s",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7, ease }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: `linear-gradient(90deg, ${item.color}, ${item.color}30)`,
            transformOrigin: "left",
            borderRadius: "3px 3px 0 0",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "200px",
            height: "200px",
            background: `radial-gradient(circle at top right, ${item.color}06, transparent)`,
            pointerEvents: "none",
          }}
        />

        <motion.h3
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: isMobile ? "18px" : "21px",
            fontWeight: 700,
            color: item.color,
            marginBottom: "14px",
            letterSpacing: "-0.02em",
          }}
        >
          {item.title}
        </motion.h3>

        {item.content.map((para, pi) => (
          <p
            key={pi}
            style={{
              color: tokens.muted,
              fontSize: isMobile ? "14px" : "15.5px",
              lineHeight: 1.85,
              marginBottom:
                pi < item.content.length - 1
                  ? "14px"
                  : item.highlight || item.badges
                  ? "16px"
                  : 0,
            }}
          >
            {para}
          </p>
        ))}

        {item.highlight && (
          <div
            style={{
              background: item.bg,
              borderLeft: `3px solid ${item.color}`,
              borderRadius: "0 10px 10px 0",
              padding: "12px 16px",
              marginTop: "4px",
            }}
          >
            <p
              style={{
                color: item.color,
                fontWeight: 600,
                fontSize: isMobile ? "13px" : "14px",
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              {item.highlight}
            </p>
          </div>
        )}

        {item.badges && (
          <div
            style={{
              background: item.bg,
              borderRadius: "12px",
              padding: "16px",
              marginTop: "4px",
            }}
          >
            <p
              style={{
                fontSize: "11px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: item.color,
                marginBottom: "10px",
              }}
            >
              Every file reviewed by a qualified CA
            </p>
            {item.badges.map((badge, bi) => (
              <div
                key={bi}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                  marginBottom: bi < item.badges.length - 1 ? "8px" : 0,
                }}
              >
                <div
                  style={{
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    background: item.color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                >
                  <FiCheck size={9} color="#fff" />
                </div>
                <span
                  style={{
                    fontSize: isMobile ? "13px" : "14px",
                    color: "#4b5563",
                    lineHeight: 1.6,
                  }}
                >
                  {badge}
                </span>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

/** Story Section */
function StorySection({ isMobile, isTablet }) {
  const storyItems = [
    {
      year: "2009",
      icon: <HiOutlineLightBulb size={20} />,
      title: "The Problem Revealed",
      color: tokens.primary,
      bg: "#e8f4f3",
      content: [
        "In 2009, CA Amit Kumar was advising an Indian technology company that had been selling software to US customers for three years. They had revenue. They had customers. What they didn't have was a US sales tax registration in a single state.",
        "When the nexus analysis came back, the liability was in six figures. The company survived it — but only barely, and only because Amit caught it before the state revenue department did.",
      ],
      highlight:
        "It was that no single firm had the expertise to see both sides clearly.",
    },
    {
      year: "2012",
      icon: <AiOutlineTrophy size={20} />,
      title: "The Founding Decision",
      color: tokens.forest,
      bg: "#eaf5ee",
      content: [
        "FinliGen was founded to close that gap — not as a generalist accounting firm that handles the occasional international client, but as a specialist practice built entirely around the US–India compliance corridor.",
      ],
      highlight:
        "We only work on problems we understand deeply. Which is why we only do this.",
    },
    {
      year: "Today",
      icon: <AiOutlineGlobal size={20} />,
      title: "What We've Built",
      color: tokens.navy,
      bg: "#eaf0fb",
      content: [
        "Today, FinliGen is a team of 50+ finance and compliance professionals operating across four offices in India. We manage US sales tax compliance across all 50 states, IRS filings, FEMA-ODI-APR reporting, QuickBooks-native bookkeeping, and back-office support for US CPA firms.",
      ],
      badges: [
        "ICAI-registered",
        "QuickBooks ProAdvisor certified",
        "500+ businesses managed without a single IRS penalty notice",
      ],
    },
  ];

  return (
    <section
      style={{
        background: tokens.off,
        padding: isMobile
          ? "64px 20px"
          : isTablet
          ? "80px 32px"
          : "100px 24px",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(6,54,60,0.03) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(126,207,192,0.04) 0%, transparent 50%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "840px",
          margin: "0 auto",
          position: "relative",
        }}
      >
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={variants.stagger}
          style={{
            textAlign: "center",
            marginBottom: isMobile ? "48px" : "72px",
          }}
        >
          <SectionLabel>The FinliGen Story</SectionLabel>
          <div style={{ height: "20px" }} />
          <SectionHeading>How We Came to Exist</SectionHeading>
        </motion.div>

        {/* Timeline */}
        <div
          style={{
            position: "relative",
            paddingLeft: isMobile ? "48px" : "64px",
          }}
        >
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: isMobile ? "15px" : "22px",
              top: "8px",
              bottom: "8px",
              width: "1px",
              background: `linear-gradient(to bottom, ${tokens.primary}30, ${tokens.forest}30, ${tokens.navy}30)`,
            }}
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: isMobile ? "28px" : "36px",
            }}
          >
            {storyItems.map((item, i) => (
              <StoryCard
                key={i}
                item={item}
                index={i}
                isMobile={isMobile}
                isTablet={isTablet}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/** Differentiator Card */
function DiffCard({ item, index, isMobile }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      variants={variants.fadeUp}
      onMouseEnter={() => (!isMobile ? setHovered(true) : null)}
      onMouseLeave={() => setHovered(false)}
      style={{ position: "relative" }}
    >
      <motion.div
        animate={{
          y: hovered ? -10 : 0,
          boxShadow: hovered
            ? `0 32px 64px ${item.color}18`
            : "0 2px 8px rgba(0,0,0,0.04)",
        }}
        transition={{ duration: 0.35, ease }}
        style={{
          background: hovered ? item.color : "#fff",
          borderRadius: "24px",
          padding: isMobile ? "24px 20px" : "32px 28px",
          border: `1px solid ${hovered ? "transparent" : tokens.border}`,
          cursor: "default",
          height: "100%",
          position: "relative",
          overflow: "hidden",
          transition: "background 0.35s, border-color 0.35s",
        }}
      >
        <NoiseTexture opacity={hovered ? 0.04 : 0.01} />

        {/* Watermark number */}
        <div
          style={{
            position: "absolute",
            bottom: "-20px",
            right: "16px",
            fontSize: "100px",
            fontWeight: 900,
            color: hovered ? "rgba(255,255,255,0.05)" : `${item.color}06`,
            lineHeight: 1,
            userSelect: "none",
            letterSpacing: "-0.05em",
            transition: "color 0.35s",
          }}
        >
          {item.number}
        </div>

        {/* Icon */}
        <motion.div
          animate={{
            rotate: hovered ? 8 : 0,
            scale: hovered ? 1.08 : 1,
          }}
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "14px",
            background: hovered ? "rgba(255,255,255,0.15)" : item.light,
            color: hovered ? "#fff" : item.color,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "20px",
            fontSize: "22px",
            transition: "background 0.35s, color 0.35s",
          }}
        >
          {item.icon}
        </motion.div>

        {/* Number label */}
        <div
          style={{
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: hovered ? "rgba(255,255,255,0.5)" : item.color,
            marginBottom: "10px",
            transition: "color 0.35s",
          }}
        >
          {item.number}
        </div>

        <h3
          style={{
            fontSize: isMobile ? "17px" : "19px",
            fontWeight: 700,
            color: hovered ? "#fff" : tokens.text,
            lineHeight: 1.35,
            marginBottom: "14px",
            letterSpacing: "-0.01em",
            transition: "color 0.35s",
          }}
        >
          {item.title}
        </h3>

        <p
          style={{
            fontSize: isMobile ? "14px" : "15px",
            color: hovered ? "rgba(255,255,255,0.72)" : tokens.muted,
            lineHeight: 1.8,
            margin: 0,
            transition: "color 0.35s",
          }}
        >
          {item.desc}
        </p>

        {/* Bottom bar */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2 + index * 0.12,
          }}
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "2px",
            background: hovered
              ? `linear-gradient(90deg, rgba(255,255,255,0.3), transparent)`
              : `linear-gradient(90deg, ${item.color}50, transparent)`,
            transformOrigin: "left",
            borderRadius: "2px",
            transition: "background 0.35s",
          }}
        />
      </motion.div>
    </motion.div>
  );
}

/** Team Card */
function TeamCard({ member, isMobile, isTablet }) {
  return (
    <motion.div variants={variants.fadeUp}>
      <motion.div
        whileHover={
          !isMobile
            ? {
                y: -8,
                boxShadow: "0 32px 64px rgba(0,0,0,0.1)",
              }
            : {}
        }
        transition={{ duration: 0.35, ease }}
        style={{
          background: "#fff",
          borderRadius: "24px",
          overflow: "hidden",
          border: `1px solid ${tokens.border}`,
          boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
          position: "relative",
        }}
      >
        {/* Top accent bar */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          style={{
            height: "3px",
            background: `linear-gradient(90deg, ${member.color}, ${member.color}40)`,
            transformOrigin: "left",
          }}
        />

        <div
          style={{
            padding: isMobile
              ? "20px 18px"
              : isTablet
              ? "24px"
              : "28px 32px",
          }}
        >
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "16px",
              marginBottom: "20px",
            }}
          >
            <motion.div
              whileHover={!isMobile ? { scale: 1.06, rotate: 3 } : {}}
              style={{
                width: isMobile ? "52px" : "60px",
                height: isMobile ? "52px" : "60px",
                borderRadius: "16px",
                background: member.color,
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: isMobile ? "17px" : "19px",
                fontWeight: 800,
                flexShrink: 0,
                boxShadow: `0 6px 20px ${member.color}50`,
              }}
            >
              {member.initials}
            </motion.div>
            <div style={{ flex: 1 }}>
              <h3
                style={{
                  fontSize: isMobile ? "16px" : "18px",
                  fontWeight: 700,
                  color: tokens.text,
                  margin: "0 0 3px",
                  letterSpacing: "-0.01em",
                }}
              >
                {member.name}
              </h3>
              <p
                style={{
                  fontSize: isMobile ? "12px" : "13px",
                  fontWeight: 600,
                  color: member.color,
                  margin: "0 0 2px",
                }}
              >
                {member.title}
              </p>
              <p
                style={{
                  fontSize: isMobile ? "11px" : "12px",
                  color: tokens.lighter,
                  margin: 0,
                }}
              >
                {member.credentials}
              </p>
            </div>
            {!isMobile && (
              <motion.a
                href={member.linkedin}
                whileHover={{
                  scale: 1.1,
                  background: "#0077b5",
                  color: "#fff",
                }}
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "9px",
                  background: "#f3f4f6",
                  color: "#9ca3af",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  flexShrink: 0,
                  fontSize: "15px",
                  transition: "background 0.2s, color 0.2s",
                }}
              >
                <AiOutlineLinkedin />
              </motion.a>
            )}
          </div>

          {/* Divider */}
          <div
            style={{
              height: "1px",
              background: tokens.borderLight,
              marginBottom: "18px",
            }}
          />

          <p
            style={{
              fontSize: isMobile ? "13px" : "14.5px",
              color: tokens.muted,
              lineHeight: 1.82,
              marginBottom: "18px",
            }}
          >
            {member.bio}
          </p>

          {/* Tags */}
          {(member.specializes || member.oversees) && (
            <div
              style={{
                background: tokens.off,
                borderRadius: "14px",
                padding: "16px",
                border: `1px solid ${tokens.borderLight}`,
              }}
            >
              <p
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: tokens.text,
                  marginBottom: "10px",
                }}
              >
                {member.specializes ? "Specializes in" : "Oversees"}
              </p>
              {member.specializes ? (
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px",
                  }}
                >
                  {member.specializes.map((s, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                      whileHover={
                        !isMobile
                          ? {
                              y: -2,
                              background: "#e8f4f3",
                              borderColor: `${member.color}40`,
                            }
                          : {}
                      }
                      style={{
                        fontSize: "11.5px",
                        fontWeight: 500,
                        padding: "5px 12px",
                        borderRadius: "100px",
                        background: "#fff",
                        border: `1px solid ${tokens.border}`,
                        color: "#4b5563",
                        cursor: "default",
                        transition: "all 0.2s",
                      }}
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  {member.oversees.map((o, i) => (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <div
                        style={{
                          width: "5px",
                          height: "5px",
                          borderRadius: "50%",
                          background: member.color,
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          fontSize: "13.5px",
                          color: tokens.muted,
                        }}
                      >
                        {o}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Testimonial */}
          {member.testimonial && (
            <div
              style={{
                marginTop: "14px",
                background: `${member.color}06`,
                borderLeft: `3px solid ${member.color}`,
                borderRadius: "0 12px 12px 0",
                padding: "14px 16px",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-2px",
                  right: "10px",
                  fontSize: "36px",
                  color: `${member.color}12`,
                  fontFamily: "Georgia, serif",
                  fontWeight: 900,
                  lineHeight: 1,
                }}
              >
                "
              </div>
              <p
                style={{
                  fontSize: "13px",
                  color: "#4b5563",
                  fontStyle: "italic",
                  lineHeight: 1.7,
                  marginBottom: "6px",
                }}
              >
                "{member.testimonial}"
              </p>
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  color: tokens.lighter,
                  margin: 0,
                }}
              >
                — {member.testimonialAuthor}
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

/** Credential Card */
function CredentialCard({ cred, index, isMobile }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      variants={variants.fadeUp}
      onMouseEnter={() => (!isMobile ? setHovered(true) : null)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        animate={{
          y: hovered ? -8 : 0,
          background: hovered ? tokens.primary : tokens.off,
          boxShadow: hovered
            ? `0 20px 48px rgba(6,54,60,0.18)`
            : "0 1px 3px rgba(0,0,0,0.03)",
        }}
        transition={{ duration: 0.3, ease }}
        style={{
          borderRadius: "20px",
          padding: isMobile ? "20px 14px" : "26px 20px",
          textAlign: "center",
          border: `1px solid ${hovered ? "transparent" : tokens.border}`,
          cursor: "default",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <NoiseTexture opacity={hovered ? 0.05 : 0.01} />
        <motion.div
          animate={{
            rotate: hovered ? 360 : 0,
            background: hovered
              ? "rgba(126,207,192,0.15)"
              : "rgba(6,54,60,0.07)",
            color: hovered ? tokens.accent : tokens.primary,
          }}
          transition={{
            rotate: { duration: 0.7, ease },
            background: { duration: 0.3 },
            color: { duration: 0.3 },
          }}
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "13px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 14px",
            fontSize: "21px",
            position: "relative",
            zIndex: 1,
          }}
        >
          {cred.icon}
        </motion.div>
        <h3
          style={{
            fontSize: isMobile ? "14px" : "15px",
            fontWeight: 700,
            color: hovered ? "#fff" : tokens.text,
            marginBottom: "4px",
            transition: "color 0.3s",
            position: "relative",
            zIndex: 1,
          }}
        >
          {cred.title}
        </h3>
        <p
          style={{
            fontSize: "12px",
            color: hovered ? "rgba(255,255,255,0.65)" : tokens.muted,
            marginBottom: "3px",
            transition: "color 0.3s",
            position: "relative",
            zIndex: 1,
          }}
        >
          {cred.subtitle}
        </p>
        <p
          style={{
            fontSize: "11px",
            color: hovered
              ? "rgba(255,255,255,0.45)"
              : tokens.lighter,
            margin: 0,
            transition: "color 0.3s",
            position: "relative",
            zIndex: 1,
          }}
        >
          {cred.detail}
        </p>
      </motion.div>
    </motion.div>
  );
}

/* ═════════════════════════════════════════════════════════════════
   ░░░ DATA / CONTENT ░░░
   ═════════════════════════════════════════════════════════════════ */

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
    icon: <AiOutlineTeam size={18} />,
  },
  { number: "50+", label: "Team Members", icon: <AiOutlineGlobal size={18} /> },
  {
    number: "0",
    label: "IRS Penalties",
    subtitle: "Under our management",
    icon: <HiOutlineShieldCheck size={18} />,
  },
  { number: "4", label: "Office Locations", icon: <TbBuildingBank size={18} /> },
];

const differentiators = [
  {
    icon: <AiOutlineGlobal size={24} />,
    number: "01",
    title: "Dual-side expertise, single point of contact",
    desc: "Your Indian CA handles your GST returns. Your US firm handles your IRS filings. Neither talks to the other. FinliGen does both — which means we catch the conflicts and opportunities that fall through the gap.",
    color: tokens.primary,
    light: "#e8f4f3",
  },
  {
    icon: <HiOutlineShieldCheck size={24} />,
    number: "02",
    title: "A delivery model with no single points of failure",
    desc: "50+ professionals. Four offices. Redundant review teams. When your previous accountant went on leave and your books weren't ready for your board meeting — that doesn't happen with FinliGen.",
    color: tokens.forest,
    light: "#eaf5ee",
  },
  {
    icon: <TbCertificate size={24} />,
    number: "03",
    title: "CA review. Not intern review. CA review.",
    desc: "Every bookkeeping file, tax return, and compliance report is signed off by a qualified Chartered Accountant — not passed through a quality-check checklist by a junior associate.",
    color: tokens.navy,
    light: "#eaf0fb",
  },
];

const team = [
  {
    initials: "AK",
    name: "CA Amit Kumar",
    title: "Founder & Managing Partner",
    credentials: "Chartered Accountant, ICAI",
    bio: "Amit has spent 15 years making sure businesses operating across the US–India corridor don't get ambushed by compliance they didn't see coming. He personally oversees every complex cross-border engagement — IRS structuring, multi-state nexus analysis, FEMA-ODI compliance, and inbound US investment advisory.",
    specializes: [
      "IRS penalty abatement",
      "Economic nexus analysis",
      "FEMA ODI/APR",
      "US–India treaty positions",
      "Transfer pricing",
    ],
    linkedin: "#",
    color: tokens.primary,
  },
  {
    initials: "SS",
    name: "Sumit Singh",
    title: "Head of Operations",
    credentials: "MBA, Operations & Finance",
    bio: "Sumit built the internal systems that let FinliGen run 50+ active client engagements simultaneously without a single missed filing deadline. He's the reason a CPA partner in Chicago can send files at 9pm and find a completed deliverable by morning.",
    testimonial:
      "Sumit's team turned around our entire Q4 backlog in 11 days. We'd been sitting on it for three weeks before we called FinliGen.",
    testimonialAuthor: "CPA Partner, Illinois",
    linkedin: "#",
    color: tokens.forest,
  },
  {
    initials: "NS",
    name: "Naveen Singh",
    title: "Head of Accounting",
    credentials: "MBA · US GAAP Specialist",
    bio: "Naveen leads the team responsible for the quality of everything that goes out under FinliGen's name. He came from financial reporting at a multinational, fluent in both Indian Ind-AS standards and US GAAP — a combination that's rarer than it sounds.",
    oversees: [
      "QuickBooks bookkeeping",
      "Management accounts",
      "US GAAP reporting",
      "Account finalization for CPA outsourcing clients",
    ],
    linkedin: "#",
    color: tokens.navy,
  },
  {
    initials: "RS",
    name: "Rahul Singh",
    title: "Head of Taxation",
    credentials: "Direct & Indirect Tax Expert",
    bio: "Rahul manages the tax practice — both US-side filings and Indian direct and indirect tax work for cross-border clients. His job is to ensure clients are optimized, not just compliant. He finds the legal positions that reduce tax exposure.",
    specializes: [
      "US state income tax",
      "GST compliance & optimization",
      "Advance tax planning",
      "Treaty-based filing positions",
    ],
    linkedin: "#",
    color: tokens.amber,
  },
];

const credentials = [
  {
    title: "ICAI Registered",
    subtitle: "CA firm registration",
    detail: "Reg. No. available",
    icon: <TbCertificate size={21} />,
  },
  {
    title: "QuickBooks ProAdvisor",
    subtitle: "Certified partner",
    detail: "All editions",
    icon: <HiOutlineDocumentText size={21} />,
  },
  {
    title: "US Tax Enrolled",
    subtitle: "IRS-recognized",
    detail: "Tax practice",
    icon: <AiOutlineSafety size={21} />,
  },
  {
    title: "4 Offices",
    subtitle: "Delhi · Noida",
    detail: "Gurgaon · Jaipur",
    icon: <TbBuildingBank size={21} />,
  },
];

/* ═════════════════════════════════════════════════════════════════
   ░░░ MAIN PAGE COMPONENT ░░░
   ═════════════════════════════════════════════════════════════════ */

export default function AboutPage() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, -100]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0.3]);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(
        window.innerWidth >= 768 && window.innerWidth < 1024
      );
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.title =
      "About Us — FinliGen | Cross-Border Compliance Experts";
  }, []);

  if (!mounted)
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#fff",
        }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
          style={{
            width: "36px",
            height: "36px",
            border: `3px solid ${tokens.border}`,
            borderTopColor: tokens.primary,
            borderRadius: "50%",
          }}
        />
      </div>
    );

  return (
    <main
      style={{
        background: "#fff",
        minHeight: "100vh",
        overflowX: "hidden",
        fontFamily: "inherit",
      }}
    >
      <AboutSEO />
      <ScrollProgress />


      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* Background */}
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
                "linear-gradient(155deg, rgba(255,255,255,0.97) 0%, rgba(255,255,255,0.94) 45%, rgba(232,244,243,0.96) 100%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "linear-gradient(rgba(6,54,60,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(6,54,60,0.06) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              maskImage:
                "radial-gradient(ellipse at center, black 40%, transparent 80%)",
            }}
          />
        </motion.div>

        <Particles count={isMobile ? 8 : 16} />

        {/* Glow orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.18, 0.3, 0.18],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            top: "5%",
            right: isMobile ? "-30%" : "-8%",
            width: isMobile ? "300px" : "520px",
            height: isMobile ? "300px" : "520px",
            background: `radial-gradient(circle, ${tokens.accent}35 0%, transparent 70%)`,
            borderRadius: "50%",
            zIndex: 1,
          }}
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.12, 0.22, 0.12],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute",
            bottom: "0%",
            left: isMobile ? "-30%" : "-12%",
            width: isMobile ? "380px" : "580px",
            height: isMobile ? "380px" : "580px",
            background: `radial-gradient(circle, ${tokens.primary}18 0%, transparent 70%)`,
            borderRadius: "50%",
            zIndex: 1,
          }}
        />

        {/* Floating badges */}
        {!isMobile && (
          <>
            <FloatingBadge delay={1.8} style={{ top: "22%", left: "5%", zIndex: 4 }}>
              <motion.div
                animate={{ scale: [1, 1.4, 1] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: tokens.forest,
                }}
              />
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  color: tokens.forest,
                }}
              >
                ICAI Certified
              </span>
            </FloatingBadge>
            <FloatingBadge delay={2.0} style={{ top: "32%", right: "4%", zIndex: 4 }}>
              <HiOutlineShieldCheck size={15} color={tokens.navy} />
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  color: tokens.navy,
                }}
              >
                0 IRS Penalties
              </span>
            </FloatingBadge>
            <FloatingBadge delay={2.3} style={{ bottom: "28%", left: "3%", zIndex: 4 }}>
              <AiOutlineTeam size={15} color={tokens.primary} />
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  color: tokens.primary,
                }}
              >
                500+ Businesses
              </span>
            </FloatingBadge>
            <FloatingBadge delay={2.5} style={{ bottom: "35%", right: "5%", zIndex: 4 }}>
              <BsStars size={14} color={tokens.amber} />
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  color: tokens.amber,
                }}
              >
                15+ Years
              </span>
            </FloatingBadge>
          </>
        )}

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1020px",
            width: "100%",
            margin: "0 auto",
            padding: isMobile
              ? "120px 20px 72px"
              : isTablet
              ? "120px 32px 80px"
              : "100px 32px 80px",
            textAlign: "center",
          }}
        >
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              delay: 0.15,
            }}
            style={{ marginBottom: "28px" }}
          >
            <SectionLabel>About FinliGen</SectionLabel>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.85,
              delay: 0.28,
              ease,
            }}
            style={{
              fontSize: isMobile
                ? "clamp(30px, 8vw, 48px)"
                : isTablet
                ? "clamp(38px, 6vw, 58px)"
                : "clamp(40px, 5.5vw, 72px)",
              fontWeight: 800,
              lineHeight: 1.07,
              letterSpacing: "-0.035em",
              color: tokens.text,
              margin: "0 0 20px",
            }}
          >
            Most firms know
            <br />
            one side of the border.
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              style={{
                color: tokens.primary,
                position: "relative",
                display: "inline-block",
              }}
            >
              We were built for both.
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 0.9, ease }}
                style={{
                  position: "absolute",
                  bottom: "5px",
                  left: 0,
                  right: 0,
                  height: isMobile ? "7px" : "10px",
                  background: `${tokens.accent}28`,
                  borderRadius: "4px",
                  zIndex: -1,
                  transformOrigin: "left",
                }}
              />
            </motion.span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 1.5 }}
            style={{
              fontSize: isMobile ? "14px" : "17px",
              fontWeight: 600,
              color: tokens.primary,
              marginBottom: "16px",
              minHeight: isMobile ? "22px" : "28px",
            }}
          >
            <Typewriter
              texts={[
                "US Sales Tax. IRS Filings. FEMA Compliance.",
                "Indian CA Expertise. US Tax Authority.",
                "500+ Businesses. Zero Penalties.",
                "Cross-Border Done Right.",
              ]}
              speed={65}
              pause={2600}
            />
          </motion.div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.5 }}
            style={{
              fontSize: isMobile
                ? "clamp(14px, 3vw, 16px)"
                : "18px",
              color: tokens.muted,
              lineHeight: 1.78,
              maxWidth: "620px",
              margin: "0 auto 52px",
            }}
          >
            FinliGen exists because cross-border compliance is genuinely hard —
            and most generalist firms are not equipped to handle it. Every
            client gets the combined depth of{" "}
            <strong style={{ color: tokens.text, fontWeight: 600 }}>
              Indian CA expertise
            </strong>{" "}
            and{" "}
            <strong style={{ color: tokens.text, fontWeight: 600 }}>
              US tax authority
            </strong>
            , under one roof.
          </motion.p>

          {/* Stats grid */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants.stagger}
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${isMobile ? 2 : 4}, 1fr)`,
              gap: isMobile ? "10px" : "14px",
              maxWidth: "780px",
              margin: "0 auto",
            }}
          >
            {stats.map((stat, i) => (
              <StatCard
                key={i}
                stat={stat}
                index={i}
                isMobile={isMobile}
              />
            ))}
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
            style={{
              marginTop: "52px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span
              style={{
                fontSize: "10px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: tokens.lighter,
                fontWeight: 600,
              }}
            >
              Scroll to explore
            </span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{
                width: "1px",
                height: "32px",
                background: `linear-gradient(to bottom, ${tokens.primary}40, transparent)`,
              }}
            />
          </motion.div>
        </div>
      </section>


      <Marquee items={tickerItems} />

      <StorySection isMobile={isMobile} isTablet={isTablet} />

      <section
        style={{
          background: "#fff",
          padding: isMobile
            ? "64px 20px"
            : isTablet
            ? "80px 32px"
            : "100px 32px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 80% 20%, rgba(6,54,60,0.03) 0%, transparent 50%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            maxWidth: "1120px",
            margin: "0 auto",
            position: "relative",
          }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={variants.stagger}
            style={{
              textAlign: "center",
              marginBottom: isMobile ? "44px" : "68px",
            }}
          >
            <SectionLabel>Why FinliGen</SectionLabel>
            <div style={{ height: "20px" }} />
            <SectionHeading>
              Three things no generalist firm
              <br />
              can offer you.
            </SectionHeading>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={variants.stagger}
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${
                isMobile ? 1 : isTablet ? 2 : 3
              }, 1fr)`,
              gap: isMobile ? "14px" : "20px",
            }}
          >
            {differentiators.map((item, i) => (
              <DiffCard key={i} item={item} index={i} isMobile={isMobile} />
            ))}
          </motion.div>
        </div>
      </section>


      <section
        style={{
          background: tokens.off,
          padding: isMobile
            ? "64px 20px"
            : isTablet
            ? "80px 32px"
            : "100px 32px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle at 20% 80%, rgba(126,207,192,0.04) 0%, transparent 50%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            maxWidth: "1120px",
            margin: "0 auto",
            position: "relative",
          }}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={variants.stagger}
            style={{
              textAlign: "center",
              marginBottom: isMobile ? "44px" : "68px",
            }}
          >
            <SectionLabel>Leadership Team</SectionLabel>
            <div style={{ height: "20px" }} />
            <SectionHeading>
              The people whose names
              <br />
              are on the work.
            </SectionHeading>
            <motion.p
              variants={variants.fadeUp}
              style={{
                fontSize: isMobile ? "14px" : "17px",
                color: tokens.muted,
                maxWidth: "520px",
                margin: "18px auto 0",
                lineHeight: 1.75,
              }}
            >
              When you work with FinliGen, you know who reviewed your file —
              a person with credentials and accountability for every
              deliverable.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={variants.stagger}
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${isMobile ? 1 : 2}, 1fr)`,
              gap: isMobile ? "14px" : "20px",
            }}
          >
            {team.map((member, i) => (
              <TeamCard
                key={i}
                member={member}
                isMobile={isMobile}
                isTablet={isTablet}
              />
            ))}
          </motion.div>
        </div>
      </section>


      <section
        style={{
          background: "#fff",
          padding: isMobile
            ? "64px 20px"
            : isTablet
            ? "80px 32px"
            : "100px 32px",
        }}
      >
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={variants.stagger}
            style={{
              textAlign: "center",
              marginBottom: isMobile ? "44px" : "64px",
            }}
          >
            <SectionLabel>Credentials & Certifications</SectionLabel>
            <div style={{ height: "20px" }} />
            <SectionHeading>Verified. Certified. Accountable.</SectionHeading>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={variants.stagger}
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${
                isMobile ? 2 : 4
              }, 1fr)`,
              gap: isMobile ? "10px" : "16px",
            }}
          >
            {credentials.map((cred, i) => (
              <CredentialCard
                key={i}
                cred={cred}
                index={i}
                isMobile={isMobile}
              />
            ))}
          </motion.div>
        </div>
      </section>

  
      <section
        style={{
          background: tokens.off,
          padding: isMobile
            ? "48px 20px"
            : isTablet
            ? "60px 32px"
            : "80px 32px",
        }}
      >
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease }}
            style={{
              position: "relative",
              borderRadius: isMobile ? "24px" : "36px",
              overflow: "hidden",
              background: `linear-gradient(145deg, ${tokens.primaryDark} 0%, ${tokens.primary} 60%, ${tokens.primaryLight} 100%)`,
              padding: isMobile
                ? "40px 24px 44px"
                : isTablet
                ? "60px 48px"
                : "72px 64px",
            }}
          >
            <NoiseTexture opacity={0.06} />
            <Particles count={isMobile ? 6 : 10} color={tokens.accent} />

            {/* Orbs */}
            <motion.div
              animate={{
                scale: [1, 1.25, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{ duration: 9, repeat: Infinity }}
              style={{
                position: "absolute",
                top: "-80px",
                right: "-80px",
                width: "320px",
                height: "320px",
                background: tokens.accent,
                borderRadius: "50%",
                filter: "blur(80px)",
              }}
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.06, 0.14, 0.06],
              }}
              transition={{ duration: 12, repeat: Infinity }}
              style={{
                position: "absolute",
                bottom: "-100px",
                left: "-60px",
                width: "380px",
                height: "380px",
                background: tokens.lime,
                borderRadius: "50%",
                filter: "blur(100px)",
              }}
            />

            {/* Dot grid */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)",
                backgroundSize: "20px 20px",
                pointerEvents: "none",
              }}
            />

            <div
              style={{
                position: "relative",
                zIndex: 1,
                textAlign: "center",
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                style={{ marginBottom: "18px" }}
              >
                <SectionLabel light>Free Consultation</SectionLabel>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.18,
                  duration: 0.7,
                  ease,
                }}
                style={{
                  fontSize: isMobile
                    ? "clamp(26px, 6vw, 38px)"
                    : "clamp(30px, 4vw, 52px)",
                  fontWeight: 800,
                  color: "#fff",
                  lineHeight: 1.1,
                  letterSpacing: "-0.035em",
                  marginBottom: "18px",
                }}
              >
                Ready to work with a team
                <br />
                that knows both sides?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.28 }}
                style={{
                  fontSize: isMobile ? "14px" : "17px",
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: 1.75,
                  maxWidth: "480px",
                  margin: "0 auto 36px",
                }}
              >
                Book a free 30-minute consultation. We'll understand your
                cross-border compliance needs and show you exactly how we can
                help.
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.38 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "12px",
                  flexWrap: "wrap",
                  marginBottom: "36px",
                }}
              >
                <motion.a
                  href="/contact"
                  whileHover={
                    !isMobile
                      ? {
                          scale: 1.04,
                          y: -4,
                          boxShadow: `0 20px 48px rgba(223,245,183,0.35)`,
                        }
                      : {}
                  }
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    background: tokens.lime,
                    color: tokens.primaryDark,
                    padding: isMobile
                      ? "13px 26px"
                      : "15px 36px",
                    borderRadius: "14px",
                    fontSize: isMobile ? "14px" : "15px",
                    fontWeight: 700,
                    textDecoration: "none",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <motion.div
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      repeatDelay: 1.8,
                    }}
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(90deg, transparent, rgba(255,255,255,0.38), transparent)",
                      transform: "skewX(-20deg)",
                    }}
                  />
                  <span style={{ position: "relative" }}>
                    Schedule a Call
                  </span>
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity }}
                    style={{ position: "relative" }}
                  >
                    <FiArrowRight
                      size={
                        isMobile ? 15 : 18
                      }
                    />
                  </motion.span>
                </motion.a>

                <motion.a
                  href="/services"
                  whileHover={
                    !isMobile
                      ? {
                          scale: 1.03,
                          y: -3,
                          borderColor: "rgba(255,255,255,0.5)",
                          background:
                            "rgba(255,255,255,0.06)",
                        }
                      : {}
                  }
                  whileTap={{ scale: 0.97 }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    border: "1.5px solid rgba(255,255,255,0.18)",
                    color: "rgba(255,255,255,0.88)",
                    padding: isMobile
                      ? "13px 24px"
                      : "15px 30px",
                    borderRadius: "14px",
                    fontSize: isMobile ? "14px" : "15px",
                    fontWeight: 500,
                    textDecoration: "none",
                    transition: "all 0.3s",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  View Services
                  <FiExternalLink
                    size={isMobile ? 13 : 15}
                  />
                </motion.a>
              </motion.div>

              {/* Trust badges */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.55 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: isMobile ? "16px" : "28px",
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
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      delay:
                        0.6 + i * 0.09,
                    }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "7px",
                    }}
                  >
                    <div
                      style={{
                        width: "16px",
                        height: "16px",
                        borderRadius: "50%",
                        background:
                          "rgba(126,207,192,0.18)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <FiCheck
                        size={9}
                        color={tokens.accent}
                      />
                    </div>
                    <span
                      style={{
                        fontSize: isMobile
                          ? "11px"
                          : "13px",
                        color: tokens.accentLight,
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