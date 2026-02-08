import sbBg from '../assets/sb_bg.png'

export default function BimPhilosophy() {
  return (
    <section
      className="
        relative w-full overflow-hidden bg-black
        py-12 sm:py-14 md:py-20
      "
    >
      {/* Background image (never cropped) */}
      <div
        className="
          absolute inset-0
          bg-center bg-no-repeat
          bg-contain
          opacity-[0.12]
        "
        style={{
          backgroundImage: `url(${sbBg})`,
        }}
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white font-alata">
          Our BIM Philosophy
        </h2>

        {/* Quote */}
        <blockquote className="mt-6 md:mt-8 text-2xl md:text-2xl lg:text-3xl leading-relaxed text-white font-alata">
          &lsquo;BIM alone is not enough,
          <br />
          Clear information workflows make it effective&rsquo;
        </blockquote>

        {/* Paragraphs */}
        <div className="mt-8 md:mt-10 space-y-5 text-left text-lg md:text-xl leading-relaxed text-neutral-300 font-semibold font-alata">
          <p>
            We believe BIM maturity comes from real project responsibility,
            continuous learning, and experience.
          </p>
          <p>
            Our role is to build understanding and readiness — not to replace
            real project exposure or promise outcomes beyond an individual&apos;s
            effort and the industry environment.
          </p>
        </div>
      </div>
    </section>
  )
}
