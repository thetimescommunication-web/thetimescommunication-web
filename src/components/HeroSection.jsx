import React, { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const HeroSection = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
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
    <section 
      className="relative flex items-center justify-center overflow-hidden bg-gray-900 w-full h-[56.25vw] sm:h-[70vh] lg:h-[calc(100vh-5rem)] mt-2 sm:mt-0 mb-8 sm:mb-0">
      {/* Video Container */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center">
        {/* Subtle Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(255, 255, 255, 0.03) 10px,
              rgba(255, 255, 255, 0.03) 20px
            )`
          }}
        />
        {/* Fallback Background Image - Shows while video loads */}
        <div
          className={`absolute inset-0 bg-cover bg-center bg-gray-900 ${
            isVideoReady ? 'opacity-0' : 'opacity-100'
          }`}
          style={{
            transition: 'opacity 1s',
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/api/placeholder/1920/1080')`,
          }}
        />

        {/* Video Element with Progressive Loading */}
        <video
          ref={videoRef}
          className={`w-full h-full object-contain ${
            isVideoReady ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transition: 'opacity 1s' }}
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
          <source src="/videos/TTC WEBSITE VIDEO.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Loading Indicator */}
        {isVideoLoading && !isVideoReady && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 z-10">
            <div className="text-white">
              <div className="rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4" style={{ animation: 'spin 1s linear infinite' }}></div>
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
    </section>
  );
};

export default HeroSection;
