import { products } from "@/src/lib/product";
import type { Product } from "@/src/lib/product";
import ProductDetailClient from "./ProductDetailClient";
import { notFound } from "next/navigation";

// Force static generation for all product pages
export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

// Build lookup map
const productMap = new Map<string, Product>();
for (const p of products) {
  productMap.set(p.slug, p);
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = productMap.get(params.slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}