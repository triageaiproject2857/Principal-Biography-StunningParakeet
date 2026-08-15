import ChapterNavigation from "@/components/ChapterNavigation";
import SlideWrapper from "@/components/SlideWrapper";
import AnimatedBackground from "@/components/AnimatedBackground";
import KeyboardNavigation from "@/components/KeyboardNavigation";
import AlpanaMotif from "@/components/AlpanaMotif";

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden selection:bg-white/20 selection:text-white bg-black">
      <AnimatedBackground />
      <KeyboardNavigation />
      
      {/* ================= ACT I: THE ORIGIN (Crimson/Gold) ================= */}
      {/* SLIDE 01 */}
      <SlideWrapper id="act1" className="bg-gradient-to-br from-[#1a0000] to-[#0A0015]">
        <div className="absolute top-1/2 left-1/2 w-[100vw] h-[100vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen"
            src="https://res.cloudinary.com/shzosknf/video/upload/Drone_view_of_clean_school_202608121639_the3sk.mp4"
          />
        </div>
        <div className="absolute inset-0 pointer-events-none opacity-20 flex items-center justify-center mix-blend-overlay z-0">
          <AlpanaMotif color="#d4af37" className="w-[120vw] max-w-none opacity-50" />
        </div>
        <div className="flex flex-col items-center justify-center text-center relative z-10">
          <span className="font-inter text-sm tracking-[0.3em] text-[#d4af37] uppercase mb-4">Act I: The Origin</span>
          <h1 className="font-playfair text-6xl md:text-9xl font-black text-white drop-shadow-2xl">Dr. Rashmirekha Saha</h1>
          <p className="mt-8 font-inter text-lg text-white/70 tracking-widest uppercase">The Genesis of Leadership</p>
        </div>
      </SlideWrapper>

      {/* SLIDE 02 */}
      <SlideWrapper className="bg-[url('/images/asthetic-backgrounds.jpg')] bg-cover bg-center bg-no-repeat before:content-[''] before:absolute before:inset-0 before:bg-black/80">

        <div className="grid grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            <h2 className="font-playfair text-5xl text-white">The Alpana Aesthetic</h2>
            <p className="font-inter text-lg text-white/70 font-light leading-relaxed">
              Hailing from West Bengal, Dr. Saha carries a deep, inherent appreciation for the traditions and arts of her homeland. The intricate Alpana designs, traditionally drawn by hand on the floor, represent her continuous connection to her cultural roots and her philosophy of continuous, compassionate growth.
            </p>
          </div>
          <div className="relative aspect-square rounded-full flex items-center justify-center overflow-hidden border-4 border-[#d4af37]/30 shadow-2xl shadow-[#d4af37]/20">
             <img src="/images/rangoli.jpeg" alt="West Bengali Alpana Art" className="w-full h-full object-cover opacity-80" />
             <div className="absolute inset-0 bg-black/40 mix-blend-overlay"></div>
             <div className="absolute inset-0">
               <AlpanaMotif color="#ffffff" className="opacity-40 scale-125" />
             </div>
          </div>
        </div>
      </SlideWrapper>

      {/* SLIDE 03 */}
      <SlideWrapper className="bg-[url('/images/asthetic-backgrounds.jpg')] bg-cover bg-center bg-no-repeat before:content-[''] before:absolute before:inset-0 before:bg-black/80">

        <div className="text-center max-w-4xl mx-auto space-y-6 relative z-10">
          <h2 className="font-playfair text-5xl text-[#d4af37]">Spatial Geography</h2>
          <p className="font-inter text-xl text-white/90 font-light leading-relaxed">
            She holds a Ph.D. in Geography from Mumbai University, endowing her with a profound understanding of spatial dynamics, human environments, and interconnected ecosystems—knowledge she translates directly into institutional leadership and large-scale ecosystem management.
          </p>
        </div>
      </SlideWrapper>

      {/* SLIDE 04 */}
      <SlideWrapper className="bg-[url('/images/asthetic-backgrounds.jpg')] bg-cover bg-center bg-no-repeat before:content-[''] before:absolute before:inset-0 before:bg-black/80">

        <div className="grid grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            <h2 className="font-playfair text-5xl text-white">Technological Fusion</h2>
            <p className="font-inter text-lg text-white/70 font-light leading-relaxed">
              Uniquely for an educational leader, she holds a Post Graduate Diploma in Computer Applications and served as a Center Head for pioneering technology education institutions like Aptech and NIIT. This dual fluency in geography and technology allowed her to seamlessly integrate modern digital tools with traditional Gurukul wisdom long before it was commonplace.
            </p>
          </div>
           <div className="flex flex-col items-center justify-center space-y-6">
            <div className="w-full aspect-[4/3] max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-[#d4af37]/20 border border-white/10">
              <img src="/images/technology.jpeg" alt="Digital Education" className="w-full h-full object-cover object-top" />
            </div>
            <h2 className="font-playfair text-4xl text-[#d4af37]">The Assistant Professor</h2>
            <p className="font-inter text-lg text-white/70 font-light leading-relaxed">
              Following her early career as an Assistant Professor in colleges associated with Mumbai University, she laid the groundwork for her transition into massive, structural school leadership.
            </p>
          </div>
        </div>
      </SlideWrapper>

      {/* ================= ACT II: THE CRUCIBLE (Emerald) ================= */}
      {/* SLIDE 05 */}
      <SlideWrapper id="act2" className="bg-[url('/images/asthetic-backgrounds.jpg')] bg-cover bg-center bg-no-repeat before:content-[''] before:absolute before:inset-0 before:bg-black/80">

        <div className="flex flex-col items-center justify-center text-center relative z-10">
          <span className="font-inter text-sm tracking-[0.3em] text-[#00ffcc] uppercase mb-4">Act II: The Crucible</span>
          <h1 className="font-playfair text-6xl md:text-8xl font-black text-white">Reliance Foundation School</h1>
          <p className="mt-8 font-inter text-lg text-white/50 tracking-widest uppercase">15 Years in Nagothane</p>
          <div className="mt-12 w-full max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-[#00ffcc]/20 border border-white/10">
            <img src="/images/reliance.jfif" alt="Reliance Foundation School" className="w-full object-cover max-h-[40vh]" />
          </div>
        </div>
      </SlideWrapper>

      {/* SLIDE 06 */}
      <SlideWrapper className="bg-[url('/images/asthetic-backgrounds.jpg')] bg-cover bg-center bg-no-repeat before:content-[''] before:absolute before:inset-0 before:bg-black/80">

        <div className="grid grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
             <h2 className="font-playfair text-5xl text-[#00ffcc]">Number 1</h2>
             <h3 className="font-playfair text-3xl text-white">CBSE School in India</h3>
            <p className="font-inter text-lg text-white/70 font-light leading-relaxed">
              Her 15-year tenure in Nagothane (150km from Mumbai) signifies her profound dedication to grassroots education in peripheral geographies. Under her influence, the ecosystem flourished, culminating in the school being ranked as the Number One CBSE School in India for Co-curricular Education (2023-24) by Education Today.
            </p>
          </div>
           <div className="space-y-6 flex flex-col justify-center">
            <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-[#00ffcc]/20 border border-white/10 mb-4">
              <img src="/images/award_trophy.png" alt="Number 1 CBSE Award Trophy" className="w-full h-full object-cover" />
            </div>
            <h2 className="font-playfair text-4xl text-white">Multi-Disciplinary Action</h2>
            <p className="font-inter text-lg text-white/70 font-light leading-relaxed">
              She spearheaded collaborations with local fire departments to observe Fire Safety Week, blending online drawing competitions with intensive on-site safety sessions for holistic, real-world learning.
            </p>
          </div>
        </div>
      </SlideWrapper>

      {/* SLIDE 07 */}
      <SlideWrapper className="bg-[url('/images/asthetic-backgrounds.jpg')] bg-cover bg-center bg-no-repeat before:content-[''] before:absolute before:inset-0 before:bg-black/80">

        <div className="text-center max-w-4xl mx-auto space-y-6 relative z-10">
          <h2 className="font-playfair text-5xl text-white">Historical Reverence</h2>
          <p className="font-inter text-xl text-[#00ffcc] font-light leading-relaxed">
            She integrated deep historical reverence into the curriculum, orchestrating Chhatrapati Shivaji Maharaj Jayanti celebrations that featured traditional Powada performances, patriotic songs, and artistic displays, blending academic rigor with vibrant cultural engagement.
          </p>
        </div>
      </SlideWrapper>

      {/* ================= ACT III: CRISIS (Blue/Silver) ================= */}
      {/* SLIDE 08 */}
      <SlideWrapper id="act3" className="bg-[url('/images/asthetic-backgrounds.jpg')] bg-cover bg-center bg-no-repeat before:content-[''] before:absolute before:inset-0 before:bg-black/80">

        <div className="flex flex-col items-center justify-center text-center relative z-10">
          <span className="font-inter text-sm tracking-[0.3em] text-[#3399ff] uppercase mb-4">Act III: Crisis & Innovation</span>
          <h1 className="font-playfair text-6xl md:text-8xl font-black text-white">Jaipuriar School</h1>
          <p className="mt-8 font-inter text-lg text-white/50 tracking-widest uppercase">The Paradigm Shift</p>
        </div>
      </SlideWrapper>

      {/* SLIDE 09 */}
      <SlideWrapper className="bg-[url('/images/asthetic-backgrounds.jpg')] bg-cover bg-center bg-no-repeat before:content-[''] before:absolute before:inset-0 before:bg-black/80">

        <div className="grid grid-cols-2 gap-12 items-center relative z-10">
           <div className="space-y-6">
            <h2 className="font-playfair text-5xl text-white">The Rhythm of Kathak</h2>
            <p className="font-inter text-lg text-[#3399ff] font-light leading-relaxed">
              Formally trained in Kathak, one of the major forms of Indian classical dance, she actively utilized this rhythmic training to elevate the aesthetic and energetic qualities of her school's annual day programs and sports days, incorporating traditional Lezim dances and fluid storytelling.
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="font-playfair text-4xl text-white">Digital Pandemic Shift</h2>
            <p className="font-inter text-lg text-white/70 font-light leading-relaxed">
              When the pandemic necessitated a paradigm shift, she orchestrated a staggered technological adoption. She rapidly moved faculty and students from WhatsApp-based classes to recorded lessons, to Zoom interactions, before finally establishing a robust Microsoft Teams infrastructure.
            </p>
          </div>
        </div>
      </SlideWrapper>

      {/* SLIDE 10 */}
      <SlideWrapper className="bg-[url('/images/asthetic-backgrounds.jpg')] bg-cover bg-center bg-no-repeat before:content-[''] before:absolute before:inset-0 before:bg-black/80">

        <div className="text-center max-w-4xl mx-auto space-y-6 relative z-10">
          <h2 className="font-playfair text-5xl text-white">Experiential Learning</h2>
          <p className="font-inter text-xl text-white/70 font-light leading-relaxed mb-8">
            Her philosophy that "Education should teach people how to be happy and make others happy" remained central. She championed experiential learning despite physical isolation, earning TWO consecutive Guinness World Records:
          </p>
           <div className="grid grid-cols-2 gap-8 text-left">
              <div className="p-6 border border-[#3399ff]/30 bg-[#3399ff]/10 rounded-xl">
                 <h3 className="font-playfair text-2xl text-[#3399ff] mb-2">2020 Record</h3>
                 <p className="font-inter text-white/80">Mass participation in sundial making activities.</p>
              </div>
              <div className="p-6 border border-[#3399ff]/30 bg-[#3399ff]/10 rounded-xl">
                 <h3 className="font-playfair text-2xl text-[#3399ff] mb-2">2021 Record</h3>
                 <p className="font-inter text-white/80">Simultaneous online and offline Rain Water Harvesting activities.</p>
              </div>
           </div>
        </div>
      </SlideWrapper>

      {/* ================= ACT IV: IRON LADY (Black/White/Gold) ================= */}
      {/* SLIDE 11 */}
      <SlideWrapper id="act4" className="bg-[url('/images/asthetic-backgrounds.jpg')] bg-cover bg-center bg-no-repeat before:content-[''] before:absolute before:inset-0 before:bg-black/80">

        <div className="absolute inset-0 pointer-events-none opacity-20 flex items-center justify-center z-0">
          <AlpanaMotif color="#ffffff" className="w-[150vw] max-w-none opacity-30" />
        </div>
        <div className="flex flex-col items-center justify-center text-center relative z-10 w-full h-full">
          <span className="font-inter text-sm tracking-[0.3em] text-white/60 uppercase mb-4">Act IV: Pinnacle Leadership</span>
          <h1 className="font-playfair text-6xl md:text-8xl font-black text-white">The Iron Lady</h1>
          <p className="mt-8 font-inter text-lg text-white/50 tracking-widest uppercase">SNBP & Lodha World School</p>
        </div>
      </SlideWrapper>

      {/* SLIDE 12 */}
      <SlideWrapper className="bg-[url('/images/asthetic-backgrounds.jpg')] bg-cover bg-center bg-no-repeat before:content-[''] before:absolute before:inset-0 before:bg-black/80">

        <div className="grid grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-[#d4af37]/20 border border-white/10 mb-6">
              <img src="/images/WhatsApp Image 2026-08-15 at 10.03.53 AM.jpeg" alt="Tennis Tournament" className="w-full h-full object-cover" />
            </div>
            <h2 className="font-playfair text-4xl text-white">Massive Logistical Coordination</h2>
            <p className="font-inter text-lg text-white/70 font-light leading-relaxed">
              At Lodha World School across its campuses, she demonstrated a profound commitment to inclusive education and massive logistical coordination. She successfully led the institution in hosting the prestigious CBSE South Zone II Tennis Tournament (2024-25), coordinating vast participation from Bengaluru, Pune, and Thiruvananthapuram.
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="font-playfair text-4xl text-[#d4af37]">2024 IFIP Inclusion Award at UNESCO, Paris</h2>
            <p className="font-inter text-lg text-[#d4af37]/80 font-light leading-relaxed">
              Celebrated for educating stakeholders on inclusive teaching practices, challenging stereotypes, and fostering empathy through strict anti-bullying initiatives and inclusive language policies.
            </p>
          </div>
        </div>
      </SlideWrapper>

      {/* SLIDE 13 */}
      <SlideWrapper className="bg-[url('/images/asthetic-backgrounds.jpg')] bg-cover bg-center bg-no-repeat before:content-[''] before:absolute before:inset-0 before:bg-black/80">

        <div className="text-center max-w-4xl mx-auto space-y-8 relative z-10">
          <h2 className="font-playfair text-5xl text-white">A Philosophy of Care</h2>
          <blockquote className="text-3xl md:text-5xl font-playfair italic text-[#d4af37] border-l-4 border-[#d4af37] pl-8 text-left leading-tight">
            "Mental health is not a destination, but a process."
          </blockquote>
          <p className="font-inter text-xl text-white/70 font-light text-left mt-6">
            She advocates strongly for comprehensive well-being and student mental health across her massive campuses.
          </p>
        </div>
      </SlideWrapper>

      {/* SLIDE 14 */}
      <SlideWrapper className="bg-[url('/images/asthetic-backgrounds.jpg')] bg-cover bg-center bg-no-repeat before:content-[''] before:absolute before:inset-0 before:bg-black/80">
        <div className="text-center max-w-5xl mx-auto space-y-8 relative z-10">
          <h2 className="font-playfair text-5xl text-white">National Sahodaya Influence</h2>
          <p className="font-inter text-lg text-[#d4af37]/80 font-light leading-relaxed mb-12">
            Serving as the Treasurer for the Mumbai Sahodaya School Complex, she was a vital member of the core coordinating committee orchestrating the 29th National Annual Conference at The Westin Mumbai, focusing on the fusion of ancient Gurukul wisdom with cutting-edge technology, aligning seamlessly with the NEP 2020.
          </p>
        </div>
      </SlideWrapper>

      {/* SLIDE 15 */}
      <SlideWrapper className="bg-[url('/images/asthetic-backgrounds.jpg')] bg-cover bg-center bg-no-repeat before:content-[''] before:absolute before:inset-0 before:bg-black/80">
        <div className="text-center max-w-6xl mx-auto space-y-6 relative z-10">
          <h2 className="font-playfair text-5xl text-white mb-6">Awards & Recognitions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            {[
              { year: "2024", title: "IFIP Inclusion Award Recognition", image: "ifip award.jfif" },
              { year: "2023-24", title: "No. 1 CBSE School (Co-curricular)", image: "award_trophy.png" },
              { year: "2022", title: "Star Rating Schools Award", image: "star rating award.jfif" },
              { year: "2021", title: "Global Youth Leadership Award (Nepal)", image: "youth leaderdhip.png" },
              { year: "2021", title: "Dr A.P.J. Abdul Kalam Int. Award", image: "apj kalam.jfif" },
              { year: "2021", title: "Education World Jury Award", image: "education.jfif" },
              { year: "2020", title: "5-Star Rating Award (CED)", image: "5 star award.jfif" },
              { year: "2020 & 2021", title: "Two Guinness World Records", image: "guiness orld records.jpg" }
            ].map((a, i) => (
              <div key={i} className="flex flex-col p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#d4af37]/50 transition-all group overflow-hidden">
                <div className="w-full aspect-[4/3] mb-4 rounded-lg overflow-hidden bg-black/40 border border-white/5 relative">
                  <img src={`/images/${a.image}`} alt={a.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="mt-auto">
                  <div className="text-[#d4af37] text-xs font-bold mb-1 tracking-wider">{a.year}</div>
                  <div className="text-white text-sm font-playfair leading-tight">{a.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SlideWrapper>

      <ChapterNavigation />
    </main>
  );
}
