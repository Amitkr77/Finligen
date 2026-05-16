import { AiOutlineLinkedin } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/* ───────────────── BACKGROUND COMPONENTS ───────────────── */

function FloatingOrb({
  className,
  duration = 9,
}) {
  return (
    <motion.div
      animate={{
        y: [0, -18, 0],

        x: [0, 10, 0],
        scale: [1, 1.08, 1],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute rounded-full bg-red-300/10 pointer-events-none will-change-transform ${className}`}
    />
  );
}

function PulseRing({
  className,
  duration = 5,
}) {
  return (
    <motion.div
      animate={{
        scale: [1, 1.4, 1],
        opacity: [0.3, 0.08, 0.3],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute rounded-full border bg-gray-200 pointer-events-none ${className}`}
    />
  );
}

function MorphingBlob({ className }) {
  return (
    <motion.div
      animate={{
        borderRadius: [
          "30% 70% 70% 30% / 30% 30% 70% 70%",
          "70% 30% 30% 70% / 70% 70% 30% 30%",
          "30% 70% 70% 30% / 70% 70% 30% 30%",
          "60% 40% 30% 70% / 50% 60% 40% 50%",
          "30% 70% 70% 30% / 30% 30% 70% 70%",
        ],

        scale: [1, 1.08, 0.95, 1],

        rotate: [0, 20, -20, 0],

        /* FISH-LIKE MOVEMENT */
        x: [
          "0%",
          "120%",
          "80%",
          "-60%",
          "40%",
          "0%",
        ],

        y: [
          "0%",
          "-40%",
          "60%",
          "20%",
          "-30%",
          "0%",
        ],
      }}
      transition={{
        duration: 28,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`
        absolute
        pointer-events-none
        will-change-transform
        ${className}
      `}
    />
  );
}

function GridPattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="grid"
          width="48"
          height="48"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 48 0 L 0 0 0 48"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.4"
            className="text-neutral-200"
          />
        </pattern>
      </defs>

      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );
}

function AnimatedDots({ count = 20 }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {Array.from({ length: count }).map((_, i) => {

        const size = (i % 4) + 2;

        const top = (i * 17) % 100;
        const left = (i * 23) % 100;

        const moveX1 = ((i * 37) % 120) - 60;
        const moveX2 = ((i * 53) % 120) - 60;

        const moveY1 = ((i * 41) % 120) - 60;
        const moveY2 = ((i * 29) % 120) - 60;

        const duration = 6 + (i % 6);

        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-red-600"
            style={{
              width: size,
              height: size,
              top: `${top}%`,
              left: `${left}%`,
            }}
            animate={{
              x: [0, moveX1, moveX2, 0],
              y: [0, moveY1, moveY2, 0],
              opacity: [0, 0.7, 0],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        );
      })}
    </div>
  );
}

/* ───────────────── FOOTER ───────────────── */

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-white w-full border-t border-gray-200">

      {/* ───────── BACKGROUND LAYER ───────── */}

      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        <GridPattern />

        <AnimatedDots count={20} />

        {/* ORBS */}
        <FloatingOrb className="w-[350px] h-[350px] -top-[120px] -left-[80px] bg-[#0d4b52]/[0.04] blur-[90px]" />

        <FloatingOrb
          duration={11}
          className="w-[280px] h-[280px] -bottom-[100px] -right-[60px] bg-[#0d4b52]/[0.05] blur-[80px]"
        />

        {/* BLOBS */}
        <MorphingBlob className="w-[180px] h-[180px] top-[12%] right-[10%] bg-[#0d4b52]/[0.03]" />

        <MorphingBlob className="w-[140px] h-[140px] bottom-[18%] left-[12%] bg-black/[0.02]" />

        {/* RINGS */}
        <PulseRing className="w-[120px] h-[120px] top-[10%] left-[25%] border-[#0d4b52]/20" />

        <PulseRing
          duration={7}
          className="w-[160px] h-[160px] bottom-[12%] right-[18%] border-[#0d4b52]/10"
        />

        {/* LIGHT ACCENTS */}
        <motion.div
          animate={{
            opacity: [0.08, 0.2, 0.08],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[35%] right-[5%] w-px h-[120px] bg-gradient-to-b from-transparent via-[#0d4b52]/20 to-transparent rotate-[20deg]"
        />

        <motion.div
          animate={{
            opacity: [0.06, 0.14, 0.06],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[25%] left-[6%] w-px h-[90px] bg-gradient-to-b from-transparent via-[#0d4b52]/15 to-transparent -rotate-[18deg]"
        />
      </div>

      {/* ───────── ORIGINAL CONTENT ───────── */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-6">

        {/* TOP SECTION */}
        <div className="flex flex-col lg:flex-row justify-between gap-16">

          {/* LEFT SIDE */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-14">

            {/* Company */}
            <div>
              <h3 className="text-black text-[16px] font-semibold mb-5">
                Company
              </h3>

              <ul className="space-y-3">
                <li>
                  <Link
                    to="/"
                    className="text-gray-500 hover:text-black transition text-[15px]"
                  >
                    About Us
                  </Link>
                </li>

                <li>
                  <Link
                    to="/test"
                    className="text-gray-500 hover:text-black transition text-[15px]"
                  >
                    Customers
                  </Link>
                </li>

                <li>
                  <Link
                    to="#"
                    className="text-gray-500 hover:text-black transition text-[15px]"
                  >
                    Newsroom
                  </Link>
                </li>

                <li>
                  <Link
                    to="#"
                    className="text-gray-500 hover:text-black transition text-[15px]"
                  >
                    Events
                  </Link>
                </li>
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h3 className="text-black text-[16px] font-semibold mb-5">
                Industries
              </h3>

              <ul className="space-y-3">
                <li>
                  <Link
                    to="#"
                    className="text-gray-500 hover:text-black transition text-[15px]"
                  >
                    Precision Metalforming
                  </Link>
                </li>

                <li>
                  <Link
                    to="#"
                    className="text-gray-500 hover:text-black transition text-[15px]"
                  >
                    Industrial Manufacturing
                  </Link>
                </li>

                <li>
                  <Link
                    to="#"
                    className="text-gray-500 hover:text-black transition text-[15px]"
                  >
                    High Tec & Electronics
                  </Link>
                </li>

                <li>
                  <Link
                    to="#"
                    className="text-gray-500 hover:text-black transition text-[15px]"
                  >
                    Aerospace
                  </Link>
                </li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h3 className="text-black text-[16px] font-semibold mb-5">
                Products
              </h3>

              <ul className="space-y-3">
                <li>
                  <Link
                    to="#"
                    className="text-gray-500 hover:text-black transition text-[15px]"
                  >
                    Manufacturing Execution System
                  </Link>
                </li>

                <li>
                  <Link
                    to="#"
                    className="text-gray-500 hover:text-black transition text-[15px]"
                  >
                    Enterprise Resource Planning
                  </Link>
                </li>

                <li>
                  <Link
                    to="#"
                    className="text-gray-500 hover:text-black transition text-[15px]"
                  >
                    Quality Management System
                  </Link>
                </li>

                <li>
                  <Link
                    to="#"
                    className="text-gray-500 hover:text-black transition text-[15px]"
                  >
                    Supply Chain Planning
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col items-start lg:items-center">

            <h1 className="text-[70px] font-semibold leading-none tracking-tight text-[#0d4b52]">
              FINLIGEN
            </h1>

            <p className="text-gray-500 text-[15px] leading-7 mt-2 max-w-[300px] lg:text-center">
              Our solutions make production faster and cheaper.
              Contact us for more information.
            </p>

            <div className="mt-2 lg:text-center">
              <h3 className="text-black text-[16px] font-semibold mb-1">
                Get In Touch
              </h3>

              <Link
                to="mailto:hallo@finligen.com"
                className="text-gray-500 hover:text-black transition text-[15px] block"
              >
                hallo@finligen.com
              </Link>

              <div className="flex items-center lg:justify-end gap-3">

                <Link
                  to="#"
                  className="w-10 h-10 rounded-full border border-gray-300 hover:bg-black hover:text-white flex items-center justify-center transition"
                >
                  <AiOutlineLinkedin size={17} />
                </Link>

                <Link
                  to="#"
                  className="w-10 h-10 rounded-full border border-gray-300 hover:bg-black hover:text-white flex items-center justify-center transition"
                >
                  <FaYoutube size={17} />
                </Link>

                <Link
                  to="#"
                  className="w-10 h-10 rounded-full border border-gray-300 hover:bg-black hover:text-white flex items-center justify-center transition"
                >
                  <FaFacebook size={17} />
                </Link>

              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-gray-200 mt-6 pt-3 flex flex-col md:flex-row items-center justify-between gap-5">

          <p className="text-gray-400 text-[14px]">
            © 2024 Finligen, All rights reserved
          </p>

          <div className="flex items-center gap-8">
            <Link
              to="#"
              className="text-gray-400 hover:text-black transition text-[14px]"
            >
              Terms & Conditions
            </Link>

            <Link
              to="#"
              className="text-gray-400 hover:text-black transition text-[14px]"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;