import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment } from '@react-three/drei'

function KnightModel() {
  const { scene } = useGLTF('/models/Laserpistole2.glb')
  return <primitive object={scene} />
}

export default function App() {
  return (
    <Canvas
      style={{ height: '100vh', width: '100vw' }}
      camera={{ position: [0, 2, 5], fov: 50 }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <KnightModel />
      <OrbitControls />
      <Environment preset="sunset" background />
    </Canvas>
  )
}
