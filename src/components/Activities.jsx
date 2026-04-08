import SectionShell from './SectionShell.jsx'

import a1 from '../assets/activity1.jpg'
import a2 from '../assets/activity2.png'
import a3 from '../assets/activity3.jpg'
import a4 from '../assets/activity4.jpeg'
import a5 from '../assets/activity5.jpeg'
import a6 from '../assets/activity6.jpg'

const items = [
  { img: a1, caption: '"Fundamental BIM Training–Batch 4 Currently in progress"' },
  { img: a2, caption: '"Fundamental BIM Training – Batch 5 Starts on May"' },
  { img: a3, caption: '"Enrolments Open for upcoming batches"' },
  { img: a4, caption: '"Puvin has been placed as a Electrical BIM Modeller"' },
  { img: a5, caption: '"Kirubakaran has been placed as a Mechanical BIM Modeller"' },
  { img: a6, caption: '"Syncron BIM Master Roadmap Download will be available soon"' },
]

export default function Activities() {
  return (
    <SectionShell title="News & Updates" dark>
      <div
        className="
          flex gap-5
          overflow-x-auto overflow-y-hidden
          snap-x snap-mandatory
          px-4 sm:px-8 md:px-12
          py-1 pb-4
          custom-scrollbar
        "
      >
        {items.map((it, idx) => (
          <div
            key={idx}
            className="
              w-[240px] h-[320px]
              shrink-0 snap-center
              rounded-2xl bg-white/10 p-3
              opacity-100
              transition-all duration-300
            "
          >
            <div className="h-[220px] rounded-xl bg-black/10 flex items-center justify-center overflow-hidden">
              <img
                src={it.img}
                alt=""
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <p className="mt-2 text-sm text-white/90 text-center font-alata leading-snug">
              {it.caption}
            </p>
          </div>
        ))}
      </div>

      <style>{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.7) rgba(255, 255, 255, 0.12);
        }

        .custom-scrollbar::-webkit-scrollbar {
          height: 10px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.12);
          border-radius: 999px;
          margin: 0 12px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.7);
          border-radius: 999px;
          border: 2px solid transparent;
          background-clip: content-box;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.95);
          background-clip: content-box;
        }
      `}</style>
    </SectionShell>
  )
}