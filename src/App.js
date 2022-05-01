import React, { Suspense } from 'react';
import { DefaultXRControllers, ARCanvas, useHitTest } from '@react-three/xr';
import { useGLTF } from '@react-three/drei'
import './App.css'

function Model(props) {
  return 
}

function HitTestExample() {
  const ref = React.useRef()

  useHitTest((hit) => {
    hit.decompose(ref.current.position, ref.current.rotation, ref.current.scale)
  })

  return <Model ref={ref} args={[0.1, 0.1, 0.1]} />
}

export default function App() {
  return (
      <ARCanvas sessionInit={{ requiredFeatures: ['hit-test'] }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <HitTestExample />
        <DefaultXRControllers />
      </ARCanvas>
  )
}