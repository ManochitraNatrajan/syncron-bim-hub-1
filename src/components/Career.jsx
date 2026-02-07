import bg from '../assets/career_bgm.png'
import girlImg from '../assets/girl.png'
import qrImg from '../assets/careerqr.png'

const jobs = [
  { title: "Mechanical BIM Modellers",},
  { title: "Electrical BIM Modellers",},
  { title: "BIM Coordinators",},
  { title: "HVAC Design Engineer",},
  { title: "Plumbing Design Engineer",},
  { title: "HVAC Site Engineer",},
]

export default function Career() {
  return (
    <section id="career" className="relative min-h-[420px] overflow-hidden">
      {/* Blurred workspace / BIM background */}
      <div
        className="absolute inset-0 bg-neutral-800 opacity-30"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[420px] max-w-6xl flex-col px-4 py-10 md:flex-row md:items-stretch md:gap-8 md:py-14 lg:gap-12">
        {/* Left: Title, subtitle, job list, CTA – transparent so section bg shows through */}
        <div className="flex flex-1 flex-col justify-center rounded-2xl px-6 py-8 text-black md:py-10">
          <h1 className="text-5xl  tracking-tight md:text-5xl font-alata">Career</h1>
          <h2 className="mt-2 text-3xl  md:text-3xl text-black/95 font-alata">Job & Internship</h2>

          <ul className="mt-6 space-y-2 text-base font-medium md:text-lg text-black/95 font-alata">
            {jobs.map((j) => (
              <li key={j.title}>
                • {j.title}
              </li>
            ))}
          </ul>

          <p className="mt-8 text-base font-medium md:text-lg text-black/95 font-alata">
            Please share your resume at{' '}
            <a
              href="mailto:info@sycronbim.com"
              className="underline decoration-2 underline-offset-2 hover:no-underline"
            >
              info@sycronbim.com
            </a>
          </p>
        </div>
{/* Center QR and text */}
<div className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-2 pointer-events-none">
  
  {/* TEXT above the QR box */}
  <p className="text-sm font-alata text-black">
    Scan the QR code to apply <br />
    and upload your resume
  </p>

  {/* QR box – exactly matches QR size */}
  <div className="rounded-2xl bg-white shadow-lg">
    <img
      src={qrImg}
      alt="QR Code"
      className="h-32 w-32 object-contain block"
    />
  </div>
</div>



        {/* Right: Girl (right half of girl_guy.png) – full figure visible */}
       
  {/* Left: Bigger full girl image */}
  <div className="mx-auto max-w-sm md:ml-auto md:max-w-none">
    <img
      src={girlImg} // transparent PNG of girl
      alt="Team member - girl"
      className="block w-[120%] md:w-[150%] h-auto object-contain"
      style={{width:"500px",position:"absolute",right:"-40px",top:"-50px"}}
    />
</div>

     </div>
    </section>
  )
}
