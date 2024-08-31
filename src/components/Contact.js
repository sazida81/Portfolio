import React from 'react'
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='bg-black text-white py-20' id='contact'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            
            
            <div className='flex flex-col md:flex-row items-center md:space-x-12'>

                

                
            <div className='flex-1 w-full'>

            <form className='space-y-4'>
            <div>
             <label htmlFor='name' className='block mb-2'>Your Name</label>
            <input type='text' className='w-full p-2 rounded bg-gray-800 border-gray-600 focus:outline-none focus:border-red-400' placeholder='Enter your name'/>
            </div>

            <div>
                <label htmlFor='email' className='block mb-2'>Email</label>
        <       input type='text' className='w-full p-2 rounded bg-gray-800 border-gray-600 focus:outline-none focus:border-red-400' placeholder='Enter your name'/>
            </div>

             <div>
                 <label htmlFor='massage' className='block mb-2'>Message</label>
                 <textarea type='text' className='w-full p-2 rounded bg-gray-800 border-gray-600 focus:outline-none focus:border-red-400' rows="5" placeholder='Enter your message'/>
             </div>
                 <button className='bg-gradient-to-r from-red-500 to-yellow-400 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>Send</button>
            </form>

            </div>

            </div>


        </div>
      
    </div>
   
  )
}

export default Contact
