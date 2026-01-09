import React, { useState } from "react";
import {
  FaStar,
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Anshuman",
      position: "AVP – Brand, Content & Creative Strategy",
      company: "STAR Health",
      content:
        "These guys are awesome! We're working with them for 2 years now and they impress us everytime. They are willing to go beyond the basics to deliver exactly what's desired.",
      rating: 5,
      image: "/api/placeholder/80/80",
    },
    {
      id: 2,
      name: "Ritika Jha",
      position: "Co-Founder & CMO",
      company: "Codeblends",
      content:
        "They will surprise you with an unmatched excellence each time they come up with a new video. You don't have to struggle to make them understand what are you looking for as an output in the final video.",
      rating: 5,
      image: "/api/placeholder/80/80",
    },
    {
      id: 3,
      name: "Sukanya Pathania",
      position: "Marketing Manager",
      company: "Tech Solutions Inc.",
      content:
        "The quality of the final video was really good. The team at The Times Communication was also very responsive throughout the process, providing regular updates and taking our feedback to ensure that the final video was exactly what we wanted.",
      rating: 5,
      image: "/api/placeholder/80/80",
    },
    {
      id: 4,
      name: "Manan Dhingra",
      position: "Business Owner",
      company: "Digital Marketing Agency",
      content:
        "I recently worked with The Times Communication on a video project and I couldn't be happier with the results. From start to finish, the team was professional.",
      rating: 5,
      image: "/api/placeholder/80/80",
    },
    {
      id: 5,
      name: "Kesar Kumar",
      position: "Data Specialist",
      company: "Xerox",
      content:
        "We had a great experience working with The Times Communication in Gujarat. Their team was professional, and the final product was delivered on time. The video quality was outstanding! A fantastic video production house in the region",
      rating: 5,
      image: "/api/placeholder/80/80",
    },
  ];

  // Define which logos need dark backgrounds (white/light logos)
  const darkBgLogos = [
    "mission-mangalam.png",
    "minister.png",
    "goverment-of-gujarat-logo.png",
  ];

  // Define logos that need colored backgrounds (government logos)
  const coloredBgLogos = ["Swach-Bharat-Abhiyan-Logo-Vector.svg-.png"];

  const getLogoContainerClass = (logoSrc) => {
    const logoFileName = logoSrc.split("/").pop();
    const needsDarkBg = darkBgLogos.some((darkLogo) =>
      logoFileName.includes(darkLogo)
    );
    const needsColoredBg = coloredBgLogos.some((coloredLogo) =>
      logoFileName.includes(coloredLogo)
    );

    if (needsColoredBg) {
      return "flex items-center justify-center w-32 h-20 bg-orange-500 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex-shrink-0";
    } else if (needsDarkBg) {
      return "flex items-center justify-center w-32 h-20 bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex-shrink-0";
    } else {
      return "flex items-center justify-center w-32 h-20 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex-shrink-0";
    }
  };

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

  // Define all logos in order
  const row1Logos = [
    {
      src: "/images/brnad-logo/653-6539668_smart-citi-logo-rock-werchter-hd-png-download.png",
      alt: "Smart City",
    },
    { src: "/images/brnad-logo/94-fm.png", alt: "94 FM" },
    { src: "/images/brnad-logo/aajivika.png", alt: "Aajivika" },
    { src: "/images/brnad-logo/AATOMIZE.png", alt: "Aatomize" },
    { src: "/images/brnad-logo/ADB-LOGO.png", alt: "ADB" },
    { src: "/images/brnad-logo/agri-science.png", alt: "Agri Science" },
    { src: "/images/brnad-logo/atal-sarovar.png", alt: "Atal Sarovar" },
    { src: "/images/brnad-logo/balaji-wefers.png", alt: "Balaji Wefers" },
    { src: "/images/brnad-logo/clarnigo-logo.png", alt: "Clarnigo" },
    { src: "/images/brnad-logo/collector.png", alt: "Collector" },
    { src: "/images/brnad-logo/Cube.png", alt: "Cube" },
    { src: "/images/brnad-logo/drashti-art-zone.png", alt: "Drashti Art Zone" },
    { src: "/images/brnad-logo/Gopal-namkeen.png", alt: "Gopal Namkeen" },
  ];

  const row2Logos = [
    { src: "/images/brnad-logo/gujarat-fish.png", alt: "Gujarat Fish" },
    { src: "/images/brnad-logo/gujarat-polish.png", alt: "Gujarat Polish" },
    { src: "/images/brnad-logo/gujarat-tourisom.png", alt: "Gujarat Tourism" },
    { src: "/images/brnad-logo/Gurukul-rajkot.png", alt: "Gurukul Rajkot" },
    { src: "/images/brnad-logo/LNT.png", alt: "LNT" },
    { src: "/images/brnad-logo/maahi-milk.png", alt: "Maahi Milk" },
    { src: "/images/brnad-logo/minister.png", alt: "Minister" },
    { src: "/images/brnad-logo/mission-mangalam.png", alt: "Mission Mangalam" },
    { src: "/images/brnad-logo/noble.png", alt: "Noble" },
    { src: "/images/brnad-logo/rmc.png", alt: "RMC" },
    { src: "/images/brnad-logo/sadbhavna.png", alt: "Sadbhavna" },
    { src: "/images/brnad-logo/sport-authority.png", alt: "Sport Authority" },
    {
      src: "/images/brnad-logo/Swach-Bharat-Abhiyan-Logo-Vector.svg-.png",
      alt: "Swach Bharat Abhiyan",
    },
    { src: "/images/brnad-logo/vibrant-gujarat.png", alt: "Vibrant Gujarat" },
  ];

  return (
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
                  className="w-16 h-16 rounded-full object-cover"
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

        {/* Brand Logos - Infinite Scroll */}
        <div className="mt-20 animate-fade-in">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              TRUSTED BY <span className="text-gradient">LEADING BRANDS</span>
            </h3>
            <p className="text-gray-600">
              Excellence recognized by industry leaders
            </p>
          </div>

          {/* First Row - Scrolling Left */}
          <div className="relative overflow-hidden mb-8">
            <div className="flex animate-scroll-left">
              {/* First set of logos */}
              <div className="flex items-center space-x-8 min-w-max">
                {row1Logos.map((logo, index) => (
                  <div
                    key={`row1-${index}`}
                    className={getLogoContainerClass(logo.src)}
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-w-full max-h-full object-contain p-2"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="flex items-center space-x-8 min-w-max">
                {row1Logos.map((logo, index) => (
                  <div
                    key={`row1-duplicate-${index}`}
                    className={getLogoContainerClass(logo.src)}
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-w-full max-h-full object-contain p-2"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Second Row - Scrolling Right */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll-right">
              {/* First set of logos */}
              <div className="flex items-center space-x-8 min-w-max">
                {row2Logos.map((logo, index) => (
                  <div
                    key={`row2-${index}`}
                    className={getLogoContainerClass(logo.src)}
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-w-full max-h-full object-contain p-2"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="flex items-center space-x-8 min-w-max">
                {row2Logos.map((logo, index) => (
                  <div
                    key={`row2-duplicate-${index}`}
                    className={getLogoContainerClass(logo.src)}
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-w-full max-h-full object-contain p-2"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
