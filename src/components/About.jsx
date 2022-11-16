const About = () => {
    return (
        // About section
        <section id='about'>
            {/* Flex Container */}
            <div className="container mx-auto flex flex-col">
                <div className="text-l font-bold px-6 py-16">
                    Hello! <div className="inline-block animate-wave">👋</div>  <br />
                    I'm Gerald, a software engineer, skilled in frontend, full stack and web development. <br />
                    Big fan of creating sustainable, agile and performant solutions to problems.
                </div>
            </div>
        </section>
    )
}

export default About