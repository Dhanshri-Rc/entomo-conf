import React, { useState } from 'react'
import SpeakerCard from '../components/SpeakerCard'
import SectionReveal from '../components/SectionReveal'
import { speakers } from '../assets/data'
import { PageBanner } from './About'

const ALL = 'All'

export default function Speakers() {
  const [filter, setFilter] = useState(ALL)

  // Gather unique tags
  const allTags = [ALL, ...Array.from(new Set(speakers.flatMap(s => s.tags)))]

  const filtered = filter === ALL
    ? speakers
    : speakers.filter(s => s.tags.includes(filter))

  return (
    <>
      <PageBanner
        emoji="🎤"
        badge="Invited Speakers"
        title="Keynote & Invited Speakers"
        subtitle="Hear from the world's foremost entomologists across six plenary and invited sessions spanning all major research tracks."
      />

      {/* Filter bar */}
      {/* <section className="sticky top-16 lg:top-20 z-30 bg-white/95 backdrop-blur-md border-b border-gray-100 py-3 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
            <span className="text-xs text-gray-400 font-mono uppercase tracking-wider shrink-0 mr-1">Filter:</span>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`shrink-0 px-4 py-1.5 rounded-full text-xs font-sans font-semibold transition-all duration-200 ${
                  filter === tag
                    ? 'bg-forest-900 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-forest-50 hover:text-forest-900'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section> */}

      {/* Speakers grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Keynote section */}
          {(filter === ALL || filtered.some(s => s.keynote)) && (
            <>
              <SectionReveal>
                <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="w-8 h-0.5 bg-forest-900 inline-block" />
                  Keynote Speakers
                </h2>
              </SectionReveal>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
                {filtered.filter(s => s.keynote).map((s, i) => (
                  <SpeakerCard key={s.id} speaker={s} index={i} />
                ))}
              </div>
            </>
          )}

          {/* Invited section */}
          {(filter === ALL || filtered.some(s => !s.keynote)) && (
            <>
              <SectionReveal>
                <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span className="w-8 h-0.5 bg-forest-400 inline-block" />
                  Invited Speakers
                </h2>
              </SectionReveal>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filtered.filter(s => !s.keynote).map((s, i) => (
                  <SpeakerCard key={s.id} speaker={s} index={i} />
                ))}
              </div>
            </>
          )}

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              <div className="text-5xl mb-4">🔍</div>
              <p className="font-sans">No speakers match this filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* CfS callout */}
      <section className="py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionReveal>
            <div className="text-4xl mb-4">📣</div>
            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-3">Interested in Presenting?</h2>
            <p className="text-gray-600 font-sans text-sm leading-relaxed mb-6">
              The call for contributed oral presentations and poster abstracts is still open. Submit your abstract by <strong>March 31, 2026</strong>.
            </p>
            <a href="#" className="btn-primary">Submit Your Abstract →</a>
          </SectionReveal>
        </div>
      </section>
    </>
  )
}
