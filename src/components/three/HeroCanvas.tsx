"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Stars } from "@react-three/drei";
import { useMemo, useRef, useSyncExternalStore } from "react";
import * as THREE from "three";

const PARTICLE_COUNT = 700;
const STAR_COUNT = 900;
const SHAPE_COLOR = "#10b981";

function subscribeToReducedMotion(callback: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return true;
}

function useReducedMotion() {
  return useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot,
  );
}

function AnimatedShape({ reducedMotion }: { reducedMotion: boolean }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_state, delta) => {
    if (reducedMotion || !groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.12;
    groupRef.current.rotation.x += delta * 0.04;
  });

  const shape = (
    <group ref={groupRef} position={[1.8, 0.15, -1.2]} rotation={[0.2, 0.45, 0]}>
      <mesh>
        <icosahedronGeometry args={[1.05, 4]} />
        <MeshDistortMaterial
          color={SHAPE_COLOR}
          distort={reducedMotion ? 0.08 : 0.22}
          speed={reducedMotion ? 0 : 0.55}
          roughness={0.45}
          metalness={0.08}
          emissive={SHAPE_COLOR}
          emissiveIntensity={0.18}
          transparent
          opacity={0.7}
        />
      </mesh>
      <mesh scale={1.22}>
        <icosahedronGeometry args={[1.05, 1]} />
        <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.11} />
      </mesh>
    </group>
  );

  if (reducedMotion) return shape;

  return (
    <Float speed={0.7} rotationIntensity={0.25} floatIntensity={0.35}>
      {shape}
    </Float>
  );
}

function generateParticles(count: number) {
  const points = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    points[i * 3] = (Math.random() - 0.5) * 9;
    points[i * 3 + 1] = (Math.random() - 0.5) * 6;
    points[i * 3 + 2] = (Math.random() - 0.5) * 6;
  }
  return points;
}

function Particles({ count = PARTICLE_COUNT }) {
  const points = useMemo(() => generateParticles(count), [count]);
  const pointsRef = useRef<THREE.Points>(null);

  useFrame((_state, delta) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += delta * 0.025;
    pointsRef.current.rotation.x += delta * 0.01;
  });

  return (
    <points ref={pointsRef} position={[0, 0, -0.5]}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[points, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.013}
        color="#94a3b8"
        sizeAttenuation
        transparent
        opacity={0.22}
        depthWrite={false}
      />
    </points>
  );
}

export default function HeroCanvas() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 min-h-[92svh] w-full overflow-hidden">
      <div className="hero-ambient-layer" aria-hidden="true" />
      <Canvas
        camera={{ position: [0, 0, 5.2], fov: 62 }}
        dpr={[1, 1.5]}
        frameloop={reducedMotion ? "demand" : "always"}
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[4, 5, 6]} intensity={1.1} />
        <pointLight position={[-4, -2, 3]} intensity={0.55} color="#22d3ee" />
        <AnimatedShape reducedMotion={reducedMotion} />
        {!reducedMotion && (
          <>
            <Stars
              radius={80}
              depth={35}
              count={STAR_COUNT}
              factor={3.2}
              saturation={0}
              fade
              speed={0.35}
            />
            <Particles />
          </>
        )}
      </Canvas>
    </div>
  );
}
