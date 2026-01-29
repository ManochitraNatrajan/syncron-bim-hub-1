import bg from '../assets/career_bgm.png'
import girlGuyImg from '../assets/girl_guy.png'

const jobs = [
  { title: "BIM Manager", count: 2 },
  { title: "BIM Coordinator", count: 3 },
  { title: "Senior BIM Modeller", count: 5 },
]

export default function Career() {
  return (
    <section id="career" className="relative min-h-[420px] overflow-hidden">
      {/* Blurred workspace / BIM background */}
      <div
        className="absolute inset-0 bg-neutral-800"
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
        <div className="flex flex-1 flex-col justify-center rounded-2xl px-6 py-8 text-white md:py-10">
          <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">Career</h2>
          <p className="mt-2 text-xl font-semibold md:text-2xl text-white/95">Job & Internship</p>

          <ul className="mt-6 space-y-2 text-base font-medium md:text-lg text-white/95">
            {jobs.map((j) => (
              <li key={j.title}>
                • {j.title} – {j.count}
              </li>
            ))}
          </ul>

          <p className="mt-8 text-base font-medium md:text-lg text-white/95">
            Please share your resume at{' '}
            <a
              href="mailto:info@sycronbim.com"
              className="underline decoration-2 underline-offset-2 hover:no-underline"
            >
              info@sycronbim.com
            </a>
          </p>
        </div>

        {/* Right: Girl (right half of girl_guy.png) – full figure visible */}
        <div className="relative flex shrink-0 items-end justify-end md:w-[50%] lg:min-w-[360px]">
          <div className="relative flex min-h-[340px] w-full overflow-hidden rounded-2xl bg-white/10 shadow-lg md:min-h-[420px]">
            <img
              src={girlGuyImg}
              alt="Syncron team member"
              className="block h-full w-[200%] max-w-none object-cover -translate-x-1/2"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
