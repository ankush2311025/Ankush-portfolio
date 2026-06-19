import { useState, useEffect } from "react";

export function useCountUp(end: number, duration: number = 2000, startOnView: boolean = true, isVisible: boolean = true) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (startOnView && !isVisible) return;
    
    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function: easeOutQuart
      const easeOut = 1 - Math.pow(1 - percentage, 4);
      
      setCount(Math.floor(easeOut * end));

      if (progress < duration) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration, startOnView, isVisible]);

  return count;
}
