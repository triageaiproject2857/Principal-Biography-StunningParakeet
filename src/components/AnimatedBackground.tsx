"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
      {/* Subtle moving orb 1 */}
      <motion.div
        className="absolute w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] rounded-full blur-[120px] bg-gradient-to-br from-[#d4af37]/20 to-transparent"
        animate={{
          x: ["-20%", "20%", "-20%"],
          y: ["-20%", "40%", "-20%"],
        }}
        transition={{
          duration: 15,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
      {/* Subtle moving orb 2 */}
      <motion.div
        className="absolute right-0 bottom-0 w-[90vw] h-[90vw] md:w-[60vw] md:h-[60vw] rounded-full blur-[150px] bg-gradient-to-tl from-[#ff3366]/20 to-transparent mix-blend-screen"
        animate={{
          x: ["20%", "-20%", "20%"],
          y: ["20%", "-40%", "20%"],
        }}
        transition={{
          duration: 20,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
    </div>
  );
}
