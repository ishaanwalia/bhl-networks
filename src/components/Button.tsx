"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function Button({ children, variant = "primary", size = "md", href, onClick, className = "", icon, external = false }: { children: ReactNode; variant?: "primary" | "outline" | "ghost" | "whatsapp"; size?: "sm" | "md" | "lg"; href?: string; onClick?: () => void; className?: string; icon?: ReactNode; external?: boolean }) {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    primary: "bg-bhl-orange text-white hover:bg-bhl-orange-dark focus:ring-bhl-orange shadow-lg hover:shadow-xl",
    outline: "border-2 border-bhl-orange text-bhl-orange hover:bg-bhl-orange hover:text-white focus:ring-bhl-orange",
    ghost: "text-bhl-gray-700 hover:text-bhl-orange hover:bg-bhl-orange-light focus:ring-bhl-orange",
    whatsapp: "bg-green-500 text-white hover:bg-green-600 focus:ring-green-500 shadow-lg hover:shadow-xl",
  };
  const sizes = { sm: "px-4 py-2 text-sm", md: "px-6 py-3 text-sm", lg: "px-8 py-4 text-base" };
  const Component = href ? motion.a : motion.button;

  return (
    <Component href={href} onClick={onClick} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} className={cn(baseStyles, variants[variant], sizes[size], className)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 400, damping: 17 }}>
      {icon && <span className="w-5 h-5">{icon}</span>}
      {children}
    </Component>
  );
}
