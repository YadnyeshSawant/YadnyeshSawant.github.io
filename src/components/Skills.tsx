import React from 'react';
import { motion } from 'motion/react';
import { Code2, Database, Layout, Terminal, Wrench, Cpu } from 'lucide-react';

const skillCategories = [
  {
    title: "Languages",
    icon: <Code2 className="text-blue-400" size={24} />,
    description: "Core programming languages for building robust applications.",
    skills: ["Java", "Python", "C++", "C", "SQL", "PL/pgSQL", "HTML", "CSS"],
    color: "from-blue-500/10 to-blue-500/5",
    borderColor: "group-hover:border-blue-500/30"
  },
  {
    title: "Frameworks & Libraries",
    icon: <Layout className="text-purple-400" size={24} />,
    description: "Tools and frameworks for rapid and scalable development.",
    skills: ["Spring Boot", "Hibernate ORM", "Servlets & JSP", "Java Swing", "AWT", "Tailwind", "Bootstrap"],
    color: "from-purple-500/10 to-purple-500/5",
    borderColor: "group-hover:border-purple-500/30"
  },
  {
    title: "Databases",
    icon: <Database className="text-emerald-400" size={24} />,
    description: "Relational databases for structured data storage and management.",
    skills: ["PostgreSQL", "MySQL"],
    color: "from-emerald-500/10 to-emerald-500/5",
    borderColor: "group-hover:border-emerald-500/30"
  },
  {
    title: "Tools & Platforms",
    icon: <Wrench className="text-orange-400" size={24} />,
    description: "Development tools, IDEs, and version control systems.",
    skills: ["Git & GitHub", "VS Code", "IntelliJ IDEA", "Postman API", "Linux"],
    color: "from-orange-500/10 to-orange-500/5",
    borderColor: "group-hover:border-orange-500/30"
  },
  {
    title: "Concepts & Domains",
    icon: <Cpu className="text-pink-400" size={24} />,
    description: "Core computer science concepts and specialized domains.",
    skills: ["System Architecture", "Desktop App Dev", "DSA", "Prompt Engineering", "AI" , "Vibe Coding", "Full-Stack", "Backend"],
    color: "from-pink-500/10 to-pink-500/5",
    borderColor: "group-hover:border-pink-500/30",
    span: "md:col-span-2 lg:col-span-2"
  }
];

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-white flex items-center gap-3 mb-2">
              <Terminal className="text-blue-500" /> Technical Arsenal
            </h2>
            <p className="text-slate-400">Technologies, tools, and concepts I work with.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative overflow-hidden bg-slate-900/40 backdrop-blur-md border border-slate-800 p-6 rounded-2xl transition-all hover:shadow-2xl hover:shadow-black/50 ${category.span || ''} ${category.borderColor}`}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">{category.title}</h3>
                </div>
                
                <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                  {category.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-slate-950/80 border border-slate-800 text-slate-300 text-sm font-medium rounded-lg hover:text-white hover:border-slate-500 hover:bg-slate-800 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
