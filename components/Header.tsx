'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Menu, X, ShoppingCart, User, Search } from 'lucide-react';
import MobileMenu from './MobileMenu';
import SearchModal from './SearchModal';
import { useCart } from './providers/CartProvider';

// Import all products for search
const allProducts = [
  { id: 1, name: 'Fiend Garrett Complete', category: 'Complete Bikes', price: 999.99, image: 'https://fiendbmx.com/cdn/shop/files/GARRETT_BLK_L1.jpg?v=1750795421' },
  { id: 2, name: 'Fiend Lew Complete', category: 'Complete Bikes', price: 999.99, image: 'https://fiendbmx.com/cdn/shop/files/MILLS_WHT_L1_5744fd82-6425-4158-b117-448b18ef1a24.jpg?v=1750796585' },
  { id: 3, name: 'Fiend Mills Frame', category: 'Frames', price: 449.99, image: 'https://fiendbmx.com/cdn/shop/files/MILLS_BLU.jpg?v=1734026783' },
  { id: 4, name: 'Fiend Raekes Frame', category: 'Frames', price: 299.99, image: 'https://fiendbmx.com/cdn/shop/products/RAEKES_BLK.jpg?v=1643130552' },
  { id: 5, name: 'Fiend Reynolds V3 Frame', category: 'Frames', price: 449.99, image: 'https://fiendbmx.com/cdn/shop/products/REYNOLDS_V3_BLK.jpg?v=1666643247' },
  { id: 6, name: 'Fiend Shapeshifter 320 Frame', category: 'Frames', price: 449.99, image: 'https://fiendbmx.com/cdn/shop/files/SS_BLK_efbe41bb-a2c2-4ba7-bc39-8c38844bf5d2.jpg?v=1762748074' },
  { id: 7, name: 'Fiend Invest Fork', category: 'Forks', price: 179.99, image: 'https://fiendbmx.com/cdn/shop/products/fiend_shop_fork_ic_1_1024x.jpg?v=1565802828' },
  { id: 8, name: 'Fiend Meta Fork', category: 'Forks', price: 179.99, image: 'https://fiendbmx.com/cdn/shop/files/META_BLK_021725_1024x.jpg?v=1739827080' },
  { id: 9, name: 'Fiend Raekes Bar', category: 'Handlebars', price: 109.99, image: 'https://fiendbmx.com/cdn/shop/products/RAEKES_BLK2_IG.jpg?v=1643131509' },
  { id: 10, name: 'Fiend Reynolds Bars', category: 'Handlebars', price: 86.99, image: 'https://fiendbmx.com/cdn/shop/files/REYNOLDS_BLACK.jpg?v=1762717348' },
  { id: 11, name: 'Fiend Team Bars', category: 'Handlebars', price: 86.99, image: 'https://fiendbmx.com/cdn/shop/products/fiend_handlebar_team_black.jpg?v=1596652141' },
  { id: 12, name: 'Fiend Palmere Grip', category: 'Grips', price: 13.99, image: 'https://fiendbmx.com/cdn/shop/products/PALMERE_BLK.jpg?v=1650395059' },
  { id: 13, name: 'Fiend Segment Crank', category: 'Cranks', price: 189.99, image: 'https://fiendbmx.com/cdn/shop/files/SEGMENTCRANK_BLK_1024x1024_0c4709d3-69b7-403a-80c9-8e2739f92459_800x.webp?v=1669859595' },
  { id: 14, name: 'Fiend Team V2 Cranks', category: 'Cranks', price: 209.99, image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350' },
  { id: 15, name: 'Fiend Reynolds Pedals', category: 'Pedals', price: 24.99, image: 'https://fiendbmx.com/cdn/shop/files/ddddd_59debfdd-456c-4137-b24f-387efc2daa85.jpg?v=1630527350' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-black text-red-600 text-center py-2 px-4 text-sm font-semibold">
        <p>NEW ARRIVALS | FREE SHIPPING ON ORDERS OVER $100</p>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg'
            : 'bg-white'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 relative h-16 w-auto">
              <Image
                src="https://mocha-cdn.com/019a9d77-3fdf-7e66-a0da-52236f85cde9/image.png_9354.png"
                alt="Fiend BMX"
                fill
                className="object-contain transition-transform duration-300 hover:scale-105"
                sizes="(max-width: 768px) 120px, 160px"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`text-sm font-semibold uppercase tracking-wider transition-colors duration-200 relative group ${
                    pathname === link.path
                      ? 'text-red-600'
                      : 'text-gray-900 hover:text-red-600'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full ${
                      pathname === link.path ? 'w-full' : ''
                    }`}
                  />
                </Link>
              ))}
            </nav>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search"
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <Search className="w-5 h-5 text-gray-900" />
              </button>
              <Link
                href="/login"
                aria-label="Account"
                className="hidden md:block p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <User className="w-5 h-5 text-gray-900" />
              </Link>
              <Link
                href="/cart"
                aria-label="Shopping Cart"
                className="relative p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <ShoppingCart className="w-5 h-5 text-gray-900" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-900" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-900" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} navLinks={navLinks} />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={allProducts}
      />
    </>
  );
}

