"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-black">
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
        <motion.div
          className="absolute top-1/4 left-1/4 w-[60vw] h-[60vw] rounded-full bg-[#8B0000]"
          animate={{
            x: ["0%", "20%", "-10%", "0%"],
            y: ["0%", "-20%", "10%", "0%"],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 25,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />

        {/* Liquid Gold Sweeps */}
        <motion.div
          className="absolute top-1/2 right-1/4 w-[70vw] h-[70vw] rounded-full bg-[#d4af37]"
          animate={{
            x: ["0%", "-30%", "20%", "0%"],
            y: ["0%", "30%", "-20%", "0%"],
            scale: [1, 0.8, 1.1, 1],
          }}
          transition={{
            duration: 30,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 2,
          }}
        />

        {/* Emerald Shadows */}
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-[80vw] h-[50vw] rounded-full bg-[#00ffcc]"
          animate={{
            x: ["0%", "40%", "-30%", "0%"],
            y: ["0%", "-10%", "30%", "0%"],
            rotate: [0, 90, 180, 360],
          }}
          transition={{
            duration: 35,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 5,
          }}
        />
        
        {/* Deep Violet Base */}
        <motion.div
          className="absolute bottom-0 right-0 w-[100vw] h-[50vw] rounded-full bg-[#4B0082]"
          animate={{
            x: ["20%", "-20%", "10%", "20%"],
            y: ["10%", "-30%", "20%", "10%"],
          }}
          transition={{
            duration: 40,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
      </div>
    </div>
  );
}
