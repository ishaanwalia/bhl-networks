import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function generateWhatsAppLink(productName: string, price: number): string {
  const message = encodeURIComponent(
    `Hi BHL Networks,\n\nI'm interested in: ${productName}\nMRP: ${formatPrice(price)}\nQuantity needed: 1\n\nPlease share your best dealer price and availability.\n\nThank you!`
  );
  return `https://wa.me/918196963329?text=${message}`;
}

export function generateBulkOrderLink(): string {
  const message = encodeURIComponent(
    `Hi BHL,\n\nI want to place a bulk order.\nCompany: [Your Company]\nProducts: [Product Names]\nApproximate Quantity: [Number]\nDelivery City: [City]\n\nPlease share distributor pricing and MOQ details.`
  );
  return `https://wa.me/918196963329?text=${message}`;
}