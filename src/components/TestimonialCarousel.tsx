import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  title: string;
  content: string;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    location: "Mumbai, India",
    title: "Restaurant Owner",
    content: "The Basmati rice from Bhadrakali has transformed our biryani preparation. Since switching suppliers last year, our customer satisfaction ratings have increased by 30%, with diners specifically praising the rice's texture and aroma.",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Delhi, India",
    title: "Home Chef & Food Blogger",
    content: "As someone who creates content about traditional Indian cuisine, the quality of ingredients is crucial. Bhadrakali's Sona Masoori rice has become a staple in my kitchen, consistently delivering the perfect texture for South Indian dishes.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "James Chen",
    location: "Singapore",
    title: "Import/Export Manager",
    content: "Managing bulk orders for multiple restaurants requires reliability and consistency. Bhadrakali's efficient supply chain and quality control have reduced our product complaints by 95%. Their commitment to timely delivery is exceptional.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    name: "Anita Desai",
    location: "Pune, India",
    title: "Catering Service Owner",
    content: "We cater to over 50 corporate events monthly, and Bhadrakali's rice varieties have never disappointed. The consistent quality has helped us maintain our reputation for excellence, with zero complaints about rice quality in the past year.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
  },
  {
    id: 5,
    name: "Mohammed Siddiqui",
    location: "Hyderabad, India",
    title: "Hotel Chain Executive Chef",
    content: "In our five-star hotels, we can't compromise on quality. Bhadrakali's premium Basmati rice has helped us maintain our high standards. Guest satisfaction scores for our biryanis have consistently remained above 95% since partnering with them.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80"
  },
  {
    id: 6,
    name: "Sarah Williams",
    location: "Dubai, UAE",
    title: "International Food Distributor",
    content: "The demand for authentic Indian rice in the UAE is immense. Bhadrakali's strict quality standards and professional export handling have made them our most reliable supplier, with order fulfillment accuracy of 99.8%.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80"
  },
  {
    id: 7,
    name: "Vikram Malhotra",
    location: "Bengaluru, India",
    title: "Cloud Kitchen Owner",
    content: "Running multiple cloud kitchens requires consistent quality across all locations. Bhadrakali's rice has been a game-changer for our operations, helping us maintain a 4.8/5 rating across all our virtual restaurants.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80"
  },
  {
    id: 8,
    name: "Lisa Chang",
    location: "Hong Kong",
    title: "Asian Fusion Restaurant Owner",
    content: "Finding the right rice for our fusion dishes was challenging until we discovered Bhadrakali. Their Basmati rice perfectly complements our Indo-Chinese cuisine, helping us earn a Michelin recommendation last year.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
  },
  {
    id: 9,
    name: "Ravi Menon",
    location: "Chennai, India",
    title: "Wholesale Merchant",
    content: "My customers are very particular about rice quality. Since becoming a Bhadrakali distributor, our rice sales have grown by 40% year-over-year. Their consistent quality has helped us build lasting relationships with retailers.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
  },
  {
    id: 10,
    name: "Aisha Patel",
    location: "Ahmedabad, India",
    title: "Organic Store Owner",
    content: "Our health-conscious customers appreciate Bhadrakali's commitment to quality. Their rice not only meets our strict organic standards but has helped us build a loyal customer base, with 85% repeat purchases.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
  }
];

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextTestimonial = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const previousTestimonial = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  // Handle touch events for swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextTestimonial();
    }
    if (isRightSwipe) {
      previousTestimonial();
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div 
        className="bg-white rounded-lg shadow-lg p-4 sm:p-8"
        role="region"
        aria-label="Customer testimonials"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="flex justify-center mb-6">
          {testimonials[currentIndex].image && (
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden mb-4">
              <img 
                src={testimonials[currentIndex].image} 
                alt={`${testimonials[currentIndex].name}'s profile`}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>
        <div className="flex justify-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className="w-4 h-4 sm:w-6 sm:h-6 text-amber-500 fill-current"
              role="img"
              aria-label={i === 0 ? "5 out of 5 stars" : undefined}
            />
          ))}
        </div>
        <div
          className={`transition-opacity duration-500 ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <blockquote 
            className="text-center text-gray-600 text-base sm:text-lg italic mb-6 px-4"
            role="article"
          >
            "{testimonials[currentIndex].content}"
          </blockquote>
          <div className="text-center">
            <p className="font-semibold text-gray-900">{testimonials[currentIndex].name}</p>
            <p className="text-gray-500">{testimonials[currentIndex].title}</p>
            <p className="text-gray-500 text-sm">{testimonials[currentIndex].location}</p>
          </div>
        </div>
        <div className="flex justify-center mt-6 space-x-4">
          <button 
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
            onClick={previousTestimonial}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
          </button>
          <button 
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}