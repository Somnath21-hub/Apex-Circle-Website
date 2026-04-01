import { motion } from 'motion/react';
import { Twitter, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { TeamMember } from '@/types';
import { Link } from 'react-router-dom';

interface TeamCardProps {
  key?: string | number;
  member: TeamMember;
  index?: number;
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <Link to={`/Team/${member.id}`} className="block"> 
       <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-white/[0.02] border border-white/10 hover:border-tertiary transition-all duration-500 overflow-hidden"
    >
      {/* Role Badge */}
      <div className="absolute top-4 right-4 z-20">
        <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 text-[8px] font-black uppercase tracking-[0.2em] text-tertiary">
          {member.department}
        </span>
      </div>

      <div className="aspect-[4/5] overflow-hidden relative">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
          referrerPolicy="no-referrer"
        />

        {/* Glow Overlay */}
        <div className="absolute inset-0 bg-tertiary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Socials Reveal */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <div className="flex gap-3">
              <a
                href={member.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center hover:bg-tertiary hover:text-black hover:scale-110 transition-all"
              >
                <Twitter size={16} />
              </a>
              <a
                href={member.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center hover:bg-tertiary hover:text-black hover:scale-110 transition-all"
              >
                <Github size={16} />
              </a>
              <a
                href={member.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center hover:bg-tertiary hover:text-black hover:scale-110 transition-all"
              >
                <Linkedin size={16} />
              </a>
            </div>
            <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-tertiary hover:text-white transition-colors">
              View Profile <ExternalLink size={12} />
            </button>
          </div>
        </div>
      </div>

      <div className="p-8 relative z-10">
        <div className="flex flex-col gap-1">
          <h3 className="text-2xl md:text-3xl font-brutal tracking-tighter uppercase group-hover:text-tertiary transition-colors">
            {member.name}
          </h3>
          <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">
            {member.role}
          </p>
        </div>

        {/* Subtle decorative line */}
        <div className="mt-6 w-8 h-[1px] bg-white/10 group-hover:w-full group-hover:bg-tertiary transition-all duration-700" />
      </div>
    </motion.div>
    </Link>
  
  );
}
