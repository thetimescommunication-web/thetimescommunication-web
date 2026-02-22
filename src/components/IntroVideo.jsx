import React, { useEffect, useRef, useState } from "react";

function IntroVideo({ onFinish }) {
  const videoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    // Detect mobile based on screen width
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const src = isMobile ? "/videos/final-mobile-loader.mp4" : "/videos/loader.mp4";

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // Preload video metadata
    v.preload = "auto";
    v.load();
  }, [src]);

  const handleCanPlay = () => {
    setVideoReady(true);
    const v = videoRef.current;
    if (!v) return;

    const playPromise = v.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {
        if (typeof onFinish === "function") onFinish();
      });
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-white flex items-center justify-center">
      {/* Logo Fallback - shown while video loads */}
      <div 
        className={`absolute inset-0 flex items-center justify-center bg-white transition-opacity duration-500 ${
          videoReady ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <img 
          src="/images/color-logo.png" 
          alt="The Times Communication"
          className="w-48 h-auto object-contain"
        />
      </div>

      {/* Video - shown when ready */}
      <video
        key={src}
        ref={videoRef}
        className={`transition-opacity duration-500 ${
          isMobile 
            ? 'max-w-[calc(100%-1rem)] max-h-full object-contain' 
            : 'h-full w-full object-cover'
        } ${
          videoReady ? 'opacity-100' : 'opacity-0'
        }`}
        src={src}
        autoPlay={videoReady}
        muted
        playsInline
        preload="auto"
        onCanPlayThrough={handleCanPlay}
        onEnded={onFinish}
        onError={onFinish}
      />
    </div>
  );
}

export default IntroVideo;
