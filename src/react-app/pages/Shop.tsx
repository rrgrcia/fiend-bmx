import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import ProductCard from '@/react-app/components/ProductCard';

const categories = [
'All Products',
'Complete Bikes',
'Frames',
'Forks',
'Handlebars',
'Grips',
'Stems',
'Headsets',
'Cranks',
'Sprockets',
'Bottom Brackets',
'Pedals',
'Saddles & Seat Posts',
'Wheels',
'Hubs',
'Pegs',
'Hardware',
'Hats',
'Shirts & Hoodies',
'Stickers',
'Clearance Sale',
];

// Sample product data (trimmed for brevity; you can keep all products)
const allProducts = [
{ id: 1, name: 'Fiend Garrett Complete', category: 'Complete Bikes', price: 999.99, image: 'https://fiendbmx.com/cdn/shop/files/GARRETT_BLK_L1.jpg?v=1750795421', inStock: true },
{ id: 2, name: 'Fiend Lew Complete', category: 'Complete Bikes', price: 999.99, image: 'https://fiendbmx.com/cdn/shop/files/MILLS_WHT_L1_5744fd82-6425-4158-b117-448b18ef1a24.jpg?v=1750796585', inStock: true },
{ id: 3, name: 'Fiend Mills Frame', category: 'Frames', price: 449.99, image: 'https://fiendbmx.com/cdn/shop/files/MILLS_BLU.jpg?v=1734026783', inStock: true },
];

export default function Shop() {
const [selectedCategory, setSelectedCategory] = useState('All Products');
const [sortBy, setSortBy] = useState('featured');

const filteredProducts =
selectedCategory === 'All Products'
? allProducts
: allProducts.filter((product) => product.category === selectedCategory);

const sortedProducts = [...filteredProducts].sort((a, b) => {
if (sortBy === 'price-low') return a.price - b.price;
if (sortBy === 'price-high') return b.price - a.price;
if (sortBy === 'name') return a.name.localeCompare(b.name);
return 0;
});

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <section className="relative h-80 bg-gradient-to-br from-black via-gray-900 to-red-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tight">
              Shop
            </h1>
            <p className="text-xl md:text-2xl font-semibold max-w-2xl mx-auto">
              Premium BMX bikes and parts engineered for performance
            </p>
          </div>
        </div>
      </section>

      {/* Shop Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
      {/* Sidebar */}
      <aside className="lg:w-64 flex-shrink-0">
        <div className="bg-white rounded-2xl p-6 shadow-md sticky top-24">
          <h3 className="text-xl font-bold mb-4 uppercase tracking-wider">
            Categories
          </h3>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category}>
                <button
                  onClick={() => setSelectedCategory(category)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-red-600 text-white font-semibold'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Products Grid */}
      <div className="flex-1">
        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <p className="text-gray-600">
            Showing {sortedProducts.length} product{sortedProducts.length !== 1 ? 's' : ''}
          </p>
          <div className="flex items-center gap-2">
            <label htmlFor="sort" className="text-sm font-semibold text-gray-700">
              Sort by:
            </label>
            <div className="relative">
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-10 font-semibold text-gray-700 focus:outline-none focus:border-red-600 cursor-pointer"
              >
                <option value="featured">Featured</option>
                <option value="name">Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-700 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Products */}
        {sortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-2xl font-bold text-gray-400">
              No products found in this category
            </p>
          </div>
        )}
      </div>
        </div>
      </div>
    </div>
  );
}
