import React from 'react'
import { 
    RiReactjsLine,
    RiHtml5Line,
    RiCss3Line,
    RiJavascriptLine,
    RiGitMergeLine,
    RiCalendarTodoLine
    
} from 'react-icons/ri';
import { 
    SiTypescript,
    SiNextdotjs,
    SiTailwindcss,
    SiRedux,
    SiMui,
    SiMantine,
    SiJira,
    SiBootstrap,
    SiSocketdotio,
    SiNodedotjs,
    SiMysql,
    SiPostgresql,
    SiMongodb,
    SiExpress,
    SiDocker,
    SiFirebase,
    SiAwslambda,
    // SiHtml5Line,
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { motion } from 'framer-motion';

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const TechIcon = ({ icon: Icon, color, duration, name }) => (
    <motion.div 
        variants={iconVariants(duration)}
        initial="initial"
        animate="animate"
        className='rounded-2xl border-4 border-neutral-800 p-4 flex flex-col items-center gap-2 backdrop-blur-sm hover:border-neutral-600 transition-colors'
        whileHover={{ scale: 1.05 }}
    >
        <Icon className={`text-5xl ${color}`}/>
        <span className='text-sm text-neutral-400'>{name}</span>
    </motion.div>
)

const Technologies = () => {
    const techStack = [
        { icon: RiJavascriptLine, color: 'text-yellow-400', name: 'JavaScript', duration: 2.5 },
        { icon: SiTypescript, color: 'text-blue-500', name: 'TypeScript', duration: 3 },
        { icon: SiNextdotjs, color: 'text-white', name: 'Next.js', duration: 2.8 },
        { icon: RiReactjsLine, color: 'text-cyan-400', name: 'React', duration: 2.3 },
        { icon: RiHtml5Line, color: 'text-orange-500', name: 'HTML', duration: 2.7 },
        { icon: RiCss3Line, color: 'text-blue-500', name: 'CSS', duration: 3.2 },
        { icon: SiTailwindcss, color: 'text-cyan-400', name: 'Tailwind', duration: 2.9 },
        { icon: SiBootstrap, color: 'text-purple-500', name: 'Bootstrap', duration: 2.4 },
        { icon: SiRedux, color: 'text-purple-400', name: 'Redux', duration: 2.6 },
        { icon: SiMui, color: 'text-blue-400', name: 'Material UI', duration: 3.1 },
        { icon: SiMantine, color: 'text-cyan-300', name: 'Mantine UI', duration: 2.8 },
        { icon: TbApi, color: 'text-green-400', name: 'REST API', duration: 2.5 },
        { icon: SiNodedotjs, color: 'text-green-600', name: 'Node.js', duration: 2.6 },
        { icon: SiExpress, color: 'text-gray-400', name: 'Express.js', duration: 2.4 },
        { icon: SiMysql, color: 'text-blue-600', name: 'MySQL', duration: 2.8 },
        { icon: SiPostgresql, color: 'text-blue-500', name: 'PostgreSQL', duration: 2.7 },
        { icon: SiMongodb, color: 'text-green-500', name: 'MongoDB', duration: 2.6 },
        { icon: SiDocker, color: 'text-blue-400', name: 'Docker', duration: 3.0 },
        { icon: SiAwslambda, color: 'text-orange-500', name: 'AWS Lambda', duration: 2.8 },
        { icon: SiFirebase, color: 'text-yellow-500', name: 'Firebase', duration: 2.7 },
        { icon: RiGitMergeLine, color: 'text-orange-500', name: 'Git', duration: 3.3 },
        { icon: SiJira, color: 'text-blue-500', name: 'Jira', duration: 2.7 },
        { icon: RiCalendarTodoLine, color: 'text-blue-400', name: 'Monday.com', duration: 2.9 },
        { icon: SiSocketdotio, color: 'text-black', name: 'WebSocket', duration: 2.4 },
    ]

    return (
        <div className='border-b border-neutral-800 pb-24'> 
            <motion.h1 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{opacity:0, y: -100 }}
                transition={{ duration: 1.5 }}
                className='my-20 text-center text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'
            >
                Technologies & Tools
            </motion.h1>
            <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{opacity:0, x: -100 }}
                transition={{ duration: 1.5 }}
                className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 px-4 max-w-7xl mx-auto'
            >
                {techStack.map((tech, index) => (
                    <TechIcon key={index} {...tech} />
                ))}
            </motion.div>
        </div>
    )
}

export default Technologies