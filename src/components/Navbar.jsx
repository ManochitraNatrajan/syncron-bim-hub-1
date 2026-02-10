import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/nav-logo.png";
import logoname from "../assets/logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const closeMenu = () => setOpen(false);

  const NavLink = ({ label, to, state, onClick }) => (
    <Link
      to={to}
      state={state}
      onClick={() => {
        closeMenu();
        onClick?.();
      }}
      className="block py-3 text-lg hover:text-black"
    >
      {label}
    </Link>
  );

  return (
    <header className="w-full bg-neutral-200 sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 mt-1">
          <img src={logo} alt="logo" className="h-16 mt-1 ml-2" />
          <img src={logoname} alt="logo name" className="h-10" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-12 font-alata text-lg text-neutral-700">
          <Link to="/about">About Us</Link>

          {isHome ? (
            <a href="#services">Services</a>
          ) : (
            <Link to="/" state={{ scrollTo: "services" }}>
              Services
            </Link>
          )}

          {isHome ? (
            <a href="#career">Career</a>
          ) : (
            <Link to="/" state={{ scrollTo: "career" }}>
              Career
            </Link>
          )}

          <a href="#contact">Contact Us</a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden rounded-full border border-black/15 bg-white px-4 py-2 font-semibold shadow"
        >
          Menu
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-xl">
          <div className="px-6 py-4 font-alata text-neutral-800">
            <NavLink label="About Us" to="/about" />

            {isHome ? (
              <>
                <a href="#services" onClick={closeMenu} className="block py-3">
                  Services
                </a>
                <a href="#career" onClick={closeMenu} className="block py-3">
                  Career
                </a>
              </>
            ) : (
              <>
                <NavLink label="Services" to="/" state={{ scrollTo: "services" }} />
                <NavLink label="Career" to="/" state={{ scrollTo: "career" }} />
              </>
            )}

            <a href="#contact" onClick={closeMenu} className="block py-3">
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
