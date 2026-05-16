import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "CPA Firms", path: "/cpa-firms" },
    { name: "Blog", path: "/blog" },
  ];

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#f5f5f5]/80 supports-[backdrop-filter]:bg-[#f5f5f5]/60 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-[62px]">
          
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-full bg-[#0c3b42] flex items-center justify-center">
              <span className="text-white text-[16px] font-bold">F</span>
            </div>

            <h1 className="text-[18px] font-semibold text-[#111827] group-hover:text-[#0c3b42] transition">
              FINLIGEN
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-[14px] font-medium transition duration-300 ${
                    isActive
                      ? "text-black"
                      : "text-gray-700 hover:text-black"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <Link
              to="/signup"
              className="inline-block bg-[#0c3b42] hover:bg-[#092d33] text-white text-[14px] font-medium px-6 py-2.5 rounded-full transition duration-300"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2"
            onClick={toggleMenu}
            type="button"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-[400px] opacity-100 pb-5" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-4 pt-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `font-medium transition ${
                    isActive
                      ? "text-black"
                      : "text-gray-700 hover:text-black"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            <Link
              to="/signup"
              onClick={closeMenu}
              className="bg-[#0c3b42] hover:bg-[#092d33] text-white py-3 rounded-full text-sm font-medium mt-2 text-center transition duration-300"
            >
              Sign Up
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;