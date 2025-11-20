'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, Search } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
}

export default function SearchModal({ isOpen, onClose, products }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setSearchQuery('');
      setFilteredProducts([]);
    }
  }, [isOpen]);

  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = products
        .filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .slice(0, 8);
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  }, [searchQuery, products]);

  const handleClose = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
      />
      <div className="relative w-full max-w-3xl mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in">
        {/* Search Input */}
        <div className="flex items-center gap-4 p-6 border-b border-gray-200">
          <Search className="w-6 h-6 text-gray-400 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 text-lg focus:outline-none"
          />
          <button
            onClick={handleClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close search"
          >
            <X className="w-6 h-6 text-gray-400" />
          </button>
        </div>

        {/* Search Results */}
        <div className="max-h-[500px] overflow-y-auto">
          {searchQuery.trim() && filteredProducts.length === 0 && (
            <div className="p-8 text-center text-gray-500">
              <p className="text-lg font-semibold">No products found</p>
              <p className="text-sm mt-2">Try searching for something else</p>
            </div>
          )}

          {searchQuery.trim() && filteredProducts.length > 0 && (
            <div className="p-4 space-y-2">
              <p className="text-sm font-semibold text-gray-500 px-4 mb-2">
                {filteredProducts.length} result{filteredProducts.length !== 1 ? 's' : ''}
              </p>
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  href="/shop"
                  onClick={handleClose}
                  className="flex items-center gap-4 p-4 hover:bg-gray-50 rounded-xl transition-colors group"
                >
                  <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 truncate group-hover:text-red-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500">{product.category}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="font-bold text-gray-900">${product.price.toFixed(2)}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {!searchQuery.trim() && (
            <div className="p-8 text-center text-gray-500">
              <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-lg font-semibold">Start typing to search</p>
              <p className="text-sm mt-2">Search for bikes, frames, parts, and more</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

