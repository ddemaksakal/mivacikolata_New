'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLang } from '@/contexts/LanguageContext';
import { translations } from '@/lib/i18n';

type ContactType = 'general' | 'order';

const emailMap: Record<ContactType, string> = {
  general: 'hello@mivacikolata.com',
  order: 'bespoke@mivacikolata.com',
};

const ease = [0.25, 0.1, 0.25, 1] as const;

const fieldVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.09, duration: 0.5, ease },
  }),
};

const labelClass =
  'block font-sans uppercase tracking-[2px] mb-2' as const;

const inputClass =
  'w-full bg-transparent border-0 border-b pb-[10px] pt-[10px] font-sans outline-none transition-colors duration-300 rounded-none placeholder:text-[#C4B8AD]' as const;

export function ContactForm() {
  const [contactType, setContactType] = useState<ContactType>('general');
  const { lang } = useLang();
  const t = translations[lang].contact;

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease }}
      className="p-8 md:p-12"
      style={{ background: '#FAF7F2' }}
    >
      {/* Contact type selector */}
      <div className="flex items-center gap-1 mb-8">
        {(['order', 'general'] as ContactType[]).map((type, i) => (
          <span key={type} className="flex items-center gap-1">
            {i > 0 && (
              <span className="font-sans mx-2" style={{ fontSize: '11px', color: '#C4B8AD' }}>
                /
              </span>
            )}
            <button
              type="button"
              onClick={() => setContactType(type)}
              className="font-sans uppercase tracking-[2px] transition-colors duration-200"
              style={{
                fontSize: '10px',
                color: contactType === type ? '#C9A84C' : '#9CA3AF',
                borderBottom: contactType === type ? '1px solid #C9A84C' : 'none',
                paddingBottom: '1px',
              }}
            >
              {type === 'order' ? t.formOrderTab : t.formSupportTab}
            </button>
          </span>
        ))}
        <span className="ml-auto font-sans" style={{ fontSize: '11px', color: '#C4B8AD' }}>
          {emailMap[contactType]}
        </span>
      </div>

      {/* Fields */}
      <div className="flex flex-col">
        {/* Name */}
        <motion.div
          custom={0}
          variants={fieldVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-8"
        >
          <label
            className={labelClass}
            style={{ fontSize: '10px', color: '#9CA3AF' }}
          >
            {t.nameLabel}
          </label>
          <input
            type="text"
            placeholder={t.namePlaceholder}
            className={inputClass}
            style={{
              borderBottomColor: '#D4C5B5',
              fontSize: '14px',
              color: '#2C1810',
            }}
            onFocus={(e) => (e.currentTarget.style.borderBottomColor = '#C9A84C')}
            onBlur={(e) => (e.currentTarget.style.borderBottomColor = '#D4C5B5')}
          />
        </motion.div>

        {/* Email */}
        <motion.div
          custom={1}
          variants={fieldVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-8"
        >
          <label
            className={labelClass}
            style={{ fontSize: '10px', color: '#9CA3AF' }}
          >
            {t.emailLabel}
          </label>
          <input
            type="email"
            placeholder={t.emailPlaceholder}
            className={inputClass}
            style={{
              borderBottomColor: '#D4C5B5',
              fontSize: '14px',
              color: '#2C1810',
            }}
            onFocus={(e) => (e.currentTarget.style.borderBottomColor = '#C9A84C')}
            onBlur={(e) => (e.currentTarget.style.borderBottomColor = '#D4C5B5')}
          />
        </motion.div>

        {/* Message */}
        <motion.div
          custom={2}
          variants={fieldVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-10"
        >
          <label
            className={labelClass}
            style={{ fontSize: '10px', color: '#9CA3AF' }}
          >
            {t.messageLabel}
          </label>
          <textarea
            placeholder={t.messagePlaceholder}
            rows={4}
            className={`${inputClass} resize-none`}
            style={{
              borderBottomColor: '#D4C5B5',
              fontSize: '14px',
              color: '#2C1810',
              minHeight: '100px',
            }}
            onFocus={(e) => (e.currentTarget.style.borderBottomColor = '#C9A84C')}
            onBlur={(e) => (e.currentTarget.style.borderBottomColor = '#D4C5B5')}
          />
        </motion.div>

        {/* Submit button */}
        <motion.button
          type="button"
          custom={3}
          variants={fieldVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full font-sans uppercase tracking-[2px] py-4 transition-colors duration-300 cursor-pointer"
          style={{
            fontSize: '12px',
            background: '#1C0F0A',
            color: '#FAF7F2',
            borderRadius: 0,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = '#C9A84C')}
          onMouseLeave={(e) => (e.currentTarget.style.background = '#1C0F0A')}
        >
          {t.send}
        </motion.button>
      </div>
    </motion.div>
  );
}
