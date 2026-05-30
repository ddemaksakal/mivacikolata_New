'use client';

import { ProductCard } from './ProductCard';
import type { Product, Category } from '@/lib/products';

interface CategorySectionProps {
  category: Category;
  products: Product[];
}

export function CategorySection({ category, products }: CategorySectionProps) {
  if (products.length === 0) return null;

  return (
    <section className="mb-20">
      {/* Category Title */}
      <div className="flex items-center gap-6 mb-12">
        <h2 className="font-serif text-4xl text-espresso-structural whitespace-nowrap">{category.label}</h2>
        <div className="flex-1 h-px bg-hairline-border" />
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </section>
  );
}
