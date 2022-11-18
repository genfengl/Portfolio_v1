import { FaGithub, FaLinkedin, FaReact, FaPython } from 'react-icons/fa'
import { SiJavascript, SiNodedotjs } from 'react-icons/si'


const Play = () => {
    return (
        <section id="play">
            <div className='container px-6
            grid grid-cols-2 grid-rows-2 col-start-1 col-end-2 row-span-1 gap-3 
            sm:mx-6 lg:grid-cols-6 lg:grid-rows-6'>

                {/* View Projects Hyperlink */}
                <div className='py-6 align-middle'>
                    <a href="" className='group text-l font-bold text-word'>
                        View Projects
                        <div className='mt-0.5 bg-word h-0.5 w-14 transition-all group-hover:w-[6.6rem] group-hover:translate-x--2'></div>
                    </a>
                </div>

                {/* Button links to GitHub and LinkedIn */}
                <div className='flex flex-row gap-3 col-start-1 col-end-1 row-start-2 row-end-3'>
                    <a href="https://github.com/genfengl" className='flex items-center text-2xl'><FaGithub /></a>
                    <a href="https://linkedin.com/in/geraldlgf" className='flex items-center text-2xl'><FaLinkedin /></a>
                </div>

                {/* The animated background  */}
                <div className="col-start-2 col-end-3 row-span-2 relative w-full max-w z-10 sm:hidden">
                    <div className="absolute top-0 -right-4 w-36 h-36 bg-purple-300 rounded-full 
                    mix-blend-multiply filter blur-2xl opacity-60 animate-play "></div>
                    <div className="absolute top-2 -left-8 w-36 h-36 bg-blue-300 rounded-full 
                    mix-blend-multiply filter blur-2xl opacity-60 animate-play animation-delay-3000"></div>
                    <div className="absolute -bottom-8 right-2 w-36 h-36 bg-pink-300 rounded-full 
                    mix-blend-multiply filter blur-2xl opacity-60 animate-play animation-delay-5000"></div>
                </div>
                {/* The sm-md-sized animated background  */}
                <div className="col-start-2 col-end-3 row-span-2 relative w-full max-w z-10 hidden sm:max-lg:inline-block">
                    <div className="absolute -top-1 left-20 w-48 h-48 bg-purple-300 rounded-full 
                    mix-blend-multiply filter blur-2xl opacity-60 animate-playSmall"></div>
                    <div className="absolute top-1 -left-2 w-48 h-48 bg-blue-300 rounded-full 
                    mix-blend-multiply filter blur-2xl opacity-60 animate-playSmall animation-delay-3000"></div>
                    <div className="absolute -bottom-7 left-12 w-48 h-48 bg-pink-300 rounded-full 
                    mix-blend-multiply filter blur-2xl opacity-60 animate-playSmall animation-delay-5000"></div>
                </div>
                {/* The card show */}
                <div className="col-start-4 col-end-5 row-start-4 row-end-5 place-items-center group -translate-x-4 hidden transition-all lg:grid">
                    {/* small-card 1 */}
                    <div className="w-28 aspect-[5/5] absolute rounded-xl transition-all bg-blue-600
                group-hover:translate-x-64 group-hover:-translate-y-40 group-hover:-rotate-6">
                        <FaPython className='w-full h-full rounded-xl p-3 text-yellow-300' />
                    </div>
                    {/* big-card 1 */}
                    <div className="w-60 aspect-[5/7] absolute rounded-xl bg-blue-600 transition-all -translate-x-4 -rotate-1
                group-hover:-translate-x-40 group-hover:translate-y-3 group-hover:-rotate-[18deg] "></div>
                    {/* small-card 2 */}
                    <div className="w-28 aspect-[5/5] absolute rounded-xl transition-all 
                group-hover:translate-x-56 group-hover:translate-y-60 group-hover:rotate-6">
                        <SiJavascript className='w-full h-full text-yellow-300 rounded-xl' />
                    </div>
                    {/* big-card 2 */}
                    <div className="w-60 aspect-[5/7] absolute rounded-xl bg-blue-300 transition-all rotate-3
                group-hover:-translate-x-10 group-hover:translate-y-0 group-hover:-rotate-3"></div>
                    {/* small-card 3 */}
                    <div className="w-28 aspect-[5/5] absolute rounded-xl transition-all bg-sky-500
                group-hover:-translate-x-56 group-hover:translate-y-52 group-hover:-rotate-6">
                        <FaReact className='w-full h-full p-3 rounded-xl text-word' />
                    </div>
                    {/* big-card 3 */}
                    <div className="w-60 aspect-[5/7] absolute rounded-xl bg-slate-300 transition-all -translate-x-2 -rotate-3
                group-hover:translate-x-24 group-hover:translate-y-1 group-hover:rotate-6"></div>
                    {/* small-card 4 */}
                    <div className="w-28 aspect-[5/5] absolute rounded-xl transition-all bg-green-600
                group-hover:-translate-x-48 group-hover:-translate-y-48 group-hover:rotate-[9deg]">
                        <SiNodedotjs className='w-full h-full text-word p-3 rounded-xl' />
                    </div>
                    {/* big-card 4 */}
                    <div className="w-60 aspect-[5/7] absolute rounded-xl bg-materialBlack transition-all translate-x-2 rotate-6
                border-2 border-word
                group-hover:translate-x-52 group-hover:translate-y-4 group-hover:rotate-[20deg] ">
                        <div className="text-l text-word font-bold px-6 py-16 max-w-lg">
                            Hello! <span className="inline-block animate-wave">👋</span>  <br />
                            I'm Gerald, a software engineer, skilled in frontend, full stack and web development. <br />
                            Big fan of creating sustainable, agile and performant solutions to problems.
                        </div>
                    </div>
                </div>
                {/* The lg+-sized animated background  */}
                {/* <div className="col-start-2 col-end-3 row-span-2 relative w-full max-w z-10 hidden lg:inline-block">
                    <div className="absolute -top-1 left-20 w-60 h-60 bg-purple-300 rounded-full 
                    mix-blend-multiply filter blur-2xl opacity-60 animate-playSmall
                    "></div>
                    <div className="absolute top-1 -left-2 w-60 h-60 bg-blue-300 rounded-full 
                    mix-blend-multiply filter blur-2xl opacity-60 animate-playSmall animation-delay-3000
                    "></div>
                    <div className="absolute -bottom-7 left-12 w-60 h-60 bg-pink-300 rounded-full 
                    mix-blend-multiply filter blur-2xl opacity-60 animate-playSmall animation-delay-5000
                    "></div>
                </div> */}
            </div>
        </section>
    )
}

export default Play