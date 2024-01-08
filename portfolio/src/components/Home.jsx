import React from "react";
import { Canvas } from "@react-three/fiber";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Pyramid3d from "../utils/3dPyramid";
import transition from "../utils/transition";
import arrowleft from "../assets/arrowleft.png";

const Home3d = () => {
  const [transition, setTransition] = useState(false);
  useEffect(() => {
    setTransition(true);
  }, []);
  return (
    <>
      <section className="Home-Display">
        <div className="flex h-fit relative mb-10">
          <div className="flex">
            <div
              className={`ml-10 p-3 top-4 duration-1000 ${
                transition
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              } transition ease-slow`}
            >
              <h1 className="m-10 z-15 font-bold">Hi I'm Kevin!</h1>
              <h1 className="mx-10 z-15 font-bold">I develop software.</h1>
            </div>
          </div>
          <div className="flex">
            <div className="container">
              <Canvas>
                <pointLight position={[0, 2, 2]} />
                {/* <ambientLight /> */}
                <Pyramid3d position={[1, 0, 0]} />
              </Canvas>
            </div>
            <div className="left-0 container relative mt-4">
              <h2 className="absolute top-3 left-2 font-bold">Click Me!</h2>
              <img
                className="brightness-200 w-24"
                src={arrowleft}
                alt="point-right arrow"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default transition(Home3d);
