"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { Experience } from "./types";
import { useRef } from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

interface ExperienceProps {
  experience: Experience[];
}

export const Experiences: React.FC<ExperienceProps> = ({ experience }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"]
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={ref} className='py-[10rem] px-4 md:px-8 text-white bg-black bg-opacity-50'>
      <div className='max-w-4xl mx-auto'>
        <h2 className='text-3xl font-bold mb-12 text-white'>Experiences</h2>
        <div className='relative'>
          {/* Background line */}
          <div className='absolute left-0 md:left-[120px] top-0 bottom-0 w-1 bg-white bg-opacity-20' />

          {/* Animated fill line */}
          <motion.div
            className='absolute left-0 md:left-[120px] top-0 w-1 bg-blue-300 origin-top z-10'
            style={{ scaleY, height: "100%" }}
          />

          {experience.map((exp, index) => (
            <motion.div
              key={index}
              className='mb-12 pl-8 md:pl-[152px] relative'
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className='absolute left-0 ml-[2px] md:left-[120px] top-1 w-4 h-4 bg-black border-2 border-blue-300 z-10 rounded-full transform -translate-x-1/2' />
              <p className='hidden md:block absolute left-0 top-0 w-[140px]  text-sm text-gray-300 pr-16 text-left'>{exp.date}</p>

              <h3 className='text-xl font-semibold mb-1 text-white -mt-1'>{exp.organization}</h3>
              <Link
                href={exp.link}
                className='text-gray-400 hover:text-white transition-colors duration-200 flex flex-row items-center space-x-2'
              >
                <div>{exp.name}</div>
                <ExternalLink size={20} />
              </Link>
              {/* Date for mobile */}
              <p className='md:hidden text-sm text-gray-300 mt-1 mb-2'>{exp.date}</p>
              <p className='text-gray-200 leading-relaxed'>{exp.description}</p>
              {exp.src && (
                <div className='relative w-full h-[300px] py-10 pl-8 my-5 overflow-hidden rounded-lg'>
                  <Image src={exp.src} alt={exp.name} fill className='transition-transform duration-300 hover:scale-105 object-cover' />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
