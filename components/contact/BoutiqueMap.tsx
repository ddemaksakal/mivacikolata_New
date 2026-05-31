'use client';

import { motion } from 'framer-motion';

const ease = [0.25, 0.1, 0.25, 1] as const;

export function BoutiqueMap() {
  return (
    <section className="w-full" style={{ background: '#FAF7F2' }}>
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-[100px]">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 lg:gap-20 items-start">

          {/* Left: Boutique info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease }}
            className="flex flex-col"
          >
            {/* Label */}
            <p
              className="font-sans font-medium uppercase tracking-[3px] text-gold-400 mb-4"
              style={{ fontSize: '10px' }}
            >
              THE BOUTIQUE
            </p>

            {/* Title */}
            <h2
              className="font-serif leading-none mb-6"
              style={{ fontSize: '48px', color: '#2C1810' }}
            >
              Nişantaşı Atelier
            </h2>

            {/* Address */}
            <p
              className="font-sans leading-relaxed mb-2"
              style={{ fontSize: '14px', color: '#6B7280' }}
            >
              Harbiye, Abdi İpekçi Cd. No:44
              <br />
              34367 Şişli / İstanbul, Türkiye
            </p>

            {/* Divider */}
            <div className="h-px my-8" style={{ background: '#E8E0D5' }} />

            {/* Working hours label */}
            <p
              className="font-sans font-medium uppercase tracking-[3px] text-gold-400 mb-5"
              style={{ fontSize: '10px' }}
            >
              ÇALIŞMA SAATLERİ
            </p>

            {/* Hours — two columns */}
            <div className="grid grid-cols-2 gap-6 mb-2">
              <div>
                <p
                  className="font-sans leading-relaxed"
                  style={{ fontSize: '13px', color: '#2C1810' }}
                >
                  Pazartesi — Cumartesi
                  <br />
                  10:00 — 20:00
                </p>
              </div>
              <div>
                <p
                  className="font-sans leading-relaxed"
                  style={{ fontSize: '13px', color: '#2C1810' }}
                >
                  Pazar / Sunday
                  <br />
                  12:00 — 18:00
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px my-8" style={{ background: '#E8E0D5' }} />

            {/* Social links */}
            <div className="flex items-center gap-8">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans uppercase tracking-[3px] transition-colors duration-200 hover:text-gold-400"
                style={{ fontSize: '11px', color: '#2C1810' }}
              >
                INSTAGRAM
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans uppercase tracking-[3px] transition-colors duration-200 hover:text-gold-400"
                style={{ fontSize: '11px', color: '#2C1810' }}
              >
                PINTEREST
              </a>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="aspect-[4/3] overflow-hidden"
          >
            <img
              src="https://picsum.photos/seed/chocolatier/800/600"
              alt="Miva Çikolata Atelier"
              className="w-full h-full object-cover"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
