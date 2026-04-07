import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Code, Users, Zap, Globe, Rocket } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import apexLogo from '@/assets/Image/logo.png';
import awsLogo from '@/company/aws.jpeg';
import boltLogo from '@/company/bolt.jpeg';
import ccraftersLogo from '@/company/ccrafters.jpeg';
import decoludLogo from '@/company/decolud.png';
import dmvLogo from '@/company/dmv.jpeg';
import dodoLogo from '@/company/dodo.png';
import dualityLogo from '@/company/duality.jpeg';
import elapseLogo from '@/company/elapse.jpeg';
import ibuddyLogo from '@/company/ibuddy.jpeg';
import keployLogo from '@/company/keploy.jpeg';
import lovLogo from '@/company/lov.jpeg';
import n89lttttLogo from '@/company/n89ltttt.jpeg';
import nomoexLogo from '@/company/nomoex.png';
import osenLogo from '@/company/osen.jpeg';
import oxLogo from '@/company/ox.jpeg';
import tdoLogo from '@/company/tdo.png';
import tiLogo from '@/company/ti.png';
import traeLogo from '@/company/trae.jpeg';
import unibLogo from '@/company/unib.jpeg';

import Magnetic from '@/components/ui/Magnetic';

const brands = [
  { name: 'Nomoex', logo: nomoexLogo },
  { name: 'Decolud', logo: decoludLogo },
  { name: 'TDO', logo: tdoLogo },
  { name: 'AWS', logo: awsLogo },
  { name: 'TI', logo: tiLogo },
  { name: 'Bolt', logo: boltLogo },
  { name: 'CodeCrafters', logo: ccraftersLogo },
  { name: 'DMV', logo: dmvLogo },
  { name: 'Dodo', logo: dodoLogo },
  { name: 'Duality', logo: dualityLogo },
  { name: 'Elapse', logo: elapseLogo },
  { name: 'iBuddy', logo: ibuddyLogo },
  { name: 'Keploy', logo: keployLogo },
  { name: 'Lov', logo: lovLogo },
  { name: 'N89', logo: n89lttttLogo },
  { name: 'Osen', logo: osenLogo },
  { name: 'Ox', logo: oxLogo },
  { name: 'Trae', logo: traeLogo },
  { name: 'Unib', logo: unibLogo },
];

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
      className="relative h-screen min-h-[700px] flex flex-col items-center justify-between pt-24 overflow-hidden bg-background"
    >
      {/* 3D Moving Perspective Grid Box */}
      <div className="absolute -bottom-1/2 -left-1/2 -right-1/2 h-[200%] z-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(transparent 95%, rgba(151,125,255,0.4)), linear-gradient(90deg, transparent 95%, rgba(151,125,255,0.4))',
          backgroundSize: '50px 50px',
          animation: 'aiGridMove 10s linear infinite',
        }}
      />

      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] animate-pulse delay-1000 pointer-events-none" />

      {/* Moving Retro Creature */}
      <div className="absolute bottom-10 left-0 z-[100]" style={{ animation: 'walkAcross 20s linear infinite' }}>
        <div className="relative">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_0_15px_rgba(0,51,255,0.8)]">
            <rect x="7" y="4" width="10" height="10" rx="3" fill="#0033FF" />
            <rect x="9" y="6" width="6" height="3" fill="#977DFF" />
            <rect x="8" y="14" width="3" height="4" fill="#0033FF" />
            <rect x="13" y="14" width="3" height="4" fill="#0033FF" />
            <circle cx="10" cy="7.5" r="0.5" fill="white" />
            <circle cx="14" cy="7.5" r="0.5" fill="white" />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center flex-1 flex flex-col justify-center items-center">
        {/* original Badge - zooms in first */}
        <div
          className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-5 py-2 mb-8 backdrop-blur-md"
          style={{ animation: 'badgeZoom 0.9s cubic-bezier(0.34,1.56,0.64,1) both', animationDelay: '0s' }}
        >
          <Sparkles className="text-[#4F8EF7]" size={14} />
          <span className="text-[14px] sm:text-[16px] font-bold tracking-[0.18em] uppercase text-slate-200">
            India&apos;s Leading Tech Community
          </span>
          <Sparkles className="text-[#7C6FE0]" size={14} />
        </div>

        {/* Letter-drop hero title — original "LIMITS" */}
        {(() => {
          const words = [
            { text: 'BUILD', color: 'text-white' },
            { text: 'BEYOND', color: 'gradient-word' },
            { text: 'LIMITS', color: 'text-white' },
          ];
          let globalIdx = 0;
          const totalLetters = 17; // BUILD(5) + BEYOND(6) + LIMITS(6)
          const stagger = 0.12;
          const dropDuration = 1.4;
          const badgeDelay = 1.1; 
          const glossyStart = badgeDelay + 0.05 + (totalLetters - 1) * stagger + dropDuration;
          return (
            <h1 className="relative text-5xl sm:text-7xl md:text-8xl lg:text-[9.5rem] font-brutal leading-tight mb-8 uppercase tracking-wider drop-shadow-2xl flex flex-col md:flex-row gap-3 md:gap-6 justify-center">
              {words.map((word) => (
                <span key={word.text} className="inline-flex">
                  {word.text.split('').map((letter) => {
                    const idx = globalIdx++;
                    const delay = `${0.05 + idx * stagger}s`;
                    return (
                      <span
                        key={idx}
                        className={word.color === 'gradient-word'
                          ? 'inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#4F8EF7] via-[#7C6FE0] to-[#38BDF8]'
                          : 'inline-block text-white'}
                        style={{
                          animation: `letterDrop ${dropDuration}s cubic-bezier(0.22,1,0.36,1) both`,
                          animationDelay: `${badgeDelay + parseFloat(delay)}s`,
                        }}
                      >{letter}</span>
                    );
                  })}
                </span>
              ))}
              {/* Shimmer sweep */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  background: 'linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.22) 50%, transparent 80%)',
                  backgroundSize: '250% 100%',
                  animation: `glossySweep 2.4s ease-in-out ${glossyStart.toFixed(2)}s infinite`,
                }}
              />
            </h1>
          );
        })()}

        {/* CTA Boxes */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-10"
          style={{ animation: 'slideUpFade 0.8s cubic-bezier(0.22,1,0.36,1) both', animationDelay: '0.7s' }}
        >
          {/* Box 1 — Join our Crew */}
          <div className="group relative px-8 py-5 min-w-[200px] text-center cursor-pointer rounded-xl border border-[#4F8EF7]/40 bg-[#4F8EF7]/5 backdrop-blur-md transition-all duration-500 hover:border-[#4F8EF7]/80 hover:bg-[#4F8EF7]/10"
            style={{ boxShadow: '0 0 18px rgba(79,142,247,0.15), inset 0 0 12px rgba(79,142,247,0.05)', animation: 'glowPulseBlue 3s ease-in-out infinite' }}
          >
            <div className="flex items-center justify-center gap-2">
              <Users className="text-[#4F8EF7]" size={16} />
              <span className="text-sm font-bold uppercase tracking-widest text-white">Join Our Crew</span>
            </div>
            <p className="text-xs text-slate-400 mt-1">Become a member</p>
          </div>

          {/* Box 2 — View More Details */}
          <div className="group relative px-8 py-5 min-w-[200px] text-center cursor-pointer rounded-xl border border-[#7C6FE0]/40 bg-[#7C6FE0]/5 backdrop-blur-md transition-all duration-500 hover:border-[#7C6FE0]/80 hover:bg-[#7C6FE0]/10"
            style={{ boxShadow: '0 0 18px rgba(124,111,224,0.15), inset 0 0 12px rgba(124,111,224,0.05)', animation: 'glowPulseViolet 3s ease-in-out 1.5s infinite' }}
          >
            <div className="flex items-center justify-center gap-2">
              <Globe className="text-[#7C6FE0]" size={16} />
              <span className="text-sm font-bold uppercase tracking-widest text-white">View More Details</span>
            </div>
            <p className="text-xs text-slate-400 mt-1">Explore what we do</p>
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          style={{ animation: 'slideUpFade 0.8s cubic-bezier(0.22,1,0.36,1) both', animationDelay: '0.9s' }}
        >
          <Magnetic strength={0.3}>
            <button className="hero-btn group relative px-10 py-4 bg-[#4F8EF7] text-white font-black uppercase tracking-widest text-sm rounded-none overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_24px_rgba(79,142,247,0.4)]">
              <span className="relative z-10 flex items-center gap-2">
                Join Protocol <ArrowRight size={18} />
              </span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
          </Magnetic>
          <Magnetic strength={0.3}>
            <button className="hero-btn px-10 py-4 border border-white/10 text-white font-black uppercase tracking-widest text-sm rounded-none hover:bg-white/5 transition-all active:scale-95">
              View Archives
            </button>
          </Magnetic>
        </div>
      </div>

      {/* Marquee */}
      <div className="w-full border-y border-white/5 bg-white/[0.01] backdrop-blur-sm mt-auto overflow-hidden">
        <div className="marquee-content animate-marquee-reverse">
          {[...brands, ...brands].map((brand, idx) => (
            <img
              key={`${brand.name}-${idx}`}
              src={brand.logo}
              alt={brand.name}
              className="h-14 w-auto shrink-0 mx-0.5 transition-all duration-300 cursor-pointer object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
