import React from 'react'
import { Link } from 'react-router-dom'
import SectionReveal from '../components/SectionReveal'

/* Page header banner used across inner pages */
export function PageBanner({ emoji, badge, title, subtitle, bg = 'bg-forest-50' }) {
  return (
    <section className={`${bg} pt-28 pb-16 border-b border-gray-100 relative overflow-hidden`}>
      <div className="absolute inset-0 hex-pattern opacity-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="section-badge">{badge}</span>
        <h1 className="section-title mt-3 mb-4">
          <span className="mr-3">{emoji}</span>{title}
        </h1>
        {subtitle && <p className="text-gray-600 font-sans max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}
      </div>
    </section>
  )
}

const organizers = [
  { role: 'Conference Chair', name: 'Prof. Elena Wouters', org: 'University of Vienna' },
  { role: 'Programme Chair', name: 'Dr. Hiroshi Nakamura', org: 'Osaka University' },
  { role: 'Publication Chair', name: 'Dr. Priya Sharma', org: 'IIT Bombay' },
  { role: 'Local Chair', name: 'Dr. Thomas Bauer', org: 'University of Natural Resources and Life Sciences, Vienna' },
]

export default function About() {
  return (
    <>
      <PageBanner
        emoji="🏛️"
        badge="About the Conference"
        title="About Entomology"
        subtitle="Discover the mission, history and organising committee behind the world's premier entomology gathering."
      />

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <SectionReveal>
              <span className="section-badge">🎯 Our Mission</span>
              <h2 className="section-title mt-2 mb-5">Why Entomology Matters Now</h2>
              <p className="text-gray-600 font-sans leading-relaxed mb-4">
                Insects constitute more than half of all described species on Earth, yet they remain among the least understood and most threatened groups of organisms. Entomology brings together the brightest minds in entomology to address the most pressing questions facing insect science today.
              </p>
              <p className="text-gray-600 font-sans leading-relaxed mb-6">
                From pollinator collapse to disease-vector control, from biodiversity loss to the biotechnological potential of insects, our conference provides a rigorous, collegial forum for cutting-edge science with real-world impact.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/topics" className="btn-primary">Explore Topics →</Link>
                <Link to="/registration" className="btn-outline">Register Now</Link>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: '🌍', title: 'Global Platform', desc: 'Delegates from 60+ countries and 6 continents' },
                  { icon: '🔬', title: 'Rigorous Science', desc: 'Double-blind peer reviewed oral and poster sessions' },
                  { icon: '🤝', title: 'Collaboration', desc: 'Structured networking sessions and industry workshops' },
                  { icon: '🌱', title: 'Conservation Focus', desc: 'Dedicated track on insect conservation and policy' },
                ].map((item, i) => (
                  <div key={item.title} className="bg-forest-50 rounded-2xl p-5 border border-forest-100">
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <h4 className="font-serif font-bold text-gray-900 text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-gray-500 font-sans leading-snug">{item.desc}</p>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-cream-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-12">
              <span className="section-badge">📜 History</span>
              <h2 className="section-title mt-2">A Decade of Discovery</h2>
            </div>
          </SectionReveal>
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-forest-200 -translate-x-0.5" />
            <div className="space-y-8">
              {[
                { year: '2010', city: 'London, UK',       highlight: 'Inaugural conference — 120 attendees' },
                { year: '2013', city: 'Sydney, Australia', highlight: 'First Asian-Pacific satellite event added' },
                { year: '2016', city: 'Nairobi, Kenya',    highlight: 'Expanded to include conservation policy track' },
                { year: '2019', city: 'Tokyo, Japan',      highlight: 'Record 450 attendees; genomics track launched' },
                { year: '2022', city: 'São Paulo, Brazil', highlight: 'Hybrid format; 600+ participants globally' },
                { year: '2026', city: 'Vienna, Austria',   highlight: 'You are here — join the legacy!' },
              ].map((item, i) => (
                <SectionReveal key={item.year} delay={i * 0.07}>
                  <div className={`flex flex-col md:flex-row gap-4 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="md:w-1/2 md:px-8 flex md:justify-end">
                      <div className={`bg-white rounded-xl p-5 border border-gray-100 shadow-sm max-w-xs w-full ${i === 5 ? 'border-forest-900 ring-2 ring-forest-900/20' : ''}`}>
                        <p className="font-serif font-bold text-forest-900 text-lg">{item.year}</p>
                        <p className="text-gray-700 font-medium font-sans text-sm">{item.city}</p>
                        <p className="text-gray-500 text-xs mt-1 font-sans">{item.highlight}</p>
                      </div>
                    </div>
                    {/* Center dot */}
                    <div className="hidden md:flex items-start justify-center w-0 relative">
                      <div className={`w-4 h-4 rounded-full border-2 border-white shadow-sm absolute -translate-x-1/2 mt-4 ${i === 5 ? 'bg-forest-900' : 'bg-forest-400'}`} />
                    </div>
                    <div className="md:w-1/2" />
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Organising committee */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-12">
              <span className="section-badge">👥 Organising Committee</span>
              <h2 className="section-title mt-2">The Team Behind Entomology</h2>
            </div>
          </SectionReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {organizers.map((o, i) => (
              <SectionReveal key={o.name} delay={i * 0.08}>
                <div className="bg-forest-50 rounded-2xl p-6 border border-forest-100 card-hover text-center">
                  <div className="w-14 h-14 bg-forest-900 rounded-full flex items-center justify-center text-white font-serif font-bold text-xl mx-auto mb-4">
                    {o.name.split(' ').pop()[0]}
                  </div>
                  <p className="text-[10px] text-forest-900 font-mono uppercase tracking-wider mb-1">{o.role}</p>
                  <p className="font-serif font-bold text-gray-900 text-base">{o.name}</p>
                  <p className="text-xs text-gray-500 font-sans mt-1 leading-snug">{o.org}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <p className="text-center text-xs text-gray-400 uppercase tracking-widest font-mono mb-8">Proudly supported by</p>
            <div className="flex flex-wrap justify-center items-center gap-10">
              {['International Entomological Society', 'European Research Council', 'Nature Publishing Group', 'IUCN', 'WWF Science Division'].map(sponsor => (
                <div key={sponsor} className="text-sm text-gray-400 font-semibold font-sans">
                  {sponsor}
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  )
}
