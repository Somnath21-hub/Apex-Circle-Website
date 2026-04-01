import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '@/components/sections/Hero';
import EventCard from '@/components/cards/EventCard';
import ProjectCard from '@/components/cards/ProjectCard';
import TeamCard from '@/components/cards/TeamCard';
import eventsData from '@/data/events.json';
import projectsData from '@/data/projects.json';
import teamData from '@/data/team.json';
import { Users, Zap, Globe, Rocket, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Magnetic from '@/components/ui/Magnetic';

import AboutImage from '@/assets/Image/About.jpg';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Section Headers Animation
      const headers = gsap.utils.toArray('.section-header');
      headers.forEach((header: any) => {
        gsap.from(header, {
          scrollTrigger: {
            trigger: header,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power4.out',
        });
      });

      // Stats Animation
      gsap.from('.stat-item', {
        scrollTrigger: {
          trigger: '.stats-grid',
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'back.out(1.7)',
      });
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="overflow-hidden">
      <Hero />

      {/* About & Mission Section */}
      <section className="py-24 md:py-48 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <div>
            <span className="text-primary font-mono text-sm mb-6 md:mb-8 block tracking-widest uppercase">
              // About
            </span>
            <h2 className="text-5xl md:text-8xl font-brutal tracking-tighter leading-none uppercase mb-8 md:mb-12">
              Apex <br /> <span className="text-slate-500">Circle</span>
            </h2>
            <p className="text-lg md:text-2xl text-slate-400 font-medium leading-relaxed mb-12 md:text-16">
              Apex Circle brings together problem-solvers, coders, AI builders, cybersecurity
              enthusiasts, and deep tech explorers through hackathons, workshops, and hands-on
              projects.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
              <div className="p-8 border border-white/10 bg-white/2">
                <h3 className="text-2xl font-brutal uppercase tracking-tighter mb-4 text-primary">
                  Mission
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  To accelerate the transition to a decentralized future through high-intensity
                  innovation and community-driven development.
                </p>
              </div>
              <div className="p-8 border border-white/10 bg-white/2">
                <h3 className="text-2xl font-brutal uppercase tracking-tighter mb-4 text-primary">
                  Vision
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  A world where every individual has sovereign control over their digital identity,
                  assets, and data through open-source protocols.
                </p>
              </div>
            </div>
          </div>
          <div className="relative aspect-square overflow-hidden border border-white/10">
            <img
              src={AboutImage}
              alt="About Apex Circle"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 md:py-48 px-6 bg-white/2 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="section-header mb-16 md:mb-32">
            <span className="text-primary font-mono text-sm mb-4 block tracking-widest uppercase">
              // WHAT_WE_DO
            </span>
            <h2 className="text-5xl md:text-9xl font-brutal tracking-tighter leading-[0.8] uppercase">
              What We <span className="text-slate-500">Do</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                title: 'Hackathons',
                desc: 'High-intensity build sessions to deploy next-gen protocols.',
                icon: Rocket,
              },
              {
                title: 'Workshops',
                desc: 'Technical deep-dives into advanced decentralized systems.',
                icon: Zap,
              },
              {
                title: 'Community',
                desc: 'A global network of architects and visionaries.',
                icon: Users,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group p-12 border border-white/10 bg-black hover:border-primary transition-all duration-500"
              >
                <item.icon
                  className="text-primary mb-8 group-hover:scale-110 transition-transform"
                  size={32}
                />
                <h3 className="text-4xl font-brutal uppercase tracking-tighter mb-4">
                  {item.title}
                </h3>
                <p className="text-slate-500 leading-relaxed mb-8">{item.desc}</p>
                <Magnetic strength={0.3}>
                  <button className="text-[10px] font-black uppercase tracking-widest text-white group-hover:text-primary transition-colors flex items-center gap-2">
                    Explore <ArrowUpRight size={14} />
                  </button>
                </Magnetic>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 md:py-48 px-6 border-y border-white/5 bg-white/2 relative overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="stats-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-24">
            {[
              { label: 'Active Nodes', value: '2k+', icon: Globe, color: 'text-primary' },
              { label: 'Protocols', value: '150+', icon: Zap, color: 'text-secondary' },
              { label: 'Contributors', value: '200+', icon: Users, color: 'text-tertiary' },
              { label: 'Deployments', value: '1k+', icon: Rocket, color: 'text-accent' },
            ].map((stat, i) => (
              <div
                key={i}
                className="stat-item group border-l border-white/10 pl-8 hover:border-primary transition-colors"
              >
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                  <stat.icon className={stat.color} size={14} />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">
                    {stat.label}
                  </span>
                </div>
                <div className="text-6xl md:text-9xl font-brutal tracking-tighter leading-none group-hover:scale-110 transition-transform origin-left">
                  {stat.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto Marquee */}
      <div className="w-full border-b border-white/5 bg-primary py-4 overflow-hidden  ">
        <div className="flex gap-12 items-center whitespace-nowrap animate-marquee-reverse">
          {[...Array(10)].map((_, i) => (
            <span
              key={i}
              className="text-black text-xs font-black uppercase tracking-[0.5em] flex items-center gap-12"
            >
              BUILD IN PUBLIC <Zap size={12} /> LEARN IN COMMUNITY <Zap size={12} /> SHIP FAST{' '}
              <Zap size={12} /> SCALE TOGETHER <Zap size={12} /> APEX CIRCLE
            </span>
          ))}
        </div>
      </div>

      {/* Roadmap Section */}
      <section className="py-14 md:py-48 px-6 bg-surface relative mt-[15vh]">
        <div className="max-w-7xl mx-auto">
          <div className="section-header mb-16 md:mb-32">
            <span className="text-primary font-mono text-sm mb-4 block tracking-widest uppercase">
              // Apex-Circle_Evolution
            </span>
            <h2 className="text-5xl md:text-9xl font-brutal tracking-tighter leading-[0.8] uppercase">
              The <span className="text-slate-500">Roadmap</span>
            </h2>
          </div>

          <div className="space-y-16 md:space-y-32">
            {[
              {
                phase: '01',
                title: 'GENESIS',
                status: 'COMPLETED',
                desc: 'We built the base of Apex Circle, created the core system, and formed the first community.',
              },
              {
                phase: '02',
                title: 'EXPANSION',
                status: 'IN PROGRESS',
                desc: 'We are growing the community, connecting developers worldwide, and building real projects together.',
              },
              {
                phase: '03',
                title: 'INFRASTRUCTURE',
                status: 'UPCOMING',
                desc: 'We will create tools and systems that help developers build and launch projects easily.',
              },
              {
                phase: '04',
                title: 'SINGULARITY',
                status: 'FUTURE',
                desc: 'The system will run in a fully decentralized way where the community makes decisions.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative flex flex-col md:flex-row gap-8 md:gap-12 items-start border-t border-white/10 pt-12 hover:border-primary transition-colors"
              >
                <div className="text-2xl md:text-4xl font-mono text-primary/40 group-hover:text-primary transition-colors">
                  {item.phase}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <h3 className="text-3xl md:text-6xl font-brutal uppercase tracking-tighter">
                      {item.title}
                    </h3>
                    <span
                      className={`text-[10px] font-black px-3 py-1 border ${item.status === 'IN PROGRESS' ? 'bg-primary text-black border-primary' : 'border-white/20 text-slate-500'}`}
                    >
                      {item.status}
                    </span>
                  </div>
                  <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-32 h-32 border border-primary/20 rounded-full flex items-center justify-center animate-spin-slow">
                    <Zap className="text-primary" size={32} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="section-header flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div>
              <span className="text-primary font-mono text-sm mb-4 block tracking-widest uppercase">
                // Upcoming_Events
              </span>
              <h2 className="text-6xl md:text-8xl font-brutal tracking-tighter leading-[0.9]">
                LIVE <br /> <span className="text-slate-500">EVENTS</span>
              </h2>
            </div>
            <Link
              to="/events"
              className="group flex items-center gap-2 text-sm font-black uppercase tracking-widest"
            >
              View All Events{' '}
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {eventsData.slice(0, 3).map((event) => {
              const eventObj = {
                ...event,
                type: event.type as import('@/types').EventType,
                status: event.status as import('@/types').EventStatus,
              };
              return (
                <div key={event.id}>
                  <EventCard event={eventObj} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-32 px-6 bg-white/2 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="section-header flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div>
              <span className="text-primary font-mono text-sm mb-4 block tracking-widest uppercase">
                // Built_With_Apex
              </span>
              <h2 className="text-6xl md:text-8xl font-brutal tracking-tighter leading-[0.9]">
                CORE <br /> <span className="text-slate-500">SYSTEMS</span>
              </h2>
            </div>

            <Link
              to="/projects"
              className="group flex items-center gap-2 text-sm font-black uppercase tracking-widest"
            >
              Explore Projects
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>

          {/* PROJECTS LIST (VERTICAL) */}
          <div className="flex flex-col gap-16">
            {projectsData
              .filter((p) => p.featured) // ✅ only featured
              .slice(0, 3) // ✅ show 3
              .map((project, index) => (
                <ProjectCard project={project} index={index} />
              ))}
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="section-header text-center mb-24">
            <span className="text-primary font-mono text-sm mb-4 block tracking-widest uppercase">
              // The_Architects
            </span>
            <h2 className="text-6xl md:text-9xl font-brutal tracking-tighter leading-[0.8] uppercase">
              Apex <span className="text-slate-500">Council</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamData.slice(0, 4).map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>

          <div className="mt-24 text-center">
            <Link
              to="/team"
              className="inline-flex items-center gap-4 bg-white text-black px-12 py-6 font-black uppercase tracking-widest text-sm hover:bg-primary transition-colors"
            >
              Meet the Full Council
              <ArrowUpRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 md:py-48 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="section-header mb-16 md:mb-32 text-center">
            <span className="text-primary font-mono text-sm mb-4 block tracking-widest uppercase">
              // Community_Feedback
            </span>
            <h2 className="text-5xl md:text-9xl font-brutal tracking-tighter leading-[0.8] uppercase">
              The <span className="text-slate-500">Voice</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Alex Rivera',
                role: 'Protocol Engineer',
                text: 'Apex Circle provided the infrastructure and community I needed to deploy my first L2 solution. The intensity is unmatched.',
              },
              {
                name: 'Sarah Chen',
                role: 'Full Stack Dev',
                text: "The hackathons are legendary. I've never learned so much in 48 hours. The mentors are world-class architects.",
              },
              {
                name: 'Marcus Thorne',
                role: 'Community Lead',
                text: "Joining the Circle was the best decision for my career. It's a collective of the brightest minds in the space.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 md:p-12 border border-white/10 bg-white/2 hover:border-primary transition-colors"
              >
                <p className="text-lg md:text-xl text-slate-300 italic mb-8 leading-relaxed">
                  "{item.text}"
                </p>
                <div>
                  <div className="text-lg md:text-xl font-brutal uppercase tracking-tighter">
                    {item.name}
                  </div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-primary">
                    {item.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-48 px-6 bg-surface border-y border-white/5">
        <div className="max-w-3xl mx-auto">
          <div className="section-header mb-24 text-center">
            <h2 className="text-5xl md:text-7xl font-brutal tracking-tighter uppercase">
              Protocol <span className="text-primary">FAQ</span>
            </h2>
          </div>
          <div className="space-y-8">
            {[
              {
                q: 'How do I join the protocol?',
                a: 'You can apply through our Community page. We review applications based on technical expertise and alignment with our core values.',
              },
              {
                q: 'Are hackathons remote or in-person?',
                a: 'Most of our hackathons are hybrid, with physical hubs in major tech centers and a robust virtual infrastructure for remote participants.',
              },
              {
                q: 'What is the membership fee?',
                a: 'Apex Circle is a merit-based collective. There are no fees for individual members who contribute to the protocol.',
              },
            ].map((item, i) => (
              <div key={i} className="border-b border-white/10 pb-8">
                <h3 className="text-2xl font-brutal uppercase tracking-tighter mb-4 flex items-center justify-between group cursor-pointer">
                  {item.q}{' '}
                  <ArrowUpRight
                    className="text-slate-700 group-hover:text-primary transition-colors"
                    size={20}
                  />
                </h3>
                <p className="text-slate-500 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-48 px-6 bg-white/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full -translate-x-1/2" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-primary font-mono text-sm mb-8 block tracking-widest uppercase">
            // Stay_Synced
          </span>
          <h2 className="text-5xl md:text-8xl font-brutal tracking-tighter leading-none uppercase mb-12">
            Protocol <br /> <span className="text-slate-500">Updates</span>
          </h2>
          <form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="ENTER_NODE_EMAIL"
              className="flex-1 bg-black border border-white/10 px-8 py-6 text-xs font-black uppercase tracking-widest focus:outline-none focus:border-primary transition-colors"
            />
            <Magnetic strength={0.3}>
              <button className="w-full md:w-auto bg-primary text-black px-12 py-6 font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform">
                Initialize Sync
              </button>
            </Magnetic>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-48 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 blur-[120px] rounded-full translate-y-1/2" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-6xl sm:text-8xl md:text-[10rem] lg:text-[12rem] font-brutal tracking-tighter leading-[0.8] uppercase mb-12">
            Join the <br /> <span className="text-primary">Circle</span>
          </h2>
          <p className="text-lg md:text-2xl text-slate-400 mb-12 md:mb-16 max-w-2xl mx-auto font-medium">
            The next generation of decentralized innovation starts here. Secure your slot in the
            protocol.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <Magnetic strength={0.3}>
              <button className="w-full sm:w-auto bg-primary text-black px-12 py-6 font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform">
                Initialize Connection
              </button>
            </Magnetic>
            <Magnetic strength={0.3}>
              <button className="w-full sm:w-auto border border-white/20 hover:border-primary px-12 py-6 font-black uppercase tracking-widest text-sm transition-colors">
                Read Documentation
              </button>
            </Magnetic>
          </div>
        </div>
      </section>
    </div>
  );
}
