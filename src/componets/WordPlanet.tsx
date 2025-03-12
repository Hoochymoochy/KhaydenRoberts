"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

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
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [positions, setPositions] = useState<[number, number][]>([]);

  useEffect(() => {
    if (cardRef.current) {
      const { width, height } = cardRef.current.getBoundingClientRect();
      setSize({ width, height });

      const generatePosition = (): [number, number] => {
        const x = Math.random() * width;
        const y = Math.random() * height;

        for (let i = 0; i < positions.length; i++) {
          const [checkX, checkY] = positions[i];
          const distance = Math.sqrt((x - checkX) ** 2 + (y - checkY) ** 2);

          if (distance < 200) {
            return generatePosition();
          }
        }
        return [x, y];
      };

      const newPositions = words.map(() => generatePosition());
      setPositions(newPositions);
    }
  }, [cardRef]);

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
    <div>
      <div
        ref={cardRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative w-80 h-80 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg cursor-pointer "
      >
        {positions.map(([x, y], index) => (
          <motion.div
            key={index}
            className="absolute text-white font-bold text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
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
    </div>
  );
};

export default WordPlanet;
