'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  PRODUCTS_BY_CATEGORY,
  CategoryKey,
  CATEGORIES,
} from '@/lib/products';
import { ProductCard } from '@/components/products/ProductCard';
import { CategoryTabs } from '@/components/products/CategoryTabs';

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryKey>('kuvertur');

  const products = PRODUCTS_BY_CATEGORY[activeCategory];
  const categoryInfo = CATEGORIES[activeCategory];

  const pageVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const descriptionVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut', delay: 0.1 },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={pageVariants}
      className="w-full overflow-hidden"
    >
      {/* Hero Section */}
      <section className="relative w-full py-5xl md:py-5xl bg-gradient-to-b from-cream-50 to-white">
        <div className="container-luxury">
          {/* Main Title */}
          <motion.h1
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-7xl font-serif font-light text-chocolate-950 tracking-wider text-center mb-lg"
          >
            Ürünlerimiz
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={descriptionVariants}
            initial="hidden"
            animate="visible"
            className="text-lg md:text-xl font-sans text-gray-600 text-center max-w-2xl mx-auto mb-4xl leading-relaxed"
          >
            Kaliteli ve lezzetti çikolata ürünlerimiz tasarını. Her bir parça, usta elleriyle işlenmişti bir sanat eseridir.
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent max-w-xs mx-auto mb-4xl"
          />
        </div>

        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-300/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-chocolate-800/5 rounded-full blur-3xl -z-10" />
      </section>

      {/* Products Section */}
      <section className="relative w-full py-5xl md:py-5xl bg-white">
        <div className="container-luxury">
          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4xl"
          >
            <CategoryTabs
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </motion.div>

          {/* Category Header */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="mb-3xl"
          >
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="text-3xl md:text-4xl font-serif font-light text-chocolate-950 tracking-wide mb-md"
            >
              {categoryInfo.label}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-gray-600 font-sans text-sm md:text-base"
            >
              {categoryInfo.description}
            </motion.p>
          </motion.div>

          {/* Products Grid */}
          <motion.div
            key={`grid-${activeCategory}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2xl"
          >
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </motion.div>

          {/* Product Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-center mt-4xl"
          >
            <p className="text-sm font-sans text-gray-500">
              {products.length} ürün gösteriliyor
            </p>
          </motion.div>
        </div>

        {/* Background Decoration */}
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-gold-300/5 rounded-full blur-3xl -z-10" />
      </section>

      {/* Bottom CTA */}
      <section className="relative w-full py-4xl md:py-5xl bg-chocolate-950">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-2xl md:text-3xl font-serif font-light text-cream-50 tracking-wide mb-lg">
              Toptan Sipariş
            </h3>
            <p className="text-cream-100 font-sans text-sm md:text-base max-w-xl mx-auto mb-2xl">
              Profesyonel çikolata üreticileri için özel fiyatlandırma ve toptan satış seçeneklerimiz hakkında
              bilgi almak için bize ulaşın.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-2xl py-lg rounded-md bg-gold-400 text-chocolate-950 font-sans font-semibold uppercase tracking-wider hover:bg-gold-300 transition-colors duration-300"
            >
              İletişim Formu
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
