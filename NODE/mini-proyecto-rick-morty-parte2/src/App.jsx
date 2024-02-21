
import './App.css'
import { CharacterList } from './components';

const App = () =>{

  /** <> fragmentos pai 
   * Recorer el array com map.
   * React nos obliga que pusimos el key para guardar los cada alemento del elemento por key={character.id} 
   * condicional si el status === es Alive que renderize solos ALive
   */
  return (
   

   <CharacterList/>
 
   );
   };

export default App

