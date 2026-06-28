import Link from "next/link";
import { MessageCircle, Mail, MapPin } from "lucide-react";

const productLinks = [
  { href: "/products#sfp-modules", label: "SFP Modules" },
  { href: "/products#fiber-products", label: "Fiber Products" },
  { href: "/products#switches", label: "Switches" },
  { href: "/products#cabling", label: "Cabling" },
  { href: "/products#gpon-products", label: "GPON Products" },
];

const supportLinks = [
  { href: "/about", label: "About Us" },
  { href: "/bulk-orders", label: "Bulk Orders" },
  { href: "/contact", label: "Contact" },
  { href: "/blogs", label: "Blog" },
];

export default function Footer() {
  return (
    <footer className="bg-bhl-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-bhl-orange to-bhl-orange-dark rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <div>
                <span className="text-xl font-bold">BHL</span>
                <span className="text-sm text-bhl-orange ml-1">Networks</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">India's trusted networking partner. High-quality SFP modules, fiber products, switches, and structured cabling at dealer-friendly prices.</p>
            <a href="https://wa.me/918196963329" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors">
              <MessageCircle className="w-5 h-5" />
            </a>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.label}><Link href={link.href} className="text-gray-400 hover:text-bhl-orange transition-colors text-sm">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.label}><Link href={link.href} className="text-gray-400 hover:text-bhl-orange transition-colors text-sm">{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MessageCircle className="w-5 h-5 text-bhl-orange mt-0.5" />
                <div><p className="text-sm font-medium">WhatsApp</p><a href="https://wa.me/918196963329" target="_blank" rel="noopener noreferrer" className="text-gray-400 text-sm hover:text-bhl-orange transition-colors">+91 8196963329</a></div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-bhl-orange mt-0.5" />
                <div><p className="text-sm font-medium">Email</p><a href="mailto:sales@bhlnetworks.com" className="text-gray-400 text-sm hover:text-bhl-orange transition-colors">sales@bhlnetworks.com</a></div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-bhl-orange mt-0.5" />
                <div><p className="text-sm font-medium">Address</p><p className="text-gray-400 text-sm">India (All India Delivery)</p></div>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2026 BHL Networks. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/privacy" className="hover:text-bhl-orange transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-bhl-orange transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}