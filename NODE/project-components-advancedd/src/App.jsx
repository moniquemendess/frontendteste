
import './App.css'
import { CharacterList } from './CharacterList/CharacterList';
import { Footer, Header, Image, ItemList, SubTittle, Tittle } from './components';


const App = () =>{
  const arrayList = ["Monique", "27 años", "brasileña", "Espanha-ES"]

  return (
   <>
   <Header>
   <Tittle text = "Hola soy a Mona"/>
   <SubTittle text= "Full stack developer"/>
   </Header>
    <main>
      <CharacterList>
      <ItemList itens = {arrayList}/>
      </CharacterList>
    </main>
   <Footer>
   <Image src="../public/12061f54ee55f6336c972ad01350b857.jpg" alt="Logo" width="200" height="200"/>
   </Footer>
   
   </>
   );
   };

export default App

