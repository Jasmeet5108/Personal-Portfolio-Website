import React from 'react'

const Home = () => {
    return (
        <>
            <div id="home" className='max-w-screen-xl mx-auto mt-[-100px] sm:mt-[60px] flex flex-col md:flex-row md:justify-between md:items-center md:px-4 md:mt-7 w-full'>
                <div className="left text-2xl text-center md:text-left md:text-[27px] lg:text-4xl px-[5px]">
                    <p>Hi, I am <span className='text-blue-600'>Jasmeet</span></p>
                    <p>I am a Passionate <span className='text-blue-600'>Web Developer</span></p>
                </div>
                <div className="right mt-16">
                    <img className='w-[350px] block mx-auto' src="Images/Home-Img.png" alt="No Image" />
                </div>
            </div>
        </>
    )
}

export default Home