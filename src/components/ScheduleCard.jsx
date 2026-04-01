import React from 'react'

/* Session type color/icon map */
const typeConfig = {
  keynote:      { bg: 'bg-forest-900',    text: 'text-white',        border: 'border-forest-900',   icon: '🎤', label: 'Keynote'      },
  oral:         { bg: 'bg-blue-50',       text: 'text-blue-800',     border: 'border-blue-200',     icon: '📢', label: 'Oral Session' },
  poster:       { bg: 'bg-purple-50',     text: 'text-purple-800',   border: 'border-purple-200',   icon: '🗂️', label: 'Poster'       },
  workshop:     { bg: 'bg-amber-50',      text: 'text-amber-800',    border: 'border-amber-200',    icon: '🔬', label: 'Workshop'     },
  break:        { bg: 'bg-gray-50',       text: 'text-gray-500',     border: 'border-gray-200',     icon: '☕', label: 'Break'        },
  registration: { bg: 'bg-cream-100',     text: 'text-forest-900',   border: 'border-cream-200',    icon: '📋', label: 'Registration' },
  ceremony:     { bg: 'bg-green-50',      text: 'text-green-800',    border: 'border-green-200',    icon: '🏛️', label: 'Ceremony'     },
  social:       { bg: 'bg-pink-50',       text: 'text-pink-800',     border: 'border-pink-200',     icon: '🎉', label: 'Social'       },
  panel:        { bg: 'bg-indigo-50',     text: 'text-indigo-800',   border: 'border-indigo-200',   icon: '💬', label: 'Panel'        },
}

export default function ScheduleCard({ session }) {
  const cfg = typeConfig[session.type] || typeConfig.oral

  return (
    <div className={`flex gap-4 p-4 rounded-xl border ${cfg.border} ${cfg.bg} transition-all duration-200 hover:shadow-sm`}>
      {/* Time */}
      <div className="shrink-0 w-28 text-right">
        <p className="text-xs font-mono font-bold text-gray-600 leading-tight">{session.time}</p>
      </div>

      {/* Divider dot */}
      <div className="shrink-0 flex flex-col items-center pt-1">
        <div className={`w-2.5 h-2.5 rounded-full border-2 ${
          session.type === 'keynote' ? 'bg-forest-900 border-forest-900' : 'bg-white border-gray-300'
        }`} />
        <div className="w-px flex-1 bg-gray-200 mt-1" />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 pb-1">
        <div className="flex items-start justify-between gap-2 flex-wrap">
          <h4 className={`font-sans font-semibold text-sm leading-snug ${
            session.type === 'keynote' ? 'text-forest-900 text-base' : 'text-gray-800'
          }`}>
            <span className="mr-1.5">{cfg.icon}</span>
            {session.title}
          </h4>
          <span className={`shrink-0 text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${cfg.bg} ${cfg.text} border ${cfg.border}`}>
            {cfg.label}
          </span>
        </div>

        {(session.speaker || session.location) && (
          <div className="flex flex-wrap gap-x-4 mt-1.5">
            {session.speaker && (
              <p className="text-xs text-gray-500 font-sans flex items-center gap-1">
                <span>👤</span> {session.speaker}
              </p>
            )}
            {session.location && (
              <p className="text-xs text-gray-500 font-sans flex items-center gap-1">
                <span>📍</span> {session.location}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
