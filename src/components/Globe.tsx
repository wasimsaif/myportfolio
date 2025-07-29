import React, { useRef, useEffect, useState } from "react";
import Globe from "react-globe.gl";
import type { GlobeMethods } from "react-globe.gl";

interface GlobeComponentProps {
  width?: number | string;
  height?: number | string;
  globeImageUrl?: string;
  backgroundColor?: string;
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereAltitude?: number;
  enablePointerInteraction?: boolean;
  enableZoom?: boolean;
  autoRotate?: boolean;
  initialLat?: number;
  initialLng?: number;
  initialAltitude?: number;
}

const GlobeComponent: React.FC<GlobeComponentProps> = ({
  width = "100%",
  height = "100%",
  //   globeImageUrl = "//unpkg.com/three-globe/example/img/earth-dark.jpg",
  globeImageUrl = "https://vasturiano.github.io/three-globe/example/day-night-cycle/    ",
  backgroundColor = "rgba(0,0,0,0)",
  showAtmosphere = true,
  atmosphereColor = "#3a228a",
  atmosphereAltitude = 0.25,
  enablePointerInteraction = true,
  enableZoom = false,
  autoRotate = true,
  initialLat = 20,
  initialLng = 10,
  initialAltitude = 2,
}) => {
  const globeEl = useRef<GlobeMethods | undefined>(undefined);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 400, height: 400 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const size = Math.min(rect.width, rect.height);
        setDimensions({ width: size, height: size });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    if (globeEl.current) {
      const controls = globeEl.current.controls();
      controls.enableZoom = enableZoom;
      controls.enablePan = enablePointerInteraction;
      controls.enableRotate = enablePointerInteraction;

      if (autoRotate) {
        controls.autoRotate = true;
        controls.autoRotateSpeed = 0.5;
      }

      // Set initial view
      globeEl.current.pointOfView(
        {
          lat: initialLat,
          lng: initialLng,
          altitude: initialAltitude,
        },
        1000
      );
    }
  }, [
    enableZoom,
    enablePointerInteraction,
    autoRotate,
    initialLat,
    initialLng,
    initialAltitude,
  ]);

  return (
    <div
      ref={containerRef}
      className="globe-container w-full h-full flex items-center justify-center"
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
        minWidth: 200,
        minHeight: 200,
      }}
    >
      <div
        className="globe-wrapper"
        style={{
          width: dimensions.width,
          height: dimensions.height,
          maxWidth: "100%",
          maxHeight: "100%",
        }}
      >
        <Globe
          ref={globeEl}
          width={dimensions.width}
          height={dimensions.height}
          globeImageUrl={globeImageUrl}
          backgroundColor={backgroundColor}
          showAtmosphere={showAtmosphere}
          atmosphereColor={atmosphereColor}
          atmosphereAltitude={atmosphereAltitude}
          enablePointerInteraction={enablePointerInteraction}
        />
      </div>
    </div>
  );
};

export default GlobeComponent;
