import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/src/react-app/contexts/CartContext';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  inStock?: boolean;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

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
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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
        <p className={`text-sm font-semibold uppercase tracking-wider mb-2 ${
          product.inStock === false ? 'text-red-600' : 'text-black'
        }`}>
          {product.inStock === false ? 'Sold Out' : 'In Stock'}
        </p>
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          {product.originalPrice && (
            <p className="text-lg font-semibold text-gray-400 line-through">
              ${product.originalPrice.toFixed(2)}
            </p>
          )}
          <p className={`text-2xl font-black ${product.originalPrice ? 'text-red-600' : 'text-gray-900'}`}>
            ${product.price.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}
