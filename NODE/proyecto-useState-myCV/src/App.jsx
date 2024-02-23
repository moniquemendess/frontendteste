
import { useState } from 'react'
import './App.css'
useState
import { CV } from './CV/CV'
import { Hero } from './components/Hero/Hero';


const {hero, education, experience, languages, habilities} =CV;

const App=  () => {


  return (
    <>
    <Hero hero={hero}/>
    <About hero={hero}/>
    <Education education={education}/>
    <Experience experience={experience} />
    <More
        languages={languages}
        habilities={habilities}

	  />
    </>
  )
}

export default App
