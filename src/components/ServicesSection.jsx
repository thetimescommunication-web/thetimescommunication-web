import React, { useState, useRef } from "react";
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
  FaPlay,
} from "react-icons/fa";

const ServicesSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  const services = [
    {
      icon: FaVideo,
      title: "AI Animated Videos",
      description:
        "Create engaging animated explainer videos using cutting-edge AI technology to simplify complex concepts.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop&q=80",
      delay: "0s",
    },
    {
      icon: FaGraduationCap,
      title: "E-Learning Videos",
      description:
        "Educational video content designed to enhance learning experiences with professional production quality.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop&q=80",
      delay: "0.1s",
    },
    {
      icon: FaBuilding,
      title: "Corporate Videos",
      description:
        "Professional corporate videos that effectively communicate your brand message and company values.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop&q=80",
      delay: "0.2s",
    },
    {
      icon: FaTv,
      title: "TV & Digital Films",
      description:
        "High-quality commercials and digital advertisements for television and online platforms.",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=250&fit=crop&q=80",
      delay: "0.3s",
    },
    {
      icon: FaCamera,
      title: "Product Photography & Videos",
      description:
        "Stunning product visuals that showcase your products in the best light to drive sales.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=250&fit=crop&q=80",
      delay: "0.4s",
    },
    {
      icon: FaShare,
      title: "Social Media Promo Videos",
      description:
        "Eye-catching promotional videos optimized for social media platforms to maximize engagement.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=250&fit=crop&q=80",
      delay: "0.5s",
    },
    {
      icon: FaMusic,
      title: "Music & Film Production",
      description:
        "Complete music video and film production services from concept to final delivery.",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=250&fit=crop&q=80",
      delay: "0.6s",
    },
    {
      icon: FaHome,
      title: "Real Estate Videos",
      description:
        "Compelling real estate videos that showcase properties and drive potential buyer interest.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop&q=80",
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
              <div className="relative mb-6 overflow-hidden rounded-lg bg-gray-200">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to placeholder if image doesn't exist
                    e.target.src = `https://via.placeholder.com/400x250/009292/ffffff?text=${encodeURIComponent(service.title)}`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center shadow-lg">
                    <service.icon className="text-white text-lg" />
                  </div>
              </div>
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

            {/* Demo Video */}
            <div className="relative max-w-4xl mx-auto mb-8">
              <div className="relative bg-transparent overflow-visible">
                {!isPlaying && (
                  <div className="relative">
                <img
                      src="/images/video-logo.png"
                      alt="The Times Communication"
                      className="w-full h-auto object-contain"
                />
                    <div className="absolute inset-0 flex items-center justify-center cursor-pointer" onClick={toggleVideo}>
                      <button
                        onClick={toggleVideo}
                        className="w-20 h-20 bg-primary-600 hover:bg-primary-700 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                        aria-label="Play video"
                      >
                        <FaPlay className="text-white text-2xl ml-1" />
                  </button>
                </div>
                  </div>
                )}
                <video
                  ref={videoRef}
                  className={`w-full h-auto object-contain cursor-pointer ${!isPlaying ? 'hidden' : ''}`}
                  preload="metadata"
                  loop
                  playsInline
                  poster="/images/video-logo.png"
                  onClick={toggleVideo}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => {
                    if (videoRef.current) {
                      videoRef.current.currentTime = 0;
                      videoRef.current.play();
                    }
                  }}
                >
                  <source src="/videos/THE TIMES COMMUNICATION-cut.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
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
