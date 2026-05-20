import { motion } from "framer-motion";
import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import {
  RiDoubleQuotesL,
} from "react-icons/ri";

import {
  LuShieldHalf,
  LuArrowUpRight,
} from "react-icons/lu";

import {
  TbStack,
  TbNorthStar,
} from "react-icons/tb";

import {
  AiOutlineLineChart,
} from "react-icons/ai";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function CPAFirmPage() {

  const [openFaq, setOpenFaq] = useState(0);

  const painPoints = [
    "Your senior staff spends too much time reviewing basic bookkeeping work.",
    "Busy season creates operational chaos and staff burnout.",
    "You’re turning away new clients because your team is overloaded.",
    "Hiring locally is becoming too expensive and too slow.",
  ];

  const steps = [
    {
      title: "Discovery Call",
      desc: "We learn your workflow, software stack, and delivery expectations.",
    },
    {
      title: "Team Setup",
      desc: "We assign trained accounting professionals aligned to your processes.",
    },
    {
      title: "Operational Delivery",
      desc: "Your offshore team integrates into your day-to-day operations.",
    },
  ];

  return (
    <div className="bg-[#f5f5f3] overflow-hidden">

    {/* ─────────────────── HERO SECTION ─────────────────── */}
    <section className="-mt-16 relative min-h-screen flex items-center overflow-hidden bg-[#f5f5f3]">

      {/* BACKGROUND GLOWS */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-10%] right-[-5%]
                  w-[700px] h-[700px]
                  bg-[#dff5b7]/30
                  blur-3xl rounded-full"
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-20%] left-[-10%]
                  w-[500px] h-[500px]
                  bg-[#0d3d43]/10
                  blur-3xl rounded-full"
      />

      {/* GRID OVERLAY */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#0d3d43 1px, transparent 1px), linear-gradient(to right, #0d3d43 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-32 relative z-10 w-full">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
          >

            {/* TOP TAG */}
            <motion.div variants={fadeUp}>
              <span
                className="inline-flex items-center gap-2
                          border border-[#0d3d43]/10
                          bg-white/80 backdrop-blur-xl
                          text-[#0d3d43]
                          rounded-full
                          px-5 py-2.5
                          text-[11px]
                          tracking-[0.16em]
                          uppercase font-semibold"
              >

                <span
                  className="w-2 h-2 rounded-full
                            bg-[#7cc576]"
                />

                CPA FIRM OUTSOURCING

              </span>
            </motion.div>

            {/* HEADING */}
            <motion.h1
              variants={fadeUp}
              className="mt-7
                        text-[#050816]
                        text-[48px]
                        sm:text-[72px]
                        lg:text-[88px]
                        leading-[0.92]
                        tracking-[-0.07em]
                        font-semibold"
            >
              Scale Your
              <br />

              <span className="relative inline-block">

                CPA Practice

                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    duration: 1.1,
                    delay: 0.6,
                  }}
                  className="absolute bottom-0 left-0
                            h-[10px] w-full
                            bg-[#dff5b7]/70
                            -z-10 origin-left"
                />

              </span>

              <br />
              Without Adding
              Overhead.

            </motion.h1>

            {/* PARAGRAPH */}
            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-2xl
                        text-[#666]
                        text-[18px] sm:text-[20px]
                        leading-[1.9]"
            >
              FinliGen provides US accounting firm's with
              a dedicated offshore team — qualified CAs,
              trained in QuickBooks and US GAAP —
              delivering client-ready work on your timeline.
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap gap-4"
            >

              <motion.button
                whileHover={{
                  y: -4,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="group bg-[#0d3d43]
                          hover:bg-[#145159]
                          text-white
                          px-8 py-4
                          rounded-2xl
                          text-[15px]
                          font-medium
                          transition-all duration-300
                          flex items-center gap-3"
              >
                Book a Discovery Call

                <motion.div
                  animate={{
                    x: [0, 4, 0],
                  }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                  }}
                >
                  <LuArrowUpRight size={18} />
                </motion.div>

              </motion.button>

              <motion.button
                whileHover={{
                  y: -4,
                }}
                className="border border-[#d9d9d6]
                          bg-white/80 backdrop-blur-xl
                          hover:bg-[#f1f1ee]
                          text-[#111]
                          px-8 py-4
                          rounded-2xl
                          text-[15px]
                          font-medium
                          transition-all duration-300"
              >
                Download Outsourcing Guide
              </motion.button>

            </motion.div>

            {/* TRUST BADGES */}
            <motion.div
              variants={fadeUp}
              className="mt-12 flex flex-wrap gap-3"
            >

              {[
                "CA-Reviewed",
                "White-Label Ready",
                "US GAAP Trained",
                "24–48 Hour SLA",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{
                    y: -3,
                  }}
                  className="bg-white/70 backdrop-blur-xl
                            border border-[#e7e7e5]
                            rounded-full
                            px-5 py-3
                            text-[10px]
                            text-[#555]
                            font-bold
                            shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
                >
                  ✓ {item}
                </motion.div>
              ))}

            </motion.div>

          </motion.div>

          {/* RIGHT VISUAL SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative flex justify-center"
          >

            {/* MAIN DASHBOARD */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative
                        w-full max-w-[520px]
                        rounded-[40px]
                        bg-white/80
                        backdrop-blur-2xl
                        border border-white/50
                        shadow-[0_20px_80px_rgba(0,0,0,0.08)]
                        overflow-hidden"
            >

              {/* TOP BAR */}
              <div
                className="px-8 py-6
                          border-b border-[#ececea]
                          flex items-center justify-between"
              >

                <div>
                  <p className="text-[#999] text-[13px]">
                    Client Delivery
                  </p>

                  <h3
                    className="mt-1 text-[#111]
                              text-[22px]
                              font-semibold"
                  >
                    Busy Season Capacity
                  </h3>
                </div>

                <div
                  className="w-14 h-14 rounded-2xl
                            bg-[#0d3d43]
                            text-white
                            flex items-center justify-center"
                >
                  <TbStack size={28} />
                </div>

              </div>

              {/* CONTENT */}
              <div className="p-8 space-y-7">

                {/* METRIC */}
                <div
                  className="bg-[#f8f8f6]
                            rounded-[28px]
                            p-6"
                >

                  <div className="flex items-end justify-between">

                    <div>

                      <p className="text-[#888] text-[13px]">
                        Workpapers Delivered
                      </p>

                      <h2
                        className="mt-2 text-[#111]
                                  text-[52px]
                                  leading-none
                                  tracking-[-0.05em]
                                  font-semibold"
                      >
                        2,480
                      </h2>

                    </div>

                    <div
                      className="flex items-center gap-2
                                text-[#3f655b]
                                text-[14px]
                                font-medium"
                    >
                      <AiOutlineLineChart size={20} />
                      +18.2%
                    </div>

                  </div>

                  {/* GRAPH */}
                  <div className="mt-6 flex items-end gap-2 h-[90px]">

                    {[40, 65, 50, 85, 75, 95, 70].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{
                          duration: 1,
                          delay: i * 0.08,
                        }}
                        className="flex-1 rounded-full
                                  bg-gradient-to-t
                                  from-[#0d3d43]
                                  to-[#8ccf84]"
                      />
                    ))}

                  </div>

                </div>

                {/* SMALL CARDS */}
                <div className="grid grid-cols-2 gap-5">

                  {[
                    {
                      title: "Accuracy",
                      value: "99.5%",
                      icon: <LuShieldHalf size={22} />,
                    },
                    {
                      title: "Turnaround",
                      value: "48hr",
                      icon: <TbNorthStar size={22} />,
                    },
                  ].map((card, i) => (
                    <motion.div
                      key={i}
                      whileHover={{
                        y: -6,
                      }}
                      className="bg-[#fafaf8]
                                rounded-[24px]
                                p-5"
                    >

                      <div
                        className="w-12 h-12 rounded-xl
                                  bg-[#0d3d43]
                                  text-white
                                  flex items-center justify-center"
                      >
                        {card.icon}
                      </div>

                      <p
                        className="mt-5 text-[#777]
                                  text-[13px]"
                      >
                        {card.title}
                      </p>

                      <h3
                        className="mt-1 text-[#111]
                                  text-[34px]
                                  leading-none
                                  tracking-[-0.05em]
                                  font-semibold"
                      >
                        {card.value}
                      </h3>

                    </motion.div>
                  ))}

                </div>

              </div>

            </motion.div>

            {/* FLOATING CARD */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{
                opacity: 1,
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-20 bottom-10
                        bg-white
                        border border-[#ececea]
                        rounded-[28px]
                        p-6
                        shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
            >

              <div className="flex items-center gap-4">

                <div
                  className="w-14 h-14 rounded-2xl
                            bg-[#dff5b7]
                            flex items-center justify-center"
                >
                  <TbNorthStar
                    size={28}
                    className="text-[#0d3d43]"
                  />
                </div>

                <div>

                  <p className="text-[#888] text-[13px]">
                    Average Client Growth
                  </p>

                  <h3
                    className="mt-1 text-[#111]
                              text-[28px]
                              font-semibold"
                  >
                    +37%
                  </h3>

                </div>

              </div>

            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>

    {/* ─────────────────── PAIN POINTS SECTION ─────────────────── */}
    <section className="relative py-10 overflow-hidden bg-[#f5f5f3]">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#0d3d43 1px, transparent 1px), linear-gradient(to right, #0d3d43 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* GLOW */}
      <div
        className="absolute top-0 left-0
                  w-[500px] h-[500px]
                  bg-[#dff5b7]/20
                  blur-3xl rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">

        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-20 items-start">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:sticky lg:top-24"
          >

            {/* TAG */}
            <span
              className="inline-flex items-center
                        gap-2
                        border border-[#0d3d43]/10
                        bg-white/70 backdrop-blur-xl
                        text-[#0d3d43]
                        rounded-full
                        px-5 py-2.5
                        text-[11px]
                        tracking-[0.16em]
                        uppercase font-semibold"
            >

              <span
                className="w-2 h-2 rounded-full
                          bg-[#7cc576]"
              />

              SOUND FAMILIAR?

            </span>

            {/* HEADING */}
            <h2
              className="mt-8
                        text-[#111]
                        text-[44px]
                        sm:text-[64px]
                        leading-[0.95]
                        tracking-[-0.06em]
                        font-semibold"
            >
              Most CPA firm's
              don’t have a
              <span className="relative inline-block">

                {" "}demand{" "}

                <div
                  className="absolute bottom-2 left-0
                            w-full h-[10px]
                            bg-[#dff5b7]/70
                            -z-10"
                />

              </span>

              problem.
            </h2>

            {/* SUBTEXT */}
            <p
              className="mt-8
                        text-[#666]
                        text-[19px]
                        leading-[1.9]
                        max-w-xl"
            >
              They have a capacity problem.
            </p>

            {/* VISUAL METRIC */}
            <motion.div
              whileHover={{ y: -6 }}
              className="mt-14
                        bg-white/80 backdrop-blur-xl
                        border border-[#ececea]
                        rounded-[32px]
                        p-8
                        shadow-[0_10px_50px_rgba(0,0,0,0.04)]"
            >

              <div className="flex items-start justify-between">

                <div>

                  <p
                    className="text-[#888]
                              text-[13px]"
                  >
                    Busy Season Pressure
                  </p>

                  <h3
                    className="mt-3
                              text-[#111]
                              text-[58px]
                              leading-none
                              tracking-[-0.06em]
                              font-semibold"
                  >
                    72%
                  </h3>

                </div>

                <div
                  className="w-14 h-14 rounded-2xl
                            bg-[#0d3d43]
                            text-white
                            flex items-center justify-center"
                >
                  <AiOutlineLineChart size={28} />
                </div>

              </div>

              <p
                className="mt-5
                          text-[#666]
                          text-[15px]
                          leading-[1.8]"
              >
                Most firm's lose growth opportunities because
                internal capacity becomes the bottleneck
                during filing season.
              </p>

            </motion.div>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            className="relative"
          >

            {/* CONNECTOR LINE */}
            <div
              className="absolute left-5 top-0 bottom-0
                        w-[1px]
                        bg-gradient-to-b
                        from-[#0d3d43]/0
                        via-[#0d3d43]/20
                        to-[#0d3d43]/0"
            />

            <div className="space-y-3">

              {painPoints.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{
                    y: -6,
                    x: 6,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="group relative"
                >

                  {/* CONNECTOR DOT */}
                  <div
                    className="absolute left-0 top-10
                              w-10 h-10 rounded-full
                              bg-[#0d3d43]
                              text-white
                              flex items-center justify-center
                              z-10"
                  >
                    0{i + 1}
                  </div>

                  {/* CARD */}
                  <div
                    className="ml-16
                              bg-white/85 backdrop-blur-xl
                              border border-[#e8e8e6]
                              rounded-[30px]
                              p-8
                              overflow-hidden
                              relative
                              shadow-[0_10px_50px_rgba(0,0,0,0.04)]"
                  >

                    {/* HOVER GLOW */}
                    <div
                      className="absolute top-0 right-0
                                w-[200px] h-[200px]
                                bg-[#dff5b7]/0
                                group-hover:bg-[#dff5b7]/20
                                blur-3xl
                                transition-all duration-700"
                    />

                    {/* CONTENT */}
                    <div className="relative z-10">

                      <div
                        className="w-14 h-14 rounded-2xl
                                  bg-[#f8f8f6]
                                  border border-[#ececea]
                                  flex items-center justify-center"
                      >
                        <TbStack
                          size={26}
                          className="text-[#0d3d43]"
                        />
                      </div>

                      <p
                        className="mt-6
                                  text-[#222]
                                  text-[18px]
                                  leading-[1.9]"
                      >
                        {item}
                      </p>

                    </div>

                  </div>

                </motion.div>
              ))}

            </div>

          </motion.div>

        </div>

      </div>

    </section>

    {/* ─────────────────── WHY MOST OFFSHORE firm's FAIL ─────────────────── */}
    <section className="relative py-16 bg-white overflow-hidden">

      {/* GLOW */}
      <div
        className="absolute top-[-20%] right-[-10%]
                  w-[700px] h-[700px]
                  bg-[#dff5b7]/20
                  blur-3xl rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">

        {/* TOP CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-5xl"
        >

          <span
            className="inline-flex items-center gap-2
                      border border-[#0d3d43]/10
                      bg-[#f8f8f6]
                      rounded-full
                      px-5 py-2.5
                      text-[#0d3d43]
                      text-[11px]
                      tracking-[0.16em]
                      uppercase font-semibold"
          >

            <span
              className="w-2 h-2 rounded-full
                        bg-[#7cc576]"
            />

            THE REAL PROBLEM

          </span>

          <h2
            className="mt-4
                      text-[#111]
                      text-[46px]
                      sm:text-[72px]
                      leading-[0.93]
                      tracking-[-0.07em]
                      font-semibold"
          >
            Most offshore accounting
            relationships fail for
            the same reason.
          </h2>

          <p
            className="mt-4
                      text-[#666]
                      text-[19px]
                      leading-[1.9]
                      max-w-3xl"
          >
            They optimize for labor cost instead of accounting quality.
            CPA firm's end up spending more time reviewing,
            correcting, and managing offshore teams
            than they save.
          </p>

        </motion.div>

        {/* COMPARISON GRID */}
        <div className="mt-10 grid lg:grid-cols-2 gap-8 items-stretch">

          {/* LEFT CARD */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -8 }}
            className="group relative
                      bg-[#fafaf8]
                      border border-[#ececea]
                      rounded-[40px]
                      p-8 sm:p-10
                      overflow-hidden"
          >

            {/* BACKGROUND GLOW */}
            <div
              className="absolute top-0 right-0
                        w-[250px] h-[250px]
                        bg-[#c0392b]/0
                        group-hover:bg-[#c0392b]/5
                        blur-3xl
                        transition-all duration-700"
            />

            {/* HEADER */}
            <div className="relative z-10 flex items-center justify-between">

              <div>

                <span
                  className="inline-flex items-center
                            gap-2
                            text-[#c0392b]
                            text-[11px]
                            tracking-[0.16em]
                            uppercase font-semibold"
                >

                  <span
                    className="w-2 h-2 rounded-full
                              bg-[#c0392b]"
                  />

                  TYPICAL OFFSHORE EXPERIENCE

                </span>

                <h3
                  className="mt-5
                            text-[#111]
                            text-[34px]
                            leading-[1.05]
                            tracking-[-0.04em]
                            font-semibold"
                >
                  Cheap labor.
                  <br />
                  Expensive mistakes.
                </h3>

              </div>

              <div
                className="w-16 h-16 rounded-2xl
                          bg-[#fcebea]
                          text-[#c0392b]
                          flex items-center justify-center
                          text-[34px]"
              >
                ×
              </div>

            </div>

            {/* ITEMS */}
            <div className="relative z-10 mt-12 space-y-5">

              {[
                "Junior staff with no accounting judgment",
                "Missed deadlines during busy season",
                "No understanding of CPA workflows",
                "Constant communication gaps",
                "You still end up redoing the work",
                "Quality changes every month",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.08,
                  }}
                  className="flex items-start gap-4"
                >

                  <div
                    className="w-8 h-8 rounded-full
                              bg-[#fcebea]
                              text-[#c0392b]
                              flex items-center justify-center
                              flex-shrink-0 mt-1"
                  >
                    ×
                  </div>

                  <p
                    className="text-[#333]
                              text-[16px]
                              leading-[1.8]"
                  >
                    {item}
                  </p>

                </motion.div>
              ))}

            </div>

          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -8 }}
            className="group relative
                      bg-[#0d3d43]
                      rounded-[40px]
                      p-8 sm:p-10
                      overflow-hidden"
          >

            {/* GLOW */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.2, 0.35, 0.2],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="absolute top-[-10%] right-[-10%]
                        w-[300px] h-[300px]
                        bg-[#dff5b7]/20
                        blur-3xl rounded-full"
            />

            {/* HEADER */}
            <div className="relative z-10 flex items-center justify-between">

              <div>

                <span
                  className="inline-flex items-center
                            gap-2
                            text-[#dff5b7]
                            text-[11px]
                            tracking-[0.16em]
                            uppercase font-semibold"
                >

                  <span
                    className="w-2 h-2 rounded-full
                              bg-[#dff5b7]"
                  />

                  THE FINLIGEN MODEL

                </span>

                <h3
                  className="mt-5
                            text-white
                            text-[34px]
                            leading-[1.05]
                            tracking-[-0.04em]
                            font-semibold"
                >
                  Enterprise-quality
                  delivery systems.
                </h3>

              </div>

              <div
                className="w-16 h-16 rounded-2xl
                          bg-white/10
                          text-[#dff5b7]
                          flex items-center justify-center"
              >
                <LuShieldHalf size={30} />
              </div>

            </div>

            {/* ITEMS */}
            <div className="relative z-10 mt-12 space-y-5">

              {[
                "CA-reviewed deliverables before submission",
                "Dedicated workflow-trained team",
                "US GAAP + QuickBooks trained staff",
                "Structured communication process",
                "Consistent month-end delivery systems",
                "Long-term embedded offshore support",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.08,
                  }}
                  className="flex items-start gap-4"
                >

                  <div
                    className="w-8 h-8 rounded-full
                              bg-white/10
                              text-[#dff5b7]
                              flex items-center justify-center
                              flex-shrink-0 mt-1"
                  >
                    ✓
                  </div>

                  <p
                    className="text-white/85
                              text-[16px]
                              leading-[1.8]"
                  >
                    {item}
                  </p>

                </motion.div>
              ))}

            </div>

          </motion.div>

        </div>

      </div>

    </section>

    {/* ─────────────────── WHY firm's SWITCH ─────────────────── */}
    <section className="relative py-16 overflow-hidden bg-[#f5f5f3]">

      {/* GRID */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#0d3d43 1px, transparent 1px), linear-gradient(to right, #0d3d43 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* GLOW */}
      <div
        className="absolute top-[10%] right-[-10%]
                  w-[600px] h-[600px]
                  bg-[#dff5b7]/20
                  blur-3xl rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">

        <div className="grid lg:grid-cols-[1fr_1.05fr] gap-20 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            {/* TAG */}
            <span
              className="inline-flex items-center
                        gap-2
                        border border-[#0d3d43]/10
                        bg-white/70 backdrop-blur-xl
                        text-[#0d3d43]
                        rounded-full
                        px-5 py-2.5
                        text-[11px]
                        tracking-[0.16em]
                        uppercase font-semibold"
            >

              <span
                className="w-2 h-2 rounded-full
                          bg-[#7cc576]"
              />

              WHY firm's SWITCH

            </span>

            {/* HEADING */}
            <h2
              className="mt-8
                        text-[#111]
                        text-[48px]
                        sm:text-[70px]
                        leading-[0.93]
                        tracking-[-0.07em]
                        font-semibold"
            >
              Your offshore
              team should
              <span className="relative inline-block">

                {" "}reduce stress{" "}

                <div
                  className="absolute bottom-2 left-0
                            h-[10px] w-full
                            bg-[#dff5b7]/70
                            -z-10"
                />

              </span>

              — not create more of it .
            </h2>

            {/* TEXT */}
            <p
              className="mt-8
                        text-[#666]
                        text-[19px]
                        leading-[1.9]
                        max-w-2xl"
            >
              Most offshore accounting vendors fail because
              they optimize for labor cost — not accounting quality.
              FinliGen is built differently.
            </p>

            {/* FLOATING STATS */}
            <motion.div
              whileHover={{ y: -6 }}
              className="mt-14
                        inline-flex items-center gap-5
                        bg-white/80 backdrop-blur-xl
                        border border-[#ececea]
                        rounded-[28px]
                        px-7 py-6
                        shadow-[0_15px_50px_rgba(0,0,0,0.05)]"
            >

              <div
                className="w-16 h-16 rounded-2xl
                          bg-[#0d3d43]
                          text-white
                          flex items-center justify-center"
              >
                <AiOutlineLineChart size={30} />
              </div>

              <div>

                <p
                  className="text-[#888]
                            text-[13px]"
                >
                  Average Reduction in Review Time
                </p>

                <h3
                  className="mt-1
                            text-[#111]
                            text-[38px]
                            leading-none
                            tracking-[-0.05em]
                            font-semibold"
                >
                  41%
                </h3>

              </div>

            </motion.div>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            className="relative"
          >

            {/* BIG CARD */}
            <div
              className="relative
                        bg-white/80 backdrop-blur-xl
                        border border-[#ececea]
                        rounded-[40px]
                        overflow-hidden
                        shadow-[0_20px_70px_rgba(0,0,0,0.05)]"
            >

              {/* TOP BAR */}
              <div
                className="px-8 py-7
                          border-b border-[#ececea]
                          flex items-center justify-between"
              >

                <div>

                  <p
                    className="text-[#888]
                              text-[13px]"
                  >
                    Operational Advantages
                  </p>

                  <h3
                    className="mt-1
                              text-[#111]
                              text-[28px]
                              leading-none
                              tracking-[-0.04em]
                              font-semibold"
                  >
                    The FinliGen Difference
                  </h3>

                </div>

                <div
                  className="w-14 h-14 rounded-2xl
                            bg-[#0d3d43]
                            text-white
                            flex items-center justify-center"
                >
                  <TbNorthStar size={28} />
                </div>

              </div>

              {/* LIST */}
              <div className="p-8 space-y-5">

                {[
                  "Every deliverable reviewed by senior CAs",
                  "Dedicated communication channels",
                  "US GAAP trained accounting professionals",
                  "Zero white-label visibility to clients",
                  "Structured SLA-based delivery system",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    whileHover={{
                      x: 6,
                    }}
                    className="group
                              relative
                              flex items-start gap-5
                              bg-[#fafaf8]
                              rounded-[24px]
                              p-6 overflow-hidden"
                  >

                    {/* HOVER GLOW */}
                    <div
                      className="absolute top-0 right-0
                                w-[150px] h-[150px]
                                bg-[#dff5b7]/0
                                group-hover:bg-[#dff5b7]/20
                                blur-3xl
                                transition-all duration-700"
                    />

                    {/* ICON */}
                    <div
                      className="relative z-10
                                w-12 h-12 rounded-xl
                                bg-[#0d3d43]
                                text-white
                                flex items-center justify-center
                                flex-shrink-0"
                    >
                      ✓
                    </div>

                    {/* TEXT */}
                    <p
                      className="relative z-10
                                text-[#222]
                                text-[16px]
                                leading-[1.9]"
                    >
                      {item}
                    </p>

                  </motion.div>
                ))}

              </div>

            </div>

            {/* FLOATING MINI CARD */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.9,
                delay: 0.3,
              }}
              animate={{
                y: [0, -10, 0],
              }}
              className="absolute 
                        -bottom-28 right-0
                        sm:-right-20
                        bg-[#0d3d43]
                        text-white
                        rounded-[28px]
                        p-5 sm:p-6
                        shadow-[0_20px_60px_rgba(0,0,0,0.15)]
                        w-[220px] sm:w-auto"
            >

              <p
                className="text-white/60
                          text-[13px]"
              >
                Client Retention
              </p>

              <h3
                className="mt-2
                          text-[48px]
                          leading-none
                          tracking-[-0.06em]
                          font-semibold"
              >
                98%
              </h3>

              <p
                className="mt-3
                          text-white/70
                          text-[14px]
                          leading-[1.7]
                          max-w-[220px]"
              >
                Long-term embedded partnerships
                with accounting firm's.
              </p>

            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>

    {/* ─────────────────── STATS SECTION ─────────────────── */}
    <section className="relative py-16 overflow-hidden bg-[#0d3d43]">

      {/* GLOW */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-20%] right-[-10%]
                  w-[700px] h-[700px]
                  bg-[#dff5b7]/20
                  blur-3xl rounded-full"
      />

      {/* GRID */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">

        {/* TOP */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-4xl"
        >

          <span
            className="inline-flex items-center gap-2
                      border border-white/10
                      bg-white/5 backdrop-blur-xl
                      rounded-full
                      px-5 py-2.5
                      text-[#dff5b7]
                      text-[11px]
                      tracking-[0.16em]
                      uppercase font-semibold"
          >

            <span
              className="w-2 h-2 rounded-full
                        bg-[#dff5b7]"
            />

            PERFORMANCE METRICS

          </span>

          <h2
            className="mt-8
                      text-white
                      text-[46px]
                      sm:text-[72px]
                      leading-[0.93]
                      tracking-[-0.07em]
                      font-semibold"
          >
            Built for firm's that
            need scalable delivery
            without sacrificing quality.
          </h2>

        </motion.div>

        {/* MAIN GRID */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
        >

          {[
            {
              number: "99.5%",
              label: "Accuracy Rate",
              desc: "CA-reviewed deliverables before submission.",
            },
            {
              number: "48hr",
              label: "Average Turnaround",
              desc: "Structured workflow and SLA-driven delivery.",
            },
            {
              number: "60%",
              label: "Lower Cost vs Local Hiring",
              desc: "Scale without expanding internal payroll.",
            },
            {
              number: "200+",
              label: "Businesses Supported",
              desc: "Cross-border accounting and compliance delivery.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{
                y: -10,
              }}
              className="group relative
                        bg-white/5 backdrop-blur-xl
                        border border-white/10
                        rounded-[36px]
                        p-8
                        overflow-hidden"
            >

              {/* HOVER GLOW */}
              <div
                className="absolute top-0 right-0
                          w-[220px] h-[220px]
                          bg-[#dff5b7]/0
                          group-hover:bg-[#dff5b7]/20
                          blur-3xl
                          transition-all duration-700"
              />

              {/* ICON */}
              <div
                className="relative z-10
                          w-14 h-14 rounded-2xl
                          bg-white/10
                          text-[#dff5b7]
                          flex items-center justify-center"
              >
                <AiOutlineLineChart size={30} />
              </div>

              {/* NUMBER */}
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.1,
                }}
                className="relative z-10
                          mt-8
                          text-white
                          text-[58px] sm:text-[72px]
                          leading-none
                          tracking-[-0.08em]
                          font-semibold"
              >
                {item.number}
              </motion.h2>

              {/* LABEL */}
              <p
                className="relative z-10
                          mt-4
                          text-[#dff5b7]
                          text-[13px]
                          tracking-[0.14em]
                          uppercase font-semibold"
              >
                {item.label}
              </p>

              {/* DESC */}
              <p
                className="relative z-10
                          mt-5
                          text-white/70
                          text-[15px]
                          leading-[1.8]"
              >
                {item.desc}
              </p>

              {/* MINI GRAPH */}
              <div
                className="relative z-10
                          mt-8 flex items-end gap-2 h-[70px]"
              >

                {[35, 55, 42, 75, 65, 90].map((h, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    transition={{
                      duration: 0.8,
                      delay: idx * 0.05,
                    }}
                    className="flex-1 rounded-full
                              bg-gradient-to-t
                              from-[#dff5b7]
                              to-white"
                  />
                ))}

              </div>

            </motion.div>
          ))}

        </motion.div>

        {/* FLOATING BOTTOM BAR */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.9,
            delay: 0.2,
          }}
          className="mt-16
                    bg-white/5 backdrop-blur-xl
                    border border-white/10
                    rounded-[36px]
                    px-8 py-7
                    flex flex-col lg:flex-row
                    lg:items-center
                    justify-between
                    gap-8"
        >

          {/* LEFT */}
          <div className="max-w-2xl">

            <p
              className="text-[#dff5b7]
                        text-[13px]
                        tracking-[0.14em]
                        uppercase font-semibold"
            >
              LONG-TERM PARTNERSHIPS
            </p>

            <h3
              className="mt-3
                        text-white
                        text-[32px]
                        sm:text-[40px]
                        leading-[1]
                        tracking-[-0.05em]
                        font-semibold"
            >
              We’re built for embedded
              long-term accounting support.
            </h3>

          </div>

          {/* RIGHT */}
          <div className="flex flex-wrap gap-4">

            {[
              "White-Label Ready",
              "Dedicated Teams",
              "US GAAP Trained",
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="bg-white/10
                          border border-white/10
                          rounded-full
                          px-5 py-3
                          text-white/80
                          text-[14px]"
              >
                ✓ {item}
              </motion.div>
            ))}

          </div>

        </motion.div>

      </div>

    </section>

    {/* ─────────────────── SERVICES INCLUDED ─────────────────── */}
    <section className="relative py-16 overflow-hidden bg-[#f5f5f3]">

      {/* GRID */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#0d3d43 1px, transparent 1px), linear-gradient(to right, #0d3d43 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* GLOW */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute top-[-20%] left-[-10%]
                  w-[700px] h-[700px]
                  bg-[#dff5b7]/20
                  blur-3xl rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">

        {/* TOP */}
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-20 items-end">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <span
              className="inline-flex items-center gap-2
                        border border-[#0d3d43]/10
                        bg-white/70 backdrop-blur-xl
                        text-[#0d3d43]
                        rounded-full
                        px-5 py-2.5
                        text-[11px]
                        tracking-[0.16em]
                        uppercase font-semibold"
            >

              <span
                className="w-2 h-2 rounded-full
                          bg-[#7cc576]"
              />

              SERVICES INCLUDED

            </span>

            <h2
              className="mt-8
                        text-[#111]
                        text-[46px]
                        sm:text-[72px]
                        leading-[0.93]
                        tracking-[-0.07em]
                        font-semibold"
            >
              Everything your
              firm needs to
              increase capacity.
            </h2>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.9,
              delay: 0.1,
            }}
          >

            <p
              className="text-[#666]
                        text-[19px]
                        leading-[1.9]
                        max-w-2xl"
            >
              FinliGen integrates directly into your accounting
              operations with structured workflows,
              review systems, and scalable offshore delivery.
            </p>

          </motion.div>

        </div>

        {/* SERVICES GRID */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="mt-20 grid md:grid-cols-2 xl:grid-cols-3 gap-6"
        >

          {[
            "QuickBooks Bookkeeping",
            "Bank Reconciliation",
            "Workpaper Preparation",
            "Tax Return Drafting",
            "Payroll Reconciliation",
            "Accounts Cleanup",
            "Month-End Closing",
            "Financial Statements",
            "1099 Preparation",
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{
                y: -10,
              }}
              className="group relative
                        bg-white/80 backdrop-blur-xl
                        border border-[#e8e8e6]
                        rounded-[36px]
                        overflow-hidden
                        shadow-[0_15px_50px_rgba(0,0,0,0.04)]"
            >

              {/* TOP BAR */}
              <div
                className="px-7 py-6
                          border-b border-[#ececea]
                          flex items-center justify-between"
              >

                <div
                  className="w-14 h-14 rounded-2xl
                            bg-[#0d3d43]
                            text-white
                            flex items-center justify-center"
                >
                  <TbStack size={28} />
                </div>

                <motion.div
                  whileHover={{
                    rotate: 45,
                  }}
                  className="w-11 h-11 rounded-full
                            group-hover:bg-[#0d3d43]
                            group-hover:text-white
                            border border-[#ececea]
                            flex items-center justify-center"
                >
                  <LuArrowUpRight size={18} />
                </motion.div>

              </div>

              {/* CONTENT */}
              <div className="relative p-7 overflow-hidden">

                {/* GLOW */}
                <div
                  className="absolute top-0 right-0
                            w-[200px] h-[200px]
                            bg-[#dff5b7]/0
                            group-hover:bg-[#dff5b7]/20
                            blur-3xl
                            transition-all duration-700"
                />

                <div className="relative z-10">

                  {/* TITLE */}
                  <h3
                    className="text-[#111]
                              text-[28px]
                              leading-[1.2]
                              tracking-[-0.04em]
                              font-semibold"
                  >
                    {item}
                  </h3>

                  {/* DESC */}
                  <p
                    className="mt-5
                              text-[#666]
                              text-[15px]
                              leading-[1.9]"
                  >
                    Delivered using your workflow,
                    formatting standards,
                    and review process.
                  </p>

                  {/* MINI STATS */}
                  <div
                    className="mt-8 flex items-center gap-6"
                  >

                    <div>

                      <p
                        className="text-[#999]
                                  text-[12px]"
                      >
                        Accuracy
                      </p>

                      <h4
                        className="mt-1
                                  text-[#111]
                                  text-[22px]
                                  font-semibold"
                      >
                        99.5%
                      </h4>

                    </div>

                    <div>

                      <p
                        className="text-[#999]
                                  text-[12px]"
                      >
                        Delivery
                      </p>

                      <h4
                        className="mt-1
                                  text-[#111]
                                  text-[22px]
                                  font-semibold"
                      >
                        48hr
                      </h4>

                    </div>

                  </div>

                </div>

              </div>

            </motion.div>
          ))}

        </motion.div>

        {/* BOTTOM ENTERPRISE BAR */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.9,
            delay: 0.2,
          }}
          className="mt-20
                    bg-[#0d3d43]
                    rounded-[40px]
                    overflow-hidden
                    relative"
        >

          {/* GLOW */}
          <div
            className="absolute top-0 right-0
                      w-[400px] h-[400px]
                      bg-[#dff5b7]/20
                      blur-3xl rounded-full"
          />

          <div
            className="relative z-10
                      px-8 sm:px-12 py-12
                      flex flex-col xl:flex-row
                      xl:items-center
                      justify-between gap-10"
          >

            {/* LEFT */}
            <div className="max-w-3xl">

              <p
                className="text-[#dff5b7]
                          text-[13px]
                          tracking-[0.14em]
                          uppercase font-semibold"
              >
                STRUCTURED DELIVERY SYSTEM
              </p>

              <h3
                className="mt-4
                          text-white
                          text-[40px]
                          sm:text-[54px]
                          leading-[0.95]
                          tracking-[-0.05em]
                          font-semibold"
              >
                Built like an extension
                of your internal team.
              </h3>

            </div>

            {/* RIGHT */}
            <div className="grid grid-cols-2 gap-5">

              {[
                "Dedicated Teams",
                "CA Review Layer",
                "White-Label Ready",
                "Workflow SOPs",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="bg-white/10
                            border border-white/10
                            rounded-2xl
                            px-6 py-5
                            text-white/85
                            text-[15px]
                            backdrop-blur-xl"
                >
                  ✓ {item}
                </motion.div>
              ))}

            </div>

          </div>

        </motion.div>

      </div>

    </section>

    {/* ─────────────────── HOW IT WORKS ─────────────────── */}
    <section className="relative py-16 bg-white overflow-hidden">

      {/* GLOW */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
        }}
        className="absolute bottom-[-20%] left-[-10%]
                  w-[700px] h-[700px]
                  bg-[#dff5b7]/20
                  blur-3xl rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">

        {/* TOP */}
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-20 items-end">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <span
              className="inline-flex items-center gap-2
                        border border-[#0d3d43]/10
                        bg-[#f8f8f6]
                        text-[#0d3d43]
                        rounded-full
                        px-5 py-2.5
                        text-[11px]
                        tracking-[0.16em]
                        uppercase font-semibold"
            >

              <span
                className="w-2 h-2 rounded-full
                          bg-[#7cc576]"
              />

              HOW IT WORKS

            </span>

            <h2
              className="mt-8
                        text-[#111]
                        text-[48px]
                        sm:text-[72px]
                        leading-[0.93]
                        tracking-[-0.07em]
                        font-semibold"
            >
              Built like an
              extension of
              your firm.
            </h2>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.9,
              delay: 0.1,
            }}
          >

            <p
              className="text-[#666]
                        text-[19px]
                        leading-[1.9]
                        max-w-2xl"
            >
              FinliGen integrates directly into your accounting
              operations with structured workflows,
              communication systems, and delivery standards.
            </p>

          </motion.div>

        </div>

        {/* TIMELINE */}
        <div className="relative mt-24">

          {/* CONNECTOR LINE */}
          <div
            className="hidden lg:block
                      absolute top-[90px] left-0 right-0
                      h-[1px]
                      bg-gradient-to-r
                      from-[#0d3d43]/0
                      via-[#0d3d43]/20
                      to-[#0d3d43]/0"
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            className="grid lg:grid-cols-3 gap-8"
          >

            {steps.map((step, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{
                  y: -10,
                }}
                className="group relative"
              >

                {/* STEP NUMBER */}
                <motion.div
                  whileHover={{
                    scale: 1.05,
                  }}
                  className="relative z-20
                            w-[90px] h-[90px]
                            mx-auto
                            rounded-[28px]
                            bg-[#0d3d43]/20
                            group-hover:bg-[#0d3d43]
                            group-hover:text-white
                            flex items-center justify-center
                            text-[28px]
                            font-semibold
                            shadow-[0_20px_60px_rgba(13,61,67,0.25)]"
                >
                  0{i + 1}
                </motion.div>

                {/* CARD */}
                <div
                  className="relative mt-8
                            bg-[#fafaf8]
                            border border-[#ececea]
                            rounded-[40px]
                            p-8 sm:p-10
                            overflow-hidden
                            shadow-[0_15px_50px_rgba(0,0,0,0.04)]"
                >

                  {/* GLOW */}
                  <div
                    className="absolute top-0 right-0
                              w-[200px] h-[200px]
                              bg-[#dff5b7]/0
                              group-hover:bg-[#dff5b7]/20
                              blur-3xl
                              transition-all duration-700"
                  />

                  <div className="relative z-10">

                    {/* ICON */}
                    <div
                      className="w-16 h-16 rounded-2xl
                                bg-white
                                border border-[#ececea]
                                text-[#0d3d43]
                                flex items-center justify-center"
                    >
                      <TbStack size={32} />
                    </div>

                    {/* TITLE */}
                    <h3
                      className="mt-8
                                text-[#111]
                                text-[30px]
                                leading-[1.15]
                                tracking-[-0.04em]
                                font-semibold"
                    >
                      {step.title}
                    </h3>

                    {/* DESC */}
                    <p
                      className="mt-6
                                text-[#666]
                                text-[16px]
                                leading-[1.9]"
                    >
                      {step.desc}
                    </p>

                    {/* MINI BOTTOM */}
                    <div
                      className="mt-8 flex items-center gap-3"
                    >

                      <div
                        className="w-10 h-10 rounded-full
                                  group-hover:bg-[#0d3d43]
                                  text-[#0d3d43]
                                  group-hover:text-white
                                  border border-[#0d3d43]
                                  flex items-center justify-center"
                      >
                        ✓
                      </div>

                      <p
                        className="text-[#444]
                                  text-[14px]
                                  font-medium"
                      >
                        Structured workflow delivery
                      </p>

                    </div>

                  </div>

                </div>

              </motion.div>
            ))}

          </motion.div>

        </div>

        {/* BOTTOM PROCESS BAR */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.9,
            delay: 0.2,
          }}
          className="mt-24
                    bg-[#0d3d43]
                    rounded-[40px]
                    overflow-hidden
                    relative"
        >

          {/* GLOW */}
          <div
            className="absolute top-0 right-0
                      w-[400px] h-[400px]
                      bg-[#dff5b7]/20
                      blur-3xl rounded-full"
          />

          <div
            className="relative z-10
                      px-8 sm:px-12 py-12
                      grid lg:grid-cols-2 gap-12 items-center"
          >

            {/* LEFT */}
            <div>

              <p
                className="text-[#dff5b7]
                          text-[13px]
                          tracking-[0.14em]
                          uppercase font-semibold"
              >
                DELIVERY INFRASTRUCTURE
              </p>

              <h3
                className="mt-4
                          text-white
                          text-[40px]
                          sm:text-[54px]
                          leading-[0.95]
                          tracking-[-0.05em]
                          font-semibold"
              >
                Designed for
                long-term operational
                support.
              </h3>

            </div>

            {/* RIGHT */}
            <div className="grid grid-cols-2 gap-5">

              {[
                "Workflow SOPs",
                "Dedicated Managers",
                "Structured Review Layer",
                "Fast Turnaround",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="bg-white/10
                            border border-white/10
                            rounded-2xl
                            px-6 py-5
                            text-white/85
                            text-[15px]
                            backdrop-blur-xl"
                >
                  ✓ {item}
                </motion.div>
              ))}

            </div>

          </div>

        </motion.div>

      </div>

    </section>

    {/* ─────────────────── BUSY SEASON SECTION ─────────────────── */}
    <section className="relative py-16 overflow-hidden bg-[#0d3d43]">

      {/* GRID */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* GLOWS */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-20%] right-[-10%]
                  w-[700px] h-[700px]
                  bg-[#dff5b7]/20
                  blur-3xl rounded-full"
      />

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-20%] left-[-10%]
                  w-[500px] h-[500px]
                  bg-white/10
                  blur-3xl rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">

        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-20 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            {/* TAG */}
            <span
              className="inline-flex items-center
                        gap-2
                        border border-white/10
                        bg-white/5 backdrop-blur-xl
                        text-[#dff5b7]
                        rounded-full
                        px-5 py-2.5
                        text-[11px]
                        tracking-[0.16em]
                        uppercase font-semibold"
            >

              <span
                className="w-2 h-2 rounded-full
                          bg-[#dff5b7]"
              />

              BUSY SEASON SUPPORT

            </span>

            {/* HEADING */}
            <h2
              className="mt-8
                        text-white
                        text-[48px]
                        sm:text-[76px]
                        leading-[0.92]
                        tracking-[-0.07em]
                        font-semibold"
            >
              Busy season
              shouldn’t feel
              like survival mode.
            </h2>

            {/* TEXT */}
            <p
              className="mt-8
                        text-white/70
                        text-[19px]
                        leading-[1.9]
                        max-w-2xl"
            >
              Most firm's lose profitability during tax season
              because their team becomes the bottleneck.
              FinliGen gives your firm scalable offshore capacity
              exactly when workload spikes.
            </p>

            {/* FLOATING STATS */}
            <motion.div
              whileHover={{ y: -6 }}
              className="mt-14
                        inline-flex items-center gap-6
                        bg-white/5 backdrop-blur-xl
                        border border-white/10
                        rounded-[30px]
                        px-7 py-6"
            >

              <div
                className="w-16 h-16 rounded-2xl
                          bg-[#dff5b7]
                          text-[#0d3d43]
                          flex items-center justify-center"
              >
                <AiOutlineLineChart size={32} />
              </div>

              <div>

                <p
                  className="text-white/60
                            text-[13px]"
                >
                  Seasonal Capacity Increase
                </p>

                <h3
                  className="mt-2
                            text-white
                            text-[42px]
                            leading-none
                            tracking-[-0.06em]
                            font-semibold"
                >
                  +62%
                </h3>

              </div>

            </motion.div>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            className="relative"
          >

            {/* MAIN CARD */}
            <div
              className="relative
                        bg-white/5 backdrop-blur-xl
                        border border-white/10
                        rounded-[40px]
                        overflow-hidden"
            >

              {/* TOP BAR */}
              <div
                className="px-8 py-7
                          border-b border-white/10
                          flex items-center justify-between"
              >

                <div>

                  <p
                    className="text-white/50
                              text-[13px]"
                  >
                    Filing Season Operations
                  </p>

                  <h3
                    className="mt-1
                              text-white
                              text-[30px]
                              leading-none
                              tracking-[-0.04em]
                              font-semibold"
                  >
                    Scalable Support
                  </h3>

                </div>

                <div
                  className="w-14 h-14 rounded-2xl
                            bg-white/10
                            text-[#dff5b7]
                            flex items-center justify-center"
                >
                  <TbNorthStar size={30} />
                </div>

              </div>

              {/* ITEMS */}
              <div className="p-8 space-y-5">

                {[
                  "Scale your team temporarily during filing season",
                  "Reduce burnout for internal staff",
                  "Increase turnaround speed without sacrificing quality",
                  "Take on more clients without hiring locally",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    whileHover={{
                      x: 6,
                    }}
                    className="group
                              relative
                              flex items-start gap-5
                              bg-white/5
                              rounded-[24px]
                              p-6 overflow-hidden"
                  >

                    {/* HOVER GLOW */}
                    <div
                      className="absolute top-0 right-0
                                w-[150px] h-[150px]
                                bg-[#dff5b7]/0
                                group-hover:bg-[#dff5b7]/10
                                blur-3xl
                                transition-all duration-700"
                    />

                    {/* ICON */}
                    <div
                      className="relative z-10
                                w-12 h-12 rounded-xl
                                bg-[#dff5b7]
                                text-[#0d3d43]
                                flex items-center justify-center
                                flex-shrink-0"
                    >
                      ✓
                    </div>

                    {/* TEXT */}
                    <p
                      className="relative z-10
                                text-white/85
                                text-[16px]
                                leading-[1.9]"
                    >
                      {item}
                    </p>

                  </motion.div>
                ))}

              </div>

            </div>

            {/* FLOATING MINI CARD */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.9,
                delay: 0.3,
              }}
              animate={{
                y: [0, -10, 0],
              }}
              className="absolute -bottom-36 -right-6
                        sm:-bottom-2 sm:-right-30
                        bg-white
                        rounded-[28px]
                        p-6
                        shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
            >

              <p
                className="text-[#888]
                          text-[13px]"
              >
                Average Review Reduction
              </p>

              <h3
                className="mt-2
                          text-[#111]
                          text-[48px]
                          leading-none
                          tracking-[-0.06em]
                          font-semibold"
              >
                41%
              </h3>

              <p
                className="mt-3
                          text-[#666]
                          text-[14px]
                          leading-[1.7]
                          max-w-[220px]"
              >
                Less internal review time
                during peak filing periods.
              </p>

            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>

    {/* ─────────────────── TEAM STRUCTURE SECTION ─────────────────── */}
    <section className="relative py-16 overflow-hidden bg-white">

      {/* GLOW */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute top-[-20%] left-[-10%]
                  w-[700px] h-[700px]
                  bg-[#dff5b7]/20
                  blur-3xl rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">

        {/* TOP */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-5xl mx-auto text-center"
        >

          <span
            className="inline-flex items-center gap-2
                      border border-[#0d3d43]/10
                      bg-[#f8f8f6]
                      rounded-full
                      px-5 py-2.5
                      text-[#0d3d43]
                      text-[11px]
                      tracking-[0.16em]
                      uppercase font-semibold"
          >

            <span
              className="w-2 h-2 rounded-full
                        bg-[#7cc576]"
            />

            TEAM STRUCTURE

          </span>

          <h2
            className="mt-8
                      text-[#111]
                      text-[48px]
                      sm:text-[72px]
                      leading-[0.93]
                      tracking-[-0.07em]
                      font-semibold"
          >
            You get a dedicated
            team — not random
            freelancers.
          </h2>

        </motion.div>

        {/* ORGANIZATION FLOW */}
        <div className="relative mt-24">

          {/* CONNECTOR LINE */}
          <div
            className="hidden lg:block
                      absolute top-[110px] left-[16%] right-[16%]
                      h-[1px]
                      bg-gradient-to-r
                      from-[#0d3d43]/0
                      via-[#0d3d43]/20
                      to-[#0d3d43]/0"
          />

          {/* TEAM GRID */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            className="grid md:grid-cols-3 gap-8"
          >

            {[
              {
                title: "Junior Accountants",
                desc:
                  "Handle bookkeeping, reconciliation, transaction categorization, and data preparation.",
                metric: "24/7",
                sub: "Operational support",
              },
              {
                title: "Senior Review Layer",
                desc:
                  "Every deliverable passes through experienced CA reviewers before submission.",
                metric: "99.5%",
                sub: "Accuracy rate",
              },
              {
                title: "Engagement Manager",
                desc:
                  "Your primary point of contact for workflow management, communication, and deadlines.",
                metric: "1:1",
                sub: "Direct coordination",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{
                  y: -10,
                }}
                className="group relative"
              >

                {/* TOP ICON NODE */}
                <div
                  className="relative z-20
                            w-[110px] h-[110px]
                            mx-auto
                            rounded-[32px]
                            bg-[#0d3d43]/20
                            group-hover:bg-[#0d3d43]
                            text-[#0d3d43]
                            group-hover:text-white
                            flex items-center justify-center
                            shadow-[0_25px_70px_rgba(13,61,67,0.25)]"
                >

                  <div
                    className="absolute inset-0
                              rounded-[32px]
                              border border-white/10"
                  />

                  <TbStack size={42} />

                </div>

                {/* CARD */}
                <div
                  className="relative mt-8
                            bg-[#fafaf8]
                            border border-[#ececea]
                            rounded-[40px]
                            overflow-hidden
                            shadow-[0_15px_50px_rgba(0,0,0,0.04)]"
                >

                  {/* GLOW */}
                  <div
                    className="absolute top-0 right-0
                              w-[220px] h-[220px]
                              bg-[#dff5b7]/0
                              group-hover:bg-[#dff5b7]/20
                              blur-3xl
                              transition-all duration-700"
                  />

                  <div className="relative z-10 p-8 sm:p-10">

                    {/* STEP */}
                    <div
                      className="inline-flex items-center
                                justify-center
                                w-12 h-12 rounded-full
                                bg-white
                                border border-[#ececea]
                                text-[#0d3d43]
                                text-[15px]
                                font-semibold"
                    >
                      0{i + 1}
                    </div>

                    {/* TITLE */}
                    <h3
                      className="mt-8
                                text-[#111]
                                text-[32px]
                                leading-[1.1]
                                tracking-[-0.04em]
                                font-semibold"
                    >
                      {item.title}
                    </h3>

                    {/* DESC */}
                    <p
                      className="mt-6
                                text-[#666]
                                text-[16px]
                                leading-[1.9]"
                    >
                      {item.desc}
                    </p>

                    {/* METRIC BAR */}
                    <div
                      className="mt-10
                                bg-white
                                border border-[#ececea]
                                rounded-[24px]
                                p-5 flex items-center justify-between"
                    >

                      <div>

                        <p
                          className="text-[#888]
                                    text-[12px]"
                        >
                          Performance Metric
                        </p>

                        <h4
                          className="mt-1
                                    text-[#111]
                                    text-[30px]
                                    leading-none
                                    tracking-[-0.04em]
                                    font-semibold"
                        >
                          {item.metric}
                        </h4>

                      </div>

                      <div
                        className="w-12 h-12 rounded-xl
                                  bg-white
                                  text-[#0d3d43]
                                  group-hover:bg-[#0d3d43]
                                  group-hover:text-white
                                  border border-[#0d3d43]
                                  flex items-center justify-center"
                      >
                        ✓
                      </div>

                    </div>

                    {/* SUB */}
                    <p
                      className="mt-4
                                text-[#666]
                                text-[14px]"
                    >
                      {item.sub}
                    </p>

                  </div>

                </div>

              </motion.div>
            ))}

          </motion.div>

        </div>

        {/* BOTTOM ENTERPRISE BAR */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.9,
            delay: 0.2,
          }}
          className="mt-24
                    bg-[#0d3d43]
                    rounded-[42px]
                    overflow-hidden
                    relative"
        >

          {/* GLOW */}
          <div
            className="absolute top-0 right-0
                      w-[400px] h-[400px]
                      bg-[#dff5b7]/20
                      blur-3xl rounded-full"
          />

          <div
            className="relative z-10
                      px-8 sm:px-12 py-12
                      grid lg:grid-cols-2 gap-12 items-center"
          >

            {/* LEFT */}
            <div>

              <p
                className="text-[#dff5b7]
                          text-[13px]
                          tracking-[0.14em]
                          uppercase font-semibold"
              >
                STRUCTURED OPERATIONS
              </p>

              <h3
                className="mt-4
                          text-white
                          text-[40px]
                          sm:text-[56px]
                          leading-[0.95]
                          tracking-[-0.05em]
                          font-semibold"
              >
                Every engagement
                follows a layered
                review system.
              </h3>

            </div>

            {/* RIGHT */}
            <div className="grid grid-cols-2 gap-5">

              {[
                "Dedicated Teams",
                "Workflow SOPs",
                "Senior CA Review",
                "Fast Communication",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5 }}
                  className="bg-white/10
                            border border-white/10
                            rounded-2xl
                            px-6 py-5
                            text-white/85
                            text-[15px]
                            backdrop-blur-xl"
                >
                  ✓ {item}
                </motion.div>
              ))}

            </div>

          </div>

        </motion.div>

      </div>

    </section>

    {/* ─────────────────── TESTIMONIAL SECTION ─────────────────── */}
    <section className="relative py-16 overflow-hidden bg-[#f5f5f3]">

      {/* GRID */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#0d3d43 1px, transparent 1px), linear-gradient(to right, #0d3d43 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* GLOW */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-20%] right-[-10%]
                  w-[700px] h-[700px]
                  bg-[#dff5b7]/20
                  blur-3xl rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">

        {/* TOP */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-5xl mx-auto text-center"
        >

          <span
            className="inline-flex items-center gap-2
                      border border-[#0d3d43]/10
                      bg-white/70 backdrop-blur-xl
                      text-[#0d3d43]
                      rounded-full
                      px-5 py-2.5
                      text-[11px]
                      tracking-[0.16em]
                      uppercase font-semibold"
          >

            <span
              className="w-2 h-2 rounded-full
                        bg-[#7cc576]"
            />

            CLIENT TESTIMONIAL

          </span>

          <h2
            className="mt-8
                      text-[#111]
                      text-[48px]
                      sm:text-[72px]
                      leading-[0.93]
                      tracking-[-0.07em]
                      font-semibold"
          >
            Trusted by firm's
            that need reliable
            delivery at scale.
          </h2>

        </motion.div>

        {/* MAIN TESTIMONIAL CARD */}
        <motion.div
          initial={{ opacity: 0, y: 90 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{
            y: -8,
          }}
          className="relative mt-20"
        >

          {/* LARGE QUOTE */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-[-40px] right-[5%]
                      hidden lg:block
                      text-[#0d3d43]/5"
          >
            <RiDoubleQuotesL size={260} />
          </motion.div>

          {/* MAIN CARD */}
          <div
            className="relative
                      bg-white/85 backdrop-blur-2xl
                      border border-[#ececea]
                      rounded-[48px]
                      overflow-hidden
                      shadow-[0_25px_90px_rgba(0,0,0,0.06)]"
          >

            {/* TOP BAR */}
            <div
              className="px-8 sm:px-12 py-8
                        border-b border-[#ececea]
                        flex flex-col sm:flex-row
                        sm:items-center
                        justify-between gap-6"
            >

              {/* LEFT */}
              <div className="flex items-center gap-5">

                <div
                  className="w-20 h-20 rounded-[26px]
                            bg-[#0d3d43]
                            text-white
                            flex items-center justify-center
                            shadow-[0_20px_50px_rgba(13,61,67,0.2)]"
                >
                  <RiDoubleQuotesL size={34} />
                </div>

                <div>

                  <p
                    className="text-[#888]
                              text-[13px]"
                  >
                    Long-Term CPA Partner
                  </p>

                  <h3
                    className="mt-1
                              text-[#111]
                              text-[32px]
                              leading-none
                              tracking-[-0.04em]
                              font-semibold"
                  >
                    Client Success Story
                  </h3>

                </div>

              </div>

              {/* RIGHT STATS */}
              <div className="flex flex-wrap gap-4">

                {[
                  "18+ Months",
                  "99.5% Accuracy",
                  "40% Outsourced",
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -4 }}
                    className="bg-[#f8f8f6]
                              border border-[#ececea]
                              rounded-full
                              px-5 py-3
                              text-[#444]
                              text-[14px]"
                  >
                    ✓ {item}
                  </motion.div>
                ))}

              </div>

            </div>

            {/* MAIN CONTENT */}
            <div className="relative px-8 sm:px-12 py-12 overflow-hidden">

              {/* GLOW */}
              <div
                className="absolute top-0 right-0
                          w-[300px] h-[300px]
                          bg-[#dff5b7]/20
                          blur-3xl"
              />

              <div className="relative z-10">

                {/* QUOTE */}
                <motion.p
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{
                    duration: 0.9,
                    delay: 0.1,
                  }}
                  className="text-[#111]
                            text-[24px]
                            sm:text-[34px]
                            leading-[1.7]
                            tracking-[-0.03em]
                            max-w-5xl"
                >
                  “The error rate over 18 months has been
                  essentially zero. For a firm our size,
                  that matters.”
                </motion.p>

                {/* ATTRIBUTION */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{
                    duration: 0.9,
                    delay: 0.2,
                  }}
                  className="mt-14
                            flex flex-col lg:flex-row
                            lg:items-center
                            justify-between gap-8"
                >

                  {/* PROFILE */}
                  <div className="flex items-center gap-5">

                    <div
                      className="relative
                                w-20 h-20 rounded-full
                                bg-[#0d3d43]
                                text-white
                                flex items-center justify-center
                                text-[24px]
                                font-semibold
                                shadow-[0_20px_50px_rgba(13,61,67,0.2)]"
                    >

                      {/* INNER RING */}
                      <div
                        className="absolute inset-[6px]
                                  rounded-full
                                  border border-white/20"
                      />

                      RD

                    </div>

                    <div>

                      <h4
                        className="text-[#111]
                                  text-[26px]
                                  leading-none
                                  tracking-[-0.03em]
                                  font-semibold"
                      >
                        Robert D., EA
                      </h4>

                      <p
                        className="mt-3
                                  text-[#666]
                                  text-[15px]
                                  leading-[1.8]"
                      >
                        Principal · Tax & Advisory Firm · Texas
                      </p>

                    </div>

                  </div>

                  {/* PERFORMANCE BOX */}
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-[#0d3d43]
                              rounded-[28px]
                              px-8 py-6
                              text-white
                              shadow-[0_20px_60px_rgba(13,61,67,0.2)]"
                  >

                    <p
                      className="text-white/60
                                text-[13px]"
                    >
                      Operational Impact
                    </p>

                    <h3
                      className="mt-2
                                text-[46px]
                                leading-none
                                tracking-[-0.06em]
                                font-semibold"
                    >
                      +6
                    </h3>

                    <p
                      className="mt-3
                                text-white/75
                                text-[14px]
                                leading-[1.7]
                                max-w-[220px]"
                    >
                      Additional clients onboarded
                      without expanding internal staff.
                    </p>

                  </motion.div>

                </motion.div>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>

    {/* ─────────────────── FAQ SECTION ─────────────────── */}
    <section className="relative py-16 overflow-hidden bg-white">

      {/* GLOW */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
        }}
        className="absolute top-[-20%] right-[-10%]
                  w-[700px] h-[700px]
                  bg-[#dff5b7]/20
                  blur-3xl rounded-full"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">

        {/* TOP */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center"
        >

          <span
            className="inline-flex items-center gap-2
                      border border-[#0d3d43]/10
                      bg-[#f8f8f6]
                      rounded-full
                      px-5 py-2.5
                      text-[#0d3d43]
                      text-[11px]
                      tracking-[0.16em]
                      uppercase font-semibold"
          >

            <span
              className="w-2 h-2 rounded-full
                        bg-[#7cc576]"
            />

            FAQ

          </span>

          <h2
            className="mt-8
                      text-[#111]
                      text-[48px]
                      sm:text-[72px]
                      leading-[0.93]
                      tracking-[-0.07em]
                      font-semibold"
          >
            Common questions
            from CPA firm's.
          </h2>

        </motion.div>

        {/* FAQ LIST */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="mt-20 space-y-5"
        >

          {[
            {
              q: "Do you work white-label?",
              a: "Yes. Your clients never interact with FinliGen directly.",
            },
            {
              q: "Which accounting software do you support?",
              a: "QuickBooks, Xero, Drake, UltraTax, CCH, and more.",
            },
            {
              q: "How fast can you onboard?",
              a: "Most firm's are fully operational within 5–7 business days.",
            },
            {
              q: "Can we scale during busy season only?",
              a: "Yes. Many CPA firm's use us for seasonal capacity expansion.",
            },
          ].map((faq, i) => {
            const isOpen = openFaq === i;

            return (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{
                  y: -4,
                }}
                className="group relative
                          bg-[#fafaf8]
                          border border-[#ececea]
                          rounded-[32px]
                          overflow-hidden
                          shadow-[0_10px_40px_rgba(0,0,0,0.03)]"
              >

                {/* GLOW */}
                <div
                  className="absolute top-0 right-0
                            w-[200px] h-[200px]
                            bg-[#dff5b7]/0
                            group-hover:bg-[#dff5b7]/20
                            blur-3xl
                            transition-all duration-700"
                />

                {/* BUTTON */}
                <button
                  onClick={() =>
                    setOpenFaq(isOpen ? null : i)
                  }
                  className="relative z-10
                            w-full
                            px-7 sm:px-8 py-7
                            flex items-center justify-between
                            gap-6
                            text-left"
                >

                  {/* QUESTION */}
                  <div>

                    <h3
                      className="text-[#111]
                                text-[22px]
                                sm:text-[26px]
                                leading-[1.35]
                                tracking-[-0.03em]
                                font-semibold"
                    >
                      {faq.q}
                    </h3>

                  </div>

                  {/* ICON */}
                  <motion.div
                    animate={{
                      rotate: isOpen ? 180 : 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="w-12 h-12 rounded-full
                              bg-white
                              border border-[#ececea]
                              text-[#0d3d43]
                              flex items-center justify-center
                              flex-shrink-0"
                  >
                    {isOpen ? (
                      <FiMinus size={20} />
                    ) : (
                      <FiPlus size={20} />
                    )}
                  </motion.div>

                </button>

                {/* ANSWER */}
                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="overflow-hidden"
                >

                  <div
                    className="relative z-10
                              px-7 sm:px-8
                              pb-6
                              pr-20"
                  >

                    <div
                      className="h-[1px]
                                bg-[#ececea]
                                mb-6"
                    />

                    <p
                      className="text-[#666]
                                text-[17px]
                                leading-[1.9]
                                max-w-3xl"
                    >
                      {faq.a}
                    </p>

                  </div>

                </motion.div>

              </motion.div>
            );
          })}

        </motion.div>

        {/* BOTTOM SUPPORT BAR */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{
            duration: 0.9,
            delay: 0.2,
          }}
          className="mt-20
                    bg-[#0d3d43]
                    rounded-[40px]
                    overflow-hidden
                    relative"
        >

          {/* GLOW */}
          <div
            className="absolute top-0 right-0
                      w-[400px] h-[400px]
                      bg-[#dff5b7]/20
                      blur-3xl rounded-full"
          />

          <div
            className="relative z-10
                      px-8 sm:px-12 py-12
                      flex flex-col lg:flex-row
                      lg:items-center
                      justify-between gap-10"
          >

            {/* LEFT */}
            <div className="max-w-2xl">

              <p
                className="text-[#dff5b7]
                          text-[13px]
                          tracking-[0.14em]
                          uppercase font-semibold"
              >
                NEED MORE INFORMATION?
              </p>

              <h3
                className="mt-4
                          text-white
                          text-[40px]
                          sm:text-[54px]
                          leading-[0.95]
                          tracking-[-0.05em]
                          font-semibold"
              >
                Speak directly with
                our CPA outsourcing team.
              </h3>

            </div>

            {/* BUTTON */}
            <motion.button
              whileHover={{
                y: -4,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="group
                        bg-white
                        hover:bg-[#f2f2f0]
                        text-[#111]
                        px-8 py-4
                        rounded-2xl
                        text-[15px]
                        font-medium
                        transition-all duration-300
                        flex items-center gap-3"
            >

              Schedule a Discovery Call

              <motion.div
                animate={{
                  x: [0, 4, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                }}
              >
                <LuArrowUpRight size={18} />
              </motion.div>

            </motion.button>

          </div>

        </motion.div>

      </div>

    </section>

    {/* ─────────────────── FINAL CTA SECTION ─────────────────── */}
    <section className="relative py-16 overflow-hidden bg-[#0d3d43]">

      {/* GRID */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* GLOWS */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-20%] right-[-10%]
                  w-[700px] h-[700px]
                  bg-[#dff5b7]/20
                  blur-3xl rounded-full"
      />

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-20%] left-[-10%]
                  w-[500px] h-[500px]
                  bg-white/10
                  blur-3xl rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">

        <div className="grid lg:grid-cols-[1fr_0.9fr] gap-20 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            {/* TAG */}
            <span
              className="inline-flex items-center
                        gap-2
                        border border-white/10
                        bg-white/5 backdrop-blur-xl
                        text-[#dff5b7]
                        rounded-full
                        px-5 py-2.5
                        text-[11px]
                        tracking-[0.16em]
                        uppercase font-semibold"
            >

              <span
                className="w-2 h-2 rounded-full
                          bg-[#dff5b7]"
              />

              READY TO SCALE?

            </span>

            {/* HEADING */}
            <h2
              className="mt-8
                        text-white
                        text-[52px]
                        sm:text-[86px]
                        leading-[0.9]
                        tracking-[-0.08em]
                        font-semibold"
            >
              Build your
              offshore
              accounting
              team with
              FinliGen.
            </h2>

            {/* TEXT */}
            <p
              className="mt-8
                        text-white/70
                        text-[20px]
                        leading-[1.9]
                        max-w-3xl"
            >
              Dedicated offshore support for CPA firm's
              that need more capacity, higher margins,
              and reliable delivery during busy season.
            </p>

            {/* BUTTONS */}
            <div className="mt-12 flex flex-wrap gap-4">

              <motion.button
                whileHover={{
                  y: -5,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="group
                          bg-white
                          hover:bg-[#f2f2f0]
                          text-[#111]
                          px-8 py-4
                          rounded-2xl
                          text-[15px]
                          font-medium
                          transition-all duration-300
                          flex items-center gap-3"
              >

                Book a Discovery Call

                <motion.div
                  animate={{
                    x: [0, 4, 0],
                  }}
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                  }}
                >
                  <LuArrowUpRight size={18} />
                </motion.div>

              </motion.button>

              <motion.button
                whileHover={{
                  y: -5,
                }}
                className="border border-white/15
                          bg-white/5 backdrop-blur-xl
                          hover:bg-white/10
                          text-white
                          px-8 py-4
                          rounded-2xl
                          text-[15px]
                          font-medium
                          transition-all duration-300"
              >
                Get Pricing →
              </motion.button>

            </div>

            {/* TRUST BADGES */}
            <div className="mt-14 flex flex-wrap gap-4">

              {[
                "White-Label Ready",
                "US GAAP Trained",
                "Dedicated Teams",
                "CA Reviewed",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4 }}
                  className="bg-white/5
                            border border-white/10
                            backdrop-blur-xl
                            rounded-full
                            px-5 py-3
                            text-white/80
                            text-[10px]"
                >
                  ✓ {item}
                </motion.div>
              ))}

            </div>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative block mt-10 lg:mt-0"
          >

            {/* MAIN CARD */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative
                        bg-white/10 backdrop-blur-2xl
                        border border-white/10
                        rounded-[28px] sm:rounded-[42px]
                        mx-auto max-w-[520px]
                        overflow-hidden
                        shadow-[0_30px_100px_rgba(0,0,0,0.2)]"
            >

              {/* TOP */}
              <div
                className="px-8 py-7
                          border-b border-white/10
                          flex items-center justify-between"
              >

                <div>

                  <p
                    className="text-white/50
                              text-[13px]"
                  >
                    CPA Firm Growth
                  </p>

                  <h3
                    className="mt-1
                              text-white
                              text-[32px]
                              leading-none
                              tracking-[-0.04em]
                              font-semibold"
                  >
                    Offshore Capacity
                  </h3>

                </div>

                <div
                  className="w-14 h-14 rounded-2xl
                            bg-[#dff5b7]
                            text-[#0d3d43]
                            flex items-center justify-center"
                >
                  <AiOutlineLineChart size={30} />
                </div>

              </div>

              {/* CONTENT */}
              <div className="p-8 space-y-8">

                {/* BIG METRIC */}
                <div>

                  <p
                    className="text-white/60
                              text-[13px]"
                  >
                    Average Client Growth
                  </p>

                  <h2
                    className="mt-3
                              text-white
                              text-[92px]
                              leading-none
                              tracking-[-0.08em]
                              font-semibold"
                  >
                    +37%
                  </h2>

                </div>

                {/* GRAPH */}
                <div
                  className="flex items-end gap-3 h-[120px]"
                >

                  {[35, 48, 55, 62, 70, 88, 100].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      transition={{
                        duration: 0.9,
                        delay: i * 0.06,
                      }}
                      className="flex-1 rounded-full
                                bg-gradient-to-t
                                from-[#dff5b7]
                                to-white"
                    />
                  ))}

                </div>

                {/* MINI GRID */}
                <div className="grid grid-cols-2 gap-5">

                  {[
                    {
                      title: "Accuracy",
                      value: "99.5%",
                    },
                    {
                      title: "Turnaround",
                      value: "48hr",
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -5 }}
                      className="bg-white/5
                                border border-white/10
                                rounded-[24px]
                                p-5"
                    >

                      <p
                        className="text-white/60
                                  text-[13px]"
                      >
                        {item.title}
                      </p>

                      <h3
                        className="mt-3
                                  text-white
                                  text-[38px]
                                  leading-none
                                  tracking-[-0.05em]
                                  font-semibold"
                      >
                        {item.value}
                      </h3>

                    </motion.div>
                  ))}

                </div>

              </div>

            </motion.div>

            {/* FLOATING CARD */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-35 left-30
                        bg-white
                        rounded-[28px]
                        p-6
                        shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
            >

              <p
                className="text-[#888]
                          text-[13px]"
              >
                Client Retention
              </p>

              <h3
                className="mt-2
                          text-[#111]
                          text-[52px]
                          leading-none
                          tracking-[-0.06em]
                          font-semibold"
              >
                98%
              </h3>

              <p
                className="mt-3
                          text-[#666]
                          text-[14px]
                          leading-[1.7]
                          max-w-[220px]"
              >
                Long-term embedded accounting
                partnerships with CPA firm's.
              </p>

            </motion.div>

          </motion.div>

        </div>

      </div>

    </section>

    </div>
  );
}