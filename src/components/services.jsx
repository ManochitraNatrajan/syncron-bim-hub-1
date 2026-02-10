import { Link } from "react-router-dom";

import bimConsultingBg from "../assets/bim_consulting.jpg";
import resourceBg from "../assets/resource.jpg";
import trainingBg from "../assets/training.jpg";

export default function Services() {
  return (
    <section
      id="services"
      className="w-full py-16 md:py-20 bg-black/20"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-[1400px] px-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Training Card */}
        <Link
          to="/training"
          className="relative block h-full w-full rounded-2xl overflow-hidden bg-cover bg-center shadow-2xl hover:scale-[1.02] transition-transform duration-300"
          style={{ backgroundImage: `url(${trainingBg})` }}
        >
          <div className="absolute inset-0 bg-black/55" />

          <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-8 md:p-12 text-white">
            <div>
              <h3 className="mb-6 text-4xl font-bold font-alata">
                <span>Training</span><br></br>
                <span>Program</span> 
              </h3>
              <ul className="mb-8 space-y-4 text-lg font-alata">
                <li>• BIM Modellers Training</li>
                <li>• BIM Coordinators Training</li>
                <li>• BIM Maagement Training</li>
              </ul>
            </div>
          </div>
        </Link>

        {/* BIM Project Support Card */}
        <Link
          to="/bimprojectsupport"
          className="relative block h-full w-full rounded-2xl overflow-hidden bg-cover bg-center shadow-2xl hover:scale-[1.02] transition-transform duration-300"
          style={{ backgroundImage: `url(${bimConsultingBg})` }}
        >
          <div className="absolute inset-0 bg-black/55" />

          <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-8 md:p-12 text-white">
            <div>
              <h3 className="mb-6 text-4xl font-bold font-alata">
                <span>BIM Project</span><br></br>
                <span>Support</span> 
              </h3>
              <ul className="mb-8 space-y-4 text-lg font-alata">
                <li>• BIM Project Modeling</li>
                <li>• Organisation-wide BIM workflow setup</li>
                <li>• Standards, audits & implementation</li>
              </ul>
            </div>
          </div>
        </Link>

        {/* Resource Deployment Card */}
        <Link
          to="/resourcedeployment"
          className="relative block h-full w-full rounded-2xl overflow-hidden bg-cover bg-center shadow-2xl hover:scale-[1.02] transition-transform duration-300"
          style={{ backgroundImage: `url(${resourceBg})` }}
        >
          <div className="absolute inset-0 bg-black/55" />

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
  );
}
