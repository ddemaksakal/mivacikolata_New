'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { FEATURED_PRODUCTS } from '@/lib/constants';

export default function ProductsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const backButtonVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <main className="min-h-screen bg-white">
      <section ref={ref} className="relative w-full py-5xl md:py-5xl">
        <div className="container-luxury">
          {/* Back Button */}
          <motion.div
            variants={backButtonVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="mb-4xl"
          >
            <Link
              href="/#collections"
              className="inline-flex items-center gap-md text-chocolate-900 hover:text-gold-400 transition-colors duration-300 font-sans text-sm uppercase tracking-wider"
            >
              <span>←</span>
              Geri Dön
            </Link>
          </motion.div>

          {/* Logo */}
          <motion.div
            variants={titleVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="flex justify-center mb-4xl"
          >
            <div className="relative w-full max-w-lg h-auto">
              <Image
                src="/images/logo2.png"
                alt="Miva Çikolata Logo"
                width={400}
                height={250}
                priority
                className="w-full h-auto object-contain"
              />
            </div>
          </motion.div>

          {/* Section Title */}
          <motion.div
            variants={titleVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="text-center mb-4xl"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-light text-chocolate-950 tracking-wider">
              Tüm Ürünler
            </h1>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: '100%' } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mt-lg max-w-xs mx-auto"
            />
            <p className="mt-lg text-gray-600 font-sans text-lg">
              Miva Çikolata'nın tüm premium ürünlerini keşfedin
            </p>
          </motion.div>

          {/* Products Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2xl md:gap-3xl"
          >
            {FEATURED_PRODUCTS.map((product) => (
              <motion.div
                key={product.id}
                variants={cardVariants}
                className="group flex flex-col space-y-lg"
              >
                {/* Product Image */}
                <div className="relative overflow-hidden rounded-lg shadow-md transition-all duration-300 group-hover:shadow-2xl">
                  <div className="relative aspect-[3/4] overflow-hidden bg-cream-50">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      placeholder="blur"
                      blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 400'%3E%3Crect fill='%23F5EFE6' width='300' height='400'/%3E%3C/svg%3E"
                    />

                    {/* Subtle overlay on hover */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-black/5 pointer-events-none"
                    />
                  </div>
                </div>

                {/* Product Info */}
                <div className="space-y-md">
                  {/* Category Badge */}
                  <p className="text-xs font-sans font-medium text-gold-400 uppercase tracking-widest">
                    {product.category}
                  </p>

                  {/* Product Name */}
                  <h2 className="text-2xl font-serif font-light text-chocolate-950 leading-snug">
                    {product.name}
                  </h2>

                  {/* Product Description */}
                  <p className="text-sm font-sans text-gray-500 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Decorative line */}
                  <div className="h-px bg-gradient-to-r from-gold-300/40 to-transparent" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-300/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-chocolate-800/5 rounded-full blur-3xl -z-10" />
      </section>
    </main>
  );
}
