import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Trophy, ArrowRight, History, Calendar, CheckCircle } from 'lucide-react';

const pageVariants = {
  initial: { opacity: 0, y: 30 },
  in: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  out: { opacity: 0, y: -30, transition: { duration: 0.3 } }
};

export default function TestsScore() {
  const navigate = useNavigate();

  const [localScores, setLocalScores] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('mockQuizScores') || '[]');
    setLocalScores(saved.sort((a, b) => new Date(b.date) - new Date(a.date)));
  }, []);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      className="flex flex-col items-center justify-center min-h-[80vh] w-full max-w-4xl mx-auto"
    >
      {localScores.length === 0 ? (
        <div className="text-center glass p-12 w-full flex flex-col items-center">
          <History size={64} className="text-gray-500 mb-6 opacity-50" />
          <h2 className="text-3xl font-bold mb-4">No Tests Attempted Yet</h2>
          <p className="text-gray-400 mb-8 max-w-md">
            You haven't taken any quizzes. Start a test to measure your skills and track your progress here!
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/tests')}
            className="glass-button active flex items-center gap-2 text-xl px-8 py-4 font-bold shadow-[0_0_30px_rgba(139,92,246,0.5)] border-purple-400"
          >
            Start a test
          </motion.button>
        </div>
      ) : (
        <div className="w-full">
          <div className="flex items-center gap-3 mb-8">
            <Trophy size={36} className="text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]" />
            <h2 className="text-3xl font-bold">Your Test History</h2>
          </div>
          
          <div className="grid gap-4 w-full">
            {localScores.map((score, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0, transition: { delay: index * 0.1 } }}
                className="glass p-6 flex flex-col md:flex-row justify-between items-center gap-4 hover:bg-white/5 transition-colors duration-300"
              >
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-lg font-bold text-gray-200">
                    <span className="uppercase text-purple-400">{score.category}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-blue-300">{score.level} Level</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Calendar size={14} />
                    {new Date(score.date).toLocaleString()}
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                      {Math.round((score.correct / score.total) * 100)}%
                    </div>
                    <div className="text-xs text-gray-400 flex items-center justify-end gap-1">
                      <CheckCircle size={10} className="text-green-500" />
                      {score.correct} / {score.total} Correct
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}
