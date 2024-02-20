//import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Title from "./components/Title";
import SubTittle from "./components/SubTitle";
import Image from "./components/Image";
import Paragraph from "./components/Paragraph.jsx";
import Header from "./components/Header.jsx";
import './App.css'

const App = ()=> {
  const nombre = "Haciendo el teste con props";
  const subTitle1 = "Haciendo el segundo teste con props";
  const subTitle2 = "Soy mas uno Teste Mona";
  const paragraphH2 = "Soy un parafo h2";

  return (
    <>
    <Header>
    <Title nombre={nombre}/>
    </Header>
    <SubTittle subtitle= {subTitle1}/>
    <SubTittle subtitle= {subTitle2}/>{/* Segunda vez usando SubTitle Y tienes que teneer el mismo nombre subtitle donde fue definido en h2*/}
    <Image/>
    <Paragraph h2Texto= {paragraphH2}/>
    </>
  )
}

export default App
