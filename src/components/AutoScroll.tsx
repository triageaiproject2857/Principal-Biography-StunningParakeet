"use client";

import { useEffect, useState } from "react";

export default function AutoScroll() {
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      const slides = Array.from(document.querySelectorAll('section'));
      if (slides.length === 0) return;
      
      let currentSlideIndex = 0;
      let minDistance = Infinity;
      
      slides.forEach((slide, index) => {
        const rect = slide.getBoundingClientRect();
        const distance = Math.abs(rect.top);
        if (distance < minDistance) {
          minDistance = distance;
          currentSlideIndex = index;
        }
      });

      if (currentSlideIndex < slides.length - 1) {
        slides[currentSlideIndex + 1].scrollIntoView({ behavior: 'smooth' });
      } else {
        // Loop back to the start continuously
        slides[0].scrollIntoView({ behavior: 'smooth' });
      }
    }, 4000); // 4 seconds per slide

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <button
      onClick={() => setIsPlaying(!isPlaying)}
      className="fixed bottom-6 right-6 z-50 bg-white/10 hover:bg-white/20 border border-white/20 text-white p-3 rounded-full backdrop-blur-sm transition-all"
      aria-label={isPlaying ? "Pause auto-scroll" : "Play auto-scroll"}
    >
      {isPlaying ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
      )}
    </button>
  );
}
