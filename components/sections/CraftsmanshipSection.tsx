'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';

export function CraftsmanshipSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const imageVariants = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, ease: 'easeOut' },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  return (
    <section ref={ref} className="relative w-full bg-white overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch min-h-[90vh] lg:min-h-screen">
        {/* Left Image */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative order-2 lg:order-1 min-h-96 sm:min-h-screen lg:min-h-auto"
        >
          <Image
            src="/images/hikayemiz.png"
            alt="Mirasmız ve Zanaat"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-transparent pointer-events-none" />
        </motion.div>

        {/* Right Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative order-1 lg:order-2 p-lg sm:p-2xl md:p-3xl lg:p-4xl bg-cream-50 flex flex-col justify-center min-h-96 sm:min-h-screen lg:min-h-auto"
        >
          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-5xl font-serif font-light text-chocolate-950 mb-xl sm:mb-2xl tracking-wide"
          >
            Mirasmız ve Zanaat
          </motion.h2>

          {/* Decorative line */}
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 60 } : { width: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-px bg-gold-400 mb-2xl sm:mb-3xl"
          />

          {/* Quote */}
          <motion.blockquote
            variants={itemVariants}
            className="space-y-lg mb-2xl sm:mb-3xl"
          >
            <p className="text-lg sm:text-xl md:text-2xl font-serif italic text-gold-400 leading-relaxed">
              "Gerçek lüks, mükemmelliğin peşinde geçen sonsuz saatlerin ürünüdür."
            </p>
          </motion.blockquote>

          {/* Body Text */}
          <motion.div
            variants={itemVariants}
            className="space-y-md sm:space-y-lg text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg font-sans"
          >
            <p>
              1950'lerden beri, Miva Çikolata ailesinin her üyesi, çikolata yapma sanatına kendini adanmıştır. Geleneksel yöntemlerimiz, modern inovasyonla buluşarak, her dilim çikolatayı bir başyapıta dönüştürür.
            </p>
            <p>
              En kaliteli kakao çekirdeklerini dünyadan seçerek, el işçiliğiyle işleyerek, her ürün özgün bir lezzet ve doku ile beraber gelir. Zanaat bizim için sadece bir meslek değil, bir tutkunun ifadesidir.
            </p>
            <p>
              Siz her dilimi ağzınıza koyduğunuzda, geçmiş kuşakların çabalarını, bugünün bilgisini ve geleceğin umudunu tadacaksınız.
            </p>
          </motion.div>

          {/* CTA Link */}
          <motion.div variants={itemVariants} className="mt-2xl sm:mt-3xl pt-lg">
            <Link
              href="/vizyon-misyon"
              className="inline-flex items-center gap-md font-serif font-light text-chocolate-900 hover:text-gold-400 transition-colors duration-300 text-base sm:text-lg group"
            >
              HİKAYEMİZİ KEŞFET
              <motion.svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </motion.svg>
            </Link>
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            animate={{ opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-10 right-10 w-20 h-20 bg-gold-300/10 rounded-full blur-2xl pointer-events-none"
          />
        </motion.div>
      </div>
    </section>
  );
}
