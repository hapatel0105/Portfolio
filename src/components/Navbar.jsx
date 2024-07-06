import React from 'react'
import logo from '../assets/logo-s.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
  return (
    <>
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <img src={logo} alt='logo' className='size-24 mx-2' />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-4xl'>
            <a href='https://github.com/hapatel0105'><FaGithub /></a>
            <a href='https://www.linkedin.com/in/harsh-patel-139521230'><FaLinkedin /></a>
        </div>
    </nav>
    </>
)
}

export default Navbar;