"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

const customEase = [0.16, 1, 0.3, 1] as const;

interface SlideWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function SlideWrapper({ children, className = "" }: SlideWrapperProps) {
  return (
    <section className={`relative w-full h-screen snap-start snap-always flex items-center justify-center px-6 overflow-hidden transition-colors duration-1000 ${className}`}>
      <div className="w-full max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ y: "15%", opacity: 0, filter: "blur(8px)" }}
          whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.2, ease: customEase }}
          className="w-full"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
