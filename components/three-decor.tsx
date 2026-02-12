"use client";

import { Canvas } from "@react-three/fiber";
import { Float, RoundedBox } from "@react-three/drei";

function CameraModel() {
  return (
    <Float speed={1.2} rotationIntensity={0.35} floatIntensity={0.45}>
      <group position={[1.35, 0.55, 0]} rotation={[0, -0.35, 0]}>
        {/* body */}
        <RoundedBox args={[1.9, 1.1, 0.45]} radius={0.18} smoothness={8}>
          <meshStandardMaterial color="#ff6bd6" roughness={0.3} metalness={0.15} />
        </RoundedBox>

        {/* lens */}
        <group position={[0.55, 0.05, 0.28]}>
          <mesh>
            <cylinderGeometry args={[0.34, 0.34, 0.28, 32]} />
            <meshStandardMaterial color="#ffd1f1" roughness={0.25} metalness={0.25} />
          </mesh>
          <mesh position={[0, 0, 0.18]}>
            <cylinderGeometry args={[0.22, 0.22, 0.1, 32]} />
            <meshStandardMaterial color="#ffffff" roughness={0.35} metalness={0.05} />
          </mesh>
        </group>

        {/* viewfinder */}
        <mesh position={[-0.55, 0.32, 0.18]}>
          <boxGeometry args={[0.5, 0.22, 0.22]} />
          <meshStandardMaterial color="#f3f4f6" roughness={0.55} />
        </mesh>

        {/* top button */}
        <mesh position={[0.2, 0.62, 0.05]}>
          <cylinderGeometry args={[0.12, 0.12, 0.08, 24]} />
          <meshStandardMaterial color="#c7ff00" roughness={0.25} metalness={0.1} />
        </mesh>
      </group>
    </Float>
  );
}

function PhoneModel() {
  return (
    <Float speed={1} rotationIntensity={0.25} floatIntensity={0.4}>
      <group position={[-1.55, -0.7, 0]} rotation={[0.05, 0.45, 0]}>
        <RoundedBox args={[1.25, 2.35, 0.16]} radius={0.22} smoothness={10}>
          <meshStandardMaterial color="#111827" roughness={0.35} metalness={0.25} />
        </RoundedBox>
        {/* screen */}
        <mesh position={[0, 0, 0.1]}>
          <RoundedBox args={[1.08, 2.16, 0.02]} radius={0.18} smoothness={8}>
            <meshStandardMaterial color="#ffffff" roughness={0.65} metalness={0.05} />
          </RoundedBox>
        </mesh>
        {/* accent blob */}
        <mesh position={[0.22, 0.35, 0.12]}>
          <circleGeometry args={[0.22, 40]} />
          <meshStandardMaterial color="#c7ff00" roughness={0.3} metalness={0.05} />
        </mesh>
      </group>
    </Float>
  );
}

export default function ThreeDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.85} />
        <directionalLight position={[4, 4, 6]} intensity={1.2} />
        <directionalLight position={[-5, -2, 4]} intensity={0.55} />

        <CameraModel />
        <PhoneModel />
      </Canvas>
    </div>
  );
}
