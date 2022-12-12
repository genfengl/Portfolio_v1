import { useState } from "react"
import { FaLightbulb, FaRegLightbulb } from "react-icons/fa"
import { MdDarkMode, MdLightMode } from "react-icons/md"

const Navbar = ({ theme, handleThemeSwitch }) => {
    const [showMobileNav, setShowMobileNav] = useState(false)

    return (
        // Navbar
        <div className={`py-6 px-6 sticky top-0 backdrop-blur-2xl z-20 sm:px-12 lg:px-20 ${showMobileNav ? 'h-screen overflow-hidden' : ''} dark:text-word`}>
            {/* Flex container */}
            <div className="grid grid-cols-2 sticky">
                {/* Brand */}
                {/* Hamburger Icon */}
                <div className="col-start-2 row-start-1 flex justify-end items-center mb-1">
                    <button className="relative md:hidden" onClick={() => setShowMobileNav(!showMobileNav)}>
                        <div className={`absolute bg-materialBlack h-1 w-6 -translate-x-6 ${showMobileNav ? 'opacity-0' : '-translate-y-2 delay-500'}
                        transition-all ease-in-out dark:bg-word`}></div>
                        <div className={`absolute bg-materialBlack h-1 w-6 -translate-x-6 ${showMobileNav ? 'rotate-45 delay-500' : ''}
                        transition-all ease-in-out dark:bg-word`}></div>
                        <div className={`absolute bg-materialBlack h-1 w-6 -translate-x-6 ${showMobileNav ? '-rotate-45 delay-500' : ''}
                        transition-all ease-in-out dark:bg-word`}></div>
                        <div className={`absolute bg-materialBlack h-1 w-6 -translate-x-6 ${showMobileNav ? 'opacity-0' : 'translate-y-2 delay-500'}
                        transition-all ease-in-out dark:bg-word`}></div>
                    </button>
                </div>
                <div className="font-bold text-2xl flex gap-2 items-center transition-all">
                    <img src="/logo.gif" className="h-6 w-6" />
                    GeraldLiu
                    <button type='button'
                        onClick={handleThemeSwitch}
                        className="transition-all"
                    >
                        <div className="transition-all">
                            {theme === 'light' ? <FaRegLightbulb/> : <FaRegLightbulb />}
                        </div>
                    </button>
                </div>

                {/* Mobile Nav */}
                <div className="md:hidden   ">
                    <div className={`absolute flex flex-col gap-5 items-start self-end py-6 font-bold h-screen w-screen z-20 backdrop-blur-2xl
                    -left-full top-9
                    transition-all  ${showMobileNav ? '-left-0 duration-1000' : 'opacity-0'}`}>
                        <button onClick={() => setShowMobileNav(!showMobileNav)}>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-pink-500"></div>
                                <a href="#skills" className="hover:text-pink-500">Skills</a>
                            </div>
                        </button>
                        <button onClick={() => setShowMobileNav(!showMobileNav)}>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-violet-500"></div>
                                <a href="#projects" className="hover:text-violet-500">Projects</a>
                            </div>
                        </button>
                        <button onClick={() => setShowMobileNav(!showMobileNav)}>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-yellow-500"></div>
                                <a href="" className="hover:text-yellow-500">Resume</a>
                            </div>
                        </button>

                        <button onClick={() => setShowMobileNav(!showMobileNav)}>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-blue-500"></div>
                                <a href="#contact" className="hover:text-blue-500">Contact</a>
                            </div>
                        </button>
                    </div>
                </div>
                {/* Navlinks */}
                <div className="col-start-2 row-start-1 justify-end items-center gap-5 font-bold hidden md:flex">
                    <div>
                        <a href="#skills" className="hover:text-pink-500">Skills</a>
                    </div>
                    <div>
                        <a href="#projects" className="hover:text-violet-500">Projects</a>
                    </div>
                    <div>
                        <a href="" className="hover:text-yellow-500">Resume</a>
                    </div>
                    <div>
                        <a href="#contact" className="hover:text-blue-500">Contact</a>
                    </div>
                </div>

            </div>
        </div >
    )
}
export default Navbar