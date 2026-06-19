import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Code, Trophy, Zap, BookOpen } from "lucide-react";

const experiences = [
  {
    icon: Zap,
    type: "Current",
    title: "Preparing for Software Engineering Roles",
    company: "Self-Directed",
    period: "2024 — Present",
    description: "Mastering data structures and algorithms through daily LeetCode practice (300+ problems solved). Deep-diving into system design concepts — load balancers, caches, message queues, and distributed systems. Building a strong foundation for senior SE roles.",
    tech: ["LeetCode", "System Design", "DSA", "Competitive Programming"],
    color: "text-primary",
    border: "border-primary/30",
    bg: "from-primary/10 to-transparent",
  },
  {
    icon: Briefcase,
    type: "Freelance",
    title: "Backend Developer",
    company: "Freelance Projects",
    period: "2024 — 2025",
    description: "Architected and delivered backend solutions for multiple clients. Built secure REST APIs with authentication and role-based access control. Deployed applications using Docker, managed databases, and integrated third-party services including payment gateways and OAuth providers.",
    tech: ["NestJS", "Node.js", "PostgreSQL", "Docker", "JWT"],
    color: "text-secondary",
    border: "border-secondary/30",
    bg: "from-secondary/10 to-transparent",
  },
  {
    icon: Trophy,
    type: "Hackathon",
    title: "Smart India Hackathon (SIH)",
    company: "National-Level Participation",
    period: "2025",
    description: "Built the Ocean Hazard Reporting Platform at Smart India Hackathon. Designed and implemented the entire backend infrastructure connecting AI detection models with geospatial mapping interfaces. Worked under intense time pressure delivering a full-stack solution.",
    tech: ["Node.js", "MongoDB", "Express", "Python", "Maps API"],
    color: "text-accent",
    border: "border-accent/30",
    bg: "from-accent/10 to-transparent",
  },
  {
    icon: Code,
    type: "Development",
    title: "Backend Architecture Deep Dive",
    company: "Personal Projects",
    period: "2024 — ...",
    description: "Transitioned from frontend curiosity to backend mastery. Built the Finance Tracker Backend, School Management API, Movie Booking System, and Email Service System. Each project taught deeper lessons in API design, database modeling, and distributed system patterns.",
    tech: ["Node.js", "Express", "MongoDB", "MySQL", "RabbitMQ", "Redis"],
    color: "text-yellow-400",
    border: "border-yellow-400/30",
    bg: "from-yellow-400/10 to-transparent",
  },
  {
    icon: BookOpen,
    type: "Learning",
    title: "Programming Journey Begins",
    company: "Academic & Self-Learning",
    period: "2024 — 2025",
    description: "Wrote first lines of code. Discovered an obsession with how software systems work internally. Explored algorithms, data structures, web fundamentals, and fell in love with backend architecture — the invisible engine behind every great product.",
    tech: ["JavaScript", "TypeScript", "Python", "HTML/CSS", "Git"],
    color: "text-muted-foreground",
    border: "border-white/10",
    bg: "from-muted/20 to-transparent",
  },
];

function ExperienceCard({ exp, index }: { exp: typeof experiences[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="relative"
    >
      {/* Timeline node */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-8 z-10">
        <div className={`w-10 h-10 rounded-full bg-background border-2 ${exp.border} flex items-center justify-center shadow-lg`}>
          <exp.icon size={16} className={exp.color} />
        </div>
      </div>

      <div className={`md:w-5/12 ${index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"}`}>
        <div
          className={`glass-card rounded-2xl p-6 border ${exp.border} bg-gradient-to-br ${exp.bg} hover:shadow-lg transition-all`}
          data-testid={`experience-card-${index}`}
        >
          <div className="flex items-start justify-between mb-3">
            <div>
              <span className={`text-xs font-mono font-bold tracking-wider uppercase ${exp.color}`}>{exp.type}</span>
              <h3 className="text-lg font-bold mt-1">{exp.title}</h3>
              <p className="text-muted-foreground text-sm">{exp.company}</p>
            </div>
            <span className="text-xs text-muted-foreground font-mono bg-muted/30 px-2 py-1 rounded-md whitespace-nowrap ml-2">{exp.period}</span>
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">{exp.description}</p>
          <div className="flex flex-wrap gap-1.5">
            {exp.tech.map((t) => (
              <span key={t} className={`px-2 py-0.5 rounded-md border ${exp.border} text-xs font-mono ${exp.color} bg-transparent`}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <div className="container mx-auto px-6 md:px-12 py-16 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">MY PATH</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Experience</span>
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Every project, hackathon, and late-night debugging session that made me who I am today.
        </p>
      </motion.div>

      {/* Timeline */}
      <div className="relative">
        {/* Center line */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/30 to-transparent" />

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.title} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
