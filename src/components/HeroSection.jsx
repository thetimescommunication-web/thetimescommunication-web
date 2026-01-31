import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaPlay, FaPause } from "react-icons/fa";

const HERO_ROTATING_WORDS = [
  "VIDEOS",
  "VISION",
  "CREATIVITY",
  "STORIES",
  "FILMS",
  "QUALITY",
];

const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [rotatingWordIndex, setRotatingWordIndex] = useState(0);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setIsVideoReady(true);
      setIsVideoLoading(false);
      // Auto-play when ready
      video.play().catch(() => {
        // Auto-play was prevented, user interaction required
        setIsPlaying(false);
      });
    };

    const handleLoadStart = () => {
      setIsVideoLoading(true);
    };

    const handleWaiting = () => {
      setIsVideoLoading(true);
    };

    const handlePlaying = () => {
      setIsVideoLoading(false);
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('waiting', handleWaiting);
    video.addEventListener('playing', handlePlaying);

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('waiting', handleWaiting);
      video.removeEventListener('playing', handlePlaying);
    };
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setRotatingWordIndex((prev) => (prev + 1) % HERO_ROTATING_WORDS.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

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
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        {/* Fallback Background Image - Shows while video loads */}
        <div
          className={`absolute inset-0 bg-cover bg-center bg-gray-900 transition-opacity duration-1000 ${
            isVideoReady ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/api/placeholder/1920/1080')`,
          }}
        />

        {/* Video Element with Progressive Loading */}
        <video
          ref={videoRef}
          className={`hero-video w-full h-full transition-opacity duration-1000 ${
            isVideoReady ? 'opacity-100' : 'opacity-0'
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/api/placeholder/1920/1080"
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

        {/* Loading Indicator */}
        {isVideoLoading && !isVideoReady && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 z-10">
            <div className="text-white">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
              <p className="text-sm">Loading video...</p>
            </div>
          </div>
        )}

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
          {/* Dark Background Overlay for Content */}
          <div className="bg-black bg-opacity-25 backdrop-blur-sm rounded-2xl p-8 md:p-12 lg:p-16 border border-white border-opacity-10 transition-all duration-300 hover:bg-opacity-50 group">
            <p className="text-sm md:text-base lg:text-lg mb-4 text-shadow animate-fade-in uppercase tracking-[0.2em] font-semibold text-primary-300 group-hover:text-primary-200 transition-colors duration-300 letter-spacing-wider">
              <span className="inline-block animate-slide-up" style={{ animationDelay: "0.1s" }}>WELCOME</span>
              <span className="mx-2">TO</span>
              <span className="inline-block animate-slide-up" style={{ animationDelay: "0.2s" }}>THE</span>
              <span className="mx-2 inline-block animate-slide-up" style={{ animationDelay: "0.3s" }}>TIMES</span>
              <span className="inline-block animate-slide-up" style={{ animationDelay: "0.4s" }}>COMMUNICATION</span>
          </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-shadow-lg animate-slide-up group-hover:scale-105 transition-transform duration-500">
              WHERE{" "}
              <span
                key={HERO_ROTATING_WORDS[rotatingWordIndex]}
                className="inline-block animate-slide-up"
              >
                <span className="text-gradient animate-pulse">
                  {HERO_ROTATING_WORDS[rotatingWordIndex]}
                </span>
              </span>
            <br />
              MEETS{" "}
              <span
                className="text-gradient animate-pulse"
                style={{ animationDelay: "0.5s" }}
              >
                EXCELLENCE
              </span>
          </h1>
          <p
              className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-shadow leading-relaxed animate-fade-in group-hover:text-white transition-colors duration-300"
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
