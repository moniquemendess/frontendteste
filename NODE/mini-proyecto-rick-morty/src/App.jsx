
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
    }  )   ();
  }, []);

  /** <> fragmentos pai 
   * Recorer el array com map.
   * React nos obliga que pusimos el key para guardar los cada alemento del elemento por key={character.id} 
   */
  return (
    <>
      {characterList.map((character)=> (

        <div key={character.id}>
          
          <h2>name:{character.name}</h2>
         
          <img src={character.image} alt="Characters" />
        </div>
      ))}
  
    </>
  );
};

export default App
