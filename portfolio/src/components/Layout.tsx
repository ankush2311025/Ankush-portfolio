import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { SiGithub, SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { Mail, Download } from "lucide-react";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/services", label: "Services" },
    { href: "/profiles", label: "Profiles" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col relative selection:bg-primary/30 selection:text-primary">
      <header 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.1)]" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold font-mono tracking-tighter text-white relative group">
            <span className="text-primary">&lt;</span>
            AS
            <span className="text-primary">/&gt;</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </Link>
          
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary relative ${
                  location === link.href ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.label}
                {location === link.href && (
                  <motion.div 
                    layoutId="navbar-indicator"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary rounded-full shadow-[0_0_8px_rgba(0,255,255,0.8)]"
                  />
                )}
              </Link>
            ))}
            <Link href="/resume" className="ml-4 px-4 py-2 border border-primary/50 rounded text-sm font-medium text-primary hover:bg-primary/10 transition-colors flex items-center gap-2">
              <Download size={14} /> Resume
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-grow pt-24 pb-16">
        {children}
      </main>

      <footer className="border-t border-white/5 py-12 relative overflow-hidden bg-background">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center items-center gap-6 mb-8">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 transform duration-200">
              <SiGithub size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 transform duration-200">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 transform duration-200">
              <SiLeetcode size={24} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 transform duration-200">
              <Mail size={24} />
            </a>
          </div>
          <p className="text-muted-foreground font-mono text-sm">
            Designed & Developed by <span className="text-white font-bold neon-text ml-1">Ankush Sharma</span>
          </p>
          <p className="text-muted-foreground/50 text-xs mt-2">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
