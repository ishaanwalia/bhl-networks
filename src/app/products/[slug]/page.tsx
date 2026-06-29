import { products, getProductBySlug } from "@src/lib/product";
import ProductDetailClient from "./ProductDetailClient";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

// Build a slug→product map at module level for fast lookup
const productMap = new Map(products.map(p => [p.slug, p]));

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  // Decode URL-encoded slug (handles spaces, special chars)
  const decodedSlug = decodeURIComponent(params.slug);
  const product = productMap.get(decodedSlug) || productMap.get(params.slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}