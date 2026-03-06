"use client";

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Environment } from '@react-three/drei';

export default function QuantumScene() {
    return (
        <Canvas
            camera={{ position: [0, 0, 6], fov: 45 }}
            gl={{ antialias: true, alpha: true, preserveDrawingBuffer: true }}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', background: 'transparent' }}
        >
            <ambientLight intensity={0.5} />
            <Environment preset="city" />

            {/* Central Main Sphere */}
            <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
                <Sphere args={[1, 32, 32]} position={[0, 0, 0]} scale={1.2}>
                    <MeshDistortMaterial
                        color="#008764"
                        envMapIntensity={1}
                        clearcoat={1}
                        clearcoatRoughness={0}
                        metalness={0.5}
                        distort={0.4}
                        speed={2}
                    />
                </Sphere>
            </Float>

            {/* Top Left Sphere */}
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                <Sphere args={[1, 32, 32]} position={[-3, 1, -2]} scale={0.5}>
                    <MeshDistortMaterial
                        color="#00203F"
                        envMapIntensity={1}
                        clearcoat={1}
                        clearcoatRoughness={0}
                        metalness={0.5}
                        distort={0.4}
                        speed={2}
                    />
                </Sphere>
            </Float>

            {/* Bottom Right Sphere */}
            <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.8}>
                <Sphere args={[1, 32, 32]} position={[3, -1, -3]} scale={0.6}>
                    <MeshDistortMaterial
                        color="#008764"
                        envMapIntensity={1}
                        clearcoat={1}
                        clearcoatRoughness={0}
                        metalness={0.5}
                        distort={0.4}
                        speed={2}
                    />
                </Sphere>
            </Float>

            {/* Bottom Left Sphere */}
            <Float speed={2.5} rotationIntensity={0.6} floatIntensity={1.2}>
                <Sphere args={[1, 32, 32]} position={[0, -2.5, -1]} scale={0.4}>
                    <MeshDistortMaterial
                        color="#00203F"
                        envMapIntensity={1}
                        clearcoat={1}
                        clearcoatRoughness={0}
                        metalness={0.5}
                        distort={0.4}
                        speed={2}
                    />
                </Sphere>
            </Float>
        </Canvas>
    );
}
