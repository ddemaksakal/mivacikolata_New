'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

interface ProcessCard {
  title: string;
  description: string;
  image: string;
  alt: string;
}

const processCards: ProcessCard[] = [
  {
    title: 'Seçim',
    description: 'Dünyanın en seçkin kakao çekirdeklerini titizlikle seçerek, sadece en kalitelileri kullanıyoruz.',
    image: '/images/secim.png',
    alt: 'Kakao Çekirdekleri Seçimi',
  },
  {
    title: 'Hassasiyet',
    description: 'Her adımda hassas kontrol ve ölçümlerle, mükemmel tadı ve dokuyu sağlıyor.',
    image: '/images/hassasiyet.png',
    alt: 'Hassas Harmanlama Süreci',
  },
  {
    title: 'Harmanlama',
    description: 'Geleneksel yöntemlerle özel harmanlanmış, eşsiz lezzet profilini yaratıyoruz.',
    image: '/images/çikolataharmanlama.png',
    alt: 'Çikolata Harmanlama',
  },
];

export function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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

  const labelVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  return (
    <section
      ref={ref}
      className="relative w-full py-4xl md:py-5xl bg-cream-50 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 right-20 w-80 h-80 bg-gold-300/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ opacity: [0.15, 0.35, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-chocolate-800/3 rounded-full blur-3xl"
        />
      </div>

      <div className="container-luxury relative z-10">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-4xl md:mb-5xl space-y-md"
        >
          {/* Label */}
          <motion.p
            variants={labelVariants}
            className="text-xs md:text-sm font-sans font-medium text-gold-400 uppercase tracking-widest"
          >
            MİSYONUMUZ
          </motion.p>

          {/* Mission Text */}
          <motion.p
            variants={titleVariants}
            className="font-sans text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto"
          >
            Sektörde 30 yıllık tecrübemizle, kalite ve tutku ile ürettiğimiz çikolatalarla
            müşterilerimize eşsiz bir deneyim sunmayı hedefliyoruz. Tecrübemiz, en kaliteli
            hammadde kullanımına ve işçilikle işlenen üretim süreçlerine dayanıyor.
            Çikolatayı sadece bir tatlı olarak değil, insanların özel anılarını tatlandıran
            bir unsur olarak görüyoruz.
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-2xl"
        >
          {processCards.map((card, index) => (
            <motion.div
              key={card.title}
              variants={cardVariants}
              className="relative flex flex-col"
            >
              {/* Card Container */}
              <div className="flex flex-col h-full">
                {/* Image */}
                <div className="relative aspect-square mb-2xl overflow-hidden rounded-lg">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Crect fill='%23F5EFE6' width='400' height='400'/%3E%3C/svg%3E"
                  />
                </div>

                {/* Content */}
                <div className="flex-grow">
                  {/* Title */}
                  <h3 className="text-2xl font-serif font-light text-chocolate-950 mb-md">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-base font-sans text-gray-500 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Vertical Divider - Hidden on mobile, visible on desktop */}
              {index < processCards.length - 1 && (
                <div className="hidden md:block absolute top-0 -right-xl md:-right-2xl h-full w-px bg-gold-300/30" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
