//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'

const App= () => {

  const x = 9;

  
  return (
    <>
     {x >= 6 && x < 12 ?(
      <p>Buenos días</p>
     ): x >= 13 && x <20? (
      <p>Buenas Tardes</p>
     ): (
      <p>Buenas Noches</p>
     )}
    </>
  )
}; 

export default App
