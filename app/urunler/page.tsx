'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useCallback, useMemo } from 'react';
import Image from 'next/image';
import type { CategoryKey } from '@/lib/products';
import { CATEGORIES, PRODUCTS_BY_CATEGORY } from '@/lib/products';
import { CategoryFilter } from '@/components/products/CategoryFilter';
import { ProductsHero } from '@/components/products/ProductsHero';
import { ProductGrid } from '@/components/products/ProductGrid';
import { CategorySection } from '@/components/products/CategorySection';

function ProductsContent() {
  const searchParams = useSearchParams();
  const categoryParam = (searchParams?.get('kategori') as CategoryKey | 'all' | null) || 'all';

  const validCategories = ['all', ...Object.keys(CATEGORIES)];
  const selectedCategory = validCategories.includes(categoryParam)
    ? (categoryParam as CategoryKey | 'all')
    : 'all';

  const handleCategoryChange = useCallback((category: CategoryKey | 'all') => {
    if (typeof window !== 'undefined') {
      const url = new URLSearchParams();
      if (category !== 'all') {
        url.set('kategori', category);
      }
      window.history.replaceState(null, '', `?${url.toString()}`);
    }
  }, []);

  const displayProducts = useMemo(() => {
    if (selectedCategory === 'all') return null;
    return PRODUCTS_BY_CATEGORY[selectedCategory] || [];
  }, [selectedCategory]);

  const featuredByCategory = useMemo(() => {
    if (selectedCategory !== 'all') return null;

    const grouped: Record<CategoryKey, any> = {} as Record<CategoryKey, any>;
    (Object.keys(CATEGORIES) as CategoryKey[]).forEach((categoryKey) => {
      const featured = (PRODUCTS_BY_CATEGORY[categoryKey] || []).filter((p) => p.featured);
      grouped[categoryKey] = {
        category: CATEGORIES[categoryKey],
        products: categoryKey === 'drajeler'
          ? [...featured].sort((a, b) => {
              const aHas = a.image.startsWith('/images/drajeler/') ? 1 : 0;
              const bHas = b.image.startsWith('/images/drajeler/') ? 1 : 0;
              return bHas - aHas;
            })
          : featured,
      };
    });
    return grouped;
  }, [selectedCategory]);

  const heroTitle =
    selectedCategory === 'all'
      ? 'Ürünlerimiz'
      : CATEGORIES[selectedCategory]?.label || 'Ürünlerimiz';

  return (
    <div className="w-full">
      {/* Logo */}
      <div className="flex justify-center items-center py-6 bg-cream-50">
        <Image
          src="/images/logo2.png"
          alt="Miva Çikolata"
          width={400}
          height={225}
          className="object-contain"
          priority
        />
      </div>

      {/* Category Filter */}
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <ProductsHero title={heroTitle} />

        {selectedCategory === 'all' && featuredByCategory ? (
          <div className="space-y-20">
            {Object.values(CATEGORIES).map((category) => {
              const categoryData = featuredByCategory[category.key];
              return (
                categoryData?.products?.length > 0 && (
                  <CategorySection
                    key={category.key}
                    category={category}
                    products={categoryData.products}
                  />
                )
              );
            })}
          </div>
        ) : displayProducts ? (
          <ProductGrid products={displayProducts} />
        ) : null}
      </div>
    </div>
  );
}

export default function UrunlerPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-cream-50" />}>
      <ProductsContent />
    </Suspense>
  );
}
