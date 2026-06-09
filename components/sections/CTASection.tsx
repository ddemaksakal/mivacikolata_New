'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { useLang } from '@/contexts/LanguageContext';
import { translations } from '@/lib/i18n';

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { lang } = useLang();
  const t = translations[lang].cta;

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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  return (
    <section
      ref={ref}
      className="relative w-full py-5xl md:py-5xl bg-chocolate-950 overflow-hidden"
    >
      <div className="container-luxury">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-serif font-light text-cream-50 tracking-wider mb-lg">
            {t.title}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg font-sans text-cream-100 mb-3xl leading-relaxed"
          >
            {t.subtitle}
          </motion.p>

          <motion.div variants={itemVariants}>
            <Link href="/urunler">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-cream-50 text-cream-50 hover:bg-cream-50 hover:text-chocolate-950 font-sans uppercase tracking-wider"
              >
                {t.button}
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold-300/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cream-50/5 rounded-full blur-3xl -z-10" />
    </section>
  );
}
