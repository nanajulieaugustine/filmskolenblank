"use client";
import { useRef } from "react";

const VideoOnHover = ({ generation }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <div
      className="relative w-full h-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={`/elever/${generation.video}`}
        alt={`video af forside på ${generation.generation}`}
        playsInline
        muted
        loop
        className="w-full h-full object-cover"
      ></video>
      <h2 className="absolute inset-0 flex items-center justify-center hover:scale-103 transition-all duration-300">
        {`// ${generation.generation}`}
      </h2>
    </div>
  );
};

export default VideoOnHover;
