import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getQuestions } from '../data/questions';
import { CheckCircle2, XCircle, ArrowRight, BarChart3, RefreshCcw, Home } from 'lucide-react';

const quizVariants = {
  initial: { opacity: 0, scale: 0.95 },
  in: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.3 } }
};

export default function Quiz({ activeTest, onNavigateBack }) {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Math logic ensures 30 distinct questions are pulled
    setQuestions(getQuestions(activeTest.category, activeTest.level, 30));
  }, [activeTest]);

  if (questions.length === 0) return <div className="text-center p-10"><span className="animate-pulse">Loading Mock Environment...</span></div>;

  const currentQ = questions[currentIndex];
  const progress = ((currentIndex + (isFinished ? 1 : 0)) / questions.length) * 100;

  const handleSelectOption = (optIndex) => {
    setAnswers(prev => ({ ...prev, [currentIndex]: optIndex }));
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    setIsFinished(true);
    let correct = 0;
    questions.forEach((q, idx) => {
      if (answers[idx] === q.correctIndex) correct++;
    });

    // Save to local storage
    const existing = JSON.parse(localStorage.getItem('mockQuizScores') || '[]');
    existing.push({
      category: activeTest.category,
      level: activeTest.level,
      correct,
      total: questions.length,
      date: new Date().toISOString()
    });
    localStorage.setItem('mockQuizScores', JSON.stringify(existing));
  };

  if (isFinished) {
    return <Dashboard questions={questions} answers={answers} correctCount={questions.filter((q, i) => answers[i] === q.correctIndex).length} onNavigateBack={onNavigateBack} />;
  }

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="exit"
      variants={quizVariants}
      className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center min-h-[70vh] px-4"
    >
      {/* Progress Bar */}
      <div className="w-full mb-8">
        <div className="flex justify-between text-sm text-gray-400 mb-2 font-semibold tracking-wider uppercase">
          <span>Question {currentIndex + 1} of {questions.length}</span>
          <span>{activeTest.category} - {activeTest.level}</span>
        </div>
        <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.8)]" 
          />
        </div>
      </div>

      <div className="glass p-8 w-full rounded-3xl relative overflow-hidden backdrop-blur-2xl bg-black/40 border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
        {/* Glow Effects inside card */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/20 rounded-full mix-blend-screen filter blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/20 rounded-full mix-blend-screen filter blur-[100px] pointer-events-none" />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-6 relative z-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold leading-tight select-none">
              {currentQ.questionText}
            </h2>

            <div className="flex flex-col gap-3 mt-4">
              {currentQ.options.map((opt, i) => {
                const isSelected = answers[currentIndex] === i;
                return (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleSelectOption(i)}
                    className={`text-left p-4 rounded-xl border transition-all duration-300 ${
                      isSelected 
                        ? 'bg-purple-600/40 border-purple-400 shadow-[0_0_15px_rgba(147,51,234,0.4)]' 
                        : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                    }`}
                  >
                    <span className="font-semibold text-purple-300 mr-3">{String.fromCharCode(65 + i)}</span> 
                    {opt}
                  </motion.button>
                );
              })}
            </div>

            <div className="flex justify-end mt-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
                disabled={answers[currentIndex] === undefined}
                className={`glass-button flex items-center gap-2 ${answers[currentIndex] !== undefined ? 'active shadow-[0_0_20px_rgba(139,92,246,0.6)]' : 'opacity-50 cursor-not-allowed'}`}
              >
                {currentIndex === questions.length - 1 ? 'Submit Test' : 'Next Question'} 
                <ArrowRight size={18} />
              </motion.button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

function Dashboard({ questions, answers, correctCount, onNavigateBack }) {
  const percentage = Math.round((correctCount / questions.length) * 100);
  
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="exit"
      variants={quizVariants}
      className="w-full max-w-5xl mx-auto flex flex-col min-h-[80vh] py-8"
    >
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          Test Completed!
        </h1>
        <p className="text-gray-400">Here's your performance breakdown and areas to focus on.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Score Card */}
        <div className="glass p-8 flex flex-col items-center justify-center rounded-3xl md:col-span-1 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
          <div className="relative w-40 h-40 mb-4 flex items-center justify-center">
            {/* SVG Circle Progress */}
            <svg className="w-full h-full transform -rotate-90">
              <circle cx="80" cy="80" r="70" className="stroke-current text-white/10" strokeWidth="10" fill="transparent" />
              <motion.circle 
                initial={{ strokeDasharray: "440", strokeDashoffset: "440" }}
                animate={{ strokeDashoffset: 440 - (440 * percentage) / 100 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                cx="80" cy="80" r="70" 
                className={`stroke-current ${percentage > 70 ? 'text-green-500 drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]' : percentage > 40 ? 'text-yellow-500' : 'text-red-500'}`} 
                strokeWidth="10" fill="transparent" 
              />
            </svg>
            <div className="absolute text-3xl font-bold">{percentage}%</div>
          </div>
          <div className="text-xl font-bold mt-2">{correctCount} / {questions.length} Correct</div>
        </div>

        {/* Focus Areas Card */}
        <div className="glass p-8 rounded-3xl md:col-span-2 shadow-[0_0_30px_rgba(0,0,0,0.5)] bg-gradient-to-br from-white/5 to-purple-900/10 border-purple-500/20">
          <div className="flex items-center gap-3 mb-4">
            <BarChart3 className="text-purple-400" size={28} />
            <h2 className="text-2xl font-bold">Areas to Focus On</h2>
          </div>
          <p className="text-gray-300 leading-relaxed">
            {percentage > 90 
              ? "Excellent job! You have a solid grasp of these concepts. Continue practicing advanced architectural patterns."
              : percentage > 60
              ? "Good foundation! You missed a few nuanced questions. Focus heavily on reading precise specification details and lifecycle edge cases."
              : "Keep studying! Review fundamental concepts, variable scoping, and component rendering mechanisms before taking the Moderate/Hard levels."}
          </p>
          <div className="flex gap-4 mt-8">
             <button onClick={onNavigateBack} className="glass-button flex items-center gap-2 hover:bg-white/10 shadow-lg">
               <RefreshCcw size={18} /> Retake Test
             </button>
             <button onClick={() => window.location.href = '/'} className="glass-button active flex items-center gap-2 shadow-[0_0_15px_rgba(139,92,246,0.6)]">
               <Home size={18} /> Return Home
             </button>
          </div>
        </div>
      </div>

      {/* Explanations Section */}
      <h3 className="text-2xl font-bold mb-6 flex items-center gap-2 border-b border-white/10 pb-4">
        Detailed Review
      </h3>
      <div className="flex flex-col gap-6 pb-20">
        {questions.map((q, idx) => {
          const isCorrect = answers[idx] === q.correctIndex;
          return (
            <div key={idx} className={`glass p-6 rounded-2xl border-l-4 ${isCorrect ? 'border-l-green-500' : 'border-l-red-500'} bg-black/20`}>
              <div className="flex gap-4 items-start">
                <div className="mt-1">
                  {isCorrect ? <CheckCircle2 className="text-green-500" /> : <XCircle className="text-red-500" />}
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Q{idx + 1}: {q.questionText}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-4">
                    <div className="bg-white/5 p-3 rounded-lg border border-white/10">
                      <span className="text-gray-400 block mb-1 uppercase text-xs font-bold tracking-wider">Your Answer</span>
                      <span className={isCorrect ? "text-green-300 font-medium" : "text-red-300 font-medium"}>
                        {q.options[answers[idx]]}
                      </span>
                    </div>
                    {!isCorrect && (
                      <div className="bg-purple-900/20 p-3 rounded-lg border border-purple-500/20">
                        <span className="text-purple-300 block mb-1 uppercase text-xs font-bold tracking-wider">Correct Answer</span>
                        <span className="text-gray-200 font-medium">
                          {q.options[q.correctIndex]}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="text-gray-400 text-sm mt-3 pt-3 border-t border-white/5">
                    <strong className="text-gray-300">Explanation: </strong>
                    {q.explanation}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
