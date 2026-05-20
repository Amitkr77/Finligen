"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import {
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineEnvironment,
  AiOutlineCheckCircle,
} from "react-icons/ai";
import {
  HiOutlinePaperAirplane,
  HiOutlineSparkles,
} from "react-icons/hi";
import { FiArrowRight, FiCheck, FiX, FiSend } from "react-icons/fi";

/* ═════════════════════════════════════════════════════════════════
   ░░░ DESIGN TOKENS ░░░
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
  success: "#10b981",
  error: "#ef4444",
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
  slideLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease } },
  },
  slideRight: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease } },
  },
  stagger: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease } },
  },
};

/* ═════════════════════════════════════════════════════════════════
   ░░░ REUSABLE COMPONENTS ░░░
   ═════════════════════════════════════════════════════════════════ */

/** Scroll Progress */
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

/** Noise Texture */
function NoiseTexture({ opacity = 0.02 }) {
  return (
    <div
      className="absolute inset-0 pointer-events-none z-0"
      style={{
        opacity,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "128px",
        mixBlendMode: "multiply",
      }}
    />
  );
}

/** Particles */
function Particles({ count = 20, color = tokens.primary }) {
  const particles = useRef(
    Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.5,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.3 + 0.05,
    }))
  ).current;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ x: `${p.x}vw`, y: `${p.y}vh`, opacity: 0 }}
          animate={{
            y: [`${p.y}vh`, `${p.y - 30}vh`, `${p.y}vh`],
            x: [
              `${p.x}vw`,
              `${p.x + (Math.random() - 0.5) * 12}vw`,
              `${p.x}vw`,
            ],
            opacity: [0, p.opacity, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            background: color,
          }}
        />
      ))}
    </div>
  );
}

/** Success Toast */
function SuccessToast({ isVisible, message }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -30, scale: 0.9 }}
          transition={{ duration: 0.4 }}
          className="fixed top-7 right-7 z-50 flex items-center gap-3 px-6 py-4 rounded-xl backdrop-blur-xl border border-white/25"
          style={{
            background: `linear-gradient(135deg, ${tokens.success}ee 0%, ${tokens.success}cc 100%)`,
            boxShadow: `0 12px 32px ${tokens.success}40`,
          }}
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex-shrink-0"
          >
            <AiOutlineCheckCircle size={20} className="text-white" />
          </motion.div>
          <span className="text-sm font-semibold text-white">{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/** Form Field */
function FormField({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  required,
  isMobile,
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="space-y-2">
      <label className="block text-xs font-bold text-gray-900 uppercase tracking-tight">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>

      {type === "textarea" ? (
        <motion.textarea
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          animate={{
            borderColor: focused
              ? tokens.accent
              : error
              ? tokens.error
              : "rgba(0,0,0,0.1)",
            boxShadow: focused ? `0 0 0 3px ${tokens.accent}15` : "none",
          }}
          transition={{ duration: 0.2 }}
          className="w-full min-h-20 px-3 py-2.5 rounded-lg border-2 text-sm font-medium text-gray-900 bg-white/70 placeholder-gray-400 resize-vertical transition-colors focus:outline-none"
        />
      ) : type === "select" ? (
        <motion.select
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          animate={{
            borderColor: focused
              ? tokens.accent
              : error
              ? tokens.error
              : "rgba(0,0,0,0.1)",
            boxShadow: focused ? `0 0 0 3px ${tokens.accent}15` : "none",
          }}
          transition={{ duration: 0.2 }}
          className="w-full px-3 py-2.5 rounded-lg border-2 text-sm font-medium text-gray-900 bg-white/70 cursor-pointer transition-colors focus:outline-none"
        >
          <option value="">Select service...</option>
          <option value="us-tax">US Sales Tax Compliance</option>
          <option value="bookkeeping">Offshore Bookkeeping</option>
          <option value="cpa-outsourcing">CPA Firm Outsourcing</option>
          <option value="llc-setup">US LLC Setup & Advisory</option>
          <option value="vcfo">Virtual CFO Services</option>
          <option value="cross-border">Cross-Border Compliance</option>
          <option value="other">Other</option>
        </motion.select>
      ) : (
        <motion.input
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          animate={{
            borderColor: focused
              ? tokens.accent
              : error
              ? tokens.error
              : "rgba(0,0,0,0.1)",
            boxShadow: focused ? `0 0 0 3px ${tokens.accent}15` : "none",
          }}
          transition={{ duration: 0.2 }}
          className="w-full px-3 py-2.5 rounded-lg border-2 text-sm font-medium text-gray-900 bg-white/70 placeholder-gray-400 transition-colors focus:outline-none"
        />
      )}

      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs text-red-500 flex items-center gap-1"
        >
          <FiX size={10} />
          {error}
        </motion.p>
      )}
    </div>
  );
}

/* ═════════════════════════════════════════════════════════════════
   ░░░ MAIN CONTACT PAGE ░░░
   ═════════════════════════════════════════════════════════════════ */

export default function ContactPage() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 600], [0, -120]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0.2]);

  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
    agreed: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.title = "Contact FinliGen — US Tax & Offshore Accounting";
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name required";
    if (!formData.email.trim()) newErrors.email = "Email required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email";
    if (!formData.company.trim()) newErrors.company = "Company required";
    if (!formData.message.trim()) newErrors.message = "Message required";
    if (!formData.agreed) newErrors.agreed = "Please agree";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setSubmitSuccess(true);
    setFormData({
      name: "",
      email: "",
      company: "",
      service: "",
      message: "",
      agreed: false,
    });
    setTimeout(() => setSubmitSuccess(false), 5000);
    setIsSubmitting(false);
  };

  if (!mounted) return null;

  return (
    <main className="bg-white min-h-screen overflow-x-hidden">
      <ScrollProgress />
      <SuccessToast
        isVisible={submitSuccess}
        message="Message sent! We'll respond within 24 hours."
      />

      {/* ════════════════════════════════════════════════════════ */}
      {/* HERO WITH EMBEDDED FORM */}
      {/* ════════════════════════════════════════════════════════ */}
      <section className={`relative w-full overflow-hidden flex items-center justify-center ${
        isMobile ? "min-h-screen pt-8 pb-16" : "min-h-[100vh] pt-1 pb-20"
      }`}>
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
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, #ffffff 0%, #f8fafb 40%, ${tokens.accent}08 100%)`,
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 10% 50%, rgba(6,54,60,0.05) 0%, transparent 50%), radial-gradient(circle at 90% 20%, rgba(126,207,192,0.06) 0%, transparent 50%)",
            }}
          />
        </motion.div>

        <Particles count={isMobile ? 8 : 20} />

        {/* Glow orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{ duration: 14, repeat: Infinity }}
          className={`absolute ${isMobile ? "top-0 -right-32 w-72 h-72" : "top-[-10%] -right-[5%] w-[500px] h-[500px]"} rounded-full pointer-events-none`}
          style={{
            background: `radial-gradient(circle, ${tokens.accent}50 0%, transparent 70%)`,
            filter: "blur(80px)",
            zIndex: 1,
          }}
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{ duration: 16, repeat: Infinity }}
          className={`absolute ${isMobile ? "-bottom-32 -left-32 w-80 h-80" : "-bottom-[15%] -left-[8%] w-[550px] h-[550px]"} rounded-full pointer-events-none`}
          style={{
            background: `radial-gradient(circle, ${tokens.primary}25 0%, transparent 70%)`,
            filter: "blur(100px)",
            zIndex: 1,
          }}
        />

        {/* Content Container */}
        <div className={`relative z-20 w-full max-w-6xl mx-auto ${isMobile ? "px-5" : "px-8"}`}>
          {/* Text Section - Grid */}
          <div className={`grid ${isMobile ? "grid-cols-1 gap-10" : "grid-cols-2 gap-16"}`}>
            {/* LEFT: Heading & Info */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={variants.slideLeft}
              className="space-y-6"
            >
              {/* Label */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border backdrop-blur-sm"
                style={{
                  background: `linear-gradient(135deg, ${tokens.primary}10, ${tokens.accent}10)`,
                  borderColor: `${tokens.accent}35`,
                }}
              >
                <HiOutlineSparkles size={16} color={tokens.primary} />
                <span className="text-xs font-bold text-gray-900 uppercase tracking-widest">
                  Let's Work Together
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.2, ease }}
                className={`font-black leading-tight tracking-tighter ${
                  isMobile ? "text-4xl" : "text-5xl lg:text-6xl"
                } text-gray-900`}
              >
                Get expert
                <br />
                <motion.span
                  initial={{ opacity: 0, backgroundPosition: "0% 0%" }}
                  animate={{
                    opacity: 1,
                    backgroundPosition: "100% 0%",
                  }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  style={{
                    background: `linear-gradient(90deg, ${tokens.primary}, ${tokens.accent}, ${tokens.primary})`,
                    backgroundSize: "200% 100%",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  in 24 hours
                </motion.span>
              </motion.h1>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className={`${isMobile ? "text-base" : "text-lg"} text-gray-600 leading-relaxed max-w-md`}
              >
                Tell us about your compliance needs. Our CA-led team will respond with real answers — no sales pitch, just expertise.
              </motion.p>

              {/* Trust Indicators */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={variants.stagger}
                className="space-y-3 pt-2"
              >
                {[
                  { icon: "✓", text: "24h Response Guaranteed" },
                  { icon: "⚡", text: "50+ Finance Professionals" },
                  { icon: "🛡️", text: "CA-Reviewed Deliverables" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={variants.fadeUp}
                    className="flex items-center gap-3 text-sm font-semibold text-gray-900"
                  >
                    <span className="text-base">{item.icon}</span>
                    {item.text}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* RIGHT: Form */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={variants.slideRight}
            >
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className={`relative overflow-hidden rounded-2xl ${
                  isMobile ? "p-7" : "p-10 lg:p-11"
                } bg-white border-2 border-gray-200 shadow-xl backdrop-blur-2xl`}
              >
                {/* Top accent bar */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{
                    background: `linear-gradient(90deg, ${tokens.primary}, ${tokens.accent}, ${tokens.lime})`,
                    transformOrigin: "left",
                  }}
                />

                <NoiseTexture opacity={0.006} />

                <div className="relative z-10 space-y-5">
                  <h2 className={`${isMobile ? "text-lg" : "text-xl"} font-bold text-gray-900 tracking-tight`}>
                    Start Here
                  </h2>

                  {/* Form Fields */}
                  <div className="space-y-4">
                    {/* Name & Email Row */}
                    <div className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-2"} gap-3`}>
                      <FormField
                        label="Full Name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            name: e.target.value,
                          })
                        }
                        error={errors.name}
                        required
                        isMobile={isMobile}
                      />

                      <FormField
                        label="Work Email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            email: e.target.value,
                          })
                        }
                        error={errors.email}
                        required
                        isMobile={isMobile}
                      />
                    </div>

                    {/* Company & Service Row */}
                    <div className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-2"} gap-3`}>
                      <FormField
                        label="Company Name"
                        placeholder="Your company"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            company: e.target.value,
                          })
                        }
                        error={errors.company}
                        required
                        isMobile={isMobile}
                      />

                      <FormField
                        label="Service Needed"
                        type="select"
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            service: e.target.value,
                          })
                        }
                        isMobile={isMobile}
                      />
                    </div>

                    {/* Message */}
                    <FormField
                      label="Your Message"
                      type="textarea"
                      placeholder="Describe your compliance needs..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          message: e.target.value,
                        })
                      }
                      error={errors.message}
                      required
                      isMobile={isMobile}
                    />

                    {/* Checkbox */}
                    <motion.label className="flex items-start gap-3 cursor-pointer select-none">
                      <motion.div
                        animate={{
                          borderColor: formData.agreed
                            ? tokens.accent
                            : "rgba(0,0,0,0.15)",
                          background: formData.agreed
                            ? tokens.accent
                            : "transparent",
                        }}
                        onClick={() =>
                          setFormData({
                            ...formData,
                            agreed: !formData.agreed,
                          })
                        }
                        className="w-4 h-4 min-w-4 rounded border-2 flex items-center justify-center mt-0.5 transition-all"
                      >
                        <AnimatePresence>
                          {formData.agreed && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              exit={{ scale: 0 }}
                              transition={{ duration: 0.15 }}
                            >
                              <FiCheck size={10} color={tokens.white} />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                      <span className="text-xs text-gray-600 leading-relaxed">
                        I agree to be contacted by FinliGen
                      </span>
                    </motion.label>

                    {errors.agreed && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-xs text-red-500 flex items-center gap-1"
                      >
                        <FiX size={10} />
                        {errors.agreed}
                      </motion.p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={!isMobile ? { scale: 1.02, y: -2 } : {}}
                    whileTap={{ scale: 0.98 }}
                    className="w-full mt-6 px-5 py-3 rounded-xl font-bold text-white text-sm flex items-center justify-center gap-2 relative overflow-hidden disabled:opacity-70 transition-all"
                    style={{
                      background: `linear-gradient(135deg, ${tokens.primary}, ${tokens.primaryLight})`,
                      boxShadow: `0 8px 24px ${tokens.primary}35`,
                    }}
                  >
                    <motion.div
                      animate={{ x: ["-100%", "200%"] }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        repeatDelay: 1.5,
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                    />
                    <motion.span
                      animate={{ rotate: isSubmitting ? 360 : 0 }}
                      transition={{
                        duration: 1,
                        repeat: isSubmitting ? Infinity : 0,
                        ease: "linear",
                      }}
                      className="relative"
                    >
                      {isSubmitting ? (
                        <div
                          className="w-3.5 h-3.5 rounded-full border-2 border-white/30 border-t-white"
                        />
                      ) : (
                        <FiSend size={14} />
                      )}
                    </motion.span>
                    <span className="relative">
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </span>
                  </motion.button>

                  {/* WhatsApp Link */}
                  <p className="text-xs text-gray-500 text-center mt-3">
                    or{" "}
                    <a
                      href="https://wa.me/918287512393"
                      className="font-bold uppercase tracking-wide"
                      style={{ color: tokens.accent }}
                    >
                      message on WhatsApp
                    </a>
                  </p>
                </div>
              </motion.form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* OFFICES SECTION */}
      {/* ════════════════════════════════════════════════════════ */}
      <section className={`bg-gray-50 w-full ${isMobile ? "px-5 py-12" : "px-8 py-20"}`}>
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={variants.stagger}
            className={`text-center ${isMobile ? "mb-10" : "mb-14"}`}
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: tokens.primary }}
            >
              📍 Our Offices
            </motion.p>
            <h2 className={`font-black ${isMobile ? "text-3xl" : "text-4xl"} text-gray-900`}>
              Find Us Across India
            </h2>
          </motion.div>

          {/* Office Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={variants.stagger}
            className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-2"} gap-4`}
          >
            {[
              {
                city: "Delhi",
                address: "A-1192, Main Market, Mayur Vihar Phase-III",
                postal: "Delhi 110096",
                color: tokens.primary,
              },
              {
                city: "Gurgaon",
                address: "456 Tech Tower, Golf Course Road",
                postal: "Gurgaon 122002",
                color: tokens.accent,
              },
              {
                city: "Noida",
                address: "789 Corporate Hub, Sector 18",
                postal: "Noida 201301",
                color: tokens.forest,
              },
              {
                city: "Jaipur",
                address: "321 Business Square, C-Scheme",
                postal: "Jaipur 302001",
                color: tokens.navy,
              },
            ].map((office, i) => (
              <motion.div
                key={i}
                variants={variants.fadeUp}
                whileHover={!isMobile ? { y: -2 } : {}}
                className="relative overflow-hidden rounded-2xl bg-white border-2 border-gray-200 p-7"
              >
                {/* Top bar */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.1 + 0.1,
                    duration: 0.6,
                  }}
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{
                    background: office.color,
                    transformOrigin: "left",
                  }}
                />

                <div className="flex gap-3 relative z-10">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${office.color}15`,
                      color: office.color,
                    }}
                  >
                    <AiOutlineEnvironment size={22} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold tracking-tight mb-1" style={{ color: office.color }}>
                      {office.city}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed mb-2">
                      {office.address}
                      <br />
                      {office.postal}
                    </p>
                    <a
                      href={`https://maps.google.com/?q=${office.address}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-bold uppercase tracking-widest hover:opacity-75 transition-opacity"
                      style={{ color: office.color }}
                    >
                      View Map →
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════ */}
      {/* FAQ SECTION */}
      {/* ════════════════════════════════════════════════════════ */}
      <section className={`bg-white w-full ${isMobile ? "px-5 py-12" : "px-8 py-20"}`}>
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={variants.stagger}
            className={`text-center ${isMobile ? "mb-10" : "mb-14"}`}
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold uppercase tracking-widest mb-3"
              style={{ color: tokens.primary }}
            >
              ❓ Common Questions
            </motion.p>
            <h2 className={`font-black ${isMobile ? "text-3xl" : "text-4xl"} text-gray-900`}>
              We've Got Answers
            </h2>
          </motion.div>

          {/* FAQ Items */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={variants.stagger}
            className="space-y-2"
          >
            {[
              {
                q: "What's your response time?",
                a: "We guarantee a response within 24 hours. Most inquiries get a response within 2-4 hours during business days (Mon-Fri, 9 AM - 6 PM IST).",
              },
              {
                q: "Do you offer free consultations?",
                a: "Yes. Every new client gets a free 30-minute consultation. We use this time to understand your compliance needs and recommend the right services.",
              },
              {
                q: "Do you work with US CPA firms?",
                a: "Yes, this is one of our core services. We act as your white-label back-office, delivering bookkeeping, workpapers, and tax returns on your timeline.",
              },
              {
                q: "Can you help Indian founders expand into the US?",
                a: "Absolutely. We handle LLC formation, EIN registration, US tax compliance, and multi-state sales tax for Indian founders entering the US market.",
              },
              {
                q: "How is data security handled?",
                a: "All client data is encrypted and handled under strict NDAs. We use secure file transfer, role-based access controls, and can integrate with your firm's existing security infrastructure.",
              },
            ].map((faq, i) => (
              <FAQItem key={i} item={faq} index={i} isMobile={isMobile} />
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}

/* ═════════════════════════════════════════════════════════════════
   ░░░ FAQ ITEM COMPONENT ░░░
   ═════════════════════════════════════════════════════════════════ */

function FAQItem({ item, index, isMobile }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={variants.fadeUp}
      transition={{ delay: index * 0.06 }}
      onClick={() => setExpanded(!expanded)}
      className="cursor-pointer"
    >
      <motion.div
        animate={{
          background: expanded ? tokens.primary : "#fff",
          boxShadow: expanded
            ? `0 12px 32px ${tokens.primary}15`
            : "0 1px 3px rgba(0,0,0,0.04)",
          borderColor: expanded ? "transparent" : tokens.border,
        }}
        transition={{ duration: 0.3, ease }}
        className={`relative overflow-hidden rounded-2xl border-2 ${isMobile ? "p-4 md:p-5" : "p-5 lg:p-6"}`}
      >
        {/* Question Header */}
        <div className="flex items-center justify-between gap-4 relative z-10">
          <motion.h3
            animate={{
              color: expanded ? "#fff" : tokens.text,
            }}
            transition={{ duration: 0.3 }}
            className={`${isMobile ? "text-sm" : "text-base"} font-bold tracking-tight flex-1`}
          >
            {item.q}
          </motion.h3>

          <motion.div
            animate={{
              rotate: expanded ? 180 : 0,
              background: expanded
                ? "rgba(126,207,192,0.2)"
                : "rgba(6,54,60,0.07)",
              color: expanded ? tokens.accent : tokens.primary,
            }}
            transition={{ duration: 0.3, ease }}
            className="w-9 h-9 min-w-9 rounded-lg flex items-center justify-center flex-shrink-0"
          >
            <FiArrowRight size={18} />
          </motion.div>
        </div>

        {/* Answer */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease }}
              className={`relative z-10 ${isMobile ? "mt-3 pt-3" : "mt-3.5 pt-3.5"} border-t`}
              style={{
                borderColor: "rgba(255,255,255,0.1)",
              }}
            >
              <motion.p
                initial={{ opacity: 0, y: -2 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className={`${isMobile ? "text-xs" : "text-sm"} leading-relaxed`}
                style={{
                  color: expanded
                    ? "rgba(255,255,255,0.72)"
                    : tokens.muted,
                }}
              >
                {item.a}
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bg glow */}
        {expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-1/2 -right-20 w-52 h-52 rounded-full pointer-events-none"
            style={{
              background: tokens.accent,
              transform: "translateY(-50%)",
              filter: "blur(80px)",
              zIndex: 0,
            }}
          />
        )}
      </motion.div>
    </motion.div>
  );
}