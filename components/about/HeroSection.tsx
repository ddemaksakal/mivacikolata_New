'use client';

import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="bg-cream-50 py-16 md:py-[100px] text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="font-serif font-light text-5xl md:text-6xl lg:text-[72px] leading-none text-espresso-structural mb-6"
        >
          Hakkımızda
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          className="font-sans text-lg text-gray-500 mx-auto max-w-[560px] leading-relaxed"
        >
          Çikolatayı bir sanat formuna dönüştürme yolculuğumuz.
        </motion.p>
      </div>
    </section>
  );
}
