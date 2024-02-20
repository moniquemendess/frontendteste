//import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg' 'nodemailer/lib/mailer';}
import './App.css'
import { Header, Image, Main, Paragraph, SubTittle, Title } from './components';

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
    <Main>
    <SubTittle subtittle= {subTitle1}/>
    <SubTittle subtittle= {subTitle2}/>{/* Segunda vez usando SubTitle Y tienes que teneer el mismo nombre subtitle donde fue definido en h2*/}
    <Image/>
    <Paragraph h2Texto= {paragraphH2}/>
    </Main>
    </>
  )
}

export default App
