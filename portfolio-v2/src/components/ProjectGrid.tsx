"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Project } from "./types";
import { motion } from "framer-motion";
import { ExternalLink, Github, Link2Icon, LinkIcon } from "lucide-react";
import { useEffect, useState } from "react";

interface ProjectGridProps {
  projects: Project[];
}

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const ProjectTab: React.FC<{
  index: number;
  project: Project;
}> = ({ index, project }) => (
  <motion.div key={index} className='grid gap-y-4 bg-[rgba(0,0,0,0.4)] p-5 rounded-lg' variants={fadeInUp}>
    <div className='w-full relative overflow-hidden rounded-lg aspect-[3/2]'>
      <Link href={project.link}>
        <Image
          src={project.src}
          alt={project.name}
          fill
          className='transition-transform duration-300 hover:scale-105 object-cover rounded-lg'
        />
      </Link>
    </div>
    <div className='row-start-4 flex flex-col justify-between items-center'>
      <h3 className='lg:text-lg text-md text-left font-semibold w-full'>{project.name}</h3>
      <span className='text-sm text-white text-nowrap w-full text-left'>{project.date}</span>
    </div>
    <p className='row-start-5 text-sm text-white line-clamp-4'>{project.desc}</p>
    <div className='row-start-6 flex space-x-4'>
      <Link
        href={project.link}
        className='inline-flex items-center space-x-2 text-sm font-medium text-white hover:text-blue-300 transition-colors'
      >
        <Github size={20} />
        <span className='sr-only'>View on GitHub</span>
      </Link>
      {project.prod && (
        <Link
          href={project.prod}
          className='inline-flex items-center space-x-2 text-sm font-medium text-white hover:text-blue-300 transition-colors'
        >
          <ExternalLink size={20} />
          <span className='sr-only'>View Live Project</span>
        </Link>
      )}
    </div>
  </motion.div>
);

export const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className='container mx-auto px-4 py-[10rem] max-w-full z-10'>
      <motion.div
        className='grid grid-cols-1 md:grid-cols-3 gap-12'
        initial='initial'
        animate={mounted ? "animate" : "initial"}
        variants={{
          animate: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {projects.map((project, index) => (
          <ProjectTab index={index} project={project} />
        ))}
      </motion.div>
    </div>
  );
};
