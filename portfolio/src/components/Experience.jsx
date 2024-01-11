import React from "react"
import { useState, useEffect } from "react"
import { useLocation } from "react-router"
import { experience } from "../constants/experience"
import transition from "../utils/transition"

const Experience = () => {
  const location = useLocation()
  const [animation, setAnimation] = useState(false)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimation(true)
    }, 10)
    return () => clearTimeout(timeout)
  }, [location])
  return (
    <>
      <div className="bg-black w-2/4 border-solid border-2 border-gray-100 border-t-0 border-l-0 p-3 flex mt-4 mx-auto">
        <h1 className="mx-auto mttext-xl font-bold">Experience</h1>
      </div>
      <div className="container bg-transparent mx-auto w-full h-full">
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div
            className="border-2-2 absolute border-opacity-20 border-white h-full border"
            style={{ left: "50%" }}
          ></div>
          {experience.map((exp, index) => {
            const displaySide = index % 2 === 1 ? "flex-row-reverse" : ""
            const directionIn =
              index % 2 === 0 ? "translate-x-36" : "-translate-x-36"
            return (
              <div
                className={`mb-8 flex ${displaySide} justify-between items-center w-full right-timeline`}
              >
                <div className="order-1 w-5/12"></div>
                <div className="flex items-center order-1 bg-black border-solid border-2 border-white border-l-0 border-t-0 shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto font-semibold text-lg text-white ">
                    {index + 1}
                  </h1>
                </div>
                <div
                  className={`order-1 bg-gray-900 border-solid border-2 border-t-0 border-l-0 border-white rounded-lg shadow-xl w-5/12 px-6 py-4 duration-1000 ${
                    animation ? "opacity-100 translate-x-0" : directionIn
                  } transition ease-in-out`}
                >
                  <h3 className="font-bold text-white text-xl">{exp.name}</h3>
                  <div className="flex">
                    <h3 className="mb-3 font-normal text-white text-xl flex-none">
                      <a href={exp.link}>{exp.organization}</a>
                    </h3>
                    <div className="grow"></div>
                    <h3 className="flex-none">{`${exp.startDate} -- ${exp.endDate}`}</h3>
                  </div>
                  <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
                    {exp.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default transition(Experience)
