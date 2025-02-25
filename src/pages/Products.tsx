import React from 'react';
import { Link } from 'react-router-dom';
import { Wheat, ArrowRight, Scale } from 'lucide-react';

export function Products() {
  const scrollToProduct = (productId: string) => {
    const element = document.getElementById(productId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#faf7f2] pt-16">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-cover bg-center" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80")' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <div className="flex items-center justify-center mb-4">
              <Wheat className="h-12 w-12" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Premium Products</h1>
            <p className="text-xl">Discover the finest quality rice from India's heartland</p>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-center space-x-8">
            <button
              onClick={() => scrollToProduct('basmati')}
              className="text-gray-700 hover:text-amber-700 font-medium"
            >
              Basmati Rice
            </button>
            <button
              onClick={() => scrollToProduct('sona-masoori')}
              className="text-gray-700 hover:text-amber-700 font-medium"
            >
              Sona Masoori Rice
            </button>
            <button
              onClick={() => scrollToProduct('spices')}
              className="text-gray-700 hover:text-amber-700 font-medium"
            >
              Spices
            </button>
          </div>
        </div>
      </section>

      {/* Product Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        {/* Basmati Rice Section */}
        <section id="basmati" className="scroll-mt-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Premium Basmati Rice</h2>
              <p className="text-gray-600 leading-relaxed">
                Experience the authentic aroma and taste of our Premium Basmati Rice – sourced directly 
                from the finest fields. Known for its long grains and exquisite fragrance, this rice 
                is perfect for biryanis, pilafs, and a variety of rice-based dishes.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Features:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <ArrowRight className="h-5 w-5 text-amber-700 mr-2" />
                    Extra-long grains with perfect length-to-width ratio
                  </li>
                  <li className="flex items-center text-gray-600">
                    <ArrowRight className="h-5 w-5 text-amber-700 mr-2" />
                    Natural aromatic fragrance
                  </li>
                  <li className="flex items-center text-gray-600">
                    <ArrowRight className="h-5 w-5 text-amber-700 mr-2" />
                    Aged for optimal taste and texture
                  </li>
                  <li className="flex items-center text-gray-600">
                    <ArrowRight className="h-5 w-5 text-amber-700 mr-2" />
                    100% authentic Basmati variety
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-amber-900 mb-4">Available Sizes:</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { size: '5 lb', type: 'Small Pack' },
                    { size: '10 lb', type: 'Family Pack' },
                    { size: '20 lb', type: 'Value Pack' },
                    { size: '40 lb', type: 'Bulk Pack' },
                  ].map((pack, index) => (
                    <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                      <div className="font-bold text-amber-700">{pack.size}</div>
                      <div className="text-sm text-gray-600">{pack.type}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <img
                src="https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80"
                alt="Basmati Rice"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
              <div className="grid grid-cols-3 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&q=80"
                  alt="Basmati Rice Preparation"
                  className="rounded-lg h-32 w-full object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1596560548464-f010549b84d7?auto=format&fit=crop&q=80"
                  alt="Cooked Basmati Rice"
                  className="rounded-lg h-32 w-full object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80"
                  alt="Rice Packaging"
                  className="rounded-lg h-32 w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Sona Masoori Rice Section */}
        <section id="sona-masoori" className="scroll-mt-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&q=80"
                alt="Sona Masoori Rice"
                className="rounded-lg shadow-lg w-full h-[400px] object-cover"
              />
              <div className="grid grid-cols-3 gap-4 mt-6">
                <img
                  src="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&q=80"
                  alt="Sona Masoori Rice Preparation"
                  className="rounded-lg h-32 w-full object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1596560548464-f010549b84d7?auto=format&fit=crop&q=80"
                  alt="Cooked Sona Masoori Rice"
                  className="rounded-lg h-32 w-full object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80"
                  alt="Rice Field"
                  className="rounded-lg h-32 w-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Sona Masoori Rice</h2>
              <p className="text-gray-600 leading-relaxed">
                Our premium Sona Masoori rice is perfect for everyday meals, offering a light and 
                healthy option without compromising on taste. This medium-grain variety is known 
                for its versatility and ability to complement any dish.
              </p>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900">Features:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <ArrowRight className="h-5 w-5 text-amber-700 mr-2" />
                    Medium-grain variety with perfect texture
                  </li>
                  <li className="flex items-center text-gray-600">
                    <ArrowRight className="h-5 w-5 text-amber-700 mr-2" />
                    Light and easy to digest
                  </li>
                  <li className="flex items-center text-gray-600">
                    <ArrowRight className="h-5 w-5 text-amber-700 mr-2" />
                    Ideal for daily consumption
                  </li>
                  <li className="flex items-center text-gray-600">
                    <ArrowRight className="h-5 w-5 text-amber-700 mr-2" />
                    Sourced from certified farms
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-amber-900 mb-4">Available Sizes:</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { size: '5 lb', type: 'Small Pack' },
                    { size: '10 lb', type: 'Family Pack' },
                    { size: '20 lb', type: 'Value Pack' },
                    { size: '40 lb', type: 'Bulk Pack' },
                  ].map((pack, index) => (
                    <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                      <div className="font-bold text-amber-700">{pack.size}</div>
                      <div className="text-sm text-gray-600">{pack.type}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Spices Section - Coming Soon */}
        <section id="spices" className="scroll-mt-24">
          <div className="bg-amber-50 rounded-lg p-8 text-center">
            <Scale className="h-16 w-16 text-amber-700 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Premium Spices - Coming Soon!</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              We're excited to announce our upcoming collection of premium spices. From fragrant 
              cumin to aromatic turmeric, our spices will be sourced directly from trusted farms 
              to ensure top-tier flavor and quality for all your cooking needs.
            </p>
            <button className="bg-amber-700 text-white px-8 py-3 rounded-full hover:bg-amber-800 transition">
              Stay Tuned!
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}