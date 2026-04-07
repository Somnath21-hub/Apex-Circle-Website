import { useRef } from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Heart, ArrowRight } from 'lucide-react';
import calcuttaHacksImage from '@/assets/Image/CalCuttaHacks.jpg';

const partners = [
  {
    name: 'Google',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg',
  },
  {
    name: 'Microsoft',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuOC-Wr4_60z9IYM0ftBso6_uhi8_mNq7LWg&s',
  },
  {
    name: 'Devfolio',
    logo: 'https://avatars.githubusercontent.com/u/38809367?v=4',
  },
  {
    name: 'Amazon',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  },
  {
    name: 'Meta',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Inc._logo_%28cropped%29.svg',
  },
  {
    name: 'Facebook',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/e/ee/Logo_de_Facebook.png',
  },
  {
    name: 'Vercel',
    logo: 'https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png',
  },
  {
    name: 'Netlify',
    logo: 'https://www.netlify.com/v3/img/components/logomark.png',
  },
  {
    name: 'Firebase',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
  },
  {
    name: 'MongoDB',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  },
  {
    name: 'Node.js',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'React',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
];

export default function About() {
  const container = useRef<HTMLDivElement>(null);

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-20 px-6 bg-background overflow-hidden relative" ref={container}>
      {/* Dynamic Background Depth */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[5%] left-[-5%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] animate-pulse delay-1000" />
        <div className="absolute bottom-0 left-[20%] w-[800px] h-[400px] bg-purple-500/5 rounded-full blur-[180px]" />
        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="mb-12 md:mb-20 text-center md:text-left">
          {(() => {
            const words = [
              { text: 'APEX', color: 'text-white' },
              { text: 'PROTOCOL', color: 'gradient-word' },
            ];
            let globalIdx = 0;
            const stagger = 0.12;
            const dropDuration = 1.4;
            const badgeDelay = 0.5; 
            const totalLetters = 12; // APEX(4) + PROTOCOL(8)
            const glossyStart = badgeDelay + 0.05 + (totalLetters - 1) * stagger + dropDuration;
            return (
              <h1 className="relative text-7xl sm:text-8xl md:text-[10rem] lg:text-[12rem] font-brutal leading-[0.8] tracking-tighter uppercase mb-12 drop-shadow-2xl flex flex-col md:flex-row gap-4 md:gap-10 justify-center md:justify-start">
                {words.map((word) => (
                  <span key={word.text} className="inline-flex">
                    {word.text.split('').map((letter) => {
                      const idx = globalIdx++;
                      const delay = `${0.05 + idx * stagger}s`;
                      return (
                        <span
                          key={idx}
                          className={word.color === 'gradient-word'
                            ? 'inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#4F8EF7] via-[#7C6FE0] to-[#38BDF8]'
                            : 'inline-block text-white'}
                          style={{
                            animation: `letterDrop ${dropDuration}s cubic-bezier(0.22,1,0.36,1) both`,
                            animationDelay: `${badgeDelay + parseFloat(delay)}s`,
                          }}
                        >{letter}</span>
                      );
                    })}
                  </span>
                ))}
                {/* Shimmer sweep */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background: 'linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.22) 50%, transparent 80%)',
                    backgroundSize: '250% 100%',
                    animation: `glossySweep 2.4s ease-in-out ${glossyStart.toFixed(2)}s infinite`,
                  }}
                />
              </h1>
            );
          })()}
          <p className="text-xl md:text-3xl text-slate-400 max-w-4xl leading-relaxed mx-auto md:ml-0 font-medium">
            Apex Circle is a decentralized ecosystem designed to accelerate human potential through
            technology, collaboration, and radical transparency.
          </p>
        </header>

        {/* Redesigned Mission/Vision Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 mb-16 md:mb-24">
          {[
            {
              icon: Target,
              title: 'Mission',
              desc: 'Our mission is to empower individuals to build real-world solutions, learn new skills, and grow through a strong and supportive tech community.',
              color: 'text-[#FFD700]',
              glow: 'hover:shadow-[0_20px_50px_rgba(255,215,0,0.15)]',
              border: 'border-yellow-500/20 hover:border-yellow-500/60'
            },
            {
              icon: Eye,
              title: 'Vision',
              desc: 'Our vision is to create a world where everyone has control over their own data and can use technology freely and safely.',
              color: 'text-[#38BDF8]',
              glow: 'hover:shadow-[0_20px_50px_rgba(56,189,248,0.15)]',
              border: 'border-cyan-500/20 hover:border-cyan-500/60'
            },
            {
              icon: Heart,
              title: 'Values',
              desc: 'Transparency, collaboration, and relentless pursuit of excellence.',
              color: 'text-[#A855F7]',
              glow: 'hover:shadow-[0_20px_50px_rgba(168,85,247,0.15)]',
              border: 'border-purple-500/20 hover:border-purple-500/60'
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`relative bg-white/[0.03] backdrop-blur-3xl border ${item.border} p-10 md:p-14 overflow-hidden rounded-2xl transition-all duration-500 group flex flex-col items-center text-center hover:-translate-y-3 ${item.glow}`}
              style={{ animation: 'badgeZoom 0.8s cubic-bezier(0.34,1.56,0.64,1) both', animationDelay: `${i * 0.2 + 0.2}s` }}
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 blur-3xl rounded-full" />
              <div
                className={`w-16 h-16 md:w-20 md:h-20 bg-white/8 flex items-center justify-center mb-8 rounded-full border border-white/10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-white/15 ${item.color} group-hover:shadow-[0_0_20px_currentColor]`}
              >
                <item.icon size={36} />
              </div>
              <h3 className="text-3xl md:text-4xl font-brutal tracking-tight mb-6 uppercase text-white group-hover:text-white transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-lg md:text-xl font-medium transition-colors group-hover:text-slate-200">{item.desc}</p>
              
              {/* Subtle spotlight highlight */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(255,255,255,0.06),transparent_60%)]" />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center mb-16 md:mb-24">
          <div>
            <h2 className="text-5xl md:text-8xl font-brutal tracking-tighter uppercase mb-12 flex items-center gap-4">
              The <span className="text-primary italic">Genesis</span>
              <div className="h-[2px] flex-1 bg-gradient-to-r from-primary to-transparent opacity-30" />
            </h2>
            <div className="space-y-10 md:space-y-16">
              {[
                {
                  year: '2021',
                  title: 'The Foundation',
                  desc: 'Founded by a group of developers looking for a better way to collaborate.',
                },
                {
                  year: '2022',
                  title: 'Global Scale',
                  desc: 'Reached 1,000 members and hosted our first international hackathon.',
                },
                {
                  year: '2023',
                  title: 'Incubator Launch',
                  desc: 'Launched our incubator program and open-source project archives.',
                },
                {
                  year: '2024',
                  title: 'Future Protocol',
                  desc: 'Pioneering the future of decentralized community building.',
                },
              ].map((step, i) => (
                <div key={i} className="flex gap-8 md:gap-12 group relative">
                  <div className="absolute left-[-20px] top-0 h-full w-[1px] bg-white/10 group-hover:bg-primary transition-colors" />
                  <span className="text-primary font-mono text-xl md:text-2xl pt-1">
                    [{step.year}]
                  </span>
                  <div>
                    <h4 className="text-2xl md:text-3xl font-brutal tracking-tight uppercase mb-3 group-hover:text-primary transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-slate-500 text-lg md:text-xl leading-relaxed max-w-lg">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* CALCUTTA HACKS SQUARE PHOTO — LIFTED TOP */}
          <div className="relative group w-full flex justify-center md:mt-[-48px]">
            <div className="relative aspect-square w-full max-w-md rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(0,0,0,0.6)] bg-black/40 group-hover:border-primary/30 transition-all duration-700 group-hover:translate-y-[-8px]">
              <img 
                src={calcuttaHacksImage} 
                alt="Calcutta Hacks Event" 
                className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>

        {/* Impact Section */}
        <section className="mb-16 md:mb-32 py-16 md:py-24 border-y border-white/5 bg-white/[0.01]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            {[
              { label: 'Community Members', value: '10k+' },
              { label: 'Projects Deployed', value: '500+' },
              { label: 'Global Hackathons', value: '25+' },
              { label: 'Protocol Partners', value: '100+' },
            ].map((stat, i) => (
              <div key={i} className="group">
                <div className="text-4xl sm:text-5xl md:text-8xl font-brutal tracking-tighter mb-4 group-hover:text-primary transition-colors">
                  {stat.value}
                </div>
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Partners Section */}
        <section className="mb-16 md:mb-32">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-6xl font-brutal tracking-tighter uppercase">
              Our <span className="text-slate-500">Partners</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8">
            {partners.map((partner, i) => (
              <div
                key={i}
                className="group h-16 border  border-white/10 flex items-center justify-center bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-8 md:h-10  object-contain opacity-70 group-hover:opacity-100 transition-all duration-500"
                />
              </div>
            ))}
          </div>
        </section>

        <div className="bg-primary text-black p-8 md:p-24 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12">
          <h2 className="text-4xl md:text-7xl font-brutal tracking-tighter uppercase leading-none text-center md:text-left">
            Ready to <br /> <span className="text-black/50">Contribute?</span>
          </h2>
          <button className="w-full md:w-auto bg-black text-white px-12 py-6 font-black uppercase tracking-widest text-sm hover:scale-105 transition-transform flex items-center justify-center gap-4">
            Join the Protocol <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
