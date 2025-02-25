import React from 'react';
import { Phone, Mail, MapPin, Clock3 } from 'lucide-react';

export function Contact() {
  return (
    <div className="min-h-screen bg-[#faf7f2] pt-24">
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center mb-12">Get in Touch</h1>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">First Name</label>
                    <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Last Name</label>
                    <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Subject</label>
                  <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500">
                    <option>Product Inquiry</option>
                    <option>Wholesale</option>
                    <option>Support</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-amber-500 focus:ring-amber-500"></textarea>
                </div>
                <button type="submit" className="w-full bg-amber-700 text-white px-4 py-2 rounded-md hover:bg-amber-800 transition">
                  Send Message
                </button>
              </form>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Quick Contact</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-amber-700 mr-3" />
                      <span>info@bhadrakali.com</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-amber-700 mr-3" />
                      <span>+91 98765 43210</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-amber-700 mr-3" />
                      <span>Mumbai, Maharashtra</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Clock3 className="w-5 h-5 text-amber-700 mr-3" />
                      <div>
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday: 9:00 AM - 2:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}