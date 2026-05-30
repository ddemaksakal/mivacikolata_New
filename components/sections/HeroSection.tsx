'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const banners = [
    {
      src: '/images/banner.png',
      alt: 'MIVA Çikolata - Premium Artisanal Chocolates',
    },
    {
      src: '/images/banner3.jpg',
      alt: 'MIVA Çikolata - Premium Artisanal Chocolates',
    },
    {
      src: '/images/banner1.jpg',
      alt: 'MIVA Çikolata - Premium Artisanal Chocolates',
    },
  ];

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

  const imageVariants = {
    hidden: { opacity: 0, x: 60, scale: 0.92 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: 'easeOut',
        delay: 0.1,
      },
    },
  };

  // Auto-play slides
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, banners.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 8000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 8000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 8000);
  };

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen flex items-center justify-center bg-cream-50 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 right-10 w-96 h-96 bg-gold-300/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute -bottom-20 -left-20 w-80 h-80 bg-chocolate-800/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container-luxury py-2xl sm:py-4xl grid grid-cols-1 lg:grid-cols-2 gap-2xl lg:gap-3xl items-center relative z-10">
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-lg sm:space-y-2xl order-2 lg:order-1"
        >
          {/* Label */}
          <motion.p
            variants={itemVariants}
            className="text-xs sm:text-sm font-sans font-medium text-gold-400 uppercase tracking-widest"
          >
            The Art of the Bean
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light leading-tight text-chocolate-950"
          >
            Çikolatanın
            <br />
            Sanatı
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-md font-sans"
          >
            Geleneksel yöntemlerle hazırlanmış, en kaliteli kakao çekirdeklerinden oluşan premium çikolatalar. Her dilim, sanat ve tutkunun bir yansıması.
          </motion.p>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="pt-lg">
            <Link href="/urunler" className="inline-block">
              <Button
                variant="primary"
                size="lg"
                className="bg-chocolate-900 border-2 border-gold-400 text-cream-50 hover:bg-gold-400 hover:text-chocolate-950 transition-all duration-300"
              >
                KOLEKSİYONU KEŞFEDİN
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Banner Slider */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative order-1 lg:order-2 w-full"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-2xl group">
            {/* Slides Container */}
            <div className="relative w-full h-full">
              {banners.map((banner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: index === currentSlide ? 1 : 0,
                  }}
                  transition={{ duration: 0.7, ease: 'easeInOut' }}
                  className="absolute inset-0"
                >
                  <Image
                    src={banner.src}
                    alt={banner.alt}
                    fill
                    className="object-cover"
                    priority={index === currentSlide}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500'%3E%3Crect fill='%23F5EFE6' width='400' height='500'/%3E%3C/svg%3E"
                  />
                </motion.div>
              ))}
            </div>

            {/* Vignette Overlay - Bottom */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-chocolate-950/15 pointer-events-none z-10" />

            {/* Vignette Overlay - Sides */}
            <div className="absolute inset-0 bg-gradient-to-r from-chocolate-950/5 via-transparent to-chocolate-950/5 pointer-events-none z-10" />

            {/* Accent corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-300/10 blur-2xl pointer-events-none z-10" />

            {/* Left Arrow Button */}
            <motion.button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-chocolate-950/50 hover:bg-chocolate-950/80 text-cream-50 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous banner"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </motion.button>

            {/* Right Arrow Button */}
            <motion.button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-chocolate-950/50 hover:bg-chocolate-950/80 text-cream-50 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next banner"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {banners.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-gold-400 w-8'
                      : 'bg-cream-50/50 w-2 hover:bg-cream-50/75'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  aria-label={`Go to banner ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Floating decorative elements */}
          <motion.div
            animate={{ y: [0, 12, 0], x: [0, 4, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-6 -right-6 w-24 h-24 bg-gold-300/20 rounded-full blur-2xl"
          />
          <motion.div
            animate={{ y: [0, -12, 0], x: [0, -4, 0] }}
            transition={{ duration: 6, repeat: Infinity, delay: 0.5, ease: 'easeInOut' }}
            className="absolute -bottom-10 -left-10 w-32 h-32 bg-chocolate-800/10 rounded-full blur-3xl"
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs text-gold-400 font-sans uppercase tracking-widest">
            Scroll Edin
          </p>
          <svg
            className="w-5 h-5 text-gold-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </motion.div>
    </section>
  );
}
