import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Services", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#f5f5f5]/80 supports-[backdrop-filter]:bg-[#f5f5f5]/60 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-[74px]">

          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-[#0c3b42] flex items-center justify-center">
              <div className="w-3 h-3 border-[3px] border-white border-r-transparent rounded-full rotate-45"></div>
            </div>

            <h1 className="text-[18px] font-semibold text-[#111827]">
              Prodmast
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[14px] text-gray-700 font-medium hover:text-black transition duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <button className="bg-[#0c3b42] hover:bg-[#092d33] text-white text-[14px] font-medium px-6 py-2.5 rounded-full transition duration-300">
              Sign Up
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X size={26} />
            ) : (
              <Menu size={26} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-5">
            <nav className="flex flex-col gap-4 pt-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 font-medium hover:text-black transition"
                >
                  {link.name}
                </a>
              ))}

              <button className="bg-[#0c3b42] text-white py-3 rounded-full text-sm font-medium mt-2">
                Sign Up
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;