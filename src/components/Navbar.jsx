import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const menuItems = [
    { key: "", label: "Home", path: "/" },
    { key: "resume", label: "Resume", path: "/resume" },
    { key: "skills", label: "Skills", path: "/skills" },
    { key: "projects", label: "Projects", path: "/projects" },
    { key: "contact", label: "Contact", path: "/contact" },
  ];

  const handleLinkClick = (key) => {
    setActiveLink(key);
    setMobileMenuOpen(false);
    navigate(key);
  };

  return (
    <>
      <nav className="bg-white border-b-4 border-black sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button
                onClick={() => handleLinkClick("")}
                className="cursor-pointer bg-blue-200 border-4 border-black px-4 py-2 font-black text-xl uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
              >
                ND
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-2">
              {menuItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleLinkClick(item.key)}
                  className={`px-4 py-2 font-bold uppercase text-sm border-4 border-black transition-all cursor-pointer ${
                    activeLink === item.key
                      ? "bg-blue-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                      : "bg-white hover:bg-blue-200 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden bg-black text-white border-4 border-black px-4 py-2 font-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    strokeWidth={3}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    strokeWidth={3}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Overlay */}
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-50"
          />

          {/* Drawer */}
          <div className="fixed right-0 top-0 bottom-0 w-64 bg-white border-l-4 border-black shadow-[-8px_0px_0px_0px_rgba(0,0,0,1)] transform transition-transform">
            {/* Drawer Header */}
            <div className="bg-blue-200 border-b-4 border-black p-4 flex justify-between items-center">
              <h2 className="font-black text-xl uppercase">Menu</h2>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="bg-black text-white border-4 border-black px-3 py-2 font-black"
              >
                ✕
              </button>
            </div>

            {/* Drawer Menu Items */}
            <div className="p-4 space-y-3">
              {menuItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleLinkClick(item.key)}
                  className={`w-full px-4 py-3 font-bold uppercase text-left border-4 border-black transition-all ${
                    activeLink === item.key
                      ? "bg-blue-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                      : "bg-white hover:bg-blue-200 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Decorative Element */}
            <div className="absolute bottom-4 left-4">
              <div className="w-16 h-16 bg-blue-200 border-4 border-black transform rotate-12"></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
