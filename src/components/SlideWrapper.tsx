"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ReactNode } from "react";

interface SlideWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function SlideWrapper({ children, className = "", id }: SlideWrapperProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!contentRef.current || !sectionRef.current) return;
      
      gsap.fromTo(contentRef.current, 
        { y: "15%", opacity: 0, filter: "blur(8px)" },
        {
          y: "0%", 
          opacity: 1, 
          filter: "blur(0px)",
          duration: 1.2, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          }
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section 
      id={id}
      ref={sectionRef} 
      className={`relative w-full h-screen snap-start snap-always flex items-center justify-center px-6 overflow-hidden transition-colors duration-1000 ${className}`}
    >
      <div ref={contentRef} className="w-full max-w-7xl mx-auto relative z-10">
        {children}
      </div>
    </section>
  );
}
