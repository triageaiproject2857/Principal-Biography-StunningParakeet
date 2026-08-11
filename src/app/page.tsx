import ChapterNavigation from "@/components/ChapterNavigation";
import SlideWrapper from "@/components/SlideWrapper";
import AnimatedBackground from "@/components/AnimatedBackground";
import KeyboardNavigation from "@/components/KeyboardNavigation";

export default function Home() {
  return (
    <main id="main-scroll-container" className="relative h-screen w-full overflow-y-scroll snap-y snap-mandatory selection:bg-white/20 selection:text-white bg-black">
      <AnimatedBackground />
      <KeyboardNavigation />
      
      {/* ================= ACT I: THE ORIGIN (Crimson/Gold) ================= */}
      {/* SLIDE 01 */}
      <SlideWrapper className="bg-gradient-to-br from-[#1a0000] to-[#0A0015]">
        <div className="flex flex-col items-center justify-center text-center">
          <span className="font-inter text-sm tracking-[0.3em] text-[#d4af37] uppercase mb-4">Act I: The Origin</span>
          <h1 className="font-playfair text-6xl md:text-9xl font-black text-white">Dr. Rashmirekha Saha</h1>
          <p className="mt-8 font-inter text-lg text-white/50 tracking-widest uppercase">The Genesis of Leadership</p>
        </div>
      </SlideWrapper>

      {/* SLIDE 02 */}
      <SlideWrapper className="bg-gradient-to-br from-[#1a0000] to-[#0A0015]">
        <div className="grid grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-playfair text-5xl text-white">The Alpana Aesthetic</h2>
            <p className="font-inter text-lg text-white/70 font-light leading-relaxed">
              Hailing from West Bengal, Dr. Saha carries a deep, inherent appreciation for the traditions and arts of her homeland. The intricate Alpana designs represent her continuous connection to her roots and her philosophy of continuous, compassionate growth.
            </p>
          </div>
          <div className="aspect-square border border-red-500/20 bg-red-900/10 rounded-full flex items-center justify-center">
            <span className="text-white/20 text-xs tracking-widest">[ IMAGE: BENGAL ROOTS ]</span>
          </div>
        </div>
      </SlideWrapper>

      {/* SLIDE 03 */}
      <SlideWrapper className="bg-gradient-to-br from-[#1a0000] to-[#0A0015]">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h2 className="font-playfair text-5xl text-white">Spatial Geography</h2>
          <p className="font-inter text-xl text-white/70 font-light leading-relaxed">
            She holds a Ph.D. in Geography from Mumbai University, endowing her with a profound understanding of spatial dynamics, human environments, and interconnected ecosystems—knowledge she translates directly into institutional leadership.
          </p>
        </div>
      </SlideWrapper>

      {/* SLIDE 04 */}
      <SlideWrapper className="bg-gradient-to-br from-[#1a0000] to-[#0A0015]">
        <div className="grid grid-cols-2 gap-12 items-center">
          <div className="aspect-video border border-[#d4af37]/20 bg-[#d4af37]/5 rounded-2xl flex items-center justify-center">
            <span className="text-white/20 text-xs tracking-widest">[ IMAGE: APTECH / NIIT ]</span>
          </div>
          <div className="space-y-6">
            <h2 className="font-playfair text-5xl text-white">Technological Fusion</h2>
            <p className="font-inter text-lg text-white/70 font-light leading-relaxed">
              Uniquely for an educational leader, she holds a PGDCA and served as a Center Head for Aptech and NIIT. This dual fluency in geography and technology allowed her to seamlessly integrate modern digital tools with traditional Gurukul wisdom.
            </p>
          </div>
        </div>
      </SlideWrapper>

      {/* SLIDE 05 */}
      <SlideWrapper className="bg-gradient-to-br from-[#1a0000] to-[#0A0015]">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h2 className="font-playfair text-5xl text-white">The Assistant Professor</h2>
          <p className="font-inter text-xl text-white/70 font-light leading-relaxed">
            Following her early career as an Assistant Professor in colleges associated with Mumbai University, she laid the groundwork for her transition into massive, structural school leadership.
          </p>
        </div>
      </SlideWrapper>

      {/* ================= ACT II: THE CRUCIBLE (Emerald) ================= */}
      {/* SLIDE 06 */}
      <SlideWrapper className="bg-gradient-to-br from-[#001a0d] to-[#0A0015]">
        <div className="flex flex-col items-center justify-center text-center">
          <span className="font-inter text-sm tracking-[0.3em] text-[#00ffcc] uppercase mb-4">Act II: The Crucible</span>
          <h1 className="font-playfair text-6xl md:text-8xl font-black text-white">Reliance Foundation School</h1>
          <p className="mt-8 font-inter text-lg text-white/50 tracking-widest uppercase">15 Years in Nagothane</p>
        </div>
      </SlideWrapper>

      {/* SLIDE 07 */}
      <SlideWrapper className="bg-gradient-to-br from-[#001a0d] to-[#0A0015]">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h2 className="font-playfair text-5xl text-white">Grassroots Dedication</h2>
          <p className="font-inter text-xl text-white/70 font-light leading-relaxed">
            Her 15-year tenure in Nagothane (150km from Mumbai) signifies her profound dedication to grassroots education in peripheral geographies, transforming a remote school into an educational powerhouse.
          </p>
        </div>
      </SlideWrapper>

      {/* SLIDE 08 */}
      <SlideWrapper className="bg-gradient-to-br from-[#001a0d] to-[#0A0015]">
        <div className="grid grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-playfair text-5xl text-[#00ffcc]">Number 1</h2>
            <h3 className="font-playfair text-3xl text-white">CBSE School in India</h3>
            <p className="font-inter text-lg text-white/70 font-light leading-relaxed">
              Under her influence, the ecosystem flourished, culminating in the school being ranked as the Number One CBSE School in India for Co-curricular Education (2023-24).
            </p>
          </div>
          <div className="aspect-square border border-[#00ffcc]/20 bg-[#00ffcc]/5 rounded-3xl flex items-center justify-center">
            <span className="text-white/20 text-xs tracking-widest">[ IMAGE: NUMBER 1 AWARD ]</span>
          </div>
        </div>
      </SlideWrapper>

      {/* SLIDE 09 */}
      <SlideWrapper className="bg-gradient-to-br from-[#001a0d] to-[#0A0015]">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h2 className="font-playfair text-5xl text-white">Multi-Disciplinary Action</h2>
          <p className="font-inter text-xl text-white/70 font-light leading-relaxed">
            She spearheaded collaborations with local fire departments to observe Fire Safety Week, blending online drawing competitions with intensive on-site safety sessions for holistic learning.
          </p>
        </div>
      </SlideWrapper>

      {/* SLIDE 10 */}
      <SlideWrapper className="bg-gradient-to-br from-[#001a0d] to-[#0A0015]">
        <div className="grid grid-cols-2 gap-12 items-center">
          <div className="aspect-video border border-white/10 bg-white/5 rounded-2xl flex items-center justify-center">
            <span className="text-white/20 text-xs tracking-widest">[ IMAGE: SHIVAJI JAYANTI ]</span>
          </div>
          <div className="space-y-6">
            <h2 className="font-playfair text-4xl text-white">Historical Reverence</h2>
            <p className="font-inter text-lg text-white/70 font-light leading-relaxed">
              She integrated deep historical reverence into the curriculum, orchestrating Chhatrapati Shivaji Maharaj Jayanti celebrations that featured traditional Powada performances and patriotic displays.
            </p>
          </div>
        </div>
      </SlideWrapper>

      {/* ================= ACT III: CRISIS (Blue/Silver) ================= */}
      {/* SLIDE 11 */}
      <SlideWrapper className="bg-gradient-to-br from-[#000d1a] to-[#0A0015]">
        <div className="flex flex-col items-center justify-center text-center">
          <span className="font-inter text-sm tracking-[0.3em] text-[#3399ff] uppercase mb-4">Act III: Crisis & Innovation</span>
          <h1 className="font-playfair text-6xl md:text-8xl font-black text-white">Jaipuriar School</h1>
          <p className="mt-8 font-inter text-lg text-white/50 tracking-widest uppercase">The Paradigm Shift</p>
        </div>
      </SlideWrapper>

      {/* SLIDE 12 */}
      <SlideWrapper className="bg-gradient-to-br from-[#000d1a] to-[#0A0015]">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h2 className="font-playfair text-5xl text-white">The Rhythm of Kathak</h2>
          <p className="font-inter text-xl text-white/70 font-light leading-relaxed">
            Formally trained in Kathak, she actively utilized this rhythmic training to elevate her school's annual day programs and sports days, incorporating traditional Lezim dances and fluid storytelling.
          </p>
        </div>
      </SlideWrapper>

      {/* SLIDE 13 */}
      <SlideWrapper className="bg-gradient-to-br from-[#000d1a] to-[#0A0015]">
        <div className="grid grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-playfair text-5xl text-[#3399ff]">Digital Pandemic Shift</h2>
            <p className="font-inter text-lg text-white/70 font-light leading-relaxed">
              When the pandemic hit, she orchestrated a staggered technological adoption. She rapidly moved faculty from WhatsApp-based classes to recorded lessons, Zoom interactions, and finally established a robust Microsoft Teams infrastructure.
            </p>
          </div>
          <div className="aspect-square border border-[#3399ff]/20 bg-[#3399ff]/5 rounded-2xl flex items-center justify-center">
            <span className="text-white/20 text-xs tracking-widest">[ IMAGE: TEAMS / ZOOM ]</span>
          </div>
        </div>
      </SlideWrapper>

      {/* SLIDE 14 */}
      <SlideWrapper className="bg-gradient-to-br from-[#000d1a] to-[#0A0015]">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h2 className="font-playfair text-5xl text-white">Guinness World Record I</h2>
          <p className="font-inter text-xl text-white/70 font-light leading-relaxed">
            Championing experiential learning despite physical isolation, she led her students to achieve a Guinness World Record in 2020 for mass participation in sundial making activities.
          </p>
        </div>
      </SlideWrapper>

      {/* SLIDE 15 */}
      <SlideWrapper className="bg-gradient-to-br from-[#000d1a] to-[#0A0015]">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h2 className="font-playfair text-5xl text-white">Guinness World Record II</h2>
          <p className="font-inter text-xl text-white/70 font-light leading-relaxed">
            In 2021, she secured a second consecutive Guinness World Record for orchestrating simultaneous online and offline Rain Water Harvesting activities across the student body.
          </p>
        </div>
      </SlideWrapper>

      {/* ================= ACT IV: IRON LADY (Black/White) ================= */}
      {/* SLIDE 16 */}
      <SlideWrapper className="bg-gradient-to-br from-black to-[#0A0015]">
        <div className="flex flex-col items-center justify-center text-center">
          <span className="font-inter text-sm tracking-[0.3em] text-white/60 uppercase mb-4">Act IV: Pinnacle Leadership</span>
          <h1 className="font-playfair text-6xl md:text-8xl font-black text-white">The Iron Lady</h1>
          <p className="mt-8 font-inter text-lg text-white/50 tracking-widest uppercase">SNBP & Lodha World School</p>
        </div>
      </SlideWrapper>

      {/* SLIDE 17 */}
      <SlideWrapper className="bg-gradient-to-br from-black to-[#0A0015]">
        <div className="grid grid-cols-2 gap-12 items-center">
          <div className="aspect-video border border-white/20 bg-white/5 rounded-2xl flex items-center justify-center">
            <span className="text-white/20 text-xs tracking-widest">[ IMAGE: TENNIS TOURNAMENT ]</span>
          </div>
          <div className="space-y-6">
            <h2 className="font-playfair text-4xl text-white">Massive Logistical Coordination</h2>
            <p className="font-inter text-lg text-white/70 font-light leading-relaxed">
              At Lodha World School, she successfully led the institution in hosting the prestigious CBSE South Zone II Tennis Tournament (2024-25), coordinating vast participation from Bengaluru, Pune, and Thiruvananthapuram.
            </p>
          </div>
        </div>
      </SlideWrapper>

      {/* SLIDE 18 */}
      <SlideWrapper className="bg-gradient-to-br from-black to-[#0A0015]">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <h2 className="font-playfair text-5xl text-white">A Philosophy of Care</h2>
          <blockquote className="text-3xl font-playfair italic text-[#d4af37] border-l-4 border-[#d4af37] pl-8">
            "Mental health is not a destination, but a process."
          </blockquote>
          <p className="font-inter text-xl text-white/70 font-light">
            She advocates strongly for comprehensive well-being and student mental health across her massive campuses.
          </p>
        </div>
      </SlideWrapper>

      {/* SLIDE 19 */}
      <SlideWrapper className="bg-gradient-to-br from-black to-[#0A0015]">
        <div className="grid grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-playfair text-5xl text-white">2024 IFIP Inclusion Award</h2>
            <p className="font-inter text-lg text-white/70 font-light leading-relaxed">
              Celebrated for educating stakeholders on inclusive teaching practices, challenging stereotypes, and fostering empathy through strict anti-bullying initiatives and inclusive language policies.
            </p>
          </div>
          <div className="aspect-square border border-white/20 bg-white/5 rounded-full flex items-center justify-center">
            <span className="text-white/20 text-xs tracking-widest">[ IMAGE: IFIP AWARD ]</span>
          </div>
        </div>
      </SlideWrapper>

      {/* SLIDE 20 */}
      <SlideWrapper className="bg-gradient-to-br from-black to-[#0A0015]">
        <div className="text-center max-w-5xl mx-auto space-y-8">
          <h2 className="font-playfair text-5xl text-white">National Sahodaya Influence</h2>
          <p className="font-inter text-lg text-white/70 font-light leading-relaxed mb-12">
            Treasurer for the Mumbai Sahodaya School Complex. Core committee member orchestrating the 29th National Annual Conference at The Westin Mumbai, integrating NEP 2020.
          </p>
          
          <div className="grid grid-cols-3 gap-4 text-left">
            {[
              { year: "2022", title: "Star Rating Schools Award" },
              { year: "2021", title: "Global Youth Leadership Award (Nepal)" },
              { year: "2021", title: "Dr APJ Abdul Kalam Int. Award" },
              { year: "2021", title: "Education World Jury Award" },
              { year: "2020", title: "5-Star Rating Award (CED)" },
              { year: "2024", title: "IFIP Inclusion Award" }
            ].map((a, i) => (
              <div key={i} className="p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="text-[#d4af37] text-xs font-bold mb-1">{a.year}</div>
                <div className="text-white text-sm font-playfair">{a.title}</div>
              </div>
            ))}
          </div>
        </div>
      </SlideWrapper>

      <ChapterNavigation />
    </main>
  );
}
