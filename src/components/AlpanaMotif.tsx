"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

interface AlpanaMotifProps {
  className?: string;
  color?: string;
}

export default function AlpanaMotif({ className = "", color = "#ffffff" }: AlpanaMotifProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useGSAP(
    () => {
      if (!pathRef.current) return;
      
      const length = pathRef.current.getTotalLength();
      
      // Set up the initial state
      gsap.set(pathRef.current, {
        strokeDasharray: length,
        strokeDashoffset: length,
        opacity: 1
      });

      // Animate on scroll
      gsap.to(pathRef.current, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1.5,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={`w-full h-full flex justify-center items-center ${className}`}>
      <svg 
        viewBox="0 0 400 400" 
        className="w-full h-full max-w-[80vw] max-h-[80vh] opacity-20 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Intricate abstract lotus/mandala pattern representing Alpana */}
        <path
          ref={pathRef}
          d="M200,20 C250,100 380,100 380,200 C380,300 250,300 200,380 C150,300 20,300 20,200 C20,100 150,100 200,20 M200,60 C230,120 320,130 340,200 C320,270 230,280 200,340 C170,280 80,270 60,200 C80,130 170,120 200,60 M200,100 C210,140 260,160 290,200 C260,240 210,260 200,300 C190,260 140,240 110,200 C140,160 190,140 200,100"
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-0" 
        />
      </svg>
    </div>
  );
}
