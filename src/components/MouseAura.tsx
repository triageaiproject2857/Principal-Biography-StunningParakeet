"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function MouseAura() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  if (!isMounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#0A0015]">
      {/* Deep, vibrant moving mesh */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full blur-[140px] opacity-60 mix-blend-screen"
        style={{
          background: "radial-gradient(circle, rgba(255,51,102,0.4) 0%, rgba(212,175,55,0.3) 30%, rgba(0,255,204,0.1) 70%, transparent 100%)",
        }}
        animate={{
          x: mousePosition.x - 400,
          y: mousePosition.y - 400,
        }}
        transition={{
          type: "tween",
          ease: "easeOut",
          duration: 2.5,
        }}
      />
      {/* Background static ambient colors */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-900/20 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[150px] mix-blend-screen pointer-events-none" />
    </div>
  );
}
