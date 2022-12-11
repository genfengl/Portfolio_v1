import { useInView } from "react-intersection-observer"

const Projects = () => {
    const { ref: project1TitleRef, inView: project1TitleIsVisible } = useInView()
    const { ref: project2TitleRef, inView: project2TitleIsVisible } = useInView()
    const { ref: project3TitleRef, inView: project3TitleIsVisible } = useInView()
    const { ref: project4TitleRef, inView: project4TitleIsVisible } = useInView()

    return (
        <section id='projects'>
            {/* Flex Container */}
            <div className="container mx-auto flex flex-col px-3 py-16 gap-6">
                {/* Projects Title */}
                <div className="flex flex-col justify-center items-center pb-6">
                    <div className='text-center mt-0.5 bg-violet-500 h-4 w-48 translate-y-12'></div>
                    <div className="relative text-5xl text-center font-bold">Projects</div>
                </div>
                {/* Projects container */}
                <div className="grid grid-cols-[345px] justify-center items-center gap-2 place-content-center place-items-center 
                xs:grid-cols-[360px] md:grid-cols-[360px_360px] lg:grid-cols-[414px_414px]
                2xl:grid-cols-[450px_450px_450px]">
                    {/* ChatUp! */}
                    <div className="w-full aspect-square relative group">
                        <a href="https://chatup-56.netlify.app/" target='_blank'>
                            <div className="bg-[#7289da] text-word backdrop-blur-3xl bg-opacity-60 shadow-xl 
                            w-full aspect-square z-10 p-2 rounded-xl
                        flex items-center flex-col justify-center gap-1 absolute ease-in-out duration-300
                        group-hover:opacity-0">
                                <div ref={project1TitleRef} className={`text-3xl font-bold transition-all-all duration-1000 ease-in-out
                                ${project1TitleIsVisible ? 'opacity-100' : 'opacity-0 translate-y-6'}`}>
                                    ChatUp!
                                </div>
                                <div className={`text-xl transition-all-all duration-1000 delay-500 ease-in-out
                                ${project1TitleIsVisible ? 'opacity-100' : 'opacity-0 translate-y-6'}`}>
                                    Instant messenger app
                                </div>
                            </div>

                            <img src="/ChatUp_Screenshot.png"
                                className="absolute w-[310px] top-[1px] left-[1px] aspect-square rounded-xl
                        xs:w-[358px] lg:w-[412px] 2xl:w-[448px]"></img>
                        </a>
                    </div>

                    {/* NTMY */}
                    <div className="w-full aspect-square relative group">
                        <a href="https://butcherstorereactapp.fly.dev/" target='_blank'>
                            <div className="bg-[#C02433] backdrop-blur-3xl bg-opacity-60 shadow-xl w-full aspect-square z-10 p-2 rounded-xl text-word 
                        flex items-center flex-col justify-center gap-1 absolute ease-in-out duration-300
                        group-hover:opacity-0">
                                <div ref={project2TitleRef} className={`text-3xl font-bold transition-all-all duration-1000 ease-in-out
                                ${project2TitleIsVisible ? 'opacity-100' : 'opacity-0 translate-y-6'}`}>
                                    NTMY
                                </div>
                                <div className={`text-xl transition-all-all duration-1000 delay-500 ease-in-out
                                ${project2TitleIsVisible ? 'opacity-100' : 'opacity-0 translate-y-6'}`}>
                                    E-commerce Store
                                </div>
                            </div>
                            <img src="/NTMY_Screenshot.png"
                                className="absolute w-[310px] top-[1px] left-[1px] aspect-square rounded-xl
                        xs:w-[358px] lg:w-[412px] 2xl:w-[448px]"></img>
                        </a>
                    </div>
                    {/* Tic-Tac-Toe */}
                    <div className="w-full aspect-square relative group">
                        <a href="https://genfengl.github.io/TicTacToe/" target='_blank'>
                            <div className="bg-[#E83B2B] backdrop-blur-3xl bg-opacity-60 shadow-xl w-full aspect-square z-10 p-2 rounded-xl text-word 
                        flex items-center flex-col justify-center gap-1 absolute ease-in-out duration-300
                        group-hover:opacity-0">
                                <div ref={project3TitleRef} className={`text-3xl font-bold transition-all-all duration-1000 ease-in-out
                                ${project3TitleIsVisible ? 'opacity-100' : 'opacity-0 translate-y-6'}`}>
                                    Tic-Tac-Toe
                                </div>
                                <div className={`text-xl transition-all-all duration-1000 delay-500 ease-in-out
                                ${project3TitleIsVisible ? 'opacity-100' : 'opacity-0 translate-y-6'}`}>
                                    Webpage Game
                                </div>
                            </div>
                            <img src="/TicTacToe_Screenshot.png"
                                className="absolute w-[310px] top-[1px] left-[1px] aspect-square rounded-xl
                        xs:w-[358px] lg:w-[412px] 2xl:w-[448px]"></img>
                        </a>
                    </div>
                    {/* Tangerine's Cat Food Catalogue */}
                    <div className="w-full aspect-square relative group">
                        <a href="https://tangerinecatfoodcatalogue.onrender.com/catfoods" target='_blank'>
                            <div className="bg-[#0D6EFD] backdrop-blur-3xl bg-opacity-60 shadow-xl w-full aspect-square z-10 p-2 rounded-xl text-word 
                        flex items-center flex-col justify-center gap-1 absolute ease-in-out duration-300
                        group-hover:opacity-0">
                                <div ref={project4TitleRef} className={`text-3xl font-bold text-center transition-all-all duration-1000 ease-in-out
                                ${project4TitleIsVisible ? 'opacity-100' : 'opacity-0 translate-y-6'}`}>
                                    Tangerine's Cat Food Catalogue
                                </div>
                                <div className={`text-xl transition-all-all duration-1000 delay-500 ease-in-out
                                ${project4TitleIsVisible ? 'opacity-100' : 'opacity-0 translate-y-6'}`}>
                                    CRUD App
                                </div>
                            </div>
                            <img src="/TangerinesCatFoodCatalogue_Screenshot.png"
                                className="absolute w-[310px] top-[1px] left-[1px] aspect-square rounded-xl
                        xs:w-[358px] lg:w-[412px] 2xl:w-[448px]"></img>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects