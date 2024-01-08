import React, { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";

function Pyramid3d(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  useEffect(() => {
    click(true);
  }, [hovered]);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.x += 0.005));
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1 : 1.3}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <sphereGeometry args={[2.2, 10, 10]} />
      <meshStandardMaterial
        wireframe={props.wireframe}
        color={hovered ? 0xffffff : 0x888888}
      />
    </mesh>
  );
}

export default Pyramid3d;
