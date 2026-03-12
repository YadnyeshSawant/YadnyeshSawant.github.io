/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { AnimatedBackground } from './components/AnimatedBackground';
import { Splash } from './components/Splash';
import { Hero } from './components/Hero';
import { Education } from './components/Education';
import { Achievements } from './components/Achievements';
import { Skills } from './components/Skills';
import { Navbar } from './components/Navbar';
import { Contact } from './components/Contact';
import { Leadership } from './components/Leadership';
import { Projects } from './components/Projects';
import { Github } from './components/Github';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="min-h-screen text-slate-200 font-sans selection:bg-blue-500/30">
      <AnimatedBackground />
      
      <AnimatePresence>
        {showSplash && <Splash onComplete={() => setShowSplash(false)} />}
      </AnimatePresence>

      {!showSplash && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Navbar />
          <main className="container mx-auto px-4 sm:px-6 pt-20 md:pt-24 pb-20 md:pb-24 max-w-7xl flex flex-col gap-20 md:gap-32">
            <Hero />
            <Education />
            <Skills />
            <Projects />
            <Github />
            <Leadership />
            <Achievements />
            <Contact />
          </main>
        </motion.div>
      )}
    </div>
  );
}
