"use client";

import { useEffect, useState } from "react";

export default function ChapterNavigation() {
  const [activeSlide, setActiveSlide] = useState(1);
  const totalSlides = 15;

  useEffect(() => {
    const slides = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Find the index of the intersecting slide
          const index = Array.from(slides).indexOf(entry.target as HTMLElement);
          if (index !== -1) {
            setActiveSlide(index + 1);
          }
        }
      });
    }, {
      root: null, // use viewport
      threshold: 0.5 // trigger when 50% of slide is visible
    });

    slides.forEach((slide) => observer.observe(slide));

    return () => observer.disconnect();
  }, []);

  let currentAct = 1;
  let actStartSlide = 1;
  let slidesInAct = 4;

  if (activeSlide <= 4) {
    currentAct = 1;
    actStartSlide = 1;
    slidesInAct = 4;
  } else if (activeSlide <= 7) {
    currentAct = 2;
    actStartSlide = 5;
    slidesInAct = 3;
  } else if (activeSlide <= 10) {
    currentAct = 3;
    actStartSlide = 8;
    slidesInAct = 3;
  } else {
    currentAct = 4;
    actStartSlide = 11;
    slidesInAct = 5;
  }

  const acts = [
    { id: 1, name: "I. The Origin" },
    { id: 2, name: "II. The Crucible" },
    { id: 3, name: "III. Crisis & Innovation" },
    { id: 4, name: "IV. The Iron Lady" },
  ];

  return (
    <div className={`fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl transition-all duration-700 pointer-events-auto mix-blend-screen ${activeSlide === totalSlides ? "opacity-0 pointer-events-none translate-y-10" : "opacity-40 hover:opacity-100"}`}>
      <div className="flex flex-col md:flex-row items-center justify-between px-4">
        <div className="flex space-x-6">
          {acts.map((act) => (
            <div key={act.id} className="flex flex-col space-y-2">
              <span className={`font-inter text-xs tracking-widest uppercase transition-colors duration-300 ${currentAct === act.id ? "text-white font-bold" : "text-white/30"}`}>
                {act.name}
              </span>
              <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                {currentAct === act.id && (
                  <div 
                    className="h-full bg-gradient-to-r from-[#d4af37] to-[#ff3366] transition-all duration-300"
                    style={{ width: `${((activeSlide - actStartSlide + 1) / slidesInAct) * 100}%` }}
                  />
                )}
                {currentAct > act.id && <div className="h-full w-full bg-white/50" />}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 md:mt-0 font-playfair text-sm text-white/50">
          Slide <span className="text-white">{activeSlide.toString().padStart(2, "0")}</span> / {totalSlides}
        </div>
      </div>
    </div>
  );
}
