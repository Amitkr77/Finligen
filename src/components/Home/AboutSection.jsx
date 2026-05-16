import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/* ─── Animated counter hook ─────────────────────────── */
function useCounter(target, duration = 1800) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * ease));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, duration]);
  return value;
}

/* ─── Globe SVG ─────────────────────────────────────── */
function Globe({ size = 28 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
    >
      <circle cx="12" cy="12" r="10" />
      <ellipse cx="12" cy="12" rx="4" ry="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
    </svg>
  );
}

const BARS = [
  { h: "28%", delay: 0.05 },
  { h: "44%", delay: 0.1 },
  { h: "58%", delay: 0.15 },
  { h: "50%", delay: 0.18 },
  { h: "100%", delay: 0.2, active: true },
  { h: "72%", delay: 0.25 },
  { h: "85%", delay: 0.3 },
];

const MONTHS = ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"];

const FLAGS = [
  { code: "us", label: "USA" },
  { code: "de", label: "Germany" },
  { code: "jp", label: "Japan" },
  { code: "ng", label: "Nigeria" },
];

function Card({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 0.61, 0.36, 1] }}
      whileHover={{
        y: -6,
        transition: { duration: 0.35, ease: [0.22, 0.61, 0.36, 1] },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function FloatingChip({
  label,
  value,
  sub,
  floatDelay = 0,
  accent = false,
  className = "",
}) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 4 + floatDelay,
        repeat: Infinity,
        ease: "easeInOut",
        delay: floatDelay,
      }}
      className={[
        "absolute z-10 rounded-xl px-4 py-3 backdrop-blur-md",
        accent
          ? "bg-[#ecfdf3] border border-[rgba(29,158,117,0.3)]"
          : "bg-white/85 border border-[rgba(255,255,255,0.1)]",
        className,
      ].join(" ")}
    >
      <p className="text-[10px] tracking-[0.15em] uppercase text-[#667085] mb-1">
        {label}
      </p>
      <p
        className={`font-['Instrument_Serif'] text-[22px] leading-none ${accent ? "text-[#1d9e75]" : "text-[#111827]"}`}
      >
        {value}
      </p>
      {sub && <p className="text-[11px] text-[#667085] mt-0.5">{sub}</p>}
    </motion.div>
  );
}

export default function AboutSection() {
  const revenue = useCounter(12000);

  return (
    <section
      className="relative w-full bg-[#f6f5f2] py-20 md:py-28 overflow-hidden"
      style={{ fontFamily: "'Satoshi', 'DM Sans', sans-serif" }}
    >
      {/* Ambient radial glow */}
      <div
        className="pointer-events-none absolute -top-48 left-1/2 -translate-x-1/2 w-[900px] h-[500px]"
        style={{
          background:
            "radial-gradient(ellipse at center,rgba(29,158,117,.08) 0%,transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[#3f655b] text-[11px] sm:text-[13px]
                         font-semibold tracking-[0.18em] uppercase"
          >
            ABOUT US
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="mt-3 text-[#050816] text-[28px] sm:text-[38px]
                         md:text-[52px] leading-[1.03] tracking-[-0.05em] font-semibold"
          >
            One platform for all your
            <br />
            manufacturing needs
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mt-3 sm:mt-4 text-[#666] text-[13px] sm:text-[14px]
                         leading-[1.7] max-w-[700px] mx-auto"
          >
            Remove operational friction and streamline your manufacturing
            workflow with smart automation.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-3.5">
          {/* ── LEFT CARD ── */}
          <Card
            delay={0}
            className="relative rounded-[20px] overflow-hidden min-h-[520px] flex flex-col
             bg-white/80
border-[#dfe5df]
backdrop-blur-xl
shadow-[0_10px_40px_rgba(0,0,0,0.06)] p-8 pb-0"
          >
            <h3
              className="relative z-10 text-[clamp(26px,4vw,40px)] leading-[1.1] text-[#111827]"
              style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
            >
              Grow production
              <br />
              revenue, faster
            </h3>

            {/* Revenue block */}
            <div className="relative z-10 mt-auto pb-6">
              <p className="text-[10px] tracking-[0.18em] uppercase text-[rgba(240,237,232,0.35)] mb-2">
                Monthly Revenue
              </p>
              <p
                className="text-[clamp(40px,6vw,58px)] leading-none text-[#111827] tabular-nums"
                style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
              >
                ${revenue.toLocaleString()}
              </p>
              <span
                className="inline-flex items-center gap-1.5 mt-3 rounded-full px-3 py-1
                bg-[rgba(29,158,117,0.15)] border border-[rgba(29,158,117,0.3)] text-[#1d9e75] text-[11px] font-semibold"
              >
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <polyline points="18 15 12 9 6 15" />
                </svg>
                +24.5% vs last month
              </span>
            </div>

            {/* Chart bars */}
            <div className="relative z-10 mt-4">
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 1 }}
                className="absolute -top-8 left-[calc(57%-18px)] -translate-x-1/2
                  bg-[#1d9e75] text-white text-[11px] font-semibold
                  px-3 py-1 rounded-full whitespace-nowrap pointer-events-none z-20"
              >
                $12,000 ↑
                <span
                  className="absolute top-full left-1/2 -translate-x-1/2
                  border-[5px] border-transparent border-t-[#1d9e75]"
                />
              </motion.div>

              <div className="flex items-end gap-1.5 h-40">
                {BARS.map((bar, i) => (
                  <motion.div
                    key={i}
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: false }}
                    transition={{
                      duration: 0.6,
                      delay: bar.delay,
                      ease: [0.22, 0.61, 0.36, 1],
                    }}
                    style={{ height: bar.h, originY: 1 }}
                    className={`flex-1 rounded-t-md ${
                      bar.active
                        ? "bg-[#1d9e75] shadow-[0_0_22px_rgba(29,158,117,0.45)]"
                        : "bg-[#e4ebe5]"
                    }`}
                  />
                ))}
              </div>

              <div className="flex justify-between pt-2 pb-6 border-t border-[#dfe7e2]">
                {MONTHS.map((m, i) => (
                  <span
                    key={m}
                    className={`flex-1 text-center text-[10px] tracking-wider
                    ${i === 4 ? "text-[rgba(29,158,117,0.8)] font-semibold" : "text-[#98a2b3]"}`}
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </Card>

          {/* ── RIGHT CARD ── */}
          <Card
            delay={0.12}
            className="relative rounded-[20px] overflow-hidden min-h-[520px] flex flex-col
              bg-[#f8faf8]
border-[#e6ebe7]
shadow-[0_10px_40px_rgba(0,0,0,0.05)] p-8"
          >
            <h3
              className="relative z-30 text-[clamp(22px,3.5vw,36px)] leading-[1.1] text-[#111827] max-w-[280px] mb-8"
              style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
            >
              Connect across the global network
            </h3>

            {/* Globe stage */}
            <div className="relative flex-1 flex items-center justify-center min-h-[220px]">
              {/* SVG connector lines */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-20"
                viewBox="0 0 400 280"
                preserveAspectRatio="xMidYMid meet"
              >
                {[
                  { x1: 80, y1: 95, x2: 192, y2: 138 },
                  { x1: 318, y1: 65, x2: 212, y2: 136 },
                  { x1: 198, y1: 238, x2: 200, y2: 162 },
                ].map((l, i) => (
                  <g key={i}>
                    <line
                      {...l}
                      stroke="rgba(29,158,117,0.2)"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                    />
                    <circle
                      cx={l.x1}
                      cy={l.y1}
                      r="3"
                      fill="rgba(29,158,117,0.55)"
                    />
                  </g>
                ))}
              </svg>

              {/* Rings */}
              {[260, 190, 120].map((size, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="absolute rounded-full border border-[#dfe7e2]"
                  style={{ width: size, height: size }}
                />
              ))}

              {/* Core */}
              <div
                className="relative z-30 w-[60px] h-[60px] rounded-full flex items-center justify-center
                bg-[#ecfdf3] border border-[rgba(29,158,117,0.35)] text-[#1d9e75]"
              >
                <Globe size={28} />
              </div>

              <FloatingChip
                label="Factory output"
                value="$25k"
                sub="This week"
                className="left-0 top-[15%]"
                floatDelay={0}
              />
              <FloatingChip
                label="Production"
                value="$40k"
                sub="Completed"
                accent
                className="right-0 top-[5%]"
                floatDelay={1}
              />

              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.4,
                }}
                className="absolute z-10 -bottom-5 left-1/2 -translate-x-1/2
                  flex items-center gap-2 rounded-xl px-4 py-2.5
                  bg-white/80 border
border-[#e5e7eb]
shadow-lg
                  backdrop-blur-md whitespace-nowrap"
              >
                <span className="w-2 h-2 rounded-full bg-[#1d9e75] animate-pulse flex-shrink-0" />
                <span className="text-[12px] text-[#667085]">
                  142 facilities online
                </span>
              </motion.div>
            </div>

            {/* Flags */}
            <div className="flex items-center mt-7 relative z-10">
              {FLAGS.map(({ code, label }, i) => (
                <motion.div
                  key={code}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  title={label}
                  className="w-9 h-9 rounded-full overflow-hidden border-2 border-[#f6f5f2]"
                  style={{ marginLeft: i > 0 ? -10 : 0 }}
                >
                  <img
                    src={`https://flagcdn.com/w80/${code}.png`}
                    alt={label}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
              <div
                className="w-9 h-9 rounded-full border-2 border-[#f6f5f2] -ml-2.5
                bg-[rgba(255,255,255,0.06)] flex items-center justify-center"
              >
                <span className="text-[9px] font-semibold text-[rgba(240,237,232,0.5)]">
                  +38
                </span>
              </div>
              <div className="ml-3.5">
                <p className="text-[13px] font-semibold text-[#111827]">
                  Global coverage
                </p>
                <p className="text-[11px] text-[#667085]">
                  42 countries, 6 continents
                </p>
              </div>
            </div>

            {/* Mini stats */}
            <div className="grid grid-cols-2 border-t border-[#e4e7ec] mt-5">
              {[
                { n: "98.7%", l: "Uptime SLA" },
                { n: "4.2ms", l: "Avg latency" },
              ].map(({ n, l }) => (
                <div key={l} className="pt-4">
                  <p
                    className="text-[26px] text-[#111827] leading-none"
                    style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                  >
                    {n}
                  </p>
                  <p className="text-[11px] text-[rgba(240,237,232,0.35)] mt-1">
                    {l}
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
