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
    <nav className="bg-black w-full flex py-3 justify-between items-center navbar">
      <div
        className={`mt-8 flex justify-start font-poppins px-4 transition duration-1000 ${
          transition ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } transition ease-in-out`}
      >
        <a className="mb-5" href="https://kevinxiao27.github.io/Portfolio">
          <img className="object-contain h-16 ml-5" src={logo} alt="Logo" />
        </a>
      </div>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 mx-3">
        {navLinks.map((nav, index) => (
          <li
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
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
