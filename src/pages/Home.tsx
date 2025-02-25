import React from 'react';
import { ChefHat, Building2, Store } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TestimonialCarousel } from '../components/TestimonialCarousel';

export function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="pt-16">
        <div className="relative h-[80vh] bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&q=80")' }}>
          <div className="absolute inset-0 bg-black bg-opacity-50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">Bhadrakali Rice & Spices</h1>
              <p className="text-xl md:text-2xl mb-8">Tradition Meets Quality in Every Grain</p>
              <Link 
                to="/products"
                className="bg-amber-700 text-white px-8 py-3 rounded-full hover:bg-amber-800 transition"
              >
                Explore Our Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Premium Products</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Basmati Rice',
                description: 'Known for its long grains, fragrant aroma, and delicate texture.',
                image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80',
                link: '/products#basmati'
              },
              {
                title: 'Sona Masoori Rice',
                description: 'A medium-grain rice that is both aromatic and soft, perfect for everyday meals.',
                image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80',
                link: '/products#sona-masoori'
              },
              {
                title: 'Spices',
                subtitle: 'Coming Soon',
                description: 'Premium spices sourced from trusted farms. Stay tuned for our exciting spice collection launch!',
                image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80',
                link: '/products#spices'
              },
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition">
                <div className="h-48 overflow-hidden">
                  <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                  {product.subtitle && (
                    <p className="text-amber-700 font-medium mb-2">{product.subtitle}</p>
                  )}
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <Link to={product.link} className="text-amber-700 hover:text-amber-800">Learn more →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-20 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Who We Serve</h2>
            <p className="mt-4 text-gray-600">Delivering quality to every customer segment</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: 'For Home Chefs',
                description: 'Premium quality rice for your everyday cooking needs.',
                icon: ChefHat,
              },
              {
                title: 'For Businesses',
                description: 'Bulk supplies for restaurants and catering services.',
                icon: Building2,
              },
              {
                title: 'For Distributors',
                description: 'Partnership opportunities for wholesale distribution.',
                icon: Store,
              },
            ].map((segment, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center transform hover:scale-105 transition">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-50 mb-6">
                  <segment.icon className="w-8 h-8 text-amber-700" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{segment.title}</h3>
                <p className="text-gray-600">{segment.description}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link
              to="/contact"
              className="inline-block bg-amber-700 text-white px-12 py-4 rounded-full hover:bg-amber-800 transition-all transform hover:scale-105 text-lg font-medium shadow-lg hover:shadow-xl w-[240px]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-[#faf7f2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Ready to Experience Section */}
      <section className="py-20 bg-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
            <div className="relative grid md:grid-cols-2 gap-8 items-center p-12 md:p-16">
              <div className="text-left space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-amber-900">
                  Ready to Experience Premium Quality?
                </h2>
                <p className="text-lg md:text-xl text-amber-800">
                  Discover our exceptional collection of premium rice varieties, carefully sourced and processed 
                  to bring authentic flavors to your table.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center bg-amber-700 text-white px-8 py-4 rounded-full hover:bg-amber-800 transition-all transform hover:scale-105 text-lg font-medium shadow-lg hover:shadow-xl"
                  >
                    Contact Us
                  </Link>
                  <Link
                    to="/products"
                    className="inline-flex items-center bg-white text-amber-700 px-8 py-4 rounded-full hover:bg-amber-50 transition-all transform hover:scale-105 text-lg font-medium shadow-lg hover:shadow-xl border-2 border-amber-700"
                  >
                    View Products
                  </Link>
                </div>
              </div>
              <div className="relative hidden md:block">
                <div className="aspect-square rounded-full overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80" 
                    alt="Premium Rice" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}