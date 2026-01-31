import sbBg from '../assets/sb_bg.png'

export default function BimPhilosophy() {
  return (
    <section className="relative min-h-[520px] w-full overflow-hidden bg-black py-20 md:py-20">
      {/* Background image with reduced opacity so it stays subtle */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat opacity-[0.12]"
        style={{ backgroundImage: `url(${sbBg})`, backgroundSize: '30%' }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
          Our BIM Philosophy
        </h2>

        <blockquote className="mt-8 text-lg leading-relaxed text-white md:text-xl">
          &lsquo;BIM alone is not enough,
          <br />
          Clear information workflows make it effective&rsquo;
        </blockquote>

        <div className="mt-10 space-y-4 text-left text-sm leading-6 text-neutral-300 md:text-base">
          <p>
            We believe BIM maturity comes from real project responsibility, continuous learning, and
            experience.
          </p>
          <p>
            Our role is to build understanding and readiness — not to replace real project exposure
            or promise outcomes beyond an individual&apos;s effort and the industry environment.
          </p>
        </div>
      </div>
    </section>
  )
}
