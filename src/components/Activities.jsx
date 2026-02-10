import { useRef, useEffect, useState } from 'react'
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
  { img: a4, caption: '"BIM Coordinator Training planned for March"' },
  { img: a5, caption: '"Syncron BIM Master Roadmap Download will be available soon"' },
]

export default function Activities() {
  const scrollerRef = useRef(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return

    let interval = null

    const start = () => {
      if (interval) return
      interval = setInterval(() => {
        setActive(prev => {
          const next = (prev + 1) % items.length
          scroller.scrollTo({
            left: next * 250,
            behavior: 'smooth',
          })
          return next
        })
      }, 1600)
    }

    const stop = () => {
      if (interval) {
        clearInterval(interval)
        interval = null
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { threshold: 0.5 }
    )

    observer.observe(scroller)

    return () => {
      stop()
      observer.disconnect()
    }
  }, [])

  return (
    <SectionShell title="News & Updates" dark>
      <div
        ref={scrollerRef}
        className="
          flex gap-5
          overflow-x-auto overflow-y-hidden
          snap-x snap-mandatory
          px-4 sm:px-8 md:px-12
          py-1
          scrollbar-none
        "
      >
        {items.map((it, idx) => (
          <div
            key={idx}
            className={`
              w-[240px] h-[320px]
              shrink-0 snap-center
              rounded-2xl bg-white/10 p-3
              transition-all duration-700 ease-out
              ${
                active === idx
                  ? 'scale-105 -translate-y-3 opacity-100 bg-white/25 shadow-2xl z-20'
                  : 'scale-95 opacity-50'
              }
            `}
          >
            <div className="h-[220px] overflow-hidden rounded-xl">
              <img
                src={it.img}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>

            <p className="mt-2 text-sm text-white/90 text-center font-alata leading-snug">
              {it.caption}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        .scrollbar-none::-webkit-scrollbar { display: none; }
        .scrollbar-none { scrollbar-width: none; -ms-overflow-style: none; }
      `}</style>
    </SectionShell>
  )
}
