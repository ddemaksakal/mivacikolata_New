'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export function VisionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="bg-[#1C0F0A] py-20 md:py-[120px]">
      <div className="max-w-[720px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col items-center gap-8"
        >
          <p
            className="font-sans font-semibold uppercase text-champagne-gold"
            style={{ fontSize: '11px', letterSpacing: '3px' }}
          >
            VİZYONUMUZ
          </p>
          <blockquote className="font-serif italic text-2xl md:text-3xl lg:text-[36px] leading-snug text-cream-50">
            "Çikolatayı bir sanat formuna dönüştürmek; her kareyi bir deneyime,
            her tadımı bir anıya çevirmek."
          </blockquote>
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
          <p
            className="font-sans leading-relaxed"
            style={{ fontSize: '15px', color: 'rgba(250,247,242,0.65)' }}
          >
            Dünyanın en seçkin kakao bölgelerinden ilham alarak ürettiğimiz her
            parça, estetiği lezzetle buluşturan bir tasarım felsefesinin ürünüdür.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
