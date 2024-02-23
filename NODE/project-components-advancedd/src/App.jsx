


import { Footer, Header, Image, ItemList, SubTittle, Tittle } from './components';
import './App.css'; 
import { CharacterList } from './components/CharacterList/CharacterList';


const App = () =>{
  const arrayList = ["Monique", "27 años", "brasileña", "Espanha-ES"]

  return (
   <>
   <Header className= "header">
   <Tittle className= "tittle" text = "Hola soy a Mona" />
   <SubTittle className= "subtittle" text= "Full stack developer" />
   </Header>

    <main>
      <CharacterList className= "characterList">
      <ItemList itens = {arrayList}/>
      </CharacterList>
    </main>
    
   <Footer className= "Footer">
   <Image className="image" src="/12061f54ee55f6336c972ad01350b857.jpg" alt="Logo" width="200" height="200"/>
   </Footer>
   
   </>
   );
   };

export default App

