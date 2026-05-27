'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Product } from '@/lib/products';
import { Badge } from '@/components/ui/Badge';
import { ProductImagePlaceholder } from '@/components/products/ProductImagePlaceholder';

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [imageError, setImageError] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.05 }}
      className="group flex flex-col h-full"
    >
      {/* Product Image Container */}
      <div className="relative overflow-hidden rounded-lg shadow-sm transition-all duration-300 group-hover:shadow-lg mb-lg">
        <div className="relative aspect-square bg-cream-50 overflow-hidden">
          {!imageError ? (
            <>
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                priority={index < 4}
                onError={() => setImageError(true)}
              />

              {/* Overlay on Hover */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-black/5 pointer-events-none"
              />
            </>
          ) : (
            <ProductImagePlaceholder category={product.category} />
          )}
        </div>
      </div>

      {/* Product Info */}
      <div className="flex flex-col flex-grow space-y-sm">
        {/* Badge */}
        <div className="flex items-start justify-between gap-sm">
          <Badge label={product.badge} variant="gold" size="sm" />
        </div>

        {/* Product Name */}
        <h3 className="text-base md:text-lg font-serif font-light text-chocolate-950 leading-snug line-clamp-2">
          {product.name}
        </h3>

        {/* Short Description */}
        <p className="text-xs font-sans text-gray-600 leading-relaxed line-clamp-2 flex-grow">
          {product.shortDescription}
        </p>

        {/* Specs Row - Weight & Content */}
        <div className="flex flex-wrap gap-xs pt-sm border-t border-cream-100">
          {product.cocoaContent && (
            <span className="inline-flex items-center text-xs font-medium text-gold-400 uppercase tracking-widest">
              {product.cocoaContent}
            </span>
          )}
          {product.weight.length > 0 && (
            <span className="inline-flex items-center text-xs font-medium text-chocolate-800">
              {product.weight[0]}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
