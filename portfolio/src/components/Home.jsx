import React from "react";
import { Canvas } from "@react-three/fiber";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AboutMe from "./AboutMe";
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
        <div
          className={`mx-auto duration-1000 ${
            transition
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          } transition ease-slow`}
        >
          <div className="flex flex-row mt-10">
            <div className="mx-auto">
              <h1 className="translate-x-10 z-15 font-bold">Hi I'm Kevin!</h1>
              <h1 className="translate-x-10 z-15 font-bold">
                I develop software.
              </h1>
            </div>
            <div className="w-5/12">
              <div className="flex flex-row">
                <div className="container flex-none w-64 h-32">
                  <Canvas>
                    <pointLight position={[0, 2, 2]} />
                    {/* <ambientLight /> */}
                    <Pyramid3d position={[1, 0, 0]} />
                  </Canvas>
                </div>
                <div className="relative top-4 -translate-x-10 -translate-y-10 mt-4">
                  <h2 className="absolute top-3 left-2 font-bold">Click Me!</h2>
                  <img
                    className="brightness-200 w-24"
                    src={arrowleft}
                    alt="point-right arrow"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className={`ml-10 p-3 duration-1000 ${
          transition ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        } transition ease-slow`}
      >
        <AboutMe />
      </div>
    </>
  );
};

export default transition(Home3d);
