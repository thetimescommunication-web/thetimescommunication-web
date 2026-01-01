import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaPlay,
  FaFilter,
  FaExternalLinkAlt,
  FaCalendarAlt,
} from "react-icons/fa";

const PortfolioPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

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
      title: "Corporate Brand Story - TechCorp",
      category: "Corporate Videos",
      thumbnail: "/api/placeholder/500/300",
      videoUrl: "https://www.youtube.com/watch?v=example1",
      client: "TechCorp Solutions",
      year: "2024",
      description:
        "A compelling brand story showcasing company values, culture, and vision for the future. This corporate video helped TechCorp connect with their audience on an emotional level.",
      tags: ["Brand Story", "Corporate", "Culture"],
      duration: "3:45",
    },
    {
      id: 2,
      title: "Product Launch Campaign - SmartDevice",
      category: "TV & Digital Ad Films",
      thumbnail: "/api/placeholder/500/300",
      videoUrl: "https://www.youtube.com/watch?v=example2",
      client: "SmartDevice Inc.",
      year: "2024",
      description:
        "High-impact commercial for a revolutionary smart device launch. The campaign achieved 2M+ views and significantly boosted pre-orders.",
      tags: ["Product Launch", "Commercial", "Tech"],
      duration: "1:30",
    },
    {
      id: 3,
      title: "AI Software Explainer - DataFlow",
      category: "Explainer Videos",
      thumbnail: "/api/placeholder/500/300",
      videoUrl: "https://www.youtube.com/watch?v=example3",
      client: "DataFlow Analytics",
      year: "2024",
      description:
        "Animated explainer video that simplified complex AI concepts for a SaaS platform, resulting in 40% increase in trial signups.",
      tags: ["AI", "SaaS", "Animation"],
      duration: "2:15",
    },
    {
      id: 4,
      title: "Luxury Real Estate Showcase - Oceanview Villas",
      category: "Real Estate Videos",
      thumbnail: "/api/placeholder/500/300",
      videoUrl: "https://www.youtube.com/watch?v=example4",
      client: "Oceanview Properties",
      year: "2024",
      description:
        "Stunning drone cinematography showcasing luxury oceanfront villas. The video helped sell 80% of properties within 3 months.",
      tags: ["Luxury", "Drone", "Property"],
      duration: "4:20",
    },
    {
      id: 5,
      title: "Fashion Brand Social Campaign - StyleCo",
      category: "Social Media Promo",
      thumbnail: "/api/placeholder/500/300",
      videoUrl: "https://www.youtube.com/watch?v=example5",
      client: "StyleCo Fashion",
      year: "2024",
      description:
        "Viral social media content featuring influencer collaborations. Generated 5M+ impressions across all platforms.",
      tags: ["Fashion", "Influencer", "Viral"],
      duration: "0:45",
    },
    {
      id: 6,
      title: "Online Learning Platform - EduTech",
      category: "E-Learning Videos",
      thumbnail: "/api/placeholder/500/300",
      videoUrl: "https://www.youtube.com/watch?v=example6",
      client: "EduTech Platform",
      year: "2023",
      description:
        "Interactive learning modules for professional development courses. Improved student engagement by 60%.",
      tags: ["Education", "Interactive", "Professional"],
      duration: "8:30",
    },
    {
      id: 7,
      title: "E-commerce Product Showcase - GadgetStore",
      category: "Product Photography",
      thumbnail: "/api/placeholder/500/300",
      videoUrl: "https://www.youtube.com/watch?v=example7",
      client: "GadgetStore Online",
      year: "2023",
      description:
        "Dynamic product photography and videography that increased conversion rates by 35% for an e-commerce platform.",
      tags: ["E-commerce", "Product", "Photography"],
      duration: "2:00",
    },
    {
      id: 8,
      title: "Independent Music Video - Rising Star",
      category: "Music & Film",
      thumbnail: "/api/placeholder/500/300",
      videoUrl: "https://www.youtube.com/watch?v=example8",
      client: "Independent Artist",
      year: "2023",
      description:
        "Cinematic music video with creative storytelling that gained 1M+ views on YouTube and helped launch the artist's career.",
      tags: ["Music Video", "Cinematic", "Storytelling"],
      duration: "4:10",
    },
    {
      id: 9,
      title: "Healthcare Training Series - MedCorp",
      category: "E-Learning Videos",
      thumbnail: "/api/placeholder/500/300",
      videoUrl: "https://www.youtube.com/watch?v=example9",
      client: "MedCorp Healthcare",
      year: "2023",
      description:
        "Comprehensive training series for healthcare professionals covering new procedures and safety protocols.",
      tags: ["Healthcare", "Training", "Professional"],
      duration: "12:45",
    },
    {
      id: 10,
      title: "Startup Pitch Video - InnovateTech",
      category: "Corporate Videos",
      thumbnail: "/api/placeholder/500/300",
      videoUrl: "https://www.youtube.com/watch?v=example10",
      client: "InnovateTech Startup",
      year: "2023",
      description:
        "Compelling pitch video that helped a startup secure $2M in Series A funding.",
      tags: ["Startup", "Pitch", "Funding"],
      duration: "5:30",
    },
    {
      id: 11,
      title: "Restaurant Chain Commercial - FoodieHub",
      category: "TV & Digital Ad Films",
      thumbnail: "/api/placeholder/500/300",
      videoUrl: "https://www.youtube.com/watch?v=example11",
      client: "FoodieHub Restaurants",
      year: "2023",
      description:
        "Mouth-watering commercial showcasing new menu items, resulting in 25% increase in foot traffic.",
      tags: ["Food", "Commercial", "Restaurant"],
      duration: "1:00",
    },
    {
      id: 12,
      title: "Non-Profit Awareness Campaign - GreenEarth",
      category: "Social Media Promo",
      thumbnail: "/api/placeholder/500/300",
      videoUrl: "https://www.youtube.com/watch?v=example12",
      client: "GreenEarth Foundation",
      year: "2023",
      description:
        "Emotional awareness campaign about climate change that reached 10M+ people and increased donations by 150%.",
      tags: ["Non-Profit", "Awareness", "Climate"],
      duration: "2:30",
    },
  ];

  const filteredItems =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-blue-600 text-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
            Our <span className="text-yellow-300">Portfolio</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Explore our latest video productions and see the quality that sets
            us apart.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white sticky top-16 z-40 border-b">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-600">
                Showing {filteredItems.length} of {portfolioItems.length}{" "}
                projects
              </p>
            </div>

            {/* Mobile Filter Button */}
            <div className="md:hidden mb-4">
              <button
                onClick={toggleFilter}
                className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg"
              >
                <FaFilter />
                <span>Filter</span>
              </button>
            </div>

            {/* Filter Categories */}
            <div
              className={`w-full md:w-auto ${
                isFilterOpen ? "block" : "hidden md:block"
              }`}
            >
              <div className="flex flex-wrap justify-center md:justify-end gap-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedCategory(category);
                      setIsFilterOpen(false);
                    }}
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
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Video Thumbnail */}
                <div className="relative group overflow-hidden">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-16 h-16 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 transform hover:scale-110">
                      <FaPlay className="text-white text-xl ml-1" />
                    </button>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                    {item.duration}
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-primary-600 text-white text-xs px-3 py-1 rounded-full">
                    {item.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <FaCalendarAlt className="mr-2" />
                    <span>{item.year}</span>
                    <span className="mx-2">•</span>
                    <span>{item.client}</span>
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3 hover:text-primary-600 transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <button className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium group">
                    <span>View Project</span>
                    <FaExternalLinkAlt className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {filteredItems.length >= 9 && (
            <div className="text-center mt-12">
              <button className="btn-primary px-8 py-3">
                Load More Projects
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-blue-600">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-slide-up">
            Like What You See?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-in">
            Let's create something amazing together. Contact us to discuss your
            next video project.
          </p>
          <div className="animate-bounce-in">
            <Link
              to="/contact"
              className="btn-outline hover:bg-white hover:text-primary-600 text-lg px-8 py-4 mr-4"
            >
              Start Your Project
            </Link>
            <Link
              to="/services"
              className="btn-outline hover:bg-white hover:text-primary-600 text-lg px-8 py-4"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
