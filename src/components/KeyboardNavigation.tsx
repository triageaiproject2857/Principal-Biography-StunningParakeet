"use client";

import { useEffect } from "react";

export default function KeyboardNavigation() {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore key events if the user is typing in an input or textarea
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return;
      }

      if (["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp", " "].includes(e.key)) {
        e.preventDefault();
        
        const slides = Array.from(document.querySelectorAll('section'));
        if (slides.length === 0) return;
        
        // Find current slide by checking which one is closest to top of viewport
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

        if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") {
          if (currentSlideIndex < slides.length - 1) {
            slides[currentSlideIndex + 1].scrollIntoView({ behavior: 'smooth' });
          }
        } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
          if (currentSlideIndex > 0) {
            slides[currentSlideIndex - 1].scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return null;
}
