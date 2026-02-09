import { Link } from "react-router-dom";
import bg from "../assets/background.png";
import admission from "../assets/admission.png";
import enquiry from "../assets/enquiry.png";

export default function Training() {
  return (
    <section className="relative min-h-screen w-full bg-black text-white overflow-hidden font-alata">

      {/* LEFT BACKGROUND IMAGE */}
      <div
        className="absolute top-0 z-0 h-full w-[80%] pointer-events-none"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "repeat-y",
          backgroundSize: "300%",
          backgroundPosition: "center",
          transform: "rotate(90deg)",
          transformOrigin: "left center",
          opacity: 0.6,
        }}
      />

      {/* RIGHT BACKGROUND IMAGE */}
      <div
        className="absolute right-0 -top-[44rem] z-0 h-full w-[80%] pointer-events-none"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "repeat-y",
          backgroundSize: "300%",
          backgroundPosition: "center",
          transform: "rotate(-90deg)",
          transformOrigin: "right center",
          opacity: 0.6,
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60 z-[1]" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 items-start">

          {/* LEFT CONTENT */}
          <div>
            <Link
              to="/"
              className="inline-block mb-8 rounded-lg border border-neutral-600 px-6 py-2 text-sm text-neutral-300 hover:bg-white hover:text-black transition"
            >
              ← Back to Home
            </Link>

            <h1 className="mb-4 text-5xl md:text-6xl font-bold">
              Our BIM Training Services
            </h1>

            <p className="mb-16 max-w-3xl text-2xl md:text-3xl text-neutral-200 leading-relaxed">
              We provide structured, role-based BIM training that focuses on industry
              awareness, responsibilities, and information workflows — not just software usage.
            </p>

            {/* TRAINING GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-12 items-center">

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

          {/* RIGHT – QR CODES */}
          {/* RIGHT – QR CODES */}
{/* RIGHT – QR CODES */}
<div className="
  flex flex-col items-center lg:items-end gap-12
  lg:sticky lg:top-1/2 lg:-translate-y-1/2
">
  <div className="text-center lg:text-right">
    <p className="mt-3 text-base text-neutral-300 text-center">
      scan here for admission
    </p>
    <img
      src={admission}
      alt="Training Registration QR"
      className="h-48 w-48 md:h-52 md:w-52 rounded-xl bg-white p-5 shadow-xl"
    />
  </div>

  <div className="text-center lg:text-right">
    <p className="mt-3 text-base text-neutral-300 text-center">
      scan here for training enquiry
    </p>
    <img
      src={enquiry}
      alt="Training Brochure QR"
      className="h-48 w-48 md:h-52 md:w-52 rounded-xl bg-white p-5 shadow-xl"
    />
  </div>
</div>
        </div>
      </div>
    </section>
  );
}

/* ================= COMPONENTS ================= */

function Circle({ title }) {
  return (
    <div className="mx-auto flex h-64 w-64 md:h-72 md:w-72 items-center justify-center rounded-full border-2 border-dotted border-neutral-400 text-center">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug">
        {title.map((t, i) => (
          <span key={i} className="block">{t}</span>
        ))}
      </h2>
    </div>
  );
}


function Box({ title, children }) {
  return (
    <div className="ml-8 md:ml-12 lg:ml-16">
      {/* DOTTED PILL TITLE */}
      <div className="inline-block rounded-full border-2 border-dotted border-neutral-400 px-7 py-2.5 text-lg md:text-xl lg:text-2xl font-semibold tracking-normal mb-4">
        {title}
      </div>

      {/* BULLETS */}
      <ul className="list-disc space-y-2 pl-6 text-base md:text-lg leading-relaxed text-neutral-100">
        {children}
      </ul>
    </div>
  );
}
