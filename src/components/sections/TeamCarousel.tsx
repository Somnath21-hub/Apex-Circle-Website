import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TeamMember } from '@/types';
import TeamCard from '@/components/cards/TeamCard';

interface TeamCarouselProps {
  members: TeamMember[];
}

export default function TeamCarousel({ members }: TeamCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % members.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + members.length) % members.length);
  };

  // Indices to display (prev, current, next)
  const getVisibleIndices = () => {
    const prevIndex = (currentIndex - 1 + members.length) % members.length;
    const nextIndex = (currentIndex + 1) % members.length;
    return [prevIndex, currentIndex, nextIndex];
  };

  const visibleIndices = getVisibleIndices();

  return (
    <div className="relative w-full max-w-6xl mx-auto py-6 px-4">
      {/* Carousel Wrapper */}
      <div className="relative h-[450px] md:h-[550px] flex items-center justify-center overflow-visible">
        <AnimatePresence initial={false} mode="popLayout">
          {members.map((member, index) => {
            const isCenter = index === currentIndex;
            const isVisible = visibleIndices.includes(index);
            
            if (!isVisible) return null;

            // Determine position: left, center, or right
            let position = 0; // center
            if (index === (currentIndex - 1 + members.length) % members.length) position = -1; // left
            if (index === (currentIndex + 1) % members.length) position = 1; // right

            return (
              <motion.div
                key={member.id}
                initial={{ 
                  opacity: 0, 
                  scale: 0.8, 
                  x: position * 300,
                  zIndex: 0 
                }}
                animate={{ 
                  opacity: isCenter ? 1 : 0.4,
                  scale: isCenter ? 1.05 : 0.85,
                  x: position * 300,
                  zIndex: isCenter ? 20 : 10,
                  transition: { duration: 0.6, ease: [0.32, 0.72, 0, 1] }
                }}
                exit={{ 
                  opacity: 0, 
                  scale: 0.7, 
                  x: position * 400,
                  zIndex: 0 
                }}
                className="absolute w-[240px] md:w-[300px]"
              >
                <TeamCard 
                  member={member} 
                  active={isCenter} 
                  scale={0.85}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-2 md:px-8 pointer-events-none z-30">
        <button
          onClick={prev}
          className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white transition-all pointer-events-auto hover:scale-110 active:scale-95 group"
          aria-label="Previous Team Member"
        >
          <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
        </button>
        <button
          onClick={next}
          className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white transition-all pointer-events-auto hover:scale-110 active:scale-95 group"
          aria-label="Next Team Member"
        >
          <ChevronRight className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-3 mt-6">
        {members.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 transition-all duration-500 rounded-full ${
              index === currentIndex ? 'w-12 bg-tertiary shadow-[0_0_10px_rgba(56,189,248,0.5)]' : 'w-3 bg-white/20'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
