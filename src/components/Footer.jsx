import qr from '../assets/qr.png'
import ftbg from '../assets/footerbg.png'
import {
  Instagram,
  Linkedin,
  MessageCircle,
  X,
  Facebook,
  Youtube,
  Check,
} from 'lucide-react'

export default function Footer() {
  const benefits = [
    'Knowledge sharing',
    'ISO 19650 Awareness',
    'Industry latest updates',
    'Connect BIM Professionals',
  ]

  const socialLinks = [
    { Icon: MessageCircle, href: 'https://wa.me/message/6J4KZMN52GMSN1', label: 'WhatsApp' },
    { Icon: Linkedin, href: 'https://www.linkedin.com/in/syncron-bim-hub-9b28303a5/', label: 'LinkedIn' },
    { Icon: Instagram, href: 'https://www.instagram.com/syncronbimhub/?hl=en', label: 'Instagram' },
    { Icon: Youtube, href: 'https://www.youtube.com/@SyncronBIM', label: 'YouTube' },
    { Icon: X, href: 'https://x.com/SyncronBIM', label: 'X' },
    { Icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61586279708978', label: 'Facebook' },
  ]

  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[#1A1A1A] text-white font-alata"
    >
      {/* Background */}
      <div
        className="pointer-events-none absolute inset-0 
                   bg-no-repeat bg-center bg-cover opacity-[0.08]"
        style={{ backgroundImage: `url(${ftbg})` }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-14 md:px-8">
        
        {/* TWO CLEAR SECTIONS */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* LEFT SECTION */}
          <section>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Join BIM Sync Community
            </h2>

            <div className="mt-8 flex flex-col gap-6 sm:flex-row">
              <div className="flex-shrink-0">
                <div className="overflow-hidden rounded-xl bg-white shadow-lg p-2">
                  <img
                    src={qr}
                    alt="WhatsApp community QR code"
                    className="h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 object-cover"
                  />
                </div>
                <p className="mt-3 text-center text-sm font-medium">
                  Scan to Join
                </p>
              </div>

              <ul className="flex flex-col gap-3">
                {benefits.map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#333]">
                      <Check size={14} strokeWidth={3} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-8 text-2xl font-medium md:text-3xl">
              Where BIM Professionals think together...
            </p>
          </section>

          {/* RIGHT SECTION — ON RIGHT, TEXT LEFT */}
          <section className="justify-self-stretch text-left lg:pl-52">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Connect Us
            </h2>

            <div className="mt-8 space-y-4">
              <div>
                <p className="font-semibold">Main Office</p>
                <p className="mt-1 leading-relaxed">
                  Perambalur - 621212
                  <br />
                  Tamilnadu, India.
                </p>
              </div>

              <p>
                <span className="font-semibold">Tel:</span> +91 90877 00122
              </p>

              <p>
                <span className="font-semibold">Email:</span> info@syncronbim.com
              </p>

              <p>
                <a
                  href="https://www.syncronbim.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  www.syncronbim.com
                </a>
              </p>
            </div>

            <div className="mt-8">
              <div className="flex flex-wrap gap-3">
                {socialLinks.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"   // ensures it opens in a new tab
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center 
                               rounded-full bg-[#333] hover:bg-[#444]"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>

              <p className="mt-3 text-sm text-white/80">
                Click to follow us on our social media
              </p>
            </div>
          </section>

        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Syncron BIM Hub. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
