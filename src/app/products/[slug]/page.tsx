import { products } from "@/src/lib/product";
import ProductDetailClient from "./ProductDetailClient";

export const dynamic = "force-static";
export const dynamicParams = false;

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  return <ProductDetailClient slug={params.slug} />;
}