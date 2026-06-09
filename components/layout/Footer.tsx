'use client';

import React from 'react';
import { BRAND, NAV_LINKS, SOCIAL_LINKS } from '@/lib/constants';
import { useLang } from '@/contexts/LanguageContext';
import { translations } from '@/lib/i18n';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { lang } = useLang();
  const t = translations[lang].footer;
  const navLabels: Record<string, string> = {
    '/': translations[lang].nav.home,
    '/urunler': translations[lang].nav.collections,
    '/vizyon-misyon': translations[lang].nav.visionMission,
    '/iletisim': translations[lang].nav.contact,
  };

  return (
    <footer className="bg-latte text-cream-50 mt-5xl">
      {/* Main Footer */}
      <div className="container-luxury py-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3xl mb-3xl">
          {/* Brand */}
          <div className="space-y-lg">
            <h3 className="text-2xl font-serif font-semibold">{BRAND.name}</h3>
            <p className="text-cream-100 text-sm leading-relaxed">
              {BRAND.description}
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-lg">
            <h4 className="font-serif text-lg font-semibold text-gold-300">
              {t.navigation}
            </h4>
            <ul className="space-y-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-cream-100 hover:text-gold-400 transition-colors duration-200 text-sm"
                  >
                    {navLabels[link.href] ?? link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-lg">
            <h4 className="font-serif text-lg font-semibold text-gold-300">
              {t.followUs}
            </h4>
            <div className="flex gap-md">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream-100 hover:text-gold-400 transition-colors duration-200 text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="divider-gold" />
      </div>

      {/* Bottom Footer */}
      <div className="container-luxury py-lg text-center">
        <p className="text-cream-100 text-sm">
          © {currentYear} {BRAND.name}. {t.rights}
        </p>
      </div>
    </footer>
  );
}
