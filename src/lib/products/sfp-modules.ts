import { Product } from "../types";

export const sfp_modules_products: Product[] = [
  {
    id: 1,
    slug: "bhl-sfp-1g-lc-sx",
    name: "BHL SFP 1G LC SX",
    category: "sfp-modules",
    subcategory: "1g-sfp",
    price: 1499,
    badge: undefined,
    description: "The BHL SFP 1G LC SX is a premium networking component from BHL Networks, engineered for reliable performance in demanding environments. This hot-pluggable transceiver supports seamless integration into switches, routers, and media converters. Backed by BHL Networks' quality assurance and comprehensive warranty.",
    shortSpecs: ["1.25G", "LC", "550m", "850nm"],
    features: [
      "Hot-pluggable SFP/SFP+/QSFP+ form factor for easy installation",
      "Digital Diagnostic Monitoring (DDM) for real-time performance tracking",
      "Low power consumption with excellent heat dissipation",
      "100% tested for compatibility with major switch brands",
      "Industrial-grade temperature range (-40°C to +85°C)"
    ],
    specifications: {
      "Form Factor": "SFP/SFP+/SFP28/QSFP+/QSFP28",
      "Data Rate": "1.25G",
      "Fiber Type": "Dual Fiber",
      "Connector": "LC",
      "Max Distance": "550m",
      "Operating Temperature": "0°C to +70°C (Commercial) / -40°C to +85°C (Industrial)",
      "Supply Voltage": "3.3V",
      "Power Consumption": "<1.5W",
      "DDM/DOM": "Supported",
      "Compliance": "SFF-8472, IEEE 802.3",
      "Wavelength": "850nm"
    },
    useCases: [
      "ISP backbone",
      "enterprise switch uplinks",
      "FTTH distribution",
      "CCTV fiber backbone",
      "data center inter-rack"
    ],
    types: [{ title: "Product Types", items: ["1000BASE-SX", "LX", "ZX", "BiDi", "SM", "MM", "LC", "SC"] }],
    proTips: [
      "Always match SFP wavelength pairs.",
      "For BiDi, one end uses TX1310/RX1550, the other uses TX1550/RX1310."
    ],
    compatibleWith: ["Cisco", "Aruba", "TP-Link", "Ubiquiti", "Juniper", "MikroTik", "Netgear", "D-Link"],
    inBox: [
      "1x BHL SFP 1G LC SX transceiver",
      "Protective dust cap",
      "Anti-static bag",
      "Quick start guide",
      "Warranty card"
    ],
    warranty: "1 Year BHL Networks Warranty",
    images: ["/products/sfp-modules/bhl-sfp-1g-lc-sx.jpg"],
  },
  {
    id: 2,
    slug: "bhl-sfp-1g-lc-lx",
    name: "BHL SFP 1G LC LX",
    category: "sfp-modules",
    subcategory: "1g-sfp",
    price: 2199,
    badge: undefined,
    description: "The BHL SFP 1G LC LX is a premium networking component from BHL Networks, engineered for reliable performance in demanding environments. This hot-pluggable transceiver supports seamless integration into switches, routers, and media converters. Backed by BHL Networks' quality assurance and comprehensive warranty.",
    shortSpecs: ["1.25G", "LC", "10km", "1310nm"],
    features: [
      "Hot-pluggable SFP/SFP+/QSFP+ form factor for easy installation",
      "Digital Diagnostic Monitoring (DDM) for real-time performance tracking",
      "Low power consumption with excellent heat dissipation",
      "100% tested for compatibility with major switch brands",
      "Industrial-grade temperature range (-40°C to +85°C)"
    ],
    specifications: {
      "Form Factor": "SFP/SFP+/SFP28/QSFP+/QSFP28",
      "Data Rate": "1.25G",
      "Fiber Type": "Dual Fiber",
      "Connector": "LC",
      "Max Distance": "10km",
      "Operating Temperature": "0°C to +70°C (Commercial) / -40°C to +85°C (Industrial)",
      "Supply Voltage": "3.3V",
      "Power Consumption": "<1.5W",
      "DDM/DOM": "Supported",
      "Compliance": "SFF-8472, IEEE 802.3",
      "Wavelength": "1310nm"
    },
    useCases: [
      "ISP backbone",
      "enterprise switch uplinks",
      "FTTH distribution",
      "CCTV fiber backbone",
      "data center inter-rack"
    ],
    types: [{ title: "Product Types", items: ["1000BASE-SX", "LX", "ZX", "BiDi", "SM", "MM", "LC", "SC"] }],
    proTips: [
      "Always match SFP wavelength pairs.",
      "For BiDi, one end uses TX1310/RX1550, the other uses TX1550/RX1310."
    ],
    compatibleWith: ["Cisco", "Aruba", "TP-Link", "Ubiquiti", "Juniper", "MikroTik", "Netgear", "D-Link"],
    inBox: [
      "1x BHL SFP 1G LC LX transceiver",
      "Protective dust cap",
      "Anti-static bag",
      "Quick start guide",
      "Warranty card"
    ],
    warranty: "1 Year BHL Networks Warranty",
    images: ["/products/sfp-modules/bhl-sfp-1g-lc-lx.jpg"],
  },
  {
    id: 3,
    slug: "bhl-sfp-1g-lc-zx",
    name: "BHL SFP 1G LC ZX",
    category: "sfp-modules",
    subcategory: "1g-sfp",
    price: 9499,
    badge: undefined,
    description: "The BHL SFP 1G LC ZX is a premium networking component from BHL Networks, engineered for reliable performance in demanding environments. This hot-pluggable transceiver supports seamless integration into switches, routers, and media converters. Backed by BHL Networks' quality assurance and comprehensive warranty.",
    shortSpecs: ["1.25G", "LC", "80km", "1550nm"],
    features: [
      "Hot-pluggable SFP/SFP+/QSFP+ form factor for easy installation",
      "Digital Diagnostic Monitoring (DDM) for real-time performance tracking",
      "Low power consumption with excellent heat dissipation",
      "100% tested for compatibility with major switch brands",
      "Industrial-grade temperature range (-40°C to +85°C)"
    ],
    specifications: {
      "Form Factor": "SFP/SFP+/SFP28/QSFP+/QSFP28",
      "Data Rate": "1.25G",
      "Fiber Type": "Dual Fiber",
      "Connector": "LC",
      "Max Distance": "80km",
      "Operating Temperature": "0°C to +70°C (Commercial) / -40°C to +85°C (Industrial)",
      "Supply Voltage": "3.3V",
      "Power Consumption": "<1.5W",
      "DDM/DOM": "Supported",
      "Compliance": "SFF-8472, IEEE 802.3",
      "Wavelength": "1550nm"
    },
    useCases: [
      "ISP backbone",
      "enterprise switch uplinks",
      "FTTH distribution",
      "CCTV fiber backbone",
      "data center inter-rack"
    ],
    types: [{ title: "Product Types", items: ["1000BASE-SX", "LX", "ZX", "BiDi", "SM", "MM", "LC", "SC"] }],
    proTips: [
      "Always match SFP wavelength pairs.",
      "For BiDi, one end uses TX1310/RX1550, the other uses TX1550/RX1310."
    ],
    compatibleWith: ["Cisco", "Aruba", "TP-Link", "Ubiquiti", "Juniper", "MikroTik", "Netgear", "D-Link"],
    inBox: [
      "1x BHL SFP 1G LC ZX transceiver",
      "Protective dust cap",
      "Anti-static bag",
      "Quick start guide",
      "Warranty card"
    ],
    warranty: "1 Year BHL Networks Warranty",
    images: ["/products/sfp-modules/bhl-sfp-1g-lc-zx.jpg"],
  },
  {
    id: 4,
    slug: "bhl-sfp-1g-bidi-20km",
    name: "BHL SFP 1G BiDi 20km",
    category: "sfp-modules",
    subcategory: "1g-sfp",
    price: 1899,
    badge: "Single Fiber",
    description: "The BHL SFP 1G BiDi 20km is a premium networking component from BHL Networks, engineered for reliable performance in demanding environments. This hot-pluggable transceiver supports seamless integration into switches, routers, and media converters. BiDi technology allows data transmission over a single fiber strand, reducing fiber costs by 50%. Backed by BHL Networks' quality assurance and comprehensive warranty.",
    shortSpecs: ["1.25G", "LC", "20km", "TX1310/RX1550"],
    features: [
      "Hot-pluggable SFP/SFP+/QSFP+ form factor for easy installation",
      "Digital Diagnostic Monitoring (DDM) for real-time performance tracking",
      "Low power consumption with excellent heat dissipation",
      "100% tested for compatibility with major switch brands",
      "Industrial-grade temperature range (-40°C to +85°C)",
      "Single-fiber BiDi technology reduces fiber infrastructure costs by 50%"
    ],
    specifications: {
      "Form Factor": "SFP/SFP+/SFP28/QSFP+/QSFP28",
      "Data Rate": "1.25G",
      "Fiber Type": "Single Fiber",
      "Connector": "LC",
      "Max Distance": "20km",
      "Operating Temperature": "0°C to +70°C (Commercial) / -40°C to +85°C (Industrial)",
      "Supply Voltage": "3.3V",
      "Power Consumption": "<1.5W",
      "DDM/DOM": "Supported",
      "Compliance": "SFF-8472, IEEE 802.3",
      "Wavelength": "TX1310/RX1550"
    },
    useCases: [
      "ISP backbone",
      "enterprise switch uplinks",
      "FTTH distribution",
      "CCTV fiber backbone",
      "data center inter-rack"
    ],
    types: [{ title: "Product Types", items: ["1000BASE-SX", "LX", "ZX", "BiDi", "SM", "MM", "LC", "SC"] }],
    proTips: [
      "Always match SFP wavelength pairs.",
      "For BiDi, one end uses TX1310/RX1550, the other uses TX1550/RX1310."
    ],
    compatibleWith: ["Cisco", "Aruba", "TP-Link", "Ubiquiti", "Juniper", "MikroTik", "Netgear", "D-Link"],
    inBox: [
      "1x BHL SFP 1G BiDi 20km transceiver",
      "Protective dust cap",
      "Anti-static bag",
      "Quick start guide",
      "Warranty card"
    ],
    warranty: "1 Year BHL Networks Warranty",
    images: ["/products/sfp-modules/bhl-sfp-1g-bidi-20km.jpg"],
  },
  {
    id: 5,
    slug: "bhl-sfp-1g-bidi-40km",
    name: "BHL SFP 1G BiDi 40km",
    category: "sfp-modules",
    subcategory: "1g-sfp",
    price: 3499,
    badge: "Single Fiber",
    description: "The BHL SFP 1G BiDi 40km is a premium networking component from BHL Networks, engineered for reliable performance in demanding environments. This hot-pluggable transceiver supports seamless integration into switches, routers, and media converters. BiDi technology allows data transmission over a single fiber strand, reducing fiber costs by 50%. Backed by BHL Networks' quality assurance and comprehensive warranty.",
    shortSpecs: ["1.25G", "LC", "40km", "TX1310/RX1550"],
    features: [
      "Hot-pluggable SFP/SFP+/QSFP+ form factor for easy installation",
      "Digital Diagnostic Monitoring (DDM) for real-time performance tracking",
      "Low power consumption with excellent heat dissipation",
      "100% tested for compatibility with major switch brands",
      "Industrial-grade temperature range (-40°C to +85°C)",
      "Single-fiber BiDi technology reduces fiber infrastructure costs by 50%"
    ],
    specifications: {
      "Form Factor": "SFP/SFP+/SFP28/QSFP+/QSFP28",
      "Data Rate": "1.25G",
      "Fiber Type": "Single Fiber",
      "Connector": "LC",
      "Max Distance": "40km",
      "Operating Temperature": "0°C to +70°C (Commercial) / -40°C to +85°C (Industrial)",
      "Supply Voltage": "3.3V",
      "Power Consumption": "<1.5W",
      "DDM/DOM": "Supported",
      "Compliance": "SFF-8472, IEEE 802.3",
      "Wavelength": "TX1310/RX1550"
    },
    useCases: [
      "ISP backbone",
      "enterprise switch uplinks",
      "FTTH distribution",
      "CCTV fiber backbone",
      "data center inter-rack"
    ],
    types: [{ title: "Product Types", items: ["1000BASE-SX", "LX", "ZX", "BiDi", "SM", "MM", "LC", "SC"] }],
    proTips: [
      "Always match SFP wavelength pairs.",
      "For BiDi, one end uses TX1310/RX1550, the other uses TX1550/RX1310."
    ],
    compatibleWith: ["Cisco", "Aruba", "TP-Link", "Ubiquiti", "Juniper", "MikroTik", "Netgear", "D-Link"],
    inBox: [
      "1x BHL SFP 1G BiDi 40km transceiver",
      "Protective dust cap",
      "Anti-static bag",
      "Quick start guide",
      "Warranty card"
    ],
    warranty: "1 Year BHL Networks Warranty",
    images: ["/products/sfp-modules/bhl-sfp-1g-bidi-40km.jpg"],
  },
  {
    id: 6,
    slug: "bhl-sfp-1g-bidi-80km",
    name: "BHL SFP 1G BiDi 80km",
    category: "sfp-modules",
    subcategory: "1g-sfp",
    price: 7999,
    badge: "Single Fiber",
    description: "The BHL SFP 1G BiDi 80km is a premium networking component from BHL Networks, engineered for reliable performance in demanding environments. This hot-pluggable transceiver supports seamless integration into switches, routers, and media converters. BiDi technology allows data transmission over a single fiber strand, reducing fiber costs by 50%. Backed by BHL Networks' quality assurance and comprehensive warranty.",
    shortSpecs: ["1.25G", "LC", "80km", "TX1490/RX1550"],
    features: [
      "Hot-pluggable SFP/SFP+/QSFP+ form factor for easy installation",
      "Digital Diagnostic Monitoring (DDM) for real-time performance tracking",
      "Low power consumption with excellent heat dissipation",
      "100% tested for compatibility with major switch brands",
      "Industrial-grade temperature range (-40°C to +85°C)",
      "Single-fiber BiDi technology reduces fiber infrastructure costs by 50%"
    ],
    specifications: {
      "Form Factor": "SFP/SFP+/SFP28/QSFP+/QSFP28",
      "Data Rate": "1.25G",
      "Fiber Type": "Single Fiber",
      "Connector": "LC",
      "Max Distance": "80km",
      "Operating Temperature": "0°C to +70°C (Commercial) / -40°C to +85°C (Industrial)",
      "Supply Voltage": "3.3V",
      "Power Consumption": "<1.5W",
      "DDM/DOM": "Supported",
      "Compliance": "SFF-8472, IEEE 802.3",
      "Wavelength": "TX1490/RX1550"
    },
    useCases: [
      "ISP backbone",
      "enterprise switch uplinks",
      "FTTH distribution",
      "CCTV fiber backbone",
      "data center inter-rack"
    ],
    types: [{ title: "Product Types", items: ["1000BASE-SX", "LX", "ZX", "BiDi", "SM", "MM", "LC", "SC"] }],
    proTips: [
      "Always match SFP wavelength pairs.",
      "For BiDi, one end uses TX1310/RX1550, the other uses TX1550/RX1310."
    ],
    compatibleWith: ["Cisco", "Aruba", "TP-Link", "Ubiquiti", "Juniper", "MikroTik", "Netgear", "D-Link"],
    inBox: [
      "1x BHL SFP 1G BiDi 80km transceiver",
      "Protective dust cap",
      "Anti-static bag",
      "Quick start guide",
      "Warranty card"
    ],
    warranty: "1 Year BHL Networks Warranty",
    images: ["/products/sfp-modules/bhl-sfp-1g-bidi-80km.jpg"],
  },
  {
    id: 7,
    slug: "bhl-sfp-1g-sc-sx",
    name: "BHL SFP 1G SC SX",
    category: "sfp-modules",
    subcategory: "1g-sfp",
    price: 1399,
    badge: undefined,
    description: "The BHL SFP 1G SC SX is a premium networking component from BHL Networks, engineered for reliable performance in demanding environments. This hot-pluggable transceiver supports seamless integration into switches, routers, and media converters. Backed by BHL Networks' quality assurance and comprehensive warranty.",
    shortSpecs: ["1.25G", "SC", "550m", "850nm"],
    features: [
      "Hot-pluggable SFP/SFP+/QSFP+ form factor for easy installation",
      "Digital Diagnostic Monitoring (DDM) for real-time performance tracking",
      "Low power consumption with excellent heat dissipation",
      "100% tested for compatibility with major switch brands",
      "Industrial-grade temperature range (-40°C to +85°C)"
    ],
    specifications: {
      "Form Factor": "SFP/SFP+/SFP28/QSFP+/QSFP28",
      "Data Rate": "1.25G",
      "Fiber Type": "Dual Fiber",
      "Connector": "SC",
      "Max Distance": "550m",
      "Operating Temperature": "0°C to +70°C (Commercial) / -40°C to +85°C (Industrial)",
      "Supply Voltage": "3.3V",
      "Power Consumption": "<1.5W",
      "DDM/DOM": "Supported",
      "Compliance": "SFF-8472, IEEE 802.3",
      "Wavelength": "850nm"
    },
    useCases: [
      "ISP backbone",
      "enterprise switch uplinks",
      "FTTH distribution",
      "CCTV fiber backbone",
      "data center inter-rack"
    ],
    types: [{ title: "Product Types", items: ["1000BASE-SX", "LX", "ZX", "BiDi", "SM", "MM", "LC", "SC"] }],
    proTips: [
      "Always match SFP wavelength pairs.",
      "For BiDi, one end uses TX1310/RX1550, the other uses TX1550/RX1310."
    ],
    compatibleWith: ["Cisco", "Aruba", "TP-Link", "Ubiquiti", "Juniper", "MikroTik", "Netgear", "D-Link"],
    inBox: [
      "1x BHL SFP 1G SC SX transceiver",
      "Protective dust cap",
      "Anti-static bag",
      "Quick start guide",
      "Warranty card"
    ],
    warranty: "1 Year BHL Networks Warranty",
    images: ["/products/sfp-modules/bhl-sfp-1g-sc-sx.jpg"],
  },
  {
    id: 8,
    slug: "bhl-sfp-1g-sc-lx",
    name: "BHL SFP 1G SC LX",
    category: "sfp-modules",
    subcategory: "1g-sfp",
    price: 2099,
    badge: undefined,
    description: "The BHL SFP 1G SC LX is a premium networking component from BHL Networks, engineered for reliable performance in demanding environments. This hot-pluggable transceiver supports seamless integration into switches, routers, and media converters. Backed by BHL Networks' quality assurance and comprehensive warranty.",
    shortSpecs: ["1.25G", "SC", "10km", "1310nm"],
    features: [
      "Hot-pluggable SFP/SFP+/QSFP+ form factor for easy installation",
      "Digital Diagnostic Monitoring (DDM) for real-time performance tracking",
      "Low power consumption with excellent heat dissipation",
      "100% tested for compatibility with major switch brands",
      "Industrial-grade temperature range (-40°C to +85°C)"
    ],
    specifications: {
      "Form Factor": "SFP/SFP+/SFP28/QSFP+/QSFP28",
      "Data Rate": "1.25G",
      "Fiber Type": "Dual Fiber",
      "Connector": "SC",
      "Max Distance": "10km",
      "Operating Temperature": "0°C to +70°C (Commercial) / -40°C to +85°C (Industrial)",
      "Supply Voltage": "3.3V",
      "Power Consumption": "<1.5W",
      "DDM/DOM": "Supported",
      "Compliance": "SFF-8472, IEEE 802.3",
      "Wavelength": "1310nm"
    },
    useCases: [
      "ISP backbone",
      "enterprise switch uplinks",
      "FTTH distribution",
      "CCTV fiber backbone",
      "data center inter-rack"
    ],
    types: [{ title: "Product Types", items: ["1000BASE-SX", "LX", "ZX", "BiDi", "SM", "MM", "LC", "SC"] }],
    proTips: [
      "Always match SFP wavelength pairs.",
      "For BiDi, one end uses TX1310/RX1550, the other uses TX1550/RX1310."
    ],
    compatibleWith: ["Cisco", "Aruba", "TP-Link", "Ubiquiti", "Juniper", "MikroTik", "Netgear", "D-Link"],
    inBox: [
      "1x BHL SFP 1G SC LX transceiver",
      "Protective dust cap",
      "Anti-static bag",
      "Quick start guide",
      "Warranty card"
    ],
    warranty: "1 Year BHL Networks Warranty",
    images: ["/products/sfp-modules/bhl-sfp-1g-sc-lx.jpg"],
  },
  {
    id: 9,
    slug: "bhl-sfp-10g-sr",
    name: "BHL SFP+ 10G SR",
    category: "sfp-modules",
    subcategory: "10g-sfp",
    price: 3499,
    badge: undefined,
    description: "The BHL SFP+ 10G SR is a premium networking component from BHL Networks, engineered for reliable performance in demanding environments. This hot-pluggable transceiver supports seamless integration into switches, routers, and media converters. Backed by BHL Networks' quality assurance and comprehensive warranty.",
    shortSpecs: ["10G", "LC", "300m", "850nm"],
    features: [
      "Hot-pluggable SFP/SFP+/QSFP+ form factor for easy installation",
      "Digital Diagnostic Monitoring (DDM) for real-time performance tracking",
      "Low power consumption with excellent heat dissipation",
      "100% tested for compatibility with major switch brands",
      "Industrial-grade temperature range (-40°C to +85°C)"
    ],
    specifications: {
      "Form Factor": "SFP/SFP+/SFP28/QSFP+/QSFP28",
      "Data Rate": "10G",
      "Fiber Type": "Dual Fiber",
      "Connector": "LC",
      "Max Distance": "300m",
      "Operating Temperature": "0°C to +70°C (Commercial) / -40°C to +85°C (Industrial)",
      "Supply Voltage": "3.3V",
      "Power Consumption": "<1.5W",
      "DDM/DOM": "Supported",
      "Compliance": "SFF-8472, IEEE 802.3",
      "Wavelength": "850nm"
    },
    useCases: [
      "Enterprise networking",
      "ISP backbone",
      "Data center",
      "FTTH deployment",
      "CCTV surveillance"
    ],
    types: [],
    proTips: [
      "Always verify compatibility before installation",
      "Use proper cable management for optimal performance"
    ],
    compatibleWith: ["Cisco", "Aruba", "TP-Link", "Ubiquiti", "Juniper", "MikroTik", "Netgear", "D-Link"],
    inBox: [
      "1x BHL SFP+ 10G SR transceiver",
      "Protective dust cap",
      "Anti-static bag",
      "Quick start guide",
      "Warranty card"
    ],
    warranty: "1 Year BHL Networks Warranty",
    images: ["/products/sfp-modules/bhl-sfp-10g-sr.jpg"],
  },
  {
    id: 10,
    slug: "bhl-sfp-10g-lr",
    name: "BHL SFP+ 10G LR",
    category: "sfp-modules",
    subcategory: "10g-sfp",
    price: 5499,
    badge: undefined,
    description: "The BHL SFP+ 10G LR is a premium networking component from BHL Networks, engineered for reliable performance in demanding environments. This hot-pluggable transceiver supports seamless integration into switches, routers, and media converters. Backed by BHL Networks' quality assurance and comprehensive warranty.",
    shortSpecs: ["10G", "LC", "10km", "1310nm"],
    features: [
      "Hot-pluggable SFP/SFP+/QSFP+ form factor for easy installation",
      "Digital Diagnostic Monitoring (DDM) for real-time performance tracking",
      "Low power consumption with excellent heat dissipation",
      "100% tested for compatibility with major switch brands",
      "Industrial-grade temperature range (-40°C to +85°C)"
    ],
    specifications: {
      "Form Factor": "SFP/SFP+/SFP28/QSFP+/QSFP28",
      "Data Rate": "10G",
      "Fiber Type": "Dual Fiber",
      "Connector": "LC",
      "Max Distance": "10km",
      "Operating Temperature": "0°C to +70°C (Commercial) / -40°C to +85°C (Industrial)",
      "Supply Voltage": "3.3V",
      "Power Consumption": "<1.5W",
      "DDM/DOM": "Supported",
      "Compliance": "SFF-8472, IEEE 802.3",
      "Wavelength": "1310nm"
    },
    useCases: [
      "Enterprise networking",
      "ISP backbone",
      "Data center",
      "FTTH deployment",
      "CCTV surveillance"
    ],
    types: [],
    proTips: [
      "Always verify compatibility before installation",
      "Use proper cable management for optimal performance"
    ],
    compatibleWith: ["Cisco", "Aruba", "TP-Link", "Ubiquiti", "Juniper", "MikroTik", "Netgear", "D-Link"],
    inBox: [
      "1x BHL SFP+ 10G LR transceiver",
      "Protective dust cap",
      "Anti-static bag",
      "Quick start guide",
      "Warranty card"
    ],
    warranty: "1 Year BHL Networks Warranty",
    images: ["/products/sfp-modules/bhl-sfp-10g-lr.jpg"],
  },
  {
    id: 11,
    slug: "bhl-sfp-10g-er",
    name: "BHL SFP+ 10G ER",
    category: "sfp-modules",
    subcategory: "10g-sfp",
    price: 12999,
    badge: undefined,
    description: "The BHL SFP+ 10G ER is a premium networking component from BHL Networks, engineered for reliable performance in demanding environments. This hot-pluggable transceiver supports seamless integration into switches, routers, and media converters. Backed by BHL Networks' quality assurance and comprehensive warranty.",
    shortSpecs: ["10G", "LC", "40km", "1550nm"],
    features: [
      "Hot-pluggable SFP/SFP+/QSFP+ form factor for easy installation",
      "Digital Diagnostic Monitoring (DDM) for real-time performance tracking",
      "Low power consumption with excellent heat dissipation",
      "100% tested for compatibility with major switch brands",
      "Industrial-grade temperature range (-40°C to +85°C)"
    ],
    specifications: {
      "Form Factor": "SFP/SFP+/SFP28/QSFP+/QSFP28",
      "Data Rate": "10G",
      "Fiber Type": "Dual Fiber",
      "Connector": "LC",
      "Max Distance": "40km",
      "Operating Temperature": "0°C to +70°C (Commercial) / -40°C to +85°C (Industrial)",
      "Supply Voltage": "3.3V",
      "Power Consumption": "<1.5W",
      "DDM/DOM": "Supported",
      "Compliance": "SFF-8472, IEEE 802.3",
      "Wavelength": "1550nm"
    },
    useCases: [
      "Enterprise networking",
      "ISP backbone",
      "Data center",
      "FTTH deployment",
      "CCTV surveillance"
    ],
    types: [],
    proTips: [
      "Always verify compatibility before installation",
      "Use proper cable management for optimal performance"
    ],
    compatibleWith: ["Cisco", "Aruba", "TP-Link", "Ubiquiti", "Juniper", "MikroTik", "Netgear", "D-Link"],
    inBox: [
      "1x BHL SFP+ 10G ER transceiver",
      "Protective dust cap",
      "Anti-static bag",
      "Quick start guide",
      "Warranty card"
    ],
    warranty: "1 Year BHL Networks Warranty",
    images: ["/products/sfp-modules/bhl-sfp-10g-er.jpg"],
  },
  {
    id: 12,
    slug: "bhl-sfp-10g-zr",
    name: "BHL SFP+ 10G ZR",
    category: "sfp-modules",
    subcategory: "10g-sfp",
    price: 19999,
    badge: undefined,
    description: "The BHL SFP+ 10G ZR is a premium networking component from BHL Networks, engineered for reliable performance in demanding environments. This hot-pluggable transceiver supports seamless integration into switches, routers, and media converters. Backed by BHL Networks' quality assurance and comprehensive warranty.",
    shortSpecs: ["10G", "LC", "80km", "1550nm"],
    features: [
      "Hot-pluggable SFP/SFP+/QSFP+ form factor for easy installation",
      "Digital Diagnostic Monitoring (DDM) for real-time performance tracking",
      "Low power consumption with excellent heat dissipation",
      "100% tested for compatibility with major switch brands",
      "Industrial-grade temperature range (-40°C to +85°C)"
    ],
    specifications: {
      "Form Factor": "SFP/SFP+/SFP28/QSFP+/QSFP28",
      "Data Rate": "10G",
      "Fiber Type": "Dual Fiber",
      "Connector": "LC",
      "Max Distance": "80km",
      "Operating Temperature": "0°C to +70°C (Commercial) / -40°C to +85°C (Industrial)",
      "Supply Voltage": "3.3V",
      "Power Consumption": "<1.5W",
      "DDM/DOM": "Supported",
      "Compliance": "SFF-8472, IEEE 802.3",
      "Wavelength": "1550nm"
    },
    useCases: [
      "Enterprise networking",
      "ISP backbone",
      "Data center",
      "FTTH deployment",
      "CCTV surveillance"
    ],
    types: [],
    proTips: [
      "Always verify compatibility before installation",
      "Use proper cable management for optimal performance"
    ],
    compatibleWith: ["Cisco", "Aruba", "TP-Link", "Ubiquiti", "Juniper", "MikroTik", "Netgear", "D-Link"],
    inBox: [
      "1x BHL SFP+ 10G ZR transceiver",
      "Protective dust cap",
      "Anti-static bag",
      "Quick start guide",
      "Warranty card"
    ],
    warranty: "1 Year BHL Networks Warranty",
    images: ["/products/sfp-modules/bhl-sfp-10g-zr.jpg"],
  },
  {
    id: 13,
    slug: "bhl-sfp-10g-bidi-20km",
    name: "BHL SFP+ 10G BiDi 20km",
    category: "sfp-modules",
    subcategory: "10g-sfp",
    price: 4999,
    badge: "Single Fiber",
    description: "The BHL SFP+ 10G BiDi 20km is a premium networking component from BHL Networks, engineered for reliable performance in demanding environments. This hot-pluggable transceiver supports seamless integration into switches, routers, and media converters. BiDi technology allows data transmission over a single fiber strand, reducing fiber costs by 50%. Backed by BHL Networks' quality assurance and comprehensive warranty.",
    shortSpecs: ["10G", "LC", "20km", "TX1270/RX1330"],
    features: [
      "Hot-pluggable SFP/SFP+/QSFP+ form factor for easy installation",
      "Digital Diagnostic Monitoring (DDM) for real-time performance tracking",
      "Low power consumption with excellent heat dissipation",
      "100% tested for compatibility with major switch brands",
      "Industrial-grade temperature range (-40°C to +85°C)",
      "Single-fiber BiDi technology reduces fiber infrastructure costs by 50%"
    ],
    specifications: {
      "Form Factor": "SFP/SFP+/SFP28/QSFP+/QSFP28",
      "Data Rate": "10G",
      "Fiber Type": "Single Fiber",
      "Connector": "LC",
      "Max Distance": "20km",
      "Operating Temperature": "0°C to +70°C (Commercial) / -40°C to +85°C (Industrial)",
      "Supply Voltage": "3.3V",
      "Power Consumption": "<1.5W",
      "DDM/DOM": "Supported",
      "Compliance": "SFF-8472, IEEE 802.3",
      "Wavelength": "TX1270/RX1330"
    },
    useCases: [
      "Enterprise networking",
      "ISP backbone",
      "Data center",
      "FTTH deployment",
      "CCTV surveillance"
    ],
    types: [],
    proTips: [
      "Always verify compatibility before installation",
      "Use proper cable management for optimal performance"
    ],
    compatibleWith: ["Cisco", "Aruba", "TP-Link", "Ubiquiti", "Juniper", "MikroTik", "Netgear", "D-Link"],
    inBox: [
      "1x BHL SFP+ 10G BiDi 20km transceiver",
      "Protective dust cap",
      "Anti-static bag",
      "Quick start guide",
      "Warranty card"
    ],
    warranty: "1 Year BHL Networks Warranty",
    images: ["/products/sfp-modules/bhl-sfp-10g-bidi-20km.jpg"],
  },
  {
    id: 14,
    slug: "bhl-sfp-10g-bidi-40km",
    name: "BHL SFP+ 10G BiDi 40km",
    category: "sfp-modules",
    subcategory: "10g-sfp",
    price: 8999,
    badge: "Single Fiber",
    description: "The BHL SFP+ 10G BiDi 40km is a premium networking component from BHL Networks, engineered for reliable performance in demanding environments. This hot-pluggable transceiver supports seamless integration into switches, routers, and media converters. BiDi technology allows data transmission over a single fiber strand, reducing fiber costs by 50%. Backed by BHL Networks' quality assurance and comprehensive warranty.",
    shortSpecs: ["10G", "LC", "40km", "TX1270/RX1330"],
    features: [
      "Hot-pluggable SFP/SFP+/QSFP+ form factor for easy installation",
      "Digital Diagnostic Monitoring (DDM) for real-time performance tracking",
      "Low power consumption with excellent heat dissipation",
      "100% tested for compatibility with major switch brands",
      "Industrial-grade temperature range (-40°C to +85°C)",
      "Single-fiber BiDi technology reduces fiber infrastructure costs by 50%"
    ],
    specifications: {
      "Form Factor": "SFP/SFP+/SFP28/QSFP+/QSFP28",
      "Data Rate": "10G",
      "Fiber Type": "Single Fiber",
      "Connector": "LC",
      "Max Distance": "40km",
      "Operating Temperature": "0°C to +70°C (Commercial) / -40°C to +85°C (Industrial)",
      "Supply Voltage": "3.3V",
      "Power Consumption": "<1.5W",
      "DDM/DOM": "Supported",
      "Compliance": "SFF-8472, IEEE 802.3",
      "Wavelength": "TX1270/RX1330"
    },
    useCases: [
      "Enterprise networking",
      "ISP backbone",
      "Data center",
      "FTTH deployment",
      "CCTV surveillance"
    ],
    types: [],
    proTips: [
      "Always verify compatibility before installation",
      "Use proper cable management for optimal performance"
    ],
    compatibleWith: ["Cisco", "Aruba", "TP-Link", "Ubiquiti", "Juniper", "MikroTik", "Netgear", "D-Link"],
    inBox: [
      "1x BHL SFP+ 10G BiDi 40km transceiver",
      "Protective dust cap",
      "Anti-static bag",
      "Quick start guide",
      "Warranty card"
    ],
    warranty: "1 Year BHL Networks Warranty",
    images: ["/products/sfp-modules/bhl-sfp-10g-bidi-40km.jpg"],
  },
  {
    id: 15,
    slug: "bhl-sfp-10g-cwdm",
    name: "BHL SFP+ 10G CWDM",
    category: "sfp-modules",
    subcategory: "10g-sfp",
    price: 15999,
    badge: "WDM Technology",
    description: "The BHL SFP+ 10G CWDM is a premium networking component from BHL Networks, engineered for reliable performance in demanding environments. This hot-pluggable transceiver supports seamless integration into switches, routers, and media converters. Backed by BHL Networks' quality assurance and comprehensive warranty.",
    shortSpecs: ["10G", "LC", "10-80km", "1270-1610nm"],
    features: [
      "Hot-pluggable SFP/SFP+/QSFP+ form factor for easy installation",
      "Digital Diagnostic Monitoring (DDM) for real-time performance tracking",
      "Low power consumption with excellent heat dissipation",
      "100% tested for compatibility with major switch brands",
      "Industrial-grade temperature range (-40°C to +85°C)",
      "WDM technology enables multiple channels over single fiber for maximum bandwidth"
    ],
    specifications: {
      "Form Factor": "SFP/SFP+/SFP28/QSFP+/QSFP28",
      "Data Rate": "10G",
      "Fiber Type": "Dual Fiber",
      "Connector": "LC",
      "Max Distance": "10-80km",
      "Operating Temperature": "0°C to +70°C (Commercial) / -40°C to +85°C (Industrial)",
      "Supply Voltage": "3.3V",
      "Power Consumption": "<1.5W",
      "DDM/DOM": "Supported",
      "Compliance": "SFF-8472, IEEE 802.3",
      "Wavelength": "1270-1610nm"
    },
    useCases: [
      "Enterprise networking",
      "ISP backbone",
      "Data center",
      "FTTH deployment",
      "CCTV surveillance"
    ],
    types: [],
    proTips: [
      "Always verify compatibility before installation",
      "Use proper cable management for optimal performance"
    ],
    compatibleWith: ["Cisco", "Aruba", "TP-Link", "Ubiquiti", "Juniper", "MikroTik", "Netgear", "D-Link"],
    inBox: [
      "1x BHL SFP+ 10G CWDM transceiver",
      "Protective dust cap",
      "Anti-static bag",
      "Quick start guide",
      "Warranty card"
    ],
    warranty: "1 Year BHL Networks Warranty",
    images: ["/products/sfp-modules/bhl-sfp-10g-cwdm.jpg"],
  },
  {
    id: 16,
    slug: "bhl-sfp-10g-dwdm",
    name: "BHL SFP+ 10G DWDM",
    category: "sfp-modules",
    subcategory: "10g-sfp",
    price: 24999,
    badge: "WDM Technology",
    description: "The BHL SFP+ 10G DWDM is a premium networking component from BHL Networks, engineered for reliable performance in demanding environments. This hot-pluggable transceiver supports seamless integration into switches, routers, and media converters. Backed by BHL Networks' quality assurance and comprehensive warranty.",
    shortSpecs: ["10G", "LC", "40-80km", "C-Band"],
    features: [
      "Hot-pluggable SFP/SFP+/QSFP+ form factor for easy installation",
      "Digital Diagnostic Monitoring (DDM) for real-time performance tracking",
      "Low power consumption with excellent heat dissipation",
      "100% tested for compatibility with major switch brands",
      "Industrial-grade temperature range (-40°C to +85°C)",
      "WDM technology enables multiple channels over single fiber for maximum bandwidth"
    ],
    specifications: {
      "Form Factor": "SFP/SFP+/SFP28/QSFP+/QSFP28",
      "Data Rate": "10G",
      "Fiber Type": "Dual Fiber",
      "Connector": "LC",
      "Max Distance": "40-80km",
      "Operating Temperature": "0°C to +70°C (Commercial) / -40°C to +85°C (Industrial)",
      "Supply Voltage": "3.3V",
      "Power Consumption": "<1.5W",
      "DDM/DOM": "Supported",
      "Compliance": "SFF-8472, IEEE 802.3",
      "Wavelength": "C-Band"
    },
    useCases: [
      "Enterprise networking",
      "ISP backbone",
      "Data center",
      "FTTH deployment",
      "CCTV surveillance"
    ],
    types: [],
    proTips: [
      "Always verify compatibility before installation",
      "Use proper cable management for optimal performance"
    ],
    compatibleWith: ["Cisco", "Aruba", "TP-Link", "Ubiquiti", "Juniper", "MikroTik", "Netgear", "D-Link"],
    inBox: [
      "1x BHL SFP+ 10G DWDM transceiver",
      "Protective dust cap",
      "Anti-static bag",
      "Quick start guide",
      "Warranty card"
    ],
    warranty: "1 Year BHL Networks Warranty",
    images: ["/products/sfp-modules/bhl-sfp-10g-dwdm.jpg"],
  },
  {
    id: 17,
    slug: "bhl-sfp28-25g-sr",
    name: "BHL SFP28 25G SR",
    category: "sfp-modules",
    subcategory: "25g-sfp",
    price: 6999,
    badge: undefined,
    description: "The BHL SFP28 25G SR is a premium networking component from BHL Networks, engineered for reliable performance in demanding environments. This hot-pluggable transceiver supports seamless integration into switches, routers, and media converters. Backed by BHL Networks' quality assurance and comprehensive warranty.",
    shortSpecs: ["25G", "LC", "100m", "850nm"],
    features: [
      "Hot-pluggable SFP/SFP+/QSFP+ form factor for easy installation",
      "Digital Diagnostic Monitoring (DDM) for real-time performance tracking",
      "Low power consumption with excellent heat dissipation",
      "100% tested for compatibility with major switch brands",
      "Industrial-grade temperature range (-40°C to +85°C)"
    ],
    specifications: {
      "Form Factor": "SFP/SFP+/SFP28/QSFP+/QSFP28",
      "Data Rate": "25G",
      "Fiber Type": "Dual Fiber",
      "Connector": "LC",
      "Max Distance": "100m",
      "Operating Temperature": "0°C to +70°C (Commercial) / -40°C to +85°C (Industrial)",
      "Supply Voltage": "3.3V",
      "Power Consumption": "<1.5W",
      "DDM/DOM": "Supported",
      "Compliance": "SFF-8472, IEEE 802.3",
      "Wavelength": "850nm"
    },
    useCases: [
      "Enterprise networking",
      "ISP backbone",
      "Data center",
      "FTTH deployment",
      "CCTV surveillance"
    ],
    types: [],
    proTips: [
      "Always verify compatibility before installation",
      "Use proper cable management for optimal performance"
    ],
    compatibleWith: ["Cisco", "Aruba", "TP-Link", "Ubiquiti", "Juniper", "MikroTik", "Netgear", "D-Link"],
    inBox: [
      "1x BHL SFP28 25G SR transceiver",
      "Protective dust cap",
      "Anti-static bag",
      "Quick start guide",
      "Warranty card"
    ],
    warranty: "1 Year BHL Networks Warranty",
    images: ["/products/sfp-modules/bhl-sfp28-25g-sr.jpg"],
  },
  {
    id: 18,
    slug: "bhl-sfp28-25g-lr",
    name: "BHL SFP28 25G LR",
    category: "sfp-modules",
    subcategory: "25g-sfp",
    price: 9999,
    badge: undefined,
    description: "The BHL SFP28 25G LR is a premium networking component from BHL Networks, engineered for reliable performance in demanding environments. This hot-pluggable transceiver supports seamless integration into switches, routers, and media converters. Backed by BHL Networks' quality assurance and comprehensive warranty.",
    shortSpecs: ["25G", "LC", "10km", "1310nm"],
    features: [
      "Hot-pluggable SFP/SFP+/QSFP+ form factor for easy installation",
      "Digital Diagnostic Monitoring (DDM) for real-time performance tracking",
      "Low power consumption with excellent heat dissipation",
      "100% tested for compatibility with major switch brands",
      "Industrial-grade temperature range (-40°C to +85°C)"
    ],
    specifications: {
      "Form Factor": "SFP/SFP+/SFP28/QSFP+/QSFP28",
      "Data Rate": "25G",
      "Fiber Type": "Dual Fiber",
      "Connector": "LC",
      "Max Distance": "10km",
      "Operating Temperature": "0°C to +70°C (Commercial) / -40°C to +85°C (Industrial)",
      "Supply Voltage": "3.3V",
      "Power Consumption": "<1.5W",
      "DDM/DOM": "Supported",
      "Compliance": "SFF-8472, IEEE 802.3",
      "Wavelength": "1310nm"
    },
    useCases: [
      "Enterprise networking",
      "ISP backbone",
      "Data center",
      "FTTH deployment",
      "CCTV surveillance"
    ],
    types: [],
    proTips: [
      "Always verify compatibility before installation",
      "Use proper cable management for optimal performance"
    ],
    compatibleWith: ["Cisco", "Aruba", "TP-Link", "Ubiquiti", "Juniper", "MikroTik", "Netgear", "D-Link"],
    inBox: [
      "1x BHL SFP28 25G LR transceiver",
      "Protective dust cap",
      "Anti-static bag",
      "Quick start guide",
      "Warranty card"
    ],
    warranty: "1 Year BHL Networks Warranty",
    images: ["/products/sfp-modules/bhl-sfp28-25g-lr.jpg"],
  },
  {
    id: 19,
    slug: "bhl-sfp28-25g-bidi",
    name: "BHL SFP28 25G BiDi",
    category: "sfp-modules",
    subcategory: "25g-sfp",
    price: 11999,
    badge: "Single Fiber",
    description: "The BHL SFP28 25G BiDi is a premium networking component from BHL Networks, engineered for reliable performance in demanding environments. This hot-pluggable transceiver supports seamless integration into switches, routers, and media converters. BiDi technology allows data transmission over a single fiber strand, reducing fiber costs by 50%. Backed by BHL Networks' quality assurance and comprehensive warranty.",
    shortSpecs: ["25G", "LC", "10km", "TX1270/RX1330"],
    features: [
      "Hot-pluggable SFP/SFP+/QSFP+ form factor for easy installation",
      "Digital Diagnostic Monitoring (DDM) for real-time performance tracking",
      "Low power consumption with excellent heat dissipation",
      "100% tested for compatibility with major switch brands",
      "Industrial-grade temperature range (-40°C to +85°C)",
      "Single-fiber BiDi technology reduces fiber infrastructure costs by 50%"
    ],
    specifications: {
      "Form Factor": "SFP/SFP+/SFP28/QSFP+/QSFP28",
      "Data Rate": "25G",
      "Fiber Type": "Single Fiber",
      "Connector": "LC",
      "Max Distance": "10km",
      "Operating Temperature": "0°C to +70°C (Commercial) / -40°C to +85°C (Industrial)",
      "Supply Voltage": "3.3V",
      "Power Consumption": "<1.5W",
      "DDM/DOM": "Supported",
      "Compliance": "SFF-8472, IEEE 802.3",
      "Wavelength": "TX1270/RX1330"
    },
    useCases: [
      "Enterprise networking",
      "ISP backbone",
      "Data center",
      "FTTH deployment",
      "CCTV surveillance"
    ],
    types: [],
    proTips: [
      "Always verify compatibility before installation",
      "Use proper cable management for optimal performance"
    ],
    compatibleWith: ["Cisco", "Aruba", "TP-Link", "Ubiquiti", "Juniper", "MikroTik", "Netgear", "D-Link"],
    inBox: [
      "1x BHL SFP28 25G BiDi transceiver",
      "Protective dust cap",
      "Anti-static bag",
      "Quick start guide",
      "Warranty card"
    ],
    warranty: "1 Year BHL Networks Warranty",
    images: ["/products/sfp-modules/bhl-sfp28-25g-bidi.jpg"],
  },
  {
    id: 20,
    slug: "bhl-qsfp-40g-sr4",
    name: "BHL QSFP+ 40G SR4",
    category: "sfp-modules",
    subcategory: "40g-qsfp",
    price: 14999,
    badge: undefined,
    description: "The BHL QSFP+ 40G SR4 is a premium networking component from BHL Networks, engineered for reliable performance in demanding environments. This hot-pluggable transceiver supports seamless integration into switches, routers, and media converters. Backed by BHL Networks' quality assurance and comprehensive warranty.",
    shortSpecs: ["40G", "MPO/MTP", "100m", "850nm"],
    features: [
      "Hot-pluggable SFP/SFP+/QSFP+ form factor for easy installation",
      "Digital Diagnostic Monitoring (DDM) for real-time performance tracking",
      "Low power consumption with excellent heat dissipation",
      "100% tested for compatibility with major switch brands",
      "Industrial-grade temperature range (-40°C to +85°C)"
    ],
    specifications: {
      "Form Factor": "SFP/SFP+/SFP28/QSFP+/QSFP28",
      "Data Rate": "40G",
      "Fiber Type": "Multimode",
      "Connector": "MPO/MTP",
      "Max Distance": "100m",
      "Operating Temperature": "0°C to +70°C (Commercial) / -40°C to +85°C (Industrial)",
      "Supply Voltage": "3.3V",
      "Power Consumption": "<1.5W",
      "DDM/DOM": "Supported",
      "Compliance": "SFF-8472, IEEE 802.3",
      "Wavelength": "850nm"
    },
    useCases: [
      "Enterprise networking",
      "ISP backbone",
      "Data center",
      "FTTH deployment",
      "CCTV surveillance"
    ],
    types: [],
    proTips: [
      "Always verify compatibility before installation",
      "Use proper cable management for optimal performance"
    ],
    compatibleWith: ["Cisco", "Aruba", "TP-Link", "Ubiquiti", "Juniper", "MikroTik", "Netgear", "D-Link"],
    inBox: [
      "1x BHL QSFP+ 40G SR4 transceiver",
      "Protective dust cap",
      "Anti-static bag",
      "Quick start guide",
      "Warranty card"
    ],
    warranty: "1 Year BHL Networks Warranty",
    images: ["/products/sfp-modules/bhl-qsfp-40g-sr4.jpg"],
  },
  {
    id: 21,
    slug: "bhl-qsfp-40g-lr4",
    name: "BHL QSFP+ 40G LR4",
    category: "sfp-modules",
    subcategory: "40g-qsfp",
    price: 24999,
    badge: undefined,
    description: "The BHL QSFP+ 40G LR4 is a premium networking component from BHL Networks, engineered for reliable performance in demanding environments. This hot-pluggable transceiver supports seamless integration into switches, routers, and media converters. Backed by BHL Networks' quality assurance and comprehensive warranty.",
    shortSpecs: ["40G", "LC", "10km", "1271-1331nm"],
    features: [
      "Hot-pluggable SFP/SFP+/QSFP+ form factor for easy installation",
      "Digital Diagnostic Monitoring (DDM) for real-time performance tracking",
      "Low power consumption with excellent heat dissipation",
      "100% tested for compatibility with major switch brands",
      "Industrial-grade temperature range (-40°C to +85°C)"
    ],
    specifications: {
      "Form Factor": "SFP/SFP+/SFP28/QSFP+/QSFP28",
      "Data Rate": "40G",
      "Fiber Type": "Single Mode",
      "Connector": "LC",
      "Max Distance": "10km",
      "Operating Temperature": "0°C to +70°C (Commercial) / -40°C to +85°C (Industrial)",
      "Supply Voltage": "3.3V",
      "Power Consumption": "<1.5W",
      "DDM/DOM": "Supported",
      "Compliance": "SFF-8472, IEEE 802.3",
      "Wavelength": "1271-1331nm"
    },
    useCases: [
      "Enterprise networking",
      "ISP backbone",
      "Data center",
      "FTTH deployment",
      "CCTV surveillance"
    ],
    types: [],
    proTips: [
      "Always verify compatibility before installation",
      "Use proper cable management for optimal performance"
    ],
    compatibleWith: ["Cisco", "Aruba", "TP-Link", "Ubiquiti", "Juniper", "MikroTik", "Netgear", "D-Link"],
    inBox: [
      "1x BHL QSFP+ 40G LR4 transceiver",
      "Protective dust cap",
      "Anti-static bag",
      "Quick start guide",
      "Warranty card"
    ],
    warranty: "1 Year BHL Networks Warranty",
    images: ["/products/sfp-modules/bhl-qsfp-40g-lr4.jpg"],
  },
  {
    id: 22,
    slug: "bhl-qsfp-40g-psm4",
    name: "BHL QSFP+ 40G PSM4",
    category: "sfp-modules",
    subcategory: "40g-qsfp",
    price: 19999,
    badge: undefined,
    description: "The BHL QSFP+ 40G PSM4 is a premium networking component from BHL Networks, engineered for reliable performance in demanding environments. This hot-pluggable transceiver supports seamless integration into switches, routers, and media converters. Backed by BHL Networks' quality assurance and comprehensive warranty.",
    shortSpecs: ["40G", "MPO/MTP", "10km", "1310nm"],
    features: [
      "Hot-pluggable SFP/SFP+/QSFP+ form factor for easy installation",
      "Digital Diagnostic Monitoring (DDM) for real-time performance tracking",
      "Low power consumption with excellent heat dissipation",
      "100% tested for compatibility with major switch brands",
      "Industrial-grade temperature range (-40°C to +85°C)"
    ],
    specifications: {
      "Form Factor": "SFP/SFP+/SFP28/QSFP+/QSFP28",
      "Data Rate": "40G",
      "Fiber Type": "Single Mode",
      "Connector": "MPO/MTP",
      "Max Distance": "10km",
      "Operating Temperature": "0°C to +70°C (Commercial) / -40°C to +85°C (Industrial)",
      "Supply Voltage": "3.3V",
      "Power Consumption": "<1.5W",
      "DDM/DOM": "Supported",
      "Compliance": "SFF-8472, IEEE 802.3",
      "Wavelength": "1310nm"
    },
    useCases: [
      "Enterprise networking",
      "ISP backbone",
      "Data center",
      "FTTH deployment",
      "CCTV surveillance"
    ],
    types: [],
    proTips: [
      "Always verify compatibility before installation",
      "Use proper cable management for optimal performance"
    ],
    compatibleWith: ["Cisco", "Aruba", "TP-Link", "Ubiquiti", "Juniper", "MikroTik", "Netgear", "D-Link"],
    inBox: [
      "1x BHL QSFP+ 40G PSM4 transceiver",
      "Protective dust cap",
      "Anti-static bag",
      "Quick start guide",
      "Warranty card"
    ],
    warranty: "1 Year BHL Networks Warranty",
    images: ["/products/sfp-modules/bhl-qsfp-40g-psm4.jpg"],
  },
  {
    id: 23,
    slug: "bhl-qsfp28-100g-sr4",
    name: "BHL QSFP28 100G SR4",
    category: "sfp-modules",
    subcategory: "100g-qsfp",
    price: 34999,
    badge: undefined,
    description: "The BHL QSFP28 100G SR4 is a premium networking component from BHL Networks, engineered for reliable performance in demanding environments. This hot-pluggable transceiver supports seamless integration into switches, routers, and media converters. Backed by BHL Networks' quality assurance and comprehensive warranty.",
    shortSpecs: ["100G", "MPO/MTP", "100m", "850nm"],
    features: [
      "Hot-pluggable SFP/SFP+/QSFP+ form factor for easy installation",
      "Digital Diagnostic Monitoring (DDM) for real-time performance tracking",
      "Low power consumption with excellent heat dissipation",
      "100% tested for compatibility with major switch brands",
      "Industrial-grade temperature range (-40°C to +85°C)"
    ],
    specifications: {
      "Form Factor": "SFP/SFP+/SFP28/QSFP+/QSFP28",
      "Data Rate": "100G",
      "Fiber Type": "Multimode",
      "Connector": "MPO/MTP",
      "Max Distance": "100m",
      "Operating Temperature": "0°C to +70°C (Commercial) / -40°C to +85°C (Industrial)",
      "Supply Voltage": "3.3V",
      "Power Consumption": "<1.5W",
      "DDM/DOM": "Supported",
      "Compliance": "SFF-8472, IEEE 802.3",
      "Wavelength": "850nm"
    },
    useCases: [
      "Enterprise networking",
      "ISP backbone",
      "Data center",
      "FTTH deployment",
      "CCTV surveillance"
    ],
    types: [],
    proTips: [
      "Always verify compatibility before installation",
      "Use proper cable management for optimal performance"
    ],
    compatibleWith: ["Cisco", "Aruba", "TP-Link", "Ubiquiti", "Juniper", "MikroTik", "Netgear", "D-Link"],
    inBox: [
      "1x BHL QSFP28 100G SR4 transceiver",
      "Protective dust cap",
      "Anti-static bag",
      "Quick start guide",
      "Warranty card"
    ],
    warranty: "1 Year BHL Networks Warranty",
    images: ["/products/sfp-modules/bhl-qsfp28-100g-sr4.jpg"],
  },
  {
    id: 24,
    slug: "bhl-qsfp28-100g-lr4",
    name: "BHL QSFP28 100G LR4",
    category: "sfp-modules",
    subcategory: "100g-qsfp",
    price: 49999,
    badge: undefined,
    description: "The BHL QSFP28 100G LR4 is a premium networking component from BHL Networks, engineered for reliable performance in demanding environments. This hot-pluggable transceiver supports seamless integration into switches, routers, and media converters. Backed by BHL Networks' quality assurance and comprehensive warranty.",
    shortSpecs: ["100G", "LC", "10km", "1295-1310nm"],
    features: [
      "Hot-pluggable SFP/SFP+/QSFP+ form factor for easy installation",
      "Digital Diagnostic Monitoring (DDM) for real-time performance tracking",
      "Low power consumption with excellent heat dissipation",
      "100% tested for compatibility with major switch brands",
      "Industrial-grade temperature range (-40°C to +85°C)"
    ],
    specifications: {
      "Form Factor": "SFP/SFP+/SFP28/QSFP+/QSFP28",
      "Data Rate": "100G",
      "Fiber Type": "Single Mode",
      "Connector": "LC",
      "Max Distance": "10km",
      "Operating Temperature": "0°C to +70°C (Commercial) / -40°C to +85°C (Industrial)",
      "Supply Voltage": "3.3V",
      "Power Consumption": "<1.5W",
      "DDM/DOM": "Supported",
      "Compliance": "SFF-8472, IEEE 802.3",
      "Wavelength": "1295-1310nm"
    },
    useCases: [
      "Enterprise networking",
      "ISP backbone",
      "Data center",
      "FTTH deployment",
      "CCTV surveillance"
    ],
    types: [],
    proTips: [
      "Always verify compatibility before installation",
      "Use proper cable management for optimal performance"
    ],
    compatibleWith: ["Cisco", "Aruba", "TP-Link", "Ubiquiti", "Juniper", "MikroTik", "Netgear", "D-Link"],
    inBox: [
      "1x BHL QSFP28 100G LR4 transceiver",
      "Protective dust cap",
      "Anti-static bag",
      "Quick start guide",
      "Warranty card"
    ],
    warranty: "1 Year BHL Networks Warranty",
    images: ["/products/sfp-modules/bhl-qsfp28-100g-lr4.jpg"],
  },
  {
    id: 25,
    slug: "bhl-qsfp28-100g-cwdm4",
    name: "BHL QSFP28 100G CWDM4",
    category: "sfp-modules",
    subcategory: "100g-qsfp",
    price: 39999,
    badge: "WDM Technology",
    description: "The BHL QSFP28 100G CWDM4 is a premium networking component from BHL Networks, engineered for reliable performance in demanding environments. This hot-pluggable transceiver supports seamless integration into switches, routers, and media converters. Backed by BHL Networks' quality assurance and comprehensive warranty.",
    shortSpecs: ["100G", "LC", "2km", "1271-1331nm"],
    features: [
      "Hot-pluggable SFP/SFP+/QSFP+ form factor for easy installation",
      "Digital Diagnostic Monitoring (DDM) for real-time performance tracking",
      "Low power consumption with excellent heat dissipation",
      "100% tested for compatibility with major switch brands",
      "Industrial-grade temperature range (-40°C to +85°C)",
      "WDM technology enables multiple channels over single fiber for maximum bandwidth"
    ],
    specifications: {
      "Form Factor": "SFP/SFP+/SFP28/QSFP+/QSFP28",
      "Data Rate": "100G",
      "Fiber Type": "Single Mode",
      "Connector": "LC",
      "Max Distance": "2km",
      "Operating Temperature": "0°C to +70°C (Commercial) / -40°C to +85°C (Industrial)",
      "Supply Voltage": "3.3V",
      "Power Consumption": "<1.5W",
      "DDM/DOM": "Supported",
      "Compliance": "SFF-8472, IEEE 802.3",
      "Wavelength": "1271-1331nm"
    },
    useCases: [
      "Enterprise networking",
      "ISP backbone",
      "Data center",
      "FTTH deployment",
      "CCTV surveillance"
    ],
    types: [],
    proTips: [
      "Always verify compatibility before installation",
      "Use proper cable management for optimal performance"
    ],
    compatibleWith: ["Cisco", "Aruba", "TP-Link", "Ubiquiti", "Juniper", "MikroTik", "Netgear", "D-Link"],
    inBox: [
      "1x BHL QSFP28 100G CWDM4 transceiver",
      "Protective dust cap",
      "Anti-static bag",
      "Quick start guide",
      "Warranty card"
    ],
    warranty: "1 Year BHL Networks Warranty",
    images: ["/products/sfp-modules/bhl-qsfp28-100g-cwdm4.jpg"],
  },
  {
    id: 26,
    slug: "bhl-copper-sfp-101001000",
    name: "BHL Copper SFP 10/100/1000",
    category: "sfp-modules",
    subcategory: "copper-sfp",
    price: 2499,
    badge: undefined,
    description: "The BHL Copper SFP 10/100/1000 is a premium networking component from BHL Networks, engineered for reliable performance in demanding environments. This hot-pluggable transceiver supports seamless integration into switches, routers, and media converters. Backed by BHL Networks' quality assurance and comprehensive warranty.",
    shortSpecs: ["10/100/1000M", "RJ45", "100m", "₹2,499"],
    features: [
      "Hot-pluggable SFP/SFP+/QSFP+ form factor for easy installation",
      "Digital Diagnostic Monitoring (DDM) for real-time performance tracking",
      "Low power consumption with excellent heat dissipation",
      "100% tested for compatibility with major switch brands",
      "Industrial-grade temperature range (-40°C to +85°C)",
      "RJ45 copper interface for seamless integration with existing copper infrastructure"
    ],
    specifications: {
      "Form Factor": "SFP/SFP+/SFP28/QSFP+/QSFP28",
      "Data Rate": "10/100/1000M",
      "Fiber Type": "Copper",
      "Connector": "RJ45",
      "Max Distance": "100m",
      "Operating Temperature": "0°C to +70°C (Commercial) / -40°C to +85°C (Industrial)",
      "Supply Voltage": "3.3V",
      "Power Consumption": "<1.5W",
      "DDM/DOM": "Supported",
      "Compliance": "SFF-8472, IEEE 802.3",
      "Standard": "SDH/SONET"
    },
    useCases: [
      "Enterprise networking",
      "ISP backbone",
      "Data center",
      "FTTH deployment",
      "CCTV surveillance"
    ],
    types: [],
    proTips: [
      "Always verify compatibility before installation",
      "Use proper cable management for optimal performance"
    ],
    compatibleWith: ["Cisco", "Aruba", "TP-Link", "Ubiquiti", "Juniper", "MikroTik", "Netgear", "D-Link"],
    inBox: [
      "1x BHL Copper SFP 10/100/1000 transceiver",
      "Protective dust cap",
      "Anti-static bag",
      "Quick start guide",
      "Warranty card"
    ],
    warranty: "1 Year BHL Networks Warranty",
    images: ["/products/sfp-modules/bhl-copper-sfp-101001000.jpg"],
  },
  {
    id: 27,
    slug: "bhl-copper-sfp-10g-t",
    name: "BHL Copper SFP+ 10G-T",
    category: "sfp-modules",
    subcategory: "copper-sfp",
    price: 5999,
    badge: undefined,
    description: "The BHL Copper SFP+ 10G-T is a premium networking component from BHL Networks, engineered for reliable performance in demanding environments. This hot-pluggable transceiver supports seamless integration into switches, routers, and media converters. Backed by BHL Networks' quality assurance and comprehensive warranty.",
    shortSpecs: ["10G", "RJ45", "30m", "₹5,999"],
    features: [
      "Hot-pluggable SFP/SFP+/QSFP+ form factor for easy installation",
      "Digital Diagnostic Monitoring (DDM) for real-time performance tracking",
      "Low power consumption with excellent heat dissipation",
      "100% tested for compatibility with major switch brands",
      "Industrial-grade temperature range (-40°C to +85°C)",
      "RJ45 copper interface for seamless integration with existing copper infrastructure"
    ],
    specifications: {
      "Form Factor": "SFP/SFP+/SFP28/QSFP+/QSFP28",
      "Data Rate": "10G",
      "Fiber Type": "Copper",
      "Connector": "RJ45",
      "Max Distance": "30m",
      "Operating Temperature": "0°C to +70°C (Commercial) / -40°C to +85°C (Industrial)",
      "Supply Voltage": "3.3V",
      "Power Consumption": "<1.5W",
      "DDM/DOM": "Supported",
      "Compliance": "SFF-8472, IEEE 802.3",
      "Standard": "SDH/SONET"
    },
    useCases: [
      "Enterprise networking",
      "ISP backbone",
      "Data center",
      "FTTH deployment",
      "CCTV surveillance"
    ],
    types: [],
    proTips: [
      "Always verify compatibility before installation",
      "Use proper cable management for optimal performance"
    ],
    compatibleWith: ["Cisco", "Aruba", "TP-Link", "Ubiquiti", "Juniper", "MikroTik", "Netgear", "D-Link"],
    inBox: [
      "1x BHL Copper SFP+ 10G-T transceiver",
      "Protective dust cap",
      "Anti-static bag",
      "Quick start guide",
      "Warranty card"
    ],
    warranty: "1 Year BHL Networks Warranty",
    images: ["/products/sfp-modules/bhl-copper-sfp-10g-t.jpg"],
  },
  {
    id: 28,
    slug: "bhl-copper-sfp-10g-t-80m",
    name: "BHL Copper SFP+ 10G-T 80m",
    category: "sfp-modules",
    subcategory: "copper-sfp",
    price: 8999,
    badge: undefined,
    description: "The BHL Copper SFP+ 10G-T 80m is a premium networking component from BHL Networks, engineered for reliable performance in demanding environments. This hot-pluggable transceiver supports seamless integration into switches, routers, and media converters. Backed by BHL Networks' quality assurance and comprehensive warranty.",
    shortSpecs: ["10G", "RJ45", "80m", "₹8,999"],
    features: [
      "Hot-pluggable SFP/SFP+/QSFP+ form factor for easy installation",
      "Digital Diagnostic Monitoring (DDM) for real-time performance tracking",
      "Low power consumption with excellent heat dissipation",
      "100% tested for compatibility with major switch brands",
      "Industrial-grade temperature range (-40°C to +85°C)",
      "RJ45 copper interface for seamless integration with existing copper infrastructure"
    ],
    specifications: {
      "Form Factor": "SFP/SFP+/SFP28/QSFP+/QSFP28",
      "Data Rate": "10G",
      "Fiber Type": "Copper",
      "Connector": "RJ45",
      "Max Distance": "80m",
      "Operating Temperature": "0°C to +70°C (Commercial) / -40°C to +85°C (Industrial)",
      "Supply Voltage": "3.3V",
      "Power Consumption": "<1.5W",
      "DDM/DOM": "Supported",
      "Compliance": "SFF-8472, IEEE 802.3",
      "Standard": "SDH/SONET"
    },
    useCases: [
      "Enterprise networking",
      "ISP backbone",
      "Data center",
      "FTTH deployment",
      "CCTV surveillance"
    ],
    types: [],
    proTips: [
      "Always verify compatibility before installation",
      "Use proper cable management for optimal performance"
    ],
    compatibleWith: ["Cisco", "Aruba", "TP-Link", "Ubiquiti", "Juniper", "MikroTik", "Netgear", "D-Link"],
    inBox: [
      "1x BHL Copper SFP+ 10G-T 80m transceiver",
      "Protective dust cap",
      "Anti-static bag",
      "Quick start guide",
      "Warranty card"
    ],
    warranty: "1 Year BHL Networks Warranty",
    images: ["/products/sfp-modules/bhl-copper-sfp-10g-t-80m.jpg"],
  },
  {
    id: 29,
    slug: "bhl-stm-1-sfp",
    name: "BHL STM-1 SFP",
    category: "sfp-modules",
    subcategory: "stm-sfp",
    price: 3999,
    badge: undefined,
    description: "The BHL STM-1 SFP is a premium networking component from BHL Networks, engineered for reliable performance in demanding environments. This hot-pluggable transceiver supports seamless integration into switches, routers, and media converters. Backed by BHL Networks' quality assurance and comprehensive warranty.",
    shortSpecs: ["155M", "LC", "15km", "₹3,999"],
    features: [
      "Hot-pluggable SFP/SFP+/QSFP+ form factor for easy installation",
      "Digital Diagnostic Monitoring (DDM) for real-time performance tracking",
      "Low power consumption with excellent heat dissipation",
      "100% tested for compatibility with major switch brands",
      "Industrial-grade temperature range (-40°C to +85°C)"
    ],
    specifications: {
      "Form Factor": "SFP/SFP+/SFP28/QSFP+/QSFP28",
      "Data Rate": "155M",
      "Fiber Type": "SDH/SONET",
      "Connector": "LC",
      "Max Distance": "15km",
      "Operating Temperature": "0°C to +70°C (Commercial) / -40°C to +85°C (Industrial)",
      "Supply Voltage": "3.3V",
      "Power Consumption": "<1.5W",
      "DDM/DOM": "Supported",
      "Compliance": "SFF-8472, IEEE 802.3",
      "Standard": "SDH/SONET"
    },
    useCases: [
      "Enterprise networking",
      "ISP backbone",
      "Data center",
      "FTTH deployment",
      "CCTV surveillance"
    ],
    types: [],
    proTips: [
      "Always verify compatibility before installation",
      "Use proper cable management for optimal performance"
    ],
    compatibleWith: ["Cisco", "Aruba", "TP-Link", "Ubiquiti", "Juniper", "MikroTik", "Netgear", "D-Link"],
    inBox: [
      "1x BHL STM-1 SFP transceiver",
      "Protective dust cap",
      "Anti-static bag",
      "Quick start guide",
      "Warranty card"
    ],
    warranty: "1 Year BHL Networks Warranty",
    images: ["/products/sfp-modules/bhl-stm-1-sfp.jpg"],
  },
  {
    id: 30,
    slug: "bhl-stm-4-sfp",
    name: "BHL STM-4 SFP",
    category: "sfp-modules",
    subcategory: "stm-sfp",
    price: 5999,
    badge: undefined,
    description: "The BHL STM-4 SFP is a premium networking component from BHL Networks, engineered for reliable performance in demanding environments. This hot-pluggable transceiver supports seamless integration into switches, routers, and media converters. Backed by BHL Networks' quality assurance and comprehensive warranty.",
    shortSpecs: ["622M", "LC", "15km", "₹5,999"],
    features: [
      "Hot-pluggable SFP/SFP+/QSFP+ form factor for easy installation",
      "Digital Diagnostic Monitoring (DDM) for real-time performance tracking",
      "Low power consumption with excellent heat dissipation",
      "100% tested for compatibility with major switch brands",
      "Industrial-grade temperature range (-40°C to +85°C)"
    ],
    specifications: {
      "Form Factor": "SFP/SFP+/SFP28/QSFP+/QSFP28",
      "Data Rate": "622M",
      "Fiber Type": "SDH/SONET",
      "Connector": "LC",
      "Max Distance": "15km",
      "Operating Temperature": "0°C to +70°C (Commercial) / -40°C to +85°C (Industrial)",
      "Supply Voltage": "3.3V",
      "Power Consumption": "<1.5W",
      "DDM/DOM": "Supported",
      "Compliance": "SFF-8472, IEEE 802.3",
      "Standard": "SDH/SONET"
    },
    useCases: [
      "Enterprise networking",
      "ISP backbone",
      "Data center",
      "FTTH deployment",
      "CCTV surveillance"
    ],
    types: [],
    proTips: [
      "Always verify compatibility before installation",
      "Use proper cable management for optimal performance"
    ],
    compatibleWith: ["Cisco", "Aruba", "TP-Link", "Ubiquiti", "Juniper", "MikroTik", "Netgear", "D-Link"],
    inBox: [
      "1x BHL STM-4 SFP transceiver",
      "Protective dust cap",
      "Anti-static bag",
      "Quick start guide",
      "Warranty card"
    ],
    warranty: "1 Year BHL Networks Warranty",
    images: ["/products/sfp-modules/bhl-stm-4-sfp.jpg"],
  },
  {
    id: 31,
    slug: "bhl-stm-16-sfp",
    name: "BHL STM-16 SFP",
    category: "sfp-modules",
    subcategory: "stm-sfp",
    price: 8999,
    badge: undefined,
    description: "The BHL STM-16 SFP is a premium networking component from BHL Networks, engineered for reliable performance in demanding environments. This hot-pluggable transceiver supports seamless integration into switches, routers, and media converters. Backed by BHL Networks' quality assurance and comprehensive warranty.",
    shortSpecs: ["2.5G", "LC", "15km", "₹8,999"],
    features: [
      "Hot-pluggable SFP/SFP+/QSFP+ form factor for easy installation",
      "Digital Diagnostic Monitoring (DDM) for real-time performance tracking",
      "Low power consumption with excellent heat dissipation",
      "100% tested for compatibility with major switch brands",
      "Industrial-grade temperature range (-40°C to +85°C)"
    ],
    specifications: {
      "Form Factor": "SFP/SFP+/SFP28/QSFP+/QSFP28",
      "Data Rate": "2.5G",
      "Fiber Type": "SDH/SONET",
      "Connector": "LC",
      "Max Distance": "15km",
      "Operating Temperature": "0°C to +70°C (Commercial) / -40°C to +85°C (Industrial)",
      "Supply Voltage": "3.3V",
      "Power Consumption": "<1.5W",
      "DDM/DOM": "Supported",
      "Compliance": "SFF-8472, IEEE 802.3",
      "Standard": "SDH/SONET"
    },
    useCases: [
      "Enterprise networking",
      "ISP backbone",
      "Data center",
      "FTTH deployment",
      "CCTV surveillance"
    ],
    types: [],
    proTips: [
      "Always verify compatibility before installation",
      "Use proper cable management for optimal performance"
    ],
    compatibleWith: ["Cisco", "Aruba", "TP-Link", "Ubiquiti", "Juniper", "MikroTik", "Netgear", "D-Link"],
    inBox: [
      "1x BHL STM-16 SFP transceiver",
      "Protective dust cap",
      "Anti-static bag",
      "Quick start guide",
      "Warranty card"
    ],
    warranty: "1 Year BHL Networks Warranty",
    images: ["/products/sfp-modules/bhl-stm-16-sfp.jpg"],
  }
];

export default sfp_modules_products;