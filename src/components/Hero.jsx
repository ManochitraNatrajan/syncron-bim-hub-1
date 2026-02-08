import heroImg from '../assets/hero.png'
import heroBg from '../assets/hero-bg.png'

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-neutral-300">
      
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
      <div className="relative mx-auto max-w-6xl px-4 pt-10 md:pt-16 pb-0">
        <div
          className="
            grid
            items-center
            gap-8 md:gap-10
            min-[480px]:grid-cols-2
            md:grid-cols-[1.1fr_0.9fr]
          "
        >

          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-4xl md:text-8xl font-black leading-tight text-black font-alata -mt-6 md:-mt-8">
              Skills Beyond <br className="hidden md:block" /> Drafting
            </h1>

            <h2 className="mt-10 mb-6 text-3xl font-bold text-black font-alata">
              How can Syncron support you today?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg">
              {[
                "🎓 Learn BIM",
                "🧑‍💻 BIM Resources",
                "🏗️ BIM Project Support",
                "💼 BIM Consulting",
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

          {/* RIGHT IMAGE */}
          <div className="relative mt-6 md:mt-0 md:h-[720px] overflow-visible">
            <img
              src={heroImg}
              alt="BIM Engineer"
              className="
                absolute
                bottom-[-80px]
                right-[-40px]
                md:bottom-[-130px]
                md:right-[-154px]

                w-[360px]
                sm:w-[420px]
                md:w-[640px]
                max-w-none
                object-contain

                max-md:static
                max-md:mx-auto
              "
            />
          </div>

        </div>
      </div>
    </section>
  )
}
