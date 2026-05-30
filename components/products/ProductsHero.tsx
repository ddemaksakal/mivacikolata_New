'use client';

interface ProductsHeroProps {
  title?: string;
  description?: string;
}

export function ProductsHero({
  title = 'Ürünlerimiz',
  description = 'Kaliteli ve lezzetli çikolata ürünlerimizle tanışın. Her bir parça, usta ellerde hassasiyetle işlenmiş birer sanat eseridir.',
}: ProductsHeroProps) {
  return (
    <section className="text-center mb-16">
      <h1 className="font-serif text-5xl md:text-6xl text-espresso-structural mb-6">{title}</h1>
      <p className="font-sans text-lg text-on-surface-variant max-w-2xl mx-auto">{description}</p>
    </section>
  );
}
