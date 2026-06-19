import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skills } from "@/data/skills";

function SkillBar({ name, level, icon: Icon, index }: { name: string; level: number; icon: React.ComponentType<{ size?: number; className?: string }>; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Icon size={16} className="text-primary" />
          <span className="text-sm font-medium">{name}</span>
        </div>
        <span className="text-xs font-mono text-primary">{level}%</span>
      </div>
      <div className="h-1.5 bg-muted/50 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, delay: index * 0.08, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-primary to-secondary shadow-[0_0_8px_rgba(0,255,255,0.4)]"
        />
      </div>
    </motion.div>
  );
}

const categoryColors: Record<string, string> = {
  Languages: "from-primary to-cyan-400",
  Backend: "from-secondary to-purple-400",
  Frontend: "from-accent to-emerald-400",
  Databases: "from-yellow-400 to-orange-400",
  DevOps: "from-pink-400 to-red-400",
  Tools: "from-blue-400 to-indigo-400",
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", ...skills.map((s) => s.category)];
  const filtered = activeCategory === "All" ? skills : skills.filter((s) => s.category === activeCategory);

  return (
    <div className="container mx-auto px-6 md:px-12 py-16 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">WHAT I KNOW</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Skills</span>
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Technologies I've built with, broken, debugged, and ultimately mastered.
        </p>
      </motion.div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            data-testid={`filter-${cat}`}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === cat
                ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(0,255,255,0.3)]"
                : "bg-card/60 border border-white/10 text-muted-foreground hover:border-primary/30 hover:text-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skill Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((category, ci) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: ci * 0.08 }}
            className="glass-card rounded-2xl p-6 border border-white/5 hover:border-primary/20 transition-all group"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-2 h-8 rounded-full bg-gradient-to-b ${categoryColors[category.category] || "from-primary to-secondary"}`} />
              <h3 className="text-lg font-bold">{category.category}</h3>
            </div>
            <div className="space-y-4">
              {category.items.map((skill, si) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  icon={skill.icon}
                  index={si}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Radar Summary */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-16 glass-card rounded-2xl p-8 border border-white/5 text-center"
      >
        <h2 className="text-2xl font-bold mb-8">Core Competency Overview</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
          {skills.map((cat, i) => {
            const avg = Math.round(cat.items.reduce((a, b) => a + b.level, 0) / cat.items.length);
            return (
              <motion.div
                key={cat.category}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex flex-col items-center gap-3"
              >
                <div className="relative w-16 h-16">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                    <circle cx="18" cy="18" r="15.9" fill="none" stroke="hsl(var(--muted)/0.3)" strokeWidth="2" />
                    <motion.circle
                      cx="18" cy="18" r="15.9"
                      fill="none"
                      stroke="url(#grad)"
                      strokeWidth="2"
                      strokeDasharray={`${avg} ${100 - avg}`}
                      strokeLinecap="round"
                      initial={{ strokeDasharray: "0 100" }}
                      whileInView={{ strokeDasharray: `${avg} ${100 - avg}` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: i * 0.1 }}
                    />
                    <defs>
                      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="hsl(var(--primary))" />
                        <stop offset="100%" stopColor="hsl(var(--secondary))" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-mono font-bold text-primary">{avg}%</span>
                </div>
                <span className="text-xs text-muted-foreground text-center">{cat.category}</span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
