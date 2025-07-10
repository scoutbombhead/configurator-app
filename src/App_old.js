import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'

function KnightModel() {
  const { scene } = useGLTF('/models/Knight1.glb')
  return <primitive object={scene} />
}

export default function App() {
  return (
    <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <KnightModel />
      <OrbitControls />
    </Canvas>
  )
}
