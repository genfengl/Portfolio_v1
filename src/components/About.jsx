const About = () => {
    return (
        // About section
        <section id='about'>
            {/* Flex Container */}
            <div className="container flex flex-col px-6 py-16 max-w-lg sm:mx-6 sm:text-xl md:hidden">
                <div className="text-l font-bold leading-8 ">
                    Hello! <span className="inline-block animate-wave">👋</span>  <br />
                    I'm Gerald, a software engineer, skilled in frontend, full stack and web development. <br />
                    Big fan of creating sustainable, agile and performant solutions to problems.
                </div>
            </div>
        </section>
    )
}

export default About