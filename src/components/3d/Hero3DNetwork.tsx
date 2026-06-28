"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function NetworkNode({ position, color }: { position: [number, number, number]; color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const originalPos = useMemo(() => new THREE.Vector3(...position), [position]);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    meshRef.current.position.x = originalPos.x + Math.sin(time * 0.5 + position[0]) * 0.3;
    meshRef.current.position.y = originalPos.y + Math.cos(time * 0.3 + position[1]) * 0.2;
    meshRef.current.position.z = originalPos.z + Math.sin(time * 0.4 + position[2]) * 0.1;
    const scale = 1 + Math.sin(time * 2 + position[0] * 10) * 0.2;
    meshRef.current.scale.setScalar(scale);
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.08, 16, 16]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} transparent opacity={0.9} />
    </mesh>
  );
}

function Connection({ start, end }: { start: [number, number, number]; end: [number, number, number] }) {
  const lineRef = useRef<THREE.Line>(null);
  const points = useMemo(() => [new THREE.Vector3(...start), new THREE.Vector3(...end)], [start, end]);

  useFrame((state) => {
    if (!lineRef.current) return;
    const time = state.clock.getElapsedTime();
    const material = lineRef.current.material as THREE.LineBasicMaterial;
    material.opacity = 0.15 + Math.sin(time * 0.5) * 0.05;
  });

  return (
    <line ref={lineRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={2} array={new Float32Array([points[0].x, points[0].y, points[0].z, points[1].x, points[1].y, points[1].z])} itemSize={3} />
      </bufferGeometry>
      <lineBasicMaterial color="#F97316" transparent opacity={0.2} />
    </line>
  );
}

function NetworkScene() {
  const nodes = useMemo(() => {
    const nodeArray: { position: [number, number, number]; color: string }[] = [];
    const colors = ["#F97316", "#EA580C", "#FB923C", "#FDBA74"];
    for (let i = 0; i < 60; i++) {
      nodeArray.push({
        position: [(Math.random() - 0.5) * 12, (Math.random() - 0.5) * 8, (Math.random() - 0.5) * 6],
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    return nodeArray;
  }, []);

  const connections = useMemo(() => {
    const connArray: { start: [number, number, number]; end: [number, number, number] }[] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dist = Math.sqrt(Math.pow(nodes[i].position[0] - nodes[j].position[0], 2) + Math.pow(nodes[i].position[1] - nodes[j].position[1], 2) + Math.pow(nodes[i].position[2] - nodes[j].position[2], 2));
        if (dist < 2.5) connArray.push({ start: nodes[i].position, end: nodes[j].position });
      }
    }
    return connArray;
  }, [nodes]);

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      {nodes.map((node, i) => <NetworkNode key={i} position={node.position} color={node.color} />)}
      {connections.map((conn, i) => <Connection key={i} start={conn.start} end={conn.end} />)}
    </>
  );
}

export default function Hero3DNetwork() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }} style={{ background: "transparent" }}>
        <NetworkScene />
      </Canvas>
    </div>
  );
}