import { useRef } from "react";
import { motion } from "motion/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Clock, User, Tag } from "lucide-react";
import Magnetic from "@/components/ui/Magnetic";
import { BlogPost } from "@/types";

gsap.registerPlugin(ScrollTrigger);

const posts: BlogPost[] = [
  {
    id: "p1",
    title: "The Future of Decentralized Identity",
    excerpt: "Exploring the next generation of self-sovereign identity protocols and their impact on digital sovereignty.",
    author: "Alex Rivera",
    date: "March 28, 2026",
    category: "Protocol",
    image: "https://picsum.photos/seed/blog1/800/500"
  },
  {
    id: "p2",
    title: "Scaling L2 Solutions for Global Adoption",
    excerpt: "A technical deep-dive into the latest advancements in Zero-Knowledge rollups and optimistic scaling.",
    author: "Sarah Chen",
    date: "March 25, 2026",
    category: "Engineering",
    image: "https://picsum.photos/seed/blog2/800/500"
  },
  {
    id: "p3",
    title: "Building Resilient Communities in Web3",
    excerpt: "How decentralized governance models are reshaping the way we collaborate and build together.",
    author: "Marcus Thorne",
    date: "March 20, 2026",
    category: "Community",
    image: "https://picsum.photos/seed/blog3/800/500"
  }
];

export default function Blog() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".blog-card", {
      scrollTrigger: {
        trigger: ".blog-card",
        start: "top 85%",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power4.out",
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="pt-32 md:pt-48 pb-24 md:pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 md:mb-32">
          <span className="text-primary font-mono text-sm mb-4 block tracking-widest uppercase">// Protocol_Logs</span>
          <h1 className="text-5xl sm:text-7xl md:text-[10rem] lg:text-[12rem] font-brutal tracking-tighter leading-[0.8] uppercase mb-8 md:mb-12">
            The <br /> <span className="text-slate-500">Journal</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl leading-relaxed">
            Technical deep-dives, community updates, and research from the core architects of Apex Circle.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {posts.map((post) => (
            <div key={post.id} className="blog-card group bg-white/[0.02] border border-white/10 hover:border-primary transition-all duration-500 overflow-hidden">
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-primary text-black text-[10px] font-black uppercase tracking-widest px-3 py-1">
                  {post.category}
                </div>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-4 text-slate-500 text-[10px] font-black uppercase tracking-widest mb-4">
                  <div className="flex items-center gap-1.5"><User size={12} /> {post.author}</div>
                  <div className="flex items-center gap-1.5"><Clock size={12} /> {post.date}</div>
                </div>
                <h3 className="text-2xl md:text-3xl font-brutal tracking-tighter uppercase mb-4 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3">
                  {post.excerpt}
                </p>
                <Magnetic strength={0.3}>
                  <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white group-hover:text-primary transition-colors">
                    Read Operation <ArrowUpRight size={14} />
                  </button>
                </Magnetic>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-32 text-center">
          <Magnetic strength={0.3}>
            <button className="w-full sm:w-auto border border-white/10 hover:border-primary px-12 py-6 font-black uppercase tracking-widest text-sm transition-colors">
              Load More Logs
            </button>
          </Magnetic>
        </div>
      </div>
    </div>
  );
}
