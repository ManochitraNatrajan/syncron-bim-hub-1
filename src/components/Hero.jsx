import heroImg from '../assets/hero.png'
import heroBg from '../assets/hero-bg.png'

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen md:min-h-[90vh] overflow-hidden bg-neutral-300">

      {/* SOFT ROTATED BACKGROUND */}
      <div
        className="absolute left-[-130%] top-1/3 h-[300%] w-[290%] -translate-y-1/2 bg-no-repeat bg-contain opacity-40 pointer-events-none"
  style={{
    backgroundImage: `url(${heroBg})`,
    backgroundPosition: 'top-right',
    backgroundSize: 'cover',
  }}
      />

      {/* FADE MASK */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-transparent to-gray-200"></div>

      {/* CONTENT */}
      <div className="relative mx-auto max-w-6xl px-4 py-10 md:py-16">

        {/* ⬇️ ONLY CHANGE IS HERE */}
        <div
          className="
            grid
            items-center
            gap-8 md:gap-10

            min-[480px]:grid-cols-2
            md:grid-cols-[1.1fr_0.9fr]
          "
        >

          {/* LEFT */}
          <div>
            <h1 className="text-4xl font-black leading-tight md:text-6xl text-black font-alata">
              Skills Beyond <br className="hidden md:block" /> Drafting
            </h1>

            <h2 className="mt-10 mb-6 text-3xl font-bold text-black font-alata">
              How can Syncron support you today?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg">
              {[
                "🎓Learn BIM",
                "🧑‍💻BIM Resources",
                "🏗️BIM Project Support",
                "💼BIM Consulting",
              ].map((text, i) => (
                <a
                  key={i}
                  href="/training"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    h-20
                    flex items-center justify-center gap-2
                    rounded-xl bg-gray-300
                    px-6 text-base md:text-lg
                    text-black font-semibold
                    transition hover:bg-white
                    shadow-lg text-center
                  "
                >
                  {text}
                </a>
              ))}
            </div>

            <p className="mt-6 max-w-md text-xl text-neutral-800 font-alata">
              Syncron BIM Hub is a BIM training and consultancy firm focused on
              practical BIM implementation, not just software learning.
            </p>

            <ul className="mt-4 space-y-1 text-xl text-neutral-900 font-alata">
              <li>• BIM aligned with ISO 19650</li>
              <li>• Industry-driven workflows</li>
              <li>• MEP-focused expertise</li>
              <li>• Training + real project exposure</li>
            </ul>
          </div>

          {/* RIGHT – MAN IMAGE */}
          <div
            className="
              relative
    mt-20 sm:mt-28 md:mt-0
    h-[420px] sm:h-[480px] md:h-[720px]

    min-[480px]:overflow-hidden
    md:overflow-visible
            "
          >
            <img
              src={heroImg}
              alt="BIM Engineer"
              className="
                absolute
    -bottom-36
    right-0

    /* MOBILE-DESKTOP VIEW FIX */
    min-[480px]:right-[-40px]

    /* DESKTOP (UNCHANGED) */
    md:-bottom-52
    md:right-[-154px]

    w-[360px]
    sm:w-[420px]
    md:w-[640px]
    max-w-none
    object-contain

    /* REAL MOBILE */
    max-md:static
    max-md:mx-auto
    max-md:mt-[-70px]
              "
            />
          </div>

        </div>
      </div>
    </section>
  )
}

