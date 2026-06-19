import { motion } from "framer-motion";
import { Download, Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const resumeSections = {
  education: [
    {
      institution: "AKGEC, Ghaziabad",
      degree: "Bachelor of Technology — Computer Science & Information Technology",
      period: "2023 — 2027",
      details: "Relevant coursework: Data Structures & Algorithms, Database Management Systems, Computer Networks, Operating Systems, Software Engineering",
    },
  ],
  experience: [
    {
      title: "Backend Developer",
      company: "Pesonal Projects & Freelancer",
      period: "2023 — Present",
      points: [
        "Architected and delivered RESTful APIs using NestJS and Node.js for multiple client projects",
        "Implemented JWT-based authentication and RBAC for secure, role-controlled access",
        "Deployed containerized applications using Docker with CI/CD automation via GitHub Actions",
        "Designed and optimized PostgreSQL and MongoDB schemas for high-throughput workloads",
      ],
    },
    {
      title: "Backend Engineer",
      company: "Smart India Hackathon (SIH)",
      period: "2025",
      points: [
        "Built Ocean Hazard Reporting Platform backend during national hackathon",
        "Integrated AI detection models with RESTful APIs serving interactive geospatial maps",
        "Implemented real-time alerting and social analytics pipeline under 48-hour constraint",
      ],
    },
  ],
  projects: [
    { name: "Finance Tracker Backend", tech: "NestJS • PostgreSQL • JWT • RBAC" },
    { name: "Ocean Hazard Reporting Platform", tech: "Node.js • MongoDB • Python • Maps API" },
    { name: "School Management API", tech: "Node.js • MySQL • Geolocation • Redis" },
    { name: "Movie Booking System", tech: "React • Node.js • MongoDB • Google OAuth" },
    { name: "Email Service System", tech: "Node.js • RabbitMQ • Redis • SendGrid" },
    { name: "Flight Booking", tech: "Node.js • MySql • Redis " },
  ],
  skills: {
    Languages: "JavaScript, TypeScript, Python, SQL",
    Backend: "Node.js, Express.js, NestJS, REST APIs, JWT, RBAC",
    Frontend: "React.js, Next.js, Tailwind CSS",
    Databases: "MongoDB, MySQL, PostgreSQL",
    DevOps: "Docker, Kubernetes, CI/CD, GitHub Actions",
    Tools: "Git, GitHub, Postman, VS Code",
  },
};

export default function Resume() {
  return (
    <div className="container mx-auto px-6 md:px-12 py-16 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-10"
      >
        <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">CURRICULUM VITAE</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Resume</span>
        </h1>
        <motion.a
          href="#"
          data-testid="download-resume"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(0,255,255,0.3)]"
        >
          <Download size={18} /> Download Resume PDF
        </motion.a>
      </motion.div>

      {/* Resume Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="glass-card rounded-2xl border border-white/10 overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-primary/20 via-secondary/10 to-transparent p-8 border-b border-white/5">
          <h2 className="text-3xl font-black mb-1">Ankush Sharma</h2>
          <p className="text-primary font-mono text-sm mb-4">Backend Developer | Software Engineer | Problem Solver</p>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <a href="mailto:ankush.sharma@email.com" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Mail size={14} /> ankson1010@gmail.com
            </a>
            <span className="flex items-center gap-1.5">
              <Phone size={14} /> +91 8882294518
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={14} /> India
            </span>
            <a href="#" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Github size={14} /> github.com/ankush2311025
            </a>
            <a href="#" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Linkedin size={14} /> linkedin.com/in/ankush-sharma-49aa202a1/
            </a>
          </div>
        </div>

        <div className="p-8 space-y-10">
          {/* Skills */}
          <section>
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-primary mb-5 flex items-center gap-2">
              <span className="w-6 h-px bg-primary inline-block" /> Technical Skills
            </h3>
            <div className="grid md:grid-cols-2 gap-2">
              {Object.entries(resumeSections.skills).map(([cat, val]) => (
                <div key={cat} className="flex gap-2 text-sm">
                  <span className="font-semibold text-foreground/80 min-w-[90px]">{cat}:</span>
                  <span className="text-muted-foreground">{val}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section>
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-primary mb-5 flex items-center gap-2">
              <span className="w-6 h-px bg-primary inline-block" /> Experience
            </h3>
            <div className="space-y-6">
              {resumeSections.experience.map((exp) => (
                <div key={exp.title}>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-bold">{exp.title}</h4>
                      <p className="text-muted-foreground text-sm">{exp.company}</p>
                    </div>
                    <span className="text-xs font-mono text-muted-foreground bg-muted/20 px-2 py-0.5 rounded">{exp.period}</span>
                  </div>
                  <ul className="space-y-1.5 ml-4">
                    {exp.points.map((pt) => (
                      <li key={pt} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1 flex-shrink-0">▹</span> {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section>
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-primary mb-5 flex items-center gap-2">
              <span className="w-6 h-px bg-primary inline-block" /> Projects
            </h3>
            <div className="space-y-2">
              {resumeSections.projects.map((p) => (
                <div key={p.name} className="flex items-start gap-3 text-sm">
                  <span className="text-primary mt-0.5 flex-shrink-0">▹</span>
                  <div>
                    <span className="font-semibold">{p.name}</span>
                    <span className="text-muted-foreground font-mono text-xs ml-2">({p.tech})</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-primary mb-5 flex items-center gap-2">
              <span className="w-6 h-px bg-primary inline-block" /> Education
            </h3>
            {resumeSections.education.map((edu) => (
              <div key={edu.institution}>
                <div className="flex items-start justify-between mb-1">
                  <div>
                    <h4 className="font-bold">{edu.degree}</h4>
                    <p className="text-muted-foreground text-sm">{edu.institution}</p>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">{edu.period}</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{edu.details}</p>
              </div>
            ))}
          </section>
        </div>
      </motion.div>
    </div>
  );
}
