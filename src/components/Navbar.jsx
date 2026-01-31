import logo from '../assets/nav-logo.png'

export default function Navbar() {
  return (
    <header className="mx-auto max-w-6xl px-4">
      <div className="flex items-center justify-between">
        <a href="/" className="flex h-[14rem] items-center overflow-visible">
        <img src={logo} alt="Syncron BIM Hub" className="h-[13rem] w-auto" />
        <div className="relative mx-auto max-w-sm md:ml-auto md:max-w-none text-2xl font-bold">Syncron BIM Hub</div>
        </a>

        <nav className="hidden items-center gap-10 text-lg font-medium text-neutral-700 md:flex">
          <a className="hover:text-black" href="#services">Our Services</a>
          <a className="hover:text-black" href="#career">Career</a>
          <a className="hover:text-black" href="#contact">Connect Us</a>
        </nav>

        <button className="rounded-full border border-black/15 bg-white px-4 py-2 text-lg font-semibold text-black shadow-soft hover:bg-neutral-50 md:hidden">
          Menu
        </button>
      </div>
    </header>
  )
}
