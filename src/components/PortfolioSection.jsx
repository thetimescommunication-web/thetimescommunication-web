import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPlay, FaArrowRight } from "react-icons/fa";

const PortfolioSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Explainer Videos",
    "E-Learning Videos",
    "Corporate Videos",
    "Product Photography",
    "TV & Digital Ad Films",
    "Social Media Promo",
    "Music & Film",
    "Real Estate Videos",
  ];

  const portfolioItems = [
    {
      id: 1,
      title: "Corporate Brand Video",
      category: "Corporate Videos",
      thumbnail: "/api/placeholder/400/250",
      videoUrl: "https://www.youtube.com/watch?v=example1",
      client: "Tech Company",
      description:
        "A compelling brand story that showcases company values and culture.",
    },
    {
      id: 2,
      title: "Product Launch Campaign",
      category: "TV & Digital Ad Films",
      thumbnail: "/api/placeholder/400/250",
      videoUrl: "https://www.youtube.com/watch?v=example2",
      client: "Consumer Brand",
      description: "High-impact commercial for major product launch campaign.",
    },
    {
      id: 3,
      title: "Animated Explainer Video",
      category: "Explainer Videos",
      thumbnail: "/api/placeholder/400/250",
      videoUrl: "https://www.youtube.com/watch?v=example3",
      client: "SaaS Startup",
      description:
        "Simplified complex software concepts through engaging animation.",
    },
    {
      id: 4,
      title: "Real Estate Showcase",
      category: "Real Estate Videos",
      thumbnail: "/api/placeholder/400/250",
      videoUrl: "https://www.youtube.com/watch?v=example4",
      client: "Property Developer",
      description: "Luxury property showcase with drone cinematography.",
    },
    {
      id: 5,
      title: "Social Media Campaign",
      category: "Social Media Promo",
      thumbnail: "/api/placeholder/400/250",
      videoUrl: "https://www.youtube.com/watch?v=example5",
      client: "Fashion Brand",
      description: "Viral social media content that drove massive engagement.",
    },
    {
      id: 6,
      title: "Training Module Video",
      category: "E-Learning Videos",
      thumbnail: "/api/placeholder/400/250",
      videoUrl: "https://www.youtube.com/watch?v=example6",
      client: "Educational Institute",
      description: "Interactive learning content for professional development.",
    },
    {
      id: 7,
      title: "Product Photography Session",
      category: "Product Photography",
      thumbnail: "/api/placeholder/400/250",
      videoUrl: "https://www.youtube.com/watch?v=example7",
      client: "E-commerce Brand",
      description:
        "Studio photography showcasing product details and features.",
    },
    {
      id: 8,
      title: "Music Video Production",
      category: "Music & Film",
      thumbnail: "/api/placeholder/400/250",
      videoUrl: "https://www.youtube.com/watch?v=example8",
      client: "Independent Artist",
      description: "Creative music video with cinematic storytelling approach.",
    },
  ];

  const filteredItems =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <section className="section-padding bg-white" id="portfolio">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-6">
            OUR LATEST <span className="text-gradient">WORK</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of successful video productions across various
            industries and formats.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 animate-fade-in">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-primary-100 hover:text-primary-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="card overflow-hidden group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Video Thumbnail */}
              <div className="relative overflow-hidden">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center hover:bg-primary-700 transition-colors duration-300 transform hover:scale-110"
                    aria-label={`Play ${item.title} video`}
                  >
                    <FaPlay className="text-white text-xl ml-1" />
                  </button>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-primary-600 text-white text-xs px-3 py-1 rounded-full">
                  {item.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{item.client}</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center animate-fade-in">
          <Link
            to="/portfolio"
            className="inline-flex items-center space-x-2 btn-primary text-lg group"
          >
            <span>View Full Portfolio</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        {/* Call to Action */}
        <div className="mt-20 bg-gradient-to-r from-primary-600 to-blue-600 rounded-2xl p-8 md:p-12 text-center text-white animate-fade-in">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Create Something Amazing?
          </h3>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Let's discuss your project and bring your vision to life with our
            professional video production services.
          </p>
          <Link
            to="/contact"
            className="btn-outline hover:bg-white hover:text-primary-600"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
