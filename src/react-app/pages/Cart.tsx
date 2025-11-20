import { Link } from 'react-router';
import { Minus, Plus, Trash2, ArrowRight, ShoppingBag } from 'lucide-react';
import { useCart } from '@/react-app/contexts/CartContext';

export default function Cart() {
  const { items, updateQuantity, removeFromCart, totalPrice, totalItems } = useCart();

  const shippingCost = totalPrice >= 100 ? 0 : 9.99;
  const finalTotal = totalPrice + shippingCost;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
        <div className="text-center">
          <ShoppingBag className="w-24 h-24 text-gray-300 mx-auto mb-6" />
          <h2 className="text-3xl font-black text-gray-900 mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Add some items to get started</p>
          <Link
            to="/shop"
            className="inline-flex items-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Continue Shopping
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-60 bg-gradient-to-br from-black via-gray-900 to-red-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-tight">
              Shopping Cart
            </h1>
            <p className="text-xl font-semibold">
              {totalItems} item{totalItems !== 1 ? 's' : ''} in your cart
            </p>
          </div>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex gap-6">
                    <div className="w-24 h-24 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-gray-900 mb-1 truncate">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-500 mb-3">{item.category}</p>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 bg-gray-100 rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-2 hover:bg-gray-200 rounded-l-lg transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="px-4 font-semibold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-2 hover:bg-gray-200 rounded-r-lg transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-2xl font-black text-gray-900">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        ${item.price.toFixed(2)} each
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              <Link
                to="/shop"
                className="inline-flex items-center text-red-600 hover:text-red-700 font-semibold transition-colors"
              >
                ← Continue Shopping
              </Link>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-md sticky top-24">
                <h2 className="text-2xl font-black mb-6 tracking-tight">Order Summary</h2>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-700">
                    <span>Subtotal</span>
                    <span className="font-semibold">${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Shipping</span>
                    <span className="font-semibold">
                      {shippingCost === 0 ? (
                        <span className="text-green-600">FREE</span>
                      ) : (
                        `$${shippingCost.toFixed(2)}`
                      )}
                    </span>
                  </div>
                  {totalPrice < 100 && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                      <p className="text-sm text-red-800">
                        Add ${(100 - totalPrice).toFixed(2)} more for free shipping!
                      </p>
                    </div>
                  )}
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-black">Total</span>
                      <span className="text-3xl font-black text-red-600">
                        ${finalTotal.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="w-full px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 mb-3">
                  Proceed to Checkout
                </button>
                <p className="text-xs text-center text-gray-500">
                  Secure checkout • Free shipping over $100
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
