//import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Title from './components/Title '
import './App.css'

const App = ()=> {
  const nombre = "Haciendo el teste con props";

  return (
    <>
    <Title nombre={nombre}/>
    </>
  )
}

export default App
