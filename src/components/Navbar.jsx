import { useState } from "react"
import { FaBarcode, FaLightbulb, FaRegLightbulb } from "react-icons/fa"
import { MdDarkMode, MdLightMode } from "react-icons/md"

const Navbar = ({ theme, handleThemeSwitch, changeShowMobileNav, showMobileNav }) => {
    return (
        // Navbar
        <div className={`py-6 px-6 sticky top-0 backdrop-blur-2xl z-20 sm:px-12 lg:px-20 ${showMobileNav ? 'h-screen overflow-hidden' : ''} dark:text-word dark:bg-materialBlack`}>
            {/* Flex container */}
            <div className="grid grid-cols-2 sticky">
                {/* Brand */}
                {/* Hamburger Icon */}
                <div className="col-start-2 row-start-1 flex justify-end items-center mb-1">
                    <button type='button'
                        onClick={handleThemeSwitch}
                        className="relative transition-all -translate-x-12 md:hidden"
                    >
                        <div className="align-middle relative transition-all text-xl translate-y-[2px] scale-110 hover:scale-125">
                            <FaRegLightbulb />
                        </div>                    
                    </button>
                    
                    <button className="relative md:hidden" onClick={() => changeShowMobileNav(!showMobileNav)}>
                        <div className={`absolute bg-materialBlack h-1 w-6 -translate-x-6 ${showMobileNav ? 'opacity-0' : '-translate-y-2 delay-500'}
                        transition-hamburger ease-in-out dark:bg-word`}></div>
                        <div className={`absolute bg-materialBlack h-1 w-6 -translate-x-6 ${showMobileNav ? 'rotate-45 delay-500' : ''}
                        transition-hamburger ease-in-out dark:bg-word`}></div>
                        <div className={`absolute bg-materialBlack h-1 w-6 -translate-x-6 ${showMobileNav ? '-rotate-45 delay-500' : ''}
                        transition-hamburger ease-in-out dark:bg-word`}></div>
                        <div className={`absolute bg-materialBlack h-1 w-6 -translate-x-6 ${showMobileNav ? 'opacity-0' : 'translate-y-2 delay-500'}
                        transition-hamburger ease-in-out dark:bg-word`}></div>
                    </button>
                </div>
                <div className="font-bold text-2xl flex gap-2 items-center transition-all">
                    <div className="flex w-6 overflow-hidden">
                        <div className="flex animate-slide">
                            <FaBarcode />
                            <FaBarcode />
                        </div>
                    </div>
                    {/* {theme === 'dark' ? <img src="/logoDark.gif" className="h-6 w-6" /> : <img src="/logoLight.gif" className="h-6 w-6" />} */}
                    GeraldLiu

                </div>

                {/* Mobile Nav */}
                <div className="md:opacity-0">
                    <div className={`absolute flex flex-col gap-5 items-start self-end py-6 font-bold h-screen w-screen
                     top-12
                    transition-all  ${showMobileNav ? 'left-0 duration-1000' : '-left-[120%] opacity-0'}`}>
                        <button onClick={() => changeShowMobileNav(!showMobileNav)}>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-pink-500"></div>
                                <a href="#skills" className="hover:text-pink-500">Skills</a>
                            </div>
                        </button>
                        <button onClick={() => changeShowMobileNav(!showMobileNav)}>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-violet-500"></div>
                                <a href="#projects" className="hover:text-violet-500">Projects</a>
                            </div>
                        </button>
                        

                        <button onClick={() => changeShowMobileNav(!showMobileNav)}>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-blue-500"></div>
                                <a href="#contact" className="hover:text-blue-500">Contact</a>
                            </div>
                        </button>
                        <button onClick={() => changeShowMobileNav(!showMobileNav)}>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-yellow-500"></div>
                                <a href="" className="hover:text-yellow-500">Resume</a>
                            </div>
                        </button>
                    </div>
                </div>
                {/* Navlinks */}
                <div className="col-start-2 row-start-1 justify-end items-center gap-5 font-bold hidden md:flex">
                    <button type='button'
                        onClick={handleThemeSwitch}
                        className="transition-all peer"
                    >
                        <div className="transition-all hover:scale-125">
                            <FaRegLightbulb className="text-xl"/>
                            
                        </div>
                    </button>
                    <div className="absolute -translate-x-[19.5rem] rotate-45 translate-y-10 text-sm font-normal transition-all
                            border-materialBlack border-t-2 border-l-2 opacity-0 w-4 h-4 text-middle text-center z-10 bg-word
                            dark:bg-materialBlack dark:border-word
                            peer-hover:opacity-100 "></div>
                    <div className="absolute -translate-x-56 translate-y-[3.7rem] text-sm p-2 font-normal rounded-lg transition-all
                            border-materialBlack border-2 opacity-0 w-48 text-middle text-center bg-word  dark:bg-materialBlack
                            dark:border-word dark:text-word
                            peer-hover:opacity-100">{theme === 'light' ? 'Sunlight hurts my eyes!' : 'Afraid of the dark?'}</div>
                    <div>
                        <a href="#skills" className="transition-all hover:text-pink-500">Skills</a>
                    </div>
                    <div>
                        <a href="#projects" className="transition-all hover:text-violet-500 dark:hover:text-purple-400">Projects</a>
                    </div>
                    
                    <div>
                        <a href="#contact" className="transition-all hover:text-blue-500 dark:hover:text-blue-400">Contact</a>
                    </div>
                    <div>
                        <a href="/Resume.pdf" download="Gerald Liu Resume" className="transition-all hover:text-yellow-500 dark:hover:text-yellow-300">Resume</a>
                    </div>

                </div>

            </div>
        </div >
    )
}
export default Navbar