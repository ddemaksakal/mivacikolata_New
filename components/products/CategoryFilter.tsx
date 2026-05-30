'use client';

import { motion } from 'framer-motion';
import { useCallback } from 'react';
import type { CategoryKey } from '@/lib/products';
import { CATEGORIES } from '@/lib/products';

interface CategoryFilterProps {
  selectedCategory: CategoryKey | 'all';
  onCategoryChange: (category: CategoryKey | 'all') => void;
}

export function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  const categories = [
    { key: 'all' as const, label: 'Tümü' },
    ...Object.values(CATEGORIES).map((cat) => ({
      key: cat.key as CategoryKey,
      label: cat.label,
    })),
  ];

  const handleClick = useCallback(
    (category: CategoryKey | 'all') => {
      onCategoryChange(category);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [onCategoryChange]
  );

  return (
    <div className="sticky top-16 z-40 bg-paper-off-white/95 backdrop-blur-sm border-b border-hairline-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-4">
          {/* Left accent bar */}
          <div className="w-1 h-10 bg-espresso-structural hidden sm:block" />

          {/* Scrollable categories */}
          <div className="flex-1 overflow-x-auto">
            <motion.div
              className="flex gap-3 pb-2"
              initial={false}
              layoutId="category-container"
            >
              {categories.map((category) => (
                <motion.button
                  key={category.key}
                  onClick={() => handleClick(category.key)}
                  className={`px-6 py-2 text-label-caps whitespace-nowrap transition-all duration-300 ${
                    selectedCategory === category.key
                      ? 'bg-espresso-structural text-paper-off-white border border-espresso-structural'
                      : 'bg-transparent text-espresso-structural border border-hairline-border hover:border-champagne-gold hover:text-champagne-gold'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  layoutId={`category-${category.key}`}
                >
                  {category.label}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
