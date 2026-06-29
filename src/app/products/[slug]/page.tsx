import { products, getProductBySlug } from "@/lib/product";
import type { Product } from "@/lib/product";
import ProductDetailClient from "./ProductDetailClient";

export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Product Not Found</h1>
          <p className="text-gray-500">Slug: {slug}</p>
        </div>
      </div>
    );
  }

  return <ProductDetailClient product={product} />;
}