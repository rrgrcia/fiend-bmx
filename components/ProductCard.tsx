'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import { useCart } from './providers/CartProvider';

interface ColorVariant {
  color: string;
  image: string;
  name?: string;
}

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  inStock?: boolean;
  colors?: string[];
  colorVariants?: ColorVariant[];
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  
  // Determine initial selected color and image
  const initialColor = product.colorVariants?.[0]?.color || product.colors?.[0] || null;
  const getImageForColor = (color: string | null) => {
    if (!color || !product.colorVariants) return product.image;
    const variant = product.colorVariants.find(v => v.color === color);
    // Only use variant image if it's different from the base image
    return variant?.image && variant.image !== product.image ? variant.image : product.image;
  };
  
  const [selectedColor, setSelectedColor] = useState(initialColor);
  // Only change image if color variants have different images
  const shouldChangeImage = product.colorVariants?.some(v => v.image !== product.image) || false;
  const [currentImage, setCurrentImage] = useState(shouldChangeImage ? getImageForColor(initialColor) : product.image);

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
    // Only update image if variants have different images
    if (shouldChangeImage) {
      setCurrentImage(getImageForColor(color));
    }
  };

  const handleAddToCart = () => {
    if (product.inStock !== false) {
      addToCart({
        id: product.id,
        name: product.name,
        category: product.category,
        price: product.price,
        image: product.image,
      });
    }
  };

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <Image
          src={currentImage}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-110 transition-all duration-300"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {product.inStock !== false && (
          <button
            onClick={handleAddToCart}
            className="absolute bottom-4 right-4 p-3 bg-red-600 hover:bg-red-700 text-white rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg"
            aria-label="Add to cart"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <p className={`text-sm font-semibold uppercase tracking-wider ${
            product.inStock === false ? 'text-red-600' : 'text-green-600'
          }`}>
            {product.inStock === false ? 'Sold Out' : 'In Stock'}
          </p>
          {product.originalPrice && product.originalPrice > product.price && (
            <span className="text-xs font-bold bg-red-100 text-red-700 px-2 py-1 rounded">
              Save ${(product.originalPrice - product.price).toFixed(2)}
            </span>
          )}
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          {product.originalPrice && product.originalPrice > product.price && (
            <p className="text-lg font-semibold text-gray-400 line-through">
              ${product.originalPrice.toFixed(2)}
            </p>
          )}
          <p className={`text-2xl font-black ${product.originalPrice && product.originalPrice > product.price ? 'text-red-600' : 'text-gray-900'}`}>
            ${product.price.toFixed(2)}
          </p>
          {product.price < 10 && (
            <span className="text-xs text-gray-500">each</span>
          )}
        </div>
        {(product.colorVariants || product.colors) && (
          <div className="mt-4">
            <p className="text-xs font-semibold text-gray-600 mb-2">Color:</p>
            <div className="flex gap-2 flex-wrap items-center">
              {product.colorVariants ? (
                // Use colorVariants if available (includes images)
                product.colorVariants.map((variant) => {
                  const colorName = variant.name || 
                                   (variant.color === '#000000' ? 'Black' :
                                    variant.color === '#FFFFFF' ? 'White' :
                                    variant.color === '#FF0000' ? 'Red' :
                                    variant.color === '#0000FF' ? 'Blue' :
                                    variant.color === '#1A1A1A' ? 'Dark Gray' :
                                    variant.color === '#C0C0C0' ? 'Silver' :
                                    variant.color === '#FFD700' ? 'Gold' : variant.color);
                  return (
                    <button
                      key={variant.color}
                      onClick={() => handleColorSelect(variant.color)}
                      className={`w-6 h-6 rounded-full border-2 transition-all duration-200 ${
                        selectedColor === variant.color
                          ? 'border-red-600 scale-110 ring-2 ring-red-200'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                      style={{ backgroundColor: variant.color }}
                      aria-label={`Select ${colorName} color`}
                      title={colorName}
                    />
                  );
                })
              ) : (
                // Fallback to simple colors array
                product.colors?.map((color) => {
                  const colorName = color === '#000000' ? 'Black' :
                                   color === '#FFFFFF' ? 'White' :
                                   color === '#FF0000' ? 'Red' :
                                   color === '#0000FF' ? 'Blue' :
                                   color === '#1A1A1A' ? 'Dark Gray' :
                                   color === '#C0C0C0' ? 'Silver' :
                                   color === '#FFD700' ? 'Gold' : color;
                  return (
                    <button
                      key={color}
                      onClick={() => handleColorSelect(color)}
                      className={`w-6 h-6 rounded-full border-2 transition-all duration-200 ${
                        selectedColor === color
                          ? 'border-red-600 scale-110 ring-2 ring-red-200'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                      style={{ backgroundColor: color }}
                      aria-label={`Select ${colorName} color`}
                      title={colorName}
                    />
                  );
                })
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

