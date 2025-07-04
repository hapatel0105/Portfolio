import React from 'react'
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
const Projects = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{opacity:0, y: -100 }}
        transition={{ duration: 1.5 }}
        className='my-20 text-center text-4xl'>Projects</motion.h2>
        <div>
            {PROJECTS.map((project, index) => (
                <div key={index} className={`mb-8 flex flex-wrap lg:justify-center ${project.link && "cursor-pointer"}`} onClick={() => project.link && window.open(project.link, '_blank')}>
                    <motion.div 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{opacity:0, x: -100 }}
                    transition={{ duration: 1 }}
                    className='w-ful lg:w-1/4'>
                        <img width={150} height={150} className='mb-6 rounded' src={project.image} alt={project.title} />
                    </motion.div>
                    <motion.div 
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{opacity:0, x: 100 }}
                    transition={{ duration: 1 }}
                    className='w-full max-w-xl lg:w-3/4'>
                        <h6 className='mb-2 font-semibold'>{project.title}</h6>
                        <p className='mb-4 text-neutral-400'>{project.description}</p>
                        <div className='flex flex-wrap gap-2'>
                            {project.technologies.map((tech, index) => (
                                <span key={index} className='rounded bg-neutral-900 px-2
                                py-2 text-sm font-medium text-purple-800'>{tech}</span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects