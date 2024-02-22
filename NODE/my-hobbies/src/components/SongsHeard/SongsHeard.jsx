/** Destruturing del Hobbing
 * Metodo map para acceder al obg array con todos los elementos 
 * Con el ul lista no ordenada + li de lista de itens 
 */


import { HOBBIES } from "../../Hobbies/Hobbies"

export const SongsHeard = () => {
    const {songsHeard }=HOBBIES;
  return (
    <div>
        <h2>My songs listened</h2>
        <ul>
            {songsHeard.map((song, index)=>(
                <li key={index}>
                  
                {song}
                </li>
            ))}
        </ul>
        
        </div>
  )
}
