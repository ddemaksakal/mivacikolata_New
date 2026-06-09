'use client';

import { useLang } from '@/contexts/LanguageContext';
import { translations } from '@/lib/i18n';

export function ProductsHero() {
  const { lang } = useLang();
  const t = translations[lang].products;
  return (
    <section className="text-center mb-16">
      <h1 className="font-serif text-5xl md:text-6xl text-espresso-structural mb-6">{t.title}</h1>
      <p className="font-sans text-lg text-on-surface-variant max-w-2xl mx-auto">{t.description}</p>
    </section>
  );
}
