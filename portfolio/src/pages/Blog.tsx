import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";

const posts = [
  {
    id: 1,
    title: "Building Fault-Tolerant Queued Email Systems with Node.js",
    excerpt: "A deep dive into designing email delivery pipelines that survive crashes, network failures, and database outages using RabbitMQ and Redis.",
    tag: "Node.js",
    date: "May 15, 2025",
    readTime: "8 min read",
    gradient: "from-cyan-500/20 to-blue-500/20",
    border: "border-cyan-500/20",
  },
  {
    id: 2,
    title: "JWT vs Session Tokens: What Backend Developers Get Wrong",
    excerpt: "The tradeoffs between stateless JWT tokens and server-side sessions, when each makes sense, and the security pitfalls developers walk into every day.",
    tag: "Backend",
    date: "Apr 22, 2025",
    readTime: "6 min read",
    gradient: "from-violet-500/20 to-purple-500/20",
    border: "border-violet-500/20",
  },
  {
    id: 3,
    title: "NestJS Dependency Injection: A Mental Model That Actually Sticks",
    excerpt: "Instead of memorizing decorators, build an intuition for why NestJS's DI container exists and how it shapes the entire architecture of a NestJS app.",
    tag: "NestJS",
    date: "Apr 5, 2025",
    readTime: "10 min read",
    gradient: "from-red-500/20 to-orange-500/20",
    border: "border-red-500/20",
  },
  {
    id: 4,
    title: "System Design: How Uber Handles 1 Million Concurrent Riders",
    excerpt: "Breaking down the architecture behind ride-hailing at massive scale — from geospatial matching algorithms to real-time driver location updates.",
    tag: "System Design",
    date: "Mar 18, 2025",
    readTime: "15 min read",
    gradient: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/20",
  },
  {
    id: 5,
    title: "Docker in Production: Lessons From Painful Mistakes",
    excerpt: "Real lessons from containerizing production Node.js apps — why your Dockerfile matters, layer caching gotchas, and the secrets flag you're probably not using.",
    tag: "Docker",
    date: "Mar 1, 2025",
    readTime: "7 min read",
    gradient: "from-blue-500/20 to-indigo-500/20",
    border: "border-blue-500/20",
  },
  {
    id: 6,
    title: "PostgreSQL Index Strategies Every Backend Developer Should Know",
    excerpt: "Partial indexes, composite indexes, BRIN vs GIN — the query optimization techniques that turn 5-second database queries into sub-10ms responses.",
    tag: "Backend",
    date: "Feb 14, 2025",
    readTime: "9 min read",
    gradient: "from-pink-500/20 to-rose-500/20",
    border: "border-pink-500/20",
  },
];

const tags = ["All", "Node.js", "Backend", "NestJS", "System Design", "Docker"];

const tagColors: Record<string, string> = {
  "Node.js": "text-emerald-400",
  "Backend": "text-cyan-400",
  "NestJS": "text-red-400",
  "System Design": "text-violet-400",
  "Docker": "text-blue-400",
};

export default function Blog() {
  const [activeTag, setActiveTag] = useState("All");
  const filtered = activeTag === "All" ? posts : posts.filter((p) => p.tag === activeTag);

  return (
    <div className="container mx-auto px-6 md:px-12 py-16 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">THOUGHTS & LEARNINGS</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Blog</span>
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Technical articles on backend development, system design, and the hard-won lessons from building real systems.
        </p>
      </motion.div>

      {/* Tag Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {tags.map((tag) => (
          <button
            key={tag}
            data-testid={`blog-filter-${tag}`}
            onClick={() => setActiveTag(tag)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeTag === tag
                ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(0,255,255,0.3)]"
                : "bg-card/60 border border-white/10 text-muted-foreground hover:border-primary/30 hover:text-primary"
            }`}
          >
            {tag !== "All" && <Tag size={12} />}
            {tag}
          </button>
        ))}
      </div>

      {/* Posts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((post, i) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -5 }}
            className={`glass-card rounded-2xl p-6 border ${post.border} bg-gradient-to-br ${post.gradient} transition-all cursor-pointer group`}
            data-testid={`blog-post-${post.id}`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className={`text-xs font-mono font-bold uppercase tracking-wider ${tagColors[post.tag] || "text-primary"}`}>
                {post.tag}
              </span>
            </div>
            <h3 className="font-bold text-lg leading-snug mb-3 group-hover:text-primary transition-colors line-clamp-2">
              {post.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5 line-clamp-3">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Calendar size={11} /> {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={11} /> {post.readTime}
                </span>
              </div>
              <span className="text-primary group-hover:translate-x-1 transition-transform">
                <ArrowRight size={16} />
              </span>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Newsletter CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-16 glass-card rounded-2xl p-10 border border-white/5 text-center"
      >
        <h2 className="text-2xl font-bold mb-3">More articles coming soon</h2>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">
          I write about backend systems, system design patterns, and the lessons learned building real production software.
        </p>
        <a
          href="/contact"
          data-testid="blog-contact-cta"
          className="inline-flex items-center gap-2 px-8 py-3 border border-primary/30 text-primary rounded-xl hover:bg-primary/10 transition-all font-medium"
        >
          Suggest a Topic <ArrowRight size={16} />
        </a>
      </motion.div>
    </div>
  );
}
