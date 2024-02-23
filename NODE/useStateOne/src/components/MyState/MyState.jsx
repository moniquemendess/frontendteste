/**
 * Es un componente de tipo función que devuelve elementos de tipo react Element
 * Crear un estado para ese compontente de getter y setter para pintar o modificar el estado 
 * El Ziggy Stardust es el valor por defecto del estado
 * OnChance es el evento donde si for cambio el estado del myName, sera llamada la function
 * con un setName con novo valor de caampo
 * 
 */ 

import { useState } from "react"

export const MyState = ()=> {
    const [myName, setMyName] = useState("Monique Mendes Santos")
  return (
    <>
    <h1>{myName}</h1>
    <input 
    type="text" 
    value={myName}
    onChange={(e) => setMyName(e.target.value)}
    
    />
    
    </>
  )
}
