"use client";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Projects from "./projects.json";

interface Tile {
  video: string;
  text1: string;
  text2: string;
  badge1: string;
  badge2: string;
  text3: string;
}

const tiles: Record<string, Tile> = Projects;

export default function ProjectTab() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div className="flex flex-col items-center space-y-64 w-full min-h-screen h-auto bg-black py-28 px-20 relative">
      {Object.keys(tiles).map((key) => {
        const tile = tiles[key];
        const isEven = parseInt(key) % 2 === 0;

        return (
          <div
            key={key}
            ref={ref}
            className="flex flex-row justify-center items-center w-full space-x-10 min-h-3/5"
          >
            {isEven ? (
              <>
                <div className="flex justify-center items-center w-1/2">
                  {renderText(tile)}
                </div>
                <div className="flex justify-center items-center w-1/2">
                  {renderVideo(tile.video)}
                </div>
              </>
            ) : (
              <>
                <div className="flex justify-center items-center w-1/2">
                  {renderVideo(tile.video)}
                </div>
                <div className="flex justify-center items-center w-1/2">
                  {renderText(tile)}
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
  function renderVideo(videoSrc: string) {
    return (
      <div className="w-full flex justify-center items-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-[80%] h-auto object-cover rounded-xl"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }

  function renderText(tile: Tile) {
    return (
      <div className="w-full flex justify-center items-center">
        <div className="w-2/3 space-y-2 mt-20 relative overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover rounded-2xl grayscale brightness-200"
          >
            <source src="/border.mp4" type="video/mp4" />
          </video>

          <div className="relative z-10 p-4 bg-black/80 m-3 rounded-2xl">
            <div className="text-2xl text-white">{tile.text1}</div>
            <div className="font-bold text-4xl text-white">{tile.text2}</div>
            <div className="flex blocks space-x-6 mt-4">
              <div className="bg-black border-2 text-white text-opacity-100 rounded-xl text-xl p-2 px-4">
                {tile.badge1}
              </div>
              <div className="bg-black border-2 text-white text-opacity-50 rounded-xl text-xl p-2 px-4">
                {tile.badge2}
              </div>
            </div>
            <div className="text-2xl text-gray-300 mt-4">{tile.text3}</div>
          </div>
        </div>
      </div>
    );
  }
}
