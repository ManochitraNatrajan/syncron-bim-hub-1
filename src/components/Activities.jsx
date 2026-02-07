import { useRef } from 'react'
import SectionShell from './SectionShell.jsx'

import a1 from '../assets/activity1.jpg'
import a2 from '../assets/activity2.png'
import a3 from '../assets/activity3.jpg'
import a4 from '../assets/activity4.jpg'
import a5 from '../assets/activity5.jpg'

const items = [
  { img: a1, caption: '"Fundamental BIM Training–Batch 3 Currently in progress"' },
  { img: a2, caption: '"Fundamental BIM Training – Batch 4 Starts 2nd week of February"' },
  { img: a3, caption: '"Enrolments Open for upcoming batches"' },
  { img: a4, caption: '"Upskilling BIM Training New batch planned for March"' },
  { img: a5, caption: '"Syncron BIM Master Roadmap Download will be available soon"' },
]

export default function Activities() {
  const scrollerRef = useRef(null)

  return (
    <SectionShell  title="News & Updates" dark>
      <div className="relative">

        <div
          ref={scrollerRef}
          className="
            flex gap-4
            overflow-x-auto overflow-y-hidden
            snap-x snap-mandatory
            px-14 pb-4
            scrollbar-none
            scroll-smooth
          "
        >
          {items.map((it, idx) => (
            <div
              key={idx}
              className="w-[270px] shrink-0 snap-start rounded-2xl bg-white/10 p-3 shadow-soft"
            >
              <div className="overflow-hidden rounded-xl">
                <img
                  src={it.img}
                  alt=""
                  className="h-44 w-full object-cover"
                />
              </div>

              <p className="mt-3 text-sm leading-5 text-white/90 font-alata text-center">
                {it.caption}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </SectionShell>
  )
}
