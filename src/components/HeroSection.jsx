import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { FaPlay, FaPause } from "react-icons/fa";

const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(true);
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

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video - Replace with your actual video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          className="hero-video w-full h-full"
          autoPlay
          muted
          loop
          playsInline
          poster="/api/placeholder/1920/1080"
        >
          {/* Replace these with your actual video files */}
          <source src="/videos/hero-video.mp4" type="video/mp4" />
          <source src="/videos/hero-video.webm" type="video/webm" />
          {/* Fallback image */}
          Your browser does not support the video tag.
        </video>

        {/* Fallback Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-gray-900"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/api/placeholder/1920/1080')`,
          }}
        />

        {/* Video Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Video Control Button */}
      <button
        onClick={toggleVideo}
        className="absolute top-4 right-4 z-20 w-12 h-12 bg-black bg-opacity-50 text-white rounded-full flex items-center justify-center hover:bg-opacity-70 transition-all duration-300"
        aria-label={isPlaying ? "Pause video" : "Play video"}
      >
        {isPlaying ? <FaPause size={16} /> : <FaPlay size={16} />}
      </button>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white container-custom">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg md:text-xl mb-4 text-shadow animate-fade-in">
            WELCOME TO THE TIMES COMMUNICATION
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-shadow-lg animate-slide-up">
            WHERE <span className="text-gradient">VIDEOS</span>
            <br />
            MEETS <span className="text-gradient">EXCELLENCE</span>
          </h1>
          <p
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-shadow leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            We are a group of passionate and experienced filmmakers dedicated to
            helping your business grow through high-quality video production and
            marketing.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-bounce-in"
            style={{ animationDelay: "0.6s" }}
          >
            <Link to="/services" className="btn-primary text-lg px-8 py-4">
              Our Services
            </Link>
            <Link to="/contact" className="btn-outline text-lg px-8 py-4">
              Get In Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2 text-shadow">Scroll Down</span>
          <div className="w-1 h-8 bg-white bg-opacity-50 rounded-full">
            <div className="w-1 h-4 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
