"use client";
import { useEffect , useRef} from "react";


// // Add custom element type for TypeScript
// declare global {
//   namespace JSX {
//     interface IntrinsicElements {
//       "spline-viewer": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
//         url: string;
//         class?: string;
//       };
//     }
//   }
// }

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
    // Load the Spline viewer script
    if (!document.querySelector('script[src*="spline-viewer.js"]')) {
      const script = document.createElement("script");
      script.type = "module";
      script.src =
        "https://unpkg.com/@splinetool/viewer@1.10.56/build/spline-viewer.js";
      document.body.appendChild(script);
    }

    // Create and append the spline-viewer element
    if (containerRef.current) {
      // Clear previous content
      containerRef.current.innerHTML = '';
      
      // Create the element programmatically
      const splineViewer = document.createElement('spline-viewer');
      splineViewer.setAttribute('url', url);
      splineViewer.setAttribute('class', className);
      
      // Append to container
      containerRef.current.appendChild(splineViewer);
    }
  }, [url, className]);

  return (
    <div className="relative w-full h-180" style={{ top: "-150px" }}>
      <div ref={containerRef}></div>
    </div>
  );
}

