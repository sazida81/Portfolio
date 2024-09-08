import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './Style.css';
import {useTypewriter, Cursor} from 'react-simple-typewriter'
import image1 from '../asssets/image1.jpeg';

const FirstPage = () => {

  const nevigate = useNavigate();

  const handleClick = ()=>{
    nevigate('/index')
  }


    const [typeEffect] = useTypewriter({
        words : ['Take a Glance'],
        loop : {},
        typeSpeed : 100,
        deleteSpeed : 40
      })


  return (
    <div>
        <div className='bg-black text-white text-center py-16 h-screen content-center'>
      <img src={image1} className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105
       border-2 border-yellow-200 
       shadow-[0_0_2px_#fbbf24,inset_0_0_2px_#b45309,0_0_10px_#fde047,0_0_25px_#713f12,0_0_70px_#431407] cursor-pointer' onClick={handleClick}/>
      <h1 className='text-4xl font-bold'>        
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-400'>{typeEffect}</span>
      </h1>
      </div>

         </div> 
    
  )
}

export default FirstPage
