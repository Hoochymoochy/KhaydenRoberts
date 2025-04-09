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
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(false);

  const getRandomSize = () => {
    // Smaller text sizes for mobile
    if (isMobile) {
      const sizes = ["text-xs", "text-sm", "text-base"];
      return sizes[Math.floor(Math.random() * sizes.length)];
    }

    // Original text sizes for desktop
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

  // Handle resize and recalculate positions
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setDimensions({ width: rect.width, height: rect.height });
      }
    };

    // Initial calculation
    handleResize();

    // Set a small delay to ensure container has proper dimensions
    const timer = setTimeout(() => {
      handleResize();
    }, 500);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, []);

  // Recalculate positions when dimensions change
  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    const centerX = dimensions.width / 2;
    const centerY = dimensions.height / 2;
    // Adjusted radius calculation to ensure visibility
    const radius =
      Math.min(dimensions.width, dimensions.height) * (isMobile ? 0.35 : 0.4);

    const newPositions: [number, number][] = words.map(() => {
      const angle = Math.random() * 2 * Math.PI;
      // Use a minimum distance to avoid clustering at center
      const minDistance = radius * 0.2;
      const distance = minDistance + Math.random() * (radius - minDistance);
      const x = centerX + distance * Math.cos(angle);
      const y = centerY + distance * Math.sin(angle);
      return [x, y] as [number, number];
    });

    setPositions(newPositions);
  }, [dimensions, isMobile]);

  // Force repositioning on first render and after short delay
  useEffect(() => {
    // Initial positions
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        setDimensions({ width: rect.width, height: rect.height });
      }
    }

    // Force a recalculation after a short delay
    const timer = setTimeout(() => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
          setDimensions({ width: rect.width, height: rect.height });
        }
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center"
      style={{ minHeight: isMobile ? "300px" : "500px" }}
    >
      {/* Responsive circles - visible in both mobile and desktop */}
      <div
        className={`absolute ${
          isMobile ? "w-56 h-56" : "w-80 h-80"
        } rounded-full border border-gray-800 opacity-30`}
      ></div>
      <div
        className={`absolute ${
          isMobile ? "w-44 h-44" : "w-64 h-64"
        } rounded-full border border-gray-700 opacity-40`}
      ></div>
      <div
        className={`absolute ${
          isMobile ? "w-32 h-32" : "w-48 h-48"
        } rounded-full border border-gray-600 opacity-50`}
      ></div>

      {/* Ensure words are rendered even if positions aren't calculated yet */}
      {positions.length > 0 ? (
        positions.map(([x, y], index) => (
          <motion.div
            key={index}
            className={`absolute ${getRandomSize()} ${getRandomOpacity()} text-gray-300 font-medium tracking-wide whitespace-nowrap`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.2, 1, 0.2],
            }}
            transition={{
              duration: Math.random() * (isMobile ? 6 : 8) + (isMobile ? 3 : 4),
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay: Math.random() * (isMobile ? 3 : 5),
            }}
            style={{
              top: y,
              left: x,
              transform: "translate(-50%, -50%)",
            }}
          >
            {words[index % words.length]}
          </motion.div>
        ))
      ) : (
        // Fallback when positions aren't calculated yet
        <div className="text-gray-400">Loading skills...</div>
      )}
    </div>
  );
};

export default WordPlanet;
