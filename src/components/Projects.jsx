const Projects = () => {
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
                xs:grid-cols-[360px] md:grid-cols-[360px_360px] lg:grid-cols-[414px_414px] xl:grid-cols-[414px_414px_414px]
                2xl:grid-cols-[498px_498px_498px]">
                    {/* ChatUp! */}

                    <div className="w-full aspect-square relative group">
                        <a href="https://chatup-56.netlify.app/" target='_blank'>
                            <div className="bg-[#7289da] w-full aspect-square z-10 p-2 rounded-xl text-word 
                        flex items-center flex-col justify-center gap-1 absolute ease-in-out duration-300
                        group-hover:opacity-0">
                                <div className="text-3xl font-bold">ChatUp!</div>
                                <div className="text-xl">Instant messenger app</div>
                            </div>

                            <img src="/ChatUp_Screenshot.png"
                                className="absolute w-[310px] top-[1px] left-[1px] aspect-square rounded-xl
                        xs:w-[358px] lg:w-[412px] 2xl:w-[496px]"></img>
                        </a>
                    </div>

                    {/* NTMY */}
                    <div className="w-full aspect-square relative group">
                        <a href="https://butcherstorereactapp.fly.dev/" target='_blank'>
                            <div className="bg-[#C02433] w-full aspect-square z-10 p-2 rounded-xl text-word 
                        flex items-center flex-col justify-center gap-1 absolute ease-in-out duration-300
                        group-hover:opacity-0">
                                <div className="text-3xl font-bold">NTMY</div>
                                <div className="text-xl">E-commerce Store</div>
                            </div>
                            <img src="/NTMY_Screenshot.png"
                                className="absolute w-[310px] top-[1px] left-[1px] aspect-square rounded-xl
                        xs:w-[358px] lg:w-[412px] 2xl:w-[496px]"></img>
                        </a>
                    </div>
                    {/* Tic-Tac-Toe */}
                    <div className="w-full aspect-square relative group">
                        <a href="https://genfengl.github.io/TicTacToe/" target='_blank'>
                            <div className="bg-[#E83B2B] w-full aspect-square z-10 p-2 rounded-xl text-word 
                        flex items-center flex-col justify-center gap-1 absolute ease-in-out duration-300
                        group-hover:opacity-0">
                                <div className="text-3xl font-bold">Tic-Tac-Toe</div>
                                <div className="text-xl">Webpage Game</div>
                            </div>
                            <img src="/TicTacToe_Screenshot.png"
                                className="absolute w-[310px] top-[1px] left-[1px] aspect-square rounded-xl
                        xs:w-[358px] lg:w-[412px] 2xl:w-[496px]"></img>
                        </a>
                    </div>
                    {/* Tangerine's Cat Food Catalogue */}
                    <div className="w-full aspect-square relative group">
                        <a href="https://tangerinecatfoodcatalogue.onrender.com/catfoods" target='_blank'>
                            <div className="bg-[#0D6EFD] w-full aspect-square z-10 p-2 rounded-xl text-word 
                        flex items-center flex-col justify-center gap-1 absolute ease-in-out duration-300
                        group-hover:opacity-0">
                                <div className="text-3xl font-bold text-center">Tangerine's Cat Food Catalogue</div>
                                <div className="text-xl">CRUD App</div>
                            </div>
                            <img src="/TangerinesCatFoodCatalogue_Screenshot.png"
                                className="absolute w-[310px] top-[1px] left-[1px] aspect-square rounded-xl
                        xs:w-[358px] lg:w-[412px] 2xl:w-[496px]"></img>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects