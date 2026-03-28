import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout, Code, Atom, Layers } from 'lucide-react';
import Quiz from './Quiz';

const categories = [
  { id: 'html', name: 'HTML', icon: Layout, color: 'text-orange-400', borderHover: 'hover:border-orange-500/50', shadowHover: 'hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]' },
  { id: 'css', name: 'CSS', icon: Code, color: 'text-blue-400', borderHover: 'hover:border-blue-500/50', shadowHover: 'hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]' },
  { id: 'js', name: 'JavaScript', icon: Atom, color: 'text-yellow-400', borderHover: 'hover:border-yellow-500/50', shadowHover: 'hover:shadow-[0_0_20px_rgba(250,204,21,0.3)]' },
  { id: 'combined', name: 'Combined', icon: Layers, color: 'text-purple-400', borderHover: 'hover:border-purple-500/50', shadowHover: 'hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]' },
];

const levels = ['Easy', 'Moderate', 'Hard'];

const pageVariants = {
  initial: { opacity: 0, x: -20 },
  in: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  out: { opacity: 0, x: 20, transition: { duration: 0.3 } }
};

export default function Tests() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeTest, setActiveTest] = useState(null); // { category, level }

  if (activeTest) {
    return <Quiz activeTest={activeTest} onNavigateBack={() => setActiveTest(null)} />;
  }

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className="flex flex-col items-center justify-center min-h-[80vh] w-full max-w-5xl mx-auto"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Select a Test Category</h1>
        <p className="text-gray-400 text-lg">Choose a subject and difficulty to begin your 30-question assessment.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full mb-10">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
            whileHover={{ scale: selectedCategory === cat.id ? 1 : 1.1, y: -10 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setSelectedCategory(cat.id === selectedCategory ? null : cat.id)}
            className={`glass p-8 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ${cat.borderHover} ${cat.shadowHover} ${
              selectedCategory === cat.id ? 'bg-white/20 border-white/60 shadow-[0_0_40px_rgba(255,255,255,0.4)] scale-105' : 'bg-black/20'
            }`}
          >
            <cat.icon size={56} className={`${cat.color} mb-4 filter drop-shadow-[0_0_10px_currentColor]`} />
            <h2 className="text-2xl font-black tracking-wider uppercase text-gray-200">{cat.name}</h2>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            className="w-full flex flex-col items-center overflow-hidden"
          >
            <h3 className="text-2xl font-medium mb-6">Select Difficulty Level</h3>
            <div className="flex flex-wrap justify-center gap-6 mt-4">
              {levels.map((lvl, index) => (
                <motion.button
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", bounce: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.15, rotate: -2 }}
                  whileTap={{ scale: 0.85 }}
                  key={lvl}
                  onClick={() => setActiveTest({ category: selectedCategory, level: lvl })}
                  className="glass-button active animated-border px-10 py-4 text-xl font-black shadow-[0_0_20px_rgba(139,92,246,0.4)] relative overflow-hidden group"
                >
                  <span className="relative z-10 block">{lvl}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
