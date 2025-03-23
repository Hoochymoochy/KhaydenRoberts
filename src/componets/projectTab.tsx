"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface Tile {
  video: string;
  text1: string;
  text2: string;
  badge1: string;
  badge2: string;
  text3: string;
}

const tiles: Record<string, Tile> = {
  "1": {
    video: "/core-mobile.mp4",
    text1: "Core Mobile Frontend",
    text2: "Designing and Implementing Screen Features for User Data Tracking",
    badge1: "UI/UX Design",
    badge2: "Mobile Development",
    text3:
      "Built the frontend architecture for a mobile app tracking user data and visualizing growth, with seamless authentication and dynamic UI for real-time location and activity tracking. Focused on responsive interfaces for enhanced engagement.",
  },
  "2": {
    video: "/lore.mp4",
    text1: "C0RE L0RE Fullstack",
    text2:
      "Designing and Implementing Screen Features for Comprehensive Data Tracking",
    badge1: "AI Implementation",
    badge2: "Data Tracking",
    text3:
      "Developed an AI-powered personal data tracking system ensuring privacy by processing data locally, with a backend synchronizing user activity, skill evolution, and dynamic Lore experiences for real-time progression insights.",
  },
  "3": {
    video: "/stuped.mp4",
    text1: "Stuped Web App",
    text2: "Building a Vector Database-Powered Image Analysis System",
    badge1: "Vector Database",
    badge2: "Data Tracking",
    text3:
      "Developed a web app that processes user-uploaded images via a vector database, retrieving relevant Wikipedia articles in real-time. Implemented efficient data processing and seamless React integration for user interaction.",
  },
};

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
            className="flex flex-row space-x-10 w-full min-h-3/5 justify-center items-start"
          >
            {isEven ? (
              <>
                {renderVideo(tile.video)}
                {renderText(tile)}
              </>
            ) : (
              <>
                {renderText(tile)}
                {renderVideo(tile.video)}
              </>
            )}
          </div>
        );
      })}
    </div>
  );

  function renderVideo(videoSrc: string) {
    return (
      <div className="w-1/2 justify-center items-center flex">
        <video autoPlay loop muted playsInline className="object-cover">
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }

  function renderText(tile: Tile) {
    return (
      <div className="w-1/2 h-auto items-center flex">
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
