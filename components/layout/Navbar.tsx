'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { BRAND, NAV_LINKS } from '@/lib/constants';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const drawerVariants = {
    hidden: {
      opacity: 0,
      x: 400,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      x: 400,
      transition: {
        duration: 0.3,
        ease: 'easeIn',
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
      },
    }),
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream-50 shadow-md backdrop-blur-sm bg-opacity-95'
          : 'bg-cream-50 border-b border-gray-200'
      }`}
    >
      <div className="container-luxury py-lg flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="flex-shrink-0"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <Link href="/">
            <h1 className="text-xl font-serif font-semibold text-chocolate-900 tracking-widest cursor-pointer">
              {BRAND.name}
            </h1>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-3xl">
          {NAV_LINKS.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="relative group"
            >
              <a
                href={link.href}
                onClick={() => {
                  setActiveLink(link.href);
                }}
                className="text-xs font-sans font-normal text-charcoal uppercase tracking-wider transition-colors duration-300 hover:text-gold-400 py-sm"
              >
                {link.label}
              </a>

              {/* Animated underline */}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-gold-400 to-gold-300"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />

              {/* Active indicator */}
              {activeLink === link.href && (
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-gold-400"
                  layoutId="activeUnderline"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </motion.div>
          ))}
        </nav>

        {/* Decorative line */}
        <div className="hidden lg:block h-6 w-px bg-gradient-to-b from-transparent via-gold-300 to-transparent ml-2xl" />

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex flex-col gap-1.5 w-6 h-6 focus:outline-none relative"
          aria-label="Toggle menu"
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            animate={{
              rotate: isOpen ? 45 : 0,
              y: isOpen ? 8 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="h-0.5 w-6 bg-charcoal block"
          />
          <motion.span
            animate={{
              opacity: isOpen ? 0 : 1,
              scale: isOpen ? 0.8 : 1,
            }}
            transition={{ duration: 0.2 }}
            className="h-0.5 w-6 bg-charcoal block"
          />
          <motion.span
            animate={{
              rotate: isOpen ? -45 : 0,
              y: isOpen ? -8 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="h-0.5 w-6 bg-charcoal block"
          />
        </motion.button>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm lg:hidden z-40"
            />

            {/* Drawer */}
            <motion.div
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-cream-50 shadow-lg lg:hidden z-50"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-lg border-b border-gray-200">
                <h2 className="font-serif font-semibold text-chocolate-900">
                  {BRAND.name}
                </h2>
                <motion.button
                  onClick={() => setIsOpen(false)}
                  whileTap={{ scale: 0.95 }}
                  className="text-charcoal hover:text-gold-400 transition-colors duration-300"
                  aria-label="Close menu"
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </motion.button>
              </div>

              {/* Drawer Links */}
              <nav className="flex flex-col gap-0 p-lg">
                {NAV_LINKS.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    custom={index}
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                    onClick={() => {
                      setActiveLink(link.href);
                      setIsOpen(false);
                    }}
                    className="text-sm font-sans font-normal text-charcoal uppercase tracking-wider py-md px-lg rounded-md transition-all duration-300 hover:bg-cream-100 hover:text-gold-400 border-b border-gray-100 last:border-b-0"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              {/* Drawer Footer */}
              <div className="absolute bottom-0 left-0 right-0 p-lg border-t border-gray-200 bg-cream-100">
                <p className="text-xs text-gray-500 text-center">
                  © 2024 {BRAND.name}
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
