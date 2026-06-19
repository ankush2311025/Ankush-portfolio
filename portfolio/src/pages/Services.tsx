import { motion } from "framer-motion";
import { Server, Globe, Plug, Database, Cloud, Check } from "lucide-react";

const services = [
  {
    icon: Server,
    title: "Backend Development",
    description: "Robust, scalable backend systems built to handle real production load.",
    items: ["RESTful API Design", "JWT Authentication", "Database Architecture", "Microservices"],
    gradient: "from-cyan-500/20 to-blue-500/20",
    border: "border-cyan-500/20",
  },
  {
    icon: Globe,
    title: "Full Stack Development",
    description: "End-to-end web applications with polished UI and battle-tested backend.",
    items: ["Responsive Web Apps", "Admin Dashboards", "SaaS Products", "Real-time Features"],
    gradient: "from-violet-500/20 to-purple-500/20",
    border: "border-violet-500/20",
  },
  {
    icon: Plug,
    title: "API Integration",
    description: "Seamless third-party integrations that just work, every time.",
    items: ["Payment Gateways", "Maps & Geolocation", "OAuth 2.0", "Webhooks & Events"],
    gradient: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/20",
  },
  {
    icon: Database,
    title: "Database Architecture",
    description: "Schema design, query optimization, and data modeling that scales.",
    items: ["MongoDB Design", "MySQL / PostgreSQL", "Indexing Strategy", "Query Optimization"],
    gradient: "from-amber-500/20 to-orange-500/20",
    border: "border-amber-500/20",
  },
  {
    icon: Cloud,
    title: "Deployment & DevOps",
    description: "From localhost to production — containerized, automated, and monitored.",
    items: ["Docker Containers", "CI/CD Pipelines", "Cloud Deployment", "GitHub Actions"],
    gradient: "from-pink-500/20 to-rose-500/20",
    border: "border-pink-500/20",
  },
];

const plans = [
  {
    name: "Starter",
    price: "$499",
    period: "project",
    description: "Perfect for small projects and MVPs.",
    features: ["REST API (up to 10 endpoints)", "Basic Authentication", "Single Database", "Code Documentation", "2 Revision Rounds", "Email Support"],
    highlighted: false,
    cta: "Get Started",
  },
  {
    name: "Professional",
    price: "$1,299",
    period: "project",
    description: "For startups and growing products.",
    features: ["REST API (unlimited endpoints)", "JWT + RBAC Auth", "Multi-DB Architecture", "API Documentation", "Docker Setup", "Unlimited Revisions", "Priority Support", "Performance Optimization"],
    highlighted: true,
    cta: "Most Popular",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "engagement",
    description: "Full-scale systems for serious teams.",
    features: ["Full System Architecture", "Microservices Design", "CI/CD Automation", "Monitoring & Alerting", "Security Auditing", "SLA Agreement", "Dedicated Support", "Monthly Check-ins"],
    highlighted: false,
    cta: "Contact Me",
  },
];

export default function Services() {
  return (
    <div className="container mx-auto px-6 md:px-12 py-16 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">WHAT I OFFER</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Services</span>
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Backend engineering, full-stack development, and infrastructure — built to last.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            whileHover={{ y: -5 }}
            className={`glass-card rounded-2xl p-6 border ${s.border} hover:shadow-[0_0_30px_rgba(0,255,255,0.05)] transition-all`}
            data-testid={`service-card-${i}`}
          >
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center mb-5 border ${s.border}`}>
              <s.icon size={22} className="text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">{s.title}</h3>
            <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{s.description}</p>
            <ul className="space-y-2">
              {s.items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check size={14} className="text-primary flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Pricing */}
      <div>
        <div className="text-center mb-12">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">INVESTMENT</p>
          <h2 className="text-3xl md:text-4xl font-bold">Pricing Plans</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 border transition-all ${
                plan.highlighted
                  ? "bg-gradient-to-b from-primary/10 to-card border-primary/40 shadow-[0_0_40px_rgba(0,255,255,0.1)]"
                  : "glass-card border-white/5"
              }`}
              data-testid={`plan-card-${plan.name}`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                  RECOMMENDED
                </div>
              )}
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mb-5">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground text-sm ml-2">/ {plan.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check size={15} className={plan.highlighted ? "text-primary mt-0.5" : "text-muted-foreground mt-0.5"} />
                    <span className={plan.highlighted ? "text-foreground" : "text-muted-foreground"}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/contact"
                data-testid={`cta-${plan.name}`}
                className={`block text-center py-3 rounded-xl font-semibold text-sm transition-all ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_rgba(0,255,255,0.3)]"
                    : "border border-white/10 hover:border-primary/30 hover:text-primary"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
