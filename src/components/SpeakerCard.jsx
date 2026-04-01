import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function SpeakerCard({ speaker, index = 0 }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group"
    >
      <div
        className={`relative rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm card-hover cursor-pointer ${
          flipped ? 'ring-2 ring-forest-900/30' : ''
        }`}
        onClick={() => setFlipped(v => !v)}
      >
        {/* Keynote badge */}
        {speaker.keynote && (
          <div className="absolute top-3 right-3 z-10 bg-forest-900 text-white text-[10px] font-mono font-bold tracking-widest uppercase px-2.5 py-1 rounded-full">
            Keynote
          </div>
        )}

        {/* Front face */}
        {!flipped ? (
          <div>
            {/* Photo */}
            <div className="relative overflow-hidden bg-forest-50 h-56">
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            {/* Info */}
            <div className="p-5">
              <h3 className="font-serif font-bold text-lg text-gray-900 leading-snug mb-0.5">{speaker.name}</h3>
              <p className="text-forest-900 text-sm font-medium font-sans">{speaker.title}</p>
              <p className="text-gray-500 text-xs mt-0.5 font-sans">{speaker.affiliation}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-3">
                {speaker.tags.map(tag => (
                  <span key={tag} className="bg-cream-100 text-forest-900 text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Flip hint */}
              <p className="text-[10px] text-gray-400 mt-3 flex items-center gap-1 font-sans">
                <span>Click to read bio</span>
                <span>→</span>
              </p>
            </div>
          </div>
        ) : (
          /* Back face / bio */
          <div className="p-6 min-h-[320px] flex flex-col bg-forest-50">
            <h3 className="font-serif font-bold text-lg text-gray-900 mb-1">{speaker.name}</h3>
            <p className="text-forest-900 text-xs font-mono uppercase tracking-wider mb-4">{speaker.affiliation}</p>

            <div className="flex-1">
              <p className="text-xs font-bold text-gray-700 uppercase tracking-wider font-mono mb-2">Talk Topic</p>
              <p className="text-sm text-forest-900 font-medium font-sans leading-snug mb-4 italic">"{speaker.topic}"</p>

              <p className="text-xs font-bold text-gray-700 uppercase tracking-wider font-mono mb-2">Biography</p>
              <p className="text-sm text-gray-600 font-sans leading-relaxed">{speaker.bio}</p>
            </div>

            <p className="text-[10px] text-gray-400 mt-4 flex items-center gap-1 font-sans">
              <span>← Click to go back</span>
            </p>
          </div>
        )}
      </div>
    </motion.div>
  )
}
