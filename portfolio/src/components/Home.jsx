import React from "react";
import { Canvas } from "@react-three/fiber";
import Pyramid3d from "../utils/3dsphere";

const Home3d = () => {
  return (
    <>
      <section className="App-header">
        <Canvas>
          <pointLight position={[0, 2, 0]} />
          <ambientLight />
          <Pyramid3d position={[-2, 0, 0]} />
          <Pyramid3d position={[2, 0, 0]} />
        </Canvas>
      </section>
    </>
  );
};

export default Home3d;
