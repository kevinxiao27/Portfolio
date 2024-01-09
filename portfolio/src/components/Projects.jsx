import React from "react";
import transition from "../utils/transition";
import github from "../assets/github-icon.svg";
import { projects } from "../constants/projects";

const Projects = () => {
  return (
    <div className="m-5">
      {projects.map((proj, index) => (
        <div
          key={`${proj.id}`}
          className="m-2 max-w-sm w-full lg:max-w-full lg:flex"
        >
          <div
            className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
            // style={{background-image: proj.src})}}
            title={proj.title}
          >
            <img src={proj.src}></img>
          </div>
          <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <div className="text-gray-900 font-bold text-xl mb-2">
                {proj.name}
              </div>
              <p className="text-gray-700 text-base">{proj.desc}</p>
            </div>
            <div className="flex items-center">
              <a href={proj.link}>
                <img
                  className="w-10 h-10 rounded-full mr-4"
                  src={github}
                  alt={`Image of ${proj.title}`}
                />
                <div className="text-sm">
                  <p className="text-gray-900 leading-none">Github Link</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default transition(Projects);
