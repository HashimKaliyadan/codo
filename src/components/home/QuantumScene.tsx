"use client";

import React, { useState, useEffect, Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Environment } from '@react-three/drei';
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
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        // Set initial value
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (!mounted) return null;

    const isDark = theme === 'dark';

    // Theme-aware colors
    const primaryColor = isDark ? "#008764" : "#00a37c"; // CODO Green / Lighter Green
    const secondaryColor = isDark ? "#020617" : "#0f172a"; // Very dark blue/black (Slate 950/900)

    // Responsive scaling - when mobile, the big central sphere is hidden.
    // We scale up the satellite spheres slightly on mobile to fill the scene beautifully.
    const secondaryScale = isMobile ? 0.9 : 0.8;
    const darkScale = isMobile ? 0.7 : 0.6;

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
                    {/* Central Main Sphere - Hidden on mobile for cleaner look */}
                    {!isMobile && (
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
                    )}

                    {/* Satellite Spheres - Always visible, act as primary elements on mobile */}
                    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                        <Sphere args={[1, 64, 64]} position={isMobile ? [-1.5, 2.5, -1] : [-4, 2, -3]} scale={darkScale}>
                            <MeshDistortMaterial
                                color={secondaryColor}
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
                        {/* Positioned near the bottom left CTA on desktop, centered bottom on mobile */}
                        <Sphere args={[1, 64, 64]} position={isMobile ? [-1.2, -2.5, 0] : [-3.5, -2, -1]} scale={secondaryScale}>
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
                        {/* Positioned near the bottom right on desktop, centered top right on mobile */}
                        <Sphere args={[1, 64, 64]} position={isMobile ? [1.5, 1.5, -1] : [5, -2, -2]} scale={darkScale}>
                            <MeshDistortMaterial
                                color={secondaryColor}
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
            </Suspense>
        </Canvas>
    );
}
