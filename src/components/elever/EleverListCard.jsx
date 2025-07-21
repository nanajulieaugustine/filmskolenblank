"use client";
import VideoOnHover from "./VideoOnHover";
import generationer from "@/backend/generationer.json"
import Link from "next/link";
import { useRef } from "react";

const EleverListCard = () => {
  const generationerVideo = generationer.filter((generation) => generation.active === true);

  return (
    <ul className="h-screen flex flex-col justify-center md:justify-start md:h-full">
      {generationerVideo.slice().reverse().map((generation) => {
        const videoRef = useRef(null);

        const playVideo = () => {
          videoRef.current?.play();
        };

        const stopVideo = () => {
          if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
          }
        };

        return (
          <li key={generation.generation_id}>
            <Link
              href={`/elever/${generation.generation_id}`}
              onFocus={playVideo}
              onBlur={stopVideo}
              className="block w-full h-full"
            >
              <VideoOnHover generation={generation} videoRef={videoRef} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default EleverListCard;
