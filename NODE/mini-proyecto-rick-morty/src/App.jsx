
import React, { useState } from 'react';
import './App.css'
useState
/**
 * Creamos un array de objectos que simula los datos de la api
 */
const charactersMock = [{
  id:1,
  name:"Rick",
  status: "Alive",
},{
  id: 2,
  name:"Morty Smith",
  status: "Alive",
},

];

const App = () =>{
  /** 
   * Creamos una const para obtener el estado de los obj del array charactersMock 
   * Eso es un destruturing 
   * Re
  */
  const [characterList, setCharacterList] = <React className="useState"></React>(charactersMock);
 
  /** <> fragmentos pai 
   * Recorer el array com map.
   * React nos obliga que pusimos el key para guardar los cada alemento del elemento por key={character.id} 
   */
  return (
    <>
      {characterList.map((character)=> (
        <div key={character.id}>
          <h2>id:{character.id}</h2>
          <h2>name:{character.name}</h2>
          <h2>status:{character.status}</h2>
        </div>
      ))}
  
    </>
  );
};

export default App
