import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, Award, Target, BookOpen, Maximize2, X } from 'lucide-react';

import awsJobSimImg from './aws-job-sim.jpg';
import genAiCertImg from './gen-ai-cert.jpg';
import postmanImg from './postman.png';
import gitGithubImg from './git-and-github.jpeg';
import claudeCodeInActionImg from './claude-code-in-action.jpg';

const certifications = [
  {
    title: "Claude Code In Action - Anthropic",
    issuer: "Anthropic",
    image: claudeCodeInActionImg,
    date: "March 18 2026"
  },
  {
    title: "AWS - Solutions Architecture Job Simulation",
    issuer: "Forage / AWS",
    image: awsJobSimImg,
    date: "Dec 12 2025"
  },

  {
    title: "Workshop on Generative and Agentic AI",
    issuer: "Nova GenX Labs",
    image: "https://media.licdn.com/dms/image/v2/D4D22AQG48BzDwHCcPw/feedshare-shrink_2048_1536/B4DZxs2kLmJIAk-/0/1771352769510?e=1773878400&v=beta&t=AoEv4lYDmolOMf8q6Ln7xWIKEjIpLLnpRJaKyPv9diY",
    date: "Nov 27 2025"
  },
  {
    title: "Networking Basics – Cisco NetAcad",
    issuer: "Microsoft",
    image: "https://media.licdn.com/dms/image/v2/D5622AQFKoxtyII1wcg/feedshare-shrink_2048_1536/B56ZqBahySI8Aw-/0/1763107808305?e=1773878400&v=beta&t=VjoiZtWBN-8xlN5PkjXv69of_WK7Ksx1oTBKejfJhuE",
    date: "Nov 14 2025"
  },
  {
    title: "Career Essentials in Generative AI learning path by Microsoft & LinkedIn!",
    issuer: "LinkedIn Learning",
    image: genAiCertImg,
    date: "Aug 17 2025"
  },
  {
    title: "Postman API Fundamentals Student Expert – LetsUpgrade",
    issuer: "Postman",
    image: postmanImg,
    date: "July 14 2024"
  },
  {
    title: "Git and Github Bootcamp",
    issuer: "Lets Upgrade",
    image: gitGithubImg,
    date: "June 19 2024"
  }

];

export const Achievements: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<typeof certifications[0] | null>(null);

  return (
    <section id="achievements" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
          <Trophy className="text-blue-500" /> Achievements & Certifications
        </h2>

        <div className="flex flex-col gap-12">
          {/* Awards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-amber-500/10 to-orange-600/10 border border-amber-500/20 p-8 rounded-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity group-hover:scale-110 duration-500">
              <Target size={120} />
            </div>
            <Award className="text-amber-500 mb-6" size={40} />
            <h3 className="text-2xl font-bold text-white mb-4">Sports Pistol Shooting</h3>
            <p className="text-amber-200/80 text-lg">Bronze Medalist</p>
            <p className="text-amber-200/80 text-lg">Dervan Youth Games 2022</p>
            <p className="text-slate-400 mt-4 max-w-2xl">
              I bring focus and discipline into every challenge I take on, translating the precision of sports shooting into writing clean, efficient code.
            </p>
          </motion.div>

          {/* Certifications Grid */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="text-blue-400" size={28} />
              <h3 className="text-2xl font-bold text-white">Licenses & Certifications</h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-600 transition-all cursor-pointer flex flex-col hover:shadow-xl hover:shadow-black/50"
                  onClick={() => setSelectedCert(cert)}
                >
                  <div className="relative h-48 overflow-hidden bg-slate-950">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-90" />
                    <div className="absolute top-4 right-4 p-2 bg-slate-900/60 backdrop-blur-md rounded-lg opacity-0 group-hover:opacity-100 transition-opacity border border-slate-700">
                      <Maximize2 size={16} className="text-white" />
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow relative z-10 -mt-8 bg-gradient-to-t from-slate-900 via-slate-900 to-transparent pt-8">
                    <h4 className="text-lg font-bold text-white mt-2 mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
                      {cert.title}
                    </h4>
                    <div className="mt-auto pt-4 flex items-center justify-between text-sm">
                      <span className="text-slate-400 font-medium">{cert.issuer}</span>
                      <span className="text-slate-500 font-mono bg-slate-950 px-2 py-1 rounded-md border border-slate-800">{cert.date}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-slate-950/90 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 md:p-6 border-b border-slate-800 bg-slate-900/80 backdrop-blur-md z-10">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white">{selectedCert.title}</h3>
                  <p className="text-slate-400 mt-1 flex items-center gap-2">
                    <span className="text-blue-400 font-medium">{selectedCert.issuer}</span>
                    <span>•</span>
                    <span className="font-mono">{selectedCert.date}</span>
                  </p>
                </div>
                <button
                  onClick={() => setSelectedCert(null)}
                  className="p-2 bg-slate-800 hover:bg-slate-700 text-white rounded-full transition-colors shrink-0 ml-4 border border-slate-700"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-4 md:p-6 overflow-auto bg-slate-950 flex items-center justify-center min-h-[50vh] relative">
                {/* Decorative background blur inside modal */}
                <div className="absolute inset-0 bg-blue-500/5 blur-[100px] pointer-events-none" />

                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="max-w-full max-h-[70vh] object-contain rounded-lg border border-slate-800 shadow-2xl relative z-10"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800";
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
