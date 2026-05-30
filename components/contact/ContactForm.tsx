'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

type ContactType = 'general' | 'order';

const emailMap: Record<ContactType, string> = {
  general: 'hello@mivacikolata.com',
  order: 'bespoke@mivacikolata.com',
};

const labelMap: Record<ContactType, string> = {
  general: 'Genel Destek',
  order: 'Özel Sipariş',
};

const fieldVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.09, duration: 0.45, ease: 'easeOut' },
  }),
};

const inputClass =
  'w-full bg-transparent border-0 border-b border-[#D4C5B5] pb-3 pt-1 text-sm font-sans text-charcoal placeholder-gray-400 focus:outline-none focus:border-gold-400 transition-colors duration-200 rounded-none';

export function ContactForm() {
  const [contactType, setContactType] = useState<ContactType>('general');

  return (
    <div className="flex flex-col gap-8">
      {/* Contact type selector */}
      <div>
        <div className="flex gap-3 mb-3">
          {(['general', 'order'] as ContactType[]).map((type) => (
            <motion.button
              key={type}
              type="button"
              onClick={() => setContactType(type)}
              className={`px-5 py-1.5 text-label-caps transition-all duration-300 ${
                contactType === type
                  ? 'bg-espresso-structural text-paper-off-white border border-espresso-structural'
                  : 'bg-transparent text-espresso-structural border border-hairline-border hover:border-champagne-gold hover:text-champagne-gold'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {labelMap[type]}
            </motion.button>
          ))}
        </div>
        <p className="text-xs font-sans text-gray-400">{emailMap[contactType]}</p>
      </div>

      {/* Form fields */}
      <div className="flex flex-col gap-8">
        <motion.div
          custom={0}
          variants={fieldVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <label className="block text-label-caps text-on-surface-variant mb-2">
            İsim / Name
          </label>
          <input type="text" placeholder="Adınız" className={inputClass} />
        </motion.div>

        <motion.div
          custom={1}
          variants={fieldVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <label className="block text-label-caps text-on-surface-variant mb-2">
            E-posta / Email
          </label>
          <input type="email" placeholder="E-posta adresiniz" className={inputClass} />
        </motion.div>

        <motion.div
          custom={2}
          variants={fieldVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <label className="block text-label-caps text-on-surface-variant mb-2">
            Mesaj / Message
          </label>
          <textarea
            placeholder="Mesajınızı buraya yazın..."
            rows={5}
            className={`${inputClass} resize-none`}
          />
        </motion.div>
      </div>

      {/* Submit button */}
      <motion.button
        type="button"
        custom={3}
        variants={fieldVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        whileTap={{ scale: 0.98 }}
        className="mt-2 w-full flex items-center justify-center gap-2 bg-chocolate-900 text-cream-50 text-label-caps px-8 py-4 hover:bg-gold-400 hover:text-chocolate-950 transition-all duration-300"
      >
        <Send size={14} />
        GÖNDER / SEND
      </motion.button>
    </div>
  );
}
