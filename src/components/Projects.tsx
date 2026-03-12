import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FolderGit2, ExternalLink, Github, Code2, Calendar, User, CheckCircle2, X, Image as ImageIcon, Linkedin, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import bookAndJoyScreenshots from './bookandjoyimages/description.json';
import wellnessTrackerScreenshots from './wellnesstrackerimages/description.json';
import executorScreenshots from './executorimages/description.json';
const screenshotsMap: Record<string, any[]> = {
  "src/components/bookandjoyimages": bookAndJoyScreenshots,
  "src/components/wellnesstrackerimages": wellnessTrackerScreenshots,
  "src/components/executorimages": executorScreenshots
};

const projectsData = [
  {
    id: "book-n-joy",
    title: "BOOK-n-JOY: Event Ticket Booking Platform",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1000", // Fallback high-quality image
    technologies: ["Linux", "Java", "Spring Boot", "Maven", "Tomcat", "PostgreSQL", "Bootstrap", "JavaScript", "Git"],
    description: "Event planning and ticket booking have become integral to modern entertainment and social gatherings. BookNJoy is a web-based event ticketing platform designed to streamline the process of event discovery, booking, and ticket management. The system provides users with a seamless interface to explore events based on categories, register for events, and generate digital tickets without requiring payment integration. The primary objective of BookNJoy is to bridge the gap between event organizers and attendees by offering a user-friendly and efficient ticketing solution.",
    role: "Backend Developer",
    timeline: "Dec 2024 – Feb 2025 (3 Months)",
    status: "Completed",
    liveDemo: "",
    sourceCode: "https://github.com/theujwalthakare/aaomile",
    features: "User Authentication: Secure login and account management for both attendees and event organizers. Event Listing & Categorization: Events classified based on genre Music, Education, Sports, etc. Ticket Booking & Generation: Digital tickets with QR codes for easy entry validation. Event Management Dashboard: Organizers can create, edit, and delete events. Attendee Tracking: Organizers can manage attendees and track registrations. Event Notifications: Users receive event reminders and updates. Admin Panel: A centralized dashboard for monitoring events and users.",
    projectScreenshotsFolder:"src/components/bookandjoyimages",
    contributors: [
      { name: "Ujwal Thakare", linkedin: "https://www.linkedin.com/in/ujwal-thakare-300b25264/", avatar: "", role: "Fronend Developer" },
      { name: "Yadnyesh Sawant", linkedin: "https://www.linkedin.com/in/yadnyesh-sawant/", avatar: "", role: "Backend Developer" }
    ]
  },
  {
    id: "python-executor",
    title: "Python Program Executor with Version Control Implementation",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000", // Modern coding environment
    technologies: ["Java", "Swing", "Git", "Maven", "Python", "Git Bash", "Figma"],
    description: "Python Executor is a desktop application designed to simplify the process of writing, managing, and executing Python scripts in an organized development environment. The application provides an integrated interface that combines a powerful code editor, file management system, and built-in Git version control. With a modern dark-themed interface inspired by popular code editors, Python Executor allows users to easily navigate project directories, edit scripts efficiently, and execute Python programs while monitoring errors and outputs. The primary objective of Python Executor is to provide developers, students, and programmers with a lightweight yet feature-rich environment that improves productivity, simplifies script management, and enables seamless version control integration.",
    role: "Project Developer",
    timeline: "Sep 2025 - Oct 2025",
    status: "Completed",
    liveDemo: "#",
    sourceCode: "https://github.com/YadnyeshSawant/Installers/releases/tag/v2.1.1-beta",
    features:"File Explorer Mode: Tree-based navigation system that allows users to browse script and input directories with options to create, edit, rename, move, or delete files and folders. Advanced Code Editor: Built-in editor with features like find and replace, automatic Python indentation, undo/redo functionality, and error highlighting for easier debugging. Modern User Interface: Sleek dark theme with redesigned panels for file management, execution controls, and version control to improve usability. Global File Search: Search bar that allows users to quickly locate scripts and input files by name. Status Bar Information: Displays the currently loaded script and error count from the last script execution. Git Version Control Integration: Built-in support for Git commands such as add, commit, pull, and push, along with options to open Git Bash and view project history using Git Log. Recent Folder Access: Quick access to recently opened script or input directories for faster project navigation. Customizable Settings: Adjustable editor preferences including font size, tab spacing, keyboard shortcuts, and application behavior. Dependency Check & Startup Screen: The application verifies required dependencies such as Python and Git during startup and provides a loading screen for better feedback. Window Reload Option: Allows users to restart the application easily from the settings panel.",
    projectScreenshotsFolder:"src/components/executorimages",
    contributors: [{ name: "Yadnyesh Sawant", linkedin: "https://www.linkedin.com/in/yadnyesh-sawant/", avatar: "", role: "Java Developer" },]
  },
  {
    id: "codelabs",
    title: "CodeLabs: Code Testing Application",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDex-OFspX5h26_2iT6qTNt4kXTYm9w5sKwd7tylM50M7b0EMOxnZQ1IQYwfIER-Z8YQfpZt6-Wtchnilvq76116pHJM6ehQGVBbkue6Hf2cNM4gvrUIZjcPu7v0eX4CbM9OoHawJqhLJD9-29uHCWhnVMbGtLg5EvtFU54ra3wOUjKEddxAJ93hpjsk6SyKtamSCboj7y6V7ZWIf1AmJU1sj8N-TuLHY85dY9pvOvuoPtzwfudaSZX4-n00xtZvNtE8FVntV_anFj5",
    technologies: ["Java", "Swing", "Git", "Maven", "Socket Programming", "Client-Server"],
    description: "A client-server based code testing platform using socket programming to allow remote execution and testing of programs.",
    role: "Backend Developer",
    timeline: "2 Months",
    status: "Completed",
    liveDemo: "#",
    sourceCode: "https://github.com/YadnyeshSawant/CodingTestApp",

    contributors: [{ name: "Yadnyesh Sawant", linkedin: "https://www.linkedin.com/in/yadnyesh-sawant/", avatar: "", role: "Backend Developer" },]
  },
  {
    id: "Placement Portal",
    title: "Placement Portal: Student Job & Application Management System.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000", // Online portal dashboard concept
    technologies: ["Java", "Servelets", "jsp", "tailwindcss", "Client-Server"],
    description: "A client-server based placement portal for managing job applications and student placements.",
    role: "Backend Developer",
    timeline: "2 Months",
    status: "Under development",
    liveDemo: "#",
    sourceCode: "https://github.com/YadnyeshSawant/CodingTestApp",

    contributors: [{ name: "Dr. Dinesh Banswal", linkedin: "https://www.linkedin.com/in/dinesh-banswal/", avatar: "", role: "Faculty Project Mentor" },
    { name: "Yadnyesh Sawant", linkedin: "https://www.linkedin.com/in/yadnyesh-sawant/", avatar: "", role: "Backend Developer" },]
  },
  {
    id: "Wellness Tracker",
    title: "Wellness Tracker",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000", // Peaceful wellness theme image
    technologies: ["Linux", "Java", "Spring Boot", "Maven", "Tomcat", "PostgreSQL", "Bootstrap", "JavaScript", "Git"],
    description: "Maintaining a healthy lifestyle requires consistent monitoring of daily habits such as sleep, hydration, physical activity, and mental well-being. Daily Wellness Tracker is a web-based wellness monitoring application designed to help users record and track their daily health metrics in a structured manner. The system provides a simple and interactive interface where users can register, log in securely, and maintain daily records of wellness parameters such as steps, water intake, sleep duration, exercise activities, and mood. The primary objective of the application is to encourage healthy habits by allowing users to monitor their lifestyle patterns over time. The application follows an MVC architecture and integrates JSP-based frontend pages with Java Servlets and a MySQL relational database to ensure efficient data management and a smooth user experience.",
    role: "Technical Advisor",
    timeline: "Dec 2024 – Feb 2025 (3 Months)",
    status: "Completed",
    liveDemo: "",
    sourceCode: "https://github.com/theujwalthakare/aaomile",
    features: "User Authentication: Secure user registration, login, and logout functionality with session management. Daily Wellness Logging: Users can record daily health metrics including steps, water intake, sleep hours, and mood. Health Score Calculation: The system analyzes the user's daily wellness inputs such as sleep duration, water intake, steps, and activity levels to generate a health score out of 100, providing users with a quick summary of their overall daily wellness status. Dashboard Overview: A centralized dashboard where users can view their daily wellness data. Relational Data Management: Structured database design with relationships between users, daily logs and wellness metrics. Session Management: Maintains logged-in user sessions to ensure secure and personalized access. Modular MVC Architecture: Application structured using Model-View-Controller design pattern with Servlets, JSP, Beans, and DAO layers for maintainable development.",
    projectScreenshotsFolder:"src/components/wellnesstrackerimages",
    contributors: [{ name: "Dr. Dinesh Banswal", linkedin: "https://www.linkedin.com/in/dinesh-banswal/", avatar: "", role: "Faculty Project Mentor" },
    { name: "Rujuta Dani", linkedin: "https://www.linkedin.com/in/rujuta-dani-b000662b3/", avatar: "", role: "Full Stack Developer" },
    { name: "Yadnyesh Sawant", linkedin: "https://www.linkedin.com/in/yadnyesh-sawant/", avatar: "", role: "Technical Advisor" },
    
    ]
  },
  {
    id: "SPOTFIX",
    title: "SPOTFIX: A citizen government platform enabling users to report issues, track resolutions, and improve their communities ",
    image: "https://images.unsplash.com/photo-1494172961521-33799ddd43a5?q=80&w=1171&auto=format&fit=crop", // User provided image for SPOTFIX
    technologies: ["Java", "Dynamic Web App","Spring Tool Suite", "Tomcat", "MySQL", "Tailwind CSS", "JavaScript", "Git","JSP","Servlet","Google Stitch"],
    description: "SPOTFIX is a citizen–government interaction platform designed to empower citizens to actively participate in improving their communities. The system allows citizens to report public issues such as infrastructure problems, track the progress of their complaints, and receive updates on their resolution. In addition to issue reporting, citizens can also propose development projects or ideas that may benefit the community. Government departments within the state can use the platform to publish official announcements, updates, and important information for all citizens. By creating a transparent and centralized communication channel between citizens and government authorities, SpotFix helps improve governance, accountability, and community-driven development.",
    role: "Backend Developer",
    timeline: "March 2025 ",
    status: "Under development",
    liveDemo: "",
    sourceCode: "https://github.com/YadnyeshSawant/SPOTFIX",
    features: "User Authentication: Secure registration and login system for both citizens and government officials to ensure safe access and role-based functionality. Issue Reporting: Citizens can easily report public issues such as damaged roads, waste management problems, water supply issues, or other civic concerns with detailed descriptions. Issue Tracking Status Updates: Users can track the progress of their reported issues with status updates such as Submitted, In Progress, and Resolved. Project Proposal System: Citizens can suggest community development projects or improvement ideas that may benefit their locality. Department Announcements: Government departments can publish important announcements, public notices, and updates that are visible to all citizens. Department Management Dashboard: Authorities can review reported issues, update their status, respond to complaints, and manage citizen submissions efficiently. Issue Categorization: Issues can be categorized based on departments such as sanitation, infrastructure, electricity, water supply, etc., helping route problems to the correct authority. Citizen Feedback & Transparency: Citizens can monitor resolution progress, ensuring transparency and accountability in government services. Admin Panel: A centralized dashboard for monitoring users, issues, project proposals, and departmental activities.",
    contributors: [
      { name: "Yadnyesh Sawant", linkedin: "https://www.linkedin.com/in/yadnyesh-sawant/", avatar: "", role: "Backend Developer" },
      { name: "Rashita Gomes", linkedin: "https://www.linkedin.com/in/rashita-gomes-10200325a/", avatar: "", role: "Frontend Developer" }
    ]
  }
];

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projectsData[0] | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject && selectedProject.projectScreenshotsFolder && lightboxIndex !== null) {
      const screenshots = screenshotsMap[selectedProject.projectScreenshotsFolder];
      setLightboxIndex((prev) => (prev !== null ? (prev - 1 + screenshots.length) % screenshots.length : null));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject && selectedProject.projectScreenshotsFolder && lightboxIndex !== null) {
      const screenshots = screenshotsMap[selectedProject.projectScreenshotsFolder];
      setLightboxIndex((prev) => (prev !== null ? (prev + 1) % screenshots.length : null));
    }
  };

  return (
    <section id="projects" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-white flex items-center gap-3 mb-2">
              <FolderGit2 className="text-blue-500" /> Projects Gallery
            </h2>
            <p className="text-slate-400">Featured Works & Technical Implementations</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-600 transition-all flex flex-col h-full cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-slate-950">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${project.id}/800/600?blur=2`;
                  }}
                />
                <div className="absolute bottom-4 left-4 z-20 flex gap-2">
                  <span className="px-2.5 py-1 bg-blue-500/20 backdrop-blur-md border border-blue-500/30 text-blue-300 text-xs font-medium rounded-md flex items-center gap-1">
                    <Code2 size={12} /> {project.role}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 text-sm mb-6 line-clamp-3 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-slate-950 border border-slate-800 text-slate-300 text-xs rounded-md">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-slate-950 border border-slate-800 text-slate-500 text-xs rounded-md">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* Footer Links */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-800/50 mt-auto">
                  <span className="text-xs text-slate-500 font-mono flex items-center gap-1">
                    <Calendar size={12} /> {project.timeline}
                  </span>
                  <div className="flex gap-3">
                    {project.sourceCode && project.sourceCode !== '#' && (
                      <a 
                        href={project.sourceCode} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-slate-400 hover:text-white transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={18} />
                      </a>
                    )}
                    {project.liveDemo && project.liveDemo !== '#' && (
                      <a 
                        href={project.liveDemo} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-slate-400 hover:text-blue-400 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-slate-950/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header Image */}
              <div className="relative h-48 md:h-64 shrink-0 bg-slate-950">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover opacity-50"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${selectedProject.id}/800/600?blur=2`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-slate-950/50 hover:bg-slate-800 text-white rounded-full backdrop-blur-md transition-colors"
                >
                  <X size={20} />
                </button>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex flex-wrap gap-3 mb-3">
                    <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium rounded-full flex items-center gap-1.5 w-fit backdrop-blur-md">
                      <User size={14} /> {selectedProject.role}
                    </span>
                    <span className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-sm font-medium rounded-full flex items-center gap-1.5 w-fit backdrop-blur-md">
                      <CheckCircle2 size={14} /> {selectedProject.status}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                    {selectedProject.title}
                  </h2>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-4 sm:p-6 md:p-8 overflow-y-auto custom-scrollbar">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-8">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                        <FolderGit2 className="text-blue-400" size={20} /> About Project
                      </h3>
                      <p className="text-slate-300 leading-relaxed">
                        {selectedProject.description}
                      </p>
                    </div>

                    {selectedProject.features && (
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                          <CheckCircle2 className="text-emerald-400" size={20} /> Key Features
                        </h3>
                        <ul className="space-y-2">
                          {selectedProject.features.split(/\.\s+/).filter(Boolean).map((feature, idx) => {
                            const [title, desc] = feature.split(': ');
                            return (
                              <li key={idx} className="text-slate-300 flex items-start gap-2">
                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                                <span>
                                  {desc ? (
                                    <>
                                      <strong className="text-white font-medium">{title}:</strong> {desc}
                                    </>
                                  ) : (
                                    feature
                                  )}
                                </span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
                        Technologies
                      </h3>
                      <div className="flex flex-wrap gap-2 justify-left">
                        {selectedProject.technologies.map((tech, i) => (
                          <span key={i} className="px-2.5 py-1 bg-slate-950 border border-slate-800 text-slate-300 text-sm rounded-md">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
                        Timeline
                      </h3>
                      <p className="text-slate-300 flex items-center gap-2">
                        {selectedProject.timeline}
                      </p>
                    </div>

                    {selectedProject.contributors && selectedProject.contributors.length > 0 && (
                      <div>
                        <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                          <Users size={16} /> Contributors
                        </h3>
                        <div className="space-y-2">
                          {selectedProject.contributors.map((contributor: any, i: number) => (
                            <div key={i} className="flex items-center justify-between p-2 bg-slate-950 border border-slate-800 rounded-lg group/contributor">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full overflow-hidden border border-slate-700 bg-slate-900 shrink-0">
                                  <img 
                                    src={contributor.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(contributor.name)}&background=0D8ABC&color=fff&bold=true`}
                                    alt={contributor.name}
                                    className="w-full h-full object-cover"
                                    referrerPolicy="no-referrer"
                                  />
                                </div>
                                <div className="flex flex-col">
                                  <span className="text-slate-300 text-sm font-medium group-hover/contributor:text-white transition-colors">
                                    {contributor.name}
                                  </span>
                                  {contributor.role && (
                                    <span className="text-slate-500 text-xs">
                                      {contributor.role}
                                    </span>
                                  )}
                                </div>
                              </div>
                              {contributor.linkedin && (
                                <a 
                                  href={contributor.linkedin} 
                                  target="_blank" 
                                  rel="noreferrer"
                                  className="p-1.5 text-slate-500 hover:text-blue-400 hover:bg-blue-500/10 rounded-md transition-all"
                                  title={`View ${contributor.name}'s LinkedIn`}
                                >
                                  <Linkedin size={16} />
                                </a>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="pt-6 border-t border-slate-800 flex flex-col gap-3">
                      {selectedProject.sourceCode && selectedProject.sourceCode !== '#' && (
                        <a 
                          href={selectedProject.sourceCode} 
                          target="_blank" 
                          rel="noreferrer"
                          className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg flex items-center justify-center gap-2 transition-colors font-medium"
                        >
                          <Github size={18} /> View Source Code
                        </a>
                      )}
                      {selectedProject.liveDemo && selectedProject.liveDemo !== '#' && (
                        <a 
                          href={selectedProject.liveDemo} 
                          target="_blank" 
                          rel="noreferrer"
                          className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg flex items-center justify-center gap-2 transition-colors font-medium"
                        >
                          <ExternalLink size={18} /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Screenshots Section */}
                {selectedProject.projectScreenshotsFolder && screenshotsMap[selectedProject.projectScreenshotsFolder] && (
                  <div className="mt-12 pt-8 border-t border-slate-800">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                      <ImageIcon className="text-blue-400" size={24} /> Project Screenshots
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {screenshotsMap[selectedProject.projectScreenshotsFolder].map((screenshot: any, index: number) => (
                        <div 
                          key={index} 
                          className="bg-slate-950 rounded-xl overflow-hidden border border-slate-800 shadow-lg group cursor-pointer"
                          onClick={() => setLightboxIndex(index)}
                        >
                          <div className="relative aspect-video overflow-hidden bg-slate-900">
                            <img 
                              src={`${selectedProject.projectScreenshotsFolder}/${screenshot.image}`}
                              alt={screenshot.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                              <ImageIcon className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={32} />
                            </div>
                          </div>
                          <div className="p-4">
                            <h4 className="text-white font-medium">{screenshot.title}</h4>
                            <p className="text-slate-400 text-sm mt-1">{screenshot.desctiprion || screenshot.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && selectedProject && selectedProject.projectScreenshotsFolder && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 md:p-10"
            onClick={() => setLightboxIndex(null)}
          >
            <button 
              className="absolute top-6 right-6 p-3 text-white/70 hover:text-white transition-colors z-[70]"
              onClick={() => setLightboxIndex(null)}
            >
              <X size={32} />
            </button>

            <button 
              className="absolute left-4 md:left-10 p-4 text-white/50 hover:text-white transition-colors z-[70] bg-white/5 hover:bg-white/10 rounded-full"
              onClick={handlePrev}
            >
              <ChevronLeft size={40} />
            </button>

            <div className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center gap-6" onClick={(e) => e.stopPropagation()}>
              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.9, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.9, x: -20 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="relative w-full h-full flex items-center justify-center"
              >
                <img 
                  src={`${selectedProject.projectScreenshotsFolder}/${screenshotsMap[selectedProject.projectScreenshotsFolder][lightboxIndex].image}`}
                  alt={screenshotsMap[selectedProject.projectScreenshotsFolder][lightboxIndex].title}
                  className="max-w-full max-h-full object-contain shadow-2xl rounded-lg"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              
              <div className="text-center">
                <h4 className="text-white text-xl font-bold mb-2">
                  {screenshotsMap[selectedProject.projectScreenshotsFolder][lightboxIndex].title}
                </h4>
                <p className="text-slate-400">
                  {screenshotsMap[selectedProject.projectScreenshotsFolder][lightboxIndex].desctiprion || screenshotsMap[selectedProject.projectScreenshotsFolder][lightboxIndex].description}
                </p>
                <div className="mt-4 text-slate-500 font-mono text-sm">
                  {lightboxIndex + 1} / {screenshotsMap[selectedProject.projectScreenshotsFolder].length}
                </div>
              </div>
            </div>

            <button 
              className="absolute right-4 md:right-10 p-4 text-white/50 hover:text-white transition-colors z-[70] bg-white/5 hover:bg-white/10 rounded-full"
              onClick={handleNext}
            >
              <ChevronRight size={40} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
