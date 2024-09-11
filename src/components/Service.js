import React from 'react'

const services = [
    {
        id: 1,
        title: "Web Design",
        description: "Creating visually appealing and user-friendly web designs."
    },
    {
        id: 2,
        title: "Front-end Development",
        description: "Building responsive nad interactive user interfaces."
    },
    {
        id: 3,
        title: "Data-entry Operating",
        description: "Building responsive nad interactive user interfaces."
    },
    {
        id: 4,
        title: "Content Writing",
        description: "Writing content for your business and companies."
    },
]

const Service = () => {
  return (
    <div className='bg-black dark:bg-white text-white py-20' id='services'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12 text-red-500'>My Services</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {services.map(service =>(
                    <div key={service.id}
                     className='bg-gray-800 dark:bg-gradient-to-r from-red-400 to-yellow-500 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
                        <div className='text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-400 dark:text-black'>
                            {service.id}
                        </div>
                        <h3 className='mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-500 
                        dark:text-black'>
                            {service.title}
                        </h3>
                        <p className='mt-2 text-gray-300 dark:text-black'>
                            {service.description}
                        </p>
                        <a href='#' className='mt-4 inline-block text-red-400 hover:text-yellow-500'>Read More</a>
                    </div>
                ))}

            </div>


            </div>
    </div>
  )
}

export default Service
