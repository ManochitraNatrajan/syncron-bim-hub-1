import { Link } from "react-router-dom";
import bg from "../assets/background.png";

export default function Training() {
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
          Our BIM Training Services
        </h1>

        <p className="mb-10 max-w-3xl text-lg text-neutral-300">
          We provide structured, role-based BIM training focused on industry
          understanding and information workflows.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-12 items-center">

          <Circle title={["Foundation", "for Every", "BIM Role"]} />
          <Box title="AEC & BIM Fundamentals">
            <li>Overview of AEC industry & lifecycle</li>
            <li>What BIM is (and is not)</li>
            <li>BIM roles & accountability</li>
            <li>ISO 19650 fundamentals</li>
          </Box>

          <Box title="BIM Modelling Training">
            <li>Discipline-specific modelling</li>
            <li>Project-based standards</li>
            <li>Coordination readiness</li>
          </Box>
          <Circle title={["Think", "Beyond", "3D Model"]} />

          <Circle title={["Control", "Before Clash", "Resolution"]} />
          <Box title="BIM Coordinator Training">
            <li>Coordination workflows</li>
            <li>Clash management</li>
            <li>Information delivery</li>
          </Box>

          <Box title="BIM Management Training">
            <li>Strategy & governance</li>
            <li>ISO compliance</li>
            <li>Project oversight</li>
          </Box>
          <Circle title={["Strategy,", "Governance,", "and Control"]} />

        </div>
      </div>
    </section>
  );
}

/* ================= COMPONENTS ================= */

function Circle({ title }) {
  return (
    <div className="mx-auto flex h-60 w-60 items-center justify-center rounded-full border-2 border-dotted border-neutral-400 text-center">
      <h2 className="text-xl font-semibold leading-tight">
        {title.map((t, i) => (
          <span key={i} className="block">{t}</span>
        ))}
      </h2>
    </div>
  );
}

function Box({ title, children }) {
  return (
    <div>
      {/* PILL TITLE */}
      <div className="inline-block mb-3 rounded-full border-2 border-dotted border-neutral-400 px-10 py-2 text-xl font-semibold">
        {title}
      </div>

      {/* BULLETS */}
      <ul className="list-disc space-y-2 pl-5 text-base text-neutral-300">
        {children}
      </ul>
    </div>
  );
}
