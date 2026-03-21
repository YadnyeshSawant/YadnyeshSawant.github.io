import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Code2, Trophy, Target, Zap, BarChart3, ExternalLink } from 'lucide-react';

interface LeetCodeData {
  status: string;
  message: string;
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
  acceptanceRate: number;
  ranking: number;
  contributionPoints: number;
  reputation: number;
  submissionCalendar?: Record<string, number>;
  avatar?: string;
  name?: string;
  about?: string;
  country?: string;
  company?: string;
  jobTitle?: string;
  skillTags?: string[];
  postViewCount?: number;
  solutionCount?: number;
}

interface Submission {
  title: string;
  titleSlug: string;
  timestamp: string;
  statusDisplay: string;
  lang: string;
}

function SubmissionHeatmap({ calendar }: { calendar: Record<string, number> }) {
  const [hoveredDay, setHoveredDay] = useState<{ date: string; count: number } | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  // Generate last 365 days
  const today = new Date();
  const days = [];
  let totalSubmissions = 0;
  let activeDays = 0;
  
  for (let i = 364; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    const dateStr = date.toISOString().split('T')[0];
    let count = 0;
    
    Object.entries(calendar).forEach(([ts, val]) => {
      const d = new Date(parseInt(ts) * 1000).toISOString().split('T')[0];
      if (d === dateStr) count += val;
    });

    if (count > 0) {
      activeDays++;
      totalSubmissions += count;
    }
    days.push({ date: dateStr, count, dayOfWeek: date.getDay(), month: date.getMonth() });
  }

  // Calculate Max Streak
  let maxStreak = 0;
  let currentStreak = 0;
  days.forEach(day => {
    if (day.count > 0) {
      currentStreak++;
      maxStreak = Math.max(maxStreak, currentStreak);
    } else {
      currentStreak = 0;
    }
  });

  // Group into weeks (columns)
  const weeks: ({ date: string; count: number; dayOfWeek: number; month: number } | null)[][] = [];
  let currentWeek: ({ date: string; count: number; dayOfWeek: number; month: number } | null)[] = [];
  
  const firstDay = new Date(days[0].date).getDay();
  for (let i = 0; i < firstDay; i++) {
    currentWeek.push(null);
  }

  days.forEach((day) => {
    currentWeek.push(day);
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  });
  if (currentWeek.length > 0) {
    while (currentWeek.length < 7) currentWeek.push(null);
    weeks.push(currentWeek);
  }

  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  // Determine where to place month labels (at the bottom)
  const monthLabels: { label: string; index: number }[] = [];
  let lastMonth = -1;
  weeks.forEach((week, index) => {
    const firstValidDay = week.find(d => d !== null);
    if (firstValidDay && firstValidDay.month !== lastMonth) {
      monthLabels.push({ label: monthNames[firstValidDay.month], index });
      lastMonth = firstValidDay.month;
    }
  });

  const getColor = (count: number) => {
    if (count === 0) return 'bg-[#2d2d2d]';
    if (count < 3) return 'bg-[#004d3d]';
    if (count < 6) return 'bg-[#006b52]';
    if (count < 9) return 'bg-[#009170]';
    return 'bg-[#00b8a3]';
  };

  const handleMouseEnter = (e: React.MouseEvent, day: { date: string; count: number }) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltipPos({
      x: rect.left + rect.width / 2,
      y: rect.top - 10
    });
    setHoveredDay(day);
  };

  return (
    <div className="w-full relative">
      {/* Tooltip */}
      {hoveredDay && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed z-50 pointer-events-none -translate-x-1/2 -translate-y-full px-3 py-1.5 bg-[#262626] border border-white/10 rounded-lg shadow-xl text-[11px] text-white whitespace-nowrap"
          style={{ left: tooltipPos.x, top: tooltipPos.y }}
        >
          <div className="font-bold mb-0.5">{hoveredDay.count} submissions</div>
          <div className="text-slate-400 text-[10px]">{new Date(hoveredDay.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-[#262626]" />
        </motion.div>
      )}

      {/* Header Stats */}
      <div className="flex flex-wrap gap-8 mb-8 justify-center">
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-2xl font-bold text-white leading-none">{totalSubmissions}</span>
          </div>
          <span className="text-slate-500 text-xs uppercase tracking-wider">Total Submissions</span>
        </div>
        <div className="w-px h-10 bg-white/10 hidden sm:block" />
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-2xl font-bold text-white leading-none">{activeDays}</span>
          </div>
          <span className="text-slate-500 text-xs uppercase tracking-wider">Active Days</span>
        </div>
        <div className="w-px h-10 bg-white/10 hidden sm:block" />
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-2xl font-bold text-white leading-none">{maxStreak}</span>
          </div>
          <span className="text-slate-500 text-xs uppercase tracking-wider">Max Streak</span>
        </div>
      </div>

      <div className="overflow-x-auto pb-4 scrollbar-hide">
        <div className="flex justify-center min-w-full">
          <div className="min-w-max">
            <div className="flex gap-3">
            {/* Day Labels */}
            <div className="flex flex-col gap-[3px] text-[10px] text-slate-500">
              <div className="h-[12px]" /> {/* Sun */}
              <div className="h-[12px] flex items-center">Mon</div>
              <div className="h-[12px]" /> {/* Tue */}
              <div className="h-[12px] flex items-center">Wed</div>
              <div className="h-[12px]" /> {/* Thu */}
              <div className="h-[12px] flex items-center">Fri</div>
              <div className="h-[12px]" /> {/* Sat */}
            </div>

            <div className="flex flex-col">
              {/* Grid */}
              <div className="flex gap-[3px]">
                {weeks.map((week, i) => (
                  <div key={i} className="flex flex-col gap-[3px]">
                    {week.map((day, j) => (
                      <div
                        key={j}
                        className={`w-[12px] h-[12px] rounded-[2px] transition-colors duration-200 ${day ? getColor(day.count) : 'bg-transparent'} ${day ? 'cursor-pointer hover:ring-1 hover:ring-white/30' : ''}`}
                        onMouseEnter={(e) => day && handleMouseEnter(e, day)}
                        onMouseLeave={() => setHoveredDay(null)}
                      />
                    ))}
                  </div>
                ))}
              </div>

              {/* Month Labels (Bottom) */}
              <div className="relative h-4 mt-3 text-[10px] text-slate-500">
                {monthLabels.map((label, i) => (
                  <div 
                    key={i} 
                    className="absolute"
                    style={{ left: `${label.index * 15}px` }}
                  >
                    {label.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Legend */}
          <div className="flex items-center justify-end gap-1.5 mt-2 text-[10px] text-slate-500">
            <span>Less</span>
            <div className="w-[12px] h-[12px] rounded-[2px] bg-[#2d2d2d]" />
            <div className="w-[12px] h-[12px] rounded-[2px] bg-[#004d3d]" />
            <div className="w-[12px] h-[12px] rounded-[2px] bg-[#006b52]" />
            <div className="w-[12px] h-[12px] rounded-[2px] bg-[#009170]" />
            <div className="w-[12px] h-[12px] rounded-[2px] bg-[#00b8a3]" />
            <span>More</span>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function LeetCode() {
  const [data, setData] = useState<LeetCodeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loadingSubmissions, setLoadingSubmissions] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const username = 'yadnyesh2018';

  const [lastFetched, setLastFetched] = useState<string | null>(null);

  const fetchSubmissions = async () => {
    setLoadingSubmissions(true);
    try {
      const response = await fetch(`https://alfa-leetcode-api.onrender.com/${username}/submission?limit=1000`);
      if (response.ok) {
        const result = await response.json();
        const allSubmissions = result.submission || [];
        const acceptedSubmissions = allSubmissions
          .filter((sub: any) => sub.statusDisplay === 'Accepted')
          .sort((a: any, b: any) => parseInt(b.timestamp) - parseInt(a.timestamp));
        setSubmissions(acceptedSubmissions);
      }
    } catch (err) {
      console.error('Failed to fetch submissions:', err);
    } finally {
      setLoadingSubmissions(false);
    }
  };

  const handleShowQuestions = () => {
    setShowModal(true);
    if (submissions.length === 0) {
      fetchSubmissions();
    }
  };

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    
    const apis = [
      `https://leetcode-stats-api.herokuapp.com/${username}`,
      `https://leetcode-api-faisalshohag.vercel.app/${username}`,
      `https://alfa-leetcode-api.onrender.com/${username}/solved`,
      `https://api.allorigins.win/get?url=${encodeURIComponent(`https://leetcode-stats-api.herokuapp.com/${username}`)}`
    ];

    for (const apiUrl of apis) {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) continue;

        let result;
        if (apiUrl.includes('allorigins')) {
          const proxyData = await response.json();
          result = JSON.parse(proxyData.contents);
        } else {
          result = await response.json();
        }

        if (result && (result.status === 'success' || result.totalSolved !== undefined || result.solvedProblem !== undefined || result.totalSolvedProblems !== undefined)) {
          const rawAcceptance = result.acceptanceRate || result.acceptance || result.acceptance_rate || 0;
          let parsedAcceptance = typeof rawAcceptance === 'string' ? parseFloat(rawAcceptance) : rawAcceptance;
          
          if (parsedAcceptance > 0 && parsedAcceptance < 1) {
            parsedAcceptance *= 100;
          }

          let calendar = result.submissionCalendar || result.submission_calendar || {};
          
          if (Object.keys(calendar).length === 0) {
            try {
              const calRes = await fetch(`https://alfa-leetcode-api.onrender.com/${username}/calendar`);
              if (calRes.ok) {
                const calData = await calRes.json();
                calendar = calData.submissionCalendar || {};
              }
            } catch (e) {
              console.warn('Failed to fetch calendar fallback:', e);
            }
          }

          if (typeof calendar === 'string') {
            try { calendar = JSON.parse(calendar); } catch (e) { calendar = {}; }
          }

          let profileDetails: any = {};
          try {
            const profileRes = await fetch(`https://alfa-leetcode-api.onrender.com/${username}`);
            if (profileRes.ok) {
              profileDetails = await profileRes.json();
            }
          } catch (e) {
            console.warn('Failed to fetch profile details:', e);
          }

          let avatarUrl = profileDetails.avatar || result.avatar || result.avatarUrl || "";
          if (avatarUrl && avatarUrl.startsWith('/')) {
            avatarUrl = `https://leetcode.com${avatarUrl}`;
          }

          setData({
            status: 'success',
            message: 'Fetched successfully',
            totalSolved: parseInt(result.totalSolved || result.solvedProblem || result.totalSolvedProblems || 0),
            totalQuestions: parseInt(result.totalQuestions || result.totalProblem || result.totalQuestionsCount || 3300),
            easySolved: parseInt(result.easySolved || result.easyProblem || result.easySolvedCount || 0),
            totalEasy: parseInt(result.totalEasy || result.totalEasyProblem || result.totalEasyCount || 800),
            mediumSolved: parseInt(result.mediumSolved || result.mediumProblem || result.mediumSolvedCount || 0),
            totalMedium: parseInt(result.totalMedium || result.totalMediumProblem || result.totalMediumCount || 1600),
            hardSolved: parseInt(result.hardSolved || result.hardProblem || result.hardSolvedCount || 0),
            totalHard: parseInt(result.totalHard || result.totalHardProblem || result.totalHardCount || 600),
            acceptanceRate: Number(parsedAcceptance.toFixed(1)),
            ranking: parseInt(result.ranking || result.rank || 0),
            contributionPoints: parseInt(result.contributionPoints || result.contribution_points || 0),
            reputation: parseInt(result.reputation || profileDetails.reputation || 0),
            submissionCalendar: calendar,
            avatar: avatarUrl,
            name: profileDetails.name || result.name,
            about: profileDetails.about || result.about,
            country: profileDetails.country || result.country,
            company: profileDetails.company || result.company,
            jobTitle: profileDetails.jobTitle || result.jobTitle,
            skillTags: profileDetails.skillTags || [],
            postViewCount: profileDetails.postViewCount || 0,
            solutionCount: profileDetails.solutionCount || 0
          });
          setLastFetched(new Date().toLocaleTimeString());
          setLoading(false);
          return;
        }
      } catch (err) {
        console.warn(`Failed to fetch from ${apiUrl}:`, err);
        continue;
      }
    }

    setError('The LeetCode APIs are currently unresponsive or blocking the request.');
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [username]);

  if (loading) {
    return (
      <section id="leetcode" className="py-20 flex justify-center items-center">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
          <p className="text-slate-400 animate-pulse">Fetching LeetCode stats...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="leetcode" className="py-20 flex justify-center items-center">
        <div className="text-center p-8 bg-slate-900/50 border border-red-500/20 rounded-3xl max-w-md">
          <p className="text-red-400 mb-4">{error}</p>
          <a
            href={`https://leetcode.com/u/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2 bg-yellow-500 text-slate-950 rounded-xl font-bold hover:bg-yellow-400 transition-all"
          >
            Visit Profile Directly <ExternalLink size={16} />
          </a>
        </div>
      </section>
    );
  }

  if (!data) return null;

  const totalSolved = data.totalSolved;
  const totalQuestions = data.totalQuestions;
  
  const radius = 80;
  const circumference = 2 * Math.PI * radius;
  const arcLength = (circumference * 240) / 360;
  
  const easySolvedRatio = data.easySolved / data.totalQuestions;

  return (
    <section id="leetcode" className="py-16 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            LeetCode Stats
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A deep dive into my problem-solving journey, algorithmic expertise, and consistent coding practice.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-6">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-[#1a1a1a] rounded-[1.5rem] p-5 border border-white/5 shadow-2xl relative overflow-hidden group flex flex-col h-full"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-full blur-2xl -mr-16 -mt-16 transition-colors group-hover:bg-yellow-500/10" />
            
            <div className="relative flex flex-col gap-4 items-center text-center flex-1">
              <div className="relative shrink-0">
                <div className="absolute -inset-1 bg-gradient-to-tr from-yellow-500 via-orange-500 to-yellow-500 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity animate-pulse" />
                <div className="relative p-1 bg-[#1a1a1a] rounded-full">
                  <img 
                    src={data.avatar || `https://ui-avatars.com/api/?name=${username}&background=random`} 
                    alt={data.name || username} 
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-2 border-white/10"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://ui-avatars.com/api/?name=${username}&background=random`;
                    }}
                  />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 bg-[#262626] border border-white/10 rounded-full p-1 shadow-lg">
                  <Trophy size={12} className="text-yellow-500" />
                </div>
              </div>

              <div className="flex-1">
                <div className="flex flex-col items-center gap-0.5 mb-2">
                  <h2 className="text-xl font-bold text-white tracking-tight">
                    {data.name || "Yadnyesh Sawant"}
                  </h2>
                  <span className="text-slate-500 font-mono text-[10px]">@{username}</span>
                </div>
                
                <div className="flex flex-wrap justify-center gap-1 text-[9px] text-slate-400 mb-3">
                  {data.jobTitle && (
                    <span className="flex items-center gap-1 px-1.5 py-0.5 bg-white/5 rounded-full border border-white/5">
                      <Target size={8} className="text-orange-500" /> {data.jobTitle}
                    </span>
                  )}
                  {data.company && (
                    <span className="flex items-center gap-1 px-1.5 py-0.5 bg-white/5 rounded-full border border-white/5">
                      <Code2 size={8} className="text-blue-500" /> {data.company}
                    </span>
                  )}
                </div>

                {data.about && (
                  <div className="relative px-2 mb-3">
                    <p className="text-slate-400 text-[11px] leading-relaxed italic line-clamp-2">
                      <span className="text-yellow-500/50 text-base font-serif absolute -left-0.5 -top-0.5">"</span>
                      {data.about}
                      <span className="text-yellow-500/50 text-base font-serif ml-0.5">"</span>
                    </p>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-2 w-full">
                <div className="bg-white/5 rounded-lg p-2 border border-white/5 hover:bg-white/10 transition-colors">
                  <p className="text-[8px] uppercase tracking-widest text-slate-500 mb-0.5">Global Rank</p>
                  <p className="text-sm font-bold text-white">#{data.ranking.toLocaleString()}</p>
                </div>
                <div className="bg-white/5 rounded-lg p-2 border border-white/5 hover:bg-white/10 transition-colors">
                  <p className="text-[8px] uppercase tracking-widest text-slate-500 mb-0.5">Reputation</p>
                  <p className="text-sm font-bold text-white">{data.reputation.toLocaleString()}</p>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 flex flex-col items-center gap-2">
              {lastFetched && (
                <div className="flex items-center gap-3 text-[8px] text-slate-500">
                  <span className="flex items-center gap-1">
                    <div className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
                    Updated: {lastFetched}
                  </span>
                  <button 
                    onClick={() => fetchData()}
                    className="hover:text-yellow-500 transition-colors flex items-center gap-1 px-1 py-0.5 hover:bg-white/5 rounded"
                  >
                    <Zap size={8} /> Refresh
                  </button>
                </div>
              )}
            </div>
          </motion.div>

          {/* Stats Card (Arc Chart) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-[#1a1a1a] rounded-[1.5rem] p-6 border border-white/5 shadow-2xl h-full flex flex-col relative overflow-hidden group"
          >
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#00b8a3]/5 blur-[80px] rounded-full group-hover:bg-[#00b8a3]/10 transition-colors duration-500" />
            
            <div className="flex-1 flex flex-col justify-center relative z-10">
              <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-center mb-6">
                <div className="xl:col-span-5 flex flex-col items-center justify-center relative">
                  <div className="relative w-44 h-44">
                    <svg className="w-full h-full transform rotate-[150deg]" viewBox="0 0 200 200">
                      <circle
                        cx="100"
                        cy="100"
                        r={radius}
                        fill="none"
                        stroke="#2d2d2d"
                        strokeWidth="12"
                        strokeLinecap="round"
                        strokeDasharray={`${arcLength} ${circumference}`}
                        style={{ transformOrigin: 'center', transform: 'rotate(0deg)' }}
                      />
                      
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>

                      <motion.circle
                        cx="100"
                        cy="100"
                        r={radius}
                        fill="none"
                        stroke="#00b8a3"
                        strokeWidth="12"
                        strokeLinecap="round"
                        filter="url(#glow)"
                        initial={{ strokeDashoffset: arcLength }}
                        whileInView={{ strokeDashoffset: arcLength - (arcLength * (data.totalSolved / data.totalQuestions)) }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "circOut" }}
                        strokeDasharray={`${arcLength} ${circumference}`}
                        style={{ transformOrigin: 'center', transform: 'rotate(0deg)' }}
                      />

                      <circle
                        cx="100"
                        cy="100"
                        r={radius}
                        fill="none"
                        stroke="#00b8a3"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeDasharray={`${arcLength * easySolvedRatio} ${circumference}`}
                        style={{ transformOrigin: 'center', transform: 'rotate(0deg)', opacity: 0.5 }}
                      />
                    </svg>

                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <div className="flex flex-col items-center">
                        <span className="text-3xl font-bold text-white tracking-tighter leading-none">{data.totalSolved}</span>
                        <span className="text-[10px] text-slate-500 font-bold mt-1 uppercase tracking-widest">Solved</span>
                      </div>
                      <div className="mt-2 px-2 py-0.5 rounded-full bg-white/5 border border-white/10">
                        <span className="text-[9px] text-slate-400 font-medium">of {data.totalQuestions}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="xl:col-span-7 flex flex-col gap-4">
                  {[
                    { label: 'Easy', solved: data.easySolved, total: data.totalEasy, color: '#00b8a3', bg: 'bg-[#00b8a3]' },
                    { label: 'Medium', solved: data.mediumSolved, total: data.totalMedium, color: '#ffb800', bg: 'bg-[#ffb800]' },
                    { label: 'Hard', solved: data.hardSolved, total: data.totalHard, color: '#ef4743', bg: 'bg-[#ef4743]' }
                  ].map((item) => (
                    <div key={item.label} className="space-y-1.5">
                      <div className="flex justify-between items-end">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">{item.label}</span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-sm font-bold text-white">{item.solved}</span>
                          <span className="text-slate-600 text-[10px] font-medium">/ {item.total}</span>
                        </div>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(item.solved / item.total) * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className={`h-full ${item.bg} rounded-full shadow-[0_0_8px_rgba(0,0,0,0.5)]`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-auto pt-5 border-t border-white/5">
              {[
                { label: 'Acceptance', value: `${data.acceptanceRate}%` },
                { label: 'Points', value: data.contributionPoints.toLocaleString() },
                { label: 'Solutions', value: data.solutionCount.toLocaleString() },
                { label: 'Views', value: data.postViewCount.toLocaleString() }
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center sm:items-start">
                  <p className="text-slate-500 text-[9px] font-bold uppercase tracking-widest mb-1">{stat.label}</p>
                  <p className="text-xs font-bold text-white tracking-tight">{stat.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Heatmap Section */}
        {data.submissionCalendar && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#1a1a1a] rounded-[1.5rem] p-5 shadow-2xl border border-white/5"
          >
            <div className="flex items-center justify-center gap-2 mb-4"> 
              <BarChart3 className="text-emerald-500" size={16} />
              <h3 className="text-base font-bold text-white">Submission Activity</h3>
            </div>
            <SubmissionHeatmap calendar={data.submissionCalendar} />
          </motion.div>
        )}

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href={`https://leetcode.com/u/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-yellow-500 text-slate-950 rounded-xl font-bold hover:bg-yellow-400 transition-all shadow-lg shadow-yellow-500/10"
          >
            View Full Profile <ExternalLink size={18} />
          </motion.a>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleShowQuestions}
            className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white rounded-xl font-bold hover:bg-white/10 transition-all"
          >
            View Recent Submissions 
          </motion.button>
        </div>

        {/* Solved Questions Modal */}
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-[#1a1a1a] w-full max-w-2xl max-h-[80vh] rounded-[2rem] border border-white/10 shadow-2xl flex flex-col overflow-hidden"
            >
              <div className="p-6 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-yellow-500/10 rounded-lg text-yellow-500">
                    <Code2 size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-white">Accepted Submissions</h3>
                </div>
                <button 
                  onClick={() => setShowModal(false)}
                  className="p-2 hover:bg-white/5 rounded-full text-slate-400 hover:text-white transition-colors"
                >
                  <Zap size={20} className="rotate-45" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
                {loadingSubmissions ? (
                  <div className="flex flex-col items-center justify-center py-12 gap-4">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-yellow-500"></div>
                    <p className="text-slate-400 text-sm">Loading your achievements...</p>
                  </div>
                ) : submissions.length > 0 ? (
                  <div className="grid gap-3">
                    {submissions.map((sub, idx) => {
                      const isAccepted = sub.statusDisplay === 'Accepted';
                      const statusColor = isAccepted ? 'text-emerald-500 bg-emerald-500/10' : 
                                        sub.statusDisplay === 'Wrong Answer' ? 'text-red-500 bg-red-500/10' :
                                        sub.statusDisplay === 'Time Limit Exceeded' ? 'text-orange-500 bg-orange-500/10' :
                                        'text-slate-400 bg-white/5';
                      
                      return (
                        <a
                          key={idx}
                          href={`https://leetcode.com/problems/${sub.titleSlug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 hover:border-white/10 transition-all group"
                        >
                          <div className="flex flex-col gap-1">
                            <span className="text-sm font-bold text-white group-hover:text-yellow-500 transition-colors">
                              {sub.title}
                            </span>
                            <div className="flex items-center gap-3 text-[10px] text-slate-500">
                              <span className="flex items-center gap-1 uppercase tracking-wider">
                                <Zap size={10} className={isAccepted ? "text-emerald-500" : "text-slate-500"} /> {sub.lang}
                              </span>
                              <span>•</span>
                              <span>{new Date(parseInt(sub.timestamp) * 1000).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                            </div>
                          </div>
                          <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${statusColor}`}>
                            {sub.statusDisplay}
                          </div>
                        </a>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-slate-500">No recent submissions found.</p>
                  </div>
                )}
              </div>

              <div className="p-4 bg-white/5 border-t border-white/5 text-center">
                <p className="text-[10px] text-slate-500 uppercase tracking-widest">Showing all accepted submissions</p>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
