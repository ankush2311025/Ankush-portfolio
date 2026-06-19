import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { timeline } from "@/data/timeline";
import { useCountUp } from "@/hooks/useCountUp";
import { Code, Target, Rocket, Zap } from "lucide-react";

const stats = [
  { label: "Projects Completed", value: 20, suffix: "+" },
  { label: "DSA Problems Solved", value: 200, suffix: "+" },
  { label: "Technologies Learned", value: 20, suffix: "+" },
  { label: "GitHub Contributions", value: 300, suffix: "+" },
];

function StatCard({ label, value, suffix }: { label: string; value: number; suffix: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const count = useCountUp(value, 2000, true, isInView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="glass-card rounded-xl p-6 text-center group hover:border-primary/30 transition-all"
    >
      <div className="text-4xl font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2">
        {count}{suffix}
      </div>
      <div className="text-muted-foreground text-sm">{label}</div>
    </motion.div>
  );
}

export default function About() {
  const pillars = [
    { icon: Code, title: "Clean Architecture", desc: "I believe good code is a conversation with future developers. I design systems that are intuitive, maintainable, and honest about what they do." },
    { icon: Target, title: "Precision Engineering", desc: "Every endpoint is a contract. I obsess over edge cases, error handling, and making sure systems behave predictably under every condition." },
    { icon: Rocket, title: "Scalability First", desc: "I build with growth in mind — caching, queues, database indexing, horizontal scaling. The architecture should outlive the MVP." },
    { icon: Zap, title: "Continuous Growth", desc: "The tech landscape never stops evolving and neither do I. DSA daily, system design weekly, building always." },
  ];

  return (
    <div className="container mx-auto px-6 md:px-12 py-16 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">WHO I AM</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Story</span> So Far
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
          A backend developer fueled by curiosity and the belief that elegant systems can make the world run a little smoother.
        </p>
      </motion.div>

      {/* Bio Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="glass-card rounded-2xl p-8 md:p-12 mb-16 border border-white/5"
      >
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Hi, I'm Ankush Sharma</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a backend developer and software engineer who fell in love with the invisible architecture that powers the internet — the APIs, the databases, the queues, the auth flows that nobody sees but everybody depends on.
              </p>
              <p>
                My journey started with curiosity about how things work under the hood. That curiosity turned into a craft: building systems that are reliable, performant, and built for the real world.
              </p>
              <p>
                Today, I architect RESTful APIs with NestJS and Node.js, design relational and document databases, implement security patterns like JWT and RBAC, and containerize deployments with Docker. I'm preparing for senior software engineering roles where I can push the boundaries of what backend systems can do.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-background/50 border border-white/5 rounded-xl p-4 hover:border-primary/20 transition-all group"
              >
                <p.icon className="text-primary mb-2 group-hover:scale-110 transition-transform" size={20} />
                <h3 className="font-semibold text-sm mb-1">{p.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      {/* Timeline */}
      <div>
        <div className="text-center mb-12">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">MY JOURNEY</p>
          <h2 className="text-3xl md:text-4xl font-bold">The Timeline</h2>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/30 to-transparent hidden md:block" />
          <div className="space-y-8">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex items-center gap-6 md:gap-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="glass-card rounded-xl p-6 border border-white/5 hover:border-primary/20 transition-all">
                    <span className="text-primary font-mono text-xs font-bold tracking-wider uppercase">{item.year}</span>
                    <h3 className="text-lg font-bold mt-1 mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-2 border-background shadow-[0_0_12px_rgba(0,255,255,0.6)] z-10" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
