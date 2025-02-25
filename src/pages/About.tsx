import React from 'react';
import { Wheat } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen bg-[#faf7f2]">
      {/* Hero Image Section */}
      <div className="relative h-[60vh] w-full">
        <img
          src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80"
          alt="Traditional farming in India"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <div className="flex items-center justify-center mb-4">
              <Wheat className="h-12 w-12" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Our Heritage
            </h1>
            <p className="mt-4 text-xl md:text-2xl font-light">
              A Personal Journey from Seed to Supper
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="prose prose-lg mx-auto">
          {/* Main Content */}
          <div className="space-y-8">
            <p className="text-gray-700 leading-relaxed">
              Within the Heart of India's Farmland, Bhadrakali Rice & Spices stands as a beacon of 
              tradition and modernity intertwined. Imagine walking through the verdant fields where 
              dedicated farmers, with generations of knowledge, cultivate each crop with a sense of 
              purpose and pride. Here, the rich tapestry of India's agricultural heritage thrives, 
              blending age-old methods with innovative practices to bring you products that are 
              truly special.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Our commitment goes beyond the grains and spices we harvest. It is a deep-rooted 
              dedication to authenticity, sustainability, and the vibrant communities that form 
              the backbone of our supply chain. Every seed planted and every spice picked is a 
              step towards preserving the environment and empowering the local farmers who are 
              the essence of our brand. These are not just ingredients; they are stories of 
              resilience and respect for the land that nourishes them.
            </p>

            {/* Values Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
              {[
                {
                  title: 'Tradition',
                  description: 'Preserving age-old farming wisdom'
                },
                {
                  title: 'Quality',
                  description: 'Uncompromising standards in every grain'
                },
                {
                  title: 'Community',
                  description: 'Supporting local farmer families'
                }
              ].map((value, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-amber-800 mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>

            {/* Promise Box */}
            <div className="relative mt-16 mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-50 to-amber-100 rounded-lg transform -skew-y-1" />
              <div className="relative p-8 rounded-lg">
                <h2 className="text-2xl font-bold text-amber-900 mb-4">
                  A Promise to Our Patrons
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  When you choose Bhadrakali Rice & Spices, you do more than purchase a product; 
                  you participate in a legacy of environmental stewardship and cultural preservation. 
                  You bring the essence of India's rural landscapes into your kitchen, celebrating 
                  a tradition that enriches every meal. Join us in honoring this rich heritage, 
                  and savor the difference that commitment and care can make to your culinary 
                  experiences.
                </p>
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
            <img
              src="https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&q=80"
              alt="Rice fields"
              className="rounded-lg shadow-md h-64 w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1584263347416-85a696b4eda7?auto=format&fit=crop&q=80"
              alt="Traditional farming"
              className="rounded-lg shadow-md h-64 w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}