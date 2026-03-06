"use client";

import React, { useState, useEffect, Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Environment } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { useTheme } from 'next-themes';
import * as THREE from 'three';

// Custom Mouse Parallax Rig
function SceneRig({ children }: { children: React.ReactNode }) {
    const groupRef = useRef<THREE.Group>(null);
    useFrame((state) => {
        if (!groupRef.current) return;
        // Smoothly interpolate group rotation based on mouse pointer position
        const targetX = (state.pointer.y * 0.1);
        const targetY = (state.pointer.x * 0.1);
        groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, 0.05);
        groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetY, 0.05);
    });
    return <group ref={groupRef}>{children}</group>;
}

export default function QuantumScene() {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const isDark = theme === 'dark';

    // Theme-aware colors
    const primaryColor = isDark ? "#008764" : "#00a37c"; // CODO Green / Lighter Green
    const secondaryColor = isDark ? "#020617" : "#0f172a"; // Very dark blue/black (Slate 950/900)

    return (
        <Canvas
            camera={{ position: [0, 0, 8], fov: 45 }}
            gl={{ antialias: true, alpha: true, preserveDrawingBuffer: true, powerPreference: "high-performance" }}
            style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                background: 'transparent'
            }}
        >
            <Suspense fallback={null}>
                <ambientLight intensity={isDark ? 0.5 : 0.8} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <Environment preset="city" />

                <SceneRig>
                    {/* Central Main Sphere */}
                    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
                        <Sphere args={[1, 64, 64]} position={[0, 0, 0]} scale={1.5}>
                            <MeshDistortMaterial
                                color={primaryColor}
                                envMapIntensity={1}
                                clearcoat={1}
                                clearcoatRoughness={0.1}
                                metalness={0.5}
                                roughness={0.2}
                                distort={0.4}
                                speed={2}
                            />
                        </Sphere>
                    </Float>

                    {/* Satellite Spheres */}
                    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                        <Sphere args={[1, 64, 64]} position={[-4, 2, -3]} scale={0.6}>
                            <MeshDistortMaterial
                                color={isDark ? "#000000" : "#1e293b"}
                                envMapIntensity={1}
                                clearcoat={1}
                                clearcoatRoughness={0.1}
                                metalness={0.5}
                                roughness={0.2}
                                distort={0.5}
                                speed={3}
                            />
                        </Sphere>
                    </Float>

                    <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.8}>
                        <Sphere args={[1, 64, 64]} position={[4, -1.5, -4]} scale={0.8}>
                            <MeshDistortMaterial
                                color={primaryColor}
                                envMapIntensity={1}
                                clearcoat={1}
                                clearcoatRoughness={0.1}
                                metalness={0.5}
                                roughness={0.2}
                                distort={0.3}
                                speed={1.5}
                            />
                        </Sphere>
                    </Float>

                    <Float speed={2.5} rotationIntensity={0.6} floatIntensity={1.2}>
                        {/* Positioned near the "Work With Our Agency" CTA on the bottom left */}
                        <Sphere args={[1, 64, 64]} position={[-3.5, -2, -1]} scale={0.6}>
                            <MeshDistortMaterial
                                color={isDark ? "#000000" : "#1e293b"}
                                envMapIntensity={1}
                                clearcoat={1}
                                clearcoatRoughness={0.1}
                                metalness={0.5}
                                roughness={0.2}
                                distort={0.6}
                                speed={4}
                            />
                        </Sphere>
                    </Float>
                </SceneRig>

                {/* Post-Processing Effects */}
                <EffectComposer>
                    <Bloom mipmapBlur luminanceThreshold={0.5} luminanceSmoothing={0.9} intensity={isDark ? 0.8 : 0.4} />
                </EffectComposer>
            </Suspense>
        </Canvas>
    );
}
