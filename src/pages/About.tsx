import { motion } from "motion/react";
import { Target, Eye, Heart, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <div className="pt-32 md:pt-48 pb-24 md:pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 md:mb-32">
          <span className="text-primary font-mono text-sm mb-4 block tracking-widest uppercase">
            // The_Manifesto
          </span>
          <h1 className="text-5xl sm:text-7xl md:text-[10rem] lg:text-[12rem] font-brutal tracking-tighter leading-[0.8] uppercase mb-8 md:mb-12">
            Apex <br /> <span className="text-slate-500">Protocol</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl leading-relaxed">
            Apex Circle is a decentralized ecosystem designed to accelerate human potential through technology, collaboration, and radical transparency.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-24 md:mb-48">
          {[
            { icon: Target, title: "Mission", desc: "To empower every developer to build the future they envision.", color: "text-primary" },
            { icon: Eye, title: "Vision", desc: "A world where innovation is accessible to everyone, everywhere.", color: "text-secondary" },
            { icon: Heart, title: "Values", desc: "Transparency, collaboration, and relentless pursuit of excellence.", color: "text-tertiary" },
          ].map((item, i) => (
            <div key={i} className="bg-white/[0.02] border border-white/10 p-8 md:p-12 hover:border-white/30 transition-all group">
              <div className={`w-14 h-14 md:w-16 md:h-16 bg-white/5 flex items-center justify-center mb-6 md:mb-8 ${item.color}`}>
                <item.icon size={28} md:size={32} />
              </div>
              <h3 className="text-2xl md:text-3xl font-brutal tracking-tight mb-4 uppercase">{item.title}</h3>
              <p className="text-slate-500 leading-relaxed text-base md:text-lg">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center mb-24 md:mb-48">
          <div>
            <h2 className="text-4xl md:text-7xl font-brutal tracking-tighter uppercase mb-8 md:mb-12">
              The <span className="text-primary">Genesis</span>
            </h2>
            <div className="space-y-8 md:space-y-12">
              {[
                { year: "2021", title: "The Genesis", desc: "Founded by a group of developers looking for a better way to collaborate." },
                { year: "2022", title: "Global Expansion", desc: "Reached 1,000 members and hosted our first international hackathon." },
                { year: "2023", title: "Apex Ecosystem", desc: "Launched our incubator program and open-source project archives." },
                { year: "2024", title: "The Next Evolution", desc: "Pioneering the future of decentralized community building." },
              ].map((step, i) => (
                <div key={i} className="flex gap-6 md:gap-8 group">
                  <span className="text-primary font-mono text-lg md:text-xl pt-1">[{step.year}]</span>
                  <div>
                    <h4 className="text-xl md:text-2xl font-brutal tracking-tight uppercase mb-2 group-hover:text-primary transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-slate-500 text-sm md:text-base leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square bg-white/[0.02] border border-white/10 p-8 md:p-12 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
            <div className="text-center relative z-10">
              <div className="text-6xl sm:text-8xl md:text-[10rem] font-brutal leading-none text-white/10 mb-4">APEX</div>
              <p className="text-slate-500 font-mono text-xs md:text-sm uppercase tracking-[0.5em]">System_Online</p>
            </div>
          </div>
        </div>

        {/* Impact Section */}
        <section className="mb-24 md:mb-48 py-24 md:py-32 border-y border-white/5 bg-white/[0.01]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            {[
              { label: "Community Members", value: "10k+" },
              { label: "Projects Deployed", value: "500+" },
              { label: "Global Hackathons", value: "25+" },
              { label: "Protocol Partners", value: "100+" },
            ].map((stat, i) => (
              <div key={i} className="group">
                <div className="text-4xl sm:text-5xl md:text-8xl font-brutal tracking-tighter mb-4 group-hover:text-primary transition-colors">{stat.value}</div>
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Partners Section */}
        <section className="mb-24 md:mb-48">
          <div className="text-center mb-16 md:mb-24">
            <span className="text-primary font-mono text-sm mb-4 block tracking-widest uppercase">// Strategic_Alliances</span>
            <h2 className="text-3xl md:text-6xl font-brutal tracking-tighter uppercase">Our <span className="text-slate-500">Partners</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="h-12 md:h-16 border border-white/10 flex items-center justify-center font-brutal text-lg md:text-xl">PARTNER_{i+1}</div>
            ))}
          </div>
        </section>

        <div className="bg-primary text-black p-8 md:p-24 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12">
          <h2 className="text-4xl md:text-7xl font-brutal tracking-tighter uppercase leading-none text-center md:text-left">
            Ready to <br /> <span className="text-black/50">Contribute?</span>
          </h2>
          <button className="w-full md:w-auto bg-black text-white px-12 py-6 font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform flex items-center justify-center gap-4">
            Join the Protocol <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
