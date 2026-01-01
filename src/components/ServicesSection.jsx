import React from "react";
import { Link } from "react-router-dom";
import {
  FaVideo,
  FaGraduationCap,
  FaBuilding,
  FaTv,
  FaCamera,
  FaShare,
  FaMusic,
  FaHome,
  FaArrowRight,
} from "react-icons/fa";

const ServicesSection = () => {
  const services = [
    {
      icon: FaVideo,
      title: "AI Animated Videos",
      description:
        "Create engaging animated explainer videos using cutting-edge AI technology to simplify complex concepts.",
      image: "/api/placeholder/400/250",
      delay: "0s",
    },
    {
      icon: FaGraduationCap,
      title: "E-Learning Videos",
      description:
        "Educational video content designed to enhance learning experiences with professional production quality.",
      image: "/api/placeholder/400/250",
      delay: "0.1s",
    },
    {
      icon: FaBuilding,
      title: "Corporate Videos",
      description:
        "Professional corporate videos that effectively communicate your brand message and company values.",
      image: "/api/placeholder/400/250",
      delay: "0.2s",
    },
    {
      icon: FaTv,
      title: "TV & Digital Films",
      description:
        "High-quality commercials and digital advertisements for television and online platforms.",
      image: "/api/placeholder/400/250",
      delay: "0.3s",
    },
    {
      icon: FaCamera,
      title: "Product Photography & Videos",
      description:
        "Stunning product visuals that showcase your products in the best light to drive sales.",
      image: "/api/placeholder/400/250",
      delay: "0.4s",
    },
    {
      icon: FaShare,
      title: "Social Media Promo Videos",
      description:
        "Eye-catching promotional videos optimized for social media platforms to maximize engagement.",
      image: "/api/placeholder/400/250",
      delay: "0.5s",
    },
    {
      icon: FaMusic,
      title: "Music & Film Production",
      description:
        "Complete music video and film production services from concept to final delivery.",
      image: "/api/placeholder/400/250",
      delay: "0.6s",
    },
    {
      icon: FaHome,
      title: "Real Estate Videos",
      description:
        "Compelling real estate videos that showcase properties and drive potential buyer interest.",
      image: "/api/placeholder/400/250",
      delay: "0.7s",
    },
  ];

  return (
    <section className="section-padding bg-gray-50" id="services">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">
            Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-6">
            OUR SPHERE OF <span className="text-gradient">VIDEOS</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer a comprehensive range of video production services to help
            your business grow and engage with your audience effectively.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card p-6 group animate-fade-in"
              style={{ animationDelay: service.delay }}
            >
              {/* Service Image */}
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Service Icon */}
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-600 transition-colors duration-300">
                <service.icon className="text-xl text-primary-600 group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Service Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Watch Demo Section */}
        <div className="mt-16 text-center animate-fade-in">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Watch How We Differentiate
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              See the quality and creativity that sets us apart from other video
              production companies.
            </p>

            {/* Demo Video Placeholder */}
            <div className="relative max-w-4xl mx-auto mb-8">
              <div className="aspect-w-16 aspect-h-9 bg-gray-900 rounded-lg overflow-hidden">
                <img
                  src="/api/placeholder/800/450"
                  alt="Demo video thumbnail"
                  className="w-full h-64 md:h-96 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 bg-primary-600 hover:bg-primary-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                    <FaVideo className="text-white text-2xl ml-1" />
                  </button>
                </div>
              </div>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center space-x-2 btn-primary text-lg group"
            >
              <span>View All Services</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
