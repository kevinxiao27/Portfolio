import React from "react";
import { useState, useEffect, useCallback } from "react";
import transition from "../utils/transition";
import github from "../assets/github-icon.svg";
import { projects } from "../constants/projects";
import { useLocation } from "react-router-dom";

const Projects = () => {
  const location = useLocation();
  const [animation, setAnimation] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimation(true);
    }, 10);
    return () => clearTimeout(timeout);
  }, [location]);
  return (
    <div className="m-5">
      {projects.map((proj, index) => {
        const contentOrder = index % 2 === 0 ? "order-first" : "order-last";
        const directionIn =
          index % 2 === 0 ? "translate-x-10" : "-translate-x-10";
        const borderDir =
          index % 2 === 0
            ? "border-l-0 lg:rounded-r"
            : "border-r-0 lg:rounded-l";
        return (
          <div
            key={`${proj.id}`}
            className={`mt-1 flex justify-start font-poppins transition duration-1000 ${
              animation ? "opacity-100 translate-x-0" : directionIn
            } transition ease-in-out`}
          >
            <div className="m-2 mx-auto max-w-sm w-10/12 lg:max-w-full lg:flex">
              <div
                className={`h-48 lg:h-auto lg:w-1/2 p-3 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-black ${contentOrder}`}
                // style={{background-image: proj.src})}}
                title={proj.title}
              >
                <img src={proj.src}></img>
              </div>
              <div
                className={`border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-slate-700 rounded-b lg:rounded-b-none p-4 flex flex-col justify-between leading-normal lg:${borderDir}`}
              >
                <div className="mb-8">
                  <div className="text-white font-bold text-xl mb-2">
                    {proj.name}
                  </div>
                  <p className="text-white text-base">{proj.desc}</p>
                </div>
                <div className="flex items-center">
                  <a href={proj.link}>
                    <img
                      className="w-10 h-10 rounded-full mr-4"
                      src={github}
                      alt={`Image of ${proj.title}`}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default transition(Projects);
