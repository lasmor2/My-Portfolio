"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial, Stars } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

const AnimatedShape = () => {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <Sphere args={[1, 64, 64]}>
        <MeshDistortMaterial
          color="hsl(var(--emerald-500))"
          attach="material"
          distort={0.4}
          speed={3}
          roughness={0}
          emissive="hsl(var(--emerald-500))"
          emissiveIntensity={0.5}
        />
      </Sphere>
    </Float>
  );
};

const generateParticles = (count: number) => {
  const p = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    p[i * 3] = (Math.random() - 0.5) * 10;
    p[i * 3 + 1] = (Math.random() - 0.5) * 10;
    p[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }
  return p;
};

const Particles = ({ count = 5000 }) => {
  const points = useMemo(() => generateParticles(count), [count]);

  const pointsRef = useRef<THREE.Points>(null!);

  useFrame((state) => {
    pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.03;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[points, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="hsl(var(--foreground))"
        sizeAttenuation={true}
        transparent
        opacity={0.3}
      />
    </points>
  );
};

export default function HeroCanvas() {
  return (
    <div className="absolute inset-0 -z-10 h-screen w-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight
          position={[-10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={1}
        />

        <AnimatedShape />
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
        <Particles count={2000} />
      </Canvas>
    </div>
  );
}
