"use client";
import { useEffect, useRef } from "react";

interface SplineSceneProps {
  url: string;
  className?: string;
}

export default function SplineScene({
  url,
  className = "w-full h-full",
}: SplineSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!document.querySelector('script[src*="spline-viewer.js"]')) {
      const script = document.createElement("script");
      script.type = "module";
      script.src =
        "https://unpkg.com/@splinetool/viewer@1.10.56/build/spline-viewer.js";
      document.body.appendChild(script);
    }

    if (containerRef.current) {
      containerRef.current.innerHTML = "";
      const splineViewer = document.createElement("spline-viewer");
      splineViewer.setAttribute("url", url);
      splineViewer.setAttribute("class", className);
      containerRef.current.appendChild(splineViewer);
    }
  }, [url, className]);

  return (
    <div
      className="
        relative w-full 
        h-[600px] sm:h-[700px] md:h-[750px] lg:h-[800px] 
        -top-10 sm:-top-20 md:-top-28 lg:-top-36
      "
    >
      <div ref={containerRef}></div>
    </div>
  );
}
