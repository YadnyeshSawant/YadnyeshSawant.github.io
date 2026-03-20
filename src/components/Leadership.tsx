import React from 'react';
import { motion } from 'motion/react';
import { Users, Calendar, Cpu, Award } from 'lucide-react';

const leadershipData = [
  {
    title: "SPR - Student Placement Representative",
    event: "Placement Coordination",
    organization: "MIT World Peace University, Pune",
    year: "2025 - 2026",
    icon: "groups",
    description: "Serving as a Student Placement Representative (SPR) for the MCA batch. Responsible for coordinating between the placement cell and students, managing recruitment drives, and assisting peers in career development opportunities."
  },
  {
    title: "Stage & Discipline Committee Member - Spandan Cultural Fest MIT",
    event: "Spandan Cultural Fest",
    organization: "MIT World Peace University",
    year: "2026",
    icon: "groups",
    description: "Managed stage coordination, ensured discipline, and assisted in smooth execution of university-level cultural events. Collaborated with event teams and awardees to maintain organized event flow and logistics."
  },
  {
    title: "Event Coordinator",
    event: "Agile Methodology Guest Lecture & Workshop",
    organization: "MIT World Peace University, Pune",
    year: "2025",
    icon: "event",
    description: "Coordinated with faculty and student teams to organize and manage an Agile Methodology workshop led by industry expert Mr. Mukkesh Shanmugam. Assisted in event planning, logistics, and execution, ensuring smooth coordination and successful delivery. Gained practical exposure to Agile principles, Scrum practices, and real-world software development workflows."
  },
  {
    title: "Event Coordinator",
    event: "Next-Gen AI Tools for Data, Design & Workflow Workshop",
    organization: "MIT World Peace University, Pune",
    year: "2025",
    icon: "smart_toy",
    description: "Coordinated with faculty and student teams to organize a workshop on modern no-code AI tools led by Prof. (Dr.) Abhijit Tarawade. Assisted in event planning, logistics, and execution while gaining exposure to AI platforms such as Google Opal and Napkin AI, and their applications in workflow automation, data processing, and AI-driven development."
  },
  {
    title: "Volunteer",
    event: "Convocation Ceremony, of MCA at MIT Art, Design & Technology University (MIT ADT), Pune",
    organization: "MIT World Peace University, Pune",
    year: "2025",
    icon: "smart_toy",
    description: "Supported faculty members and organizing staff during the university convocation ceremony by assisting with event coordination, guest guidance, and maintaining discipline. Collaborated with the volunteer team to ensure smooth execution of formal proceedings and efficient event management."
  },
  {
    title: "Event Organizer - Technophilia Technical Event",
    event: "Techonophilia 2024 and 2025 - Tech event of BSC CS students",
    organization: "KVN Naik Arts, Commerce & Science College, Nashik",
    year: "2024 & 2025",
    icon: "smart_toy",
    description: "Served as part of the organizing team for Technophilia, a department level technical event, contributing to event planning, coordination, and execution. Worked closely with faculty and student coordinators to manage participants, oversee logistics, and ensure seamless event flow. Developed leadership, teamwork, and event management skills while helping deliver a successful large-scale technical event."
  }
];

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'groups':
      return <Users className="text-blue-400" size={24} />;
    case 'event':
      return <Calendar className="text-purple-400" size={24} />;
    case 'smart_toy':
      return <Cpu className="text-emerald-400" size={24} />;
    default:
      return <Award className="text-blue-400" size={24} />;
  }
};

export const Leadership: React.FC = () => {
  return (
    <section id="leadership" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
          <Users className="text-blue-500" /> Leadership & Extracurriculars
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {leadershipData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-900/40 backdrop-blur-md border border-slate-800 p-6 rounded-xl hover:bg-slate-800/50 hover:border-slate-700 transition-all group"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="p-3 bg-slate-950 rounded-lg border border-slate-800 group-hover:border-slate-600 transition-colors">
                  {getIcon(item.icon)}
                </div>
                <span className="text-sm font-mono text-slate-400 bg-slate-950 px-3 py-1 rounded-full border border-slate-800">
                  {item.year}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                {item.title}
              </h3>
              
              <div className="mb-4">
                <p className="text-blue-400 text-sm font-medium mb-1">{item.event}</p>
                <p className="text-slate-400 text-sm">{item.organization}</p>
              </div>
              
              <p className="text-slate-300 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
