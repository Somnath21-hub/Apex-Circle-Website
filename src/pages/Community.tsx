import { useRef } from "react";
import { motion } from "motion/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Zap, Users, Globe, Rocket, ArrowUpRight, CheckCircle2, MessageSquare, Heart, Shield, Award } from "lucide-react";
import Magnetic from "@/components/ui/Magnetic";

gsap.registerPlugin(ScrollTrigger);

const paths = [
  { title: "Member", desc: "Join the core protocol and participate in community governance.", icon: Users },
  { title: "Volunteer", desc: "Help organize operations and support community growth.", icon: Heart },
  { title: "Mentor", desc: "Share your technical expertise with the next generation.", icon: Award },
  { title: "Sponsor", desc: "Back the protocol and gain visibility in the ecosystem.", icon: Zap },
  { title: "Partner", desc: "Collaborate on large-scale infrastructure projects.", icon: Globe },
  { title: "Ambassador", desc: "Represent Apex Circle at your campus or local hub.", icon: Rocket },
];

export default function Community() {
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
    <div ref={containerRef} className="pt-32 md:pt-48 pb-24 md:pb-32 px-6">
      {/* Hero Section */}
      <section className="mb-24 md:mb-48">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-primary font-mono text-sm mb-8 block tracking-widest uppercase">// Join_The_Circle</span>
          <h1 className="text-5xl sm:text-7xl md:text-[10rem] lg:text-[12rem] font-brutal tracking-tighter leading-[0.8] uppercase mb-8 md:mb-12">
            The <br /> <span className="text-primary">Community</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed">
            Apex Circle is a decentralized collective of architects, engineers, and visionaries building the future of the internet. Join us in our mission to deploy next-generation protocols.
          </p>
        </div>
      </section>

      {/* Paths Section */}
      <section className="mb-24 md:mb-48">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {paths.map((path, i) => (
              <div key={i} className="group p-8 md:p-12 border border-white/10 bg-white/[0.02] hover:border-primary transition-all duration-500">
                <path.icon className="text-primary mb-6 md:mb-8 group-hover:scale-110 transition-transform" size={28} md:size={32} />
                <h3 className="text-3xl md:text-4xl font-brutal uppercase tracking-tighter mb-4">{path.title}</h3>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-8">{path.desc}</p>
                <Magnetic strength={0.3}>
                  <button className="text-[10px] font-black uppercase tracking-widest text-white group-hover:text-primary transition-colors flex items-center gap-2">
                    Apply Now <ArrowUpRight size={14} />
                  </button>
                </Magnetic>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-24 md:mb-48 py-24 md:py-32 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <div>
            <span className="text-primary font-mono text-sm mb-6 md:mb-8 block tracking-widest uppercase">// Protocol_Benefits</span>
            <h2 className="text-4xl md:text-7xl font-brutal tracking-tighter leading-none uppercase mb-8 md:mb-12">
              Why <span className="text-slate-500">Join</span> Us?
            </h2>
            <div className="space-y-6 md:space-y-8">
              {[
                "Access to exclusive protocol documentation and research.",
                "Networking with elite engineers and industry leaders.",
                "Priority access to hackathons and community events.",
                "Opportunities for internships and full-time roles.",
                "Direct impact on the future of decentralized systems."
              ].map((benefit, i) => (
                <div key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="text-primary shrink-0 mt-1" size={18} md:size={20} />
                  <p className="text-lg md:text-xl text-slate-300 font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden border border-white/10">
            <img 
              src="https://picsum.photos/seed/community/800/800" 
              alt="Community"
              className="w-full h-full object-cover grayscale"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
          </div>
        </div>
      </section>

      {/* Guidelines Section */}
      <section className="mb-24 md:mb-48 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <Shield className="text-primary mx-auto mb-6 md:mb-8" size={32} md:size={48} />
          <h2 className="text-3xl md:text-6xl font-brutal tracking-tighter uppercase mb-6 md:mb-8">Community <span className="text-slate-500">Guidelines</span></h2>
          <p className="text-base md:text-lg text-slate-500 leading-relaxed mb-8 md:mb-12">
            We maintain a high-trust environment focused on radical transparency and mutual respect. All members are expected to adhere to our core protocol guidelines.
          </p>
          <button className="text-[10px] font-black uppercase tracking-widest text-primary hover:text-white transition-colors border-b border-primary pb-1">
            Read Full Guidelines
          </button>
        </div>
      </section>

      {/* Application Form Placeholder */}
      <section className="px-6">
        <div className="max-w-3xl mx-auto border border-white/10 p-8 md:p-24 bg-white/[0.02]">
          <h2 className="text-3xl md:text-6xl font-brutal tracking-tighter uppercase mb-8 md:mb-12 text-center">Operation <span className="text-primary">Enlistment</span></h2>
          <form className="space-y-6 md:space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Full Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 px-6 py-4 text-xs font-black uppercase tracking-widest focus:outline-none focus:border-primary transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Email Address</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 px-6 py-4 text-xs font-black uppercase tracking-widest focus:outline-none focus:border-primary transition-colors" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Path Selection</label>
              <select className="w-full bg-white/5 border border-white/10 px-6 py-4 text-xs font-black uppercase tracking-widest focus:outline-none focus:border-primary transition-colors appearance-none">
                <option className="bg-black">Member</option>
                <option className="bg-black">Volunteer</option>
                <option className="bg-black">Mentor</option>
                <option className="bg-black">Sponsor</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Why Apex Circle?</label>
              <textarea rows={4} className="w-full bg-white/5 border border-white/10 px-6 py-4 text-xs font-black uppercase tracking-widest focus:outline-none focus:border-primary transition-colors resize-none" />
            </div>
            <Magnetic strength={0.3}>
              <button className="w-full bg-primary text-black px-12 py-6 font-black uppercase tracking-widest text-sm hover:scale-[1.02] transition-transform">
                Submit Application
              </button>
            </Magnetic>
          </form>
        </div>
      </section>
    </div>
  );
}
