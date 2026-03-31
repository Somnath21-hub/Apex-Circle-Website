import Magnetic from '@/components/ui/Magnetic'
import { ArrowUpRight, Github, Linkedin } from 'lucide-react'
import React from 'react'

const Developer = () => {
  return (
    
         <section className="py-32 md:py-56 px-6 bg-black relative overflow-hidden border-t border-white/5">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto">
          <div className="section-header mb-20 md:mb-32">
            <span className="text-primary font-mono text-sm mb-6 block tracking-widest uppercase">// Built_By</span>
            <h2 className="text-6xl md:text-[10rem] font-brutal tracking-tighter leading-[0.8] uppercase">
              Meet the <span className="text-slate-500">Developer</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="relative group aspect-square max-w-xl mx-auto lg:mx-0 border border-white/10 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] hover:shadow-[0_0_80px_rgba(var(--color-primary-rgb),0.1)] transition-shadow duration-700">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000" 
                alt="Abhishek - Full Stack Developer"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-110 group-hover:scale-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay opacity-40 group-hover:opacity-0 transition-opacity duration-500" />
              <div className="absolute inset-0 border-[20px] border-black/50 pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Status: Available_For_Hire</span>
              </div>
            </div>

            <div className="space-y-10">
              <div>
                <h3 className="text-5xl md:text-7xl font-brutal uppercase tracking-tighter mb-4">Abhishek</h3>
                <p className="text-primary font-mono text-lg tracking-widest uppercase">Full Stack Developer / MERN Developer</p>
              </div>

              <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-medium max-w-2xl">
                Hi, I'm Abhishek — a passionate full stack developer focused on building scalable, real-world applications. I specialize in MERN stack, system design, and creating impactful developer communities like Apex Circle.
              </p>

              <div className="flex flex-wrap gap-4">
                {['React', 'Node.js', 'MongoDB', 'Express', 'TypeScript', 'Next.js', 'Tailwind'].map((tech) => (
                  <span key={tech} className="px-6 py-2 border border-white/10 bg-white/5 text-[10px] font-black uppercase tracking-widest hover:border-primary hover:text-primary transition-all cursor-default hover:scale-105 transform">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-8 pt-8">
                <div className="flex items-center gap-6">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-4 border border-white/10 hover:border-primary hover:text-primary transition-all group hover:bg-primary/5">
                    <Github size={24} className="group-hover:scale-110 transition-transform" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-4 border border-white/10 hover:border-primary hover:text-primary transition-all group hover:bg-primary/5">
                    <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
                  </a>
                </div>
                
                <Magnetic strength={0.3}>
                  <button className="bg-white text-black px-12 py-6 font-black uppercase tracking-widest text-sm hover:bg-primary transition-colors shadow-2xl flex items-center gap-3 group">
                    View Portfolio <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </Magnetic>
              </div>
              
              <div className="pt-12 border-t border-white/5">
                <p className="text-slate-600 font-mono text-xs tracking-widest uppercase flex items-center gap-2">
                  Built with <span className="text-primary animate-pulse">❤️</span> by Abhishek 
                  <span className="mx-4">|</span>
                  <a href="#" className="hover:text-primary transition-colors underline underline-offset-4">GitHub Contribution</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Developer