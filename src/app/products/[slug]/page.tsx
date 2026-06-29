import { products, getProductBySlug } from "@/lib/product";
import type { Product } from "@/lib/product";
import ProductDetailClient from "./ProductDetailClient";

export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
  // Debug: log at build time
  console.log("[BUILD] generateStaticParams called");
  console.log("[BUILD] Total products:", products.length);
  console.log("[BUILD] First 3 slugs:", products.slice(0, 3).map(p => p.slug));

  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  // Debug: log at runtime
  console.log("[RUNTIME] Requested slug:", params.slug);
  console.log("[RUNTIME] Total products available:", products.length);
  console.log("[RUNTIME] First 3 available slugs:", products.slice(0, 3).map(p => p.slug));

  const product = getProductBySlug(params.slug);

  console.log("[RUNTIME] Found product:", product ? product.name : "NOT FOUND");

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Product Not Found</h1>
          <p className="text-gray-500">Slug: {params.slug}</p>
          <p className="text-gray-400 text-sm mt-2">Available: {products.length} products</p>
          <p className="text-gray-400 text-xs mt-1">First: {products[0]?.slug || "none"}</p>
        </div>
      </div>
    );
  }

  return <ProductDetailClient product={product} />;
}