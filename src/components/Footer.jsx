
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-[#02070d] text-white w-full border-t-[6px] border-[#0d4b52]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-8">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">

              {/* Logo */}
              <div className="w-8 h-8 rounded-full bg-[#0c3b42] flex items-center justify-center">
                <div className="w-3 h-3 border-[3px] border-white border-r-transparent rounded-full rotate-45"></div>
              </div>

              <h1 className="text-[22px] font-semibold tracking-tight">
                Prodmast
              </h1>
            </div>

            <p className="text-gray-400 text-[15px] leading-7 max-w-[240px]">
              Our solutions make production faster and cheaper.
              Contact us for more information.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white text-[16px] font-semibold mb-5">
              Company
            </h3>

            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition text-[15px]"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition text-[15px]"
                >
                  Customers
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition text-[15px]"
                >
                  Newsroom
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition text-[15px]"
                >
                  Events
                </a>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-white text-[16px] font-semibold mb-5">
              Industries
            </h3>

            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition text-[15px]"
                >
                  Precision Metalforming
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition text-[15px]"
                >
                  Industrial Manufacturing
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition text-[15px]"
                >
                  High Tec & Electronics
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition text-[15px]"
                >
                  Aerospace
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white text-[16px] font-semibold mb-5">
              Products
            </h3>

            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition text-[15px]"
                >
                  Manufacturing Execution System
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition text-[15px]"
                >
                  Enterprise Resource Planning
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition text-[15px]"
                >
                  Quality Management System
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition text-[15px]"
                >
                  Supply Chain Planning
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-[16px] font-semibold mb-5">
              Get In Touch
            </h3>

            <a
              href="mailto:hallo@prodmast.com"
              className="text-gray-400 hover:text-white transition text-[15px] block mb-5"
            >
              hallo@prodmast.com
            </a>

            {/* Social Icons */}
            <div className="flex items-center gap-3">

              <a
                href="#"
                className="w-9 h-9 rounded-md bg-[#161b22] hover:bg-[#1f2937] flex items-center justify-center transition"
              >
                <AiOutlineLinkedin size={17} />
              </a>

              <a
                href="#"
                className="w-9 h-9 rounded-md bg-[#161b22] hover:bg-[#1f2937] flex items-center justify-center transition"
              >
                <FaYoutube size={17} />
              </a>

              <a
                href="#"
                className="w-9 h-9 rounded-md bg-[#161b22] hover:bg-[#1f2937] flex items-center justify-center transition"
              >
                <FaFacebook size={17} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#1a222c] mt-14 pt-7 flex flex-col md:flex-row items-center justify-between gap-5">

          {/* Copyright */}
          <p className="text-gray-500 text-[14px]">
            © 2024 Prodmast, All rights reserved
          </p>

          {/* Bottom Links */}
          <div className="flex items-center gap-8">
            <a
              href="#"
              className="text-gray-500 hover:text-white transition text-[14px]"
            >
              Terms & Conditions
            </a>

            <a
              href="#"
              className="text-gray-500 hover:text-white transition text-[14px]"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;