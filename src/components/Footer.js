import React from 'react'
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className='bg-black text-white py-8' id='footer'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>

            <div className='md:flex-row md:space-x-12 items-center mb-4'>
                
                <div className='flex-1 mb-4 md:mb-0'>
                <div className='text-2xl font-bold hidden md:inline text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-400 tracking-widest'>SAZIDA</div>
                <p className='text-gray-400'>Front-end Developer</p>
                </div>
              
              
        </div>

        <div className='border-t border-gray-400 pt-4'>

        <div className='flex-1'>
                <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-500 mb-4'>Let's Talk</h3>
                <p>I'm open to discussing web development projects or partnership opportunities.</p>
                <div className='mb-4 mt-8'>
                <FaEnvelope className='inline block text-red-400 mr-2'/>
                <a href='mailto:sanzidachowdhury81gmail.com' className='hover:underline'>
                    sanzidachowdhury81gmail.com
                </a>
                </div>

                <div className='mb-4'>
                <FaPhone className='inline block text-red-400 mr-2'/>
                <span>+8801789919181</span>
                </div>

                <div className='mb-4'>
                <FaMapMarkedAlt className='inline block text-red-400 mr-2'/>
                <span> <a href='https://www.google.com/maps/search/mejortila+sylhet/@24.8948546,91.9071951,16z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MDgyOC4wIKXMDSoASAFQAw%3D%3D'>Mejortilla, Sylhet, Bangladesh</a></span>
                </div>         
                </div>

                <div className='flex flex-col md:flex-row justify-between items-center'>
                <p className='text-yellow-400'>&copy;Sazida. All right reserved. {new Date().getFullYear()}</p>

                    <div className='flex space-x-4 my-4 md:my-0'>
                    <a href='https://www.facebook.com/adnanianchowdhury'><FaFacebook className='text-2xl text-yellow-400 transform transition-transform duration-300 hover:scale-105'/></a>
                    <a href='https://www.linkedin.com/in/sazida81/'><FaLinkedin className='text-2xl text-red-400 transform transition-transform duration-300 hover:scale-105'/></a>
                    <a href='https://github.com/sazida81'><FaGithub className='text-2xl text-green-400 transform transition-transform duration-300 hover:scale-105'/></a>
                    </div>
                </div>

            
        </div>



      </div>
    </footer>
  )
}

export default Footer
