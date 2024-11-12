"use client";

import React from "react";
import { motion, useAnimationFrame } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

const ROTATION_DURATION = 30; // seconds

function useRotation() {
  const ref = useRef<HTMLDivElement>(null);

  useAnimationFrame((t) => {
    if (ref.current) {
      const rotation = ((t / 1000) * (360 / ROTATION_DURATION)) % 360;
      ref.current.style.transform = `rotate(${rotation}deg)`;
    }
  });

  return ref;
}

export const Name: React.FC = ({ name = "Kevin Xiao" }: { name?: string }) => {
  const rotationRef = useRotation();
  const circleText = "SWE  •  STUDENT  •  TA  •  CS  •  WRITER  •  ";
  const repeatedText = circleText.repeat(2);

  return (
    <div>
      <div className='flex items-center gap-x-40 justify-center w-full h-screen'>
        <div className='relative'>
          <motion.div
            className='text-5xl font-bold text-white'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {name}
          </motion.div>
          <div ref={rotationRef} className='absolute top-1/2 left-1/2 w-96 h-96 -mt-48 -ml-48 fill-white' aria-hidden='true'>
            <svg viewBox='0 0 100 100' width='100%' height='100%'>
              <defs>
                <path id='circle' d='M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0' />
              </defs>
              <text fontSize='7.5'>
                <textPath xlinkHref='#circle'>{repeatedText}</textPath>
              </text>
            </svg>
          </div>
        </div>
        <div className='hidden lg:block space-y-5'>
          <div className='text-2xl  border-l-2 border-white pl-3'>
            CS + Business @ UBC <br></br> SWE @ UBC BizTech
          </div>
          <div className='flex flex-row space-x-3 items-center'>
            <Link href='https://github.com/kevinxiao27' className='p-2  border-2 border-white rounded-lg cursor-pointer'>
              <Github size={30} />
            </Link>
            <Link href='https://linkedin.com/in/kevin-xiao-xyz/' className='p-2  border-2 border-white rounded-lg cursor-pointer'>
              <Linkedin size={30} />
            </Link>
          </div>
        </div>
      </div>
      <div className='text-2xl lg:hidden w-full text-center -mt-[10rem] border-l-2 border-white pl-3'>
        CS + Business @ UBC <br></br> SWE @ UBC BizTech
      </div>
    </div>
  );
};
