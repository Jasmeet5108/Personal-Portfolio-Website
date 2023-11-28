import React from 'react'

const Projects = () => {
    return (
        <>
            <h2 className='font-bold text-3xl text-[blue] mt-28 px-6 max-w-screen-xl mx-auto'>Projects</h2>
            <section id='projects' className='px-6 md:mt-8 max-w-screen-xl mx-auto md:flex md:flex-col md:items-center'>

                <div id='Calculator' className='border lg:w-[850px] border-gray-500 flex flex-col md:flex-row-reverse md:justify-between p-4 mt-4 rounded-md'>
                    <img src="Images/calculator-Img.jpg" alt="" className='rounded-md w-full md:w-[350px]' />
                    <div className='md:flex md:flex-col md:space-y-4 md:justify-center'>
                        <p className='mt-4 text-2xl text-center md:text-left font-semibold text-blue-600'>Simple Calculator</p>
                        <p className='text-xl md:text-lg md:text-left md:w-[350px] mt-4 text-center'>A simple calculator app made using HTML, CSS, Javascript. Deployed on Netlify</p>
                        <div id="buttons" className='mt-5 flex justify-center md:justify-start space-x-5'>
                            <a href='https://github.com/Jasmeet5108/simple-calculator' target='_blank' className='bg-blue-600 hover:bg-blue-700 transition text-white rounded p-2 hover:cursor-pointer'>Code on Github</a>
                            <a href='https://calcnest-online.netlify.app/' target='_blank' className='bg-blue-600 hover:bg-blue-700 transition text-white rounded p-2 hover:cursor-pointer'>See live version</a>
                        </div>
                    </div>
                </div>

                <div id="Hosting" className='mt-12 border lg:w-[850px] border-gray-500 flex flex-col md:flex-row-reverse md:justify-between p-4 rounded-md'>
                    <img src="Images/Web-Hosting-Img.jpg" alt="" className='rounded-md w-full border md:w-[350px]' />
                    <div className='md:flex md:flex-col md:space-y-4 md:justify-center'>
                        <p className='mt-4 text-2xl text-center md:text-left font-semibold text-blue-600'>Web Hosting</p>
                        <p className='text-xl mt-4 text-center md:pr-2 md:w-[350px] md:text-left'>A personal project regarding web Hosting made using HTML, CSS, Javascript. Deployed on Vercel</p>
                        <div id="buttons" className='mt-5 flex justify-center md:justify-start space-x-5'>
                            <a href='https://github.com/Jasmeet5108/Web-Hosting-Project' target='_blank' className='bg-blue-600 hover:bg-blue-700 transition text-white rounded p-2 hover:cursor-pointer'>Code on Github</a>
                            <a href='https://web-hosting-project.vercel.app' target='_blank' className='bg-blue-600 hover:bg-blue-700 transition text-white rounded p-2 hover:cursor-pointer'>See live version</a>
                        </div>
                    </div>
                </div>
                <hr />
            </section>
        </>
    )
}

export default Projects