import React from "react";
import { Canvas } from "@react-three/fiber";
import { useState, useEffect } from "react";
import profile from "../assets/profile-picture.png";
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
    <div className="mt-1 min-h-full">
      <div
        className={`ml-10 p-3 duration-1000 ${
          transition ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        } transition ease-slow`}
      >
        <section className="Home-Display">
          <div
            className={`mx-auto duration-1000 ${
              transition
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            } transition ease-slow`}
          >
            <div
              className={`flex flex-row flex-wrap mx-auto w-9/12 mt-10 mb-8 justify-between ${
                transition
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              } transition ease-slow duration-1000`}
            >
              <div className="mx-auto">
                <h1 className="z-15 font-bold">Hi I'm Kevin!</h1>
                <h1 className="z-15 font-bold">I develop software.</h1>
              </div>
              <div className="w-5/12 grow">
                <div className="flex flex-row hidden lg:flex">
                  <div className="container flex-none w-3/12 h-32">
                    <Canvas>
                      <pointLight position={[0, 2, 2]} />
                      {/* <ambientLight /> */}
                      <Pyramid3d position={[1, 0, 0]} />
                    </Canvas>
                  </div>
                  <div className="relative top-4 -translate-x-10 -translate-y-10 mt-4">
                    <h2 className="relative top-3 left-2 font-bold">
                      Click Me!
                    </h2>
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
        <div className="flex flex-row flex-wrap m-auto w-9/12 mt-3 mb-10 grid-cols-2">
          <div className="bg-slate-700 p-2 flex-none">
            <div className="w-96">
              <img
                className="-translate-x-6 -translate-y-6 w-96"
                src={profile}
              ></img>
            </div>
          </div>
          <div className="p-8 bg-zinc-950 w-1/3 grow">
            <p className="text-xl font-bold mb-4 ">
              Learning is my passion. Software design and programming come as a
              natural translation of my interests for systematic thinking.{" "}
            </p>
            <p>
              I am a student @{" "}
              <a
                className="text-white"
                href="https://mybcom.sauder.ubc.ca/bucs"
              >
                UBC
              </a>{" "}
              studying Business and Computer Science. I was born in Vancouver
              but have lived in Calgary for most of my life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default transition(Home3d);
