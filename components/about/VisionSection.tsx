'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import { useLang } from '@/contexts/LanguageContext';
import { translations } from '@/lib/i18n';

const ease = [0.25, 0.1, 0.25, 1] as const;

export function VisionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const { lang } = useLang();
  const t = translations[lang].vision;

  return (
    <section ref={ref} className="bg-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: text — mobile'da ikinci */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, ease }}
            className="flex flex-col gap-6 order-2 lg:order-1"
          >
            <p
              className="font-sans font-medium uppercase text-gold-400 tracking-[3px]"
              style={{ fontSize: '10px' }}
            >
              {t.label}
            </p>
            <h2
              className="font-serif leading-tight"
              style={{ fontSize: '38px', color: '#2C1810', fontWeight: 400 }}
            >
              {t.title}
            </h2>
            <p
              className="font-sans leading-[1.8]"
              style={{ fontSize: '15px', color: '#6B7280' }}
            >
              {t.body}
            </p>

            {/* Italik alıntı — sol gold çizgi */}
            <div className="border-l-2 border-gold-400 pl-5 mt-2">
              <p
                className="font-serif italic"
                style={{ fontSize: '18px', color: '#2C1810' }}
              >
                {t.quote}
              </p>
            </div>
          </motion.div>

          {/* Right: square image — mobile'da birinci */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="relative aspect-square overflow-hidden order-1 lg:order-2"
          >
            <img
              src="/images/banner1.png"
              alt="Miva Çikolata — Mimari Tasarım"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
