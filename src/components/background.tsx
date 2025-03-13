"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import { easing } from "maath";

import * as THREE from "three";

export default function Background() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }, delta) => {
    if (meshRef.current) {
      const time = clock.getElapsedTime() * 0.25;
      easing.dampE(meshRef.current.rotation, [time, time, time], 0.5, delta);
    }
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
