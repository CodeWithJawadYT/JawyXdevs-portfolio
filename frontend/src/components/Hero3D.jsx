import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, Lightformer } from "@react-three/drei";

const MetallicKnot = ({ detail }) => {
  const group = useRef();
  const light = useRef();

  useFrame((state, delta) => {
    const g = group.current;
    if (!g) return;
    g.rotation.y += delta * 0.14;
    g.rotation.x += (state.pointer.y * 0.22 - g.rotation.x) * 0.035;
    g.rotation.z += (state.pointer.x * 0.18 - g.rotation.z) * 0.035;
    if (light.current) {
      light.current.position.x += (state.pointer.x * 4 - light.current.position.x) * 0.05;
      light.current.position.y += (state.pointer.y * 3 + 2 - light.current.position.y) * 0.05;
    }
  });

  return (
    <>
      <group ref={group}>
        <Float speed={1.3} rotationIntensity={0.2} floatIntensity={0.55}>
          <mesh>
            <torusKnotGeometry args={[1.05, 0.3, detail, 48]} />
            <meshStandardMaterial
              color="#aab2be"
              metalness={1}
              roughness={0.14}
              envMapIntensity={1.35}
            />
          </mesh>
        </Float>
      </group>
      <pointLight ref={light} position={[2, 2, 3]} intensity={14} color="#0066FF" />
      <directionalLight position={[-3, 4, 5]} intensity={0.6} color="#ffffff" />
      <Environment resolution={256}>
        <Lightformer intensity={5} position={[0, 4, 4]} scale={[9, 3, 1]} color="#ffffff" />
        <Lightformer intensity={2.4} position={[-6, -1, -2]} scale={[4, 7, 1]} color="#dfe6f0" />
        <Lightformer intensity={3.2} position={[6, 0, 1]} scale={[3, 7, 1]} color="#0066FF" />
        <Lightformer intensity={1.2} position={[0, -5, 2]} scale={[8, 2, 1]} color="#334155" />
      </Environment>
    </>
  );
};

export default function Hero3D({ quality = "high" }) {
  const detail = quality === "high" ? 220 : 110;
  const dpr = quality === "high" ? [1, 1.75] : [1, 1.25];
  return (
    <Canvas
      dpr={dpr}
      camera={{ position: [0, 0, 5.4], fov: 42 }}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <MetallicKnot detail={detail} />
      </Suspense>
    </Canvas>
  );
}
