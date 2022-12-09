import { useState } from 'react'
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

  return (
    <div className="relative  w-full max-w scroll-smooth">
      <Navbar />
      <div className="flex flex-col gap-6  overflow-x-hidden 2xl:container 2xl:mx-auto">
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
