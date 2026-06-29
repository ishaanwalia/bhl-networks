import { products, getProductBySlug } from "@/src/lib/product";
import ProductDetailClient from "./ProductDetailClient";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}