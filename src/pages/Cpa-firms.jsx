import { motion } from "framer-motion";
import {
  RiDoubleQuotesL,
} from "react-icons/ri";

export default function CpaFirms() {

  const painPoints = [
    "Your team is buried in write-up work during busy season.",
    "You’re turning away clients because capacity is the bottleneck.",
    "Hiring locally is expensive and increasingly unreliable.",
    "Previous offshore vendors created quality and communication issues.",
  ];

  const steps = [
    {
      title: "We onboard your workflow",
      desc: "We learn your templates, SOPs, client formatting standards, and preferred accounting stack.",
    },
    {
      title: "You assign. We deliver.",
      desc: "Bookkeeping, reconciliations, workpapers, and tax prep drafts delivered within agreed SLAs.",
    },
    {
      title: "Review, finalize, and bill",
      desc: "White-label delivery. Your clients never know we exist.",
    },
  ];

  const differentiators = [
    "CA-reviewed deliverables",
    "US GAAP & QuickBooks trained",
    "Dedicated team model",
    "Fixed monthly pricing",
    "White-label by default",
    "24–48 hour turnaround",
  ];

  return (
    <main className="bg-[#f5f5f3] overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* Glow */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px]
                        bg-[#dff5b7]/20 blur-3xl rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-24 relative z-10">

          <div className="max-w-5xl">

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >

              <span
                className="inline-flex items-center
                           border border-[#0d3d43]/10
                           bg-white
                           text-[#0d3d43]
                           rounded-full
                           px-4 py-2
                           text-[11px]
                           tracking-[0.16em]
                           uppercase font-semibold"
              >
                CPA FIRM OUTSOURCING
              </span>

              <h1
                className="mt-6 text-[#050816]
                           text-[44px] sm:text-[72px]
                           leading-[0.95]
                           tracking-[-0.06em]
                           font-semibold max-w-6xl"
              >
                Scale Your CPA Practice
                <br />
                Without Adding Overhead.
              </h1>

              <p
                className="mt-8 max-w-3xl
                           text-[#666]
                           text-[17px] sm:text-[20px]
                           leading-[1.9]"
              >
                FinliGen provides US accounting firms with
                a dedicated offshore team — qualified CAs,
                trained in QuickBooks and US GAAP —
                delivering client-ready work on your timeline.
              </p>

              {/* CTA */}
              <div className="mt-10 flex flex-wrap gap-4">

                <button
                  className="bg-[#0d3d43]
                             hover:bg-[#145159]
                             text-white
                             px-7 py-4
                             rounded-2xl
                             text-[15px]
                             font-medium
                             transition-all duration-300"
                >
                  Book a Discovery Call →
                </button>

                <button
                  className="border border-[#d9d9d6]
                             bg-white
                             hover:bg-[#f1f1ee]
                             text-[#111]
                             px-7 py-4
                             rounded-2xl
                             text-[15px]
                             font-medium
                             transition-all duration-300"
                >
                  Download Outsourcing Guide
                </button>
              </div>

              {/* Trust */}
              <div
                className="mt-10 flex flex-wrap gap-3"
              >
                {[
                  "CA-Reviewed",
                  "White-Label Ready",
                  "US GAAP Trained",
                  "24–48 Hour SLA",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white
                               border border-[#e7e7e5]
                               rounded-full
                               px-4 py-2
                               text-[13px]
                               text-[#555]"
                  >
                    ✓ {item}
                  </div>
                ))}
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>
              <span
                className="text-[#3f655b]
                           text-[12px]
                           tracking-[0.16em]
                           uppercase font-semibold"
              >
                SOUND FAMILIAR?
              </span>

              <h2
                className="mt-4 text-[#111]
                           text-[36px] sm:text-[52px]
                           leading-[1.05]
                           tracking-[-0.04em]
                           font-semibold"
              >
                Most CPA firms
                don’t have a demand problem.
              </h2>

              <p
                className="mt-5 text-[#666]
                           text-[16px]
                           leading-[1.9]"
              >
                They have a capacity problem.
              </p>
            </div>

            <div className="space-y-4">

              {painPoints.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 6 }}
                  className="bg-white
                             border border-[#e8e8e6]
                             rounded-2xl
                             p-6 flex gap-4"
                >

                  <div
                    className="w-10 h-10 rounded-full
                               bg-[#0d3d43]
                               text-white
                               flex items-center justify-center
                               flex-shrink-0"
                  >
                    →
                  </div>

                  <p
                    className="text-[#222]
                               text-[15px]
                               leading-[1.8]"
                  >
                    {item}
                  </p>

                </motion.div>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

          <div className="max-w-3xl">
            <span
              className="text-[#3f655b]
                         text-[12px]
                         tracking-[0.16em]
                         uppercase font-semibold"
            >
              HOW IT WORKS
            </span>

            <h2
              className="mt-4 text-[#111]
                         text-[36px] sm:text-[52px]
                         leading-[1.05]
                         tracking-[-0.04em]
                         font-semibold"
            >
              Built like an extension
              of your firm.
            </h2>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-5">

            {steps.map((step, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8 }}
                className="border border-[#e8e8e6]
                           rounded-[28px]
                           p-8"
              >

                <div
                  className="w-14 h-14 rounded-2xl
                             bg-[#0d3d43]
                             text-white
                             flex items-center justify-center
                             text-[18px]
                             font-semibold"
                >
                  0{i + 1}
                </div>

                <h3
                  className="mt-6 text-[#111]
                             text-[24px]
                             leading-[1.3]
                             font-semibold"
                >
                  {step.title}
                </h3>

                <p
                  className="mt-4 text-[#666]
                             text-[14px]
                             leading-[1.9]"
                >
                  {step.desc}
                </p>

              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

          <div className="text-center max-w-4xl mx-auto">

            <span
              className="text-[#3f655b]
                         text-[12px]
                         tracking-[0.16em]
                         uppercase font-semibold"
            >
              WHY FINLIGEN
            </span>

            <h2
              className="mt-4 text-[#111]
                         text-[36px] sm:text-[52px]
                         leading-[1.05]
                         tracking-[-0.04em]
                         font-semibold"
            >
              Offshore pricing.
              <br />
              Enterprise-grade delivery.
            </h2>
          </div>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

            {differentiators.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="bg-white
                           border border-[#e8e8e6]
                           rounded-2xl
                           p-7"
              >
                <div
                  className="w-12 h-12 rounded-xl
                             bg-[#0d3d43]
                             text-white
                             flex items-center justify-center"
                >
                  ✓
                </div>

                <h3
                  className="mt-5 text-[#111]
                             text-[22px]
                             leading-[1.4]
                             font-semibold"
                >
                  {item}
                </h3>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-20 bg-white">

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">

          <motion.div
            whileHover={{ y: -6 }}
            className="relative border border-[#e8e8e6]
                       rounded-[36px]
                       p-8 sm:p-12"
          >

            <div
              className="absolute top-8 right-8
                         text-[#0d3d43]/5"
            >
              <RiDoubleQuotesL size={140} />
            </div>

            <div
              className="w-16 h-16 rounded-2xl
                         bg-[#0d3d43]
                         text-white
                         flex items-center justify-center"
            >
              <RiDoubleQuotesL size={28} />
            </div>

            <p
              className="mt-8 text-[#111]
                         text-[20px] sm:text-[28px]
                         leading-[1.8]"
            >
              “The error rate over 18 months has been
              essentially zero. For a firm our size,
              that matters.”
            </p>

            <div className="mt-10 flex items-center gap-4">

              <div
                className="w-14 h-14 rounded-full
                           bg-[#0d3d43]
                           text-white
                           flex items-center justify-center
                           font-semibold"
              >
                RD
              </div>

              <div>
                <h4 className="text-[16px] font-semibold">
                  Robert D., EA
                </h4>

                <p
                  className="text-[#666]
                             text-[14px]"
                >
                  Principal · Tax & Advisory Firm · Texas
                </p>
              </div>

            </div>

          </motion.div>
        </div>
      </section>

    </main>
  );
}