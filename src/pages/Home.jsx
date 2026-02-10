import Hero from "../components/Hero.jsx";
import Services from "../components/services.jsx";
import Activities from "../components/Activities.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Career from "../components/Career.jsx";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const el = document.getElementById(location.state.scrollTo);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="bg-neutral-100 pt-0">
      <Hero />

      <Activities />

      <Testimonials />

      {/* Services section */}
      <section id="services">
        <Services />
      </section>

      {/* Career section */}
      <section id="career">
        <Career />
      </section>
    </div>
  );
}
