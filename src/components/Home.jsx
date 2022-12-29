import React from 'react'
import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Play from './Play'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'

const Home = () => {
    const [showMobileNav, setShowMobileNav] = useState(false)
    const changeShowMobileNav = (input) => {
        setShowMobileNav(input)
    }

    // if (window.innerWidth > 768) {
    //     setShowMobileNav(false)
    // }

    const [theme, setTheme] = useState('dark')
    useEffect(() => {
        if (window.matchMedia('(preferes-color-scheme: dark)').matches) {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }, [])

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])

    const handleThemeSwitch = () => {
        if (theme === 'dark') {
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }
    return (
        <div className={`relative w-full max-w scroll-smooth ${showMobileNav ? '' : ''}   dark:bg-materialBlack`}>
            <Navbar handleThemeSwitch={handleThemeSwitch} theme={theme} changeShowMobileNav={changeShowMobileNav} showMobileNav={showMobileNav} />
            <div className={`flex flex-col gap-16 ${showMobileNav ? '' : ''} overflow-x-hidden 2xl:container 2xl:mx-auto`}>
                <Hero />
                <Play />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </div>
        </div>
    )
}

export default Home