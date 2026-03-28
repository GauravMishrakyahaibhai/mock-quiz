import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Code, Layout, Atom, ArrowRight } from 'lucide-react';

const pageVariants = {
  initial: { opacity: 0, scale: 0.95, y: 20 },
  in: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.1 } },
  out: { opacity: 0, scale: 1.05, y: -20, transition: { duration: 0.3 } }
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Home() {
  const navigate = useNavigate();

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className="flex flex-col items-center justify-center min-h-[80vh] text-center"
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      >
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-2xl">
          Master Your <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 animate-pulse">
            Frontend Skills
          </span>
        </motion.h1>
      </motion.div>
      
      <motion.p variants={itemVariants} className="text-xl text-gray-300 mb-12 max-w-2xl">
        Take structured MCQ quizzes to measure your proficiency in HTML, CSS, and JavaScript. Discover your weak areas and improve efficiently.
      </motion.p>
      
      <motion.button 
        variants={itemVariants}
        whileHover={{ scale: 1.1, rotate: 1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        onClick={() => navigate('/tests')}
        className="glass-button active animated-border flex items-center gap-3 text-xl mb-16 shadow-[0_0_40px_rgba(139,92,246,0.8)] font-bold text-white px-8 py-4"
      >
        Start a Test <ArrowRight size={20} className="animate-bounce" />
      </motion.button>
      
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
        <InfoCard 
          icon={<Layout size={40} className="text-orange-400" />}
          title="HTML5 Core"
          description="Test your knowledge of semantic elements, accessibility, forms, and document structure."
        />
        <InfoCard 
          icon={<Code size={40} className="text-blue-400" />}
          title="CSS3 Styling"
          description="Evaluate your skills in Flexbox, Grid, animations, specificity, and responsive design."
        />
        <InfoCard 
          icon={<Atom size={40} className="text-yellow-400" />}
          title="JavaScript"
          description="Challenge yourself on closures, event loops, prototypal inheritance, and ES6+ features."
        />
      </motion.div>
    </motion.div>
  );
}

function InfoCard({ icon, title, description }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="glass p-8 flex flex-col items-center text-center transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
    >
      <div className="p-4 rounded-full bg-black/30 mb-4 inline-block">
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}
