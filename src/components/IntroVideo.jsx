import React, { useEffect, useRef } from "react";

function IntroVideo({ src = "/videos/loader.mp4", onFinish }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const playPromise = v.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {
        if (typeof onFinish === "function") onFinish();
      });
    }
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-[9999] bg-black">
      <video
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
