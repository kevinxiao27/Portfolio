import React from "react";
import { Canvas } from "@react-three/fiber";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Pyramid3d from "../utils/3dPyramid";
// import transition from "../utils/transition";

const Home3d = () => {
  const [transition, setTransition] = useState(false);
  useEffect(() => {
    setTransition(true);
  }, []);
  return (
    <>
      <section className="App-header">
        <div className="flex items-stretch relative h-64">
          <div
            className={`absolute ml-10 p-3 top-4 duration-1000 ${
              transition
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            } transition ease-slow`}
          >
            <h1 className="m-10 z-100 font-bold">Hi I'm Kevin!</h1>
            <h1 className="mx-10 z-100 font-bold">and I develop software</h1>
            <motion.div></motion.div>
          </div>
          <Canvas className="z-10">
            <pointLight position={[3, 2, 2]} />
            {/* <ambientLight /> */}
            <Pyramid3d position={[4, 0, 0]} />
          </Canvas>
        </div>
      </section>
    </>
  );
};

export default Home3d;
