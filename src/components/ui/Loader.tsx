import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [percent, setPercent] = useState(0);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setComplete(true);
            setTimeout(onComplete, 1000);
          }, 500);
          return 100;
        }
        const diff = Math.random() * 12;
        return Math.min(prev + diff, 100);
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!complete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.5,
            filter: 'brightness(5) blur(40px)',
            transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] }
          }}
          className="fixed inset-0 z-[9999] bg-[#030014] flex items-center justify-center overflow-hidden"
        >
          {/* Animated Solar Backdrop */}
          <motion.div 
            className="absolute inset-0 pointer-events-none"
            animate={{ 
              background: [
                `radial-gradient(circle at center, rgba(250, 204, 21, 0.05) 0%, transparent 50%)`,
                `radial-gradient(circle at center, rgba(234, 88, 12, 0.1) 0%, transparent 70%)`
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
          />

          {/* Holographic Grid Background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#facc1522_1px,transparent_1px),linear-gradient(to_bottom,#facc1522_1px,transparent_1px)] bg-[size:50px_50px]" />
          </div>

          <div className="relative z-10">
            {/* SVG Progress Ring (Yellow/Orange Glow) */}
            <svg className="w-72 h-72 md:w-96 md:h-96 -rotate-90 filter drop-shadow-[0_0_20px_rgba(250,204,21,0.3)]">
              <circle
                cx="50%"
                cy="50%"
                r="45%"
                stroke="#facc15"
                strokeWidth="1"
                fill="transparent"
                className="opacity-5"
              />
              <motion.circle
                cx="50%"
                cy="50%"
                r="45%"
                stroke="url(#solarGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                fill="transparent"
                strokeDasharray="100 100"
                initial={{ strokeDashoffset: 100 }}
                animate={{ 
                  strokeDashoffset: 100 - percent,
                  filter: [
                    "drop-shadow(0 0 10px rgba(250,204,21,0.6))",
                    "drop-shadow(0 0 25px rgba(234,88,12,0.9))",
                    "drop-shadow(0 0 10px rgba(250,204,21,0.6))"
                  ]
                }}
                transition={{ 
                  strokeDashoffset: { duration: 0.2, ease: "linear" },
                  filter: { duration: 1.5, repeat: Infinity }
                }}
              />
              <defs>
                <linearGradient id="solarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#facc15" />
                  <stop offset="100%" stopColor="#ea580c" />
                </linearGradient>
              </defs>
            </svg>

            {/* Percentage Counter (Gold/White Glow) */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <motion.div 
                className="text-7xl md:text-9xl font-poppins font-black text-white tracking-tighter tabular-nums flex items-baseline gap-1"
                animate={{ 
                  textShadow: [
                    "0 0 20px rgba(250,204,21,0.4)",
                    "0 0 40px rgba(250,204,21,0.8)",
                    "0 0 20px rgba(250,204,21,0.4)"
                  ]
                }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                {Math.round(percent)}
                <span className="text-3xl md:text-4xl text-[#facc15] font-black">%</span>
              </motion.div>
              
              {/* Animated "HERE WE GO" text */}
              <motion.div 
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-poppins text-[12px] md:text-sm text-[#facc15] font-bold tracking-[0.6em] uppercase mt-4"
                style={{ textShadow: '0 0 15px rgba(250,204,21,0.6)' }}
              >
                here we go
              </motion.div>
            </div>
          </div>

          {/* Electric Scanline & Noise Overlay */}
          <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] blend-overlay" />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-[#facc15]/40 animate-scan-line shadow-[0_0_15px_#facc15]" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
