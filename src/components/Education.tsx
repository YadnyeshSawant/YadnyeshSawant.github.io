import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, School } from 'lucide-react';

const educationData = [
  {
    institution: "Dr. Vishwanath Karad MIT World Peace University",
    location: "Pune, Maharashtra",
    degree: "Master of Computer Applications (MCA)",
    specialization: "Computer Science",
    dates: "2025 - 2026",
    status: "In Progress",
    description: "Focusing on advanced software engineering, cloud computing, and enterprise application development.",
    icon: GraduationCap,
    color: "blue"
  },
  {
    institution: "Savitribai Phule Pune University",
    location: "Nashik, Maharashtra",
    degree: "Bachelor of Science (B.Sc.)",
    specialization: "Computer Science",
    dates: "2022 - 2025",
    status: "CGPA: 8.42",
    description: "Foundation in data structures, algorithms, database management, and core programming paradigms.",
    icon: BookOpen,
    color: "indigo"
  },
  {
    institution: "L.V.H. Arts, Science & Commerce College",
    location: "Nashik, Maharashtra",
    degree: "Higher Secondary Education (12th)",
    specialization: "Science Stream",
    dates: "2020 - 2022",
    status: "Completed",
    description: "Focused on Physics, Chemistry, and Mathematics with a strong interest in Computer Science.",
    icon: School,
    color: "slate"
  },
  {
    institution: "Delhi Public School",
    location: "Nashik, Maharashtra",
    degree: "Secondary School Certificate (10th)",
    specialization: "General Studies",
    dates: "2017 - 2020",
    status: "Completed",
    description: "Early academic foundation with consistently strong performance in science and technology subjects.",
    icon: Award,
    color: "slate"
  }
];

export const Education: React.FC = () => {
  return (
    <section id="education" className="scroll-mt-24 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto px-4"
      >
        <div className="mb-16 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-4"
          >
            <GraduationCap size={14} />
            <span>ACADEMIC BACKGROUND</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Educational <span className="text-blue-500 serif">Journey</span>
          </h2>
          <p className="text-slate-400 max-w-2xl text-lg">
            A timeline of my academic milestones and the institutions that shaped my technical foundation.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-slate-800 to-transparent md:-translate-x-1/2 hidden sm:block" />

          <div className="space-y-12 relative">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Point */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-slate-950 border-2 border-blue-500 rounded-full md:-translate-x-1/2 z-10 hidden sm:block shadow-[0_0_10px_rgba(59,130,246,0.5)]" />

                {/* Content Card */}
                <div className="w-full md:w-[45%]">
                  <div className="group relative bg-slate-900/30 backdrop-blur-sm border border-slate-800/50 p-8 rounded-3xl hover:bg-slate-900/50 hover:border-blue-500/30 transition-all duration-500 shadow-2xl">
                    {/* Background Glow */}
                    <div className="absolute -inset-px bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
                    
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-6">
                        <div className={`p-3 rounded-2xl bg-slate-800/50 border border-slate-700 group-hover:border-blue-500/50 transition-colors`}>
                          <item.icon className="text-blue-400" size={24} />
                        </div>
                        <div className="flex flex-col items-end">
                          <span className="text-xs font-mono text-slate-500 mb-1 flex items-center gap-1">
                            <Calendar size={12} /> {item.dates}
                          </span>
                          {item.status && (
                            <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                              {item.status}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                            {item.degree}
                          </h3>
                          <p className="text-blue-300/80 font-medium text-sm mt-1">
                            {item.specialization}
                          </p>
                        </div>

                        <div className="space-y-4 pt-4 border-t border-slate-800/50">
                          <div className="flex items-center gap-2 text-slate-300 font-semibold">
                            <School size={16} className="text-blue-500" />
                            <span>{item.institution}</span>
                          </div>
                          
                          <div className="flex items-center gap-2 text-slate-500 text-sm">
                            <MapPin size={14} />
                            <span>{item.location}</span>
                          </div>

                          <p className="text-slate-400 text-sm leading-relaxed italic">
                            "{item.description}"
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for desktop */}
                <div className="hidden md:block md:w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
