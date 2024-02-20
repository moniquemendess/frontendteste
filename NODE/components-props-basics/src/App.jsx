//import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Title from "./components/Title";
import SubTittle from "./components/SubTitle";
import Image from "./components/Image";
import './App.css'

const App = ()=> {
  const nombre = "Haciendo el teste con props";
  const subtitle1 = "Haciendo el segundo teste con props";
  const subtitle2 = "Soy mas uno Teste Mona";

  return (
    <>
    <Title nombre={nombre}/>
    <SubTittle subtitle= {subtitle1}/>
    <SubTittle subtitle= {subtitle2}/>{/* Segunda vez usando SubTitle */}
    <Image/>
    </>
  )
}

export default App
