'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, Mail, Camera, ExternalLink } from 'lucide-react';

const blockVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
};

interface InfoBlockProps {
  icon: React.ReactNode;
  title: string;
  lines: string[];
  index: number;
}

function InfoBlock({ icon, title, lines, index }: InfoBlockProps) {
  return (
    <motion.div
      custom={index}
      variants={blockVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-30px' }}
      className="flex gap-4"
    >
      <div className="mt-0.5 text-champagne-gold flex-shrink-0">{icon}</div>
      <div>
        <p className="text-label-caps text-champagne-gold mb-1.5">{title}</p>
        {lines.map((line, i) => (
          <p key={i} className="text-sm font-sans text-charcoal leading-relaxed">
            {line}
          </p>
        ))}
      </div>
    </motion.div>
  );
}

export function ContactInfo() {
  return (
    <div className="flex flex-col gap-8">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-serif text-[28px] leading-snug text-espresso-structural"
      >
        İletişim Bilgileri
      </motion.h2>

      <InfoBlock
        icon={<MapPin size={18} />}
        title="Mağaza Adresi"
        lines={['Nişantaşı, Abdi İpekçi Cd. No: 12', '34367 Şişli / İstanbul']}
        index={0}
      />

      <InfoBlock
        icon={<Clock size={18} />}
        title="Çalışma Saatleri"
        lines={['Pazartesi — Cumartesi: 10:00 - 19:00', 'Pazar: 12:00 - 18:00']}
        index={1}
      />

      <InfoBlock
        icon={<Mail size={18} />}
        title="Genel Destek"
        lines={['hello@mivacikolata.com']}
        index={2}
      />

      <InfoBlock
        icon={<Mail size={18} />}
        title="Özel Siparişler"
        lines={['bespoke@mivacikolata.com']}
        index={3}
      />

      {/* Social media */}
      <motion.div
        custom={4}
        variants={blockVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex gap-5"
      >
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-sans text-charcoal hover:text-champagne-gold transition-colors duration-200"
        >
          <Camera size={16} />
          Instagram
        </a>
        <a
          href="https://pinterest.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-sans text-charcoal hover:text-champagne-gold transition-colors duration-200"
        >
          <ExternalLink size={16} />
          Pinterest
        </a>
      </motion.div>

      {/* Map placeholder */}
      <motion.div
        custom={5}
        variants={blockVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-2 bg-chocolate-900 h-44 flex items-center justify-center"
      >
        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 border border-gold-400 text-gold-400 text-label-caps px-6 py-3 hover:bg-gold-400 hover:text-chocolate-950 transition-all duration-300"
        >
          <MapPin size={14} />
          Haritada Gör
        </a>
      </motion.div>
    </div>
  );
}
