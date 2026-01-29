import qr from '../assets/qr.png'
import { Instagram, Linkedin, MessageCircle, X, Facebook, Youtube, Check } from 'lucide-react'

export default function Footer() {
  const benefits = [
    'Knowledge sharing',
    'ISO 19650 Awareness',
    'Industry latest updates',
    'Industry latest updates',
  ]

  const socialLinks = [
    { Icon: MessageCircle, href: '#', label: 'WhatsApp' },
    { Icon: Linkedin, href: '#', label: 'LinkedIn' },
    { Icon: Instagram, href: '#', label: 'Instagram' },
    { Icon: Youtube, href: '#', label: 'YouTube' },
    { Icon: X, href: '#', label: 'X' },
    { Icon: Facebook, href: '#', label: 'Facebook' },
  ]

  return (
    <footer id="contact" className="relative overflow-hidden bg-[#1A1A1A] text-white">
      {/* Subtle geometric overlay pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(135deg, #333 25%, transparent 25%),
            linear-gradient(225deg, #333 25%, transparent 25%),
            linear-gradient(315deg, #333 25%, transparent 25%),
            linear-gradient(45deg, #333 25%, transparent 25%)
          `,
          backgroundSize: '80px 80px',
          backgroundPosition: '0 0, 40px 0, 40px -40px, 0 40px',
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 py-14 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column: Join BIM Sync Community */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Join BIM Sync Community
            </h2>

            <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-start">
              {/* QR card */}
              <div className="flex-shrink-0">
                <div className="overflow-hidden rounded-xl bg-white shadow-lg">
                  <img
                    src={qr}
                    alt="WhatsApp community QR code"
                    className="block h-48 w-48 object-cover sm:h-52 sm:w-52"
                  />
                </div>
                <p className="mt-3 text-center text-sm font-medium text-white">
                  Scan to Join
                </p>
              </div>

              {/* Benefits list */}
              <ul className="flex flex-col gap-3 sm:mt-0">
                {benefits.map((item, i) => (
                  <li key={`${item}-${i}`} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#333] text-white">
                      <Check size={14} strokeWidth={3} />
                    </span>
                    <span className="text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-8 text-2xl font-medium leading-snug text-white md:text-3xl">
              Where BIM Professionals think together...
            </p>
          </div>

          {/* Right column: Connect Us */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Connect Us
            </h2>

            <div className="mt-8 space-y-4 text-white">
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
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#333] text-white transition hover:bg-[#444]"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
              <p className="mt-3 text-sm text-white/80">
                Click to follow us on our social media
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Syncron BIM Hub. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
