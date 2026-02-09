
import bimConsultingBg from "../assets/bim_consulting.jpg";
import resourceBg from "../assets/resource.jpg";
import Servicebg from "../assets/hero-bg.png";
import trainingBg from "../assets/training.jpg";
import servicessectionbg from "../assets/servicessectionbg.png";
import hsab from "../assets/hsab_bg.png";
import { Link } from "react-router-dom";


export default function HowSyncronApproachesBim() {
  return (
    <>
      
   <section className="relative w-full py-10 md:py-14 bg-gray-300 overflow-hidden">
      
  {/* Background Image */}
  <div
  className="absolute inset-0 pointer-events-none"
  style={{
    backgroundImage: `url(${hsab})`,
    backgroundPosition: "right -80px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    opacity: 0.12,
  }}
/>

  {/* Content */}
  <div className="relative z-10 mx-auto max-w-6xl px-4">
    <div className="flex flex-col items-start gap-10 md:flex-row md:items-start md:gap-5 md:-ml-12">

      {/* LEFT – BULLETS + PARAGRAPH */}
      <div className="w-full md:flex-1 space-y-7 text-left md:pl-12">
        <ul className="space-y-3 text-base md:text-lg font-medium text-neutral-800 font-alata">
          <li>• BIM taught as a process, not as a software</li>
          <li>• ISO 19650 introduced as understanding, not compliance</li>
          <li>• Responsibility explained before deliverables</li>
          <li>• Learning aligned with real project behaviour</li>
        </ul>

        <div className="space-y-4 text-base md:text-lg leading-7 md:leading-10 text-neutral-700 font-alata">
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

      {/* RIGHT – HEADING */}
      <h1
        className="
          flex shrink-0 flex-col
          mt-4 md:mt-6
          font-alata font-bold tracking-tight
          text-5xl sm:text-5xl md:text-6xl lg:text-6xl
          leading-snug
          space-y-2
          text-black
        "
      >
        <span>How</span>
        <span>Syncron</span>
        <span>Approaches</span>
        <span>BIM</span>
      </h1>

    </div>
  </div>
</section>


      {/* Our Understanding – black bg, white circle, BIM / ISO19650 columns */}
       
      <section
  className="w-full bg-black py-10 md:py-14"
  aria-labelledby="our-understanding-heading"
>
  <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 px-4 md:flex-row md:items-stretch md:justify-between md:gap-8 lg:gap-12">

    {/* Left: BIM */}
    <div className="w-full max-w-xs text-left md:flex-1 md:max-w-none md:ml-6">
      <h3
        id="our-understanding-heading"
        className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white font-alata"
      >
        BIM
      </h3>
      <ul className="space-y-3 text-base md:text-lg text-white font-alata">
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

    {/* Center: Our Understanding Circle */}
    <div className="relative flex h-48 w-48 sm:h-52 sm:w-56 md:h-56 md:w-72 shrink-0 items-center justify-center">
      <div
        className="relative z-10 flex h-48 w-48 md:h-60 md:w-60 shrink-0 items-center justify-center rounded-full bg-white"
        aria-hidden
      >
        <p className="text-center text-2xl md:text-3xl font-bold leading-tight text-black font-alata">
          Our<br />Understanding
        </p>
      </div>
    </div>

    {/* Right: ISO19650 */}
    <div className="w-full max-w-xs text-left md:flex-1 md:max-w-none md:ml-auto lg:pl-8">
      <h3 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white font-alata">
        ISO19650
      </h3>
      <ul className="space-y-3 text-base md:text-lg text-white font-alata">
        <li className="flex items-start gap-2">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white" aria-hidden />
          <span>Framework for managing &amp; delivering information</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white" aria-hidden />
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
>
  <div className="mx-auto max-w-6xl px-4"></div>

  <div className="mx-auto max-w-6xl px-4 grid grid-cols-1 gap-6 md:grid-cols-3">
    
    {/* Training Card */}
    <Link
      to="/training"
      className="relative block h-full w-full
                 rounded-2xl overflow-hidden
                 bg-cover bg-center
                 shadow-2xl
                 hover:scale-[1.02] transition-transform duration-300"
      style={{
        backgroundImage: `url(${trainingBg})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-8 md:p-12 text-white">
        <div>
          <h3 className="mb-6 text-4xl font-bold font-alata">Training</h3>

          <ul className="mb-8 space-y-4 text-lg font-alata">
            <li>• For students & working professionals</li>
            <li>• Structured modules</li>
            <li>• Outcome-oriented learning</li>
          </ul>
        </div>
      </div>
    </Link>

    {/* BIM Consulting Tab */}
    <Link
      to="/bimprojectsupport"
      className="relative block h-full w-full
                 rounded-2xl overflow-hidden
                 bg-cover bg-center
                 shadow-2xl
                 hover:scale-[1.02] transition-transform duration-300"
      style={{
        backgroundImage: `url(${bimConsultingBg})`,
      }}
    >
      <div className="absolute inset-0 bg-black/55"></div>

      <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-8 md:p-12 text-white">
        <div>
          <h3 className="mb-6 text-4xl font-bold font-alata">
            BIM Project support
          </h3>

          <ul className="mb-8 space-y-4 text-lg font-alata">
            <li>• BIM Project Modeling</li>
            <li>• Organisation-wide BIM workflow setup</li>
            <li>• Standards, audits & implementation</li>
          </ul>
        </div>
      </div>
    </Link>

    {/* Resources Deployment Tab */}
    <Link
      to="/resourcedeployment"
      className="relative block h-full w-full
                 rounded-2xl overflow-hidden
                 bg-cover bg-center
                 shadow-2xl
                 hover:scale-[1.02] transition-transform duration-300"
      style={{
        backgroundImage: `url(${resourceBg})`,
      }}
    >
      <div className="absolute inset-0 bg-black/55"></div>

      <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-8 md:p-12 text-white">
        <div>
          <h3 className="mb-6 text-4xl font-bold font-alata">
            Resources Deployment
          </h3>

          <ul className="mb-8 space-y-4 text-lg font-alata">
            <li>• Short-term & long-term BIM support</li>
            <li>• Syncron-ready trained professionals</li>
            <li>• Reduced onboarding & ramp-up time</li>
          </ul>
        </div>
      </div>
    </Link>

  </div>
</section>

    </>
  )
}
