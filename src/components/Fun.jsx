const Fun = () => {
    return (
        <section id="fun">
            {/* Flex container */}
            <div className="grid place-items-center h-96 group">
                {/* small-card 1 */}
                <div className="w-28 aspect-[5/7] absolute border-2 rounded-xl transition-all border-white
                group-hover:translate-x-64 group-hover:-translate-y-40 group-hover:-rotate-6"></div>
                {/* big-card 1 */}
                <div className="w-60 aspect-[5/7] absolute rounded-xl bg-blue-600 transition-all -translate-x-4 -rotate-1
                group-hover:-translate-x-40 group-hover:translate-y-3 group-hover:-rotate-[18deg] "></div>
                {/* small-card 2 */}
                <div className="w-28 aspect-[5/7] absolute border-2 rounded-xl transition-all border-white
                group-hover:translate-x-56 group-hover:translate-y-60 group-hover:rotate-6"></div>
                {/* big-card 2 */}
                <div className="w-60 aspect-[5/7] absolute rounded-xl bg-red-300 transition-all rotate-3
                group-hover:-translate-x-10 group-hover:translate-y-0 group-hover:-rotate-3"></div>
                {/* small-card 3 */}
                <div className="w-28 aspect-[5/7] absolute border-2 rounded-xl transition-all bg-white
                group-hover:-translate-x-56 group-hover:translate-y-52 group-hover:-rotate-6"></div>
                {/* big-card 3 */}
                <div className="w-60 aspect-[5/7] absolute rounded-xl bg-purple-400 transition-all -translate-x-2 -rotate-3
                group-hover:translate-x-24 group-hover:translate-y-1 group-hover:rotate-6"></div>
                {/* small-card 4 */}
                <div className="w-28 aspect-[5/7] absolute rounded-xl transition-all bg-green-300
                group-hover:-translate-x-48 group-hover:-translate-y-48 group-hover:rotate-[9deg]"></div>
                {/* big-card 4 */}
                <div className="w-60 aspect-[5/7] absolute rounded-xl bg-pink-400 transition-all translate-x-2 rotate-6
                group-hover:translate-x-52 group-hover:translate-y-4 group-hover:rotate-[20deg] "></div>
            </div>
        </section>

    )

}

export default Fun