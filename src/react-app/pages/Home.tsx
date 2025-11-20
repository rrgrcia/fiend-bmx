import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import ProductCard from '@/src/react-app/components/ProductCard';
import VideoSection from '@/src/react-app/components/VideoSection';

const heroSlides = [
  {
    id: 1,
    image: 'https://fiendbmx.com/cdn/shop/files/NO_LOVE_WEB_BANNER_1024x.jpg?v=1755268899',
    title: 'NO LOVE',
    subtitle: 'New Collection Available Now',
  },
  {
    id: 2,
    image: 'https://fiendbmx.com/cdn/shop/files/GARRETT_BLK_L1_1024x.jpg?v=1750795421',
    title: 'GARRETT REYNOLDS',
    subtitle: 'Signature Series',
  },
  {
    id: 3,
    image: 'https://fiendbmx.com/cdn/shop/files/MILLS_WHT_L1_5744fd82-6425-4158-b117-448b18ef1a24_1024x.jpg?v=1750796585',
    title: 'LEWIS MILLS',
    subtitle: 'Signature Collection',
  },
];

const featuredProducts = [
  {
    id: 1,
    name: 'Reynolds V3',
    category: 'Frame',
    price: 479.99,
    image: 'https://fiendbmx.com/cdn/shop/files/REYNOLDS_V3_BROWN_720x_5b7331e7-00ac-48ec-937f-f3428542c2b9_800x.webp?v=1669858690',
    inStock: true,
  },
  {
    id: 2,
    name: 'Raekes Signature',
    category: 'Complete Bike',
    price: 749.99,
    image: 'https://fiendbmx.com/cdn/shop/files/RAEKES_GRN_720x_5a8f1e42-180e-4075-b55b-8999e9ddc785_800x.webp?v=1669858690',
    inStock: true,
  },
  {
    id: 3,
    name: 'Mills Signature',
    category: 'Complete Bike',
    price: 799.99,
    image: 'https://fiendbmx.com/cdn/shop/files/MILLS_WHT_2000x_4de61bd9-1af1-4953-a4e2-116d2188eccd_800x.webp?v=1669926343',
    inStock: true,
  },
  {
    id: 4,
    name: 'Invest Frame',
    category: 'Frame',
    price: 429.99,
    image: 'https://fiendbmx.com/cdn/shop/files/INVEST_CP_720x_c988a5f4-6ae2-435d-a313-6d8dfedcbe39_800x.webp?v=1669859312',
    inStock: true,
  },
  {
    id: 5,
    name: 'Team Bar',
    category: 'Handlebars',
    price: 89.99,
    image: 'https://fiendbmx.com/cdn/shop/files/TEAMBAR_BLK_480x_bd3c7655-bfd9-4fe9-85f1-a390663e1503_800x.webp?v=1669859578',
    inStock: true,
  },
  {
    id: 6,
    name: 'Segment Cranks',
    category: 'Cranks',
    price: 149.99,
    image: 'https://fiendbmx.com/cdn/shop/files/SEGMENTCRANK_BLK_1024x1024_0c4709d3-69b7-403a-80c9-8e2739f92459_800x.webp?v=1669859595',
    inStock: true,
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Slider */}
      <section className="relative h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden bg-black">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4 animate-fade-in">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 tracking-tight">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl lg:text-3xl font-semibold mb-8 tracking-wide">
                  {slide.subtitle}
                </p>
                <Link
                  href="/shop"
                  className="inline-flex items-center px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Shop Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all duration-300"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full transition-all duration-300"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Slider Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-red-600 w-8'
                  : 'bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our latest and most popular BMX bikes and parts
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/shop"
              className="inline-flex items-center px-8 py-4 bg-black hover:bg-red-600 text-white font-bold text-lg rounded-full transition-all duration-300 transform hover:scale-105"
            >
              View All Products
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <VideoSection />

      {/* CTA Section */}
      <section className="py-20 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-black" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
              Join the Fiend Family
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Get exclusive access to new releases, team updates, and special offers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-full focus:outline-none focus:border-red-600 text-white placeholder-gray-400"
              />
              <button className="px-8 py-4 bg-red-600 hover:bg-red-700 rounded-full font-bold transition-all duration-300 transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
