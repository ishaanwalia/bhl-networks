export interface Product {
  id: number;
  slug: string;
  name: string;
  category: string;
  subcategory: string;
  price: number;
  badge?: string;
  description: string;
  shortSpecs: string[];
  features: string[];
  specifications: Record<string, string>;
  useCases: string[];
  types: { title: string; items: string[] }[];
  proTips: string[];
  compatibleWith: string[];
  inBox: string[];
  warranty: string;
  images: string[];
}

export interface CategoryInfo {
  id: string;
  name: string;
  slug: string;
  description: string;
  count: number;
  icon: string;
}

export const categories: CategoryInfo[] = [
  {
    id: 'sfp-modules',
    name: 'SFP Modules',
    slug: 'sfp-modules',
    description: 'High-performance optical transceivers for fiber networking — 1G to 100G speeds.',
    count: 31,
    icon: 'Zap',
  },
  {
    id: 'fiber-products',
    name: 'Fiber Products',
    slug: 'fiber-products',
    description: 'Fiber patch cords, pigtails, adapters, and attenuators for reliable fiber connections.',
    count: 27,
    icon: 'Cable',
  },
  {
    id: 'switches',
    name: 'Switches',
    slug: 'switches',
    description: 'Unmanaged, managed L2/L3, PoE, and industrial Ethernet switches.',
    count: 26,
    icon: 'Network',
  },
  {
    id: 'cabling',
    name: 'Cabling & Structured Cabling',
    slug: 'cabling',
    description: 'Cat6/Cat6A patch cords, DAC, AOC, keystone jacks, face plates, and rack accessories.',
    count: 46,
    icon: 'Plug',
  },
  {
    id: 'ftth-accessories',
    name: 'FTTH & Accessories',
    slug: 'ftth-accessories',
    description: 'Media converters, PoE injectors, and cable management solutions.',
    count: 22,
    icon: 'Radio',
  },
  {
    id: 'gpon-products',
    name: 'GPON/ONU Products',
    slug: 'gpon-products',
    description: 'GPON and EPON ONU/ONT units for fiber-to-the-home deployments.',
    count: 11,
    icon: 'Wifi',
  },
  {
    id: 'network-kits',
    name: 'Network Installation Kits',
    slug: 'network-kits',
    description: 'Pre-bundled installation kits with everything needed for network setup.',
    count: 7,
    icon: 'Package',
  },
];