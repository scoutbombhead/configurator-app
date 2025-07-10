import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import LaptopModel from './LaptopModel'

export default function App() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Environment preset="city" />
      <LaptopModel />
      <OrbitControls />
    </Canvas>
  )
}
