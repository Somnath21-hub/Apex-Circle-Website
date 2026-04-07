import { motion } from 'motion/react';
import { Twitter, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { TeamMember } from '@/types';
import { Link } from 'react-router-dom';

interface TeamCardProps {
  key?: string | number;
  member: TeamMember;
  index?: number;
  active?: boolean;
  scale?: number;
}

export default function TeamCard({ member, active = true, scale = 1 }: TeamCardProps) {
  return (
    <Link to={`#`} className="block"> 
        <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      animate={{ 
        scale: active ? 1.05 : scale,
        opacity: active ? 1 : 0.4,
        zIndex: active ? 10 : 0
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`group relative bg-[#0a1233]/60 backdrop-blur-xl border ${active ? 'border-tertiary shadow-[0_0_40px_rgba(56,189,248,0.25)]' : 'border-white/10'} rounded-2xl hover:border-tertiary transition-all duration-700 overflow-hidden hover:-translate-y-2 flex flex-col h-full`}
    >
      {/* Dynamic Animated Core Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-1000 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-tertiary/20 via-transparent to-transparent pointer-events-none z-0" />

      {/* Role Badge */}
      <div className="absolute top-4 right-4 z-20">
        <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 text-[8px] font-black uppercase tracking-[0.2em] text-tertiary rounded-full">
          {member.department}
        </span>
      </div>

      <div className="aspect-[4/5] overflow-hidden relative">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 ease-out"
          style={{ objectPosition: member.imagePosition || 'center' }}
          referrerPolicy="no-referrer"
        />

        {/* Glitch Overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-tertiary animate-glitch-line opacity-50" />
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-tertiary animate-glitch-line-delayed opacity-50" />
          <div className="absolute inset-0 bg-tertiary/5 mix-blend-overlay animate-pulse" />
        </div>

        {/* Socials Reveal */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <div className="flex gap-3">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center hover:bg-tertiary hover:text-black hover:scale-110 transition-all"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 relative z-10 flex-1 flex flex-col">
        <div className="flex flex-col gap-1">
          <h3 className="text-2xl md:text-3xl font-montserrat font-black tracking-tighter uppercase text-flame transition-all duration-500">
            {member.name}
          </h3>
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
            {member.role}
          </p>
        </div>

        {/* Subtle decorative line */}
        <div className="mt-auto w-8 h-[1px] bg-white/10 group-hover:w-full group-hover:bg-tertiary transition-all duration-700" />
        
        <button className="mt-6 flex items-center justify-between group/link">
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover/link:text-tertiary transition-colors">
            Profile_Archive
          </span>
          <ExternalLink size={12} className="text-slate-500 group-hover/link:text-tertiary transition-colors" />
        </button>
      </div>
    </motion.div>
    </Link>
  
  );
}
