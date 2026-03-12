import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Github as GithubIcon, Star, GitFork, Book, Users, MapPin, Link as LinkIcon } from 'lucide-react';

interface GithubUser {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  location: string;
  blog: string;
}

interface GithubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
}

export function Github() {
  const [user, setUser] = useState<GithubUser | null>(null);
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const username = 'YadnyeshSawant';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`),
          fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`)
        ]);

        if (userRes.ok && reposRes.ok) {
          const userData = await userRes.json();
          const reposData = await reposRes.json();
          setUser(userData);
          setRepos(reposData);
        }
      } catch (error) {
        console.error('Error fetching GitHub data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <section id="github" className="py-20 flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </section>
    );
  }

  if (!user) return null;

  return (
    <section id="github" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            GitHub Activity
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Explore my open-source contributions and latest projects directly from GitHub.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 sticky top-24">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6 group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                  <img
                    src={user.avatar_url}
                    alt={user.name}
                    className="relative w-32 h-32 rounded-full border-2 border-white/10"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">{user.name}</h3>
                <p className="text-blue-400 mb-4">@{user.login}</p>
                <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                  {user.bio}
                </p>

                <div className="grid grid-cols-3 gap-4 w-full mb-8">
                  <div className="text-center">
                    <p className="text-xl font-bold">{user.public_repos}</p>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">Repos</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold">{user.followers}</p>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">Followers</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xl font-bold">{user.following}</p>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">Following</p>
                  </div>
                </div>

                <div className="w-full space-y-3 text-sm text-slate-400">
                  {user.location && (
                    <div className="flex items-center gap-3">
                      <MapPin size={16} className="text-blue-400" />
                      <span>{user.location}</span>
                    </div>
                  )}
                  {user.blog && (
                    <div className="flex items-center gap-3">
                      <LinkIcon size={16} className="text-blue-400" />
                      <a href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                        {user.blog}
                      </a>
                    </div>
                  )}
                </div>

                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 flex items-center justify-center gap-2 w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all group"
                >
                  <GithubIcon size={18} />
                  <span>View Full Profile</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Repositories Grid */}
          <div className="lg:col-span-2 space-y-8">
            {/* Stats and Graph Section */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* GitHub Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-slate-900/40 backdrop-blur-sm border border-white/5 rounded-3xl p-6"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                      <Star size={18} />
                    </div>
                    <h4 className="text-lg font-bold">General Stats</h4>
                  </div>
                  <img
                    src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&title_color=60a5fa&text_color=94a3b8&icon_color=3b82f6&hide_border=true`}
                    alt="GitHub Stats"
                    className="w-full"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>

                {/* Top Languages */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-slate-900/40 backdrop-blur-sm border border-white/5 rounded-3xl p-6"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                      <Book size={18} />
                    </div>
                    <h4 className="text-lg font-bold">Top Languages</h4>
                  </div>
                  <img
                    src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent&title_color=60a5fa&text_color=94a3b8&icon_color=3b82f6&hide_border=true`}
                    alt="Top Languages"
                    className="w-full"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              </div>

              {/* GitHub Streak */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-900/40 backdrop-blur-sm border border-white/5 rounded-3xl p-6"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-orange-500/10 rounded-lg text-orange-400">
                    <GithubIcon size={18} />
                  </div>
                  <h4 className="text-lg font-bold">Commit Streak</h4>
                </div>
                <img
                  src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=transparent&stroke=3b82f6&background=0f172a00&ring=3b82f6&fire=3b82f6&currStreakNum=ffffff&sideNums=ffffff&sideLabels=94a3b8&dates=94a3b8&hide_border=true`}
                  alt="GitHub Streak"
                  className="w-full"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Contribution Heatmap */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-900/40 backdrop-blur-sm border border-white/5 rounded-3xl p-6 md:p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                    <GithubIcon size={20} />
                  </div>
                  <h4 className="text-xl font-bold">Contribution Heatmap</h4>
                </div>
                <div className="pb-2 bg-black/20 rounded-xl p-4 relative overflow-x-auto">
                  <img
                    src={`https://ghchart.rshah.org/22c33e/${username}`}
                    alt={`${username}'s GitHub Contributions`}
                    className="w-full min-w-[600px]"
                    style={{ filter: 'invert(1) hue-rotate(180deg) brightness(1.5)' }}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="mt-4 flex justify-between items-center text-xs text-slate-500">
                  <span>Less</span>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-[3px] bg-[#1a1a1a]"></div>
                    <div className="w-3 h-3 rounded-[3px] bg-emerald-900/40"></div>
                    <div className="w-3 h-3 rounded-[3px] bg-emerald-700/60"></div>
                    <div className="w-3 h-3 rounded-[3px] bg-emerald-500/80"></div>
                    <div className="w-3 h-3 rounded-[3px] bg-emerald-400"></div>
                  </div>
                  <span>More</span>
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {repos.map((repo, index) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full bg-slate-900/40 backdrop-blur-sm border border-white/5 hover:border-blue-500/30 rounded-2xl p-6 transition-all hover:translate-y-[-4px]"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                      <Book size={20} />
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-500">
                      <div className="flex items-center gap-1">
                        <Star size={14} />
                        <span>{repo.stargazers_count}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork size={14} />
                        <span>{repo.forks_count}</span>
                      </div>
                    </div>
                  </div>
                  <h4 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition-colors">
                    {repo.name}
                  </h4>
                  <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                    {repo.description || 'No description provided.'}
                  </p>
                  {repo.language && (
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                      <span className="text-xs text-slate-500 font-medium">{repo.language}</span>
                    </div>
                  )}
                </a>
              </motion.div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
