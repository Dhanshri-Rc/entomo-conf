import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import HeroSection  from '../components/HeroSection'
import SpeakerCard  from '../components/SpeakerCard'
import SectionReveal from '../components/SectionReveal'
import { speakers, importantDates, topics } from '../assets/data'

/* ── Important Dates strip ───────────────────────────────── */
function ImportantDates() {
  return (
    <section className="bg-forest-900 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center mb-10">
            <span className="inline-block bg-white/10 text-green-200 text-xs font-mono font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-3">
              Plan Ahead
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white">Important Dates</h2>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {importantDates.map((item, i) => (
            <SectionReveal key={item.label} delay={i * 0.07}>
              <div className={`rounded-xl p-5 flex items-center gap-4 border transition-all duration-200 ${
                item.passed
                  ? 'bg-white/5 border-white/10 opacity-60'
                  : 'bg-white/10 border-white/20 hover:bg-white/15'
              }`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm shrink-0 ${
                  item.passed ? 'bg-white/10 text-green-300' : 'bg-green-400/20 text-green-300'
                }`}>
                  {item.passed ? '✓' : '📅'}
                </div>
                <div>
                  <p className="text-white font-semibold font-sans text-sm leading-snug">{item.label}</p>
                  <p className={`text-xs font-mono mt-0.5 ${item.passed ? 'text-green-400/60 line-through' : 'text-green-300'}`}>
                    {item.date}
                  </p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Call for Papers ─────────────────────────────────────── */
function CallForPapers() {
  return (
    <section className="py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <SectionReveal>
            <span className="section-badge">📄 Call for Papers</span>
            <h2 className="section-title mt-2 mb-5">
              Submit Your Research to{' '}
              <span className="text-forest-900 italic">ICISZ 2026</span>
            </h2>
            <p className="text-gray-600 font-sans leading-relaxed mb-5">
              We invite original, unpublished research contributions in all areas of entomology and insect science.
              Accepted papers will be published in the conference proceedings and considered for the <em>Journal of Insect Science</em>.
            </p>
            <ul className="space-y-2 mb-7">
              {[
                'Full papers: up to 8 pages (IEEE format)',
                'Short papers / work-in-progress: up to 4 pages',
                'Poster abstracts: up to 500 words',
                'Double-blind peer review process',
              ].map(item => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700 font-sans">
                  <span className="w-4 h-4 rounded-full bg-forest-900 text-white text-[9px] flex items-center justify-center mt-0.5 shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/registration" className="btn-primary">Submit Paper →</Link>
          </SectionReveal>

          <SectionReveal delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '🔬', title: 'Oral Presentations', desc: '20-minute talks with 5-min Q&A', count: '60+' },
                { icon: '🗂️', title: 'Poster Sessions', desc: 'Two dedicated poster exhibitions', count: '100+' },
                { icon: '🏆', title: 'Best Paper Award', desc: 'Sponsored by IES Foundation', count: '3' },
                { icon: '📚', title: 'Indexed Proceedings', desc: 'Scopus & Web of Science', count: '∞' },
              ].map(card => (
                <div key={card.title} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm card-hover">
                  <div className="text-2xl mb-2">{card.icon}</div>
                  <p className="font-serif font-bold text-gray-900 text-base">{card.title}</p>
                  <p className="text-xs text-gray-500 font-sans mt-1 leading-snug">{card.desc}</p>
                  <p className="font-serif text-2xl font-bold text-forest-900 mt-3">{card.count}</p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}

/* ── Featured Speakers preview ───────────────────────────── */
function FeaturedSpeakers() {
  const keynotes = speakers.filter(s => s.keynote)
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="section-badge">🎤 Keynote Speakers</span>
              <h2 className="section-title mt-2">World-Class Entomologists</h2>
            </div>
            <Link to="/speakers" className="btn-outline shrink-0">View All Speakers →</Link>
          </div>
        </SectionReveal>

        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
          {keynotes.map((s, i) => <SpeakerCard key={s.id} speaker={s} index={i} />)}
        </div>
      </div>
    </section>
  )
}

/* ── Topics strip ────────────────────────────────────────── */
function TopicsPreview() {
  const preview = topics.slice(0, 4)
  return (
    <section className="py-20 bg-forest-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center mb-12">
            <span className="section-badge">🌿 Conference Tracks</span>
            <h2 className="section-title mt-2">Key Research Topics</h2>
          </div>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {preview.map((topic, i) => (
            <SectionReveal key={topic.id} delay={i * 0.08}>
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm card-hover h-full flex flex-col">
                <div className="text-3xl mb-3">{topic.icon}</div>
                <h3 className="font-serif font-bold text-gray-900 text-base mb-2">{topic.title}</h3>
                <p className="text-sm text-gray-500 font-sans leading-relaxed flex-1">{topic.description}</p>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={0.3}>
          <div className="text-center mt-10">
            <Link to="/topics" className="btn-outline">See All 8 Topics →</Link>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}

/* ── Venue teaser ─────────────────────────────────────────── */
function VenueTeaser() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-forest-900 to-forest-950 p-10 md:p-16 flex flex-col md:flex-row items-center gap-10">
          <SectionReveal className="flex-1">
            <p className="text-green-300 text-xs font-mono uppercase tracking-widest mb-3">📍 Venue</p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4 leading-snug">
              Vienna International Centre<br />
              <span className="text-green-300">Vienna, Austria</span>
            </h2>
            <p className="text-green-100/70 font-sans leading-relaxed text-sm mb-7 max-w-sm">
              Located in the heart of Vienna, the VIC is a world-class conference facility hosting leading international scientific events since 1979.
            </p>
            <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-forest-900">
              Venue & Travel Info →
            </Link>
          </SectionReveal>

          <SectionReveal delay={0.15} className="flex-1 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=600&h=600&fit=crop"
                  alt="Vienna conference centre"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-cream-100 rounded-xl px-4 py-2 shadow-lg">
                <p className="font-serif font-bold text-forest-900 text-sm">Aug 14–16</p>
                <p className="text-xs text-gray-500 font-mono">2026</p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}

/* ── Home (assembled) ─────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <HeroSection />
      <ImportantDates />
      <CallForPapers />
      <FeaturedSpeakers />
      <TopicsPreview />
      <VenueTeaser />
    </>
  )
}
