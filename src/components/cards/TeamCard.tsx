import { motion } from "motion/react";
import { Twitter, Github, Linkedin, Mail } from "lucide-react";
import { TeamMember } from "@/types";

interface TeamCardProps {
  key?: string | number;
  member: TeamMember;
  index?: number;
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <div className="group relative bg-white/[0.02] border border-white/10 hover:border-tertiary transition-all duration-500">
      <div className="aspect-[4/5] overflow-hidden relative">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          <div className="flex gap-4">
            <a href={member.socials.twitter} className="w-8 h-8 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-tertiary hover:text-black transition-colors">
              <Twitter size={14} />
            </a>
            <a href={member.socials.github} className="w-8 h-8 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-tertiary hover:text-black transition-colors">
              <Github size={14} />
            </a>
            <a href={member.socials.linkedin} className="w-8 h-8 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-tertiary hover:text-black transition-colors">
              <Linkedin size={14} />
            </a>
          </div>
        </div>
      </div>

      <div className="p-6">
        <span className="text-tertiary font-mono text-[10px] uppercase tracking-widest mb-2 block">
          {member.department}
        </span>
        <h3 className="text-2xl font-brutal tracking-tight mb-1 group-hover:text-tertiary transition-colors">
          {member.name}
        </h3>
        <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">
          {member.role}
        </p>
      </div>
    </div>
  );
}
