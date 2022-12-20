import React from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Contact = () => {
    return (
        <div id="contact" className="container flex flex-col px-6 py-16 max-w-xl sm:mx-6 lg:mx-14 dark:text-word">
            {/* Projects Title */}
            <div className="flex flex-col justify-center items-start pb-6">
                <div className='text-center mt-0.5 bg-blue-500 h-4 w-[11.5rem] translate-y-12'></div>
                <div className="relative text-5xl text-center font-bold">Contact</div>
            </div>
            <div className='flex w-full text-lg sm:text-xl'>
                <div>
                    <div className='font-bold leading-8'>
                        Thanks for visiting! <br />
                        I'm currently looking for a junior position in a team of supportive developers. <br />
                        I'm also open to freelance projects. <br />
                        If you are interested, please send me an <a href="mailto:genfeng.liu@gmail.com">email <MdOutlineEmail className='inline text-xl text-blue-500 transition-all hover:scale-125' /></a> or
                        message me on <a href='https://www.linkedin.com/in/geraldlgf' target='_blank'>LinkedIn <FaLinkedin className='inline text-xl text-blue-500 mb-1 transition-all hover:scale-125' /></a>.
                    </div>
                    <div className='font-bold leading-8'>
                        Also, feel free to check out my <a href='https://github.com/genfengl' target='_blank'>GitHub <FaGithub className='inline text-xl text-blue-500 mb-1 transition-all hover:scale-125' /></a>.
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact