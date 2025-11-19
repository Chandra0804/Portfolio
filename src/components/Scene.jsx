import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const Particles = (props) => {
    const ref = useRef();

    // Generate random positions for particles
    const [positions, colors] = useMemo(() => {
        const count = 2000; // Number of particles
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const color = new THREE.Color();

        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 20; // Spread x
            positions[i * 3 + 1] = (Math.random() - 0.5) * 20; // Spread y
            positions[i * 3 + 2] = (Math.random() - 0.5) * 20; // Spread z

            // Dark colors for light theme (blue/purple/black mix)
            if (i % 3 === 0) color.set('#0066cc');
            else if (i % 3 === 1) color.set('#8800cc');
            else color.set('#1d1d1f');

            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;
        }
        return [positions, colors];
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 20;
            ref.current.rotation.y -= delta / 30;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={positions} colors={colors} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    vertexColors
                    size={0.05}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.8}
                />
            </Points>
        </group>
    );
};

const Scene = () => {
    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
                {/* Light background for light theme */}
                <color attach="background" args={['#f5f5f7']} />

                <ambientLight intensity={0.8} />

                <Particles />

                {/* No OrbitControls for a cleaner, non-interactive background feel */}
            </Canvas>
        </div>
    );
};

export default Scene;
