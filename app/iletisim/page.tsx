import { ContactInfo } from '@/components/contact/ContactInfo';
import { ContactForm } from '@/components/contact/ContactForm';
import { BoutiqueMap } from '@/components/contact/BoutiqueMap';

export default function IletisimPage() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1
            className="font-serif leading-none"
            style={{ fontSize: 'clamp(48px, 8vw, 72px)', color: '#2C1810', fontWeight: 300, letterSpacing: '4px' }}
          >
            THE ATELİER
          </h1>
          <div className="h-px w-16 mx-auto my-6" style={{ background: '#C9A84C' }} />
          <p
            className="font-sans uppercase"
            style={{ fontSize: '11px', letterSpacing: '3px', color: '#9CA3AF' }}
          >
            ARCHITECTURAL CONFECTIONERY / İLETİŞİM
          </p>
        </div>
      </section>

      {/* Two-column contact layout */}
      <section className="bg-white">
        <div
          className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-[45%_55%] gap-12 lg:gap-20 items-start"
        >
          <ContactInfo />
          <ContactForm />
        </div>
      </section>

      {/* Boutique map */}
      <BoutiqueMap />
    </div>
  );
}
