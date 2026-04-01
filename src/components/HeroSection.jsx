import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

/* Floating insect emoji decoration */
function FloatingInsect({ emoji, className, delay = 0 }) {
  return (
    <motion.span
      className={`absolute text-3xl select-none pointer-events-none opacity-20 ${className}`}
      animate={{ y: [0, -14, 0], rotate: [0, 8, 0] }}
      transition={{ duration: 5 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
    >
      {emoji}
    </motion.span>
  )
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-forest-50 via-white to-cream-100">

      {/* Background hex pattern */}
      <div className="absolute inset-0 hex-pattern opacity-60 pointer-events-none" />

      {/* Decorative gradient blobs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-forest-900/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-cream-200/60 rounded-full blur-3xl pointer-events-none" />

      {/* Floating insects */}
      <FloatingInsect emoji="🦋" className="top-[15%] right-[8%]"  delay={0}   />
      <FloatingInsect emoji="🐝" className="top-[30%] left-[5%]"   delay={1.5} />
      <FloatingInsect emoji="🐞" className="bottom-[25%] right-[12%]" delay={0.8} />
      <FloatingInsect emoji="🦗" className="top-[60%] left-[8%]"   delay={2.2} />
      <FloatingInsect emoji="🪲" className="top-[20%] left-[20%]"  delay={3}   />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-20 lg:py-32">
        <div className="max-w-3xl">

          {/* Badge */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-badge">
              📅 August 14–16, 2026 · Vienna, Austria
            </span>
          </motion.div> */}

          {/* Headline */}
          <motion.h1
            className="font-serif text-3xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-[1.1] mt-4 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            International{' '}
            <span className="text-forest-900 italic">Conference</span>
            {' '}on Entomology 
            <span className="relative inline-block">
            
              {/* Underline decoration */}
              <motion.span
                className="absolute -bottom-1 left-0 h-1 bg-cream-200 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 0.6, delay: 0.8 }}
              />
            </span>
            
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="font-sans text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            Advancing the frontiers of entomology through global scientific collaboration.
            Join 600+ researchers, ecologists, and conservationists from 60+ countries.
          </motion.p>

          {/* Stats row */}
          <motion.div
            className="flex flex-wrap gap-6 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            {[
              { value: '600+', label: 'Attendees' },
              { value: '60+',  label: 'Countries' },
              { value: '80+',  label: 'Talks'     },
              { value: '6',    label: 'Keynotes'  },
            ].map(stat => (
              <div key={stat.label} className="flex flex-col">
                <span className="font-serif text-2xl font-bold text-forest-900">{stat.value}</span>
                <span className="text-xs text-gray-500 uppercase tracking-wider font-mono">{stat.label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <Link to="/registration" className="btn-primary">
              Register Now →
            </Link>
            <Link to="/speakers" className="btn-outline">
              View Speakers
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-12 fill-white">
          <path d="M0,40 C360,70 1080,10 1440,40 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  )
}
