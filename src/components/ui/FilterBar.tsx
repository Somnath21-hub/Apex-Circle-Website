import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface FilterBarProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  accentColor?: 'primary' | 'secondary' | 'tertiary';
}

export default function FilterBar({
  categories,
  activeCategory,
  setActiveCategory,
  accentColor = 'primary',
}: FilterBarProps) {
  const accentClasses = {
    primary: 'bg-primary text-black',
    secondary: 'bg-secondary text-black',
    tertiary: 'bg-tertiary text-black',
  };

  return (
    <div className="flex flex-wrap gap-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={cn(
            'px-8 py-3 text-[10px] font-black uppercase tracking-widest transition-all',
            activeCategory === category
              ? accentClasses[accentColor]
              : 'bg-white/5 text-slate-500 hover:text-white hover:bg-white/10',
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
