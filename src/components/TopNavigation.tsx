"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function TopNavigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Philosophy", href: "#philosophy" },
    { label: "Awards", href: "#awards" },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-4 bg-[#070708]/80 backdrop-blur-md border-b border-white/[0.04]" : "py-8 bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="font-playfair text-xl text-white tracking-wide font-medium">
          RS.
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-inter text-sm text-white/50 hover:text-white transition-colors uppercase tracking-widest"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
}
