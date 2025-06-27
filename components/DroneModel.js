// components/DroneModel.js
import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export default function DroneModel(props) {
  const group = useRef();
  const { scene, animations } = useGLTF('/model/scene.glb');
  const { actions } = useAnimations(animations, group);
  const mouseX = useRef(0);
  const targetYRot = useRef(0);

  useEffect(() => {
    if (actions && animations.length > 0) {
      actions[animations[0].name]?.play();
    }
  }, [actions, animations]);

  const { size } = useThree();

  // Only listen to mouse X movement
  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / size.width) * 2 - 5;
      mouseX.current = x;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [size]);

  // Rotate only on Y-axis based on mouse X
  useFrame(() => {
    if (group.current) {
      // Map X to rotation angle (max ±0.3 radians ~ ±17 degrees)
      targetYRot.current = mouseX.current * 0.1;

      // Smoothly interpolate
      group.current.rotation.y += (targetYRot.current - group.current.rotation.y) * 0.1;
    }
  });

  return <primitive ref={group} object={scene} {...props} />;
}

useGLTF.preload('/model/scene.glb');
