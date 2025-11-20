import { Link } from 'react-router';
import { Instagram, Youtube, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wider">About Fiend BMX</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium BMX bikes and parts for riders from beginners to pros. Built for performance, designed for passion.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wider">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-gray-400 hover:text-red-600 transition-colors text-sm">
                  Complete Bikes
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-400 hover:text-red-600 transition-colors text-sm">
                  Frames
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-400 hover:text-red-600 transition-colors text-sm">
                  Parts
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-400 hover:text-red-600 transition-colors text-sm">
                  Apparel
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wider">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-red-600 transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-red-600 transition-colors text-sm">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-red-600 transition-colors text-sm">
                  Warranty
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-red-600 transition-colors text-sm">
                  Distributor List
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase tracking-wider">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/fiendbmx"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-red-600 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@Fiendbmx"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-red-600 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/fiendbmx"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-red-600 rounded-full transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
            <div className="mt-6">
              <p className="text-gray-400 text-sm mb-2">Subscribe to our newsletter</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-l-lg focus:outline-none focus:border-red-600 text-sm"
                />
                <button className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded-r-lg font-semibold text-sm transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {currentYear} Fiend BMX. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/contact" className="hover:text-red-600 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/contact" className="hover:text-red-600 transition-colors">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
