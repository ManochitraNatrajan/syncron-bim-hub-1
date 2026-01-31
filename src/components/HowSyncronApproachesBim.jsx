import GuyImg from '../assets/guy.png'


import bimConsultingBg from "../assets/bim_consulting.jpg";
import resourceBg from "../assets/resource.jpg";
import Servicebg from "../assets/servicesbg.jpg";

export default function HowSyncronApproachesBim() {
  return (
    <>
      <section className="relative w-full overflow-hidden py-16 md:py-24">
        <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 px-4 md:grid-cols-[0.5fr_1fr]">
  {/* Left: Full image of guy */}
  <div className="mx-auto max-w-sm md:ml-auto md:max-w-none">
    <img
      src={GuyImg} // your guy image import
      alt="Team member - guy"
      className="block w-[120%] md:w-[150%] h-auto object-contain"
      style={{width:"500px",position:"absolute",left:"-60px",top:"-90px"}}
    />
  </div>
          {/* Right: Words left, title right */}
          <div className="flex flex-col gap-20 md:flex-row md:items-start md:gap-5">
            <div className="space-y-6 md:flex-1">
              <ul className="space-y-3 text-base font-medium text-neutral-800 md:text-lg" >
                <li>• BIM taught as a process, not as a software</li>
                <li>• ISO 19650 introduced as understanding, not compliance</li>
                <li>• Responsibility explained before deliverables</li>
                <li>• Learning aligned with real project behaviour</li>
              </ul>

              <div className="space-y-5 text-base leading-7 text-neutral-700 md:text-lg md:leading-8">
                <p >
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

            <h1 className="flex gap-20 shrink-0 flex-col text-5xl font-bold leading-tight tracking-tight text-black md:text-5xl lg:text-5xl">
              <span style={{fontSize:"60px",width:"150px"}}>How</span>
              <span style={{fontSize:"60px",width:"150px"}}>Syncron</span>
              <span style={{fontSize:"60px",width:"150px"}}>Approaches</span>
              <span style={{fontSize:"60px",width:"150px"}}>BIM</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Our Understanding – black bg, white circle, BIM / ISO19650 columns */}
      <section className="w-full bg-black py-16 md:py-50" aria-labelledby="our-understanding-heading">
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
          <div className="relative flex h-52 w-94 shrink-0 items-center justify-center md:h-56 md:w-72">
            {/* Decorative concentric ellipses (pill shape) */}
            <div className="absolute inset-0 flex items-center justify-center" aria-hidden>
              <div className="absolute left-1/2 top-1/2 h-32 w-74 -translate-x-1/2 -translate-y-1/2 rounded-[70%] border border-neutral-500 md:h-36 md:w-72" />
              <div className="absolute left-1/2 top-1/2 h-40 w-72 -translate-x-1/2 -translate-y-1/2 rounded-[70%] border border-neutral-500 md:h-44 md:w-80" />
            </div>
      
            {/* White circle + wording */}
            <div
              className="relative z-10 flex h-35 w-36 shrink-0 items-center justify-center rounded-full bg-white md:h-44 md:w-44"
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

<section
  id="services"
  className="w-full bg-neutral-300 py-16 md:py-20 bg-black/70"
  aria-labelledby="services-heading"
  style={{ backgroundImage: `url(${Servicebg})`}}
>
  <div className="mx-auto max-w-6xl px-4"></div>
  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {/* Training Card */}
<a
  href="/training"
  target="_blank"
  rel="noopener noreferrer"
  className="relative block h-full w-full
             rounded-2xl overflow-hidden
             bg-cover bg-center
             shadow-2xl
             hover:scale-[1.02] transition-transform duration-300"
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/55"></div>

  {/* Content */}
  <div className="relative z-10 flex h-full flex-col justify-between p-10 md:p-12 text-white">
    <div>
      <h3 className="mb-6 text-4xl font-bold">Training</h3>

      <ul className="mb-8 space-y-4 text-lg">
        <li>For students & working professionals</li>
        <li>Structured modules</li>
        <li>Outcome-oriented learning</li>
      </ul>
    </div>

    {/* Looks like button but still link */}
    <span className="inline-block w-fit rounded-lg border-2 border-white px-6 py-3 font-semibold transition hover:bg-white hover:text-black">
      Explore Training →
    </span>
  </div>
</a>


      {/* BIM Consulting Tab */}

<a
  href="/bim-consulting"
  target="_blank"
  rel="noopener noreferrer"
  className="relative block h-full w-full
             rounded-2xl overflow-hidden
             bg-cover bg-center
             shadow-2xl
             hover:scale-[1.02] transition-transform duration-300"
  style={{
    backgroundImage: `url(${bimConsultingBg})`,
  }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/55"></div>

  {/* Content */}
  <div className="relative z-10 flex h-full flex-col justify-between p-10 md:p-12 text-white">
    <div>
      <p className="mb-2 text-sm font-semibold uppercase tracking-wide">
        Our Services
      </p>

      <h3 className="mb-6 text-4xl font-bold">
        BIM Consulting
      </h3>

      <ul className="mb-8 space-y-4 text-lg">
        <li>BIM Project Modeling</li>
        <li>Organisation-wide BIM workflow setup</li>
        <li>Standards, audits & implementation</li>
      </ul>
    </div>

    {/* Button-style link */}
    <span className="inline-block w-fit rounded-lg border-2 border-white px-6 py-3 font-semibold transition hover:bg-white hover:text-black">
      Explore BIM Consulting →
    </span>
  </div>
</a>

      

      {/* Resources Deployment Tab */}

<a
  href="/resources-deployment"
  target="_blank"
  rel="noopener noreferrer"
  className="relative block h-full w-full
             rounded-2xl overflow-hidden
             bg-cover bg-center
             shadow-2xl
             hover:scale-[1.02] transition-transform duration-300"
  style={{
    backgroundImage: `url(${resourceBg})`,
  }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/55"></div>

  {/* Content */}
  <div className="relative z-10 flex h-full flex-col justify-between p-10 md:p-12 text-white">
    <div>
      <h3 className="mb-6 text-4xl font-bold">
        Resources Deployment
      </h3>

      <ul className="mb-8 space-y-4 text-lg">
        <li>Short-term & long-term BIM support</li>
        <li>Syncron-ready trained professionals</li>
        <li>Reduced onboarding & ramp-up time</li>
      </ul>
    </div>

    {/* Button-style link */}
    <span className="inline-block w-fit rounded-lg border-2 border-white px-6 py-3 font-semibold transition hover:bg-white hover:text-black">
      Request Resources →
    </span>
  </div>
</a>
</div>
</section>

    </>
  )
}
