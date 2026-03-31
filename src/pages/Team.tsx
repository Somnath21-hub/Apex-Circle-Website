import { useState, useMemo } from 'react';
import TeamCard from '@/components/cards/TeamCard';
import FilterBar from '@/components/ui/FilterBar';
import teamData from '@/data/team.json';
import { ArrowUpRight } from 'lucide-react';

const departments = ['All', 'Leadership', 'Engineering', 'Design', 'Marketing'];

export default function Team() {
  const [activeDept, setActiveDept] = useState('All');

  const filteredTeam = useMemo(() => {
    if (activeDept === 'All') return teamData;
    return teamData.filter((member) => member.department === activeDept);
  }, [activeDept]);

  return (
    <div className="pt-32 md:pt-48 pb-24 md:pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 md:mb-24">
          <span className="text-tertiary font-mono text-sm mb-4 block tracking-widest uppercase">
            // The_Architects
          </span>
          <h1 className="text-5xl sm:text-7xl md:text-[10rem] lg:text-[12rem] font-brutal tracking-tighter leading-[0.8] uppercase mb-8 md:mb-12">
            Apex <br /> <span className="text-slate-500">Council</span>
          </h1>
          <div className="mt-8 md:mt-12 overflow-x-auto pb-4 scrollbar-hide">
            <FilterBar
              categories={departments}
              activeCategory={activeDept}
              setActiveCategory={setActiveDept}
              accentColor="tertiary"
            />
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-24 md:mb-48">
          {filteredTeam.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>

        {/* Mentors & Advisors */}
        <section className="mb-24 md:mb-48">
          <div className="text-center mb-16 md:mb-24">
            <span className="text-tertiary font-mono text-sm mb-4 block tracking-widest uppercase">
              // Strategic_Guidance
            </span>
            <h2 className="text-3xl md:text-6xl font-brutal tracking-tighter uppercase">
              Mentors & <span className="text-slate-500">Advisors</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="group p-6 md:p-8 border border-white/10 bg-white/[0.02] hover:border-tertiary transition-colors text-center"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-full mx-auto mb-6 grayscale group-hover:grayscale-0 transition-all" />
                <h4 className="text-xs md:text-sm font-brutal uppercase tracking-tighter mb-1">
                  Mentor_{i + 1}
                </h4>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                  Industry Expert
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Contributors Wall */}
        <section className="mb-24 md:mb-48 py-24 md:py-32 border-y border-white/5 bg-white/[0.01]">
          <div className="text-center mb-16 md:mb-24">
            <span className="text-tertiary font-mono text-sm mb-4 block tracking-widest uppercase">
              // Protocol_Builders
            </span>
            <h2 className="text-3xl md:text-6xl font-brutal tracking-tighter uppercase">
              Top <span className="text-slate-500">Contributors</span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="px-3 py-1.5 md:px-4 md:py-2 border border-white/5 bg-white/[0.02] text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-tertiary hover:border-tertiary transition-all cursor-default"
              >
                BUILDER_{i + 100}
              </div>
            ))}
          </div>
        </section>

        {filteredTeam.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500 text-lg">No team members found in this department.</p>
          </div>
        )}

        <div className="mt-24 md:mt-48 bg-white/[0.02] border border-white/10 p-12 md:p-24 text-center">
          <h2 className="text-4xl md:text-7xl font-brutal tracking-tighter uppercase mb-8">
            Want to <span className="text-tertiary">Architect</span>?
          </h2>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-12">
            We are always looking for visionary builders to join the council and shape the future of
            the protocol.
          </p>
          <button className="w-full sm:w-auto bg-tertiary text-black px-12 py-6 font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform flex items-center justify-center gap-2 mx-auto">
            Apply for Council <ArrowUpRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
