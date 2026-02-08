import { useState } from 'react'
import logo from '../assets/nav-logo.png'
import logoname from '../assets/logo.png'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full bg-neutral-200 relative z-50">
      <div className="mx-auto max-w-6xl px-4 py-3">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="Syncron BIM Hub Icon"
              className="h-16 w-auto translate-y-[2px]"
            />
            <img
              src={logoname}
              alt="Syncron BIM Hub Logo"
              className="h-10 w-auto"
            />
          </a>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-12 text-lg font-medium text-neutral-700 font-alata">
            <a className="hover:text-black" href="#services">Our Services</a>
            <a className="hover:text-black" href="#career">Career</a>
            <a className="hover:text-black" href="#contact">Connect Us</a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden rounded-full border border-black/15 bg-white px-3 py-1.5
                       text-base font-semibold text-black shadow-soft hover:bg-neutral-50"
          >
            Menu
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {open && (
          <div className="md:hidden mt-4 rounded-2xl bg-white shadow-xl border border-black/10">
            <nav className="flex flex-col divide-y text-base font-medium text-neutral-800 font-alata">
              <a
                href="#services"
                onClick={() => setOpen(false)}
                className="px-6 py-3 hover:bg-neutral-100"
              >
                Our Services
              </a>
              <a
                href="#career"
                onClick={() => setOpen(false)}
                className="px-6 py-3 hover:bg-neutral-100"
              >
                Career
              </a>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="px-6 py-3 hover:bg-neutral-100"
              >
                Connect Us
              </a>
            </nav>
          </div>
        )}

      </div>
    </header>
  )
}
