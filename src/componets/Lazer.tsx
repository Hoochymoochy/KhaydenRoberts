"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Lazer() {
  const laserRef = useRef(null);

  useEffect(() => {
    gsap.to(".laser-beam", {
      motionPath: {
        path: [
          { x: 100, y: 0 },
          { x: 200, y: 50 },
          { x: 300, y: 0 },
        ],
        curviness: 1.5,
      },
      duration: 10,
    });
  }, []);

  return (
    <div className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Laser Beam */}
      <div
        ref={laserRef}
        className="absolute w-1 h-full bg-red-500 opacity-75 left-1/2 transform -translate-x-1/2"
        style={{ boxShadow: "0 0 20px 5px red" }}
      />
    </div>
  );
}
