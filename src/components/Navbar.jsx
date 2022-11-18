
const Navbar = () => {
    return (
        // Navbar
        <div className="py-6 px-6 sticky top-0 backdrop-blur-2xl z-20 sm:px-12 2xl:px-20 ">
            {/* Flex container */}
            <div className="flex justify-between sticky">
                {/* Brand */}
                <div className="font-bold text-2xl flex gap-2 items-center">
                    <img src="/logo.gif" className="h-6 w-6" />  GeraldLiu
                </div>
                {/* Navlinks */}
                <div className="justify-between gap-4 items-center text-lg hidden md:flex">
                    <div>
                        <a href="#skills">Skills</a>
                    </div>
                    <div>
                        <a href="#projects">Projects</a>
                    </div>
                    <div>
                        Resume
                    </div>
                    <div>
                        Contact
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar