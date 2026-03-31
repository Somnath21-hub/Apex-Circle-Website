import { useState, useMemo } from "react";
import GalleryGrid from "@/components/sections/GalleryGrid";
import FilterBar from "@/components/ui/FilterBar";
import galleryData from "@/data/gallery.json";

const categories = ["All", "Hackathon", "Workshop", "Meetup", "Community"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredGallery = useMemo(() => {
    if (activeCategory === "All") return galleryData;
    return galleryData.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="pt-32 md:pt-48 pb-24 md:pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 md:mb-24">
          <span className="text-primary font-mono text-sm mb-4 block tracking-widest uppercase">
            // Visual_Logs
          </span>
          <h1 className="text-5xl sm:text-7xl md:text-[10rem] lg:text-[12rem] font-brutal tracking-tighter leading-[0.8] uppercase mb-8 md:mb-12">
            Protocol <br /> <span className="text-slate-500">Gallery</span>
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

        <GalleryGrid items={filteredGallery} />

        {/* Video Highlights */}
        <section className="mt-24 md:mt-48 mb-24 md:mb-48">
          <div className="text-center mb-16 md:mb-24">
            <span className="text-primary font-mono text-sm mb-4 block tracking-widest uppercase">// Motion_Archives</span>
            <h2 className="text-3xl md:text-6xl font-brutal tracking-tighter uppercase">Video <span className="text-slate-500">Highlights</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              { title: "Global Hackathon 2025", duration: "03:45" },
              { title: "Protocol Launch Event", duration: "02:12" },
            ].map((video, i) => (
              <div key={i} className="group relative aspect-video bg-white/5 border border-white/10 overflow-hidden cursor-pointer">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-t-[8px] md:border-t-[10px] border-t-transparent border-l-[12px] md:border-l-[15px] border-l-primary border-b-[8px] md:border-b-[10px] border-b-transparent ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black/80 to-transparent">
                  <h4 className="text-xl md:text-2xl font-brutal uppercase tracking-tighter">{video.title}</h4>
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary">{video.duration}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Behind the Scenes */}
        <section className="mb-24 md:mb-48 py-24 md:py-32 border-y border-white/5 bg-white/[0.01]">
          <div className="text-center mb-16 md:mb-24">
            <span className="text-primary font-mono text-sm mb-4 block tracking-widest uppercase">// Raw_Protocol</span>
            <h2 className="text-3xl md:text-6xl font-brutal tracking-tighter uppercase">Behind the <span className="text-slate-500">Scenes</span></h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="aspect-square bg-white/5 border border-white/10 grayscale hover:grayscale-0 transition-all overflow-hidden">
                <img 
                  src={`https://picsum.photos/seed/bts${i}/400/400`} 
                  alt="BTS" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </section>

        {filteredGallery.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500 text-lg">No images found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
