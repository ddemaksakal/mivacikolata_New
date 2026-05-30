'use client';

import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export function BoutiqueMap() {
  return (
    <section className="w-full bg-chocolate-900">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[420px]">
        {/* Left: Boutique info */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col justify-center px-8 md:px-16 py-16"
        >
          <span className="text-label-caps text-gold-400 mb-4">MIVA ÇİKOLATA</span>
          <h3 className="font-serif text-5xl text-cream-50 leading-none mb-8">
            The Boutique
          </h3>
          <div className="h-px w-16 bg-gradient-to-r from-gold-400 to-transparent mb-8" />
          <p className="font-sans text-sm leading-loose" style={{ color: 'rgba(245,239,230,0.65)' }}>
            Nişantaşı, Abdi İpekçi Cd. No: 12
            <br />
            34367 Şişli / İstanbul
          </p>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 border border-gold-400 text-gold-400 text-label-caps px-6 py-3 hover:bg-gold-400 hover:text-chocolate-950 transition-all duration-300 w-fit"
          >
            <MapPin size={14} />
            Haritada Gör
          </a>
        </motion.div>

        {/* Right: Store image placeholder */}
        <div className="relative min-h-[300px] lg:min-h-0 overflow-hidden">
          <img
            src="https://picsum.photos/800/600?grayscale"
            alt="Miva Çikolata Boutique"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-chocolate-950/40" />
          <div className="absolute bottom-8 right-8">
            <span className="border border-gold-400 text-cream-50 text-label-caps px-5 py-2">
              Haritada Gör
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
