import { motion } from "motion/react";
import { Github, ArrowUpRight } from "lucide-react";
import { Project } from "@/types";


interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
  <div key={project.id} className="group relative bg-white/[0.02] border border-white/10 hover:border-secondary transition-all duration-500 p-1">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
      
      {/* IMAGE */}
      <div className="aspect-square overflow-hidden relative group-hover:shadow-[0_0_30px_rgba(255,0,255,0.2)] transition-shadow duration-500">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
          referrerPolicy="no-referrer"
        />

        {/* Glitch Overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="absolute inset-0 bg-secondary/10 mix-blend-overlay animate-pulse" />
          <div className="absolute top-0 left-0 w-full h-[1px] bg-secondary animate-glitch-line" />
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-secondary animate-glitch-line-delayed" />
        </div>

        <div className="absolute bottom-4 left-4 bg-secondary text-black text-[10px] font-black uppercase tracking-widest px-3 py-1">
          {project.hackathon}
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex flex-col justify-between py-4">
        <div>
          {/* TITLE */}
          <h3 className="text-4xl font-brutal tracking-tighter mb-4 group-hover:text-secondary transition-colors">
            {project.title}
          </h3>

          {/* DESCRIPTION */}
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            {project.description}
          </p>

          {/* TEAM */}
          <div className="mb-4">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 border border-white/10 px-2 py-1">
              {project.team}
            </span>
          </div>

          {/* TECH STACK */}
          <div className="mb-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack?.map((tech: string, idx: number) => (
                <span
                  key={idx}
                  className="text-[10px] uppercase tracking-widest border border-white/10 px-2 py-1 text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* KEY FEATURES */}
          <div className="mb-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
              Key Features
            </h4>
            <ul className="text-xs text-slate-400 space-y-1">
              {project.features?.map((feature: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-secondary">▹</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* CONTRIBUTORS */}
          <div className="mb-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
              Contributors
            </h4>
            <div className="flex items-center -space-x-3">
              {project.contributors?.map((user: any, idx: number) => (
                <img
                  key={idx}
                  src={user.avatar}
                  alt={user.name}
                  className="w-8 h-8 rounded-full border border-white/10 object-cover hover:scale-110 transition-transform"
                  title={user.name}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-6">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white hover:text-secondary transition-colors"
          >
            Source <Github size={14} />
          </a>

          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white hover:text-secondary transition-colors"
          >
            Live Demo <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </div>
  </div>
);
}
