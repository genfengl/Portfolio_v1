import React from 'react'
import { FaGithub, FaLinkedin, FaReact, FaPython } from 'react-icons/fa'
import { SiJavascript, SiNodedotjs } from 'react-icons/si'

const CardShow = () => {
  return (
    <div className='block'>
        {/* The card show */}
        <div className="col-start-1 col-end-2 row-start-2 row-end-3 place-items-center group -translate-x-9 translate-y-6 hidden transition-all">
                    {/* small-card 1 */}
                    <div className="w-28 shadow-2xl aspect-[5/5] absolute rounded-xl transition-all bg-blue-600
                    backdrop-blur-xl bg-opacity-60
                group-hover:translate-x-64 group-hover:-translate-y-40 group-hover:-rotate-6">
                        <FaPython className='w-full h-full rounded-xl p-3 text-yellow-300' />
                    </div>
                    {/* big-card 1 */}
                    <div className="w-60 shadow-2xl aspect-[5/7] absolute rounded-xl bg-blue-600 transition-all -translate-x-4 -rotate-1
                    backdrop-blur-xl bg-opacity-60 border-2 border-slate-200
                group-hover:-translate-x-40 group-hover:translate-y-3 group-hover:-rotate-[18deg] "></div>
                    {/* small-card 2 */}
                    <div className="w-28 shadow-2xl aspect-[5/5] absolute rounded-xl transition-all
                    backdrop-blur-xl bg-opacity-30
                group-hover:translate-x-56 group-hover:translate-y-60 group-hover:rotate-6">
                        <SiJavascript className='w-full h-full text-yellow-300 rounded-xl' />
                    </div>
                    {/* big-card 2 */}
                    <div className="w-60 shadow-2xl aspect-[5/7] absolute rounded-xl bg-blue-300 transition-all rotate-3
                    backdrop-blur-xl bg-opacity-60 border-2 border-slate-200
                group-hover:-translate-x-10 group-hover:translate-y-0 group-hover:-rotate-3"></div>
                    {/* small-card 3 */}
                    <div className="w-28 shadow-2xl aspect-[5/5] absolute rounded-xl transition-all bg-slate-200
                    backdrop-blur-xl bg-opacity-60 bg-gradient-to-br from-blue-500 to-cyan-500
                group-hover:-translate-x-56 group-hover:translate-y-52 group-hover:-rotate-6">
                        <FaReact className='w-full h-full p-3 rounded-xl text-word' />
                    </div>
                    {/* big-card 3 */}
                    <div className="w-60 shadow-2xl aspect-[5/7] absolute rounded-xl bg-slate-300 transition-all -translate-x-2 -rotate-3
                    backdrop-blur-xl bg-opacity-60 border-2 border-slate-200
                group-hover:translate-x-24 group-hover:translate-y-1 group-hover:rotate-6"></div>
                    {/* small-card 4 */}
                    <div className="w-28 shadow-2xl opacity-0 aspect-[5/5] absolute rounded-xl transition-all bg-green-600
                    backdrop-blur-xl bg-opacity-60 
                group-hover:-translate-x-48 group-hover:-translate-y-48 group-hover:rotate-[9deg] group-hover:opacity-100">
                        <SiNodedotjs className='w-full h-full text-word p-3 rounded-xl' />
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
  )
}

export default CardShow