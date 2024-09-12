import React from 'react'
import { useState, useEffect } from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { MdOutlineHistoryToggleOff } from "react-icons/md";

const Navbar = () => {

  

  return (
    
     <nav className='bg-[#020617] dark:bg-[#fefce8] text-white px-8 md:px-16 lg:px-24 sticky top-0 z-10'>

    <div className='container py-2 flex justify-center md:justify-between items-center'>
    <div className='text-2xl font-bold hidden md:inline text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-400 tracking-widest'>SAZIDA</div>
    <div className='pl-5 space-x-6'>
        <a href="#home" className='hover:text-red-400 dark:text-[#1e1b4b] font-semibold'>Home</a>
        <a href="#about" className='hover:text-yellow-400 dark:text-[#1e1b4b] font-semibold'>About</a>
        <a href="#services" className='hover:text-red-400 dark:text-[#1e1b4b] font-semibold'>Services</a>
        <a href="#projects" className='hover:text-yellow-400 dark:text-[#1e1b4b] font-semibold'>Projects</a>
    </div>
    <button className='space-x-3 flex'>
    <a href='https://www.facebook.com/adnanianchowdhury'><FaFacebook className='text-2xl text-yellow-400 transform transition-transform duration-300 hover:scale-105 dark:text-[#b91c1c]'/></a>
    <a href='https://www.linkedin.com/in/sazida81/'><FaLinkedin className='text-2xl text-red-400 transform transition-transform duration-300 hover:scale-105 dark:text-[#facc15]'/></a>
    <a href='https://github.com/sazida81'><FaGithub className='text-2xl text-green-400 transform transition-transform duration-300 hover:scale-105 dark:text-[#065f46]'/></a>
    
    </button>
    

</div>
<div className='border-t border-gray-400'></div>

</nav>
    
    
  )
}

export default Navbar
