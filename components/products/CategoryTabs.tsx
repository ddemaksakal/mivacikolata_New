'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CATEGORIES, CategoryKey } from '@/lib/products';

interface CategoryTabsProps {
  activeCategory: CategoryKey;
  onCategoryChange: (category: CategoryKey) => void;
}

export function CategoryTabs({
  activeCategory,
  onCategoryChange,
}: CategoryTabsProps) {
  const categories = Object.values(CATEGORIES);

  return (
    <div className="flex flex-wrap gap-sm md:gap-md justify-center mb-4xl pb-lg border-b-2 border-cream-100">
      {categories.map((category) => (
        <motion.button
          key={category.key}
          onClick={() => onCategoryChange(category.key)}
          className="relative px-lg py-md text-xs md:text-sm font-sans font-medium uppercase tracking-widest transition-colors duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span
            className={`relative z-10 transition-colors duration-300 ${
              activeCategory === category.key
                ? 'text-chocolate-950 font-semibold'
                : 'text-gray-500 hover:text-chocolate-800'
            }`}
          >
            {category.label}
          </span>

          {/* Animated underline */}
          {activeCategory === category.key && (
            <motion.div
              layoutId="activeTab"
              className="absolute -bottom-lg left-0 right-0 h-1 bg-gradient-to-r from-gold-400 to-gold-300 rounded-full"
              transition={{ type: 'spring', stiffness: 380, damping: 30 }}
            />
          )}
        </motion.button>
      ))}
    </div>
  );
}
