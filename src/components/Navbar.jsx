
const Navbar = () => {
    return (
        // Navbar
        <nav className="py-6 px-6 mt-6 sticky top-0 sm:mx-6">
            {/* Flex container */}
            <div className="flex justify-between">
                {/* Brand */}
                <div className="font-bold text-2xl flex gap-2 items-center">
                    <img src="/logo.gif" className="h-6 w-6" />  GeraldLiu
                </div>
                {/* Navlinks */}
                <div className="flex justify-between gap-4 items-center">

                    <div className="col-start-7 col-span-1 text-l">
                        Skills
                    </div>
                    <div className="col-start-8 col-span-1 ">
                        Projects
                    </div>
                    <div className="col-start-9 col-span-1">
                        Contact
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar