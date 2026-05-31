'use client';

import { motion } from 'framer-motion';

const ease = [0.25, 0.1, 0.25, 1] as const;

export function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <img
        src="/images/mimaridisiplin.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.55)' }} />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="font-sans font-medium uppercase text-gold-400 mb-6 tracking-[4px]"
          style={{ fontSize: '10px' }}
        >
          EKOLOJİK ZANAAT
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease }}
          className="font-serif italic font-light text-[44px] md:text-[64px] lg:text-[72px] leading-tight text-cream-50"
        >
          Mimari Disiplin,
          <br />
          Zanaatkar Ruh
        </motion.h1>
      </div>
    </section>
  );
}
