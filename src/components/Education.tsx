import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Calendar } from 'lucide-react';

const educationData = [
  {
    institution: "Dr.Vishwanath Karad MIT WORLD PEACE UNIVERSITY | PUNE",
    degree: "Master of Computer Applications - MCA, Computer Science",
    dates: "July 2025 - July 2026",
    highlight: "Pursuing"
  },
  {
    institution: "Savitribai Phule Pune University",
    degree: "Bachelor of Science - Computer Science",
    dates: "June 2022 - June 2025",
    highlight: "CGPA: 8.42"
  },
  {
    institution: "Mahatma Gandhi Vidyamandir's Loknete Vyankatrao Hiray Arts, Science & Commerce",
    degree: "12th, Science",
    dates: "July 2020 - June 2022"
  },
  {
    institution: "Delhi public school Nashik",
    degree: "10th, SSC",
    dates: "April 2017 - July 2020"
  }
];

export const Education: React.FC = () => {
  return (
    <section id="education" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white flex items-center gap-4 mb-2">
              <div className="p-2 bg-blue-500/10 rounded-xl border border-blue-500/20">
                <GraduationCap className="text-blue-500" size={32} />
              </div>
              Education Journey
            </h2>
            <p className="text-slate-400 text-base sm:text-lg ml-14">My academic path and milestones</p>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line with Gradient */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-slate-800 to-transparent transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 top-0 md:top-1/2 w-8 h-8 bg-slate-950 border-2 border-slate-800 rounded-full transform -translate-x-1/2 md:-translate-y-1/2 z-10 flex items-center justify-center group">
                  <div className="w-2.5 h-2.5 bg-blue-500 rounded-full group-hover:scale-150 transition-transform duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="group bg-slate-900/40 backdrop-blur-md border border-slate-800 p-6 sm:p-8 rounded-2xl hover:border-blue-500/30 hover:bg-slate-900/60 transition-all duration-500 shadow-xl hover:shadow-blue-500/5">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center justify-between gap-4">
                        <span className="flex items-center gap-2 text-xs font-mono text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                          <Calendar size={12} /> {item.dates}
                        </span>
                        {item.highlight && (
                          <span className="text-[10px] uppercase tracking-wider font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                            {item.highlight}
                          </span>
                        )}
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 leading-tight mb-2">
                          {item.degree}
                        </h3>
                        <p className="text-slate-400 font-medium leading-relaxed">
                          {item.institution}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Empty space for the other side on desktop */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
