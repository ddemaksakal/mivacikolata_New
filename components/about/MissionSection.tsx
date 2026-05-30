'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const values = [
  {
    title: 'Kalite',
    description:
      'Kullandığımız her hammadde, titiz bir seçim sürecinden geçerek sofistike bir lezzet profiline ulaşır.',
  },
  {
    title: 'Zanaat',
    description:
      'El işçiliği ve geleneksel teknikler, her Miva parçasını sınırlı sayıda üretilmiş bir başyapıta dönüştürür.',
  },
  {
    title: 'Sürdürülebilirlik',
    description:
      'Etik tedarik zincirimiz ve çevre dostu üretim anlayışımızla geleceğe karşı sorumluluğumuzu koruyoruz.',
  },
];

export function MissionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="bg-cream-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: mission text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex flex-col gap-6"
          >
            <p
              className="font-sans font-semibold uppercase text-champagne-gold"
              style={{ fontSize: '11px', letterSpacing: '3px' }}
            >
              MİSYONUMUZ
            </p>
            <h2 className="font-serif text-4xl md:text-[40px] leading-tight text-espresso-structural">
              Titizlik, Sabır, Mükemmellik
            </h2>
            <div className="h-px w-12 bg-champagne-gold" />
            <p className="font-sans text-base text-gray-600 leading-relaxed">
              Her üretim sürecinde en yüksek kalite standartlarını koruyarak,
              müşterilerimize yalnızca bir ürün değil; özenle tasarlanmış bir
              deneyim sunmayı misyon edindik.
            </p>
            <p className="font-sans text-base text-gray-600 leading-relaxed">
              Sürdürülebilir tedarik zinciri, el işçiliğine duyulan saygı ve
              yenilikçi lezzet araştırmaları — bunlar Miva'nın vazgeçilmez
              ilkeleridir.
            </p>
          </motion.div>

          {/* Right: value cards */}
          <div className="flex flex-col">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.6, delay: index * 0.12, ease: 'easeOut' }}
              >
                <div className="h-px w-full bg-hairline-border" />
                <div className="py-7">
                  <h3 className="font-serif text-xl text-espresso-structural mb-2">
                    {value.title}
                  </h3>
                  <p className="font-sans text-gray-500 leading-relaxed" style={{ fontSize: '13px' }}>
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
            <div className="h-px w-full bg-hairline-border" />
          </div>
        </div>
      </div>
    </section>
  );
}
