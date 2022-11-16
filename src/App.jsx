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
    <div className="relative w-full max-w">
      <div className="bg-materialBlack text-word flex flex-col gap-6 overflow-hidden">
        <Navbar />
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
