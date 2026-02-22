import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaAward,
  FaUsers,
  FaProjectDiagram,
} from "react-icons/fa";
import { SectionSkeleton } from "./SkeletonLoader";
import { useSectionImageLoading } from "../hooks/useImageLoading";

const AboutSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const productionImages = [
    {
      url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=1000&fit=crop&q=80&auto=format",
      alt: "Corporate video interview setup in modern office",
    },
    {
      url: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&h=1000&fit=crop&q=80&auto=format",
      alt: "Product photography shoot with studio lighting",
    },
    {
      url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1600&h=1000&fit=crop&q=80&auto=format",
      alt: "TV and digital film commercial set",
    },
    {
      url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1600&h=1000&fit=crop&q=80&auto=format",
      alt: "Music video production with band and lighting",
    },
    {
      url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&h=1000&fit=crop&q=80&auto=format",
      alt: "Real estate interior cinematography scene",
    },
    {
      url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&h=1000&fit=crop&q=80&auto=format",
      alt: "E-learning content production environment",
    },
  ];

  // Track image loading
  const { allImagesLoaded } = useSectionImageLoading(productionImages);

  // Auto-rotate images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % productionImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [productionImages.length]);

  const stats = [
    { icon: FaAward, number: "5+", label: "Years Experience" },
    { icon: FaUsers, number: "50+", label: "Happy Clients" },
    { icon: FaProjectDiagram, number: "150+", label: "Projects Completed" },
  ];

  return (
    <SectionSkeleton isLoading={!allImagesLoaded} skeletonType="image">
      <section className="section-padding bg-white" id="about">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <div className="mb-6">
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wide">
                About The Times Communication
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-6">
                WE ARE DETERMINED FOR YOUR{" "}
                <span className="text-gradient">GROWTH</span>
              </h2>
            </div>

            <div className="prose prose-lg text-gray-600 mb-8">
              <p className="leading-relaxed">
                The Times Communication is a creative film and media production
                house based in Rajkot, Gujarat, driven by a passion for powerful
                visual storytelling. We specialize in crafting corporate films,
                brand stories, real estate walkthroughs, and institutional
                videos for hospitals and educational institutes, helping
                businesses communicate with clarity and impact. With a strong
                focus on creativity, precision, and global-standard production
                quality, we approach every project with a filmmaker’s
                mindset—transforming ideas into engaging visuals that connect
                with the right audience and leave a lasting impression.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="text-primary-600 text-xl" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center space-x-2 btn-primary group"
            >
              <span>Learn More</span>
              <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* Image Carousel */}
          <div className="relative animate-fade-in">
            <div className="relative group">
              {/* Image Container with Fade Animation */}
              <div className="relative overflow-hidden rounded-lg shadow-2xl h-[500px]">
                {productionImages.map((image, index) => (
                  <img
                    key={index}
                    src={image.url}
                    alt={image.alt}
                    className={`absolute inset-0 w-full h-full object-cover rounded-lg transition-opacity duration-1000 ${
                      index === currentImageIndex
                        ? "opacity-100 z-10"
                        : "opacity-0 z-0"
                    }`}
                    loading={index === 0 ? "eager" : "lazy"}
                    onError={(e) => {
                      e.target.onerror = null; // prevent infinite loop
                      e.target.src =
                        "https://via.placeholder.com/1600x1000/009292/ffffff?text=The+Times+Communication";
                    }}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg z-20"></div>
              </div>

              {/* Image Indicators */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
                {productionImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? "w-8 bg-white"
                        : "w-2 bg-white/50 hover:bg-white/75"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>

              {/* Additional Floating Badge */}
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-gray-100 animate-fade-in z-20">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-900">
                    5+ Years
                  </span>
                </div>
                <div className="text-xs text-gray-600 mt-1">Experience</div>
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-r from-primary-400 to-blue-500 rounded-full opacity-20 -z-10 animate-pulse"></div>
            <div
              className="absolute top-1/2 -left-12 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 -z-10 animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute bottom-1/4 -right-8 w-12 h-12 bg-gradient-to-r from-primary-300 to-pink-400 rounded-full opacity-15 -z-10 animate-pulse"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
    </SectionSkeleton>
  );
};

export default AboutSection;
