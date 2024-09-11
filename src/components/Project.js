import React from 'react'
import ToDo from '../asssets/ToDo.png';
import AMS from '../asssets/AMS.png';
import BDMS from '../asssets/BDMS.jpeg';

const projects = [
    {
        id : 1,
        name : "Blood Donation MS",
        technology : "Html & Css",
        image : BDMS,
        github : "https://github.com/sazida81/BDMS-project",
        preview : BDMS,
    },
    {
        id : 2,
        name : "TODO App",
        technology : "React js",
        image : ToDo,
        github : "https://github.com/sazida81/Todo-App",
        preview : ToDo,
    },   
    {
        id : 3,
        name : "Alumni Management System",
        technology : "PHP & Mysql",
        image : AMS,
        github : "https://github.com/sazida81/Alumni-Management-System",
        preview : AMS,
    },
]

const Project = () => {
  return (
    <div className='bg-black dark:bg-white text-black text-white py-20' id='projects'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12 text-red-500'>My Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {projects.map(project =>(
                    <div key={project.id} className='bg-gray-800 dark:bg-gradient-to-r from-red-400 to-yellow-500 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
                        <img src={project.image} alt={project.name} className='rounded-lg mb-4 w-full h-48 object-cover'/>
                        <h3 className='text-2xl font-bold mb-2'>{project.name}</h3>
                        <p className='text-gray-400 mb-4 dark:text-black'>{project.technology}</p>
                        <a href={project.github} className='inline-block bg-gradient-to-r from-red-400 to-yellow-500 text-white px-4 py-2 rounded-full dark:text-black font-semibold' target="blank" rel="noopener noreferrer">GitHub</a>
                        <a href={project.preview} className='inline-block bg-gradient-to-r from-red-400 to-yellow-500 text-white px-4 py-2 ml-5 rounded-full dark:text-black font-semibold' target="blank" rel="noopener noreferrer">Preview</a>
                    </div>
                ))}

                </div>
                </div>
                </div>
  )
}

export default Project
