import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Zap, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 pt-24 md:pt-32 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 mb-24 md:mb-32">
          <div>
            <h2 className="text-5xl sm:text-7xl md:text-9xl font-brutal tracking-tighter leading-[0.8] uppercase mb-8 md:mb-12">
              Stay <br /> <span className="text-primary">Connected</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-500 max-w-md mb-8 md:mb-12 font-medium">
              Join our newsletter to receive the latest updates on protocol deployments and
              community operations.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md">
              <input
                type="email"
                placeholder="NODE_EMAIL@PROTOCOL.COM"
                className="flex-1 bg-white/5 border border-white/10 px-6 py-4 text-xs font-black uppercase tracking-widest focus:outline-none focus:border-primary transition-colors"
              />
              <button className="w-full sm:w-auto bg-white text-black px-8 py-4 text-xs font-black uppercase tracking-widest hover:bg-primary transition-colors">
                Sync
              </button>
            </form>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-600 mb-8 block">
                // Navigation
              </span>
              <ul className="space-y-4">
                {[
                  'Home',
                  'Hackathons',
                  'Events',
                  'Projects',
                  'Team',
                  'Gallery',
                  'Community',
                  'About',
                  'Contact',
                ].map((item) => (
                  <li key={item}>
                    <Link
                      to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                      className="text-sm font-black uppercase tracking-widest text-slate-400 hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      {item}{' '}
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-600 mb-8 block">
                // Socials
              </span>
              <ul className="space-y-4">
                {[
                  { name: 'Twitter', icon: Twitter },
                  { name: 'Github', icon: Github },
                  { name: 'Linkedin', icon: Linkedin },
                ].map((item) => (
                  <li key={item.name}>
                    <a
                      href="#"
                      className="text-sm font-black uppercase tracking-widest text-slate-400 hover:text-primary transition-colors flex items-center gap-2 group"
                    >
                      {item.name}{' '}
                      <ArrowUpRight
                        size={12}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-600 mb-8 block">
                // Legal & Resources
              </span>
              <ul className="space-y-4">
                {[
                  'Code of Conduct',
                  'Community Guidelines',
                  'Privacy Policy',
                  'Terms & Conditions',
                  'Sponsorship Deck',
                  'Media Kit',
                  'Blog',
                  'Careers',
                  'Resources',
                ].map((item) => (
                  <li key={item}>
                    <Link
                      to={`/${item.toLowerCase().replace(/ /g, '-')}`}
                      className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-primary transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
              <Zap className="text-black" size={12} fill="currentColor" />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">
              © 2026 APEX CIRCLE
            </span>
          </div>
          <Link
            to="/developed/by/abhishek"
            className="text-[10px] font-black uppercase tracking-widest text-slate-700"
          >
            Developed with <span className="text-primary animate-pulse">❤️</span> by Abhishek
            <span className="mx-4">|</span>
            <a
              href="https://github.com/NexGenStudioDev/Apex-Circle-Website"
              className="hover:text-primary transition-colors underline underline-offset-4"
            >
              GitHub Contribution
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
