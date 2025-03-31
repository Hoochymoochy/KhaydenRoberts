"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface Props {
  length: number;
  x: number;
}

export default function Lazer({ length, x }: Props) {
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
    <div
      ref={laserRef}
      className="w-1 h-full bg-red-500 opacity-75 transform -translate-x-1/2"
      style={{
        boxShadow: "0 0 20px 5px red",
        height: `${length}px`,
        left: `${x}px`,
      }}
    />
  );
}
