import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Play from './components/Play'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Fun from './components/Fun'
import Contact from './components/Contact'
import CardShow from './components/CardShow'

function App() {
  const [theme, setTheme] = useState('dark')
  useEffect(() => {
    if (window.matchMedia('(preferes-color-scheme: dark)').matches) {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }, [])

  useEffect (() => {
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
    <div className="relative w-full max-w scroll-smooth dark:bg-materialBlack">
      <Navbar handleThemeSwitch={handleThemeSwitch} theme={theme}/>
      <div className="flex flex-col gap-16  overflow-x-hidden 2xl:container 2xl:mx-auto">
        <Hero />
        <Play />
        <About />
        <Skills />
        <Projects />
        <Contact />
        {/* <Footer /> */}
        {/* <Fun /> */}
      </div>
    </div>
  )
}

export default App
