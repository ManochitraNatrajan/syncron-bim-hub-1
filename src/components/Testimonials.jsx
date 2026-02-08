import { useRef } from 'react'
import SectionShell from './SectionShell.jsx'

const quotes = [
  {
    name: "Puvin",
    text: "I’m an engineering graduate from IT who transitioned into BIM through this training. It clarified my career direction and helped me gain strong knowledge and confidence.",
  },
  {
    name: "Kirubakaran",
    text: "At Syncron BIM Hub, the quality of instruction was excellent, and the training fully met my expectations.",
  },
  {
    name: "Kumara Raja",
    text: "The instruction was clear and supportive, with practical examples throughout the training. The content was easy to understand and useful for everyday BIM work.",
  },
]

export default function Testimonials() {
  const scrollerRef = useRef(null)

  return (
    <SectionShell dark>

      {/* TITLE */}
      <h3 className="text-left text-4xl md:text-4xl font-alata mb-6 text-white">
        What People Say About Syncron...
      </h3>

      {/* HORIZONTAL SCROLLER */}
      <div
        ref={scrollerRef}
        className="
          flex gap-6
          overflow-x-auto overflow-y-hidden
          snap-x snap-mandatory
          px-6 sm:px-10 md:px-14
          pb-1
          scrollbar-none
          scroll-smooth
        "
      >
        {quotes.map((q, idx) => (
          <div
            key={idx}
            className="
              w-[300px] shrink-0
              snap-start
              rounded-2xl bg-white/5 p-5 shadow-soft
            "
          >
            <p className="text-sm leading-6 text-white/85 font-alata">
              {q.text}
            </p>

            <div className="mt-4 text-sm font-semibold text-white font-alata">
              — {q.name}
            </div>
          </div>
        ))}
      </div>

      {/* HIDE SCROLLBAR */}
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
