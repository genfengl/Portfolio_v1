import { FaGithub, FaLinkedin, FaReact, FaPython } from 'react-icons/fa'
import { SiJavascript, SiNodedotjs } from 'react-icons/si'
import { Player } from '@lottiefiles/react-lottie-player'
import { TypeAnimation } from 'react-type-animation'
import { useEffect, useState } from 'react'



const Play = () => {
    const [city, setCity] = useState('🇭🇰')

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (city === '🇭🇰') {
                setCity('🇦🇺')
            } else if (city === '🇦🇺') {
                setCity('🇬🇧')
            } else if (city === '🇬🇧') {
                setCity('🇭🇰')
            }
        }, 4375)

        return () => clearTimeout(timeout)
    }, [city])


    return (
        <section id="play">
            <div className='container px-6
            grid grid-cols-2 grid-rows-2 col-start-1 col-end-2 row-span-1 gap-3 transition-all 
            sm:mx-6 md:grid-cols-3 md:grid-rows-5 lg:mx-14 lg:grid-rows-3 lg:grid-cols-5 dark:text-word'>
                <div>
                    {/* View Projects Hyperlink */}
                    <div className='py-6 align-middle col-span-2 md:row-start-2 lg:row-start-2 lg:row-end-3'>
                        <a href="#projects" className='group text-l font-bold sm:text-2xl '>
                            View Projects
                            <div className='mt-0.5 bg-materialBlack h-0.5 w-14 transition-all group-hover:w-[6.6rem] sm:group-hover:w-[9.6rem] dark:bg-word'></div>
                        </a>
                    </div>

                    {/* Button links to GitHub and LinkedIn */}
                    <div className='flex flex-row gap-3 col-start-1 col-end-1 row-start-1 row-end-2 lg:row-start-4 lg:row-end-5'>
                        <a href="https://www.github.com/genfengl" target="_blank" className='p-3 shadow-xl rounded-full bg-word transition-all group 
                        hover:bg-materialBlack dark:bg-materialBlack dark:hover:bg-word'>
                            <FaGithub className='flex items-center text-2xl text-materialBlack
                            group-hover:text-word dark:text-word dark:group-hover:text-materialBlack transition-all sm:text-4xl' />
                        </a>
                        <a href="https://www.linkedin.com/in/geraldlgf/" target="_blank" className='p-3 shadow-xl rounded-full bg-word transition-all group 
                        hover:bg-blue-600 dark:bg-materialBlack dark:hover:bg-word'>
                            <FaLinkedin className='flex items-center text-2xl text-blue-600 dark:text-word
                            group-hover:text-word dark:group-hover:text-blue-600 transition-all sm:text-4xl' />
                        </a>
                    </div>
                </div>

                {/* The animated background  */}
                <div className="col-start-2 col-end-3 row-start-1 relative w-full max-w z-10 top-8 transition-all sm:hidden">
                    <div className="absolute top-0 -right-4 w-36 h-36 bg-purple-300 rounded-full 
                    mix-blend-multiply filter blur-2xl opacity-60 animate-play "></div>
                    <div className="absolute top-2 -left-8 w-36 h-36 bg-blue-300 rounded-full 
                    mix-blend-multiply filter blur-2xl opacity-60 animate-play animation-delay-3000"></div>
                    <div className="absolute -bottom-8 right-2 w-36 h-36 bg-pink-300 rounded-full 
                    mix-blend-multiply filter blur-2xl opacity-60 animate-play animation-delay-5000"></div>
                </div>
                {/* The sm-md-sized animated background  */}
                <div className="col-start-2 col-end-3 row-span-2 relative w-full max-w z-10 hidden sm:max-md:inline-block">
                    <div className="absolute -top-1 left-20 w-48 h-48 bg-purple-300 rounded-full 
                    mix-blend-multiply filter blur-2xl opacity-60 animate-playSmall"></div>
                    <div className="absolute top-1 -left-2 w-48 h-48 bg-blue-300 rounded-full 
                    mix-blend-multiply filter blur-2xl opacity-60 animate-playSmall animation-delay-3000"></div>
                    <div className="absolute -bottom-7 left-12 w-48 h-48 bg-pink-300 rounded-full 
                    mix-blend-multiply filter blur-2xl opacity-60 animate-playSmall animation-delay-5000"></div>
                </div>

                {/* The card show */}
                <div className="col-start-2 col-end-3 row-start-4 row-end-5 place-items-center group -translate-x-6 translate-y-6 hidden transition-all 
                md:grid lg:row-start-1 lg:col-start-3 lg:translate-x-6 lg:translate-y-10">
                    {/* small-card 1 */}
                    <div className="w-28 shadow-2xl aspect-[5/5] absolute rounded-xl transition-all bg-blue-600
                    backdrop-blur-xl bg-opacity-60
                group-hover:translate-x-64 group-hover:-translate-y-40 group-hover:-rotate-6">
                        <FaPython className='w-full h-full rounded-xl p-3 text-yellow-300 animate-wave ' />
                    </div>
                    {/* big-card 1 */}
                    <div className="w-60 shadow-2xl aspect-[5/7] absolute rounded-xl bg-blue-600 transition-all -translate-x-4 -rotate-1
                    backdrop-blur-xl bg-opacity-60 border-2 border-slate-200
                group-hover:-translate-x-40 group-hover:translate-y-3 group-hover:-rotate-[18deg] ">
                    <div className='grid grid-cols-[118px_118px] grid-rows-[100px_100px_100px] rounded-xl'>
                        <img src='tangy1.jpg' className='object-contain  rounded-tl-xl'></img>
                        
                        <img src='tangy3.jpg' className='object-contain  rounded-tr-xl'></img>

                        <img src='tangy2.jpg' className='object-contain  rounded-bl-xl'></img>
                        <img src='tangy4.jpg' className='object-contain  rounded-br-xl'></img>
                        <img src='tangy4.jpg' className='object-contain  rounded-bl-xl'></img>
                        <img src='tangy4.jpg' className='object-contain  rounded-bl-xl'></img>
                    </div>
                </div>
                    {/* small-card 2 */}
                    <div className="w-28 shadow-2xl aspect-[5/5] absolute rounded-xl transition-all
                    backdrop-blur-xl bg-opacity-30
                group-hover:translate-x-56 group-hover:translate-y-60 group-hover:rotate-6">
                        <SiJavascript className='w-full h-full text-yellow-300 rounded-xl animate-jsIconAnimation' />
                    </div>
                    {/* big-card 2 */}
                    <div className="w-60 shadow-2xl aspect-[5/7] absolute rounded-xl bg-blue-300 transition-all rotate-3
                    backdrop-blur-xl bg-opacity-60 border-2 border-slate-200
                group-hover:-translate-x-10 group-hover:translate-y-0 group-hover:-rotate-3">
                        <div className='flex flex-col p-6 gap-6 text-xl font-bold'>
                            <div>
                                A Cat Dad...
                            </div>
                            <img src='IMG_4816.jpg' className='rounded-xl object-cover aspect-square'></img>
                        </div>
                    </div>
                    {/* small-card 3 */}
                    <div className="w-28 shadow-2xl aspect-[5/5] absolute rounded-xl transition-all bg-slate-200
                    backdrop-blur-xl bg-opacity-60 bg-gradient-to-br from-blue-500 to-cyan-500
                group-hover:-translate-x-56 group-hover:translate-y-52 group-hover:-rotate-6">
                        <FaReact className='w-full h-full p-3 rounded-xl text-word animate-slowSpin ' />
                    </div>
                    {/* big-card 3: travelling */}
                    <div className="w-60 shadow-2xl aspect-[5/7] absolute rounded-xl bg-slate-300 transition-all -translate-x-2 -rotate-3
                    backdrop-blur-xl bg-opacity-60 border-2 border-slate-200
                group-hover:translate-x-24 group-hover:translate-y-1 group-hover:rotate-6">
                        <div className='flex flex-col p-6 gap-6 text-xl font-bold'>

                            <div className='flex gap-2'>
                                <div>
                                    {city}
                                </div>
                                <TypeAnimation
                                    sequence={[
                                        'HKG',
                                        4000,
                                        'MEL',
                                        4000,
                                        'LDN',
                                        4000
                                    ]}
                                    repeat={Infinity}
                                />
                            </div>
                            <Player src='https://assets9.lottiefiles.com/datafiles/AtGF4p7zA8LpP2R/data.json'
                                loop
                                autoplay
                            />
                        </div>
                    </div>
                    {/* small-card 4 */}
                    <div className="w-28 shadow-2xl opacity-0 aspect-[5/5] absolute rounded-xl transition-all bg-green-600
                    backdrop-blur-xl bg-opacity-60 
                group-hover:-translate-x-48 group-hover:-translate-y-48 group-hover:rotate-[9deg] group-hover:opacity-100">
                        <SiNodedotjs className='w-full h-full text-word p-3 rounded-xl animate-smallBounce' />
                    </div>
                    {/* big-card 4 */}
                    <div className="w-60 shadow-2xl aspect-[5/7] absolute rounded-xl bg-materialBlack transition-all translate-x-2 rotate-6
                border-2 border-slate-200 backdrop-blur-xl bg-opacity-60
                group-hover:translate-x-52 group-hover:translate-y-4 group-hover:rotate-[20deg] ">
                        <div className="flex flex-col gap-3 text-l text-word px-6 py-10 max-w-lg">
                            <div className='text-2xl font-bold'>Hi, I'm Gerald! <span className="inline-block animate-wave">👋</span></div>
                            <div>
                                A software engineer, skilled in frontend, full stack and web development. <br />
                            </div>
                            <div>
                                Big fan of creating sustainable, agile and performant solutions to problems.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Play