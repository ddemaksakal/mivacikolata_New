'use client';

import { motion } from 'framer-motion';
import { ContactInfo } from '@/components/contact/ContactInfo';
import { ContactForm } from '@/components/contact/ContactForm';
import { BoutiqueMap } from '@/components/contact/BoutiqueMap';

export default function IletisimPage() {
  return (
    <div className="w-full">
      {/* Section A: Hero */}
      <section className="bg-cream-50 py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="font-serif text-5xl md:text-[64px] leading-none text-espresso-structural mb-6"
          >
            Bize Ulaşın
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="font-sans text-base text-gray-500 mx-auto max-w-[520px] leading-relaxed"
          >
            Sorularınız, özel sipariş talepleriniz veya işbirliği teklifleriniz
            için bizimle iletişime geçin.
          </motion.p>
        </div>
      </section>

      {/* Hairline divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent" />

      {/* Section B: Contact Info + Form */}
      <section className="bg-cream-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 lg:gap-20">
            {/* Left: Contact info */}
            <ContactInfo />
            {/* Right: Contact form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Section C: Boutique banner */}
      <BoutiqueMap />
    </div>
  );
}
