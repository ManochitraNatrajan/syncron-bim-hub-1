import bg from '../assets/career_bgm.png'
import qrImg from '../assets/careerqr.png'

const jobs = [
  { title: "Mechanical BIM Modellers" },
  { title: "Electrical BIM Modellers" },
  { title: "BIM Coordinators" },
  { title: "HVAC Design Engineer" },
  { title: "Plumbing Design Engineer" },
  { title: "HVAC Site Engineer" },
]

export default function Career() {
  return (
    <section id="career" className="relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3,
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/40" aria-hidden />

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-4 py-12 md:py-16 grid gap-12 md:grid-cols-2 items-center">
        
        {/* LEFT — Job Opportunities */}
        <div className="text-black font-alata">
          <h1 className="text-5xl tracking-tight">Career</h1>
          <h2 className="mt-2 text-3xl text-black/95">
            Job & Internship
          </h2>

          <ul className="mt-6 space-y-2 text-base md:text-lg font-medium text-black/95">
            {jobs.map((j) => (
              <li key={j.title}>• {j.title}</li>
            ))}
          </ul>

          <p className="mt-8 text-base md:text-lg font-medium text-black/95">
            Please share your resume at{' '}
            <a
              href="mailto:info@sycronbim.com"
              className="underline decoration-2 underline-offset-2 hover:no-underline"
            >
              info@sycronbim.com
            </a>
          </p>
        </div>

        {/* RIGHT — QR Code */}
        <div className="flex flex-col items-center text-center gap-4">
          <p className="text-sm md:text-base font-alata text-black">
            Scan the QR code to apply <br />
            and upload your resume
          </p>

          <div className="rounded-2xl bg-white p-4 shadow-xl">
            <img
              src={qrImg}
              alt="QR Code"
              className="h-36 w-36 object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
