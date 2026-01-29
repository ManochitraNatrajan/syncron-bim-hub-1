import girlGuyImg from '../assets/girl_guy.png'

export default function HowSyncronApproachesBim() {
  return (
    <>
      <section className="relative w-full overflow-hidden bg-neutral-200 py-16 md:py-24">
        {/* Subtle diagonal grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 20px,
              rgba(255,255,255,0.6) 20px,
              rgba(255,255,255,0.6) 21px
            )`,
          }}
          aria-hidden
        />

        <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 px-4 md:grid-cols-[0.4fr_1fr]">
          {/* Left: 50% crop of girl_guy.png (guy only) – natural aspect so full figure including hands shows */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-sm md:max-w-sm">
            <img
              src={girlGuyImg}
              alt="Syncron team member"
              className="block w-[200%] max-w-none object-cover object-left"
            />
          </div>

          {/* Right: Words left, title right */}
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-14">
            <div className="space-y-6 md:flex-1">
              <ul className="space-y-3 text-base font-medium text-neutral-800 md:text-lg">
                <li>• BIM taught as a process, not as a software</li>
                <li>• ISO 19650 introduced as understanding, not compliance</li>
                <li>• Responsibility explained before deliverables</li>
                <li>• Learning aligned with real project behaviour</li>
              </ul>

              <div className="space-y-5 text-base leading-7 text-neutral-700 md:text-lg md:leading-8">
                <p>
                  This understanding shapes our vision and mission. We aim to build the right BIM
                  mindset in students and professionals, knowing that today&apos;s learners will shape
                  tomorrow&apos;s BIM practice.
                </p>
                <p>
                  Syncron&apos;s mission is to share this knowledge through simplified, practical
                  training grounded in real project workflows.
                </p>
              </div>
            </div>

            <h2 className="flex shrink-0 flex-col text-2xl font-bold leading-tight tracking-tight text-black md:text-3xl lg:text-4xl">
              <span>How</span>
              <span>Syncron</span>
              <span>Approaches</span>
              <span>BIM</span>
            </h2>
          </div>
        </div>
      </section>

      {/* Our Understanding – black bg, white circle, BIM / ISO19650 columns */}
      <section className="w-full bg-black py-16 md:py-20" aria-labelledby="our-understanding-heading">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 px-4 md:flex-row md:items-stretch md:justify-between md:gap-8 lg:gap-12">
          {/* Left: BIM */}
          <div className="w-full max-w-xs text-left md:flex-1 md:max-w-none">
            <h3 id="our-understanding-heading" className="mb-4 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
              BIM
            </h3>
            <ul className="space-y-3 text-base text-white md:text-lg">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white" aria-hidden />
                <span>A methodology for digital information creation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white" aria-hidden />
                <span>Focused on models, data, and coordination</span>
              </li>
            </ul>
          </div>

          {/* Center: Our Understanding – white circle + ellipses + dots */}
          <div className="relative flex h-52 w-64 shrink-0 items-center justify-center md:h-56 md:w-72">
            {/* Decorative concentric ellipses (pill shape) */}
            <div className="absolute inset-0 flex items-center justify-center" aria-hidden>
              <div className="absolute left-1/2 top-1/2 h-24 w-56 -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-neutral-500 md:h-28 md:w-64" />
              <div className="absolute left-1/2 top-1/2 h-32 w-64 -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-neutral-500 md:h-36 md:w-72" />
              <div className="absolute left-1/2 top-1/2 h-40 w-72 -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-neutral-500 md:h-44 md:w-80" />
            </div>
            {/* Horizontal dots */}
            <div className="absolute left-2 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-neutral-500 md:left-3" aria-hidden />
            <div className="absolute right-2 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-neutral-500 md:right-3" aria-hidden />
            {/* White circle + wording */}
            <div
              className="relative z-10 flex h-36 w-36 shrink-0 items-center justify-center rounded-full bg-white md:h-44 md:w-44"
              aria-hidden
            >
              <p className="text-center text-sm font-semibold leading-tight text-black md:text-base">
                Our<br />Understanding
              </p>
            </div>
          </div>

          {/* Right: ISO19650 */}
          <div className="w-full max-w-xs text-left md:flex-1 md:max-w-none md:text-right">
            <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
              ISO19650
            </h3>
            <ul className="space-y-3 text-base text-white md:text-lg md:flex md:flex-col md:items-end">
              <li className="flex items-start gap-2 md:flex-row-reverse md:gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white md:mt-1.5" aria-hidden />
                <span>A framework for managing &amp; delivering information</span>
              </li>
              <li className="flex items-start gap-2 md:flex-row-reverse md:gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white md:mt-1.5" aria-hidden />
                <span>Defines processes, roles, and information flow</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full bg-neutral-300 py-16 md:py-20" aria-labelledby="services-heading">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-0 md:grid-cols-3">
            {/* Training Column */}
            <div className="relative px-8 py-12 md:px-10">
              <h3 className="mb-6 text-3xl font-bold text-black md:text-4xl">Training</h3>
              <ul className="mb-8 space-y-3 text-base font-medium text-black md:text-lg">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-black" aria-hidden />
                  <span>For students & working professionals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-black" aria-hidden />
                  <span>Structured modules</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-black" aria-hidden />
                  <span>Outcome-oriented learning</span>
                </li>
              </ul>
              <button className="rounded-lg border-2 border-white bg-black px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-neutral-900">
                Explore Training &gt;
              </button>
              {/* Diagonal separator */}
              <div className="absolute right-0 top-0 hidden h-full w-px bg-neutral-400 md:block" style={{ transform: 'skewX(-15deg)' }} aria-hidden />
            </div>

            {/* BIM Consulting Column */}
            <div className="relative px-8 py-12 md:px-10">
              <p className="mb-2 text-sm font-semibold text-black md:text-base">Our Services</p>
              <h3 className="mb-6 text-3xl font-bold text-black md:text-4xl">BIM Consulting</h3>
              <ul className="mb-8 space-y-3 text-base font-medium text-black md:text-lg">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-black" aria-hidden />
                  <span>BIM Project Modeling</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-black" aria-hidden />
                  <span>Transform your organisation to BIM workflow</span>
                </li>
              </ul>
              <button className="rounded-lg border-2 border-white bg-black px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-neutral-900">
                Discuss a Project &gt;
              </button>
              {/* Diagonal separator */}
              <div className="absolute right-0 top-0 hidden h-full w-px bg-neutral-400 md:block" style={{ transform: 'skewX(-15deg)' }} aria-hidden />
            </div>

            {/* Resources Deployment Column */}
            <div className="relative px-8 py-12 md:px-10">
              <h3 className="mb-6 text-3xl font-bold text-black md:text-4xl">Resources Deployment</h3>
              <ul className="mb-8 space-y-3 text-base font-medium text-black md:text-lg">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-black" aria-hidden />
                  <span>Short-term BIM support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-black" aria-hidden />
                  <span>Trained & Syncron-ready resources</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-black" aria-hidden />
                  <span>Reduced onboarding time</span>
                </li>
              </ul>
              <button className="rounded-lg border-2 border-white bg-black px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-neutral-900">
                Request Resources &gt;
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
