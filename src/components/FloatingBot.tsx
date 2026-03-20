import React from 'react';
import { motion } from 'motion/react';

export const FloatingBot: React.FC = () => {
  return (
    <div className="absolute bottom-0 left-0 w-full h-24 overflow-hidden pointer-events-none z-20">
      <motion.div
        className="absolute bottom-4"
        initial={{ x: "-10%" }}
        animate={{ 
          x: ["-10%", "90%", "-10%"],
          rotateY: [0, 0, 180, 180, 0] 
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity, 
          ease: "linear",
          times: [0, 0.48, 0.5, 0.98, 1]
        }}
      >
        <div className="relative group">
          {/* Bot Body */}
          <div className="w-12 h-12 bg-slate-800 rounded-xl border-2 border-blue-500/50 shadow-xl shadow-blue-500/20 flex flex-col items-center justify-center relative overflow-hidden">
            {/* Screen Face */}
            <div className="w-8 h-5 bg-slate-900 rounded border border-blue-500/30 flex items-center justify-center gap-1.5">
              <motion.div 
                animate={{ scaleY: [1, 0.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, times: [0, 0.1, 0.2] }}
                className="w-1.5 h-1.5 bg-blue-400 rounded-full shadow-[0_0_8px_rgba(96,165,250,0.8)]" 
              />
              <motion.div 
                animate={{ scaleY: [1, 0.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, times: [0, 0.1, 0.2], delay: 0.1 }}
                className="w-1.5 h-1.5 bg-blue-400 rounded-full shadow-[0_0_8px_rgba(96,165,250,0.8)]" 
              />
            </div>
            
            {/* Mouth/Light */}
            <div className="w-4 h-0.5 bg-blue-500/50 rounded-full mt-1 animate-pulse" />
            
            {/* Internal glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent pointer-events-none" />
          </div>

          {/* Antenna */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex flex-col items-center">
            <div className="w-0.5 h-3 bg-slate-600" />
            <motion.div 
              animate={{ 
                backgroundColor: ["#3b82f6", "#60a5fa", "#3b82f6"],
                boxShadow: ["0 0 5px #3b82f6", "0 0 15px #60a5fa", "0 0 5px #3b82f6"]
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 rounded-full" 
            />
          </div>

          {/* Waving Arm (Right) */}
          <motion.div 
            className="absolute -right-3 top-4 w-4 h-1.5 bg-slate-700 rounded-full origin-left border border-blue-500/20"
            animate={{ rotate: [0, -60, 0, -60, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute right-0 -top-1 w-2 h-3 bg-blue-500/40 rounded-full blur-[2px]" />
          </motion.div>

          {/* Left Arm */}
          <div className="absolute -left-3 top-4 w-4 h-1.5 bg-slate-700 rounded-full border border-blue-500/20" />

          {/* Hover/Float effect for the whole bot */}
          <motion.div
            className="absolute inset-0 -z-10"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Shadow below */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-black/40 rounded-full blur-sm" />
        </div>
      </motion.div>
    </div>
  );
};
