import { products } from "@/src/lib/product";
import ProductDetailClient from "./ProductDetailClient";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

const productMap = new Map(products.map(p => [p.slug, p]));

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const decodedSlug = decodeURIComponent(params.slug);
  const product = productMap.get(decodedSlug) || productMap.get(params.slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}