import { useState, useMemo } from 'react';
import ProjectCard from '@/components/cards/ProjectCard';
import FilterBar from '@/components/ui/FilterBar';
import projectsData from '@/data/projects.json';

const categories = ['All', 'Web3', 'AI', 'SaaS', 'DevTools', 'Mobile'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projectsData;
    return projectsData.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="pt-32 md:pt-48 pb-24 md:pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 md:mb-24">
          <span className="text-secondary font-mono text-sm mb-4 block tracking-widest uppercase">
            // System_Archives
          </span>
          <h1 className="text-5xl sm:text-7xl md:text-[10rem] lg:text-[12rem] font-brutal tracking-tighter leading-[0.8] uppercase mb-8 md:mb-12">
            Core <br /> <span className="text-slate-500">Systems</span>
          </h1>
          <div className="mt-8 md:mt-12 overflow-x-auto pb-4 scrollbar-hide">
            <FilterBar
              categories={categories}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              accentColor="secondary"
            />
          </div>
        </header>

        <div className="grid grid-cols-1 gap-8 md:gap-12 mb-24 md:mb-48">
          {filteredProjects.map((project) => (
            <ProjectCard project={project} />
          ))}
        </div>

        {/* Project Ecosystem Stats */}
        <section className="mb-24 md:mb-48 py-24 md:py-32 border-y border-white/5 bg-white/[0.01]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            {[
              { label: 'Total Contributions', value: '25k+' },
              { label: 'Open Source Repos', value: '120+' },
              { label: 'Active Builders', value: '1.2k+' },
              { label: 'Protocol Forks', value: '450+' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl sm:text-5xl md:text-8xl font-brutal tracking-tighter mb-4 text-secondary">
                  {stat.value}
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Roadmap / Next Steps */}
        <section className="mb-24 md:mb-48">
          <div className="text-center mb-16 md:mb-24">
            <span className="text-secondary font-mono text-sm mb-4 block tracking-widest uppercase">
              // Future_Protocol
            </span>
            <h2 className="text-3xl md:text-6xl font-brutal tracking-tighter uppercase">
              System <span className="text-slate-500">Roadmap</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                phase: 'Phase 01',
                title: 'Core Hardening',
                desc: 'Optimizing protocol performance and security audits.',
              },
              {
                phase: 'Phase 02',
                title: 'Ecosystem Expansion',
                desc: 'Integrating multi-chain support and cross-protocol bridges.',
              },
              {
                phase: 'Phase 03',
                title: 'Mass Adoption',
                desc: 'Launching consumer-facing applications and global marketing.',
              },
            ].map((step, i) => (
              <div
                key={i}
                className="p-8 md:p-12 border border-white/10 bg-white/[0.02] hover:border-secondary transition-colors"
              >
                <div className="text-secondary font-mono text-lg md:text-xl mb-4">
                  [{step.phase}]
                </div>
                <h4 className="text-2xl md:text-3xl font-brutal uppercase tracking-tighter mb-4">
                  {step.title}
                </h4>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
