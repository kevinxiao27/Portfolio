import React from "react"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { navLinks } from "../constants/navconsts"
import logo from "../assets/logo.png"

const NavBar = () => {
  const [transition, setTransition] = useState(false)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setTransition(true)
    }, 10)
    return () => clearTimeout(timeout)
  }, [])
  return (
    <>
      <div className="invisible h-48"></div>
      <nav className="fixed-navbar lg:flex lg:items-stretch lg:justify-end ml-auto bg-black w-full flex py-3 justify-between items-center navbar select-none bg-grey lg:flex lg:items-stretch w-full top-0 overflow-hidden z-30">
        <div
          className={`mt-8 flex justify-start font-poppins px-4 transition duration-1000 ${
            transition
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          } transition ease-in-out`}
        >
          <a className="mb-5" href="https://kevinxiao27.github.io/Portfolio">
            <img className="object-contain h-16 ml-5" src={logo} alt="Logo" />
          </a>
        </div>
        <div className="lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow mt-10">
          <div className="lg:flex lg:items-stretch lg:justify-end ml-auto">
            {navLinks.map((nav, index) => (
              <div
                key={nav.id}
                className={`font-poppins px-4 transition ${
                  transition
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-7"
                } transition duration-1000 ease-in-out`}
                style={{ transitionDelay: `${String(166 * index)}ms` }}
              >
                <Link className="text-white" to={`/${nav.id}`}>
                  {nav.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
