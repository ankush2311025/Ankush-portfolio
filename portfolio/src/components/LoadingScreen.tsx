import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);
  const progress = useCountUp(100, 2000);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        setIsVisible(false);
        setTimeout(onComplete, 500); // Wait for fade out
      }, 500);
    }
  }, [progress, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[10000] bg-background flex flex-col items-center justify-center font-mono"
        >
          <div className="text-primary text-xl mb-4">
            INIT_SYSTEM...
          </div>
          <div className="w-64 h-2 bg-muted rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-primary"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-2 text-muted-foreground text-sm">
            {progress}% COMPLETED
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
