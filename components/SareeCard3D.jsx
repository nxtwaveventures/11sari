'use client';

import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import Link from 'next/link';

// Fallback 3D model if no modelUrl is provided
const FallbackModel = ({ color = '#e57373' }) => {
    const mesh = useRef();

    useFrame((state) => {
        if (mesh.current) {
            mesh.current.rotation.y += 0.005;
            mesh.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
        }
    });

    return (
        <mesh ref={mesh} position={[0, 0, 0]}>
            <boxGeometry args={[1, 3, 0.1]} />
            <meshStandardMaterial color={color} metalness={0.1} roughness={0.8} />
        </mesh>
    );
};

// Saree Model component
const SareeModel = ({ modelUrl, color }) => {
    if (modelUrl) {
        try {
            const { scene } = useGLTF(modelUrl);
            return <primitive object={scene} scale={1} />;
        } catch (error) {
            console.error("Error loading 3D model:", error);
            return <FallbackModel color={color} />;
        }
    }

    return <FallbackModel color={color} />;
};

const SareeCard3D = ({
    id,
    modelUrl,
    sareeName,
    weaverName,
    price,
    region,
    color = '#e57373',
    isMinted = false
}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden shadow-xl"
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            {/* NFT Badge */}
            {isMinted && (
                <div className="absolute top-3 right-3 z-10 bg-gradient-to-r from-purple-600 to-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    NFT
                </div>
            )}

            {/* 3D Canvas */}
            <div className="h-[300px] w-full bg-gradient-to-b from-slate-800 to-transparent">
                <Canvas dpr={[1, 2]} shadows camera={{ position: [0, 0, 4], fov: 40 }}>
                    <ambientLight intensity={0.7} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                    <SareeModel modelUrl={modelUrl} color={color} />
                    <OrbitControls enableZoom={false} autoRotate={isHovered} autoRotateSpeed={5} />
                    <Environment preset="city" />
                </Canvas>
            </div>

            {/* Card Content */}
            <div className="p-5 bg-gradient-to-t from-slate-900 to-transparent -mt-12 relative z-10">
                <h3 className="text-xl font-bold text-amber-300 mb-1">{sareeName}</h3>

                <div className="text-gray-300 text-sm">
                    <p className="italic">By {weaverName}</p>
                    <p>{region}</p>
                    <p className="font-semibold text-amber-200 text-lg mt-2">{price}</p>
                </div>

                <div className="mt-4 flex space-x-2">
                    <Link href={`/product/${id}`} className="flex-1">
                        <button className="w-full bg-amber-600 hover:bg-amber-500 text-white text-sm py-2 px-4 rounded-full transition-colors">
                            View Details
                        </button>
                    </Link>

                    {!isMinted && (
                        <button className="bg-purple-600 hover:bg-purple-500 text-white text-sm py-2 px-3 rounded-full transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </button>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default SareeCard3D; 