'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export function HeritageSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative aspect-[4/5] overflow-hidden"
          >
            <img
              src="/images/hikayemiz.png"
              alt="Miva Çikolata Mirası"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right: content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.18, ease: 'easeOut' }}
            className="flex flex-col gap-6"
          >
            <p
              className="font-sans font-semibold uppercase text-champagne-gold"
              style={{ fontSize: '11px', letterSpacing: '3px' }}
            >
              HİKAYEMİZ
            </p>
            <h2 className="font-serif text-4xl md:text-[40px] leading-tight text-espresso-structural">
              Çikolatanın Alşimisi
            </h2>
            <div className="h-px w-12 bg-champagne-gold" />
            <p className="font-sans text-base text-gray-600 leading-relaxed">
              Miva Çikolata, disiplinli bir mimar estetiği ve usta zanaatkarlığı
              bir araya getirerek çikolatayı sadece bir tatlı değil, duyusal bir
              heykel olarak yeniden tanımlar.
            </p>
            <p className="font-sans text-base text-gray-600 leading-relaxed">
              Her bir Miva parçası, kökleri geleneksel tekniklere dayanan ancak
              modern bir vizyonla şekillenen bir yolculuğun sonucudur.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
