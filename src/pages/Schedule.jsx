import React, { useState } from 'react'
import ScheduleCard from '../components/ScheduleCard'
import SectionReveal from '../components/SectionReveal'
import { schedule } from '../assets/data'
import { PageBanner } from './About'

const sessionTypes = ['All', 'keynote', 'oral', 'workshop', 'poster', 'social', 'ceremony']

const typeLabels = {
  All: 'All Events',
  keynote:  'Keynotes & Talks',
  oral:     'Oral Sessions',
  workshop: 'Workshops',
  poster:   'Poster Sessions',
  social:   'Social Events',
  ceremony: 'Ceremonies',
}

export default function Schedule() {
  const [activeDay, setActiveDay] = useState(0)
  const [typeFilter, setTypeFilter] = useState('All')

  const currentDay = schedule[activeDay]

  const filteredSessions = typeFilter === 'All'
    ? currentDay.sessions
    : currentDay.sessions.filter(s => s.type === typeFilter)

  return (
    <>
      <PageBanner
        emoji="📅"
        badge="Programme"
        title="Conference Schedule"
        subtitle="Three days of keynotes, oral sessions, workshops, poster exhibitions, and networking events across Vienna."
      />

      {/* Day tabs */}
      <section className="sticky top-16 lg:top-20 z-30 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 py-3 overflow-x-auto scrollbar-hide">
            {schedule.map((day, i) => (
              <button
                key={day.day}
                onClick={() => setActiveDay(i)}
                className={`shrink-0 flex flex-col items-center px-6 py-2 rounded-xl text-sm transition-all duration-200 font-sans ${
                  activeDay === i
                    ? 'bg-forest-900 text-white'
                    : 'text-gray-600 hover:bg-forest-50 hover:text-forest-900'
                }`}
              >
                <span className="font-bold text-base">{day.day}</span>
                <span className="text-[10px] opacity-75 font-mono">{day.date}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Filter by type */}
      {/* <div className="bg-gray-50 border-b border-gray-100 py-2.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
            <span className="text-xs text-gray-400 font-mono shrink-0">Type:</span>
            {sessionTypes.map(type => (
              <button
                key={type}
                onClick={() => setTypeFilter(type)}
                className={`shrink-0 px-3 py-1 rounded-full text-xs font-semibold font-sans transition-all ${
                  typeFilter === type
                    ? 'bg-forest-900 text-white'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-forest-300 hover:text-forest-900'
                }`}
              >
                {typeLabels[type] || type}
              </button>
            ))}
          </div>
        </div>
      </div> */}

      {/* Schedule list */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="font-serif text-2xl font-bold text-gray-900">{currentDay.day} — {currentDay.date}</h2>
                <p className="text-gray-500 text-sm font-sans mt-0.5">{filteredSessions.length} events shown</p>
              </div>
              <a
                href="#"
                className="text-forest-900 text-sm font-semibold font-sans flex items-center gap-1.5 hover:underline"
              >
                📥 Download PDF
              </a>
            </div>
          </SectionReveal>

          <div className="space-y-3">
            {filteredSessions.length > 0 ? filteredSessions.map((session, i) => (
              <SectionReveal key={`${session.time}-${session.title}`} delay={i * 0.04}>
                <ScheduleCard session={session} />
              </SectionReveal>
            )) : (
              <div className="text-center py-16 text-gray-400">
                <div className="text-4xl mb-3">📭</div>
                <p className="font-sans text-sm">No sessions match this filter for {currentDay.day}.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Legend */}
      {/* <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <h3 className="font-serif font-bold text-gray-700 text-sm mb-4">Session Type Legend</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: '🎤', label: 'Keynote',      bg: 'bg-forest-50',    text: 'text-forest-900' },
                { icon: '📢', label: 'Oral Session', bg: 'bg-blue-50',      text: 'text-blue-800'   },
                { icon: '🗂️', label: 'Poster',       bg: 'bg-purple-50',    text: 'text-purple-800' },
                { icon: '🔬', label: 'Workshop',     bg: 'bg-amber-50',     text: 'text-amber-800'  },
                { icon: '☕', label: 'Break',         bg: 'bg-gray-50',      text: 'text-gray-500'   },
                { icon: '🎉', label: 'Social',        bg: 'bg-pink-50',      text: 'text-pink-800'   },
                { icon: '💬', label: 'Panel',         bg: 'bg-indigo-50',    text: 'text-indigo-800' },
              ].map(item => (
                <div key={item.label} className={`flex items-center gap-1.5 ${item.bg} ${item.text} text-xs font-sans px-3 py-1.5 rounded-full border border-current/10`}>
                  <span>{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section> */}
    </>
  )
}
