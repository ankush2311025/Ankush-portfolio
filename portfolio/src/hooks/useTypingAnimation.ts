import { useState, useEffect } from "react";

export function useTypingAnimation(text: string, speed: number = 100, startDelay: number = 0) {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    setDisplayedText("");
    setIsTyping(false);

    let timeout: ReturnType<typeof setTimeout>;
    
    const startTyping = () => {
      setIsTyping(true);
      let currentIndex = 0;

      const typeNextChar = () => {
        if (currentIndex < text.length) {
          setDisplayedText(text.substring(0, currentIndex + 1));
          currentIndex++;
          timeout = setTimeout(typeNextChar, speed);
        } else {
          setIsTyping(false);
        }
      };

      typeNextChar();
    };

    timeout = setTimeout(startTyping, startDelay);

    return () => clearTimeout(timeout);
  }, [text, speed, startDelay]);

  return { displayedText, isTyping };
}
