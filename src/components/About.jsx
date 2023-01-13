import { Player } from "@lottiefiles/react-lottie-player"
import { useState } from "react"
import { TypeAnimation } from "react-type-animation"

const About = () => {
    const [catPhotos, setCatPhotos] = useState(['tangy1.jpg', 'tangy2.jpg', 'tangy3.jpg', 'tangy4.jpg', 'tangy5.jpg', 'tangy6.jpg'])
    const [city, setCity] = useState("")
    const [activeCard, setActiveCard] = useState(0)
    const handleCardClick = () => {
        console.log('clicked')
        if (activeCard === 3) {
            setActiveCard(0)
        } else {
            setActiveCard(activeCard + 1)
        }
    }
    return (
        // About section
        <section id='about'>
            {/* Flex Container */}
            <div className="container flex justify-center relative px-6 py-16 my-6 mx-auto md:hidden dark:text-word">
                <button className="-translate-x-[120px] -translate-y-28"
                    onClick={() => handleCardClick()}>
                    {/* big-card 1: cat photos */}
                    <div className={`w-60 shadow-2xl aspect-[5/7] absolute rounded-xl bg-slate-200 transition-all ease-in-out duration-1000
                    backdrop-blur-xl bg-opacity-60 border-4  border-slate-200
                    ${activeCard === 3 ? 'scale-100 delay-300' : 'scale-0 translate-x-36'}
                    ${activeCard === 2 ? '-translate-x-36' : ''}`}>
                        <div className={`grid grid-cols-[116px_116px] grid-rows-[106px_106px_106px] rounded-xl transition-all`}>
                            {/* Square top left */}
                            <div className='relative'>
                                <img src={catPhotos[0]} className={`object-fill absolute left-0 aspect-square rounded-tl-xl 
                                animate-catPhotosCrossfade0 opacity-0`}></img>
                                <img src={catPhotos[1]} className='object-fill absolute left-0 aspect-square rounded-tl-xl 
                                animate-catPhotosCrossfade1 opacity-0 '></img>
                                <img src={catPhotos[3]} className='object-fill absolute left-0 aspect-square rounded-tl-xl  
                                animate-catPhotosCrossfade2 opacity-0'></img>
                                <img src={catPhotos[5]} className='object-fill absolute left-0 aspect-square rounded-tl-xl  
                                animate-catPhotosCrossfade3 opacity-0'></img>
                                <img src={catPhotos[4]} className='object-fill absolute left-0 aspect-square rounded-tl-xl  
                                animate-catPhotosCrossfade4 opacity-0'></img>
                                <img src={catPhotos[2]} className='object-fill absolute left-0 aspect-square rounded-tl-xl  
                                animate-catPhotosCrossfade5 opacity-0'></img>
                            </div>
                            {/* Square top right */}
                            <div className='relative'>
                                <img src={catPhotos[1]} className={`object-fill absolute left-0 aspect-square rounded-tr-xl 
                                animate-catPhotosCrossfade0 opacity-0`}></img>
                                <img src={catPhotos[3]} className='object-fill absolute left-0 aspect-square rounded-tr-xl 
                                animate-catPhotosCrossfade1 opacity-0 '></img>
                                <img src={catPhotos[5]} className='object-fill absolute left-0 aspect-square rounded-tr-xl  
                                animate-catPhotosCrossfade2 opacity-0'></img>
                                <img src={catPhotos[4]} className='object-fill absolute left-0 aspect-square rounded-tr-xl  
                                animate-catPhotosCrossfade3 opacity-0'></img>
                                <img src={catPhotos[2]} className='object-fill absolute left-0 aspect-square rounded-tr-xl  
                                animate-catPhotosCrossfade4 opacity-0'></img>
                                <img src={catPhotos[0]} className='object-fill absolute left-0 aspect-square rounded-tr-xl  
                                animate-catPhotosCrossfade5 opacity-0'></img>
                            </div>
                            {/* Square middle left */}
                            <div className='relative'>
                                <img src={catPhotos[2]} className={`object-fill absolute left-0 aspect-square 
                                animate-catPhotosCrossfade0 opacity-0`}></img>
                                <img src={catPhotos[0]} className='object-fill absolute left-0 aspect-square 
                                animate-catPhotosCrossfade1 opacity-0 '></img>
                                <img src={catPhotos[1]} className='object-fill absolute left-0 aspect-square  
                                animate-catPhotosCrossfade2 opacity-0'></img>
                                <img src={catPhotos[3]} className='object-fill absolute left-0 aspect-square  
                                animate-catPhotosCrossfade3 opacity-0'></img>
                                <img src={catPhotos[5]} className='object-fill absolute left-0 aspect-square  
                                animate-catPhotosCrossfade4 opacity-0'></img>
                                <img src={catPhotos[4]} className='object-fill absolute left-0 aspect-square  
                                animate-catPhotosCrossfade5 opacity-0'></img>
                            </div>
                            {/* Square middle right */}
                            <div className='relative'>
                                <img src={catPhotos[3]} className={`object-fill absolute left-0 aspect-square 
                                animate-catPhotosCrossfade0 opacity-0`}></img>
                                <img src={catPhotos[5]} className='object-fill absolute left-0 aspect-square 
                                animate-catPhotosCrossfade1 opacity-0 '></img>
                                <img src={catPhotos[4]} className='object-fill absolute left-0 aspect-square  
                                animate-catPhotosCrossfade2 opacity-0'></img>
                                <img src={catPhotos[2]} className='object-fill absolute left-0 aspect-square  
                                animate-catPhotosCrossfade3 opacity-0'></img>
                                <img src={catPhotos[0]} className='object-fill absolute left-0 aspect-square  
                                animate-catPhotosCrossfade4 opacity-0'></img>
                                <img src={catPhotos[1]} className='object-fill absolute left-0 aspect-square  
                                animate-catPhotosCrossfade5 opacity-0'></img>
                            </div>
                            {/* Square bottom left */}
                            <div className='relative'>
                                <img src={catPhotos[4]} className={`object-fill absolute left-0 aspect-square rounded-bl-xl 
                                animate-catPhotosCrossfade0 opacity-0`}></img>
                                <img src={catPhotos[2]} className='object-fill absolute left-0 aspect-square rounded-bl-xl 
                                animate-catPhotosCrossfade1 opacity-0 '></img>
                                <img src={catPhotos[0]} className='object-fill absolute left-0 aspect-square rounded-bl-xl  
                                animate-catPhotosCrossfade2 opacity-0'></img>
                                <img src={catPhotos[1]} className='object-fill absolute left-0 aspect-square rounded-bl-xl  
                                animate-catPhotosCrossfade3 opacity-0'></img>
                                <img src={catPhotos[3]} className='object-fill absolute left-0 aspect-square rounded-bl-xl  
                                animate-catPhotosCrossfade4 opacity-0'></img>
                                <img src={catPhotos[5]} className='object-fill absolute left-0 aspect-square rounded-bl-xl  
                                animate-catPhotosCrossfade5 opacity-0'></img>
                            </div>
                            {/* Square bottom right */}
                            <div className='relative'>
                                <img src={catPhotos[5]} className={`object-fill absolute left-0 aspect-square rounded-br-xl 
                                animate-catPhotosCrossfade0 opacity-0`}></img>
                                <img src={catPhotos[4]} className='object-fill absolute left-0 aspect-square rounded-br-xl 
                                animate-catPhotosCrossfade1 opacity-0 '></img>
                                <img src={catPhotos[2]} className='object-fill absolute left-0 aspect-square rounded-br-xl  
                                animate-catPhotosCrossfade2 opacity-0'></img>
                                <img src={catPhotos[0]} className='object-fill absolute left-0 aspect-square rounded-br-xl  
                                animate-catPhotosCrossfade3 opacity-0'></img>
                                <img src={catPhotos[1]} className='object-fill absolute left-0 aspect-square rounded-br-xl  
                                animate-catPhotosCrossfade4 opacity-0'></img>
                                <img src={catPhotos[3]} className='object-fill absolute left-0 aspect-square rounded-br-xl  
                                animate-catPhotosCrossfade5 opacity-0'></img>
                            </div>
                        </div>
                    </div>
                    {/* big-card 2 */}
                    <div className={`w-60 shadow-2xl aspect-[5/7] absolute rounded-xl bg-blue-300 transition-all ease-in-out duration-1000
                    backdrop-blur-xl bg-opacity-60  border-slate-200 text-left
                    ${activeCard === 2 ? 'scale-100 delay-300' : 'scale-0 translate-x-36'}
                    ${activeCard === 1 ? '-translate-x-36' : ''}`}>
                        <div className='flex flex-col p-6 gap-6 font-bold'>
                            <div>
                                A cat dad 🐈
                            </div>
                            <div className='relative'>
                                <img src={catPhotos[5]} className='absolute left-0 rounded-xl object-cover opacity-0 aspect-square animate-catPhotosCrossfade0'></img>
                                <img src={catPhotos[4]} className='absolute left-0 rounded-xl object-cover opacity-0 aspect-square animate-catPhotosCrossfade1'></img>
                                <img src={catPhotos[2]} className='absolute left-0 rounded-xl object-cover opacity-0 aspect-square animate-catPhotosCrossfade2'></img>
                                <img src={catPhotos[0]} className='absolute left-0 rounded-xl object-cover opacity-0 aspect-square animate-catPhotosCrossfade3'></img>
                                <img src={catPhotos[1]} className='absolute left-0 rounded-xl object-cover opacity-0 aspect-square animate-catPhotosCrossfade4'></img>
                                <img src={catPhotos[3]} className='absolute left-0 rounded-xl object-cover opacity-0 aspect-square animate-catPhotosCrossfade5'></img>

                            </div>

                        </div>
                    </div>
                    {/* big-card 3: travelling */}
                    <div className={`w-60 shadow-2xl aspect-[5/7] absolute rounded-xl bg-slate-300 transition-all ease-in-out duration-1000
                    backdrop-blur-xl bg-opacity-60 border-slate-200 
                    ${activeCard === 1 ? 'scale-100 delay-300' : 'scale-0 translate-x-36'}
                    ${activeCard === 0 ? '-translate-x-36' : ''}`}>
                        <div className='flex flex-col p-6 gap-6 text-base font-bold'>
                            <div className='flex gap-2'>
                                <div>
                                    {city}
                                </div>
                                <TypeAnimation
                                    sequence={[
                                        () => {
                                            setCity('🇭🇰')
                                        },
                                        'Hong Kong',
                                        4000,
                                        () => {
                                            setCity('🇦🇺')
                                        },
                                        'Melbourne',
                                        4000,
                                        () => {
                                            setCity('🇬🇧')
                                        },
                                        'London',
                                        4000
                                    ]}
                                    speed={10}

                                    repeat={Infinity}
                                />
                            </div>
                            <Player src='https://assets9.lottiefiles.com/datafiles/AtGF4p7zA8LpP2R/data.json'
                                loop
                                autoplay
                            />
                        </div>
                    </div>
                    {/* big-card 4 */}
                    <div className={`w-60 shadow-2xl aspect-[5/7] absolute rounded-xl bg-materialBlack transition-all ease-in-out duration-1000
                     border-slate-200 backdrop-blur-xl bg-opacity-60 text-left
                    ${activeCard === 0 ? 'scale-100 delay-300' : 'scale-0 translate-x-36'}
                    ${activeCard === 3 ? '-translate-x-36' : ''}`}>
                        <div className="flex flex-col gap-3 text-l text-word px-6 py-10 max-w-lg">
                            <div className='text-xl font-bold'>Hi, I'm Gerald! <span className="inline-block animate-wave">👋</span></div>
                            <div>
                                A software engineer, skilled in frontend, full stack and web development. <br />
                            </div>
                            <div>
                                Big fan of creating sustainable, agile and performant solutions to problems.
                            </div>
                        </div>
                    </div>
                </button>
            </div>
        </section>
    )
}

export default About