"use client";

import { ReactNode } from "react";

export default function Marquee({ children, speed = 30, direction = "left", pauseOnHover = true, className = "" }: { children: ReactNode; speed?: number; direction?: "left" | "right"; pauseOnHover?: boolean; className?: string }) {
  const animationClass = direction === "left" ? "animate-marquee" : "animate-marquee-reverse";
  const pauseClass = pauseOnHover ? "hover:[animation-play-state:paused]" : "";
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div className={`inline-flex ${animationClass} ${pauseClass}`} style={{ animationDuration: `${speed}s` }}>
        <div className="flex items-center gap-8">{children}</div>
        <div className="flex items-center gap-8">{children}</div>
      </div>
    </div>
  );
}