import React from 'react'
import image2 from '../asssets/image2.jpeg';

const About = () => {
  return (
    <div className='bg-black dark:bg-white font-medium text-white py-20' id='about'>
      
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            
            <h2 className='text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-yellow-400'>About me</h2>
            <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                <img src={image2} className='w-72 h-80 rounded object-cover mb-8 md:mb-0'/>
                <div className='flex-1'>
                <p className='text-md mb-8 dark:text-black'>
                With a background in design and a passion for technology, I specialize 
                in front-end development that emphasizes both form and function. I enjoy the 
                challenge of translating complex designs efficient code, creating websites 
                that are not only visually appealing but also highly functional.
                </p>
                <div className='space-y-4'>

                    <div className='flex items-center'>
                        <label htmlFor='htmlandcss' className='w-2/12 mr-5 dark:text-black'>HTML & CSS</label>
                        <div className='grow bg-gray-800 rounded-full h-2.5'>
                        <div className='bg-gradient-to-r from-red-400 to-yellow-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-12/12'> </div>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <label htmlFor='htmlandcss' className='w-2/12 mr-8 dark:text-black'>Javascript</label>
                        <div className='grow bg-gray-800 rounded-full h-2.5'>
                        <div className='bg-gradient-to-r from-red-400 to-yellow-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-12/12'> </div>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <label htmlFor='htmlandcss' className='w-2/12 mr-8 dark:text-black'>React js</label>
                        <div className='grow bg-gray-800 rounded-full h-2.5'>
                        <div className='bg-gradient-to-r from-red-400 to-yellow-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12'> </div>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <label htmlFor='htmlandcss' className='w-2/12 mr-8 dark:text-black'>Java</label>
                        <div className='grow bg-gray-800 rounded-full h-2.5'>
                        <div className='bg-gradient-to-r from-red-400 to-yellow-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12'> </div>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <label htmlFor='htmlandcss' className='w-2/12 mr-8 dark:text-black'>Python</label>
                        <div className='grow bg-gray-800 rounded-full h-2.5'>
                        <div className='bg-gradient-to-r from-red-400 to-yellow-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-6/12'> </div>
                        </div>
                    </div>

                </div>

                <div className='mt-12 flex justify-between text-center'>
                  <div>
                    <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-500'>
                        2+
                    </h3>
                    <p className='dark:text-black'>Years Experience</p>
                  </div>

                  <div>
                    <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-500'>
                        10+
                    </h3>
                    <p className='dark:text-black' >Projects Completed</p>
                  </div>

                  <div>
                    <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-500'>
                        5+
                    </h3>
                    <p className='dark:text-black'>Happy Clients</p>
                  </div>


                </div>


                </div>
            </div>
        </div>
      
    </div>
  )
}

export default About
