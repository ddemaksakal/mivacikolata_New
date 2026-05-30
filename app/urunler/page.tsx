'use client';

import { useSearchParams } from 'next/navigation';
import { useCallback, useMemo } from 'react';
import type { CategoryKey } from '@/lib/products';
import { CATEGORIES, PRODUCTS_BY_CATEGORY } from '@/lib/products';
import { CategoryFilter } from '@/components/products/CategoryFilter';
import { ProductsHero } from '@/components/products/ProductsHero';
import { ProductGrid } from '@/components/products/ProductGrid';
import { CategorySection } from '@/components/products/CategorySection';

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const categoryParam = (searchParams?.get('kategori') as CategoryKey | 'all' | null) || 'all';

  // Validate category
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

  // Get products based on selected category
  const displayProducts = useMemo(() => {
    if (selectedCategory === 'all') return null;
    return PRODUCTS_BY_CATEGORY[selectedCategory] || [];
  }, [selectedCategory]);

  // Get featured products grouped by category
  const featuredByCategory = useMemo(() => {
    if (selectedCategory !== 'all') {
      return null;
    }

    const grouped: Record<CategoryKey, any> = {} as Record<CategoryKey, any>;
    (Object.keys(CATEGORIES) as CategoryKey[]).forEach((categoryKey) => {
      grouped[categoryKey] = {
        category: CATEGORIES[categoryKey],
        products: (PRODUCTS_BY_CATEGORY[categoryKey] || []).filter((p) => p.featured),
      };
    });
    return grouped;
  }, [selectedCategory]);

  // Dynamic hero title
  const heroTitle =
    selectedCategory === 'all'
      ? 'Ürünlerimiz'
      : CATEGORIES[selectedCategory]?.label || 'Ürünlerimiz';

  return (
    <div className="w-full">
      {/* Category Filter - Sticky */}
      <CategoryFilter
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Hero Section */}
        <ProductsHero title={heroTitle} />

        {/* Products Display */}
        {selectedCategory === 'all' && featuredByCategory ? (
          // Featured view: grouped by category
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
          // Category view: all products in flat grid
          <ProductGrid products={displayProducts} />
        ) : null}
      </div>
    </div>
  );
}
