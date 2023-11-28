import React, { useEffect, useState } from 'react'

const Navbar = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
    const [className, setClassName] = useState('-translate-x-full');
    const [rotate, setRotate] = useState('rotate-0');
    const [hide, setHide] = useState('');
    const [rotate2, setRotate2] = useState('-rotate-0');
    const [translate, setTranslate] = useState('translate-y-0');
    const [translate2, setTranslate2] = useState('-translate-y-0');

    const toggleMenu = () => {
        if (className === '-translate-x-full') {
            setClassName('-translate-x-0');
            setTranslate('translate-y-[7px]');
            setTranslate2('-translate-y-[3px]');
            setRotate('rotate-45');
            setRotate2('-rotate-45');
            setHide('hidden');
        }
        else {
            setClassName('-translate-x-full');
            setTranslate('translate-y-0');
            setTranslate2('-translate-y-0');
            setRotate('rotate-0');
            setRotate2('-rotate-0');
            setHide('');
        }
    }

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme('dark');
        }
        else {
            setTheme('light');
        }
    }


    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localtheme = localStorage.getItem("theme");
        document.querySelector('html').setAttribute('data-theme', localtheme);
    }, [theme]);

    return (
        <>
            <header className='bg-[#0101c4] px-2 sticky top-0 z-10'>
                <nav className='flex h-14 justify-between max-w-screen-xl mx-auto items-center text-white'>
                    <div className="left flex justify-center items-center space-x-2">
                        <p className='text-2xl'>Jasmeet</p>
                        <label className="swap swap-rotate">

                            {/* this hidden checkbox controls the state */}
                            <input type="checkbox"
                                onChange={handleToggle}
                            // checked={theme === 'light' ? false : true}
                            />


                            {/* sun icon */}
                            <svg className="swap-on fill-current w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

                            {/* moon icon */}
                            <svg className="swap-off fill-current w-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

                        </label>
                    </div>
                    <ul className="right hidden sm:flex space-x-8 text-xl">
                        <a href='#' className='cursor-pointer text-[#e0e2e4] hover:text-white'>Home</a>
                        <a href='#skills' className='cursor-pointer text-[#e0e2e4] hover:text-white'>Skills</a>
                        <a href='#projects' className='cursor-pointer text-[#e0e2e4] hover:text-white'>Projects</a>
                        <a href='#contact' className='cursor-pointer text-[#e0e2e4] hover:text-white'>Contact</a>
                    </ul>

                    <div className="hamburger flex flex-col space-y-[6px] sm:hidden" onClick={toggleMenu}>
                        <span className={`line bg-white w-9 h-1 rounded-md transition-all duration-300 ${translate} ${rotate} `}></span>
                        <span className={`line bg-white w-9 h-1 rounded-md transition-all duration-300 ${hide}`}></span>
                        <span className={`line bg-white w-9 h-1 rounded-md transition-all duration-300 ${translate2} ${rotate2} `}></span>
                    </div>
                </nav>
            </header>
            <div className={`sideMenu sticky top-14 sm:hidden bg-[#0101c4] text-center text-white ${className} transition-all duration-300`}>
                <ul className='flex flex-col space-y-3 py-2 text-lg'>
                    <a href='#'>Home</a>
                    <a href='#skills'>Skills</a>
                    <a href='#projects'>Projects</a>
                    <a href='#contact'>Contact</a>
                </ul>
            </div>
        </>
    )
}

export default Navbar