import React from 'react';
import { motion } from 'motion/react';
import { Download, ChevronDown, Github, Linkedin, Globe } from 'lucide-react';
// import profileImg from './profile.jpeg';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-[80vh] flex flex-col justify-center relative">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1"
        >
          <h2 className="text-blue-400 font-mono mb-4 tracking-wider uppercase text-sm">
            Aspiring Software Developer
          </h2>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Yadnyesh Sawant
          </h1>
          <p className="text-lg md:text-2xl text-slate-400 max-w-2xl mb-8 leading-relaxed">
            Trying to turn <span className="font-mono text-blue-300">“System.out.println(‘Hello World’);”</span> into something that builds the future.
          </p>
          <p className="text-slate-400 max-w-2xl mb-10 leading-relaxed">
            I’m pursuing my MCA at MIT World Peace University, Pune, and hold a B.Sc. in Computer Science (CGPA: 8.42) from KVN Naik College, Nashik. Skilled in Java, Spring Boot, SQL, and Web Development, I love creating practical, scalable, and user-focused solutions.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-10 md:mb-12">
            <a
              href="#education"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              View Journey <ChevronDown size={18} />
            </a>
            <a href="src/components/Yadnyesh_Resume.pdf" target ="_blank">  <button
              className="px-6 py-3 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 text-white rounded-lg font-medium transition-all flex items-center gap-2 backdrop-blur-sm"
              
            >
              Download Resume <Download size={18} />
            </button></a>
          </div>

          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/yadnyesh-sawant" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/YadnyeshSawant" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="https://yadnyeshsawant.github.io/Portfolio_YadnyeshSawant/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Globe size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex-1 flex justify-center md:justify-end w-full max-w-sm md:max-w-md"
        >
          <div className="relative aspect-[3/4] w-64 md:w-80">
            {/* Decorative background elements */}
            <div className="absolute inset-0 bg-blue-500/20 rounded-2xl blur-3xl" />
            <div className="absolute inset-0 border-2 border-slate-800 rounded-2xl translate-x-4 translate-y-4" />
            
            {/* Image container */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-slate-900 bg-slate-800 z-10 cursor-pointer shadow-2xl shadow-blue-500/20">
              <motion.img 
                whileHover={{ scale: 2.15 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                src={"src/components/profile.jpeg"} 
                alt="Yadnyesh Sawant" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback to a placeholder if profile.jpg is not found in the public folder
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800";
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
