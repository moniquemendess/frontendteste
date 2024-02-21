
import React, { useState } from 'react';
import './App.css'
useState


const App = () =>{
  /** 
   * Creamos una const para obtener el estado de los obj del array charactersMock 
   * Eso es un destruturing 
   * Re
  */
  const [characterList, setCharacterList] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      let data = await fetch(`https://rickandmortyapi.com/api/character/`).then(
        (res) => res.json()
      );
  
      setCharacterList(data.results);
      console.log("entro",data.results)
    }  )   ();
  }, []);

  /** <> fragmentos pai 
   * Recorer el array com map.
   * React nos obliga que pusimos el key para guardar los cada alemento del elemento por key={character.id} 
   * condicional si el status === es Alive que renderize solos ALive
   */
  return (
    <>
    
     {characterList.map((character) => (
       character.status === 'Alive' && (

        <div key={character.id}>
 
            <h2>Name:{character.name}</h2>
            <h2>status: {character.status}</h2>
           <img src={character.image} alt="Characters" />
        </div>
         ) ))
       }
     </>
   );
   };

export default App

/**
 * 
 */