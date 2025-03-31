"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

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
];

const WordPlanet: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [positions, setPositions] = useState<[number, number][]>([]);

  const getRandomSize = () => {
    const sizes = [
      "text-xs",
      "text-sm",
      "text-base",
      "text-lg",
      "text-xl",
      "text-2xl",
    ];
    return sizes[Math.floor(Math.random() * sizes.length)];
  };

  const getRandomOpacity = () => {
    const opacities = ["opacity-30", "opacity-50", "opacity-70", "opacity-90"];
    return opacities[Math.floor(Math.random() * opacities.length)];
  };

  useEffect(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(width, height) * 0.45;

      const newPositions = words.map(() => {
        const angle = Math.random() * 2 * Math.PI;
        const distance = Math.random() * radius;
        const x = centerX + distance * Math.cos(angle);
        const y = centerY + distance * Math.sin(angle);
        return [x, y];
      });

      setPositions(newPositions);
    }
  }, [containerRef]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center"
    >
      <div className="absolute w-80 h-80 rounded-full border border-gray-800 opacity-30"></div>
      <div className="absolute w-64 h-64 rounded-full border border-gray-700 opacity-40"></div>
      <div className="absolute w-48 h-48 rounded-full border border-gray-600 opacity-50"></div>

      {positions.map(([x, y], index) => (
        <motion.div
          key={index}
          className={`absolute ${getRandomSize()} ${getRandomOpacity()} text-gray-300 font-medium tracking-wide`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.2, 1, 0.2],
          }}
          transition={{
            duration: Math.random() * 8 + 4,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
          style={{
            top: y,
            left: x,
            transform: "translate(-50%, -50%)",
          }}
        >
          {words[index % words.length]}
        </motion.div>
      ))}
    </div>
  );
};

export default WordPlanet;
