import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Terminal } from 'lucide-react';

export const Splash: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  const loadingTexts = [
    "INITIALIZING_SYSTEM_CORE...",
    "LOADING_DEPENDENCIES...",
    "COMPILING_ASSETS...",
    "ESTABLISHING_SECURE_CONNECTION...",
    "ACCESS_GRANTED."
  ];

  useEffect(() => {
    // Progress counter
    const duration = 2500; // 2.5 seconds total loading time
    const interval = 20;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const newProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setProgress(newProgress);
      
      // Update text index based on progress
      if (newProgress > 85) setTextIndex(4);
      else if (newProgress > 65) setTextIndex(3);
      else if (newProgress > 40) setTextIndex(2);
      else if (newProgress > 15) setTextIndex(1);

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(onComplete, 400); // Wait a bit after 100% before completing
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030712] overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      {/* Techy Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
      
      <div className="relative z-10 flex flex-col items-center w-full max-w-md px-6">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0, rotateX: 90 }}
          animate={{ scale: 1, opacity: 1, rotateX: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="relative mb-12"
        >
          <div className="absolute inset-0 bg-blue-500 blur-[40px] opacity-20" />
          <div className="w-24 h-24 border-2 border-blue-500/30 rounded-xl flex items-center justify-center bg-slate-950/50 backdrop-blur-md relative overflow-hidden shadow-[0_0_30px_rgba(59,130,246,0.15)]">
            {/* Scanning line */}
            <motion.div 
              className="absolute inset-0 border-t-2 border-blue-400/50 bg-gradient-to-b from-blue-400/10 to-transparent"
              animate={{ y: ["-100%", "200%"] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
            <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-500 font-mono tracking-tighter relative z-10">
              YS
            </span>
          </div>
        </motion.div>

        {/* Terminal Output */}
        <div className="w-full bg-slate-900/50 border border-slate-800 rounded-lg p-4 font-mono text-xs sm:text-sm text-blue-400/80 mb-6 backdrop-blur-sm shadow-[0_0_30px_rgba(59,130,246,0.05)]">
          <div className="flex items-center gap-2 mb-3 border-b border-slate-800 pb-2">
            <Terminal size={14} className="text-slate-500" />
            <span className="text-slate-500">system_boot.sh</span>
          </div>
          <div className="h-24 flex flex-col justify-end overflow-hidden">
            {loadingTexts.map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ 
                  opacity: i <= textIndex ? 1 : 0,
                  display: i <= textIndex ? 'block' : 'none'
                }}
                className={`mb-1.5 ${i === textIndex ? 'text-blue-400' : 'text-slate-600'}`}
              >
                <span className="text-slate-600 mr-2">{'>'}</span>
                {text}
                {i === textIndex && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="inline-block w-2 h-3 bg-blue-400 ml-1 align-middle"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full flex items-center gap-4">
          <div className="text-blue-400 font-mono text-sm w-12 text-right">
            {progress}%
          </div>
          <div className="flex-1 h-1 bg-slate-800 rounded-full overflow-hidden relative">
            <motion.div
              className="absolute top-0 left-0 h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
