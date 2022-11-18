import { SiJavascript, SiNodedotjs } from 'react-icons/si'
import { FaReact, FaPython } from 'react-icons/fa'

const Fun = () => {
    return (
        <section id="fun">
            {/* Flex container */}
            <div className="grid place-items-center h-96 group">
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
                    <SiNodedotjs className='w-full h-full text-word p-3 rounded-xl'/>
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
        </section>

    )

}

export default Fun