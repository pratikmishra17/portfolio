"use client";

import { useEffect, useState } from "react";

export default function ScribbleHighlight({ children }: { children: React.ReactNode }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 500); // Adds a delay for smoothness
    return () => clearTimeout(timer);
  }, []);

  return (
    <span className="relative inline-block">
      <span className="relative z-10">{children}</span>
      <svg
        viewBox="0 0 120 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`absolute -left-2 -top-3 w-[120%] h-[140%] scribble-svg ${animate ? "animate" : ""}`}
      >
        <path
          d="M10,30 Q30,5 60,15 T110,30 Q85,55 60,45 T10,30 Z"
          stroke="#ff6384"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="300"
          strokeDashoffset="300"
          className="scribble-path"
        />
      </svg>
    </span>
  );
}
