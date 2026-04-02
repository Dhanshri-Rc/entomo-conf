import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Entomology.png'

const quickLinks = [
  { to: '/about',        label: 'About the Conference' },
  { to: '/topics',       label: 'Topics & Tracks'      },
  { to: '/speakers',     label: 'Keynote Speakers'     },
  { to: '/schedule',     label: 'Programme'            },
  { to: '/registration', label: 'Registration'         },
  { to: '/contact',      label: 'Contact Us'           },
]

export default function Footer() {
  return (
    <footer className="bg-forest-900 text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            {/* <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl">🦋</div>
              <div>
                <p className="font-serif font-bold text-xl leading-none">Entomology 2026</p>
                <p className="text-green-300 text-xs tracking-widest uppercase mt-0.5">International Conference</p>
              </div>
            </div> */}
              <Link to="/">
                        <img className='h-28 w-32 text-white' src={logo} alt="Entomology Conference Logo" />
                      </Link>
            <p className="text-green-100/80 text-sm leading-relaxed max-w-xs font-sans">
              International Conference on Entomology Advancing the frontiers of entomology through global scientific collaboration.
            </p>
            <div className="flex items-center gap-2 mt-5">
              <span className="text-xs text-green-300 font-mono uppercase tracking-wider">Organised by</span>
              <span className="text-xs text-white font-semibold">International Entomological Society</span>
            </div>
          </div>




          {/* Quick links */}
          <div>
            <h4 className="font-serif font-bold text-base mb-4 text-green-200">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-green-100/75 hover:text-white transition-colors font-sans flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-green-400 group-hover:w-2 transition-all duration-200 shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Conference info */}
          <div>
            <h4 className="font-serif font-bold text-base mb-4 text-green-200">Conference Info</h4>
            <ul className="space-y-3 text-sm font-sans">
              <li className="flex items-start gap-2">
                <span className="text-base mt-0.5">📅</span>
                <div>
                  <p className="text-white font-medium">August 14–16, 2026</p>
                  <p className="text-green-100/60 text-xs">3-Day Programme</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-base mt-0.5">📍</span>
                <div>
                  <p className="text-white font-medium">Vienna, Austria</p>
                  <p className="text-green-100/60 text-xs">Vienna International Centre</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-base mt-0.5">✉️</span>
                <div>
                  <a href="mailto:info@entomology.org" className="text-green-300 hover:text-white transition-colors">
                    info@entomology.org
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-base mt-0.5">🌐</span>
                <div>
                  <a href="https://www.entomology.org" className="text-green-300 hover:text-white transition-colors">
                    www.entomology.org
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-green-100/50 text-xs font-sans">
            © International Conference on Entomology. All rights reserved.
          </p>
          <p className="text-green-100/40 text-xs font-sans">
            Advancing Entomology, Protecting Our Planet 🌍
          </p>
        </div>
      </div>
    </footer>
  )
}
