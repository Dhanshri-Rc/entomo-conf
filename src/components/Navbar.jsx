import React, { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../assets/ento_logo.png'

const navLinks = [
  // { to: '/',             label: 'Home'       },
  { to: '/about',        label: 'About'      },
  { to: '/topics',       label: 'Topics'     },
  { to: '/speakers',     label: 'Speakers'   },
  { to: '/schedule',     label: 'Schedule'   },
  { to: '/registration', label: 'Register'   },
  { to: '/contact',      label: 'Contact'    },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md shadow-green-900/10 border-b border-green-500'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/">
            <img className='h-28 w-36' src={logo} alt="Entomology Conference Logo" />
          </Link>

          {/* Logo */}
          {/* <Link to="/" className="flex items-center gap-1 group">
            <div className="w-9 h-9 bg-forest-900 rounded-xl flex items-center justify-center text-xl shadow-sm group-hover:scale-105 transition-transform">
              🦋
            </div>
            <div className="leading-tight">
              <p className="font-serif font-bold text-forest-900 text-sm leading-none">Entomology</p>
              <p className="font-sans text-[10px] text-gray-500 tracking-wide uppercase">Conference </p>
            </div>
          </Link> */}

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `relative px-4 py-2 rounded-full text-sm font-medium font-sans transition-all duration-200 ${
                      isActive
                        ? 'bg-forest-900 text-white'
                        : 'text-gray-700 hover:text-forest-900 hover:bg-forest-50'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link to="/registration" className="hidden sm:inline-flex btn-primary text-sm py-2 px-5">
              Register Now
            </Link>
            <button
              onClick={() => setMobileOpen(v => !v)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              <span className={`block w-5 h-0.5 bg-current mb-1 transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`block w-5 h-0.5 bg-current mb-1 transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-lg overflow-hidden"
          >
            <ul className="px-4 py-3 space-y-1">
              {navLinks.map(link => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-xl text-sm font-medium font-sans transition-colors ${
                        isActive ? 'bg-forest-900 text-white' : 'text-gray-700 hover:bg-forest-50 hover:text-forest-900'
                      }`
                    }
                  >

                    
                    {link.label}
                  </NavLink>
                </li>
              ))}
              <li className="pt-2 pb-1">
                <Link to="/registration" onClick={() => setMobileOpen(false)} className="btn-primary w-full justify-center text-sm">
                  Register Now
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
