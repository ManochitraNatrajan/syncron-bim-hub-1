import logo from '../assets/nav-logo.png'
import logoname from '../assets/logo.png'

export default function Navbar() {
  return (
    <header className="w-full bg-neutral-200">
      
      {/* ↑ background applied here */}

      <div className="mx-auto max-w-6xl px-4 py-6">
        {/* ↑ controls width & height */}

        <div className="flex items-center justify-between">

          {/* Logo section */}
          <a href="/" className="flex items-center gap-1">
            <img 
              src={logo} 
              alt="Syncron BIM Hub Icon" 
              className="h-14 w-auto translate-y-1"
            />

            <img 
              src={logoname} 
              alt="Syncron BIM Hub Logo" 
              className="h-9 w-auto"
            />
          </a>

          {/* Navigation */}
          <nav className="hidden items-center gap-12 text-lg font-medium text-neutral-700 md:flex font-alata">
            <a className="hover:text-black" href="#services">Our Services</a>
            <a className="hover:text-black" href="#career">Career</a>
            <a className="hover:text-black" href="#contact">Connect Us</a>
          </nav>

          {/* Mobile menu */}
          <button className="rounded-full border border-black/15 bg-white px-4 py-2 text-lg font-semibold text-black shadow-soft hover:bg-neutral-50 md:hidden">
            Menu
          </button>

        </div>
      </div>
    </header>
  )
}
