import { Link } from "react-router-dom";
import bg from "../assets/background.png";

export default function ResourceDeployment() {
  return (
    <section className="relative min-h-screen w-full bg-black text-white overflow-hidden font-alata">

      {/* LEFT BACKGROUND IMAGE */}
      <div
        className="absolute top-0 left-0 z-0 h-full w-[80%] pointer-events-none"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "repeat-y",
          backgroundSize: "300%",
          backgroundPosition: "center",
          transform: "rotate(90deg)",
          transformOrigin: "left center",
          opacity: 0.35,
        }}
      />

      {/* RIGHT BACKGROUND IMAGE */}
      <div
        className="absolute right-0 -top-[40rem] z-0 h-full w-[80%] pointer-events-none"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "repeat-y",
          backgroundSize: "300%",
          backgroundPosition: "center",
          transform: "rotate(-90deg)",
          transformOrigin: "right center",
          opacity: 0.35,
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60 z-[1]" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-12">

        {/* BACK */}
        <Link
          to="/"
          className="inline-block mb-6 rounded-lg border border-neutral-600 px-5 py-2 text-sm text-neutral-300 hover:bg-white hover:text-black transition"
        >
          ← Back to Home
        </Link>

        {/* HEADING */}
        <h1 className="mb-4 text-4xl md:text-5xl font-bold">
          BIM Resource Deployment
        </h1>

        <p className="mb-10 max-w-3xl text-lg text-neutral-300">
          We deploy BIM professionals based on project needs and maturity, including:
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-12 items-center">

          <Circle title={["Flexible", "Support", "With less", "Commitment"]} />
          <PillBlock title="Project-Based Deployment">
            <li>Resources deployed for a specific project phase or lifecycle</li>
            <li>Roles defined based on project requirements</li>
            <li>Strict adherence to BIM scope, standards & deliverables</li>
          </PillBlock>

          <PillBlock title="Dedicated Resource Deployment">
            <li>Exclusive BIM resources for your organisation</li>
            <li>Long-term engagement with stable roles</li>
            <li>Aligned with internal BIM standards & workflows</li>
            <li>Ideal for ongoing or multiple projects</li>
          </PillBlock>
          <Circle title={["Stable BIM", "Support You", "Can Rely On"]} />

          <Circle title={["On-Site", "Presence", "Remote", "Expertise"]} />
          <PillBlock title="Hybrid Support Deployment">
            <li>On-site, remote, or mixed support models</li>
            <li>Central oversight by Syncron BIM Hub</li>
            <li>Continuous quality & workflow monitoring</li>
            <li>Clear communication & escalation channels</li>
          </PillBlock>

        </div>
      </div>
    </section>
  );
}

/* ================= COMPONENTS ================= */

function Circle({ title }) {
  return (
    <div className="mx-auto flex h-60 w-60 items-center justify-center rounded-full border-2 border-dotted border-neutral-400 text-center">
      <h2 className="text-2xl md:text-3xl font-semibold leading-snug">
        {title.map((t, i) => (
          <span key={i} className="block">{t}</span>
        ))}
      </h2>
    </div>
  );
}


function PillBlock({ title, children }) {
  return (
    <div>
      <div className="inline-block rounded-full border-2 border-dotted border-neutral-400 px-8 py-3 text-lg md:text-xl font-semibold tracking-wide">
        {title}
      </div>
      <ul className="list-disc space-y-3 pl-6 text-base md:text-lg text-neutral-100">
        {children}
      </ul>
    </div>
  );
}
