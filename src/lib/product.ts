import { Product, categories } from './types';

// Import all category product arrays
import { sfp_modules_products } from './products/sfp-modules';
import { fiber_products } from './products/fiber-products';
import { switches_products } from './products/switches';
import { cabling_products } from './products/cabling';
import { ftth_accessories_products } from './products/ftth-accessories';
import { gpon_products } from './products/gpon-products';
import { network_kits_products } from './products/network-kits';

// Export types
export type { Product } from './types';
export { categories } from './types';

// Export individual category arrays
export { sfp_modules_products } from './products/sfp-modules';
export { fiber_products } from './products/fiber-products';
export { switches_products } from './products/switches';
export { cabling_products } from './products/cabling';
export { ftth_accessories_products } from './products/ftth-accessories';
export { gpon_products } from './products/gpon-products';
export { network_kits_products } from './products/network-kits';

// Combined array of all products
export const allProducts: Product[] = [
  ...sfp_modules_products,
  ...fiber_products,
  ...switches_products,
  ...cabling_products,
  ...ftth_accessories_products,
  ...gpon_products,
  ...network_kits_products,
];

// Alias for backward compatibility with your pages
export const products = allProducts;

// Helper functions
export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find(p => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return allProducts.filter(p => p.category === category);
}

export function getProductsBySubcategory(subcategory: string): Product[] {
  return allProducts.filter(p => p.subcategory === subcategory);
}

export function getProductsByBadge(badge: string): Product[] {
  return allProducts.filter(p => p.badge === badge);
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase();
  return allProducts.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q) ||
    p.subcategory.toLowerCase().includes(q) ||
    p.features.some(f => f.toLowerCase().includes(q))
  );
}

export function getRelatedProducts(product: Product | number, limit: number = 4): Product[] {
  const targetId = typeof product === 'number' ? product : product.id;
  const targetCategory = typeof product === 'number' 
    ? allProducts.find(p => p.id === targetId)?.category 
    : product.category;

  if (!targetCategory) return [];

  return allProducts
    .filter(p => p.category === targetCategory && p.id !== targetId)
    .slice(0, limit);
}

export function getFeaturedProducts(limit: number = 8): Product[] {
  const badges = ['Bestseller', 'Latest Gen', 'Industrial Grade', 'Bundle Deal'];
  return allProducts
    .filter(p => p.badge && badges.includes(p.badge))
    .slice(0, limit);
}

export function getNewArrivals(limit: number = 6): Product[] {
  return [...allProducts]
    .sort((a, b) => b.id - a.id)
    .slice(0, limit);
}

export function getProductsByPriceRange(min: number, max: number): Product[] {
  return allProducts.filter(p => p.price >= min && p.price <= max);
}

export function getSubcategories(category: string): string[] {
  const subs = new Set<string>();
  allProducts
    .filter(p => p.category === category)
    .forEach(p => subs.add(p.subcategory));
  return Array.from(subs);
}

export function getCategoryStats() {
  return categories.map(cat => ({
    ...cat,
    subcategories: getSubcategories(cat.id),
    priceRange: {
      min: Math.min(...allProducts.filter(p => p.category === cat.id).map(p => p.price)),
      max: Math.max(...allProducts.filter(p => p.category === cat.id).map(p => p.price)),
    },
  }));
}

export default allProducts;