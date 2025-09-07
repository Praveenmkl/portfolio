"use client";
import { useEffect } from "react";


// Add custom element type for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "spline-viewer": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        url: string;
        class?: string;
      };
    }
  }
}

interface SplineSceneProps {
  url: string;
  className?: string;
}

export default function SplineScene({
  url,
  className = "w-full h-full",
}: SplineSceneProps) {
  useEffect(() => {
    // Load the Spline viewer script only once
    if (!document.querySelector('script[src*="spline-viewer.js"]')) {
      const script = document.createElement("script");
      script.type = "module";
      script.src =
        "https://unpkg.com/@splinetool/viewer@1.10.56/build/spline-viewer.js";
      document.body.appendChild(script);
    }
  }, []);

  return (
 <div className="relative w-full h-180" style={{ top: "-150px" }}>
  <spline-viewer url={url} class={className}></spline-viewer>
</div>



  );
}
