"use client";

import { motion } from "framer-motion";
import TopNavigation from "@/components/TopNavigation";
import { ReactNode } from "react";

const customEase = [0.16, 1, 0.3, 1] as const;

function FadeInSection({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: customEase }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <main className="bg-[#070708] min-h-screen selection:bg-white/20 selection:text-white">
      <TopNavigation />

      {/* HERO SECTION */}
      <section className="relative h-screen flex flex-col items-center justify-center px-6">
        <FadeInSection className="text-center">
          <h1 className="font-playfair text-5xl md:text-8xl font-medium tracking-tight text-white leading-tight">
            Dr. Rashmirekha Saha
          </h1>
          <p className="mt-8 font-inter text-sm md:text-base tracking-[0.3em] text-white/40 uppercase font-light">
            Educator <span className="mx-4">•</span> Visionary <span className="mx-4">•</span> Iron Lady
          </p>
        </FadeInSection>
        
        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[1px] h-16 bg-white/20"
          initial={{ scaleY: 0, transformOrigin: "top" }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: customEase }}
        />
      </section>

      {/* ABOUT / FOUNDATION */}
      <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
        <FadeInSection className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="w-full aspect-[4/3] rounded-lg border border-white/[0.05] bg-white/[0.02] flex items-center justify-center">
            <span className="font-inter text-xs tracking-widest text-white/30 uppercase">[ IMAGE: West Bengal Roots ]</span>
          </div>
          <div className="space-y-8">
            <h2 className="font-playfair text-3xl md:text-5xl text-white">The Foundation</h2>
            <div className="space-y-6 font-inter text-base text-gray-400 font-light leading-relaxed">
              <p>
                Hailing from West Bengal, Dr. Rashmirekha Saha holds a Ph.D. in Geography from Mumbai University, endowing her with a profound understanding of spatial dynamics, human environments, and interconnected ecosystems. 
              </p>
              <p>
                Uniquely for an educational leader, she also holds a Post Graduate Diploma in Computer Applications. Her early career as a Center Head for Aptech and NIIT, followed by her role as an Assistant Professor in Mumbai, allowed her to perfectly fuse traditional Gurukul wisdom with cutting-edge technology.
              </p>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* EXPERIENCE / LEADERSHIP */}
      <section id="experience" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/[0.04]">
        <FadeInSection className="mb-16">
          <h2 className="font-playfair text-3xl md:text-5xl text-white text-center">Transformative Leadership</h2>
        </FadeInSection>

        <div className="space-y-24">
          {/* Reliance */}
          <FadeInSection className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="font-inter text-xs tracking-widest text-[#d4af37] uppercase">15-Year Legacy</span>
              <h3 className="font-playfair text-3xl text-white">Reliance Foundation School</h3>
              <p className="font-inter text-base text-gray-400 font-light leading-relaxed">
                Her tenure in Nagothane signifies a profound dedication to grassroots education in peripheral geographies. Under her influence, the school was ranked as the Number One CBSE School in India for Co-curricular Education (2023-24). She orchestrated multi-disciplinary events, blending online drawing competitions with on-site Fire Safety Week sessions and traditional Powada performances for Chhatrapati Shivaji Maharaj Jayanti.
              </p>
            </div>
            <div className="w-full aspect-video rounded-lg border border-white/[0.05] bg-white/[0.02] flex items-center justify-center">
              <span className="font-inter text-xs tracking-widest text-white/30 uppercase">[ IMAGE: Reliance School ]</span>
            </div>
          </FadeInSection>

          {/* Jaipuriar */}
          <FadeInSection className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="w-full aspect-video rounded-lg border border-white/[0.05] bg-white/[0.02] flex items-center justify-center order-2 lg:order-1">
              <span className="font-inter text-xs tracking-widest text-white/30 uppercase">[ IMAGE: Jaipuriar School ]</span>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <span className="font-inter text-xs tracking-widest text-[#d4af37] uppercase">Digital Transition</span>
              <h3 className="font-playfair text-3xl text-white">Jaipuriar School</h3>
              <p className="font-inter text-base text-gray-400 font-light leading-relaxed">
                Demonstrating extraordinary crisis management during the pandemic, she seamlessly guided her institution through rapid digital transitions to Microsoft Teams. Despite physical isolation, she led her students to achieve two consecutive Guinness World Records: sundial making activities (2020) and simultaneous online/offline Rain Water Harvesting (2021).
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* PHILOSOPHY & NATIONAL INFLUENCE */}
      <section id="philosophy" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/[0.04]">
        <FadeInSection className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="p-10 rounded-2xl border border-white/[0.04] bg-white/[0.01] space-y-6">
            <h3 className="font-playfair text-3xl text-white">Inclusive Excellence</h3>
            <p className="font-inter text-base text-gray-400 font-light leading-relaxed">
              Currently leading SNBP International School (Pune) and Lodha World School campuses. She advocates strongly for comprehensive well-being, earning the 2024 IFIP Inclusion Award for her strict anti-bullying initiatives.
            </p>
            <blockquote className="border-l-2 border-[#d4af37] pl-6 italic font-playfair text-xl text-white/90">
              "Mental health is not a destination, but a process."
            </blockquote>
          </div>

          <div className="p-10 rounded-2xl border border-white/[0.04] bg-white/[0.01] space-y-6">
            <h3 className="font-playfair text-3xl text-white">National Influence</h3>
            <p className="font-inter text-base text-gray-400 font-light leading-relaxed">
              Her influence extends to the national level within the CBSE ecosystem. As Treasurer for the Mumbai Sahodaya School Complex, she orchestrated the 29th National Annual Conference ("Reimagining the Changing Landscape") at The Westin Mumbai, focusing heavily on equitable education and NEP 2020 integration.
            </p>
          </div>
        </FadeInSection>
      </section>

      {/* AWARDS GRID */}
      <section id="awards" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/[0.04]">
        <FadeInSection className="mb-16">
          <h2 className="font-playfair text-3xl md:text-5xl text-white text-center">Awards & Recognition</h2>
        </FadeInSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { year: "2024", title: "IFIP Inclusion Award", context: "Anti-bullying & diversity" },
            { year: "2023-24", title: "Number 1 CBSE School", context: "Co-curricular, Education Today" },
            { year: "2022", title: "Star Rating Schools Award", context: "7th Eduleaders Annual Conf." },
            { year: "2021", title: "Global Youth Leadership", context: "Kathmandu, Nepal" },
            { year: "2021", title: "Dr A.P.J. Abdul Kalam Award", context: "Educational innovation" },
            { year: "2021", title: "Education World Jury Award", context: "Leadership during crisis" },
            { year: "2020", title: "5-Star Rating Award", context: "CED Foundation" },
            { year: "2020 & 2021", title: "Guinness World Records", context: "Sundials & Rainwater harvesting" },
          ].map((award, i) => (
            <FadeInSection key={i} className="p-6 rounded-xl border border-white/[0.04] bg-white/[0.01] hover:bg-white/[0.03] transition-colors">
              <div className="font-inter text-xs text-[#d4af37] mb-2 font-medium tracking-wider">{award.year}</div>
              <div className="font-playfair text-lg text-white mb-2 leading-tight">{award.title}</div>
              <div className="font-inter text-sm text-gray-500 font-light">{award.context}</div>
            </FadeInSection>
          ))}
        </div>
      </section>
      
      {/* FOOTER */}
      <footer className="py-12 border-t border-white/[0.04] text-center">
        <p className="font-inter text-xs text-white/30 uppercase tracking-widest">
          © {new Date().getFullYear()} Dr. Rashmirekha Saha
        </p>
      </footer>
    </main>
  );
}
