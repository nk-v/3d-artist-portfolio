"use client";

import { useRef } from "react";

import { Sphere } from "@react-three/drei";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Canvas } from "@react-three/fiber";
import { easing } from "maath";
import * as THREE from "three";

export default function Background() {
  return (
    <div className="fixed h-screen w-screen -z-50">
      <Canvas>
        <PerspectiveCamera makeDefault position={[-1, 0, 5]} />
        <SphereMesh />
        <Environment preset="night" />
      </Canvas>
    </div>
  );
}

function SphereMesh() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }, delta) => {
    if (!meshRef.current) {
      return;
    }
    const time = clock.getElapsedTime() * 0.1;
    easing.dampE(meshRef.current.rotation, [time, time, time], 0.5, delta);
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <mesh ref={meshRef}>
        <Sphere args={[3, 32, 32]}>
          <meshStandardMaterial
            color="white"
            wireframe
            transparent
            opacity={0.2}
          />
        </Sphere>
      </mesh>
    </>
  );
}
