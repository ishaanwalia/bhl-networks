export interface Blog {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
}

export const blogs: Blog[] = [
  { id: "1", slug: "complete-guide-sfp-modules", title: "The Complete Guide to SFP Modules", excerpt: "Everything about SFP, SFP+, SFP28, and QSFP transceivers. Learn how to choose the right module.", category: "Networking Basics", author: "BHL Networks", date: "2026-01-15", readTime: "8 min", tags: ["SFP", "Transceivers", "Fiber"], featured: true },
  { id: "2", slug: "cat6-vs-cat6a-patch-cords", title: "Cat6 vs Cat6A Patch Cords", excerpt: "Detailed comparison of Cat6 and Cat6A. Understand bandwidth, speed, and when to upgrade.", category: "Cabling", author: "BHL Networks", date: "2026-01-10", readTime: "6 min", tags: ["Cat6", "Cat6A", "Patch Cords"], featured: true },
  { id: "3", slug: "poe-switch-buying-guide", title: "PoE Switch Buying Guide", excerpt: "Calculate power budgets, understand PoE standards, and choose the right switch for CCTV and WiFi.", category: "Buying Guide", author: "BHL Networks", date: "2026-01-05", readTime: "10 min", tags: ["PoE", "Switches", "CCTV", "WiFi"], featured: true },
  { id: "4", slug: "ftth-deployment-best-practices", title: "FTTH Deployment Best Practices", excerpt: "Guide for ISPs on deploying fiber-to-the-home using GPON, OLT, and ONU equipment.", category: "FTTH", author: "BHL Networks", date: "2025-12-28", readTime: "12 min", tags: ["FTTH", "GPON", "OLT", "ONU"] },
  { id: "5", slug: "dac-vs-aoc-cables", title: "DAC vs AOC Cables", excerpt: "Compare Direct Attach Copper and Active Optical Cables for data center connections.", category: "Data Center", author: "BHL Networks", date: "2025-12-20", readTime: "7 min", tags: ["DAC", "AOC", "Data Center", "10G"] },
  { id: "6", slug: "fiber-patch-cord-selection", title: "How to Choose Fiber Patch Cords", excerpt: "Understanding SM vs MM, UPC vs APC, connector types, and jacket materials.", category: "Fiber Optics", author: "BHL Networks", date: "2025-12-15", readTime: "9 min", tags: ["Fiber", "Patch Cord", "UPC", "APC"] },
  { id: "7", slug: "network-cable-management", title: "Professional Cable Management", excerpt: "Organize rack cables, choose cable managers, use velcro vs zip ties.", category: "Installation", author: "BHL Networks", date: "2025-12-10", readTime: "8 min", tags: ["Cable Management", "Rack", "Installation"] },
  { id: "8", slug: "media-converter-applications", title: "Media Converter Applications", excerpt: "When and how to use media converters to extend networks with fiber.", category: "Networking Basics", author: "BHL Networks", date: "2025-12-05", readTime: "6 min", tags: ["Media Converter", "Fiber", "Copper"] },
  { id: "9", slug: "industrial-switch-selection", title: "Industrial Switch Selection Guide", excerpt: "What to look for: temperature range, IP ratings, DIN rail, PoE, ring redundancy.", category: "Industrial", author: "BHL Networks", date: "2025-11-28", readTime: "7 min", tags: ["Industrial", "Switches", "DIN Rail"] },
  { id: "10", slug: "gpon-vs-epon-comparison", title: "GPON vs EPON: Choosing PON Technology", excerpt: "Technical comparison of GPON and EPON standards for FTTH.", category: "FTTH", author: "BHL Networks", date: "2025-11-20", readTime: "9 min", tags: ["GPON", "EPON", "FTTH", "PON"] },
];

export function getBlogBySlug(slug: string): Blog | undefined {
  return blogs.find((b) => b.slug === slug);
}

export function getFeaturedBlogs(): Blog[] {
  return blogs.filter((b) => b.featured).slice(0, 3);
}

export function getRecentBlogs(count: number = 6): Blog[] {
  return blogs.slice(0, count);
}

export function getBlogCategories(): string[] {
  return [...new Set(blogs.map((b) => b.category))];
}
