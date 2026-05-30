'use client';

import { motion } from 'framer-motion';

interface SubcategoryFilterProps {
  subcategories: string[];
  selected: string;
  onSelect: (sub: string) => void;
}

export function SubcategoryFilter({ subcategories, selected, onSelect }: SubcategoryFilterProps) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-4">
        <div className="w-1 h-8 bg-champagne-gold hidden sm:block" />
        <div className="overflow-x-auto">
          <div className="flex gap-3 pb-1">
            {['Tümü', ...subcategories].map((sub) => (
              <motion.button
                key={sub}
                onClick={() => onSelect(sub)}
                className={`px-5 py-1.5 text-label-caps whitespace-nowrap transition-all duration-300 ${
                  selected === sub
                    ? 'bg-espresso-structural text-paper-off-white border border-espresso-structural'
                    : 'bg-transparent text-espresso-structural border border-hairline-border hover:border-champagne-gold hover:text-champagne-gold'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {sub}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
