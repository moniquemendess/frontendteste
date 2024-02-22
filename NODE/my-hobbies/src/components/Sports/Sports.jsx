/**
 * Haciemos el destruturing con el Hobbies
 * Map para recorrer cada elemente del array con ul + li
 * <br /> es un salto de linea para que la pagina a lista tenga mas visibilidade 
 */

import { HOBBIES } from "../../Hobbies/Hobbies"

export const Sports = () => {

    const {sports} = HOBBIES;

  return (
    <div>
        <h2>My sports</h2>
        <ul>
    {sports.map((sport, index)=>(
        <li key={index}>

       <strong>Name:</strong>{sport.name}<br />

       <strong>indoor:</strong>{sport.indoor ? 'Yes': 'No'}<br />

       <strong>favorite Team:</strong>{sport.favoriteTeam}<br />
       <br />
        </li>
    ))}

        </ul>
    </div>
  )
}
