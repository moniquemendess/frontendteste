//import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Title from "./components/Title";
import SubTittle from "./components/SubTitle";
import './App.css'

const App = ()=> {
  const nombre = "Haciendo el teste con props";
  const subtitle = "Haciendo el segundo teste con props"

  return (
    <>
    <Title nombre={nombre}/>
    <SubTittle subtitle= {subtitle}/>
    </>
  )
}

export default App
