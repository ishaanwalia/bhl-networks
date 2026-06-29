import { products } from "@/lib/product";
import type { Product } from "@/lib/product";
import ProductDetailClient from "./ProductDetailClient";

export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

// Build lookup at module level
const productMap: Record<string, Product> = {};
for (const p of products) {
  productMap[p.slug] = p;
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = productMap[params.slug];
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Product Not Found</h1>
          <p className="text-gray-500">The product you are looking for does not exist.</p>
        </div>
      </div>
    );
  }

  return <ProductDetailClient product={product} />;
}