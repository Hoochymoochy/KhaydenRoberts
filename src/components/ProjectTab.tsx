"use client";
import { useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Projects from "./projects.json";
import Image from "next/image";

interface Tile {
  photo?: string;
  video?: string;
  link?: string;
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
    threshold: 0.15,
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div className="flex flex-col items-center space-y-20 md:space-y-36 w-full min-h-screen h-auto bg-black py-12 md:py-20 px-4 md:px-16 lg:px-24 relative">
      {Object.keys(tiles).map((key) => {
        const tile = tiles[key];
        const isEven = parseInt(key) % 2 === 0;

        return (
          <div
            key={key}
            ref={ref}
            className={`flex ${
              isMobile ? "flex-col" : isEven ? "flex-row" : "flex-row-reverse"
            } justify-center items-center w-full gap-8 md:gap-12 lg:gap-16 max-w-6xl`}
          >
            <div
              className={`flex justify-center items-center ${
                isMobile ? "w-full" : "w-1/2"
              }`}
            >
              {tile.photo
                ? renderImage(tile.photo)
                : tile.video
                  ? renderVideo(tile.video)
                  : renderPlaceholder(tile.text1)}
            </div>
            <div
              className={`flex justify-center items-center ${
                isMobile ? "w-full" : "w-1/2"
              }`}
            >
              {renderText(tile)}
            </div>
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
          className="w-full h-auto object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
    );
  }

  function renderImage(imageSrc: string) {
    return (
      <div className="w-full flex justify-center items-center">
        <Image
          src={imageSrc}
          alt="Project"
          width={800}
          height={500}
          className="w-full h-auto object-cover"
        />
      </div>
    );
  }

  function renderPlaceholder(title: string) {
    return (
      <div className="w-full aspect-video flex items-center justify-center bg-gradient-to-br from-zinc-900 via-black to-zinc-800 border border-white/10">
        <span className="text-3xl md:text-5xl font-bold tracking-tight text-white/80">
          {title}
        </span>
      </div>
    );
  }

  function renderText(tile: Tile) {
    return (
      <div className="w-full flex justify-center items-center">
        <div className="w-full space-y-4 relative">
          <div className="text-sm tracking-[0.2em] uppercase text-white/45">
            {tile.text1}
          </div>
          <div className="font-bold text-2xl md:text-4xl text-white leading-tight">
            {tile.text2}
          </div>
          <div className="flex flex-wrap gap-3 mt-2">
            <div className="border border-white/25 text-white text-sm px-3 py-1.5">
              {tile.badge1}
            </div>
            <div className="border border-white/15 text-white/55 text-sm px-3 py-1.5">
              {tile.badge2}
            </div>
          </div>
          <div className="text-base md:text-lg text-white/55 mt-2 leading-relaxed">
            {tile.text3}
          </div>
          {tile.link ? (
            <a
              href={tile.link}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-2 text-sm text-white/70 hover:text-white underline underline-offset-4 transition-colors"
            >
              View on GitHub →
            </a>
          ) : null}
        </div>
      </div>
    );
  }
}
