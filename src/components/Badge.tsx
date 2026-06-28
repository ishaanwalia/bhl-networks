import { cn } from "@/lib/utils";

export default function Badge({ children, variant = "default", className = "" }: { children: React.ReactNode; variant?: "default" | "success" | "warning" | "info" | "outline"; className?: string }) {
  const variants = { default: "bg-bhl-orange text-white", success: "bg-green-500 text-white", warning: "bg-yellow-500 text-white", info: "bg-blue-500 text-white", outline: "border-2 border-bhl-orange text-bhl-orange bg-transparent" };
  return <span className={cn("inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold", variants[variant], className)}>{children}</span>;
}
