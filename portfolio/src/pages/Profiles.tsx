import { motion } from "framer-motion";
import { SiGithub, SiLeetcode, SiHackerrank, SiCodechef } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { ExternalLink, Star, GitFork, Code2, Award, TrendingUp } from "lucide-react";

const profiles = [
  {
    platform: "GitHub",
    icon: SiGithub,
    handle: "@ankush2311025",
    url: "https://github.com/ankush2311025",
    description: "Open source projects, backend systems, and daily commits.",
    stats: [
      { label: "Repositories", value: "4+", icon: GitFork },
      { label: "Contributions", value: "300+", icon: Star },
      { label: "Stars Earned", value: "3+", icon: TrendingUp },
    ],
    gradient: "from-slate-700/40 to-slate-900/40",
    border: "border-slate-500/30",
    iconColor: "text-white",
    badge: "Most Active",
  },
  {
    platform: "LeetCode",
    icon: SiLeetcode,
    handle: "@ankush0908",
    url: "https://leetcode.com/u/Ankush0908/",
    description: "DSA practice, algorithms, and competitive problem solving.",
    stats: [
      { label: "Problems Solved", value: "150+", icon: Code2 },
      { label: "Contest Rating", value: "1000+", icon: TrendingUp },
      { label: "Global Rank", value: "Top 30%", icon: Award },
    ],
    gradient: "from-yellow-700/20 to-orange-900/20",
    border: "border-yellow-500/30",
    iconColor: "text-yellow-400",
    badge: "Active",
  },
  {
    platform: "LinkedIn",
    icon: FaLinkedin,
    handle: "Ankush Sharma",
    url: "https://www.linkedin.com/in/ankush-sharma-49aa202a1/",
    description: "Professional network, career updates, and technical articles.",
    stats: [
      { label: "Connections", value: "200+", icon: Star },
      { label: "Posts", value: "0", icon: TrendingUp },
      { label: "Endorsements", value: "1+", icon: Award },
    ],
    gradient: "from-blue-700/20 to-blue-900/20",
    border: "border-blue-500/30",
    iconColor: "text-blue-400",
    badge: "Professional",
  },
  {
    platform: "HackerRank",
    icon: SiHackerrank,
    handle: "@ankush-sharma",
    url: "#",
    description: "Certifications, skill tracks, and structured challenges.",
    stats: [
      { label: "Badges Earned", value: "8", icon: Award },
      { label: "Stars", value: "1 Star", icon: Star },
      { label: "Problems", value: "100+", icon: Code2 },
    ],
    gradient: "from-green-700/20 to-emerald-900/20",
    border: "border-green-500/30",
    iconColor: "text-green-400",
    badge: "Certified",
  },
  {
    platform: "CodeChef",
    icon: SiCodechef,
    handle: "@ank24",
    url: "https://www.codechef.com/users/ank24",
    description: "Long contests, short contests, and improving algorithmic thinking.",
    stats: [
      { label: "Rating", value: "1000+", icon: TrendingUp },
      { label: "Stars", value: "1 Star", icon: Star },
      { label: "Contests", value: "3+", icon: Award },
    ],
    gradient: "from-amber-700/20 to-yellow-900/20",
    border: "border-amber-500/30",
    iconColor: "text-amber-400",
    badge: "Competitive",
  },
];

export default function Profiles() {
  return (
    <div className="container mx-auto px-6 md:px-12 py-16 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">FIND ME ONLINE</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Coding <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Profiles</span>
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Where I practice, compete, connect, and grow as a developer every single day.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {profiles.map((p, i) => (
          <motion.div
            key={p.platform}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -5 }}
            className={`glass-card rounded-2xl p-6 border ${p.border} bg-gradient-to-br ${p.gradient} transition-all group relative overflow-hidden`}
            data-testid={`profile-card-${p.platform}`}
          >
            <div className="absolute top-3 right-3 px-2 py-0.5 bg-white/5 border border-white/10 rounded-full text-xs text-muted-foreground">
              {p.badge}
            </div>

            <div className="flex items-start gap-4 mb-5">
              <div className={`text-4xl ${p.iconColor} flex-shrink-0 group-hover:scale-110 transition-transform`}>
                <p.icon />
              </div>
              <div>
                <h3 className="text-xl font-bold">{p.platform}</h3>
                <p className="text-muted-foreground text-sm font-mono">{p.handle}</p>
              </div>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed mb-6">{p.description}</p>

            <div className="grid grid-cols-3 gap-2 mb-6">
              {p.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-bold font-mono text-sm text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>

            <a
              href={p.url}
              data-testid={`visit-${p.platform}`}
              className={`flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border ${p.border} text-sm font-medium transition-all hover:bg-white/5 ${p.iconColor}`}
            >
              Visit Profile <ExternalLink size={14} />
            </a>
          </motion.div>
        ))}
      </div>

      {/* Achievement Banner */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-16 glass-card rounded-2xl p-8 border border-white/5 text-center"
      >
        <h2 className="text-2xl font-bold mb-3">Open to Opportunities</h2>
        <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
          Actively seeking backend engineering roles. Let's build something great together.
        </p>
        <a
          href="/contact"
          data-testid="cta-contact"
          className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(0,255,255,0.3)]"
        >
          Let's Connect
        </a>
      </motion.div>
    </div>
  );
}
