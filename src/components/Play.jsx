import { FaGithub, FaLinkedin } from 'react-icons/fa'


const Play = () => {
    return (
        <section id="play">
            <div className='container px-6
            grid grid-cols-2 grid-rows-2 col-start-1 col-end-2 row-span-1 gap-3 sm:mx-6'>
                
                {/* View Projects Hyperlink */}
                <a href="" className='group text-l font-bold align-middle py-6 text-word'>
                    View Projects
                    <div className='mt-0.5 bg-word h-0.5 w-14 transition-all group-hover:w-[6.6rem] group-hover:translate-x--2'></div>
                </a>

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
                {/* The sm-sized animated background  */}
                <div className="col-start-2 col-end-3 row-span-2 relative w-full max-w z-10 hidden sm:max-lg:inline-block">
                    <div className="absolute -top-1 left-20 w-48 h-48 bg-purple-300 rounded-full 
                    mix-blend-multiply filter blur-2xl opacity-60 animate-playSmall"></div>
                    <div className="absolute top-1 -left-2 w-48 h-48 bg-blue-300 rounded-full 
                    mix-blend-multiply filter blur-2xl opacity-60 animate-playSmall animation-delay-3000"></div>
                    <div className="absolute -bottom-7 left-12 w-48 h-48 bg-pink-300 rounded-full 
                    mix-blend-multiply filter blur-2xl opacity-60 animate-playSmall animation-delay-5000"></div>
                </div>
            </div>
        </section>
    )
}

export default Play