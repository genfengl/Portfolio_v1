import { FaCode } from 'react-icons/fa'
import { BsCode, BsCodeSlash } from 'react-icons/bs'
import { RiCodeFill, RiCodeSSlashFill } from 'react-icons/ri'

const Hero = () => {
    return (
        // Hero section
        <section id='hero'>
            {/* Flex Container */}
            <div className="container flex flex-col px-6 py-16 sm:mx-auto lg:mx-14">
                <div className="text-4xl font-bold flex flex-wrap max-w-3xl sm:text-6xl dark:text-word">
                    <RiCodeFill className='inline-flex items-center mt-1' />&nbsp;
                    <span>Transforming&nbsp;</span>
                    <span className="animate-gradientAnimation text-transparent bg-clip-text 
                    bg-gradient-to-r 
                    from-pink-400 via-purple-400 to-indigo-500 bg-size-200">dreams&nbsp;</span>
                    and&nbsp;
                    <span className="animate-gradientAnimation text-transparent bg-clip-text 
                    bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-300 bg-size-200">ideas&nbsp;</span>
                    <span>into&nbsp;</span>
                    <span>real&nbsp;</span>
                    <span>world&nbsp;</span>
                    <span>applications&nbsp;</span>  
                    <span className='inline-flex animate-blink'>_</span>
                    &nbsp;<RiCodeSSlashFill className='inline-block items-center my-1' />
                </div>
            </div>
        </section>
    )
}

export default Hero