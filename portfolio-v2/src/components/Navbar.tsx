"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";

interface NavbarProps {
  links: {
    href: string;
    name: string;
  }[];
}

export const Navbar: React.FC<NavbarProps> = ({ links }) => {
  const [activeLink, setActiveLink] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= lastScrollY) {
        // Scrolling up
        controls.start({ y: 0, transition: { duration: 0.5 } });
      } else {
        // Scrolling down
        controls.start({ y: "-100%", transition: { duration: 0.5 } });
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, controls]);

  return (
    <motion.nav className='p-4 pt-8 fixed w-full z-50 top-0' initial={{ y: 0 }} animate={controls} transition={{ duration: 0.3 }}>
      <div className='max-w-6xl mx-auto'>
        <div className='flex justify-between items-center'>
          <div className='hidden md:flex justify-between items-center flex-grow ml-10'>
            {links.map((link, index) => (
              <motion.div key={link.href} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href={link.href}>
                  <span
                    className={`text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer ${
                      activeLink === index ? "bg-white !text-black" : "hover:bg-white hover:text-black"
                    }`}
                    onClick={() => setActiveLink(index)}
                    style={{ fontFamily: "'Montserrat Alternates', sans-serif" }}
                  >
                    {link.name}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className='md:hidden'>
            <button
              className='text-white focus:outline-none ml-4'
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label='Toggle mobile menu'
            >
              <svg className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <motion.div
        className='md:hidden w-[90%] mr-3'
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0, height: isMobileMenuOpen ? "auto" : 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
          {links.map((link, index) => (
            <Link key={link.href} href={link.href}>
              <span
                className={`block px-3 py-2 rounded-md text-base font-medium text-white cursor-pointer ${
                  activeLink === index ? "bg-white !text-black" : "hover:bg-white hover:text-black"
                }`}
                onClick={() => {
                  setActiveLink(index);
                  setIsMobileMenuOpen(false);
                }}
                style={{ fontFamily: "'Montserrat Alternates', sans-serif" }}
              >
                {link.name}
              </span>
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};
