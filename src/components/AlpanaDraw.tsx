"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AlpanaDraw() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    // Simulate DrawSVG behavior by manipulating strokeDasharray and strokeDashoffset manually
    const paths = svgRef.current.querySelectorAll("path");
    paths.forEach(path => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: svgRef.current,
        start: "top bottom",
        end: "bottom center",
        scrub: 1.5,
      }
    });

    tl.to(paths, {
      strokeDashoffset: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power2.inOut",
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none flex justify-center items-center opacity-10 overflow-hidden z-0">
      <svg
        ref={svgRef}
        viewBox="0 0 500 500"
        className="w-[800px] h-[800px] stroke-white"
        fill="none"
        strokeWidth="2"
      >
        {/* Intricate Lotus Motif Approximation */}
        <path d="M 250 250 C 350 150, 450 250, 250 450 C 50 250, 150 150, 250 250 Z" />
        <path d="M 250 250 C 350 50, 450 50, 250 150 C 50 50, 150 50, 250 250 Z" />
        <path d="M 250 250 C 450 350, 450 450, 350 250 C 450 50, 450 150, 250 250 Z" />
        <path d="M 250 250 C 50 350, 50 450, 150 250 C 50 50, 50 150, 250 250 Z" />
        <circle cx="250" cy="250" r="180" strokeDasharray="10 10" />
        <circle cx="250" cy="250" r="210" />
      </svg>
    </div>
  );
}
