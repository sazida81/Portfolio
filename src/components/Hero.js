import React,{useState} from 'react'
import {useTypewriter, Cursor} from 'react-simple-typewriter'

import image1 from '../asssets/image1.jpeg';

const Hero = () => {

  const [typeEffect] = useTypewriter({
    words : ['Front-end Developer'],
    loop : {},
    typeSpeed : 100,
    deleteSpeed : 40
  })

  return (
    <div className='bg-black text-white text-center py-16'>
      <img src={image1} className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105'/>
      <h1 className='text-4xl font-bold'>
        I'm{" "}
        <span>Sazida</span><br />
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-400'>{typeEffect}</span>
      </h1>
      <p className='mt-4 text-lg text-gray-300'>
      Crafting seamless user experiences by transforming designs into functional code.
      </p>
      <div className='mt-8 space-x-4'>
        <button className='bg-gradient-to-r from-red-500 to-yellow-400 text-white hidden
         md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'><a href='#footer'>Connect with me</a></button>
        <button className='bg-gradient-to-r from-yellow-500 to-black-400 text-white hidden
         md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
          <a href='https://drive.google.com/file/d/1ALhXBPifsGupJzeJAOmH6nXGePRLtzZC/view?usp=sharing'>Resume</a></button>
      </div>
    </div>
  )
}

export default Hero
