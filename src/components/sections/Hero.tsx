import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Code, Users, Zap, Globe, Rocket } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import Magnetic from '@/components/ui/Magnetic';

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.to('.reveal-text span', {
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power4.out',
      })
        .from(
          '.hero-sub',
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
            ease: 'power3.out',
          },
          '-=0.5',
        )
        .from(
          '.hero-btn',
          {
            opacity: 0,
            scale: 0.9,
            duration: 0.6,
            stagger: 0.1,
            ease: 'back.out(1.7)',
          },
          '-=0.4',
        );
    },
    { scope: container },
  );

  return (
    <section
      ref={container}
      className="relative min-h-screen flex flex-col items-center justify-center pt-32 overflow-hidden bg-background"
    >
      {/* Background Grid */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-12 backdrop-blur-md hero-sub">
          <Sparkles className="text-primary" size={14} />
          <span className="text-[10px] font-black tracking-[0.2em] uppercase text-slate-300">
            The Apex Protocol v2.0
          </span>
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-[10rem] lg:text-[12rem] font-brutal leading-[0.85] mb-8 md:mb-12 uppercase tracking-tighter">
          <div className="reveal-text">
            <span>BUILD</span>
          </div>
          <div className="reveal-text">
            <span className="text-primary">BEYOND</span>
          </div>
          <div className="reveal-text">
            <span>LIMITS</span>
          </div>
        </h1>

        <p className="hero-sub text-base sm:text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto mb-10 md:mb-16 leading-tight font-display font-light px-4">
          Architecting the celestial limit of human potential through code, collaboration, and
          radical transparency. Join the elite circle.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-32">
          <Magnetic strength={0.3}>
            <button className="hero-btn group relative px-12 py-5 bg-primary text-black font-black uppercase tracking-widest text-sm rounded-none overflow-hidden transition-all hover:scale-105 active:scale-95">
              <span className="relative z-10 flex items-center gap-2">
                Join Protocol <ArrowRight size={18} />
              </span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </Magnetic>
          <Magnetic strength={0.3}>
            <button className="hero-btn px-12 py-5 border border-white/10 text-white font-black uppercase tracking-widest text-sm rounded-none hover:bg-white/5 transition-all active:scale-95">
              View Archives
            </button>
          </Magnetic>
        </div>
      </div>

      {/* Marquee */}
      <div className="w-full border-y border-white/5 bg-white/[0.01] backdrop-blur-sm mt-auto">
        <div className="marquee-content">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-24 items-center">
              <span className="text-4xl font-brutal opacity-20 hover:opacity-100 transition-opacity cursor-default">
                MICROSOFT
              </span>
              <span className="text-4xl font-brutal opacity-20 hover:opacity-100 transition-opacity cursor-default">
                GOOGLE
              </span>
              <span className="text-4xl font-brutal opacity-20 hover:opacity-100 transition-opacity cursor-default">
                AWS
              </span>
              <span className="text-4xl font-brutal opacity-20 hover:opacity-100 transition-opacity cursor-default">
                VERCEL
              </span>
              <span className="text-4xl font-brutal opacity-20 hover:opacity-100 transition-opacity cursor-default">
                GITHUB
              </span>
              <span className="text-4xl font-brutal opacity-20 hover:opacity-100 transition-opacity cursor-default">
                OPENAI
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
