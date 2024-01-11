import React from "react";
import transition from "../utils/transition";
import profile from "../assets/profile-picture.png";

const AboutMe = () => {
  return (
    <>
      <div className="flex flex-row m-auto w-9/12 mt-3 mb-10">
        <div className="bg-slate-700 p-2">
          <div className="w-96">
            <img
              className="-translate-x-6 -translate-y-6 w-96"
              src={profile}
            ></img>
          </div>
        </div>
        <div className="p-8 bg-zinc-950">
          <p className="text-xl font-bold mb-4">
            Learning is my passion. Software design and programming come as a
            natural translation of my interests for systematic thinking.{" "}
          </p>
          <p>
            I am a student @{" "}
            <a className="text-white" href="https://mybcom.sauder.ubc.ca/bucs">
              UBC
            </a>{" "}
            studying Business and Computer Science. I was born in Vancouver but
            have lived in Calgary for most of my life.
          </p>
        </div>
      </div>
    </>
  );
};

// const WrappedAboutMe = transition(AboutMe);
// export default WrappedAboutMe;
export default AboutMe;
