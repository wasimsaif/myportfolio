import React from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

const Earth = () => {
  const texture = useLoader(
    THREE.TextureLoader,
    "https://www.solarsystemscope.com/textures/download/2k_earth_daymap.jpg"
  );

  return (
    <mesh>
      <sphereGeometry args={[2.5, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

const Globe = () => {
  return (
    <div className="w-full h-[400px] md:h-[500px]">
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.5} />
        <Stars />
        <Earth />
      </Canvas>
    </div>
  );
};

export default Globe;
