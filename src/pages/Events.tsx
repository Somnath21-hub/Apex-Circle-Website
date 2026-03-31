import { useState, useMemo } from 'react';
import EventCard from '@/components/cards/EventCard';
import FilterBar from '@/components/ui/FilterBar';
import eventsData from '@/data/events.json';

const categories = ['All', 'Hackathon', 'Workshop', 'Meetup', 'Conference'];

export default function Events() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredEvents = useMemo(() => {
    if (activeCategory === 'All') return eventsData;
    return eventsData.filter((event) => event.type === activeCategory);
  }, [activeCategory]);

  return (
    <div className="pt-32 md:pt-48 pb-24 md:pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 md:mb-24">
          <span className="text-primary font-mono text-sm mb-4 block tracking-widest uppercase">
            // Operation_Schedule
          </span>
          <h1 className="text-5xl sm:text-7xl md:text-[10rem] lg:text-[12rem] font-brutal tracking-tighter leading-[0.8] uppercase mb-8 md:mb-12">
            Protocol <br /> <span className="text-slate-500">Events</span>
          </h1>
          <div className="mt-8 md:mt-12 overflow-x-auto pb-4 scrollbar-hide">
            <FilterBar
              categories={categories}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              accentColor="primary"
            />
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-24 md:mb-48">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {/* Event Details (Generic for all events) */}
        <section className="mb-24 md:mb-48 py-24 md:py-32 border-y border-white/5 bg-white/[0.01]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
            <div>
              <span className="text-primary font-mono text-sm mb-8 block tracking-widest uppercase">
                // Event_Overview
              </span>
              <h2 className="text-4xl md:text-7xl font-brutal tracking-tighter uppercase mb-8 md:mb-12">
                What to <span className="text-slate-500">Expect</span>
              </h2>
              <div className="space-y-6 md:space-y-8">
                {[
                  {
                    title: 'Technical Outcomes',
                    desc: 'Gain deep insights into protocol architecture and deployment strategies.',
                  },
                  {
                    title: 'Networking',
                    desc: 'Connect with elite engineers and community architects from around the world.',
                  },
                  {
                    title: 'Skills',
                    desc: 'Master advanced tools like ZK-proofs, L2 scaling, and decentralized identity.',
                  },
                ].map((item, i) => (
                  <div key={i} className="p-6 md:p-8 border border-white/10 bg-black">
                    <h4 className="text-xl md:text-2xl font-brutal uppercase tracking-tighter mb-2 text-primary">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl md:text-3xl font-brutal uppercase tracking-tighter mb-8">
                  Speakers & Mentors
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 p-4 border border-white/5 bg-white/[0.02]"
                    >
                      <div className="w-12 h-12 bg-white/10 rounded-full" />
                      <div>
                        <div className="text-sm font-brutal uppercase tracking-tighter">
                          Architect_{i + 1}
                        </div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-primary">
                          Core Team
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6 md:p-8 border border-primary/20 bg-primary/5">
                <h3 className="text-xl md:text-2xl font-brutal uppercase tracking-tighter mb-4">
                  Pricing & Access
                </h3>
                <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-6 mb-8 sm:mb-6">
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                      Member Rate
                    </div>
                    <div className="text-3xl md:text-4xl font-brutal tracking-tighter">FREE</div>
                  </div>
                  <div className="sm:text-right">
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                      Standard Rate
                    </div>
                    <div className="text-3xl md:text-4xl font-brutal tracking-tighter">$49</div>
                  </div>
                </div>
                <button className="w-full bg-primary text-black py-4 font-black uppercase tracking-widest text-xs hover:scale-[1.02] transition-transform">
                  Secure Access
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Past Events Archive */}
        <section className="mb-24 md:mb-48">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 md:mb-16">
            <h2 className="text-3xl md:text-6xl font-brutal tracking-tighter uppercase">
              Past <span className="text-slate-500">Operations</span>
            </h2>
            <button className="w-fit text-[10px] font-black uppercase tracking-widest text-primary hover:text-white transition-colors">
              View Archives
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 opacity-50">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="aspect-video bg-white/5 border border-white/10 flex items-center justify-center font-brutal text-lg md:text-xl"
              >
                ARCHIVE_{i + 1}
              </div>
            ))}
          </div>
        </section>

        {filteredEvents.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500 text-lg">No events found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
