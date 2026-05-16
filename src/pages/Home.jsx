import { motion } from "framer-motion";
import { useEffect } from "react";
import gsap from "gsap";
import { BsGlobe } from "react-icons/bs";
import ImpactSection from "../components/Impact";
import Howitworks from "../components/TestimonialsSection";
import { TiSpannerOutline } from "react-icons/ti";
import { IoCubeOutline } from "react-icons/io5";
import { LuShieldHalf } from "react-icons/lu";
import { AiOutlineLineChart } from "react-icons/ai";
import { TbStack, TbNorthStar } from "react-icons/tb";
import AboutSection from "../components/Home/AboutSection";

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
    <div className="w-full bg-[#f5f5f3] overflow-x-hidden">
      {/* ─────────────────── HERO SECTION ─────────────────── */}
      <section className="max-w-[1500px] pb-10 sm:pb-16 lg:pb-20 mx-auto px-3 sm:px-4 lg:px-0">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-b-[1.5rem] sm:rounded-b-[2rem] overflow-hidden
                     h-[520px] sm:h-[600px] md:h-[650px] lg:h-[700px] group"
        >
          {/* Background Image */}
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center transition-transform
                       duration-[8000ms] ease-out group-hover:scale-110"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80')`,
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

          {/* Content */}
          <div
            className="relative z-10 h-full flex flex-col justify-center
                          px-5 sm:px-8 md:px-12"
          >
            {/* Top Badge */}
            <motion.p
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-fit text-white/90 text-[10px] sm:text-xs mb-4 sm:mb-6
                         uppercase tracking-wide border border-white/40 rounded-full
                         px-3 sm:px-4 py-1.5 sm:py-2 bg-white/5 backdrop-blur-sm"
            >
              CA-LED • US & INDIA • 500+ BUSINESSES SERVED
            </motion.p>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-white text-[32px] sm:text-[44px] md:text-[56px]
                         lg:text-7xl font-bold leading-tight mb-4 sm:mb-6 lg:mb-8
                         max-w-5xl"
            >
              US tax deadlines don't move.
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              Neither do we.
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="max-w-4xl text-white/80 text-[13px] sm:text-base
                         lg:text-xl leading-[1.8] mb-2 hidden sm:block"
            >
              FinliGen's CA-led team handles your US sales tax, IRS filings,
              cross-border compliance, and offshore bookkeeping — so your
              business stays clean, your clients stay happy, and you're never
              caught off-guard by a notice from the IRS.
            </motion.p>

            {/* Trust Lines */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="mb-6 sm:mb-10 flex flex-wrap items-center gap-2 sm:gap-3
                         text-white/70 text-[11px] sm:text-sm mt-2"
            >
              <span className="text-white/30 hidden sm:inline">•</span>
              <span className="flex items-center gap-1 sm:gap-2">
                ✓ Founded by CA Amit Kumar, 15+ years cross-border
              </span>
              <span className="text-white/30 hidden sm:inline">•</span>
              <span className="flex items-center gap-1 sm:gap-2">
                ✓ Books closed by the 15th, every month
              </span>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-5 lg:gap-8 mb-6 sm:mb-10"
            >
              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="#"
                className="bg-[#2F6B5A] hover:bg-[#3B7D69] text-white
                           px-5 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl
                           transition-all duration-300 flex items-center
                           justify-center sm:justify-start gap-2 shadow-lg
                           shadow-[#2F6B5A]/30 text-sm sm:text-base w-fit"
              >
                Check my US compliance →
              </motion.a>

              <motion.a
                whileHover={{ gap: "1rem" }}
                href="#"
                className="text-[#DDF3EA] border-b border-[#DDF3EA]/60 pb-1
                           flex items-center gap-2 transition-all w-fit
                           text-sm sm:text-base"
              >
                See how we work <span>↗</span>
              </motion.a>
            </motion.div>
          </div>

          {/* Floating Project Card - hidden on small screens */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="absolute top-6 sm:top-12 right-4 sm:right-12
                       w-44 sm:w-56 lg:w-72 bg-white/20 backdrop-blur-md
                       rounded-xl sm:rounded-2xl p-2 sm:p-3 z-10
                       hidden sm:block"
            style={{
              animation: "float 4s ease-in-out 1.5s infinite",
            }}
          >
            <div className="flex justify-end mb-1">
              <span className="text-white text-lg sm:text-xl">⋯</span>
            </div>

            <img
              src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=400&q=80"
              alt="project"
              className="w-full h-28 sm:h-36 lg:h-44 object-cover rounded-lg sm:rounded-xl"
            />

            <div className="flex items-center justify-between mt-2 sm:mt-3 px-1 sm:px-2 pb-1 sm:pb-2">
              <motion.button
                whileHover={{ rotate: 45 }}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/30
                           flex items-center justify-center text-white
                           hover:bg-white/50 transition-all text-sm sm:text-base"
              >
                ↗
              </motion.button>

              <p className="text-white text-[11px] sm:text-sm text-right leading-tight">
                Discover Our
                <br />
                Recent Project
              </p>
            </div>
          </motion.div>

          {/* Bottom Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="absolute bottom-0 right-0 bg-white rounded-tl-2xl sm:rounded-tl-3xl
                       p-4 sm:p-6 lg:p-8 flex gap-4 sm:gap-8 lg:gap-12 z-10"
          >
            {[
              { num: "500+", label: "Businesses served\nacross US & India" },
              {
                num: "15+",
                label: "Years cross-border\ncompliance experience",
              },
              { num: "0", label: "IRS penalty notices\non our watch" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="group cursor-default"
              >
                <h3
                  className="text-2xl sm:text-3xl lg:text-4xl font-light mb-1 sm:mb-2
                               transition-all duration-300 group-hover:text-emerald-500"
                >
                  {stat.num}
                </h3>

                <p
                  className="text-[10px] sm:text-xs lg:text-sm text-gray-600
                               whitespace-pre-line hidden sm:block"
                >
                  {stat.label}
                </p>
                <p className="text-[10px] text-gray-600 sm:hidden">
                  {stat.label.split("\n")[0]}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ─────────────────── BENEFITS SECTION ─────────────────── */}
      <section className="w-full bg-[#f5f5f3] py-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-10 lg:gap-16">
            {/* LEFT SIDE — Dashboard Card */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative flex justify-center xl:justify-start"
            >
              <div
                className="relative w-full max-w-[560px] min-h-[420px] sm:min-h-[500px]
                              bg-[#efefed] rounded-[28px] sm:rounded-[38px] p-5 sm:p-8 lg:p-10
                              overflow-hidden"
              >
                {/* Top Stats */}
                <div className="bg-[#f8f8f7] rounded-[20px] sm:rounded-[28px] p-5 sm:p-8 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[#8d8d8d] text-[14px] sm:text-[18px] font-medium">
                        Businesses Served
                      </p>

                      <div className="flex items-center gap-3 sm:gap-4 mt-3 sm:mt-4">
                        <h3 className="text-[#111] text-[32px] sm:text-[42px] font-semibold leading-none">
                          500+
                        </h3>

                        <motion.div
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="flex items-center gap-2 text-[#43c581] text-[14px] sm:text-[18px] font-medium"
                        >
                          ↗ US–India
                        </motion.div>
                      </div>
                    </div>
                  </div>

                  {/* Progress Items */}
                  <div className="mt-8 sm:mt-12 space-y-5 sm:space-y-7">
                    {[
                      {
                        label: "IRS Penalty-Free Clients",
                        value: "100%",
                        width: "w-[100%]",
                      },
                      {
                        label: "On-Time Book Closure",
                        value: "98%",
                        width: "w-[98%]",
                      },
                      {
                        label: "Cross-Border Compliance",
                        value: "15+ yrs",
                        width: "w-[90%]",
                      },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: i * 0.15 }}
                      >
                        <div
                          className="flex items-center justify-between text-[13px] sm:text-[15px]
                                        text-[#7a7a7a] mb-2"
                        >
                          <span>{item.label}</span>
                          <span className="text-[#171717] font-medium">
                            {item.value}
                          </span>
                        </div>

                        <div className="w-full h-3 sm:h-4 rounded-full bg-[#ececeb] overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: false }}
                            transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                            className={`${item.width} h-full bg-[#dde2df] rounded-full`}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 sm:mt-10 h-[1px] bg-[#e4e4e2]" />

                  {/* Bar Chart */}
                  <div className="mt-6 sm:mt-10 flex items-end gap-3 sm:gap-5 h-[90px] sm:h-[120px]">
                    {[
                      { h: "h-[71px] sm:h-[95px]", c: "bg-[#052f35]" },
                      { h: "h-[54px] sm:h-[72px]", c: "bg-[#2ac497]" },
                      { h: "h-[39px] sm:h-[52px]", c: "bg-[#052f35]" },
                      { h: "h-[61px] sm:h-[82px]", c: "bg-[#2ac497]" },
                    ].map((bar, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: "auto" }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        className={`w-7 sm:w-10 ${bar.h} ${bar.c} rounded-t-md`}
                      />
                    ))}
                  </div>
                </div>

                {/* Floating Analytics Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.85, y: 40 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                  whileHover={{ y: -6 }}
                  className="absolute bottom-5 sm:bottom-8 right-3 sm:right-8
                             w-[200px] sm:w-[240px] lg:w-[280px] bg-white
                             rounded-[20px] sm:rounded-[28px] p-4 sm:p-7 shadow-xl"
                >
                  <div className="flex items-start justify-between">
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl bg-[#dff5b7]
                                 flex items-center justify-center text-[#052f35]
                                 text-[18px] sm:text-[24px]"
                    >
                      $
                    </motion.div>
                    <div className="text-[#8b8b8b] text-lg sm:text-[24px]">
                      ⋮
                    </div>
                  </div>

                  <div className="mt-4 sm:mt-7">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <p className="text-[#5f5f5f] text-[14px] sm:text-[18px]">
                        IRS Penalties
                      </p>
                      <div className="flex items-center gap-1 sm:gap-2">
                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#052f35]" />
                        <span className="text-[#052f35] text-[12px] sm:text-[14px] font-medium">
                          0%
                        </span>
                      </div>
                    </div>

                    <h3
                      className="mt-3 sm:mt-5 text-[#171717] text-[40px] sm:text-[54px]
                                   leading-none font-semibold"
                    >
                      $0
                    </h3>

                    <p className="mt-3 sm:mt-5 text-[#8a8a8a] text-[13px] sm:text-[16px]">
                      Issued to{" "}
                      <span className="text-[#42c07d] font-medium">
                        FinliGen
                      </span>{" "}
                      managed clients
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* RIGHT SIDE */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.9, ease: "easeOut" }}
              >
                <h2
                  className="text-[#111] text-[28px] sm:text-[36px] md:text-[46px]
                               leading-[1.1] font-semibold tracking-tight"
                >
                  Numbers that only mean something if they're real.
                </h2>

                <p className="mt-2 text-[#777] text-[15px] sm:text-[18px] leading-7 max-w-[560px]">
                  Real metrics from real clients across the US-India corridor.
                  No vanity numbers - just verified results.
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.18 } },
                }}
                className="mt-6 sm:mt-8 space-y-8 sm:space-y-12"
              >
                {[
                  {
                    title: "500+ Businesses Served",
                    desc: "Trusted by founders and CFOs across the US-India corridor for end-to-end compliance and bookkeeping.",
                  },
                  {
                    title: "$0 IRS Penalty Notices",
                    desc: "Zero IRS penalty notices issued to FinliGen-managed clients. Filed right, filed on time — every single time.",
                  },
                  {
                    title: "Books Closed by the 15th",
                    desc: "Your books are closed by the 15th of every month. Guaranteed. No surprises, no last-minute scrambles.",
                  },
                  {
                    title: "15+ Years Cross-Border Expertise",
                    desc: "Over a decade and a half of cross-border compliance experience handling US tax, IRS filings, and offshore bookkeeping.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, x: 60 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ x: 6 }}
                    className="flex gap-4 sm:gap-5"
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="mt-1 flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full
                                 bg-[#052f35] text-white flex items-center justify-center
                                 text-[12px] sm:text-[14px]"
                    >
                      ✔
                    </motion.div>

                    <div>
                      <h3
                        className="text-[#171717] text-[17px] sm:text-[20px]
                                     font-semibold leading-tight"
                      >
                        {item.title}
                      </h3>
                      <p
                        className="mt-1 text-[#6e6e6e] text-[13px] sm:text-[14px]
                                    font-normal leading-5 max-w-[620px]"
                      >
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

      {/* ─────────────────── SERVICES SECTION ─────────────────── */}
      <section className="w-full bg-[#06363c] py-10 sm:py-14 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block text-[#7ecfc0] text-[11px] sm:text-[13px]
                      tracking-[0.18em] font-semibold uppercase mb-4
                      border border-[#7ecfc0]/30 rounded-full px-4 py-1.5
                      bg-white/5"
            >
              OUR SERVICES
            </motion.span>

            <h2 className="text-white text-[26px] sm:text-[34px] md:text-[46px] font-semibold leading-[1.15] tracking-tight">
              Every Service Your Finance
              <br />
              Function Needs.
            </h2>

            <p className="mt-4 sm:mt-5 text-[#b5c7c8] text-[15px] sm:text-[17px] leading-7 max-w-2xl mx-auto">
              From daily bookkeeping to complex cross-border compliance — one
              trusted partner for businesses operating between India and the
              United States.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6"
          >
            {[
              {
                icon: <AiOutlineLineChart size={30} />,
                badge: "Most Popular",
                title: "US Tax & Sales Tax Compliance",
                desc: "Nexus analysis, multi-state registration, monthly filings, and IRS return preparation — every state, every deadline.",
                features: [
                  "Nexus Analysis",
                  "All 50-State Registration",
                  "Monthly/Quarterly Filings",
                  "IRS Return Preparation",
                ],
                link: "/services/us-tax-sales-tax-compliance",
              },
              {
                icon: <TbStack size={30} />,
                badge: null,
                title: "CPA Firm Outsourcing",
                desc: "CA-reviewed bookkeeping, workpaper prep, and tax return drafts delivered white-label to your US CPA firm.",
                features: [
                  "QuickBooks / Xero Bookkeeping",
                  "Account Finalization",
                  "Tax Return Drafts",
                  "White-Label Delivery",
                ],
                link: "/services/cpa-firm-outsourcing",
              },
              {
                icon: <LuShieldHalf size={30} />,
                badge: null,
                title: "US LLC Setup & Advisory",
                desc: "LLC or C-Corp formation, EIN registration, operating agreements, and first-year compliance for non-US founders.",
                features: [
                  "LLC / C-Corp Formation",
                  "EIN Application",
                  "Operating Agreement",
                  "First-Year Compliance",
                ],
                link: "/services/us-llc-setup-advisory",
              },
              {
                icon: <TbNorthStar size={30} />,
                badge: null,
                title: "Offshore Bookkeeping",
                desc: "Daily transaction recording, bank reconciliation, and monthly MIS reports — books clean and closed by the 15th.",
                features: [
                  "Daily Bookkeeping",
                  "Bank Reconciliation",
                  "Monthly MIS Reports",
                  "Closed by 15th",
                ],
                link: "/services",
              },
              {
                icon: <TiSpannerOutline size={30} />,
                badge: null,
                title: "Virtual CFO Services",
                desc: "Strategic financial oversight, cash flow planning, investor-ready reporting, and board-level advisory — without the full-time cost.",
                features: [
                  "Cash Flow Planning",
                  "Investor Reporting",
                  "Budget vs Actuals",
                  "Board Advisory",
                ],
                link: "/services",
              },
              {
                icon: <IoCubeOutline size={30} />,
                badge: null,
                title: "Cross-Border Tax Advisory",
                desc: "FEMA compliance, transfer pricing, DTAA planning, and India–US tax structuring for founders and growing companies.",
                features: [
                  "FEMA Compliance",
                  "Transfer Pricing",
                  "DTAA Planning",
                  "India–US Structuring",
                ],
                link: "/services",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, clipPath: "inset(0 100% 0 0)" },
                  visible: { opacity: 1, clipPath: "inset(0 0% 0 0)" },
                }}
                transition={{ duration: 0.5, ease: [0.77, 0, 0.175, 1] }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative rounded-sm p-5 sm:p-6
                          min-h-[280px] sm:min-h-[300px]
                          transition-all duration-200 flex flex-col justify-between
                          bg-[#11464d] hover:bg-[#15525a]"
              >
                {/* Top Row */}
                <div>
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-3">
                      {/* Icon */}
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/10 text-white">
                        {card.icon}
                      </div>

                      {/* Badge */}
                      {card.badge && (
                        <motion.span
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: false }}
                          transition={{ duration: 0.4, delay: 0.3 }}
                          className="text-[10px] font-semibold tracking-widest uppercase
                                  bg-white/10 text-white px-2.5 py-1 rounded-full
                                  border border-white/15"
                        >
                          {card.badge}
                        </motion.span>
                      )}
                    </div>

                    {/* Arrow */}
                    <motion.a
                      href={card.link}
                      whileHover={{ x: 3, y: -3 }}
                      transition={{ duration: 0.25 }}
                      className="text-[20px] sm:text-[22px] transition-all duration-300
                              group-hover:translate-x-[3px] group-hover:-translate-y-[3px]
                              text-white"
                    >
                      ↗
                    </motion.a>
                  </div>

                  {/* Title */}
                  <h3 className="text-[19px] sm:text-[22px] leading-tight font-semibold mb-3 text-white">
                    {card.title}
                  </h3>

                  {/* Desc */}
                  <p className="text-[13px] sm:text-[14px] leading-[1.8] text-[#c0d0d1]">
                    {card.desc}
                  </p>
                </div>

                {/* Divider */}
                <div className="my-4 h-[1px] bg-white/10" />

                {/* Feature Pills */}
                <div className="flex flex-wrap gap-2">
                  {card.features.map((f, fi) => (
                    <motion.span
                      key={fi}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.3, delay: fi * 0.08 }}
                      className="text-[11px] sm:text-[12px] font-medium px-2.5 py-1
                              rounded-full border border-white/15 text-[#c0d0d1] bg-white/5"
                    >
                      ✓ {f}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-10 sm:mt-14 flex flex-col sm:flex-row items-center
                      justify-between gap-5 border-t border-white/10 pt-8 sm:pt-10"
          >
            <p className="text-[#b5c7c8] text-[14px] sm:text-[16px] text-center sm:text-left">
              Not sure which service fits your situation?
              <span className="text-white font-medium"> Talk to our team — free 30-min call.</span>
          </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="/services"
                className="bg-[#dff5b7] hover:bg-[#cef0a0] text-[#052f35]
                          px-6 py-3 rounded-xl text-[14px] sm:text-[15px]
                          font-semibold transition-all duration-300
                          text-center whitespace-nowrap"
              >
                Explore All Services →
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="/contact"
                className="border border-white/20 hover:border-white/50 text-white
                          px-6 py-3 rounded-xl text-[14px] sm:text-[15px]
                          font-medium transition-all duration-300
                          text-center whitespace-nowrap"
              >
                Book Free Call
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─────────────────── COMPLIANCE DEADLINE SECTION ─────────────────── */}
      <section
        className="w-full bg-[#f5f5f3] pb-10 sm:pb-14 lg:pb-16
                          px-4 sm:px-6 overflow-hidden"
      >
        <div className="max-w-[1500px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-[1.5rem] sm:rounded-[2rem]
                       bg-white border border-[#e6e6e4]
                       p-6 sm:p-10 md:p-14"
          >
            {/* Background Glow */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.35, 0.2] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-20 -right-20 w-[200px] sm:w-[300px]
                         h-[200px] sm:h-[300px] bg-[#dff5b7] blur-3xl rounded-full"
            />

            {/* Top Row */}
            <div
              className="relative z-10 flex flex-wrap items-start sm:items-center
                            justify-between gap-4 mb-8 sm:mb-10"
            >
              <div>
                <motion.p
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6 }}
                  className="text-[#3f655b] text-[11px] sm:text-[13px]
                             tracking-[0.18em] font-semibold uppercase"
                >
                  COMPLIANCE CALENDAR
                </motion.p>

                <motion.h2
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mt-3 sm:mt-4 text-[26px] sm:text-[38px] md:text-[48px]
                             lg:text-[58px] leading-[1.05] tracking-[-0.04em]
                             font-semibold max-w-5xl"
                >
                  <span className="text-[#050816]">
                    The IRS and state tax agencies
                  </span>
                  <br />
                  <span className="text-[#0d3d43]">
                    run on fixed deadlines.
                  </span>
                  <br />
                  <span className="text-[#050816]">
                    Are you tracking all of them?
                  </span>
                </motion.h2>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
                className="bg-[#e9e7da] text-[#173c37] px-4 sm:px-5 py-2 sm:py-3
                           rounded-full text-[11px] sm:text-sm font-semibold"
              >
                NEW - RECOMMENDED ADDITION
              </motion.div>
            </div>

            {/* Content Grid */}
            <div className="relative z-10 grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-8 sm:gap-10 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="text-[#5f6368] text-[15px] sm:text-[18px] leading-[1.9] max-w-4xl">
                  Missing a US compliance deadline isn't just a fine. It can
                  trigger an audit, invalidate your business registration, or
                  freeze your US bank account.
                </p>

                <p className="mt-4 sm:mt-6 text-[#5f6368] text-[15px] sm:text-[18px]
                               leading-[1.9] max-w-4xl">
                  FinliGen tracks every filing deadline for every state
                  you operate in — and files before them, not on them.
                </p>

                <div className="mt-7 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-5">
                  <motion.a
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    href="#"
                    className="bg-[#0d3d43] hover:bg-[#145159] text-white
                               px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl
                               text-[15px] sm:text-[17px] font-medium
                               transition-all duration-300 text-center"
                  >
                    Get my compliance calendar →
                  </motion.a>

                  <motion.a
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.97 }}
                    href="#"
                    className="border border-[#dcdcdc] hover:border-[#0d3d43]
                               hover:text-[#0d3d43] text-[#171717] px-6 sm:px-8
                               py-3 sm:py-4 rounded-xl sm:rounded-2xl
                               text-[15px] sm:text-[17px] font-medium
                               transition-all duration-300 text-center"
                  >
                    See which deadlines apply to me
                  </motion.a>
                </div>
              </motion.div>

              {/* Right Card */}
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.9, delay: 0.3 }}
                whileHover={{ y: -6 }}
                className="bg-[#0d3d43] rounded-[1.5rem] sm:rounded-[2rem]
                           p-6 sm:p-8 relative overflow-hidden"
              >
                <div
                  className="absolute -top-10 -right-10 w-40 h-40
                                bg-[#dff5b7]/10 blur-3xl rounded-full"
                />

                <div className="relative z-10 flex items-center justify-between mb-6 sm:mb-8">
                  <div>
                    <p className="text-white/50 text-[11px] sm:text-sm uppercase tracking-[0.18em]">
                      Upcoming
                    </p>
                    <h3 className="text-white text-xl sm:text-2xl font-semibold mt-1 sm:mt-2">
                      Filing Deadlines
                    </h3>
                  </div>

                  <motion.div
                    animate={{ rotate: [0, 8, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl
                               bg-white/10 flex items-center justify-center
                               text-white text-lg sm:text-xl"
                  >
                    📅
                  </motion.div>
                </div>

                <div className="relative z-10 space-y-3 sm:space-y-4">
                  {[
                    { date: "15th", title: "Monthly Book Closing" },
                    { date: "20th", title: "Sales Tax Filing" },
                    { date: "Quarterly", title: "IRS Estimated Tax" },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.5, delay: i * 0.15 }}
                      whileHover={{ scale: 1.03 }}
                      className="flex items-center justify-between bg-white/5
                                 border border-white/10 rounded-xl sm:rounded-2xl
                                 px-4 sm:px-5 py-3 sm:py-4"
                    >
                      <p className="text-white text-[13px] sm:text-[15px]">
                        {item.title}
                      </p>
                      <span className="text-[#dff5b7] font-semibold text-sm sm:text-base">
                        {item.date}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <p
                  className="relative z-10 mt-6 sm:mt-8 text-white/50
                               text-[12px] sm:text-sm leading-6"
                >
                  Automated reminders and deadline tracking for every US state
                  your business operates in.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <ImpactSection />
      <Howitworks />

      {/* ─────────────────── AUDIENCE ENTRY PATHS ─────────────────── */}
      <section className="w-full bg-white py-10 sm:py-14 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto"
          >
            <span
              className="inline-block text-[#3f655b] text-[11px] sm:text-[13px]
              tracking-[0.18em] font-semibold uppercase mb-4
              border border-[#3f655b]/20 rounded-full px-4 py-1.5 bg-white"
            >
              WHO WE WORK WITH
            </span>

            <h2
              className="text-[#050816] text-[28px] sm:text-[38px]
              md:text-[50px] leading-[1.08] tracking-[-0.04em]
              font-semibold"
            >
              We work differently depending
              <br />
              on who you are.
            </h2>

            <p
              className="mt-4 text-[#666] text-[14px] sm:text-[17px]
              leading-[1.8] max-w-2xl mx-auto"
            >
              Whether you're a CPA firm, ecommerce founder, or expanding into
              the US — we tailor the workflow, reporting, and compliance process
              around your business.
            </p>
          </motion.div>

          {/* Cards */}
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
            className="mt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-5"
          >
            {[
              {
                tag: "US CPA FIRM",
                title: "Invisible offshore support for your firm.",
                desc: "Need bookkeeping, workpapers, or tax prep support? We operate as your white-label back-office team.",
                cta: "See CPA outsourcing →",
                link: "/services/cpa-firm-outsourcing",
              },
              {
                tag: "EXPANDING TO THE US",
                title: "Launch your US entity the right way.",
                desc: "From LLC setup and EIN registration to first-year compliance — we handle the operational side of entering the US market.",
                cta: "See US market entry →",
                link: "/services/us-llc-setup-advisory",
              },
              {
                tag: "ECOMMERCE BRAND",
                title:
                  "Selling online? Sales tax applies faster than you think.",
                desc: "Amazon, Shopify, and marketplace sellers often trigger nexus obligations without realizing it.",
                cta: "Check your nexus →",
                link: "/services/us-tax-sales-tax-compliance",
              },
              {
                tag: "ALREADY OPERATING",
                title: "Cross-border finance operations built properly.",
                desc: "Need a finance team handling India + US compliance together? We manage both sides under one workflow.",
                cta: "See all services →",
                link: "/services",
              },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 60,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative bg-white border border-[#e7e7e5]
                          rounded-[24px] p-6 sm:p-7 min-h-[320px]
                          flex flex-col justify-between overflow-hidden"
              >
                {/* Glow */}
                <div
                  className="absolute top-0 right-0 w-32 h-32
                            bg-[#dff5b7]/20 blur-3xl opacity-0
                            group-hover:opacity-100 transition-all duration-500"
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Tag */}
                  <span
                    className="inline-flex items-center text-[10px]
                              sm:text-[11px] tracking-[0.16em]
                              font-semibold uppercase
                              text-[#0d3d43]
                              border border-[#0d3d43]/10
                              bg-[#0d3d43]/5
                              px-3 py-1.5 rounded-full"
                  >
                    {item.tag}
                  </span>

                  {/* Title */}
                  <h3
                    className="mt-5 text-[#111] text-[22px]
                              sm:text-[26px] leading-[1.2]
                              font-semibold"
                  >
                    {item.title}
                  </h3>

                  {/* Desc */}
                  <p
                    className="mt-4 text-[#666]
                              text-[13px] sm:text-[14px]
                              leading-[1.9]"
                  >
                    {item.desc}
                  </p>
                </div>

                {/* Bottom CTA */}
                <div
                  className="group relative z-10 mt-8 flex items-center
                            justify-between"
                >
                  <span
                    className="text-[#0d3d43] text-[14px]
                              font-semibold"
                  >
                    {item.cta}
                  </span>

                  <motion.div
                    whileHover={{
                      rotate: 45,
                    }}
                    className="w-11 h-11 rounded-full bg-white border border-[#0d3d43]
                              group-hover:bg-[#0d3d43] text-[#0d3d43] group-hover:text-white
                              flex items-center justify-center
                              text-lg"
                  >
                    ↗
                  </motion.div>
                </div>

                {/* Border Hover */}
                <div
                  className="absolute inset-0 rounded-[24px]
                            border border-transparent
                            group-hover:border-[#0d3d43]/15
                            transition-all duration-300"
                />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─────────────────── TESTIMONIALS SECTION ─────────────────── */}
      <section className="w-full bg-gray-200 py-10 sm:py-14 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          {/* Top Heading */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
          >
            <div className="max-w-3xl">
              <span
                className="inline-flex items-center text-[#3f655b]
                          text-[11px] sm:text-[13px]
                          tracking-[0.18em] font-semibold uppercase
                          border border-[#3f655b]/15
                          rounded-full px-4 py-1.5 bg-white"
              >
                CLIENT TESTIMONIALS
              </span>

              <h2
                className="mt-4 text-[#050816]
                          text-[30px] sm:text-[42px]
                          md:text-[54px]
                          leading-[1.08]
                          tracking-[-0.04em]
                          font-semibold"
              >
                What CPA firms say after
                <br />
                the first year working with us.
              </h2>
            </div>

            <p
              className="max-w-[420px]
                        text-[#666]
                        text-[14px] sm:text-[16px]
                        leading-[1.9]"
            >
              Long-term partnerships built on accuracy, responsiveness, and real
              operational capacity.
            </p>
          </motion.div>

          {/* Testimonials Grid */}
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
            className="mt-10 grid grid-cols-1 xl:grid-cols-2 gap-5"
          >
            {[
              {
                quote:
                  "I was skeptical after a bad experience with another offshore firm. FinliGen did a two-week trial on one of our mid-size clients. The output was better than what my in-house staff was producing. We now outsource about 40% of our write-up work to them. That capacity let us take on six new clients this year we'd otherwise have turned away.",
                initials: "JM",
                name: "Jennifer M., CPA",
                role: "Managing Partner · Boutique Tax Practice · Illinois",
              },
              {
                quote:
                  "The CA review process is what sold us. When I send a file to FinliGen, I know a qualified accountant has looked at it before it comes back to me — not just a junior staff member running through a checklist. The error rate over 18 months has been essentially zero. For a firm our size, that matters.",
                initials: "RD",
                name: "Robert D., EA",
                role: "Principal · Tax & Advisory Firm · Texas",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 60,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative bg-white
                          border border-[#e7e7e5]
                          rounded-[30px]
                          p-6 sm:p-8 lg:p-10
                          overflow-hidden"
              >
                {/* Background Glow */}
                <div
                  className="absolute -top-10 -right-10
                            w-40 h-40
                            bg-[#dff5b7]/20
                            blur-3xl
                            opacity-0
                            group-hover:opacity-100
                            transition-all duration-500"
                />

                {/* Quote Icon
                <div
                  className="relative z-10
                            w-14 h-14
                            rounded-2xl
                            bg-[#0d3d43]
                            text-white
                            flex items-center justify-center
                            text-3xl mb-8"
                >
                  “
                </div> */}

                {/* Quote */}
                <p
                  className="relative z-10
                            text-[#222]
                            text-[15px] sm:text-[17px]
                            leading-[2]
                            font-normal"
                >
                  ❝ {item.quote} ❞
                </p>

                {/* Divider */}
                <div className="relative z-10 mt-8 h-[1px] bg-[#ececeb]" />

                {/* Author */}
                <div
                  className="relative z-10
                            mt-6 flex items-center gap-4"
                >
                  {/* Avatar */}
                  <div
                    className="w-14 h-14 rounded-full
                              bg-[#0d3d43]
                              text-white
                              flex items-center justify-center
                              text-[15px]
                              font-semibold"
                  >
                    {item.initials}
                  </div>

                  {/* Details */}
                  <div>
                    <h4
                      className="text-[#111]
                                text-[16px]
                                font-semibold"
                    >
                      {item.name}
                    </h4>

                    <p
                      className="mt-1
                                text-[#666]
                                text-[13px]
                                leading-[1.7]"
                    >
                      {item.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Notice 
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 sm:mt-8 bg-[#ebe7d8]
                      border border-[#ddd7c6]
                      rounded-2xl
                      p-5 sm:p-6"
          >
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <div
                className="w-10 h-10 rounded-xl
                          bg-[#0d3d43]
                          text-white
                          flex items-center justify-center
                          text-lg flex-shrink-0"
              >
                ✦
              </div>

              <div>
                <h4
                  className="text-[#173c37]
                            text-[15px] sm:text-[16px]
                            font-semibold"
                >
                  Before launch: replace placeholder client identities.
                </h4>

                <p
                  className="mt-2 text-[#5f6368]
                            text-[13px] sm:text-[14px]
                            leading-[1.9]"
                >
                  Add real client names, photos, firm names,
                  and ideally one short video testimonial.
                  Even a single CPA partner video creates
                  massive trust for offshore accounting services.
                </p>
              </div>
            </div>
          </motion.div>*/}
        </div>
      </section>

      {/* ─────────────────── BLOG / INSIGHTS SECTION ─────────────────── */}
      <section className="w-full bg-white py-10 sm:py-14 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
          >
            <div className="max-w-3xl">
              <span
                className="inline-flex items-center
                          text-[#3f655b]
                          text-[11px] sm:text-[13px]
                          tracking-[0.18em]
                          font-semibold uppercase
                          border border-[#3f655b]/15
                          rounded-full px-4 py-1.5 bg-white"
              >
                INSIGHTS & RESOURCES
              </span>

              <h2
                className="mt-4 text-[#050816]
                          text-[30px] sm:text-[42px]
                          md:text-[54px]
                          leading-[1.08]
                          tracking-[-0.04em]
                          font-semibold"
              >
                Stay ahead of compliance
                <br />
                before it becomes a problem.
              </h2>
            </div>

            <p
              className="max-w-[420px]
                        text-[#666]
                        text-[14px] sm:text-[16px]
                        leading-[1.9]"
            >
              Guides, compliance breakdowns, and cross-border finance insights
              for founders, CPA firms, and ecommerce businesses.
            </p>
          </motion.div>

          {/* Blog Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
            className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
          >
            {[
              {
                category: "US TAX",
                title:
                  "US Economic Nexus Explained: A 2025 Guide for Foreign Ecommerce Sellers",
                desc: "Understand when your business becomes liable for US sales tax and how economic nexus rules apply across states.",
                read: "8 min read",
              },
              {
                category: "LLC SETUP",
                title:
                  "How to Set Up a US LLC as an Indian Citizen (Step-by-Step 2025)",
                desc: "Everything founders need to know about LLC formation, EIN registration, and first-year US compliance.",
                read: "11 min read",
              },
              {
                category: "CPA OUTSOURCING",
                title:
                  "CPA Firm Outsourcing to India: What to Look for (and What to Avoid)",
                desc: "A practical guide for US CPA firms evaluating offshore bookkeeping and tax preparation partners.",
                read: "7 min read",
              },
              {
                category: "US SALES TAX",
                title:
                  "US Sales Tax for Amazon FBA Sellers: The Complete Compliance Playbook",
                desc: "Multi-state filing, nexus analysis, and sales tax risks every Amazon seller should understand.",
                read: "9 min read",
              },
              {
                category: "CROSS-BORDER",
                title:
                  "FEMA ODI Compliance for Indian Companies with US Subsidiaries",
                desc: "Key FEMA obligations, ODI reporting requirements, and compliance timelines explained clearly.",
                read: "6 min read",
              },
              {
                category: "STARTUPS",
                title:
                  "Series A Readiness: What Investors Expect from Your Financial Statements",
                desc: "The reporting systems, metrics, and finance hygiene investors expect before your next raise.",
                read: "10 min read",
              },
            ].map((post, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 50,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -8,
                }}
                className="group relative bg-white
                          border border-[#e8e8e6]
                          rounded-[28px]
                          overflow-hidden"
              >
                {/* Top Gradient */}
                <div
                  className="h-[5px] w-full
                            bg-gradient-to-r
                            from-[#0d3d43]
                            via-[#2F6B5A]
                            to-[#dff5b7]"
                />

                <div className="p-6 sm:p-7">
                  {/* Category */}
                  <div
                    className="inline-flex items-center
                              text-[10px]
                              tracking-[0.16em]
                              uppercase font-semibold
                              text-[#0d3d43]
                              bg-[#0d3d43]/5
                              border border-[#0d3d43]/10
                              rounded-full px-3 py-1.5"
                  >
                    {post.category}
                  </div>

                  {/* Title */}
                  <h3
                    className="mt-5 text-[#111]
                              text-[22px]
                              leading-[1.3]
                              font-semibold
                              transition-all duration-300
                              group-hover:text-[#0d3d43]"
                  >
                    {post.title}
                  </h3>

                  {/* Desc */}
                  <p
                    className="mt-4 text-[#666]
                              text-[14px]
                              leading-[1.9]"
                  >
                    {post.desc}
                  </p>

                  {/* Bottom */}
                  <div
                    className="group mt-8 flex items-center
                              justify-between"
                  >
                    <span
                      className="text-[#666]
                                text-[13px]"
                    >
                      {post.read}
                    </span>

                    <motion.div
                      whileHover={{
                        rotate: 45,
                      }}
                      className="w-11 h-11
                                rounded-full border border-[#0d3d43]
                                bg-white group-hover:bg-[#0d3d43]
                                text-[#0d3d43] group-hover:text-white
                                flex items-center
                                justify-center
                                text-lg"
                    >
                      ↗
                    </motion.div>
                  </div>
                </div>

                {/* Glow */}
                <div
                  className="absolute -top-10 -right-10
                            w-40 h-40
                            bg-[#dff5b7]/20
                            blur-3xl opacity-0
                            group-hover:opacity-100
                            transition-all duration-500"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-10 sm:mt-12
                      flex flex-col sm:flex-row
                      items-center justify-between
                      gap-5
                      border-t border-[#e5e5e3]
                      pt-8"
          >
            <div>
              <h4
                className="text-[#111]
                          text-[18px]
                          font-semibold"
              >
                Looking for something specific?
              </h4>

              <p
                className="mt-1 text-[#666]
                          text-[14px]"
              >
                Explore detailed guides on US tax, LLC setup, CPA outsourcing,
                and cross-border compliance.
              </p>
            </div>

            <motion.a
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="/blog"
              className="bg-[#0d3d43]
                        hover:bg-[#145159]
                        text-white
                        px-6 py-3
                        rounded-xl
                        text-[14px]
                        font-medium
                        transition-all duration-300
                        whitespace-nowrap"
            >
              Explore All Articles →
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* ─────────────────── VALUES SECTION ─────────────────── */}
      <section className="w-full bg-[#f5f5f3] py-10 sm:py-14 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* Left Heading */}
            <motion.div
              initial={{ opacity: 0, x: -120 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <p
                className="text-[#3f655b] text-[11px] sm:text-[13px]
                            tracking-[0.18em] font-semibold uppercase"
              >
                VALUES
              </p>

              <h2
                className="mt-4 sm:mt-5 text-[#050816]
                             text-[38px] sm:text-[52px] md:text-[62px] lg:text-[72px]
                             leading-[1.02] tracking-[-0.05em] font-semibold"
              >
                Make your
                <br />
                business,
                <span className="font-bold"> Future-ready</span>
              </h2>
            </motion.div>

            {/* Right Paragraph */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="lg:pt-20"
            >
              <p
                className="max-w-[520px] text-[#5f6368] text-[18px] sm:text-[22px]
                            lg:text-[24px] leading-[1.7] font-normal"
              >
                Manages modern manufacturing operations with efficient
                technology-enabled systems and scalable production workflows.
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
              visible: { transition: { staggerChildren: 0.18 } },
            }}
            className="mt-6 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5"
          >
            {/* Card 1 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 120 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -10 }}
              className="group border border-[#e6e6e4] bg-white p-5 sm:p-6
                         min-h-[200px] flex flex-col justify-between
                         transition-all duration-500"
            >
              <div>
                <div className="relative w-12 h-12">
                  {[
                    "top-0 left-0",
                    "top-0 right-0",
                    "bottom-0 left-0",
                    "bottom-0 right-0",
                  ].map((pos, i) => (
                    <div
                      key={i}
                      className={`absolute ${pos} w-7 h-7 border border-[#111] rounded-full`}
                    />
                  ))}
                </div>

                <h3
                  className="mt-6 sm:mt-8 text-[#111] text-[22px] sm:text-[28px]
                               leading-tight font-semibold"
                >
                  Smart Manufacturing
                </h3>

                <p className="mt-4 sm:mt-6 text-[#666] text-[13px] sm:text-[14px] leading-[1.8]">
                  Advanced production systems designed for efficiency,
                  automation, and scalable operations.
                </p>
              </div>

              <div className="mt-5 sm:mt-6">
                <motion.div
                  whileHover={{ backgroundColor: "#0d3d43", color: "#fff" }}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full text-[28px] sm:text-[34px]
                             border border-[#dcdcdc] flex items-center justify-center
                             transition-all duration-200 group-hover:bg-[#0d3d43]
                             group-hover:text-white"
                >
                  ↗
                </motion.div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 120 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -10 }}
              className="group border border-[#e6e6e4] bg-white p-5 sm:p-6
                         min-h-[200px] flex flex-col justify-between
                         transition-all duration-500"
            >
              <div>
                <div className="w-10 h-10 flex items-center justify-center">
                  <div className="relative w-10 h-10 rotate-45">
                    <div className="absolute inset-0 w-8 h-8 border border-[#111] rounded-[10px]" />
                    <div className="absolute -top-4 left-4 w-8 h-8 border border-[#111] rounded-[10px]" />
                  </div>
                </div>

                <h3
                  className="mt-6 sm:mt-8 text-[#111] text-[22px] sm:text-[28px]
                               leading-tight font-semibold"
                >
                  Process Optimization
                </h3>

                <p className="mt-4 sm:mt-6 text-[#666] text-[13px] sm:text-[14px] leading-[1.8]">
                  Intelligent factory systems helping businesses streamline
                  operations and reduce production costs.
                </p>
              </div>

              <div className="mt-5 sm:mt-8">
                <div
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full text-[28px] sm:text-[34px]
                                border border-[#dcdcdc] flex items-center justify-center
                                transition-all duration-200 group-hover:bg-[#0d3d43]
                                group-hover:text-white"
                >
                  ↗
                </div>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 120 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -10 }}
              className="group bg-[#e9e7da] p-5 sm:p-6 min-h-[200px]
                         rounded-tr-[100px] sm:rounded-tr-[140px]
                         flex flex-col justify-between transition-all duration-500
                         sm:col-span-2 xl:col-span-1"
            >
              <div>
                <div
                  className="w-12 h-12 sm:w-12 sm:h-12 rounded-full border border-[#3f655b]
                                flex items-center justify-center"
                >
                  <div className="relative">
                    <div className="w-9 h-9 sm:w-9 sm:h-9 border translate-y-[5px] border-[#3f655b] rounded-full" />
                    <div
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[1px]
                                    w-4 h-4 sm:w-6 sm:h-6 border border-[#3f655b] rounded-full"
                    />
                  </div>
                </div>

                <h3
                  className="mt-5 sm:mt-6 text-[#173c37] text-[22px] sm:text-[28px]
                               leading-tight font-semibold"
                >
                  AI-Powered Production
                </h3>

                <p className="mt-4 sm:mt-6 text-[#4d5b57] text-[13px] sm:text-[14px] leading-[1.8]">
                  Smart automation solutions leveraging AI to improve
                  manufacturing quality and productivity.
                </p>
              </div>

              <div className="mt-5 sm:mt-8">
                <div
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full text-[28px] sm:text-[34px]
                                border border-[#dcdcdc] flex items-center justify-center
                                transition-all duration-300 group-hover:bg-[#0d3d43]
                                group-hover:text-white"
                >
                  ↗
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─────────────────── ABOUT US SECTION ─────────────────── */}
      <section className="w-full bg-gray-200 py-10 sm:py-14 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

          {/* Heading */}
          <div className="text-center max-w-4xl mx-auto">
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

          {/* Cards */}
          <div className="mt-6 sm:mt-8 grid grid-cols-1 xl:grid-cols-[380px_1fr] gap-4 sm:gap-5 items-stretch">

            {/* LEFT CARD */}
            <motion.div
              initial={{ opacity: 0, y: 120 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -10 }}
              className="bg-[#0d3d43] min-h-[380px] sm:min-h-[480px] lg:min-h-[520px]
                         p-5 relative overflow-hidden"
            >
              <h3 className="text-white text-[28px] sm:text-[36px] leading-[1.05] font-semibold">
                Grow production
                <br />
                faster
              </h3>

              <div className="absolute bottom-0 left-0 w-full px-6 sm:px-10 pb-6 sm:pb-10">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex justify-left mb-4 sm:mb-6"
                >
                  <p className="text-white text-[22px] sm:text-[28px] font-medium">$12,000</p>
                </motion.div>

                <div className="mt-4 sm:mt-8 flex items-end justify-between h-[140px] sm:h-[180px]">
                  {[
                    { h: "h-[30px] sm:h-[40px]", active: false },
                    { h: "h-[52px] sm:h-[70px]", active: false },
                    { h: "h-[86px] sm:h-[115px]", active: false },
                    { h: "h-full", active: true },
                    { h: "h-[90px] sm:h-[120px]", active: false },
                    { h: "h-[116px] sm:h-[155px]", active: false },
                  ].map((bar, i) =>
                    bar.active ? (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: "auto" }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8, delay: i * 0.1 }}
                        className="relative flex justify-center w-6 sm:w-8 h-full"
                      >
                        <div className="absolute bottom-0 w-full h-full bg-white" />
                        <div className="absolute -top-[120px] sm:-top-[165px] left-1/2 -translate-x-1/2">
                          <div className="relative w-[70px] sm:w-[90px] h-[140px] sm:h-[180px]">
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2
                                            w-6 sm:w-8 h-[110px] sm:h-[145px] bg-white" />
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0
                                            border-l-[35px] sm:border-l-[50px]
                                            border-r-[35px] sm:border-r-[50px]
                                            border-b-[50px] sm:border-b-[65px]
                                            border-l-transparent border-r-transparent border-b-white" />
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: "auto" }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.7, delay: i * 0.1 }}
                        className={`w-6 sm:w-8 ${bar.h} bg-white/15`}
                      />
                    )
                  )}
                </div>
              </div>
            </motion.div>

            {/* RIGHT CARD */}
            <motion.div
              initial={{ opacity: 0, y: 120 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
              whileHover={{ y: -10 }}
              className="relative bg-[#0d3d43]/30 min-h-[380px] sm:min-h-[480px]
                         lg:min-h-[520px] overflow-hidden p-6 sm:p-10
                         rounded-bl-[80px] sm:rounded-bl-[140px]"
            >
              <motion.h3
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-[#173c37] text-[32px] sm:text-[46px] lg:text-[60px]
                           leading-[1.05] font-semibold max-w-[650px]"
              >
                Connect across the global manufacturing network
              </motion.h3>

              {/* Globe Rings */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="relative w-[300px] h-[300px] sm:w-[450px] sm:h-[450px]
                             lg:w-[600px] lg:h-[600px] rounded-full border border-[#dce3df]"
                >
                  <div className="absolute inset-[50px] sm:inset-[70px] rounded-full border border-[#dce3df]" />
                  <div className="absolute inset-[100px] sm:inset-[140px] rounded-full border border-[#dce3df]" />
                  <div className="absolute inset-[150px] sm:inset-[210px] rounded-full border border-[#dce3df]" />
                  <BsGlobe
                    size={48}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2
                               -translate-y-1/2 text-black sm:text-[68px]"
                  />
                </motion.div>
              </div>

              {/* Floating Card 1 */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                className="absolute left-4 sm:left-[80px] top-[180px] sm:top-[240px]
                           bg-white shadow-sm p-3 sm:p-5
                           w-[160px] sm:w-[200px] lg:w-[220px]"
              >
                <img
                  src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop"
                  alt=""
                  className="w-full h-[70px] sm:h-[100px] object-cover"
                />
                <h4 className="mt-3 sm:mt-4 text-[#111] text-[24px] sm:text-[32px] font-semibold">
                  $25,000
                </h4>
                <p className="text-[#666] text-[13px] sm:text-[16px]">Manufacturing Process</p>

                <div className="flex items-center mt-3 sm:mt-5">
                  {[
                    "https://randomuser.me/api/portraits/men/32.jpg",
                    "https://randomuser.me/api/portraits/women/44.jpg",
                  ].map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt=""
                      className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2
                                  border-white ${i > 0 ? "-ml-2 sm:-ml-3" : ""}`}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Floating Card 2 */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                className="absolute right-4 sm:right-[90px] top-[120px] sm:top-[180px]
                           bg-[#0d3d43] text-white p-4 sm:p-6
                           w-[160px] sm:w-[200px] lg:w-[220px]"
              >
                <h4 className="text-[30px] sm:text-[38px] font-semibold">$40,000</h4>
                <p className="mt-1 text-white/80 text-[13px] sm:text-[15px]">
                  Production Completed
                </p>
                <div className="absolute -bottom-4 left-8 w-0 h-0
                                border-l-[16px] border-r-[16px] border-t-[18px]
                                border-l-transparent border-r-transparent border-t-[#0d3d43]" />
              </motion.div>

              {/* Profile */}
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.4 }}
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt=""
                className="absolute right-[220px] sm:right-[270px] top-[260px] sm:top-[310px]
                           w-12 h-12 sm:w-16 sm:h-16 rounded-full border-4 border-white
                           hidden sm:block"
              />

              {/* Flags */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute right-4 sm:right-[90px] bottom-[50px] sm:bottom-[80px]
                           flex items-center"
              >
                {[
                  { src: "https://flagcdn.com/w80/us.png", alt: "US" },
                  { src: "https://flagcdn.com/w80/de.png", alt: "DE" },
                  { src: "https://flagcdn.com/w80/ng.png", alt: "NG" },
                ].map((flag, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.2, zIndex: 10 }}
                    className={`w-10 h-10 sm:w-14 sm:h-14 rounded-full overflow-hidden
                                border-2 border-white ${i > 0 ? "-ml-2" : ""}`}
                  >
                    <img src={flag.src} alt={flag.alt} className="w-full h-full object-cover" />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Keyframe Styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
      `}</style>
    </div>
  );
};

export default Home;
