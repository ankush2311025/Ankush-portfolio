import { useEffect, useRef } from "react";
import { useMousePosition } from "@/hooks/useMousePosition";

export function CursorGlow() {
  const { x, y } = useMousePosition();
  const cursorRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!cursorRef.current) return;
    
    // Smooth follow effect using CSS transforms
    cursorRef.current.animate(
      {
        left: `${x}px`,
        top: `${y}px`
      },
      { duration: 150, fill: "forwards" }
    );
  }, [x, y]);

  return (
    <>
      <div 
        className="fixed top-0 left-0 w-4 h-4 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-screen transition-transform duration-100 ease-out"
        style={{ transform: `translate(${x - 8}px, ${y - 8}px)` }}
      />
      <div 
        ref={cursorRef}
        className="fixed top-0 left-0 w-96 h-96 -ml-48 -mt-48 rounded-full pointer-events-none z-[9998] opacity-20 blur-[100px] bg-primary"
      />
    </>
  );
}
