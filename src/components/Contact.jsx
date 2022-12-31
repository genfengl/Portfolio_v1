import React from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import Email from './Email'

const Contact = () => {
    return (
        <div id="contact" className="container flex flex-col items-center mx-auto px-6 py-16 gap-3 dark:text-word">
            {/* Projects Title */}
            <div className="flex flex-col justify-center items-center pb-6">
                <div className='text-center mt-0.5 bg-blue-500 h-4 w-[11.5rem] translate-y-12'></div>
                <div className="relative text-5xl text-center font-bold">Contact</div>
            </div>
            <div className='flex flex-col items-center text-center font-bold leading-8 md:text-xl'>
                Thanks for visiting! <br />
                <div className='align-middle bg-blue-500 h-1 my-6 w-6 rounded-lg'></div>
                I'm currently looking for a junior position in a team of supportive developers. <br />
                I'm also open to freelance projects. <br />
                <div className='align-middle bg-blue-500 h-1 my-6 w-6 rounded-lg'></div>
                Feel free to leave me a message. I will get back to you as soon as possible.
            </div>
            <Email />          
        </div>
    )
}

export default Contact