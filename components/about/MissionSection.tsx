'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import { useLang } from '@/contexts/LanguageContext';
import { translations } from '@/lib/i18n';

const ease = [0.25, 0.1, 0.25, 1] as const;
const cardImages = [
  'https://picsum.photos/seed/miva-mission-1/800/600',
  'https://picsum.photos/seed/miva-mission-2/800/600',
  'https://picsum.photos/seed/miva-mission-3/800/600',
];

export function MissionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const { lang } = useLang();
  const t = translations[lang].missionSection;
  const cards = t.cards.map((c, i) => ({ ...c, image: cardImages[i] }));

  return (
    <section ref={ref} className="bg-cream-50 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Center header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7, ease }}
          className="text-center mb-[60px]"
        >
          <p
            className="font-sans font-medium uppercase text-gold-400 tracking-[3px] mb-4"
            style={{ fontSize: '10px' }}
          >
            {t.label}
          </p>
          <h2
            className="font-serif"
            style={{ fontSize: '42px', color: '#2C1810', fontWeight: 400 }}
          >
            {t.title}
          </h2>
        </motion.div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
              transition={{ duration: 0.7, delay: index * 0.12, ease }}
              className="flex flex-col bg-white"
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <div className="p-6">
                <h3
                  className="font-serif italic mb-3"
                  style={{ fontSize: '20px', color: '#2C1810' }}
                >
                  {card.title}
                </h3>
                <p
                  className="font-sans leading-[1.7]"
                  style={{ fontSize: '13px', color: '#6B7280' }}
                >
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
