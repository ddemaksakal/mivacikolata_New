'use client';

import React from 'react';
import { motion } from 'framer-motion';
import type { Product } from '@/lib/products';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: (index || 0) * 0.05 },
    },
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
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col">
          {/* Badge */}
          <span className="text-label-caps text-champagne-gold mb-3">{product.badge}</span>

          {/* Product Name */}
          <h3 className="font-serif text-xl leading-tight text-espresso-structural mb-3">
            {product.name}
          </h3>

          {/* Description */}
          <p className="text-sm text-on-surface-variant flex-grow">
            {product.shortDescription}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
