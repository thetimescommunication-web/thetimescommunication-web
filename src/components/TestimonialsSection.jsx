import React, { useState } from "react";
import {
  FaStar,
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { SectionSkeleton } from "./SkeletonLoader";
import { useSectionImageLoading } from "../hooks/useImageLoading";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Mr. Dharmesh Patel",
      position: "Owner",
      company: "DN Castech",
      content:
        "A corporate video is essential for every industry, as it allows us to present everything about our company through a single, powerful medium. This corporate video has been extremely beneficial for us.",
      rating: 5,
      image: "/images/testinomials/DNCastech.jpeg",
    },
    {
      id: 2,
      name: "⁠Mr. Vipul Patel",
      position: "Owner",
      company: "Greenwell biotech",
      content:
        "Our company's corporate video was created by The Times Communication. In just six months, we generated business worth three crore rupees through our corporate video.",
      rating: 5,
      image: "/images/testinomials/GREENWELL.png",
    },
    {
      id: 3,
      name: "Mr. D. N. Patel",
      position: "Owner",
      company: "DN Group",
      content:
        "What cannot be effectively conveyed through text can be communicated powerfully through a corporate video, creating a strong and positive identity for a company.”",
      rating: 5,
      image: "/images/testinomials/DNCastech.jpeg",
    }
  ];

  // Track image loading for testimonials
  const testimonialImages = testimonials.map(testimonial => testimonial.image);
  const { allImagesLoaded } = useSectionImageLoading(testimonialImages);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <SectionSkeleton isLoading={!allImagesLoaded} skeletonType="testimonial">
      <section className="section-padding bg-gray-50" id="testimonials">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-6">
            THEY SAY IT <span className="text-gradient">BETTER</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our clients say about
            working with The Times Communication.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12 animate-fade-in">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                <FaQuoteLeft className="text-white text-xl" />
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-gray-100 hover:bg-primary-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 z-10"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-gray-100 hover:bg-primary-600 hover:text-white rounded-full flex items-center justify-center transition-all duration-300 z-10"
              aria-label="Next testimonial"
            >
              <FaChevronRight />
            </button>

            {/* Testimonial Content */}
            <div className="text-center px-8">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map(
                  (_, index) => (
                    <FaStar
                      key={index}
                      className="text-yellow-400 text-xl mx-1"
                    />
                  )
                )}
              </div>

              {/* Content */}
              <blockquote className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 italic">
                "{testimonials[currentTestimonial].content}"
              </blockquote>

              {/* Author */}
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-20 h-30 rounded-lg object-cover"
                  loading="lazy"
                />
                <div className="text-center sm:text-left">
                  <div className="text-lg font-semibold text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonials[currentTestimonial].position}
                  </div>
                  <div className="text-sm font-medium text-primary-600">
                    {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-primary-600 w-8"
                      : "bg-gray-300 hover:bg-primary-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    </SectionSkeleton>
  );
};

export default TestimonialsSection;
