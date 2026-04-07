import { motion } from 'motion/react';
import { Linkedin, Globe, ExternalLink } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: {
    name: string;
    role: string;
    text: string;
    image: string;
    linkedin?: string;
    website?: string;
    company?: string;
  };
  active?: boolean;
  scale?: number;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div
      className={`group relative bg-[#0a1233]/60 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-tertiary transition-all duration-700 overflow-hidden hover:-translate-y-2 flex flex-col h-full`}
    >
      {/* Core Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-1000 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-tertiary/20 via-transparent to-transparent pointer-events-none z-0" />

      {/* Image Section */}
      <div className="aspect-[16/10] overflow-hidden relative">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ease-out grayscale group-hover:grayscale-0"
          referrerPolicy="no-referrer"
        />

        {/* Social & Website Icons Overlay (Bottom-Left) */}
        <div className="absolute bottom-2 left-2 z-20 flex gap-2">
          {testimonial.linkedin && (
            <a
              href={testimonial.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-black/60 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center hover:bg-[#0077b5] hover:text-white hover:scale-110 transition-all group/li"
            >
              <Linkedin size={14} />
            </a>
          )}
          {testimonial.website && (
            <a
              href={testimonial.website}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 bg-black/60 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center hover:bg-tertiary hover:text-black hover:scale-110 transition-all group/web"
            >
              <Globe size={14} />
            </a>
          )}
        </div>

        {/* Glitch Overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-tertiary animate-glitch-line opacity-50" />
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-tertiary animate-glitch-line-delayed opacity-50" />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 relative z-10 flex-1 flex flex-col">
        <div className="flex flex-col gap-0.5 mb-3">
          <h3 className="text-xl font-montserrat font-black tracking-tighter uppercase text-flame transition-all duration-500">
            {testimonial.name}
          </h3>
          <div className="flex items-center gap-2 font-montserrat font-black uppercase tracking-[0.1em] text-[8px]">
            <span className="text-slate-400">{testimonial.role}</span>
            <span className="text-tertiary/60">@</span>
            <span className="text-tertiary/90 shadow-sm">{testimonial.company || "Collective"}</span>
          </div>
        </div>

        <p className="text-slate-400 text-xs italic line-clamp-2 mb-4 flex-grow leading-relaxed">
          "{testimonial.text}"
        </p>

        {/* Subtle decorative line */}
        <div className="mt-auto w-full h-[1px] bg-white/5 group-hover:bg-tertiary/30 transition-all duration-700" />
      </div>
    </div>
  );
}
