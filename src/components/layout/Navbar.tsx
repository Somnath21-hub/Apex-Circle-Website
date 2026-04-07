import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Hexagon, Zap, Send } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },

  // 👇 Discovery & Trust
  { name: 'About', path: '/about' },
  { name: 'Community', path: '/community' },

  // 👇 Engagement
  { name: 'Events', path: '/events' },

  // 👇 Proof / Work
  { name: 'Gallery', path: '/gallery' },

  // 👇 People (last)
  { name: 'Team', path: '/team' },
];

import apexLogo from '@/assets/Image/logo.jpeg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-500 px-6 py-8',
        scrolled ? 'py-4' : 'py-8',
      )}
    >
      <div
        className={cn(
          'max-w-[98%] mx-auto flex items-center justify-between transition-all duration-700 px-4 sm:px-5 py-4 md:py-5 rounded-2xl relative overflow-hidden',
          scrolled
            ? 'bg-black/60 backdrop-blur-3xl border border-white/[0.15] shadow-[0_0_30px_rgba(79,142,247,0.2)] before:absolute before:inset-x-0 before:bottom-0 before:h-[2px] before:bg-gradient-to-r before:from-transparent before:via-primary/70 before:to-transparent'
            : 'bg-transparent border border-transparent',
        )}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.12),transparent_70%)] opacity-0 transition-opacity duration-700" style={{ opacity: scrolled ? 1 : 0 }} />
        
        <Link to="/" className="flex items-center gap-3 group shrink-0 relative z-10">
          <div className="relative w-16 h-16 rounded-full flex items-center justify-center transition-transform group-hover:scale-105">
            {/* Thick Glossy Rotating Border - Yellow Highlight */}
            <div className="absolute inset-0 rounded-full p-[4.5px] animate-[spin-slow_4s_linear_infinite] bg-gradient-to-r from-transparent via-[#FFD700] to-transparent shadow-[0_0_20px_rgba(255,215,0,0.4)]" />
            <div className="absolute inset-[4.5px] bg-black rounded-full" />
            
            <div className="relative w-full h-full rounded-full flex items-center justify-center overflow-hidden border border-white/10 z-10 scale-[0.85]">
              <img 
                src={apexLogo} 
                alt="Apex Circle" 
                className="w-full h-full object-contain scale-125"
              />
              {/* Internal Glossy Shimmer */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </div>
          </div>
          <span 
            className="text-[20px] md:text-[22px] lg:text-[26px] uppercase tracking-[0.3em] hidden sm:flex text-white font-poppins font-black hover:animate-[gentle-shake_0.2s_ease-in-out_infinite]" 
          >
            {"APEX CIRCLE".split("").map((char, i) => (
              <span 
                key={i} 
                className="inline-block transition-all duration-300 hover:text-primary hover:drop-shadow-[0_0_8px_rgba(79,142,247,0.8)]"
                style={{ 
                  animation: `writing-char 4s ease-in-out infinite`,
                  animationDelay: `${i * 0.1}s`,
                  minWidth: char === " " ? "0.4em" : "auto"
                }}
              >
                {char}
              </span>
            ))}
          </span>
          <span 
            className="text-[18px] uppercase tracking-widest sm:hidden flex text-white font-poppins font-bold" 
          >
            {"APEX".split("").map((char, i) => (char === " " ? "\u00A0" : char))}
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'relative text-[12px] xl:text-[14px] font-poppins font-black uppercase tracking-[0.2em] transition-all hover:text-white whitespace-nowrap group py-3',
                location.pathname === link.path 
                  ? 'text-primary drop-shadow-[0_0_8px_rgba(79,142,247,0.5)]' 
                  : 'text-slate-300',
              )}
            >
              <span className="relative z-10">{link.name}</span>
              <span className={cn(
                "absolute -bottom-0 left-1/2 w-1.5 h-1.5 rounded-full transition-all duration-300 -translate-x-1/2",
                location.pathname === link.path 
                  ? "bg-primary shadow-[0_0_12px_rgba(0,255,0,0.9)] opacity-100 bottom-1" 
                  : "bg-white opacity-0 group-hover:opacity-100 bottom-3 group-hover:bottom-1"
              )} />
            </Link>
          ))}
          <div className="w-px h-6 bg-white/10 mx-2 xl:mx-4" />
          <Link
            to="/contact"
            className="flex items-center gap-2 text-[14px] xl:text-[16px] font-poppins font-black uppercase tracking-[0.2em] text-white hover:text-primary transition-all whitespace-nowrap group bg-white/5 px-4 py-2 rounded-full border border-white/10 hover:border-primary/50 hover:shadow-[0_0_15px_rgba(79,142,247,0.3)]"
          >
            <span>Connect</span>
            <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          <Link
            to="/contact"
            className="text-[12px] font-poppins font-black uppercase tracking-widest text-primary border border-primary/20 px-4 py-2 rounded-full hover:bg-primary hover:text-black transition-all shadow-[0_0_10px_rgba(79,142,247,0.2)]"
          >
            Join
          </Link>
          <button
            className="text-white p-2 hover:bg-white/5 rounded-full transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[-1] bg-black/95 backdrop-blur-2xl lg:hidden flex flex-col pt-32 px-6 pb-12 overflow-y-auto"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.path}
                    className={cn(
                      'text-[38px] sm:text-[50px] font-poppins font-black uppercase tracking-tighter transition-all block py-2',
                      location.pathname === link.path
                        ? 'text-primary drop-shadow-[0_0_12px_rgba(79,142,247,0.6)]'
                        : 'text-slate-700 hover:text-white',
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="mt-8 pt-8 border-t border-white/10"
              >
                <Link
                  to="/contact"
                  className="bg-primary text-black font-poppins font-black uppercase tracking-widest text-[16px] py-5 rounded-none text-center block hover:scale-[1.02] active:scale-[0.98] transition-transform shadow-[0_0_20px_rgba(79,142,247,0.3)]"
                >
                  Initialize Connection
                </Link>
              </motion.div>
            </div>

            <div className="mt-auto pt-12 flex justify-between items-center">
              <div className="text-[12px] font-poppins font-black uppercase tracking-widest text-slate-500">
                © 2026 APEX CIRCLE
              </div>
              <div className="flex gap-4">
                {['TW', 'GH', 'LI'].map((s) => (
                  <span
                    key={s}
                    className="text-[12px] font-poppins font-black uppercase tracking-widest text-slate-500 hover:text-primary cursor-pointer transition-colors"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
