import { Layout } from "@/components/Layout";
import { CursorGlow } from "@/components/CursorGlow";
import { LoadingScreen } from "@/components/LoadingScreen";
import { useState, useEffect } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Skills from "@/pages/Skills";
import Projects from "@/pages/Projects";
import Services from "@/pages/Services";
import Experience from "@/pages/Experience";
import Profiles from "@/pages/Profiles";
import Contact from "@/pages/Contact";
import Blog from "@/pages/Blog";
import Resume from "@/pages/Resume";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/skills" component={Skills} />
      <Route path="/projects" component={Projects} />
      <Route path="/services" component={Services} />
      <Route path="/experience" component={Experience} />
      <Route path="/profiles" component={Profiles} />
      <Route path="/contact" component={Contact} />
      <Route path="/blog" component={Blog} />
      <Route path="/resume" component={Resume} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let typed = "";
    const handleKeyDown = (e: KeyboardEvent) => {
      typed += e.key;
      if (typed.length > 20) typed = typed.slice(-20);
      const lower = typed.toLowerCase();
      if (lower.includes("hello") || lower.includes("hire me") || lower.includes("developer")) {
        const div = document.createElement("div");
        div.style.cssText = `
          position:fixed;top:0;left:0;right:0;bottom:0;z-index:9999;
          display:flex;align-items:center;justify-content:center;
          background:rgba(0,0,0,0.85);backdrop-filter:blur(8px);
          font-family:'JetBrains Mono',monospace;
          animation:fadeInEgg 0.3s ease;
        `;
        div.innerHTML = `
          <div style="text-align:center;color:#00ffff;padding:2rem;border:1px solid rgba(0,255,255,0.3);border-radius:1rem;background:rgba(0,255,255,0.05);">
            <div style="font-size:3rem;margin-bottom:1rem;">🎯</div>
            <div style="font-size:1.5rem;font-weight:bold;margin-bottom:0.5rem;">Easter Egg Unlocked!</div>
            <div style="font-size:0.9rem;color:#94a3b8;margin-bottom:1.5rem;">You found the secret. Ankush says hey!</div>
            <div style="font-size:0.75rem;color:#00ffff;opacity:0.7;">[ Click anywhere to continue ]</div>
          </div>
        `;
        document.body.appendChild(div);
        div.addEventListener("click", () => document.body.removeChild(div));
        typed = "";
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {loading ? (
          <LoadingScreen onComplete={() => setLoading(false)} />
        ) : (
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <CursorGlow />
            <Layout>
              <Router />
            </Layout>
          </WouterRouter>
        )}
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
