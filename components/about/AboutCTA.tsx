'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import { useLang } from '@/contexts/LanguageContext';
import { translations } from '@/lib/i18n';

const ease = [0.25, 0.1, 0.25, 1] as const;

export function AboutCTA() {
  const { lang } = useLang();
  const t = translations[lang].aboutCta;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="bg-chocolate-950 py-24 md:py-[120px]">
      <div className="max-w-[680px] mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.7, ease }}
          className="flex flex-col items-center gap-8"
        >
          {/* Big italic quote */}
          <blockquote
            className="font-serif italic font-light text-cream-50 leading-snug"
            style={{ fontSize: '36px' }}
          >
            {t.quote}
          </blockquote>

          {/* Gold divider */}
          <div className="w-10 h-px bg-gold-400" />

          {/* Attribution */}
          <p
            className="font-sans uppercase tracking-[2px]"
            style={{ fontSize: '12px', color: 'rgba(201,168,76,0.7)' }}
          >
            {t.attribution}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
