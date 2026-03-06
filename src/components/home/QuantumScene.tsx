"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Environment } from '@react-three/drei';
import { useTheme } from 'next-themes';

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
    const secondaryColor = isDark ? "#00203F" : "#003366"; // CODO Blue / Lighter Blue

    return (
        <Canvas
            camera={{ position: [0, 0, 8], fov: 45 }}
            gl={{ antialias: true, alpha: true, preserveDrawingBuffer: true }}
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
                    <Sphere args={[1, 32, 32]} position={[-4, 2, -3]} scale={0.6}>
                        <MeshDistortMaterial
                            color={secondaryColor}
                            distort={0.5}
                            speed={3}
                        />
                    </Sphere>
                </Float>

                <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.8}>
                    <Sphere args={[1, 32, 32]} position={[4, -1.5, -4]} scale={0.8}>
                        <MeshDistortMaterial
                            color={primaryColor}
                            distort={0.3}
                            speed={1.5}
                        />
                    </Sphere>
                </Float>

                <Float speed={2.5} rotationIntensity={0.6} floatIntensity={1.2}>
                    <Sphere args={[1, 32, 32]} position={[-1, -3, -2]} scale={0.5}>
                        <MeshDistortMaterial
                            color={secondaryColor}
                            distort={0.6}
                            speed={4}
                        />
                    </Sphere>
                </Float>
            </Suspense>
        </Canvas>
    );
}
