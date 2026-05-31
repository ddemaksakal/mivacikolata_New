'use client';

import { motion } from 'framer-motion';

const ease = [0.25, 0.1, 0.25, 1] as const;

const blocks = [
  {
    label: 'ÖZEL SİPARİŞLER',
    title: 'Bespoke Inquiries',
    description:
      'Kurumsal siparişler, özel tasarım kutular veya atölye işbirlikleri için doğrudan bize ulaşın.',
    email: 'bespoke@mivacikolata.com',
  },
  {
    label: 'GENEL DESTEK',
    title: 'General Support',
    description:
      'Ürünlerimiz, teslimat seçenekleri veya genel sorularınız için destek ekibimize yazabilirsiniz.',
    email: 'hello@mivacikolata.com',
  },
];

export function ContactInfo() {
  return (
    <div className="flex flex-col">
      {blocks.map((block, i) => (
        <div key={block.label}>
          {i > 0 && <div className="h-px my-10" style={{ background: '#E8E0D5' }} />}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.6, delay: i * 0.15, ease }}
            className="flex flex-col gap-4"
          >
            {/* Label */}
            <p
              className="font-sans font-medium uppercase tracking-[3px] text-gold-400"
              style={{ fontSize: '10px' }}
            >
              {block.label}
            </p>

            {/* Title */}
            <h3
              className="font-serif leading-tight"
              style={{ fontSize: '36px', color: '#2C1810', fontWeight: 400 }}
            >
              {block.title}
            </h3>

            {/* Description */}
            <p
              className="font-sans leading-[1.8]"
              style={{ fontSize: '14px', color: '#6B7280', maxWidth: '320px' }}
            >
              {block.description}
            </p>

            {/* Email */}
            <a
              href={`mailto:${block.email}`}
              className="font-sans w-fit transition-colors duration-200 hover:text-gold-400 hover:border-gold-400"
              style={{
                fontSize: '13px',
                color: '#2C1810',
                borderBottom: '1px solid #2C1810',
                paddingBottom: '2px',
              }}
            >
              {block.email}
            </a>
          </motion.div>
        </div>
      ))}
    </div>
  );
}
