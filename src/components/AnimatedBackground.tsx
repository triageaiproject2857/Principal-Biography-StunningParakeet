"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export default function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);
  const blob3Ref = useRef<HTMLDivElement>(null);
  const blob4Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!blob1Ref.current || !blob2Ref.current || !blob3Ref.current || !blob4Ref.current) return;

    // Deep Crimson Core
    gsap.to(blob1Ref.current, {
      x: "20%",
      y: "-20%",
      scale: 1.2,
      duration: 12.5,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
    
    gsap.to(blob1Ref.current, {
      x: "-10%",
      y: "10%",
      scale: 0.9,
      duration: 15,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      delay: 12.5,
    });

    // Liquid Gold Sweeps
    gsap.to(blob2Ref.current, {
      x: "-30%",
      y: "30%",
      scale: 0.8,
      duration: 15,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      delay: 1,
    });
    
    gsap.to(blob2Ref.current, {
      x: "20%",
      y: "-20%",
      scale: 1.1,
      duration: 18,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      delay: 16,
    });

    // Emerald Shadows
    gsap.to(blob3Ref.current, {
      x: "40%",
      y: "-10%",
      rotation: 180,
      duration: 17.5,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      delay: 2,
    });

    gsap.to(blob3Ref.current, {
      x: "-30%",
      y: "30%",
      rotation: 360,
      duration: 20,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      delay: 19.5,
    });
    
    // Deep Violet Base
    gsap.to(blob4Ref.current, {
      x: "-20%",
      y: "-30%",
      duration: 20,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      delay: 3,
    });

    gsap.to(blob4Ref.current, {
      x: "10%",
      y: "20%",
      duration: 22,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      delay: 23,
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-black">
      {/* Cinematic Film Grain Overlay */}
      <svg className="fixed inset-0 w-full h-full opacity-[0.15] mix-blend-overlay z-10 pointer-events-none">
        <filter id="noiseFilter">
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.65" 
            numOctaves="3" 
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      {/* Fluid Video-Like Mesh Container */}
      <div className="absolute inset-0 w-full h-full opacity-60 mix-blend-screen saturate-150 blur-[100px] md:blur-[140px]">
        
        {/* Deep Crimson Core */}
        <div
          ref={blob1Ref}
          className="absolute top-1/4 left-1/4 w-[60vw] h-[60vw] rounded-full bg-[#8B0000]"
        />

        {/* Liquid Gold Sweeps */}
        <div
          ref={blob2Ref}
          className="absolute top-1/2 right-1/4 w-[70vw] h-[70vw] rounded-full bg-[#d4af37]"
        />

        {/* Emerald Shadows */}
        <div
          ref={blob3Ref}
          className="absolute bottom-1/4 left-1/3 w-[80vw] h-[50vw] rounded-full bg-[#00ffcc]"
        />
        
        {/* Deep Violet Base */}
        <div
          ref={blob4Ref}
          className="absolute bottom-0 right-0 w-[100vw] h-[50vw] rounded-full bg-[#4B0082]"
        />
      </div>
    </div>
  );
}
