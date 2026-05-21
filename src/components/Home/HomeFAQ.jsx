"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
// const faqs = [
//   {
//     q: "What services does FinliGen provide?",
//     a: "FinliGen provides US tax compliance, CPA firm outsourcing, US LLC setup, offshore bookkeeping, virtual CFO services, and India–US cross-border tax advisory.",
//   },
//   {
//     q: "Do you help with US tax and sales tax compliance?",
//     a: "Yes. We help with nexus analysis, sales tax registration, monthly or quarterly filings, IRS return preparation, and ecommerce tax compliance.",
//   },
//   {
//     q: "Can FinliGen help non-US residents set up a US LLC?",
//     a: "Yes. We assist with LLC formation, EIN application, operating agreements, registered agent setup, banking guidance, and first-year compliance.",
//   },
//   {
//     q: "Do you work with CPA firms as a white-label partner?",
//     a: "Yes. FinliGen supports CPA firms with white-label bookkeeping, workpaper preparation, tax return drafts, payroll reconciliation, and account finalization.",
//   },
//   {
//     q: "Do you support India–US cross-border compliance?",
//     a: "Yes. We help with FEMA compliance, transfer pricing, DTAA planning, foreign tax credit planning, and India–US entity structuring.",
//   },
// ];

const faqs = [
  {
    q: "What makes FinliGen different from other accounting firms?",
    a: "FinliGen specializes specifically in US–India cross-border finance — a niche most generalist firms don't understand deeply. Every engagement is reviewed by a qualified Chartered Accountant, and our team has 15+ years of focused experience in IRS compliance, US sales tax, FEMA, and ODI. We're not a generalist firm trying to do international work — it's all we do.",
  },
  {
    q: "Do you work with US businesses, Indian businesses, or both?",
    a: "Both. We work with Indian companies entering the US market, US CPA firms that need offshore accounting support, and global ecommerce brands that need US sales tax compliance. Our dual expertise in Indian and US financial regulation is what makes us uniquely positioned for cross-border clients.",
  },
  {
    q: "What accounting software do you use?",
    a: "We primarily work in QuickBooks Online and QuickBooks Desktop, which are the dominant platforms for US-standard bookkeeping. We also support Xero and can adapt to your existing software stack. All our bookkeepers are QuickBooks-trained and most hold ProAdvisor certification.",
  },
  {
    q: "How does the CPA firm outsourcing model work?",
    a: "We act as your white-label back-office. You send us client files via your preferred secure file-sharing system, we return completed bookkeeping, reconciliations, and/or tax prep drafts within an agreed SLA, typically 24–48 hours for standard files. We never contact your clients directly. You review, finalize, and deliver under your firm's name.",
  },
  {
    q: "How do you handle data security and confidentiality?",
    a: "All client data is handled under strict confidentiality agreements. We use encrypted file transfer, role-based access controls, and secure cloud storage. Our team members are individually bound by NDA. We can also work within your firm's existing security infrastructure for CPA outsourcing engagements.",
  },
  {
    q: "Can you help me set up a US LLC as an Indian citizen?",
    a: "Yes, this is one of our most common services. We handle the full formation process — state selection, LLC formation, EIN application, registered agent setup, and your first-year annual report compliance. We also advise on the optimal state of formation based on your business model and likely investor requirements.",
  },
  {
    q: "What US states do you handle sales tax for?",
    a: "All 50 states and Washington D.C. where sales tax applies. We conduct economic nexus analysis to determine which states require registration and filing based on your revenue thresholds and transaction counts, then handle registration, ongoing return preparation, and any amendment filing required.",
  },
  {
    q: "How quickly can you get started with our account?",
    a: "For most services, we can complete onboarding and begin work within 3–5 business days of signing. For CPA firm outsourcing, we typically run a 2-week trial engagement on a small client to calibrate quality expectations before full onboarding. Schedule a call and we'll give you an exact timeline based on your specific needs.",
  },
];
export default function HomeFAQ() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="inline-block text-[#06363c] text-[10px] sm:text-[12px] tracking-[0.18em] font-semibold uppercase mb-3 border border-[#06363c]/20 rounded-full px-4 py-1.5 bg-[#06363c]/5">
            FAQ
          </span>

          <h2 className="text-[#0a0a0a] text-[26px] sm:text-[34px] md:text-[42px] lg:text-[48px] font-bold leading-tight tracking-tight">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-[#6b7280] text-[13px] sm:text-[16px] leading-7 max-w-2xl mx-auto">
            Quick answers about FinliGen’s accounting, tax compliance, and
            cross-border advisory services.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: i * 0.06 }}
              className="rounded-2xl border border-gray-200 bg-gray-50 overflow-hidden hover:border-[#06363c]/25 transition-all duration-300"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 text-left p-5 sm:p-6"
              >
                <h3 className="text-[#0a0a0a] text-[14px] sm:text-[16px] font-semibold leading-snug">
                  {faq.q}
                </h3>

                <motion.div
                  animate={{ rotate: openFaq === i ? 90 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="w-9 h-9 min-w-9 rounded-xl bg-[#06363c]/10 text-[#06363c] flex items-center justify-center"
                >
                  <FiChevronDown size={20} />
                </motion.div>
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
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                      <div className="h-[1px] bg-gray-200 mb-4" />
                      <p className="text-[#6b7280] text-[13px] sm:text-[15px] leading-7">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-[#06363c] hover:bg-[#052f35] text-white px-6 py-3 rounded-xl text-[14px] font-semibold transition-all duration-300"
          >
            Still have questions?
            <FiChevronDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}