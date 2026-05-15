import { AiOutlineLinkedin } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white w-full border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6">

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
                  <a
                    href="/"
                    className="text-gray-500 hover:text-black transition text-[15px]"
                  >
                    About Us
                  </a>
                </li>

                <li>
                  <a
                    href="/test"
                    className="text-gray-500 hover:text-black transition text-[15px]"
                  >
                    Customers
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-black transition text-[15px]"
                  >
                    Newsroom
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-black transition text-[15px]"
                  >
                    Events
                  </a>
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
                  <a
                    href="#"
                    className="text-gray-500 hover:text-black transition text-[15px]"
                  >
                    Precision Metalforming
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-black transition text-[15px]"
                  >
                    Industrial Manufacturing
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-black transition text-[15px]"
                  >
                    High Tec & Electronics
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-black transition text-[15px]"
                  >
                    Aerospace
                  </a>
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
                  <a
                    href="#"
                    className="text-gray-500 hover:text-black transition text-[15px]"
                  >
                    Manufacturing Execution System
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-black transition text-[15px]"
                  >
                    Enterprise Resource Planning
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-black transition text-[15px]"
                  >
                    Quality Management System
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-black transition text-[15px]"
                  >
                    Supply Chain Planning
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col items-start lg:items-center">

            {/* COMPANY NAME */}
            <h1 className="text-[70px] font-semibold leading-none tracking-tight text-[#0d4b52]">
              FINLIGEN
            </h1>

            {/* DETAILS */}
            <p className="text-gray-500 text-[15px] leading-7 mt-2 max-w-[300px] lg:text-center">
              Our solutions make production faster and cheaper.
              Contact us for more information.
            </p>

            {/* GET IN TOUCH */}
            <div className="mt-2 lg:text-center">
              <h3 className="text-black text-[16px] font-semibold mb-1">
                Get In Touch
              </h3>

              <a
                href="mailto:hallo@finligen.com"
                className="text-gray-500 hover:text-black transition text-[15px] block"
              >
                hallo@finligen.com
              </a>

              {/* SOCIAL ICONS */}
              <div className="flex items-center lg:justify-end gap-3">

                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-gray-300 hover:bg-black hover:text-white flex items-center justify-center transition"
                >
                  <AiOutlineLinkedin size={17} />
                </a>

                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-gray-300 hover:bg-black hover:text-white flex items-center justify-center transition"
                >
                  <FaYoutube size={17} />
                </a>

                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-gray-300 hover:bg-black hover:text-white flex items-center justify-center transition"
                >
                  <FaFacebook size={17} />
                </a>
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
            <a
              href="#"
              className="text-gray-400 hover:text-black transition text-[14px]"
            >
              Terms & Conditions
            </a>

            <a
              href="#"
              className="text-gray-400 hover:text-black transition text-[14px]"
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