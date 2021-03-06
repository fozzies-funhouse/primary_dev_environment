import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

// Shoe Component

export const ShoeModel = [
  {
    // Array of Objects with path and scale properties and since
    // we dont have a product of id '0' ShoeModel[0] is empty
    // it only contains this helpful note.
  },
  // ShoeModel[1]
  {
    path: '../Shoes/Shoe1.glb',
    scale: {
      x: 0.006,
      y: 0.006,
      z: 0.006,
    },
  },
  // ShoeModel[2]
  {
    path: '../Shoes/Shoe2.glb',
    scale: {
      x: 0.6,
      y: 0.6,
      z: 0.6,
    },
  },
  // ShoeModel[3]
  {
    path: '../Shoes/Shoe3.glb',
    scale: {
      x: 0.006,
      y: 0.006,
      z: 0.006,
    },
  },
  // ShoeModel[4]
  {
    path: '../Shoes/Shoe4.glb',
    scale: {
      x: 0.006,
      y: 0.006,
      z: 0.006,
    },
  },
  // ShoeModel[5]
  {
    path: '../Shoes/Shoe5.glb',
    scale: {
      x: 0.6,
      y: 0.6,
      z: 0.6,
    },
  },
  // ShoeModel[6]
  {
    path: '../Shoes/Shoe6.glb',
    scale: {
      x: 0.6,
      y: 0.6,
      z: 0.6,
    },
  },
  // ShoeModel[7]
  {
    path: '../Shoes/Shoe7.glb',
    scale: {
      x: 0.6,
      y: 0.6,
      z: 0.6,
    },
  },
  // ShoeModel[8]
  {
    path: '../Shoes/Shoe8.glb',
    scale: {
      x: 0.6,
      y: 0.6,
      z: 0.6,
    },
  },
  // ShoeModel[9]
  {
    path: '../Shoes/Shoe9.glb',
    scale: {
      x: 0.6,
      y: 0.6,
      z: 0.6,
    },
  },
];

const Shoe = (props) => {
  const { id } = props;

  const { path, scale } = ShoeModel[id];

  const shoeRef = useRef(); // useRef hook to connect animation per each frame
  const gltf = useGLTF(path);
  // console.log(gltf.scene);
  gltf.scene.scale.set(scale.x, scale.y, scale.z);

  gltf.scene.position.set(0, -2, 0);
  gltf.scene.rotation.y = Math.PI;

  // Animation hook to animate on each frame
  useFrame(() => {
    shoeRef.current.rotation.y += 0.003;
  });

  return (
    <>
      {gltf ? (
        <primitive ref={shoeRef} object={gltf.scene} />
      ) : (
        <div>Loading Your Shoe !</div>
      )}
    </>
  );
};

export default Shoe;
