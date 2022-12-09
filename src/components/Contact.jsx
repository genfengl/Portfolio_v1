import React from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Contact = () => {
    return (
        <div className="container mx-auto flex flex-col px-3 py-16 gap-6">
            {/* Projects Title */}
            <div className="flex flex-col justify-center items-center pb-6">
                <div className='text-center mt-0.5 bg-blue-500 h-4 w-48 translate-y-12'></div>
                <div className="relative text-5xl text-center font-bold">Contact</div>
            </div>
            <div>
                <div>

                </div>
                <div className='text-2xl'>
                    Thanks for visiting my website! I'm currently looking for a junior position in a team of supportive developers.
                    I'm also open to freelance projects.
                    If you are interested, please send me an <a href="mailto:genfeng.liu@gmail.com">email <MdOutlineEmail className='inline text-blue-500' /></a> or
                    message me on <a href='https://www.linkedin.com/in/geraldlgf' target='_blank'>LinkedIn <FaLinkedin className='inline text-blue-500 mb-1' /></a>.
                </div>
                <div className='text-2xl'>
                    Also, feel free to check out my <a href='https://github.com/genfengl' target='_blank'>GitHub <FaGithub className='inline mb-1' /></a>.
                </div>
            </div>

        </div>
    )
}

export default Contact