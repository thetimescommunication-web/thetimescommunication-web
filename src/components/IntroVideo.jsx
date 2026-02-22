import React, { useEffect, useRef, useState } from "react";

function IntroVideo({ onFinish }) {
  const videoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile based on screen width
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const src = isMobile ? "/videos/mobile-loader.mp4" : "/videos/loader.mp4";

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const playPromise = v.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {
        if (typeof onFinish === "function") onFinish();
      });
    }
  }, [onFinish, src]);

  return (
    <div className="fixed inset-0 z-[9999] bg-black">
      <video
        key={src}
        ref={videoRef}
        className="h-full w-full object-cover"
        src={src}
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={onFinish}
        onError={onFinish}
      />
    </div>
  );
}

export default IntroVideo;
