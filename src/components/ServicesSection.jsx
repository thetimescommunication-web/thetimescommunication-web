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
import { SectionSkeleton } from "./SkeletonLoader";
import { useSectionImageLoading } from "../hooks/useImageLoading";

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
      icon: FaBuilding,
      title: "Corporate Film",
      description:
        "Create professional corporate films that communicate your company profile, culture, strengths, and vision with clarity and impact.",
      image: "/images/services/corporate.jpeg",
      delay: "0s",
    },
    {
      icon: FaVideo,
      title: "Documentary Film",
      description:
        "Craft compelling documentary films that tell authentic stories with depth, emotion, and cinematic storytelling.",
      image: "/images/services/documentry1.PNG",
      delay: "0.1s",
    },
    {
      icon: FaGraduationCap,
      title: "Government Documentaries",
      description:
        "Produce informative and impactful government documentaries that communicate public initiatives with clarity and credibility.",
      image: "/images/services/goverment_documentries.png",
      delay: "0.2s",
    },
    {
      icon: FaTv,
      title: "Brand Story Video Film",
      description:
        "Bring your brand's journey to life through powerful story-driven films that connect emotionally with your audience.",
      image: "/images/services/brand_story1.PNG",
      delay: "0.3s",
    },
    {
      icon: FaHome,
      title: "Real Estate Walkthrough & Property Films",
      description:
        "Create immersive property walkthrough films that showcase spaces, design, and lifestyle with cinematic precision.",
      image: "/images/services/real_estate.PNG",
      delay: "0.4s",
    },
    {
      icon: FaCamera,
      title: "Hospital & Healthcare Institutional Videos",
      description:
        "Develop trust-building healthcare films that highlight expertise, infrastructure, and patient-centric care.",
      image: "/images/services/hosptal_helthcare.png",
      delay: "0.5s",
    },
    {
      icon: FaShare,
      title: "Educational Institution Film",
      description:
        "Produce engaging institutional films that showcase academic excellence, campus life, and educational values.",
      image: "/images/services/educational.PNG",
      delay: "0.6s",
    },
    {
      icon: FaMusic,
      title: "Promotional & Marketing Videos",
      description:
        "Design high-impact promotional videos that boost visibility, engagement, and brand recall across platforms.",
      image: "/images/services/promotional_marketing.PNG",
      delay: "0.7s",
    },
    {
      icon: FaHome,
      title: "Social Media Video Content",
      description:
        "Create scroll-stopping social media videos optimized for reach, engagement, and platform performance.",
      image: "/images/services/social_media.png",
      delay: "0.8s",
    },
    {
      icon: FaVideo,
      title: "Digital Media Ad Film",
      description:
        "Produce digital-first ad films crafted for online platforms to capture attention fast and drive strong performance.",
      image: "/images/services/tv_digital_add.png",
      delay: "0.9s",
    },
    {
      icon: FaHome,
      title: "Product Photography & Video",
      description:
        "Create stunning product visuals and videos that enhance appeal and drive purchasing decisions.",
      image: "/images/services/product_photography.png",
      delay: "1s",
    },
    {
      icon: FaTv,
      title: "TV Ad Film",
      description:
        "Produce impactful TV ad films designed to capture attention and deliver strong brand messaging with broadcast-ready quality.",
      image: "/images/services/tv_digital_add.png",
      delay: "1.1s",
    },
  ];

  // Track image loading for services and demo video
  const serviceImages = services.slice(0, 4).map(service => service.image);
  const demoVideoImage = "/images/video-logo.jpeg";
  const { allImagesLoaded } = useSectionImageLoading([...serviceImages, demoVideoImage]);

  return (
    <SectionSkeleton isLoading={!allImagesLoaded} skeletonType="service">
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
          {services.slice(0, 4).map((service, index) => (
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
              <p 
                className="text-gray-600 leading-relaxed text-justify break-words" 
                style={{ hyphens: 'auto', WebkitHyphens: 'auto', msHyphens: 'auto' }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Show All Services Button */}
        {services.length > 4 && (
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 btn-primary text-lg group"
            >
              <span>Show All Services</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        )}

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
                      src="/images/video-logo.jpeg"
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
                  poster="/images/video-logo.jpeg"
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
    </SectionSkeleton>
  );
};

export default ServicesSection;
