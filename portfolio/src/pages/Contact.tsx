import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiGithub, SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.subject.trim()) e.subject = "Subject is required";
    if (!form.message.trim()) e.message = "Message is required";
    else if (form.message.trim().length < 20) e.message = "Message must be at least 200 characters";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "ankson1010@gamil.com", href: "mailto:ankson1010@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 8882294518", href: "tel:+918882294518" },
    { icon: MapPin, label: "Location", value: "India", href: "https://www.google.com/maps/place/India" },
  ];

  const socials = [
    { icon: SiGithub, label: "GitHub", href: "https://github.com/ankush2311025" },
    { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/ankush-sharma-49aa202a1/" },
    { icon: SiLeetcode, label: "LeetCode", href: "https://leetcode.com/u/Ankush0908/" },
  ];

  return (
    <div className="container mx-auto px-6 md:px-12 py-16 max-w-6xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">GET IN TOUCH</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Connect</span>
        </h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Have a project in mind, an open role, or just want to talk backend architecture? I'm all ears.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  data-testid={`contact-${item.label}`}
                  className="flex items-center gap-4 p-4 glass-card rounded-xl border border-white/5 hover:border-primary/20 transition-all group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                    <p className="font-medium text-sm">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Find me on</h3>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  data-testid={`social-${s.label}`}
                  className="w-11 h-11 glass-card rounded-xl border border-white/5 flex items-center justify-center hover:border-primary/30 hover:text-primary transition-all text-muted-foreground"
                >
                  <s.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-primary/10 bg-gradient-to-br from-primary/5 to-transparent">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <span className="text-primary font-semibold">Available for freelance work</span> and actively seeking full-time backend engineering roles. Response time is typically within 24 hours.
            </p>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card rounded-2xl p-12 border border-accent/20 flex flex-col items-center justify-center text-center h-full min-h-[400px]"
                data-testid="success-message"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", damping: 10 }}
                  className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mb-6 border border-accent/30"
                >
                  <CheckCircle size={40} className="text-accent" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-3">Message Sent!</h3>
                <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="mt-8 px-6 py-2.5 border border-white/10 rounded-xl text-sm hover:border-primary/30 hover:text-primary transition-all"
                >
                  Send Another
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="glass-card rounded-2xl p-8 border border-white/5 space-y-5"
                data-testid="contact-form"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">Name</label>
                    <input
                      data-testid="input-name"
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Ankush Sharma"
                      className="w-full px-4 py-2.5 bg-background/50 border border-white/10 rounded-lg text-sm focus:outline-none focus:border-primary/50 transition-colors placeholder:text-muted-foreground/50"
                    />
                    {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-1.5 block">Email</label>
                    <input
                      data-testid="input-email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full px-4 py-2.5 bg-background/50 border border-white/10 rounded-lg text-sm focus:outline-none focus:border-primary/50 transition-colors placeholder:text-muted-foreground/50"
                    />
                    {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">Subject</label>
                  <input
                    data-testid="input-subject"
                    type="text"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    placeholder="Project Inquiry / Job Opportunity"
                    className="w-full px-4 py-2.5 bg-background/50 border border-white/10 rounded-lg text-sm focus:outline-none focus:border-primary/50 transition-colors placeholder:text-muted-foreground/50"
                  />
                  {errors.subject && <p className="text-destructive text-xs mt-1">{errors.subject}</p>}
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1.5 block">Message</label>
                  <textarea
                    data-testid="input-message"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    className="w-full px-4 py-2.5 bg-background/50 border border-white/10 rounded-lg text-sm focus:outline-none focus:border-primary/50 transition-colors placeholder:text-muted-foreground/50 resize-none"
                  />
                  {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
                </div>
                <button
                  type="submit"
                  data-testid="button-submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(0,255,255,0.3)] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="inline-block w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  ) : (
                    <Send size={16} />
                  )}
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
