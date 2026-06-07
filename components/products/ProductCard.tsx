'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { Product } from '@/lib/products';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const images = product.images && product.images.length > 1 ? product.images : null;
  const [current, setCurrent] = useState(0);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: (index || 0) * 0.05 },
    },
  };

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((c) => (c - 1 + images!.length) % images!.length);
  };

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrent((c) => (c + 1) % images!.length);
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="group"
    >
      <div className="bg-white border border-hairline-border hover:border-champagne-gold transition-all duration-500 overflow-hidden">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-surface">
          <motion.div
            className="w-full h-full"
            whileHover={{ scale: images ? 1 : 1.04 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={images ? images[current] : product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-opacity duration-300"
            />
          </motion.div>

          {images && (
            <>
              {/* Prev / Next buttons */}
              <button
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-7 h-7 flex items-center justify-center transition-colors"
                aria-label="Önceki görsel"
              >
                ‹
              </button>
              <button
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-7 h-7 flex items-center justify-center transition-colors"
                aria-label="Sonraki görsel"
              >
                ›
              </button>

              {/* Dots */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${i === current ? 'bg-white' : 'bg-white/50'}`}
                    aria-label={`Görsel ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col">
          <span className="text-label-caps text-champagne-gold mb-3">{product.badge}</span>
          <h3 className="font-serif text-xl leading-tight text-espresso-structural mb-3">
            {product.name}
          </h3>
          <p className="text-sm text-on-surface-variant flex-grow">
            {product.shortDescription}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
