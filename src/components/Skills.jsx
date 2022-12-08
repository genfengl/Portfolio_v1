import {
    FaReact, FaJsSquare, FaPython, FaLaptopCode,
    FaStackOverflow, FaHtml5, FaCss3Alt, FaBootstrap,
    FaGitAlt, FaNpm, FaNodeJs
} from 'react-icons/fa'
import {
    SiExpress, SiTailwindcss, SiBootstrap, SiFlask,
    SiPostgresql, SiMongodb, SiFirebase, SiNetlify,
    SiTypescript, SiMaterialui
} from 'react-icons/si';
import { Player } from '@lottiefiles/react-lottie-player';

const Skills = () => {
    return (
        <section id="skills">
            {/* Skills Title */}
            <div className="flex flex-col justify-center items-center pb-6">
                <div className='text-center mt-0.5 bg-pink-500 h-4 w-[7.7rem] translate-y-12'></div>
                <div className="relative text-5xl text-center font-bold"> Skills</div>
            </div>
            {/* Skills container */}
            <div className="grid grid-cols-[345px] justify-center items-center gap-2 place-content-center place-items-center 
                xs:grid-cols-[360px] md:grid-cols-[360px_360px] lg:grid-cols-[414px_414px] xl:grid-cols-[414px_414px_414px]
                2xl:grid-cols-[498px_498px_498px]">

                {/* Software Dev Section */}
                <div className='relative shadow-xl rounded-xl'>
                    <div className='absolute w-full aspect-square bg-gradient-to-b from-cyan-500 to-blue-500 rounded-xl z-[-10]'></div>
                    <div className="flex justify-center flex-col gap-6 p-6 rounded-xl w-full aspect-square
                    backdrop-blur-2xl bg-opacity-40 bg-slate-300 text-word
                    xs:max-lg:p-10 xl:p-10 2xl:px-20">
                        {/* Software Dev Title */}
                        <div className='text-3xl font-bold flex items-center gap-5 
                        sm:max-md:text-4xl 2xl:text-4xl'>
                            <div><FaStackOverflow className='text-5xl' /></div>
                            <div>
                                <div className='mt-0.5 bg-orange-400 h-2 w-32 translate-y-8
                                sm:max-md:translate-y-9 sm:max-md:w-[24rem] 2xl:translate-y-9
                                2xl:w-[9.7rem]'></div>
                                {/* Set span position to relative so that it will display on top of the div above */}
                                <span className='relative'>Software Development</span>
                            </div>
                        </div>
                        {/* Software Dev skills */}
                        <div className='grid grid-cols-2 grid-rows-2 gap-3 text-xl mb-3'>
                            {/* Javascript */}
                            <div className='flex items-center gap-3 text-base sm:max-md:text-xl xl:text-xl '>
                                <FaJsSquare className='text-3xl text-yellow-300' />
                                Javascript
                            </div>
                            {/* Python */}
                            <div className='flex items-center gap-3'>
                                <svg viewBox="0 0 128 128" className='w-[30px]'>
                                    <linearGradient id="python-original-a" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stop-color="#5A9FD4"></stop><stop offset="1" stop-color="#306998"></stop></linearGradient><linearGradient id="python-original-b" gradientUnits="userSpaceOnUse" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stop-color="#FFD43B"></stop><stop offset="1" stop-color="#FFE873"></stop></linearGradient><path fill="url(#python-original-a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" transform="translate(0 10.26)"></path><path fill="url(#python-original-b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z" transform="translate(0 10.26)"></path><radialGradient id="python-original-c" cx="1825.678" cy="444.45" r="26.743" gradientTransform="matrix(0 -.24 -1.055 0 532.979 557.576)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#B8B8B8" stop-opacity=".498"></stop><stop offset="1" stop-color="#7F7F7F" stop-opacity="0"></stop></radialGradient><path opacity=".444" fill="url(#python-original-c)" d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z"></path>
                                </svg>
                                Python
                            </div>
                            {/* Typescript */}
                            <div className='flex items-center gap-3 text-base sm:max-md:text-xl xl:text-xl'>
                                <div className='w-[30px] flex justify-center'>
                                    <svg viewBox="0 0 128 128" className='w-[28px]'>
                                        <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"></path><path data-name="original" fill="#007acc" d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"></path>
                                    </svg>
                                </div>
                                Typescript
                            </div>
                            {/* GIT */}
                            <div className='flex items-center gap-3'>
                                <FaGitAlt className='text-3xl text-red-500' />
                                GIT
                            </div>
                            {/* NPM */}
                            <div className='flex items-center gap-3'>
                                <FaNpm className='text-3xl text-rose-500' />
                                NPM
                            </div>
                            {/* Netlify */}
                            <div className='flex items-center gap-3'>
                                <SiNetlify className='text-3xl text-cyan-600' />
                                Netlify
                            </div>
                        </div>
                    </div>
                </div>
                {/* Frontend Dev Section */}
                <div className='relative shadow-xl rounded-xl'>
                    <div className='absolute w-full aspect-square bg-gradient-to-b from-cyan-500 to-blue-500 rounded-xl z-[-10]'></div>
                    <div className="flex justify-center flex-col gap-6 p-6 rounded-xl w-full aspect-square
                    backdrop-blur-2xl bg-opacity-40 bg-slate-300 text-word
                    xs:max-lg:p-10 xl:p-10 2xl:px-20">
                        {/* Frontend Dev Title */}
                        <div className='text-3xl font-bold flex items-center gap-5 sm:max-md:text-4xl
                        2xl:text-4xl'>
                            <div>
                                <FaReact className='text-5xl' />
                            </div>
                            <div>
                                <div className='mt-0.5 bg-sky-400 h-2 w-32 translate-y-8 
                                sm:max-md:translate-y-9 sm:max-md:w-[24rem] 2xl:translate-y-9
                                2xl:w-[9.6rem]'></div>
                                {/* Set span position to relative so that it will display on top of the div above */}
                                <span className='relative'>Frontend Development</span>
                            </div>
                        </div>
                        {/* Fronted Dev Skills */}
                        <div className='grid grid-cols-2 grid-rows-2 gap-3 text-xl mb-3'>
                            {/* React */}
                            <div className='flex items-center gap-3'>
                                <FaReact className='text-3xl text-sky-500' />
                                React.js
                            </div>
                            {/* HTML */}
                            <div className='flex items-center gap-3'>
                                <div>
                                    <FaHtml5 className='text-3xl text-orange-500' />
                                </div>
                                HTML
                            </div>
                            {/* CSS*/}
                            <div className='flex items-center gap-3'>
                                <FaCss3Alt className='text-3xl text-blue-500' />
                                CSS
                            </div>
                            {/* Tailwind */}
                            <div className='flex items-center gap-3'>
                                <SiTailwindcss className='text-3xl text-sky-400' />
                                Tailwind
                            </div>
                            {/* Bootstrap */}
                            <div className='flex items-center gap-3 text-base sm:max-md:text-xl xs:text-lg xl:text-xl'>
                                <SiBootstrap className='text-3xl text-violet-600' />
                                Bootstrap
                            </div>
                            {/* MaterialUI */}
                            <div className='flex items-center gap-3 text-base sm:max-md:text-xl xl:text-xl'>
                                <SiMaterialui className='text-3xl text-sky-600' />
                                MaterialUI
                            </div>
                        </div>
                    </div>

                </div>
                {/* Backend Dev Section */}
                <div className='relative shadow-xl rounded-xl'>
                    <div className='absolute w-full aspect-square bg-gradient-to-b from-cyan-500 to-blue-500 rounded-xl z-[-10]'></div>
                    <div className="flex justify-center flex-col gap-6 p-6 rounded-xl w-full aspect-square
                    backdrop-blur-2xl bg-opacity-40 bg-slate-300 text-word
                    xs:max-lg:p-10 xl:p-10 2xl:px-20">
                        {/* Backend Dev Title */}
                        <div className='text-3xl font-bold flex items-center gap-5 sm:max-md:text-4xl
                        2xl:text-4xl'>
                            <div><FaNodeJs className='text-5xl' /></div>
                            <div className=''>
                                <div className='mt-0.5 bg-emerald-400 h-2 w-[7.7rem] translate-y-8 
                                sm:max-md:translate-y-9 sm:max-md:w-[23.7rem] 2xl:translate-y-9
                                2xl:w-[9.3rem]'></div>
                                {/* Set span position to relative so that it will display on top of the div above */}
                                <span className='relative'>Backend Development</span>
                            </div>
                        </div>
                        {/* Backend Dev Skills */}
                        <div className='grid grid-cols-2 grid-rows-2 gap-3 text-xl mb-3'>
                            {/* Node.js */}
                            <div className='flex items-center gap-3'>
                                <FaNodeJs className='text-3xl text-green-600' />
                                Node.js
                            </div>
                            {/* Express.js */}
                            <div className='flex items-center gap-3 text-base sm:max-md:text-xl xl:text-xl'>
                                <SiExpress className='text-3xl' />
                                Express.js
                            </div>
                            {/* Flask */}
                            <div className='flex items-center gap-3'>
                                <SiFlask className='text-3xl' />
                                Flask
                            </div>
                            {/* PostgreSQL */}
                            <div className='flex items-center gap-3 text-[14px] sm:max-md:text-xl xl:text-xl'>
                                <SiPostgresql className='text-3xl text-blue-500' />
                                PostgreSQL
                            </div>
                            {/* MongoDB */}
                            <div className='flex items-center gap-3 text-lg sm:max-md:text-xl xl:text-xl'>
                                <SiMongodb className='text-3xl text-green-500' />
                                MongoDB
                            </div>
                            {/* Firebase */}
                            <div className='flex items-center gap-3 text-xl'>
                                <SiFirebase className='text-3xl text-amber-300' />
                                Firebase
                            </div>
                        </div>
                    </div>

                </div>
                {/* Learning Section */}
                <div className='relative shadow-xl rounded-xl'>
                    <div className='absolute w-full aspect-square bg-gradient-to-b from-cyan-500 to-blue-500 rounded-xl z-[-10]'></div>
                    <div className="flex justify-center items-center flex-col gap-6 p-[40px] rounded-xl w-full aspect-square
                    backdrop-blur-2xl bg-opacity-40 bg-slate-300 text-word">
                        {/* Learning Title */}
                        <div className='text-3xl font-bold flex items-center justify-center gap-5 '>
                            <div>
                                <Player
                                    src='https://assets1.lottiefiles.com/packages/lf20_lMdZ2NUeMB.json'
                                    className='player w-[60px]'
                                    loop
                                    autoplay
                                />
                            </div>
                            <div>
                                <div className='mt-0.5 bg-red-400 h-2 w-[9.8rem] translate-y-8 
                                sm:max-md:translate-y-9 sm:max-md:w-[23.7rem]'></div>
                                <span className='relative'>Never Stop Learning</span>
                            </div>

                        </div>
                        <div className='text-2xl'>
                            Because life never stops teaching.
                        </div>


                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills