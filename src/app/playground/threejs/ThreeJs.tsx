"use client"
import type { NextPage } from "next"
import React, { useRef, useState } from "react"
import * as THREE from "three"
import { Canvas, useFrame } from "@react-three/fiber"

const ThreeJs: NextPage = () => {
  const Box = (props: JSX.IntrinsicElements["mesh"]) => {
    const ref = useRef<THREE.Mesh>(null!)
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    useFrame((state, delta) => ((ref.current.rotation.x += 0.01), (ref.current.rotation.y += 0.02)))
    return (
      <mesh
        {...props}
        ref={ref}
        scale={active ? 2 : 1}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? "blue" : "green"} />
      </mesh>
    )
  }

  return (
    <Canvas
      style={{
        width: 100 + "vw",
        height: 100 + "vh",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[0, 0, 0]} />
    </Canvas>
  )
}

export default ThreeJs
