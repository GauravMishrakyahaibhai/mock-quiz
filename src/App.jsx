import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Menu, X } from 'lucide-react';

import Home from './pages/Home';
import Tests from './pages/Tests';
import TestsScore from './pages/TestsScore';
import Socials from './pages/Socials';

function App() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>

      {/* Navbar */}
      <nav className="glass sticky top-0 z-50 mx-4 mt-4 px-6 py-4 flex items-center justify-between transition-all duration-300">
        
        {/* Logo */}
        <div className="flex items-center space-x-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
          <Code2 className="text-purple-400" />
          <span>MockQuiz</span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex space-x-4">
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/tests" onClick={closeMenu}>Tests</NavLink>
          <NavLink to="/scores" onClick={closeMenu}>Tests Score</NavLink>
          <NavLink to="/socials" onClick={closeMenu}>Socials</NavLink>
        </div>

        {/* Hamburger Button - Mobile Only */}
        <button
          className="md:hidden text-gray-300 hover:text-white transition-colors duration-200 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden glass mx-4 mt-1 px-4 py-3 rounded-2xl z-40 flex flex-col space-y-2"
          >
            <NavLink to="/" onClick={closeMenu}>Home</NavLink>
            <NavLink to="/tests" onClick={closeMenu}>Tests</NavLink>
            <NavLink to="/scores" onClick={closeMenu}>Tests Score</NavLink>
            <NavLink to="/socials" onClick={closeMenu}>Socials</NavLink>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow p-4 md:p-8 w-full max-w-7xl mx-auto overflow-hidden">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/tests" element={<Tests />} />
            <Route path="/scores" element={<TestsScore />} />
            <Route path="/socials" element={<Socials />} />
          </Routes>
        </AnimatePresence>
      </main>
    </>
  );
}

function NavLink({ to, children, onClick }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`px-4 py-2 rounded-full transition-all duration-300 block ${
        isActive
          ? 'bg-purple-600/40 text-white shadow-[0_0_15px_rgba(147,51,234,0.5)] border border-purple-400/50'
          : 'text-gray-300 hover:text-white hover:bg-white/10'
      }`}
    >
      {children}
    </Link>
  );
}

export default App;