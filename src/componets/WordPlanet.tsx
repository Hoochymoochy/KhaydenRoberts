"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { p } from "framer-motion/client";
import { get } from "http";

const words = [
  "Web Widgets",
  "AWS",
  "React",
  "CSS",
  "Redux",
  "ThreeJS",
  "Context",
  "GitHub",
  "WordPress",
  "State Management",
  "TypeScript",
  "HTML",
  "JavaScript",
  "NPM",
  "Vue",
  "Tailwind",
  "Next.js",
  "Web3",
  "Node.js",
  "SQL",
  "Python",
  "Web Widgets",
  "AWS",
  "Web Widgets",
  "AWS",
  "React",
  "CSS",
  "Redux",
  "ThreeJS",
  "Context",
  "GitHub",
  "WordPress",
  "State Management",
  "TypeScript",
  "HTML",
  "JavaScript",
  "NPM",
  "Vue",
  "Tailwind",
  "Next.js",
  "Web3",
  "Node.js",
  "SQL",
  "Python",
  "Web Widgets",
  "AWS",
];

const WordPlanet: React.FC = () => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [positions, setPositions] = useState<[number, number][]>([]);

  const getRandomSize = () => {
    const sizes = [
      "text-xs",
      "text-sm",
      "text-base",
      "text-lg",
      "text-xl",
      "text-2xl",
      "text-3xl",
    ];
    return sizes[Math.floor(Math.random() * sizes.length)];
  };
  const getRandomOpacity = () => {
    const sizes = ["1", "0.8", "0.6"];
    return sizes[Math.floor(Math.random() * sizes.length)];
  };
  const getRandomIndex = () => {
    const sizes = ["z-index-1", "z-index-2", "z-index-3"];
    return sizes[Math.floor(Math.random() * sizes.length)];
  };

  useEffect(() => {
    if (cardRef.current) {
      const { width, height } = cardRef.current.getBoundingClientRect();

      const space = (attempts = 0): [number, number] => {
        const [checkX, checkY] = getRandomPointInEllipse(
          170,
          170,
          width,
          height
        );
        const minDistance = 50;
        const maxAttempts = 100; // Limit how many times we retry

        for (let i = 0; i < positions.length; i++) {
          if (
            positions[i][0] < checkX * 0.1 &&
            positions[i][1] > checkY * 0.1 &&
            Math.abs(positions[i][0] - checkX) > minDistance &&
            Math.abs(positions[i][1] - checkY) > minDistance
          ) {
            console.log(positions[i][0], positions[i][1]);
            return [checkX, checkY]; // Valid position found
          }
        }

        if (attempts >= maxAttempts) {
          console.warn("Max attempts reached, returning current position.");
          return [checkX, checkY]; // Return the current position if max attempts are reached
        }

        return space(attempts + 1); // Retry with incremented attempt count
      };

      const newPositions = words.map(() => space());
      setPositions(newPositions);
    }
  }, [cardRef]);

  const getRandomPointInEllipse = (
    cx: number,
    cy: number,
    width: number,
    height: number
  ): [number, number] => {
    const a = width / 2; // Semi-major axis (half of the width)
    const b = height / 2; // Semi-minor axis (half of the height)

    // Generate a random angle between 0 and 2π (full circle)
    const theta = Math.random() * 2 * Math.PI;

    // Generate a random radius factor (square root ensures even distribution)
    const r = Math.sqrt(Math.random());

    // Calculate the (x, y) point based on the ellipse formula
    const x = cx + r * a * Math.cos(theta);
    const y = cy + r * b * Math.sin(theta);

    return [x, y];
  };

  const handleMouseEnter = () => {
    gsap.to(cardRef.current, {
      scale: 1.05,
      rotationX: 10,
      rotationY: -10,
      duration: 0.3,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      scale: 1,
      rotationX: 0,
      rotationY: 0,
      duration: 0.6,
      ease: "power3.out",
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-80 h-80 rounded-full cursor-pointer"
    >
      {positions.map(([x, y], index) => (
        <motion.div
          key={index}
          className={`absolute text-red-500 font-bold ${
            (getRandomSize(), getRandomIndex())
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: getRandomOpacity() }}
          transition={{ delay: index * 0.05 }}
          style={{
            top: y,
            left: x,
            transform: "translate(-50%, -50%)",
          }}
        >
          {words[index]}
        </motion.div>
      ))}
    </div>
  );
};

export default WordPlanet;
