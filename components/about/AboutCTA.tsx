'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export function AboutCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="bg-[#1C0F0A] py-16 md:py-[100px] text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col items-center gap-6"
        >
          <h2 className="font-serif font-light text-4xl md:text-[48px] leading-none text-cream-50">
            Atölyemizi Ziyaret Edin
          </h2>
          <p className="font-sans text-base" style={{ color: 'rgba(250,247,242,0.55)' }}>
            Ürünlerimizi yakından keşfetmek için bize ulaşın.
          </p>
          <Link
            href="/iletisim"
            className="mt-4 inline-flex items-center gap-2 border border-gold-400 text-gold-400 text-label-caps px-8 py-4 hover:bg-gold-400 hover:text-chocolate-950 transition-all duration-300"
          >
            İLETİŞİME GEÇİN
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
