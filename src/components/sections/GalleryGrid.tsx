import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Maximize2, X } from "lucide-react";
import { GalleryItem } from "@/types";

interface GalleryGridProps {
  items: GalleryItem[];
}

export default function GalleryGrid({ items }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <div
            key={item.id}
            className="group relative bg-white/[0.02] border border-white/10 hover:border-primary transition-all duration-500 cursor-pointer overflow-hidden"
            onClick={() => setSelectedImage(item)}
          >
            <div className="aspect-square overflow-hidden relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <Maximize2 className="text-primary" size={32} />
              </div>
            </div>
            <div className="p-6">
              <span className="text-primary font-mono text-[10px] uppercase tracking-widest mb-2 block">
                {item.category}
              </span>
              <h3 className="text-xl font-brutal tracking-tight mb-1 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">
                {item.date}
              </p>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-6 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-8 right-8 text-white hover:text-primary transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-w-full max-h-full object-contain border border-white/10"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
