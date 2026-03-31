import { useRef } from "react";
import { motion } from "motion/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Zap, Trophy, Users, Calendar, MapPin, ArrowUpRight, CheckCircle2, MessageSquare } from "lucide-react";
import Magnetic from "@/components/ui/Magnetic";

gsap.registerPlugin(ScrollTrigger);

const hackathons = [
  {
    id: "h1",
    title: "Apex Genesis 2026",
    tagline: "Building the Decentralized Future",
    date: "May 15-17, 2026",
    location: "San Francisco / Hybrid",
    image: "https://picsum.photos/seed/hack1/1200/600",
    status: "Registration Open"
  }
];

export default function Hackathons() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".reveal-item", {
      scrollTrigger: {
        trigger: ".reveal-item",
        start: "top 85%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power4.out",
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="pt-32 pb-24">
      {/* Hero Section */}
      <section className="px-6 mb-16 md:mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden border border-white/10 mb-8 md:mb-12">
            <img 
              src={hackathons[0].image} 
              alt={hackathons[0].title}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 right-6">
              <span className="bg-primary text-black text-[10px] font-black uppercase tracking-widest px-3 py-1 mb-4 inline-block">
                {hackathons[0].status}
              </span>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-brutal tracking-tighter leading-none uppercase mb-4">
                {hackathons[0].title}
              </h1>
              <p className="text-lg md:text-xl text-slate-300 font-medium max-w-xl">
                {hackathons[0].tagline}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <div className="p-6 md:p-8 border border-white/10 bg-white/[0.02]">
              <Calendar className="text-primary mb-4" size={24} />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 block mb-2">// Dates</span>
              <div className="text-xl md:text-2xl font-brutal uppercase tracking-tighter">{hackathons[0].date}</div>
            </div>
            <div className="p-6 md:p-8 border border-white/10 bg-white/[0.02]">
              <MapPin className="text-primary mb-4" size={24} />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 block mb-2">// Location</span>
              <div className="text-xl md:text-2xl font-brutal uppercase tracking-tighter">{hackathons[0].location}</div>
            </div>
            <div className="sm:col-span-2 md:col-span-1 flex items-center justify-center p-6 md:p-8 border border-primary bg-primary/5">
              <Magnetic strength={0.3}>
                <button className="w-full md:w-auto bg-primary text-black px-12 py-6 font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform">
                  Register Now
                </button>
              </Magnetic>
            </div>
          </div>
        </div>
      </section>

      {/* About Hackathon */}
      <section className="px-6 mb-24 md:mb-48">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          <div>
            <span className="text-primary font-mono text-sm mb-4 block tracking-widest uppercase">// Mission_Brief</span>
            <h2 className="text-4xl md:text-7xl font-brutal tracking-tighter leading-none uppercase mb-8">
              The <span className="text-slate-500">Genesis</span> Protocol
            </h2>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-12">
              Apex Genesis is more than a hackathon. It's a high-intensity operation to deploy next-generation decentralized systems. We're looking for architects, engineers, and visionaries to push the boundaries of what's possible.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h4 className="text-primary font-black uppercase tracking-widest text-xs mb-4">Problem Statements</h4>
                <ul className="space-y-2 text-sm text-slate-500">
                  <li>• Scalable L2 Solutions</li>
                  <li>• Privacy-Preserving DeFi</li>
                  <li>• Decentralized Identity</li>
                </ul>
              </div>
              <div>
                <h4 className="text-primary font-black uppercase tracking-widest text-xs mb-4">Tracks</h4>
                <ul className="space-y-2 text-sm text-slate-500">
                  <li>• Infrastructure</li>
                  <li>• User Experience</li>
                  <li>• Social Impact</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square bg-white/5 border border-white/10 p-6 md:p-8 flex flex-col justify-end">
              <Trophy className="text-primary mb-4" size={24} md:size={32} />
              <div className="text-2xl md:text-4xl font-brutal tracking-tighter">$50k+</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">Total Prize Pool</div>
            </div>
            <div className="aspect-square bg-white/5 border border-white/10 p-6 md:p-8 flex flex-col justify-end">
              <Users className="text-primary mb-4" size={24} md:size={32} />
              <div className="text-2xl md:text-4xl font-brutal tracking-tighter">500+</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">Participants</div>
            </div>
            <div className="aspect-square bg-white/5 border border-white/10 p-6 md:p-8 flex flex-col justify-end">
              <Zap className="text-primary mb-4" size={24} md:size={32} />
              <div className="text-2xl md:text-4xl font-brutal tracking-tighter">48H</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">Intensive Build</div>
            </div>
            <div className="aspect-square bg-white/5 border border-white/10 p-6 md:p-8 flex flex-col justify-end">
              <MessageSquare className="text-primary mb-4" size={24} md:size={32} />
              <div className="text-2xl md:text-4xl font-brutal tracking-tighter">20+</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">Expert Mentors</div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 mb-24 md:mb-48 py-24 md:py-32 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-5xl md:text-8xl font-brutal tracking-tighter uppercase">Operation <span className="text-primary">Timeline</span></h2>
          </div>
          <div className="space-y-8 md:space-y-12">
            {[
              { time: "09:00 AM", event: "Check-in & Breakfast", date: "Day 1" },
              { time: "11:00 AM", event: "Opening Ceremony", date: "Day 1" },
              { time: "12:00 PM", event: "Hacking Starts", date: "Day 1" },
              { time: "02:00 PM", event: "Workshop: Advanced ZK", date: "Day 2" },
              { time: "12:00 PM", event: "Submission Deadline", date: "Day 3" },
              { time: "04:00 PM", event: "Closing & Awards", date: "Day 3" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-12 border-b border-white/5 pb-8 group hover:border-primary transition-colors">
                <div className="text-xl md:text-2xl font-mono text-slate-500 group-hover:text-primary transition-colors w-32 shrink-0">{item.time}</div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-brutal uppercase tracking-tighter">{item.event}</h3>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">{item.date}</span>
                </div>
                <ArrowUpRight className="text-slate-700 group-hover:text-primary transition-colors hidden sm:block" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="px-6 mb-48">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-primary font-mono text-sm mb-8 block tracking-widest uppercase">// Backed_By</span>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 opacity-50 grayscale">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-12 bg-white/10 rounded flex items-center justify-center font-brutal text-xl">SPONSOR_{i+1}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="px-6">
        <div className="max-w-5xl mx-auto bg-primary p-16 md:p-24 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '24px 24px' }} />
          <h2 className="text-5xl md:text-8xl font-brutal tracking-tighter leading-none text-black uppercase mb-12">
            Ready to <br /> Deploy?
          </h2>
          <Magnetic strength={0.3}>
            <button className="bg-black text-white px-16 py-8 font-black uppercase tracking-widest text-lg hover:scale-105 transition-transform">
              Initialize Registration
            </button>
          </Magnetic>
        </div>
      </section>
    </div>
  );
}
