import heroImg from "../assets/hero.png";
import heroBg from "../assets/hero-bg.png";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-neutral-300 font-alata pb-1 md:pb-5">
      
      {/* SOFT ROTATED BACKGROUND */}
      <div
  className="
    absolute
    left-[-150%]
    top-1/2
    h-[320%]
    w-[320%]
    -translate-y-1/2
    bg-no-repeat
    opacity-30
    pointer-events-none
  "
  style={{
    backgroundImage: `url(${heroBg})`,
    backgroundPosition: "right center",
    backgroundSize: "contain",
  }}
/>


      {/* FADE MASK */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-transparent to-gray-200 pointer-events-none" />

      {/* CONTENT */}
      <div className="relative mx-auto max-w-6xl px-4 pt-12 md:pt-20">
        <div
          className="
            grid
            items-center
            gap-8 md:gap-10
            min-[480px]:grid-cols-2
            md:grid-cols-[1.1fr_0.9fr]
          "
        >
          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-3xl md:text-6xl font-black leading-tight text-black">
              Skills Beyond <br className="hidden md:block" /> Drafting
            </h1>

            <h2 className="mt-8 mb-6 text-2xl md:text-3xl font-bold text-black">
              How can Syncron support you today?
            </h2>

            <div className="flex flex-col gap-3 max-w-md">
              {[
                { text: "🎓 Learn BIM", to: "/training" },
                { text: "🧑‍💻 BIM Resources", to: "/resourcedeployment" },
                { text: "🏗️ BIM Project Support", to: "/bimprojectsupport" },
              ].map((item, i) => (
                <Link
                  key={i}
                  to={item.to}
                  className="
                    h-14
                    w-full
                    flex items-center justify-center
                    rounded-xl
                    bg-gray-300
                    px-4
                    text-base md:text-lg
                    text-black font-semibold
                    transition
                    hover:bg-white
                    shadow-md
                  "
                >
                  {item.text}
                </Link>
              ))}
            </div>

            <p className="mt-6 max-w-md text-lg text-neutral-800">
              Syncron BIM Hub is a BIM training and consultancy firm focused on
              practical BIM implementation, not just software learning.
            </p>

            <ul className="mt-4 space-y-1 text-lg text-neutral-900">
              <li>• BIM aligned with ISO 19650</li>
              <li>• Industry-driven workflows</li>
              <li>• MEP-focused expertise</li>
              <li>• Training + real project exposure</li>
            </ul>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative mt-6 md:mt-0 md:h-[700px] overflow-visible">
            <img
              src={heroImg}
              alt="BIM Engineer"
              className="
                absolute
                bottom-[-30px]
                right-[-110px]
                md:bottom-[-60px]
                md:right-[-130px]

                w-[300px]
                sm:w-[380px]
                md:w-[540px]
                max-w-none
                object-contain

                max-md:static
                max-md:mx-auto
                max-md:mt-12
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
