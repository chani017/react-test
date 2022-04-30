import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import './App.css';

const Cube = () => {
  return (
    <div className="App">
        <mesh position = {[0,0,0]}>
          <boxNufferGeometry attach="geometry" />
          <meshLambertMaterial attach="material" color="#FF5733" />
        </mesh>
    </div>
  );
}

export default function App() {
  return (
    <Canvas>
        <Cube />
        <OrbitControls />
        <ambientLight intensity={0.5}/>
    </Canvas>
  )
};