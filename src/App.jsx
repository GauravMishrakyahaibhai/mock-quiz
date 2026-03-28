import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2 } from 'lucide-react';

import Home from './pages/Home';
import Tests from './pages/Tests';
import TestsScore from './pages/TestsScore';
import Socials from './pages/Socials';

function App() {
  const location = useLocation();

  return (
    <>
      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>

      {/* Navbar */}
      <nav className="glass sticky top-0 z-50 mx-4 mt-4 px-6 py-4 flex items-center justify-between transition-all duration-300">
        <div className="flex items-center space-x-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
          <Code2 className="text-purple-400" />
          <span>MockQuiz</span>
        </div>
        
        <div className="hidden md:flex space-x-4">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/tests">Tests</NavLink>
          <NavLink to="/scores">Tests Score</NavLink>
          <NavLink to="/socials">Socials</NavLink>
        </div>
      </nav>

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

function NavLink({ to, children }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={`px-4 py-2 rounded-full transition-all duration-300 ${
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
