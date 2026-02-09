import { Link } from "react-router-dom";
import bg from "../assets/background.png";
import qrResume from "../assets/resume.png"; // <-- add your QR image

export default function ResourceDeployment() {
  return (
    <section className="relative min-h-screen w-full bg-black text-white overflow-hidden font-alata">

      {/* LEFT BACKGROUND IMAGE */}
      <div
        className="absolute top-0 left-0 z-0 h-full w-[80%] pointer-events-none"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "repeat-y",
          backgroundSize: "180%",
          backgroundPosition: "center",
          transform: "rotate(90deg)",
          transformOrigin: "left center",
          opacity: 0.35,
          filter: "contrast(1.15) brightness(1.05) saturate(1.1)",
        }}
      />

      {/* RIGHT BACKGROUND IMAGE */}
      <div
        className="absolute right-0 -top-[40rem] z-0 h-full w-[80%] pointer-events-none"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "repeat-y",
          backgroundSize: "180%",
          backgroundPosition: "center",
          transform: "rotate(-90deg)",
          transformOrigin: "right center",
          opacity: 0.6,
          filter: "contrast(1.15) brightness(1.05) saturate(1.1)",
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60 z-[1]" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16">

        {/* TOP BAR */}
        <div className="flex items-start justify-between mb-10">
          <Link
            to="/"
            className="rounded-lg border border-neutral-600 px-5 py-2 text-sm text-neutral-300 hover:bg-white hover:text-black transition"
          >
            ← Back to Home
          </Link>

          {/* QR */}
          {/* QR – fixed top right, no layout shift */}
<div className="absolute top-16 right-6 md:right-10">
  <div className="flex flex-col items-center gap-2">
    <span className="text-xs md:text-xl text-neutral-200 tracking-wider">
      Scan to drop
    </span>
    <span className="text-sm md:text-xl text-neutral-200 font-medium">
      Your Resume
    </span>

    <div className="rounded-lg border border-neutral-500 bg-white p-2">
      <img
        src={qrResume}
        alt="Resume QR"
        className="h-36 w-36 md:h-44 md:w-44 object-contain"
      />
    </div>
  </div>
</div>

        </div>

        {/* HEADING */}
        <h1 className="mb-6 text-5xl md:text-6xl font-bold">
          BIM Resource Deployment
        </h1>

        <p className="mb-20 max-w-4xl text-lg md:text-xl text-neutral-200 leading-relaxed">
          We deploy BIM professionals based on project needs, duration, and maturity —
          offering flexible, reliable, and scalable BIM support.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-24 gap-x-20 items-center">

          <Circle title={["Flexible", "Support", "With Less", "Commitment"]} />
          <PillBlock title="Project-Based Deployment">
            <li>Resources deployed for specific project phases</li>
            <li>Roles defined strictly by project requirements</li>
            <li>Clear BIM scope, standards & deliverables</li>
          </PillBlock>

          <PillBlock title="Dedicated Resource Deployment">
            <li>Exclusive BIM resources for your organisation</li>
            <li>Long-term engagement with stable responsibilities</li>
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
    <div className="mx-auto flex h-72 w-72 md:h-80 md:w-80 items-center justify-center rounded-full border-2 border-dotted border-neutral-400 text-center">
      <h2 className="text-xl md:text-4xl font-semibold leading-snug">
        {title.map((t, i) => (
          <span key={i} className="block">{t}</span>
        ))}
      </h2>
    </div>
  );
}

function PillBlock({ title, children }) {
  return (
    <div className="ml-8 md:ml-12">
      <div className="inline-block rounded-full border-2 border-dotted border-neutral-400 px-7 py-2.5 text-lg md:text-2xl font-semibold mb-4">
        {title}
      </div>
      <ul className="list-disc space-y-3 pl-6 text-base md:text-lg leading-relaxed text-neutral-100">
        {children}
      </ul>
    </div>
  );
}
