"use client";
import { useRef } from "react";

const VideoOnHover = ({generation}) => {

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
    <video
      ref={videoRef}
      src={`/elever/${generation.video}`}
      alt={`video af forside på ${generation.generation}`}
      playsInline
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-full h-full"
    ></video>
  );
};

export default VideoOnHover;
