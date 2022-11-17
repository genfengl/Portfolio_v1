import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Play from './components/Play'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'

function App() {

  return (
    <div className="relative bg-materialBlack text-word w-full max-w scroll-smooth">
      <Navbar />
      <div className=" flex flex-col gap-6 overflow-y-visible overflow-x-hidden">
        
        <Hero />
        <Play />
        <About />
        <Skills />
        <Projects />
      </div>
    </div>
  )
}

export default App
