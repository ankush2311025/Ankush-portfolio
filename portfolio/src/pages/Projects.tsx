import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import { Github, ExternalLink, X, Search } from "lucide-react";

const allTechs = Array.from(new Set(projects.flatMap((p) => p.techStack)));

const projectColors: Record<string, string> = {
  "finance-tracker": "from-cyan-500/20 to-blue-500/20",
  "ocean-hazard": "from-emerald-500/20 to-teal-500/20",
  "school-api": "from-violet-500/20 to-purple-500/20",
  "movie-booking": "from-pink-500/20 to-rose-500/20",
  "email-service": "from-orange-500/20 to-amber-500/20",
};

type Project = typeof projects[0];

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 20 }}
        className="glass-card rounded-2xl p-8 max-w-lg w-full border border-white/10 relative"
        onClick={(e) => e.stopPropagation()}
        data-testid="project-modal"
      >
        <button
          data-testid="modal-close"
          onClick={onClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-white transition-colors"
        >
          <X size={20} />
        </button>
        <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${projectColors[project.id] || "from-primary to-secondary"} mb-6`} />
        <h2 className="text-2xl font-bold mb-3">{project.title}</h2>
        <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Key Features</h3>
          <ul className="space-y-2">
            {project.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="text-primary mt-0.5">▹</span> {f}
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((t) => (
              <span key={t} className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono">
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="flex gap-3">
          <a
            href={project.githubUrl}
            data-testid="modal-github"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-white/10 text-sm hover:border-primary/30 transition-all"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href={project.liveUrl}
            data-testid="modal-live"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/30 text-primary text-sm hover:bg-primary/20 transition-all"
          >
            <ExternalLink size={16} /> Live Demo
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [search, setSearch] = useState("");
  const [activeTech, setActiveTech] = useState("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = projects.filter((p) => {
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) || p.description.toLowerCase().includes(search.toLowerCase());
    const matchTech = activeTech === "All" || p.techStack.includes(activeTech);
    return matchSearch && matchTech;
  });

  return (
    <div className="container mx-auto px-6 md:px-12 py-16 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">WHAT I'VE BUILT</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Projects</span>
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Real systems built for real problems. Each one a chapter in learning what scalability actually means.
        </p>
      </motion.div>

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-10">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
          <input
            data-testid="search-projects"
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search projects..."
            className="w-full pl-9 pr-4 py-2.5 bg-card/60 border border-white/10 rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-10">
        {["All", ...allTechs].map((tech) => (
          <button
            key={tech}
            data-testid={`tech-filter-${tech}`}
            onClick={() => setActiveTech(tech)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              activeTech === tech
                ? "bg-primary text-primary-foreground shadow-[0_0_12px_rgba(0,255,255,0.3)]"
                : "bg-card/60 border border-white/10 text-muted-foreground hover:border-primary/30 hover:text-primary"
            }`}
          >
            {tech}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filtered.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -5 }}
              className="glass-card rounded-2xl p-6 border border-white/5 hover:border-primary/20 transition-all cursor-pointer group"
              onClick={() => setSelected(project)}
              data-testid={`project-card-${project.id}`}
            >
              <div className={`h-32 rounded-xl mb-5 bg-gradient-to-br ${projectColors[project.id] || "from-primary/10 to-secondary/10"} flex items-center justify-center border border-white/5`}>
                <span className="font-mono text-3xl font-black text-white/20 group-hover:text-white/30 transition-colors select-none">
                  {project.title.split(" ").map(w => w[0]).join("").slice(0, 3)}
                </span>
              </div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.techStack.slice(0, 3).map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-mono">{t}</span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="px-2 py-0.5 rounded-full bg-muted/30 text-muted-foreground text-xs">+{project.techStack.length - 3}</span>
                )}
              </div>
              <div className="flex gap-3">
                <a
                  href={project.githubUrl}
                  data-testid={`github-${project.id}`}
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={14} /> Code
                </a>
                <a
                  href={project.liveUrl}
                  data-testid={`live-${project.id}`}
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-accent transition-colors"
                >
                  <ExternalLink size={14} /> Demo
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <div className="text-center py-20 text-muted-foreground">
          <p className="text-lg">No projects match your search.</p>
        </div>
      )}

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </div>
  );
}
