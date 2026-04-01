import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

// Layout
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Pages
import Home         from './pages/Home'
import About        from './pages/About'
import Topics       from './pages/Topics'
import Speakers     from './pages/Speakers'
import Schedule     from './pages/Schedule'
import Registration from './pages/Registration'
import Contact      from './pages/Contact'

// Page wrapper with scroll-to-top + animation
function PageWrapper({ children }) {
  const location = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [location.pathname])

  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  )
}

function AppRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"             element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/about"        element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/topics"       element={<PageWrapper><Topics /></PageWrapper>} />
        <Route path="/speakers"     element={<PageWrapper><Speakers /></PageWrapper>} />
        <Route path="/schedule"     element={<PageWrapper><Schedule /></PageWrapper>} />
        <Route path="/registration" element={<PageWrapper><Registration /></PageWrapper>} />
        <Route path="/contact"      element={<PageWrapper><Contact /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-white">
        <Navbar />
        <main className="flex-1">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
