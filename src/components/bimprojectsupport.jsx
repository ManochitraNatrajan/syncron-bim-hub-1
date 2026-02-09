import { Link } from "react-router-dom";
import bg from "../assets/background.png";

export default function BIMProjectSupport() {
  return (
    <section className="relative min-h-screen w-full bg-black text-white overflow-hidden font-alata">

      {/* LEFT BACKGROUND IMAGE */}
      <div
        className="absolute -top-[18rem] z-40 h-full w-[80%] pointer-events-none"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "repeat-y",
          backgroundSize: "200%",
          backgroundPosition: "center",
          transform: "rotate(90deg)",
          transformOrigin: "left center",
          opacity: 0.4,
        }}
      />

      {/* RIGHT BACKGROUND IMAGE */}
      <div
        className="absolute right-0 -top-[44rem] z-40 h-full w-[80%] pointer-events-none"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "repeat-y",
          backgroundSize: "200%",
          backgroundPosition: "center",
          transform: "rotate(-90deg)",
          transformOrigin: "right center",
          opacity: 0.4,
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60 z-[1]" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16">

        <Link
          to="/"
          className="inline-block mb-10 rounded-lg border border-neutral-600 px-6 py-2 text-sm text-neutral-300 hover:bg-white hover:text-black transition"
        >
          ← Back to Home
        </Link>

        <h1 className="mb-6 text-5xl md:text-6xl font-bold">
          BIM Project Support
        </h1>

        <p className="mb-20 max-w-4xl text-lg md:text-xl text-neutral-200 leading-relaxed">
          We provide practical BIM project support to help teams deliver BIM
          efficiently — either by fully managing BIM delivery or by supporting
          BIM modelling under client management.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-24 gap-x-20 items-center">

          {/* Managed BIM */}
          <div className="ml-8 md:ml-12">
            <PillTitle text="Managed BIM Project Delivery" />
            <ul className="mt-5 list-disc space-y-3 pl-6 text-base md:text-lg text-neutral-100 leading-relaxed">
              <li>We manage BIM execution for the project</li>
              <li>BIM modelling & coordination management</li>
              <li>Workflow and deliverable control aligned with ISO 19650</li>
              <li>BIM-related communication & follow-ups</li>
              <li>Client not required to manage BIM day-to-day</li>
            </ul>
          </div>

          <Circle title={["We manage", "& deliver", "Project behalf", "of you"]} />

          {/* Modelling Only */}
          <Circle title={["You manage", "& deliver", "we do model"]} />

          <div className="ml-8 md:ml-12">
            <PillTitle text="BIM Modelling Support Only" />
            <ul className="mt-5 list-disc space-y-3 pl-6 text-base md:text-lg text-neutral-100 leading-relaxed">
              <li>Client manages BIM strategy & coordination</li>
              <li>We provide BIM modelling resources</li>
              <li>No direct BIM management from our side</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ================= COMPONENTS ================= */

function Circle({ title }) {
  return (
    <div className="mx-auto flex h-72 w-72 md:h-80 md:w-80 items-center justify-center rounded-full border-2 border-dotted border-neutral-400 text-center">
      <h2 className="text-xl md:text-4xl font-bold leading-snug">
        {title.map((line, i) => (
          <span key={i} className="block">{line}</span>
        ))}
      </h2>
    </div>
  );
}

function PillTitle({ text }) {
  return (
    <div className="inline-block rounded-full border-2 border-dotted border-neutral-400 px-7 py-2.5 text-lg md:text-2xl font-semibold tracking-normal">
      {text}
    </div>
  );
}
