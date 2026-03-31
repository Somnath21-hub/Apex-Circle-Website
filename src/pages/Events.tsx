import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import EventCard from "@/components/cards/EventCard";
import FilterBar from "@/components/ui/FilterBar";
import eventsData from "@/data/events.json";
import { 
  Search, 
  Users, 
  Globe, 
  Calendar, 
  Zap, 
  ArrowRight, 
  ArrowUpRight, 
  Filter,
  History,
  Star
} from "lucide-react";

const categories = ["All", "Hackathon", "Workshop", "Meetup", "Conference"];

export default function Events() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEvents = useMemo(() => {
    return eventsData.filter((event) => {
      const matchesCategory = activeCategory === "All" || event.type === activeCategory;
      const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            event.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Stats calculation
  const stats = useMemo(() => ({
    total: eventsData.length,
    upcoming: eventsData.filter(e => e.status === "Upcoming").length,
    participants: "12.5k+",
    reach: "45+ Cities"
  }), []);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: eventsData.length };
    eventsData.forEach(e => {
      counts[e.type] = (counts[e.type] || 0) + 1;
    });
    return counts;
  }, []);

  const featuredEvent = eventsData.find(e => e.status === "Upcoming") || eventsData[0];

  return (
    <div className="pt-32 md:pt-48 pb-24 md:pb-32 px-6 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-mono text-sm mb-4 block tracking-widest uppercase">
              // Operation_Schedule
            </span>
            <h1 className="text-5xl sm:text-7xl md:text-[10rem] lg:text-[12rem] font-brutal tracking-tighter leading-[0.8] uppercase mb-8 md:mb-12">
              Protocol <br /> <span className="text-slate-500">Events</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-2xl max-w-2xl font-medium leading-relaxed uppercase tracking-tight">
              Explore upcoming and past events from the Apex community. A decentralized network of workshops, hackathons, and meetups.
            </p>
          </motion.div>

          {/* Search and Filter Bar */}
          <div className="mt-16 md:mt-24 flex flex-col md:flex-row md:items-center justify-between gap-8 border-b border-white/5 pb-12">
            <div className="flex-1 overflow-x-auto scrollbar-hide">
              <FilterBar
                categories={categories}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
                accentColor="primary"
              />
            </div>
            
            <div className="relative w-full md:w-80 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-primary transition-colors" size={18} />
              <input 
                type="text"
                placeholder="Search events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/[0.03] border border-white/10 px-12 py-4 text-xs font-black uppercase tracking-widest focus:outline-none focus:border-primary focus:bg-white/[0.05] transition-all"
              />
            </div>
          </div>
        </header>

        {/* NEW SECTION: Event Stats Overview */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-24 md:mb-32">
          {[
            { label: "Total Events", value: stats.total, icon: Calendar },
            { label: "Upcoming", value: stats.upcoming, icon: Zap },
            { label: "Participants", value: stats.participants, icon: Users },
            { label: "Global Reach", value: stats.reach, icon: Globe },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 md:p-8 bg-white/[0.01] border border-white/5 hover:border-primary/30 transition-all group"
            >
              <stat.icon className="text-primary mb-4 group-hover:scale-110 transition-transform" size={20} />
              <div className="text-3xl md:text-5xl font-brutal tracking-tighter mb-2">{stat.value}</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">{stat.label}</div>
            </motion.div>
          ))}
        </section>

        {/* Event Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-24 md:mb-48">
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State Improvement */}
        {filteredEvents.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-40 border border-dashed border-white/10 bg-white/[0.01] mb-24"
          >
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-primary/20">
              <Filter className="text-primary" size={32} />
            </div>
            <h3 className="text-3xl font-brutal uppercase tracking-tighter mb-4">No Events Found</h3>
            <p className="text-slate-500 text-lg max-w-md mx-auto font-medium">
              We couldn't find any events matching your criteria. Try another category or explore upcoming events.
            </p>
            <button 
              onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
              className="mt-10 text-primary font-black uppercase tracking-widest text-[10px] hover:underline"
            >
              Reset All Filters
            </button>
          </motion.div>
        )}

        {/* NEW SECTION: Featured / Upcoming Highlight */}
        {featuredEvent && (
          <section className="mb-24 md:mb-48">
            <div className="flex items-center gap-6 mb-12">
              <h2 className="text-3xl md:text-5xl font-brutal uppercase tracking-tighter">Featured <span className="text-slate-500">Spotlight</span></h2>
              <div className="h-[1px] flex-1 bg-white/5" />
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group relative bg-black border border-white/10 overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto relative overflow-hidden">
                  <img 
                    src={featuredEvent.image} 
                    alt={featuredEvent.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-60" />
                </div>
                <div className="p-10 md:p-16 flex flex-col justify-center">
                  <div className="flex items-center gap-3 text-primary font-mono text-xs mb-8 tracking-widest uppercase">
                    <Star size={14} fill="currentColor" /> Featured Operation
                  </div>
                  <h3 className="text-4xl md:text-7xl font-brutal tracking-tighter uppercase mb-8 leading-none group-hover:text-primary transition-colors">
                    {featuredEvent.title}
                  </h3>
                  <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-12 max-w-xl">
                    {featuredEvent.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-10 mb-12">
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Date</div>
                      <div className="text-xl font-brutal uppercase">{featuredEvent.date}</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-2">Location</div>
                      <div className="text-xl font-brutal uppercase">{featuredEvent.location}</div>
                    </div>
                  </div>
                  <button className="w-fit bg-primary text-black px-12 py-5 font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform flex items-center gap-3">
                    Secure Access <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          </section>
        )}

        {/* NEW SECTION: Event Categories Overview */}
        <section className="mb-24 md:mb-48">
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-3xl md:text-5xl font-brutal uppercase tracking-tighter">Event <span className="text-slate-500">Categories</span></h2>
            <div className="h-[1px] flex-1 bg-white/5" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {categories.map((cat, i) => (
              <motion.button
                key={cat}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setActiveCategory(cat)}
                className={`p-8 border border-white/10 text-left transition-all group ${activeCategory === cat ? 'bg-primary border-primary' : 'bg-white/[0.02] hover:border-primary/50'}`}
              >
                <div className={`text-[10px] font-black uppercase tracking-widest mb-4 ${activeCategory === cat ? 'text-black' : 'text-slate-500'}`}>
                  {cat === "All" ? "Total" : cat}
                </div>
                <div className={`text-4xl font-brutal tracking-tighter ${activeCategory === cat ? 'text-black' : 'text-white'}`}>
                  {categoryCounts[cat] || 0}
                </div>
              </motion.button>
            ))}
          </div>
        </section>

        {/* Event Details (Generic for all events) */}
        <section className="mb-24 md:mb-48 py-24 md:py-32 border-y border-white/5 bg-white/[0.01]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
            <div>
              <span className="text-primary font-mono text-sm mb-8 block tracking-widest uppercase">// Event_Overview</span>
              <h2 className="text-4xl md:text-7xl font-brutal tracking-tighter uppercase mb-8 md:mb-12">What to <span className="text-slate-500">Expect</span></h2>
              <div className="space-y-6 md:space-y-8">
                {[
                  { title: "Technical Outcomes", desc: "Gain deep insights into protocol architecture and deployment strategies." },
                  { title: "Networking", desc: "Connect with elite engineers and community architects from around the world." },
                  { title: "Skills", desc: "Master advanced tools like ZK-proofs, L2 scaling, and decentralized identity." },
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 md:p-8 border border-white/10 bg-black hover:border-primary/50 transition-all group"
                  >
                    <h4 className="text-xl md:text-2xl font-brutal uppercase tracking-tighter mb-2 text-primary group-hover:translate-x-2 transition-transform">{item.title}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl md:text-3xl font-brutal uppercase tracking-tighter mb-8">Speakers & Mentors</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[...Array(4)].map((_, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-4 p-4 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors group"
                    >
                      <div className="w-12 h-12 bg-white/10 rounded-full overflow-hidden">
                        <img src={`https://i.pravatar.cc/150?u=architect${i}`} alt="Architect" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                      </div>
                      <div>
                        <div className="text-sm font-brutal uppercase tracking-tighter">Architect_{i+1}</div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-primary">Core Team</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="p-6 md:p-8 border border-primary/20 bg-primary/5 relative overflow-hidden group">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                <h3 className="text-xl md:text-2xl font-brutal uppercase tracking-tighter mb-4 relative z-10">Pricing & Access</h3>
                <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-6 mb-8 sm:mb-6 relative z-10">
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">Member Rate</div>
                    <div className="text-3xl md:text-4xl font-brutal tracking-tighter">FREE</div>
                  </div>
                  <div className="sm:text-right">
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">Standard Rate</div>
                    <div className="text-3xl md:text-4xl font-brutal tracking-tighter">$49</div>
                  </div>
                </div>
                <button className="relative z-10 w-full bg-primary text-black py-4 font-black uppercase tracking-widest text-xs hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_20px_rgba(var(--primary-rgb),0.2)]">
                  Secure Access
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Past Events Archive - Upgraded */}
        <section className="mb-24 md:mb-48">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 md:mb-16">
            <div className="flex items-center gap-4">
              <History className="text-primary" size={32} />
              <h2 className="text-3xl md:text-6xl font-brutal tracking-tighter uppercase">Past <span className="text-slate-500">Operations</span></h2>
            </div>
            <button className="w-fit text-[10px] font-black uppercase tracking-widest text-primary hover:text-white transition-colors flex items-center gap-2">
              View Full Archives <ArrowRight size={14} />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Genesis Hackathon", year: "2023", image: "https://picsum.photos/seed/genesis/800/600" },
              { title: "Protocol Summit", year: "2023", image: "https://picsum.photos/seed/summit/800/600" },
              { title: "ZK-Workshop", year: "2022", image: "https://picsum.photos/seed/zk/800/600" },
              { title: "Dev-Con Alpha", year: "2022", image: "https://picsum.photos/seed/alpha/800/600" },
            ].map((archive, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative aspect-video bg-white/5 border border-white/10 overflow-hidden cursor-pointer"
              >
                <img 
                  src={archive.image} 
                  alt={archive.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-40 group-hover:opacity-100" 
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center">
                  <div className="text-[10px] font-black uppercase tracking-widest text-primary mb-2">{archive.year}</div>
                  <h4 className="text-xl font-brutal uppercase tracking-tighter mb-4">{archive.title}</h4>
                  <div className="text-[10px] font-black uppercase tracking-widest border border-white/20 px-3 py-1 hover:bg-white hover:text-black transition-colors">View Details</div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
