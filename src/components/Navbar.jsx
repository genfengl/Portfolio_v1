
const Navbar = () => {
    return (
        // Navbar
        <nav className="container mx-auto py-6 px-6 sticky top-0">
            {/* Flex container */}
            <div className="flex align-middle justify-between">
                {/* Brand */}
                <div className="font-bold text-2xl flex gap-2 items-center">
                    <img src="/logo.gif" className="h-6 w-6" />  GeraldLiu
                </div>
            </div>
        </nav>
    )
}
export default Navbar