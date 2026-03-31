import { useRef } from "react";
import { motion } from "motion/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, MapPin, Briefcase, Clock, Zap } from "lucide-react";
import Magnetic from "@/components/ui/Magnetic";
import { JobOpening } from "@/types";

gsap.registerPlugin(ScrollTrigger);

const jobs: JobOpening[] = [
  {
    id: "j1",
    title: "Protocol Engineer",
    type: "Full-time",
    location: "Remote / SF",
    category: "Engineering",
    desc: "Build and maintain core decentralized protocols and infrastructure."
  },
  {
    id: "j2",
    title: "Community Architect",
    type: "Full-time",
    location: "Remote",
    category: "Operations",
    desc: "Design and scale decentralized community governance models."
  },
  {
    id: "j3",
    title: "Technical Intern",
    type: "Internship",
    location: "Hybrid",
    category: "Engineering",
    desc: "Work alongside elite engineers on high-intensity protocol deployments."
  }
];

export default function Careers() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".job-card", {
      scrollTrigger: {
        trigger: ".job-card",
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
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 md:mb-32">
          <span className="text-primary font-mono text-sm mb-4 block tracking-widest uppercase">// Protocol_Recruitment</span>
          <h1 className="text-5xl sm:text-7xl md:text-[10rem] lg:text-[12rem] font-brutal tracking-tighter leading-[0.8] uppercase mb-8 md:mb-12">
            The <br /> <span className="text-slate-500">Board</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl leading-relaxed">
            Join the elite collective of architects and visionaries building the next generation of decentralized systems.
          </p>
        </header>

        <div className="space-y-6 md:space-y-8">
          {jobs.map((job) => (
            <div key={job.id} className="job-card group p-8 md:p-12 border border-white/10 bg-white/[0.02] hover:border-primary transition-all duration-500 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
              <div className="flex-1 w-full">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                  <h3 className="text-3xl md:text-4xl font-brutal tracking-tighter uppercase group-hover:text-primary transition-colors">{job.title}</h3>
                  <span className="w-fit text-[10px] font-black px-3 py-1 border border-white/20 text-slate-500 group-hover:border-primary group-hover:text-primary transition-colors">{job.type}</span>
                </div>
                <p className="text-slate-500 max-w-xl leading-relaxed mb-6 text-sm md:text-base">{job.desc}</p>
                <div className="flex flex-wrap items-center gap-6 text-[10px] font-black uppercase tracking-widest text-slate-600">
                  <div className="flex items-center gap-2"><MapPin size={12} /> {job.location}</div>
                  <div className="flex items-center gap-2"><Briefcase size={12} /> {job.category}</div>
                </div>
              </div>
              <Magnetic strength={0.3}>
                <button className="w-full md:w-auto bg-primary text-black px-12 py-6 font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform flex items-center justify-center gap-4">
                  Initialize Application <ArrowUpRight size={18} />
                </button>
              </Magnetic>
            </div>
          ))}
        </div>

        <div className="mt-24 md:mt-48 py-24 md:py-32 border-t border-white/5 text-center">
          <Zap className="text-primary mx-auto mb-8" size={32} md:size={48} />
          <h2 className="text-3xl md:text-6xl font-brutal tracking-tighter uppercase mb-8">Don't see your <span className="text-slate-500">Role?</span></h2>
          <p className="text-lg text-slate-500 leading-relaxed mb-12 max-w-2xl mx-auto">
            We're always looking for exceptional talent. If you're an elite architect or visionary, send us your protocol proposal.
          </p>
          <button className="text-[10px] font-black uppercase tracking-widest text-primary hover:text-white transition-colors border-b border-primary pb-1">
            Send Open Proposal
          </button>
        </div>
      </div>
    </div>
  );
}
