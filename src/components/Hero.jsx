import heroImg from '../assets/hero.png'
import heroBg from '../assets/hero-bg.png'

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden bg-gray-300">

      {/* SOFT ROTATED BACKGROUND */}
      <div
        className="
          absolute
          left-[-49%]
          top-1/3
          h-[177%]
          w-[190%]
          -translate-y-1/2
          rotate-90
          bg-no-repeat
          bg-contain
          opacity-40
          pointer-events-none
        "
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* FADE MASK (prevents section-like edge) */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-transparent to-gray-100"></div>

      {/* CONTENT */}
      <div className="relative mx-auto max-w-6xl px-4 py-16">
        <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">

          {/* LEFT */}
          <div>
            <h1 className="text-4xl font-black leading-tight md:text-6xl text-black">
              Skills Beyond <br className="hidden md:block" /> Drafting
            </h1>

            <h2 className="mt-10 mb-6 text-3xl font-bold text-black">
              How can Syncron support you today?
            </h2>

            <div className="grid grid-cols-2 gap-3 max-w-lg">
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
                  className="h-20
        flex
        items-center
        justify-center
        gap-2
        rounded-xl
        bg-gray-500
        px-6
        text-base
        md:text-lg
        text-white
        font-semibold
        transition
        hover:bg-black
        shadow-lg
        text-center"
                >
                  {text}
                </a>
              ))}
            </div>

            <p className="mt-6 max-w-md text-xl text-neutral-800">
              Syncron BIM Hub is a BIM training and consultancy firm focused on
              practical BIM implementation, not just software learning.
            </p>

            <ul className="mt-4 space-y-1 text-xl text-neutral-900">
              <li>• BIM aligned with ISO 19650</li>
              <li>• Industry-driven workflows</li>
              <li>• MEP-focused expertise</li>
              <li>• Training + real project exposure</li>
            </ul>
          </div>

          {/* RIGHT – MAN POPS FROM BOTTOM */}
          <div className="relative h-[550px] md:h-[520px]">
            <img
              src={heroImg}
              alt="BIM Engineer"
              className="
                absolute
      -bottom-44
      right-[200px]
      md:-bottom-52
      md:right-0
      w-[600px]
      max-w-2xl
      md:max-w-[900px]
      object-contain"
            style={{left:"100px" }}
/>
          </div>

        </div>
      </div>
    </section>
  )
}
