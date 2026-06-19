import { motion } from "framer-motion";
import { Link } from "wouter";
import { ParticleBackground } from "@/components/ParticleBackground";
import { useTypingAnimation } from "@/hooks/useTypingAnimation";
import { SiNodedotjs, SiPython, SiPostgresql, SiDocker } from "react-icons/si";

export default function Home() {
  const { displayedText } = useTypingAnimation("Backend Developer & Software Engineer", 50, 1000);

  const floatAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="relative min-h-[calc(100vh-6rem)] flex items-center justify-center overflow-hidden">
      <ParticleBackground />
      
      {/* Floating Tech Icons */}
      <motion.div 
        animate={floatAnimation} 
        className="absolute top-1/4 left-[15%] text-primary/40 text-6xl blur-[1px]"
      >
        <SiNodedotjs />
      </motion.div>
      <motion.div 
        animate={{...floatAnimation, transition: { ...floatAnimation.transition, delay: 0.5 }}} 
        className="absolute bottom-1/3 right-[15%] text-secondary/40 text-5xl blur-[1px]"
      >
        <SiPython />
      </motion.div>
      <motion.div 
        animate={{...floatAnimation, transition: { ...floatAnimation.transition, delay: 1 }}} 
        className="absolute top-1/3 right-[20%] text-accent/40 text-7xl blur-[2px]"
      >
        <SiPostgresql />
      </motion.div>
      <motion.div 
        animate={{...floatAnimation, transition: { ...floatAnimation.transition, delay: 1.5 }}} 
        className="absolute bottom-1/4 left-[20%] text-primary/30 text-5xl blur-[1px]"
      >
        <SiDocker />
      </motion.div>

      <div className="container mx-auto px-6 z-10 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-primary font-mono mb-4 tracking-widest text-sm md:text-base uppercase">
              HELLO WORLD, MEET
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
              Ankush <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Sharma</span>
            </h1>
          </motion.div>
          
          <div className="h-8 md:h-12 mb-8">
            <h3 className="text-xl md:text-3xl font-mono text-muted-foreground">
              {displayedText}<span className="animate-pulse text-primary">|</span>
            </h3>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            I architect robust backend systems, design scalable APIs, and engineer solutions where performance meets precision. Welcome to my digital workspace.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link 
              href="/projects" 
              className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded hover:bg-primary/90 transition-all hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] w-full sm:w-auto"
            >
              View Projects
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-3 bg-card border border-white/10 text-white font-semibold rounded hover:bg-white/5 transition-all w-full sm:w-auto"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
