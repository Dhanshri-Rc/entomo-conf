import React from 'react'
import { motion } from 'framer-motion'
import SectionReveal from '../components/SectionReveal'
import { topics } from '../assets/data'
import { PageBanner } from './About'

export default function Topics() {
  return (
    <>
      <PageBanner
        emoji="🔬"
        badge="Research Tracks"
        title="Conference Topics"
        subtitle="ICISZ 2026 covers the full breadth of modern entomology across eight thematic tracks, from molecular genomics to conservation policy."
      />

      {/* Topics grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-7">
            {topics.map((topic, i) => (
              <SectionReveal key={topic.id} delay={i * 0.07}>
                <div className="group bg-white rounded-2xl border border-gray-100 shadow-sm card-hover p-7 h-full flex flex-col">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-forest-50 border border-forest-100 flex items-center justify-center text-2xl shrink-0 group-hover:bg-forest-900 group-hover:border-forest-900 transition-colors duration-300">
                      <span className="group-hover:scale-110 transition-transform duration-300 inline-block">{topic.icon}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-gray-400 font-mono uppercase tracking-wider">Track {String(topic.id).padStart(2, '0')}</span>
                      <h3 className="font-serif font-bold text-xl text-gray-900 leading-snug">{topic.title}</h3>
                    </div>
                  </div>

                  <p className="text-gray-600 font-sans leading-relaxed text-sm mb-5 flex-1">{topic.description}</p>

                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-wider text-gray-400 mb-2">Subtopics include</p>
                    <div className="flex flex-wrap gap-2">
                      {topic.subtopics.map(sub => (
                        <span key={sub} className="bg-cream-100 text-forest-900 text-xs font-sans px-2.5 py-1 rounded-full">
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Submission guidelines banner */}
      <section className="py-20 bg-forest-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="bg-white rounded-3xl border border-forest-100 shadow-sm p-10 text-center">
              <div className="text-4xl mb-4">📄</div>
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">Submission Guidelines</h2>
              <p className="text-gray-600 font-sans leading-relaxed mb-7 max-w-xl mx-auto">
                All submissions must be original and not simultaneously submitted elsewhere. Papers should be formatted according to the IES template and submitted via the online portal. All submissions undergo double-blind peer review.
              </p>

              <div className="grid sm:grid-cols-3 gap-5 mb-8 text-left">
                {[
                  { label: 'Full Papers',    detail: 'Up to 8 pages',   note: 'IEEE two-column format' },
                  { label: 'Short Papers',   detail: 'Up to 4 pages',   note: 'Work-in-progress welcome' },
                  { label: 'Poster Abstracts', detail: 'Up to 500 words', note: 'Visual presentations' },
                ].map(item => (
                  <div key={item.label} className="bg-forest-50 rounded-xl p-4 border border-forest-100">
                    <p className="font-serif font-bold text-forest-900 text-base">{item.label}</p>
                    <p className="text-gray-700 font-semibold text-sm mt-1">{item.detail}</p>
                    <p className="text-gray-500 text-xs font-sans mt-0.5">{item.note}</p>
                  </div>
                ))}
              </div>

              <a href="#" className="btn-primary">
                Download Submission Template →
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Special sessions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-12">
              <span className="section-badge">⭐ Special Events</span>
              <h2 className="section-title mt-2">Beyond the Main Programme</h2>
            </div>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🧫', title: 'Pre-Conference Workshops', desc: 'Hands-on laboratory workshops on DNA barcoding, microscopy, and field collection methods. Limited to 25 participants each.', date: 'August 13, 2026' },
              { icon: '🌲', title: 'Field Excursion', desc: 'Guided entomological survey of the Vienna Woods — a UNESCO Biosphere Reserve. Transport and equipment provided.', date: 'August 16 (afternoon)' },
              { icon: '🏆', title: 'Young Scientist Award', desc: 'Competitive prize for the best oral and poster presentation by a researcher within 5 years of their PhD.', date: 'Throughout conference' },
            ].map((item, i) => (
              <SectionReveal key={item.title} delay={i * 0.1}>
                <div className="bg-forest-50 rounded-2xl p-6 border border-forest-100 card-hover h-full">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-serif font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm font-sans leading-relaxed mb-4">{item.desc}</p>
                  <p className="text-forest-900 text-xs font-mono font-bold">📅 {item.date}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
